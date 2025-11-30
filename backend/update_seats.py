from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import DATABASE_URL, Base
from app.models.models import Seat

def update_seats():
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = SessionLocal()
    
    # Ensure table exists
    Base.metadata.create_all(bind=engine)
    
    seat = db.query(Seat).first()
    if not seat:
        print("No seat record found. Creating one...")
        seat = Seat(total_seats=150, available_seats=150)
        db.add(seat)
        db.commit()
        db.refresh(seat)
    
    print(f"Current Total Seats: {seat.total_seats}")
    print(f"Current Booked Seats: {seat.booked_seats}")
    print(f"Current Available Seats: {seat.available_seats}")
    
    try:
        new_total = int(input("\nEnter new total seats: "))
        
        seat.total_seats = new_total
        seat.booked_seats = 0
        seat.available_seats = new_total
        
        db.commit()
        print(f"\nSuccess! Counter RESET.")
        print(f"Total Seats: {new_total}")
        print(f"Booked Seats: 0")
        print(f"Available Seats: {new_total}")
        print("The website will update automatically in a few seconds.")
        
    except ValueError:
        print("Invalid input. Please enter a number.")

if __name__ == "__main__":
    update_seats()
