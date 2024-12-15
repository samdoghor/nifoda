"""
app/domain/entities/user.py
this file holds the user entity info
"""
from datetime import datetime
from uuid import uuid4

from ..value_objects import EmailCheck, PasswordCheck


class DeveloperEntity:
    """
    the
    """

    def __init__(self, id: uuid4, first_name: str, last_name: str, middle_name: str | None, email_address: EmailCheck,
                 password: PasswordCheck, secret_key: str, api_key: str, account_status: str, account_verified: bool,
                 role: uuid4, created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.first_name = first_name
        self.last_name = last_name
        self.middle_name = middle_name
        self.email_address = email_address
        self.password = password
        self.secret_key = secret_key
        self.api_key = api_key
        self.account_status = account_status  # unverifeid, active, blocked, deleted
        self.account_verified = account_verified
        self.role = role
        self.created_at = created_at
        self.updated_at = updated_at

    def activate_account(self):
        """
        this function activates the user's account
        """
        self.account_status = 'active'

    def block_account(self):
        """
        this function blocks the user's account
        """
        self.account_status = 'blocked'

    def deleted_account(self):
        """
        this function stages the user's account for deletion
        """
        self.account_status = 'deleted'

    def verify_account(self):
        """
        this function trigger the user's account as verified
        """
        self.account_verified = True
