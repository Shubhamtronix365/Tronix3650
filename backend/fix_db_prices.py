from sqlalchemy import create_engine, text
from app.database import DATABASE_URL

def sync_pending_users():
    engine = create_engine(DATABASE_URL)
    with engine.connect() as connection:
        print("Syncing pending user registration amounts to active server tier...")
        # Since early_bird_taken >= 10 (currently 10 taken), set all pending unpaid registrations to standard tier 17699
        result = connection.execute(text(
            "UPDATE users SET amount = 17699 WHERE payment_status = 'pending'"
        ))
        connection.commit()
        print(f"Updated {result.rowcount} pending test registrations to Standard Tier Rs 17,699.")

if __name__ == "__main__":
    sync_pending_users()
