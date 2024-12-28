"""
app/domain/value_object/point.py
this file holds the point value object
"""


class LoginCredential:
    """
    the
    """

    def __init__(self, email_address: str, password: str):

        if email_address is None or not email_address:
            raise ValueError(f"Invalid value: email address can not be empty")

        if password is None or not password:
            raise ValueError(f"Invalid value: password can not be empty")

        self.email_address = email_address
        self.password = password
