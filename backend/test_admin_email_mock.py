import unittest
from unittest.mock import patch, MagicMock
import sys
import os

# Add backend directory to sys.path to import app modules
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.services.email import send_admin_coupon_email

class TestAdminEmail(unittest.TestCase):
    @patch('app.services.email.requests.post')
    @patch('app.services.email.BREVO_API_KEY', "test_api_key")
    def test_send_admin_coupon_email_payload(self, mock_post):
        # Setup mocks
        mock_response = MagicMock()
        mock_response.json.return_value = {"messageId": "123"}
        mock_response.raise_for_status.return_value = None
        mock_post.return_value = mock_response

        # Test Data
        new_code = "TRONIX-123456"
        user_name = "Test User"
        user_email = "test@example.com"
        user_phone = "1234567890"

        # Call the function
        send_admin_coupon_email(new_code, user_name, user_email, user_phone)

        # Verify requests.post was called
        self.assertTrue(mock_post.called)
        
        # Get the arguments passed to requests.post
        args, kwargs = mock_post.call_args
        payload = kwargs.get('json', {})
        html_content = payload.get('htmlContent', '')

        # Verify the content
        self.assertIn(user_name, html_content)
        self.assertIn(user_email, html_content)
        self.assertIn(user_phone, html_content)
        self.assertIn(new_code, html_content)
        self.assertIn("New Coupon Registration", html_content)

        print("\nTest Passed: Email payload contains all user details and the new code.")

if __name__ == '__main__':
    unittest.main()
