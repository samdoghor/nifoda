"""
app/domain/value_object/email.py
this file holds the email value object
"""
import re

from flask import jsonify


class EmailCheck:
    """
    the
    """

    def __init__(self, email_address: str):
        if not self.is_valid_email(email_address):
            # raise ValueError(f"Invalid email: {email_address}")
            self.invalid_email(email_address)
        self.email_address = email_address

    @staticmethod
    def is_valid_email(email_address: str) -> bool:
        """ this """

        return re.match(r"[^@]+@[^@]+\.[^@]+", email_address) is not None

    @staticmethod
    def invalid_email(email_address: str):
        return jsonify({
            "code": 409,
            'code_message': 'conflict',
            "data": f"{email_address} format is not correct, please check",
        }), 409
