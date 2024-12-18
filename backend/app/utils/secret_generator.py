"""
app/utils/secret_generator.py
this file holds the secret_generator info
"""

import secrets

from cryptography.fernet import Fernet

from .. import config


class SecretGenerator:
    """ service for managing roles """

    f_key = Fernet(config.fernet_key)

    @staticmethod
    def api_key():
        """Create a new developer account"""

        api_key_gen = secrets.token_urlsafe(16).encode()
        api_key = SecretGenerator.f_key.encrypt(api_key_gen)

        return api_key

    @staticmethod
    def secret_key():
        """Create a new developer account"""

        secret_key_gen = secrets.token_urlsafe(32).encode()
        secret_key = SecretGenerator.f_key.encrypt(secret_key_gen)

        return secret_key

    @staticmethod
    def verify_key(token):
        """ j k """

        plain_keys = SecretGenerator.f_key.decrypt(token).decode()

        return plain_keys
