"""
app/domain/value_object/email.py
this file holds the email value object
"""
import re


class EmailCheck:
    """
    the
    """

    def __init__(self, email_address: str):
        print(self.is_valid_email(email_address))
        if not self.is_valid_email(email_address):
            raise ValueError(f"Invalid email: {email_address}")
        self.email_address = email_address

    @staticmethod
    def is_valid_email(email_address) -> bool:
        """ this """

        return bool(re.match(r"[^@]+@[^@]+\.[^@]+", email_address))
