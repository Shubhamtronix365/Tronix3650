from backend.app.database import engine
from sqlalchemy import text

def insert_seats():
    with engine.connect() as conn:
        conn.execute(text("DELETE FROM seats"))
        conn.execute(text("""
            INSERT INTO seats (event_name, total_seats, booked_seats, available_seats, early_bird_seats, early_bird_taken)
            VALUES ('45-Day Embedded & IoT Internship', 150, 0, 150, 10, 0)
        """))
        conn.commit()
        res = conn.execute(text("SELECT id, event_name, total_seats, booked_seats FROM seats")).fetchall()
        print("[VERIFIED DB SEATS ROW]:", res)

if __name__ == "__main__":
    insert_seats()
