from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import SQLAlchemyError
import logging

logger = logging.getLogger(__name__)
from sqlalchemy.orm import Session
from ..database import get_db
from ..models.models import Seat, get_current_price
from fastapi.responses import StreamingResponse
import asyncio
import json

router = APIRouter()

@router.get("/available")
def get_seats(db: Session = Depends(get_db)):
    try:
        seat = db.query(Seat).first()
        if not seat:
            # Initialize default
            seat = Seat(total_seats=150, available_seats=150, early_bird_seats=10, early_bird_taken=0)
            db.add(seat)
            db.commit()
            db.refresh(seat)
    except SQLAlchemyError as e:
        logger.error(f"Database error fetching seats: {str(e)}")
        raise HTTPException(status_code=500, detail="Could not fetch seat availability")
        
    price_info = get_current_price(seat.early_bird_taken, seat.early_bird_seats)
    
    return {
        "total_seats": seat.total_seats,
        "booked_seats": seat.booked_seats,
        "available_seats": seat.available_seats,
        "early_bird_available": max(0, seat.early_bird_seats - seat.early_bird_taken),
        "price_info": price_info
    }

@router.get("/stream")
async def seat_stream(db: Session = Depends(get_db)):
    async def event_generator():
        while True:
            try:
                db.expire_all()
                seat = db.query(Seat).first()
                if seat:
                    price_info = get_current_price(seat.early_bird_taken, seat.early_bird_seats)
                    data = {
                        "total_seats": seat.total_seats,
                        "booked_seats": seat.booked_seats,
                        "available_seats": seat.available_seats,
                        "early_bird_available": max(0, seat.early_bird_seats - seat.early_bird_taken),
                        "price_info": price_info
                    }
                    yield f"data: {json.dumps(data)}\n\n"
            except Exception as e:
                logger.error(f"Error in seat stream: {str(e)}")
                yield f"event: error\ndata: {json.dumps({'error': 'Internal Server Error'})}\n\n"
                await asyncio.sleep(5)
            
            await asyncio.sleep(2)

    return StreamingResponse(event_generator(), media_type="text/event-stream")
