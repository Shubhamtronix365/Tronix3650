from backend.app.database import SessionLocal
from backend.app.models.models import Seat

def reset_seats():
    db = SessionLocal()
    try:
        seat = db.query(Seat).first()
        if seat:
            print(f"Current Available Seats: {seat.available_seats}")
            seat.total_seats = 150
            seat.available_seats = 150
            seat.booked_seats = 0
            db.commit()
            print("Successfully reset available seats to 150.")
        else:
            print("No seat record found. Creating one with 150 seats.")
            seat = Seat(total_seats=150, available_seats=150, booked_seats=0)
            db.add(seat)
            db.commit()
            print("Created new seat record with 150 available seats.")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    reset_seats()
