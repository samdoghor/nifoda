"""
app/infrastructure/models/contributor.py
this file holds the contributor model info
"""

from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from .. import db
from ..abc import BaseModel, MetaBaseModel


# model

class ContributorModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the contributors Model e.g Samuel, Doghor """

    __tablename__ = 'contributors'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    first_name = db.Column(db.String(), nullable=False)
    last_name = db.Column(db.String(), nullable=False)
    middle_name = db.Column(db.String(), nullable=True)
    email_address = db.Column(db.String(), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    account_status = db.Column(db.String(),
                               default='unverifeid',
                               nullable=False)  # unverifeid, active, blocked, deleted
    account_verified = db.Column(db.Boolean(), default=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign key(s)

    role = db.Column(UUID(as_uuid=True), db.ForeignKey('roles.id'), nullable=False)

    # relationships

    points = db.relationship('PointModel', backref='contributors', lazy=True, cascade='all, delete-orphan')
