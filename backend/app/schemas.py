from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    college: Optional[str] = None
    branch: Optional[str] = None
    year: Optional[str] = None
    message: Optional[str] = None

class UserCreate(UserBase):
    coupon_code: Optional[str] = None

class UserResponse(UserBase):
    id: int
    registration_date: datetime
    payment_status: str
    amount: int
    razorpay_order_id: Optional[str] = None

    class Config:
        orm_mode = True

class PaymentCreate(BaseModel):
    registration_id: int
    amount: int

class PaymentVerify(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str

class SeatResponse(BaseModel):
    total_seats: int
    booked_seats: int
    available_seats: int
    early_bird_available: int
