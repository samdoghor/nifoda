"""
app/infrastructure/models/group.py
this file holds the group model info
"""
from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from .. import db
from ..abc import BaseModel, MetaBaseModel


# model

class GroupModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the groups Model  """

    __tablename__ = 'groups'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = db.Column(db.String(), unique=True, nullable=False)
    description = db.Column(db.String(), nullable=False)
    group_status = db.Column(db.String(),
                             default='pending_review',
                             nullable=False)  # pending_review, approved, rejected, make_changes, deleted
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # relationships

    categories = db.relationship('CategoryModel', backref='groups', lazy=True, cascade='all')
    food_items = db.relationship('FoodItemModel', backref='groups', lazy=True, cascade='all')
