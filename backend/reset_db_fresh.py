from sqlalchemy import create_engine, text
from app.database import DATABASE_URL

def fresh_reset():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        print("Starting fresh database reset...")
        
        # 1. Delete all users
        connection.execute(text("DELETE FROM users"))
        print("1. All existing user registrations deleted.")
        
        # 2. Reset coupons if needed
        connection.execute(text("DELETE FROM coupons"))
        print("2. All coupons reset.")
        
        # 3. Reset seats counter back to initial state
        connection.execute(text("DELETE FROM seats"))
        connection.execute(text("""
            INSERT INTO seats (event_name, total_seats, booked_seats, available_seats, early_bird_seats, early_bird_taken, last_updated)
            VALUES ('40-Day Embedded & IoT Internship', 150, 0, 150, 10, 0, NOW())
        """))
        print("3. Seat counters reset: Total 150, Available 150, Booked 0, Early Bird 10 (0 Taken).")
        
        connection.commit()
        print("\nFresh database reset complete! The system is ready for new registrations.")

if __name__ == "__main__":
    fresh_reset()
