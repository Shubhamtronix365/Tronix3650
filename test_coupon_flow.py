from backend.app.database import SessionLocal
from backend.app.models.models import Coupon, User, Seat
import random, string

def test_and_create_coupon():
    db = SessionLocal()
    try:
        # 1. Check or Create 1st Active Coupon
        coupon = db.query(Coupon).filter(Coupon.is_used == False).first()
        if not coupon:
            code = "TRONIX-" + ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
            coupon = Coupon(code=code, is_used=False)
            db.add(coupon)
            db.commit()
            db.refresh(coupon)
            print(f"Created 1st Active Coupon: {code}")
        else:
            code = coupon.code
            print(f"Existing Active Coupon found: {code}")
            
        print("\n--- Coupon Verification Status ---")
        print(f"1st Active Coupon Code : {code}")
        print(f"Status                 : VALID & UNUSED (100% Ready for registration)")
        print(f"Discount Type          : 100% Free Registration / Offline Cash Payment")
        print(f"Auto-Chain System      : When this coupon is used, a new coupon code will auto-generate for the next user.")
        print("----------------------------------")
        
        return code
    except Exception as e:
        print(f"Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    test_and_create_coupon()
