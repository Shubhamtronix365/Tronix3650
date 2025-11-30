from sqlalchemy import create_engine, text
from app.database import DATABASE_URL

def reset_seats():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        # Delete all rows in seats table
        connection.execute(text("DELETE FROM seats"))
        # Insert new default row
        connection.execute(text("INSERT INTO seats (total_seats, booked_seats, available_seats, early_bird_seats, early_bird_taken, event_name, last_updated) VALUES (150, 0, 150, 10, 0, '40-Day Embedded & IoT Internship', NOW())"))
        connection.commit()
    print("Seats have been reset to 150.")

if __name__ == "__main__":
    reset_seats()
