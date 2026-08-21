from sqlalchemy import text
from app.database import engine

def fresh_reset():
    with engine.connect() as connection:
        dialect = engine.dialect.name
        print(f"Starting fresh database reset on {dialect}...")
        
        # 1. Truncate & restart identity sequence
        if dialect == "postgresql":
            connection.execute(text("TRUNCATE TABLE users RESTART IDENTITY CASCADE;"))
            connection.execute(text("TRUNCATE TABLE coupons RESTART IDENTITY CASCADE;"))
            connection.execute(text("TRUNCATE TABLE seats RESTART IDENTITY CASCADE;"))
        elif dialect == "sqlite":
            connection.execute(text("DELETE FROM users;"))
            connection.execute(text("DELETE FROM coupons;"))
            connection.execute(text("DELETE FROM seats;"))
            try:
                connection.execute(text("DELETE FROM sqlite_sequence WHERE name IN ('users', 'coupons', 'seats');"))
            except Exception:
                pass
        else:
            connection.execute(text("SET FOREIGN_KEY_CHECKS = 0;"))
            connection.execute(text("TRUNCATE TABLE users;"))
            connection.execute(text("TRUNCATE TABLE coupons;"))
            connection.execute(text("TRUNCATE TABLE seats;"))
            connection.execute(text("SET FOREIGN_KEY_CHECKS = 1;"))

        # 2. Reset seats counter back to initial state
        connection.execute(text("""
            INSERT INTO seats (event_name, total_seats, booked_seats, available_seats, early_bird_seats, early_bird_taken)
            VALUES ('45-Day Embedded & IoT Internship', 150, 0, 150, 10, 0)
        """))
        
        connection.commit()
        print("\nFresh database reset complete! Next registration serial / ID starts from 1.")

if __name__ == "__main__":
    fresh_reset()
