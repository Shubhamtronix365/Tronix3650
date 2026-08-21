from backend.app.database import engine
from sqlalchemy import text

def update_event_name():
    with engine.connect() as connection:
        connection.execute(text("UPDATE seats SET event_name = '45-Day Embedded & IoT Internship'"))
        connection.commit()
        print("[SUCCESS] Updated event_name in seats table to: 45-Day Embedded & IoT Internship")

if __name__ == "__main__":
    update_event_name()
