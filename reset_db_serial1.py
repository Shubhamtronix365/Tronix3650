from sqlalchemy import text
from backend.app.database import engine

def reset_db_serial_1():
    print("Connecting to database...")
    with engine.connect() as connection:
        dialect = engine.dialect.name
        print(f"Database dialect: {dialect}")
        
        # 1. Clear users, coupons, seats & restart identity counters at 1
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
            except Exception as e:
                print(f"sqlite_sequence note: {e}")
        else: # mysql / generic
            connection.execute(text("SET FOREIGN_KEY_CHECKS = 0;"))
            connection.execute(text("TRUNCATE TABLE users;"))
            connection.execute(text("TRUNCATE TABLE coupons;"))
            connection.execute(text("TRUNCATE TABLE seats;"))
            connection.execute(text("SET FOREIGN_KEY_CHECKS = 1;"))
            
        print("1. All tables cleared. Auto-increment / serial sequence reset to 1.")

        # 2. Re-initialize seat record
        connection.execute(text("""
            INSERT INTO seats (event_name, total_seats, booked_seats, available_seats, early_bird_seats, early_bird_taken)
            VALUES ('45-Day Embedded & IoT Internship', 150, 0, 150, 10, 0)
        """))
        
        connection.commit()
        print("2. Seat counters re-initialized: Total 150, Available 150, Booked 0, Early Bird 10 (0 Taken).")
        print("\nSUCCESS: Database successfully reset! The next user registration will start from Serial / ID = 1.")

if __name__ == "__main__":
    reset_db_serial_1()
