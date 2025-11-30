from sqlalchemy import create_engine, text
from app.database import DATABASE_URL

def fill_early_bird():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        # Set early_bird_taken to 10 (Full)
        connection.execute(text("UPDATE seats SET early_bird_taken = 10"))
        connection.commit()
    print("Early Bird seats are now FULL (10/10). Next registration should be ₹10,000.")

if __name__ == "__main__":
    fill_early_bird()
