import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

def test_email():
    print("--- Email Debug Script ---")
    print(f"SMTP_HOST: {SMTP_HOST}")
    print(f"SMTP_PORT: {SMTP_PORT}")
    print(f"SMTP_USER: {SMTP_USER}")
    # Do not print password for security
    
    if not SMTP_USER or not SMTP_PASSWORD:
        print("ERROR: SMTP_USER or SMTP_PASSWORD not set in .env")
        return

    msg = MIMEText("This is a test email from the debug script.")
    msg['Subject'] = "Tronix365 Debug Email"
    msg['From'] = SMTP_USER
    msg['To'] = SMTP_USER  # Send to self

    try:
        print("\nConnecting to SMTP server...")
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15)
        server.set_debuglevel(1)  # Enable verbose debug output
        
        print("Starting TLS...")
        server.starttls()
        
        print("Logging in...")
        server.login(SMTP_USER, SMTP_PASSWORD)
        
        print("Sending message...")
        server.send_message(msg)
        
        print("Quitting...")
        server.quit()
        print("\nSUCCESS: Email sent successfully!")
    except Exception as e:
        print(f"\nERROR: Failed to send email: {e}")

if __name__ == "__main__":
    test_email()
