"""
app/infrastructure/models/user.py
this file holds the user model info
"""
from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID
from werkzeug.security import check_password_hash, generate_password_hash

from . import db
from .abc import BaseModel, MetaBaseModel


# model

class UserModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the users Model e.g Samuel, Doghor """

    __tablename__ = 'users'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    first_name = db.Column(db.String(), nullable=False)
    last_name = db.Column(db.String(), nullable=False)
    middle_name = db.Column(db.String(), nullable=False)
    email_address = db.Column(db.String(), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    secret_key = db.Column(db.String(), unique=True, nullable=False)
    api_key = db.Column(db.String(), unique=True, nullable=False)
    account_status = db.Column(db.String(),
                               default='unverifeid',
                               nullable=False)  # unverifeid, active, blocked, deleted
    account_verified = db.Column(db.Boolean(), default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign key(s)

    role = db.Column(UUID(as_uuid=True), db.ForeignKey('roles.id'), nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    # def encode_token(self, id, first_name, last_name):
    #     return encode_auth_token(id, first_name, last_name)
