"""
app/infrastructure/models/point.py
this file holds the point model info
"""
from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from . import db
from .abc import BaseModel, MetaBaseModel


# model

class PointModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the admins Model e.g Samuel, Doghor """

    __tablename__ = 'points'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    point = db.Column(db.Integer(), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign key(s)

    contributor = db.Column(UUID(as_uuid=True), db.ForeignKey('contributors.id'), nullable=False)
