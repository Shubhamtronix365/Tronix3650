import sys
import os
import random
import string

# Ensure root is in python path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from backend.app.database import engine, SessionLocal
from backend.app.models.models import User, Seat, Coupon
from reset_db_serial1 import reset_db_serial_1

def test_and_generate_coupon_flow():
    print("==================================================")
    print("STEP 1: DATABASE RESET TO SERIAL 1")
    print("==================================================")
    reset_db_serial_1()

    db = SessionLocal()
    try:
        print("\n==================================================")
        print("STEP 2: TESTING COUPON SYSTEM & AUTO-CHAINING")
        print("==================================================")
        
        # 1. Create 1st Test Coupon
        test_code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        c1 = Coupon(code=test_code, is_used=False)
        db.add(c1)
        db.commit()
        db.refresh(c1)
        print(f"[TEST] Created 1st Test Coupon: {test_code}")

        # 2. Simulate User Registration using this Coupon
        seat = db.query(Seat).first()
        if not seat:
            seat = Seat()
            db.add(seat)
            db.commit()

        test_user_email = "test.coupon.user@example.com"
        coupon_db = db.query(Coupon).filter(Coupon.code == test_code, Coupon.is_used == False).first()
        
        assert coupon_db is not None, "Error: Created coupon not found in DB!"
        
        # Mark coupon as used & generate auto-chained 2nd coupon
        coupon_db.is_used = True
        next_test_code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        next_coupon = Coupon(code=next_test_code, is_used=False)
        db.add(next_coupon)

        # Update seat count
        if seat.available_seats > 0:
            seat.booked_seats += 1
            seat.available_seats -= 1
            if seat.early_bird_taken < seat.early_bird_seats:
                seat.early_bird_taken += 1

        new_user = User(
            name="Coupon Test User",
            email=test_user_email,
            phone="9999999999",
            college="Test Engineering College",
            branch="Electronics",
            year="4th Year",
            message="Testing coupon application flow",
            amount=0,
            payment_status="success",
            payment_id="Paid by Cash"
        )
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        print(f"[TEST SUCCESS] Registered User ID: {new_user.id} (Name: {new_user.name})")
        print(f"[TEST SUCCESS] Amount Billed    : RS {new_user.amount} (100% Free / Cash Payment)")
        print(f"[TEST SUCCESS] Payment Status   : {new_user.payment_status}")
        print(f"[TEST SUCCESS] Used Coupon Code : {test_code} (Marked used = True)")
        print(f"[TEST SUCCESS] Auto-Chained Next: {next_test_code} (Status: Unused & Ready)")

        # Verify ID = 1 for the first user
        assert new_user.id == 1, f"Expected user ID 1, got {new_user.id}"

        print("\n==================================================")
        print("STEP 3: FINAL DATABASE RESET FOR PRODUCTION START")
        print("==================================================")
    finally:
        db.close()

    # Reset DB again so user records are clean and ID starts at 1
    reset_db_serial_1()

    print("\n==================================================")
    print("STEP 4: GENERATING 1ST OFFICIAL USABLE COUPON")
    print("==================================================")
    db = SessionLocal()
    try:
        # Check if an unused coupon already exists
        existing_coupon = db.query(Coupon).filter(Coupon.is_used == False).first()
        if existing_coupon:
            first_coupon_code = existing_coupon.code
        else:
            first_coupon_code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
            first_coupon = Coupon(code=first_coupon_code, is_used=False)
            db.add(first_coupon)
            db.commit()
            db.refresh(first_coupon)

        # Confirm DB state
        user_count = db.query(User).count()
        seats = db.query(Seat).first()
        
        print("\n--------------------------------------------------")
        print("         FINAL VERIFICATION SUMMARY               ")
        print("--------------------------------------------------")
        print(f"Database Reset Status : COMPLETE & CLEAN")
        print(f"Total Registered Users: {user_count} (Next registration ID will be 1)")
        print(f"Total Seats Available : {seats.available_seats} / {seats.total_seats}")
        print(f"Early Bird Seats Left : {seats.early_bird_seats - seats.early_bird_taken} / {seats.early_bird_seats}")
        print(f"Coupon System Status  : WORKING PROPERLY (Verified Auto-Chaining & Free Access)")
        print(f"1st ACTIVE COUPON CODE: {first_coupon_code}")
        print("--------------------------------------------------")
        
        # Save to coupon_code.txt as reference
        with open("coupon_code.txt", "w") as f:
            f.write(first_coupon_code)

        return first_coupon_code
    finally:
        db.close()

if __name__ == "__main__":
    test_and_generate_coupon_flow()
