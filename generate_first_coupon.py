from backend.app.database import SessionLocal, engine
from backend.app.models.models import Coupon, Seat, User
import random, string

def generate_and_verify_coupon():
    db = SessionLocal()
    try:
        print("Checking Database for Active Unused Coupons...")
        existing_coupon = db.query(Coupon).filter(Coupon.is_used == False).first()
        
        if existing_coupon:
            code = existing_coupon.code
            print(f"[SUCCESS] Active Unused Coupon already exists: {code}")
        else:
            # Generate 1st Coupon
            code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
            coupon = Coupon(code=code, is_used=False)
            db.add(coupon)
            db.commit()
            db.refresh(coupon)
            print(f"[SUCCESS] Created 1st Active Coupon Code: {code}")
            
        # Verify coupon details
        coupon_in_db = db.query(Coupon).filter(Coupon.code == code).first()
        print("\n--- Coupon Verification Status ---")
        print(f"Coupon Code  : {coupon_in_db.code}")
        print(f"Status       : AVAILABLE (UNUSED)")
        print(f"Created At   : {coupon_in_db.created_at}")
        print("----------------------------------")
        print(f"\n[READY] 1st COUPON CODE IS READY TO USE: {code}")
        return code
        
    except Exception as e:
        print(f"[ERROR] Error generating coupon: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    generate_and_verify_coupon()
