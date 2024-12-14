"""
app/domain/value_object/password.py
this file holds the password value object
"""
import re

from werkzeug.security import check_password_hash, generate_password_hash


class PasswordCheck:
    """
    the
    """

    def __init__(self, password: str):

        if len(password) < 8:
            raise ValueError("Password must be at least 8 characters long")

        if not self.password_requirement(password):
            raise ValueError("Password must be at least one uppercase, one lowercase, one symbol, and one digit")

        self._hash_password(password)

    @staticmethod
    def password_requirement(password: str) -> bool:
        """ the """

        pattern = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:<>,./?])(?=.*[0-9]).*$"

        return re.match(pattern, password) is not None

    def _hash_password(self, password: str):
        """ the """

        self.password = generate_password_hash(password)

    def check_password(self, password: str):
        """ the """

        return check_password_hash(self.password, password)
