from backend.app.database import SessionLocal
from backend.app.models.models import Seat

def set_seats_to_zero():
    db = SessionLocal()
    try:
        seat = db.query(Seat).first()
        if seat:
            print(f"Current Available Seats: {seat.available_seats}")
            seat.available_seats = 0
            seat.booked_seats = seat.total_seats
            db.commit()
            print("Successfully set available seats to 0.")
        else:
            print("No seat record found. Creating one with 0 seats.")
            seat = Seat(total_seats=150, available_seats=0, booked_seats=150)
            db.add(seat)
            db.commit()
            print("Created new seat record with 0 available seats.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    set_seats_to_zero()
