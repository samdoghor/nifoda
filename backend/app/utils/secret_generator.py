"""
app/utils/secret_generator.py
this file holds the secret_generator info
"""
import secrets


class SecretGenerator:
    """ service for managing roles """

    @staticmethod
    def api_key():
        """Create a new developer account"""

        api_key = secrets.token_urlsafe(32)

        return api_key

    @staticmethod
    def secret_key():
        """Create a new developer account"""

        secret_key = secrets.token_urlsafe(32)

        return secret_key


