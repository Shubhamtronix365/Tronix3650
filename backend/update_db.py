from sqlalchemy import create_engine, text
from app.database import DATABASE_URL

def update_schema():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        # We need to recreate the users table to add new columns
        # WARNING: This deletes existing user data!
        print("Dropping users table...")
        connection.execute(text("DROP TABLE IF EXISTS users CASCADE"))
        
        print("Recreating users table with new schema...")
        # The table will be recreated automatically by FastAPI on restart because of:
        # Base.metadata.create_all(bind=engine) in main.py
        # But we can also force it here if we imported Base, but letting main.py do it is safer/easier
        # provided the server restarts.
        
        # Alternatively, we can manually add columns if we want to preserve data, 
        # but for dev/testing, dropping is cleaner.
        
        connection.commit()
    print("Users table dropped. Please restart the backend server to recreate it with new columns.")

if __name__ == "__main__":
    update_schema()
