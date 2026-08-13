from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey
from datetime import datetime, timedelta
from ..database import Base

def get_ist_time():
    return datetime.utcnow() + timedelta(hours=5, minutes=30)

# Independence Day Special Offer Deadline: 15th August 2026, 11:59:59 PM IST
OFFER_DEADLINE = datetime(2026, 8, 15, 23, 59, 59)

def get_current_price(early_bird_taken: int, early_bird_seats: int) -> dict:
    now = get_ist_time()
    is_time_valid = now <= OFFER_DEADLINE
    is_seats_valid = early_bird_taken < early_bird_seats
    
    if is_time_valid and is_seats_valid:
        base_price = 9999
        gst = int(round(9999 * 0.18))  # 1800
        total_amount = 9999 + gst      # 11799
        is_early_bird = True
    else:
        base_price = 14999
        gst = int(round(14999 * 0.18)) # 2700
        total_amount = 14999 + gst     # 17699
        is_early_bird = False
        
    return {
        "base_price": base_price,
        "gst": gst,
        "total_amount": total_amount,
        "is_early_bird": is_early_bird,
        "offer_deadline": OFFER_DEADLINE.strftime("%Y-%m-%d %H:%M:%S")
    }

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False, index=True)
    phone = Column(String(20), nullable=False)
    college = Column(String(200), nullable=True)
    branch = Column(String(100), nullable=True)
    year = Column(String(20), nullable=True)
    message = Column(Text, nullable=True)
    registration_date = Column(DateTime, default=get_ist_time)
    payment_id = Column(String(100), nullable=True)
    razorpay_order_id = Column(String(100), nullable=True)
    payment_status = Column(String(20), default="pending")  # pending, success, failed
    amount = Column(Integer, nullable=False)  # Total amount including 18% GST (11799 or 17699)
    created_at = Column(DateTime, default=get_ist_time)
    updated_at = Column(DateTime, default=get_ist_time, onupdate=get_ist_time)

class Seat(Base):
    __tablename__ = "seats"
    
    id = Column(Integer, primary_key=True, index=True)
    event_name = Column(String(200), default="40-Day Embedded & IoT Internship")
    total_seats = Column(Integer, default=150)
    booked_seats = Column(Integer, default=0)
    available_seats = Column(Integer, default=150)
    early_bird_seats = Column(Integer, default=10)
    early_bird_taken = Column(Integer, default=0)
    last_updated = Column(DateTime, default=get_ist_time, onupdate=get_ist_time)

class Coupon(Base):
    __tablename__ = "coupons"
    
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(50), unique=True, index=True)
    is_used = Column(Boolean, default=False)
    created_at = Column(DateTime, default=get_ist_time)
