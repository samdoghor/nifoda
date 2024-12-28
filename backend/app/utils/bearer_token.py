"""bearer_token.py

Keyword arguments:
argument -- auth_token
Return: integer|string
"""

from datetime import datetime, timedelta

import jwt
from flask import request

from .. import config


def encode_auth_token(id, first_name, last_name, time_length, jti):
    """
    Generates the Auth Token
    :return: string
    """
    try:
        payload = {
            'exp': datetime.now() + timedelta(days=0, seconds=time_length),  # noqa
            'iat': datetime.now(),
            'nbf': datetime.now(),
            'sub': str(id),
            'display_name': f'{first_name} {last_name}',
            'iss': request.url,
            'jti': jti
        }
        token = jwt.encode(payload, config.secret_key, algorithm=config.algorithm)
        return token
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
