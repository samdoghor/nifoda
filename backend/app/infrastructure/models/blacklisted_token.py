"""
app/infrastructure/models/blacklisted_token.py
this file holds the blacklisted_token model info
"""

from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from . import db
from .abc import BaseModel, MetaBaseModel


# model

class BlackListedTokenModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the admins Model e.g Samuel, Doghor """

    __tablename__ = 'blacklisted_tokens'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    jwt_id = db.Column(db.String(), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())
