"""
app/infrastructure/models/category.py
this file holds the category model info
"""
from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from .. import db
from ..abc import BaseModel, MetaBaseModel


# model

class CategoryModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the categories Model  """

    __tablename__ = 'categories'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = db.Column(db.String(), unique=True, nullable=False)
    description = db.Column(db.String(), nullable=False)
    category_status = db.Column(db.String(),
                                default='pending_review',
                                nullable=False)  # pending_review, approved, rejected, make_changes, deleted
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign key(s)

    group = db.Column(UUID(as_uuid=True), db.ForeignKey('groups.id'), nullable=False)

    # relationships

    food_items = db.relationship('FoodItemModel', backref='categories', lazy=True, cascade='all')
