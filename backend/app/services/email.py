import os
import requests
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

BREVO_API_KEY = os.getenv("BREVO_API_KEY")
BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "shubham.tronix365@gmail.com")

def send_email_via_brevo(to_email: str, subject: str, html_content: str, sender_name: str = "Tronix365", sender_email: str = None):
    if not sender_email:
        sender_email = SENDER_EMAIL
    
    brevo_key = os.getenv("BREVO_API_KEY", "")
    if not brevo_key:
        logger.warning("BREVO_API_KEY not set. Skipping email.")
        return

    # If the key starts with 'xsmtpsib-', it is Brevo SMTP Relay key
    if brevo_key.startswith("xsmtpsib-"):
        try:
            import smtplib
            from email.mime.text import MIMEText
            from email.mime.multipart import MIMEMultipart

            smtp_host = os.getenv("SMTP_HOST", "smtp-relay.brevo.com")
            if "gmail" in smtp_host.lower():
                smtp_host = "smtp-relay.brevo.com"
            smtp_port = int(os.getenv("SMTP_PORT", 587))
            
            msg = MIMEMultipart()
            msg['From'] = f"{sender_name} <{sender_email}>"
            msg['To'] = to_email
            msg['Subject'] = subject
            msg.attach(MIMEText(html_content, 'html'))

            server = smtplib.SMTP(smtp_host, smtp_port, timeout=15)
            server.starttls()
            server.login(sender_email, brevo_key)
            server.sendmail(sender_email, to_email, msg.as_string())
            server.quit()
            logger.info(f"Email sent successfully via Brevo SMTP Relay to {to_email}.")
            return
        except Exception as e:
            logger.error(f"Failed to send email via Brevo SMTP Relay: {e}")
            return

    # Otherwise send via Brevo REST API (xkeysib-)
    headers = {
        "accept": "application/json",
        "api-key": brevo_key,
        "content-type": "application/json"
    }

    payload = {
        "sender": {"name": sender_name, "email": sender_email},
        "to": [{"email": to_email}],
        "subject": subject,
        "htmlContent": html_content
    }

    try:
        response = requests.post(BREVO_API_URL, json=payload, headers=headers, timeout=10)
        response.raise_for_status()
        logger.info(f"Email sent successfully to {to_email}. Message ID: {response.json().get('messageId')}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to send email via Brevo API: {e}")
        if e.response:
            logger.error(f"Brevo Response: {e.response.text}")

def send_confirmation_email(to_email: str, name: str, amount: int, payment_id: str, registration_date):
    subject = "Registration Confirmed - Tronix365 45-Day Internship"
    
    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #00f7ff; border-radius: 10px; padding: 20px;">
            <h1 style="color: #00f7ff; text-align: center;">Welcome to Tronix365!</h1>
            <p>Dear {name},</p>
            <p>Your registration for the <strong>45-Day Embedded & IoT Internship</strong> has been confirmed.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h2 style="color: #8338ec; margin-top: 0;">Payment Details:</h2>
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Amount Paid:</strong> ₹{amount}</li>
                    <li><strong>Payment ID:</strong> {payment_id}</li>
                    <li><strong>Date:</strong> {registration_date.strftime('%Y-%m-%d %H:%M:%S') if registration_date else 'N/A'}</li>
                </ul>
            </div>

            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h2 style="color: #8338ec; margin-top: 0;">Program Details:</h2>
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Program:</strong> 45-Day Embedded & IoT Internship</li>
                    <li><strong>Duration:</strong> 45 Days</li>
                    <li><strong>Mode:</strong> 100% Hands-on</li>
                </ul>
            </div>

            <p>We're excited to have you join us!</p>
            <p style="color: #888;">Best regards,<br>Team Tronix365</p>
        </div>
    </body>
    </html>
    """
    
    send_email_via_brevo(to_email, subject, html_body)

def send_admin_coupon_email(new_code: str, user_name: str, user_email: str, user_phone: str):
    # Send to admin email (configured in env or hardcoded fallback)
    admin_email = os.getenv("ADMIN_EMAIL", "shubham.tronix365@gmail.com")
    subject = "New Coupon Registration & New Code Generated"
    
    html_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #00f7ff;">New Coupon Registration</h2>
            <p>A user has just registered using a coupon code.</p>
            
            <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0;">User Details:</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Name:</strong> {user_name}</li>
                    <li><strong>Email:</strong> {user_email}</li>
                    <li><strong>Phone:</strong> {user_phone}</li>
                </ul>
            </div>

            <hr style="border: 0; border-top: 1px solid #ccc; margin: 20px 0;">

            <h3>Next Step:</h3>
            <p>Here is the <strong>NEW</strong> coupon code for the next student:</p>
            <h1 style="color: #00f7ff; background: #111; padding: 10px; display: inline-block; border-radius: 5px;">{new_code}</h1>
            <p>Please share this code with the next student in the chain.</p>
        </body>
    </html>
    """
    
    send_email_via_brevo(admin_email, subject, html_body, sender_name="Tronix365 System")
