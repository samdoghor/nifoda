"""bearer_token.py

Keyword arguments:
argument -- auth_token
Return: integer|string
"""

from datetime import datetime, timedelta
from flask import request

import jwt

from .. import config


def encode_auth_token(id, first_name, last_name):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.now() + timedelta(days=0, seconds=3600),  # noqa
            'iat': datetime.now(),
            'sub': id,
            'name': f'{first_name} {last_name}',
            'iss': request.url
        }
        return jwt.encode(
            payload,
            config.secret_key,
            algorithm=config.algorithm
        )
    except Exception as e:
        return e


def decode_auth_token(auth_token):
    """
    Decodes the auth token
    :param auth_token:
    :return: integer|string
    """
    try:
        payload = jwt.decode(auth_token, config.secret_key, algorithms=[config.algorithm])
        return payload
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
