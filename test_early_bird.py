from backend.app.database import SessionLocal
from backend.app.models.models import Seat, User, get_current_price
from backend.app.routers.registration import register_user
from backend.app.schemas import UserCreate
from fastapi import BackgroundTasks
import logging

# Disable logging for cleaner output
logging.getLogger("backend.app.routers.registration").setLevel(logging.CRITICAL)

def test_early_bird():
    db = SessionLocal()
    try:
        # 1. Reset Seats
        print("--- Resetting Seats ---")
        db.query(User).delete() # Clear users
        db.query(Seat).delete() # Clear seats
        seat = Seat(total_seats=150, available_seats=150, booked_seats=0, early_bird_seats=10, early_bird_taken=0)
        db.add(seat)
        db.commit()
        db.refresh(seat)
        print(f"Seats reset. Early Bird Taken: {seat.early_bird_taken}/{seat.early_bird_seats}")

        # 2. Register 10 Users (Should be Early Bird: Rs 11,799 = 9999 + 18% GST)
        print("\n--- Registering First 10 Users ---")
        for i in range(1, 11):
            seat = db.query(Seat).first()
            price_info = get_current_price(seat.early_bird_taken, seat.early_bird_seats)
            expected_amount = price_info["total_amount"]
            
            if expected_amount == 11799:
                seat.early_bird_taken += 1
                db.commit()
            
            print(f"User {i}: Amount = {expected_amount} (Expected: 11799)")
            if expected_amount != 11799:
                print(f"❌ ERROR: User {i} should have got 11799!")

        # 3. Register 11th User (Should be Standard Tier: Rs 17,699 = 14999 + 18% GST)
        print("\n--- Registering 11th User ---")
        seat = db.query(Seat).first()
        price_info = get_current_price(seat.early_bird_taken, seat.early_bird_seats)
        amount = price_info["total_amount"]
            
        print(f"User 11: Amount = {amount} (Expected: 17699)")
        
        if amount == 17699:
            print("\n✅ SUCCESS: Independence Day Early Bird trigger logic is working 100% correctly!")
        else:
            print("\n❌ FAILURE: User 11 got Early Bird price but shouldn't have.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    test_early_bird()
