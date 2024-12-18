"""
app/infrastructure/models/food_item.py
this file holds the food item model info
"""
from datetime import datetime
from uuid import uuid4

from sqlalchemy import UUID

from .. import db
from ..abc import BaseModel, MetaBaseModel


# model

class FoodItemModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ this class defines the food items Model  """

    __tablename__ = 'food_items'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = db.Column(db.String(), unique=True, nullable=False)
    scientific_name = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)
    food_item_status = db.Column(db.String(),
                                 default='pending_review',
                                 nullable=False)  # pending_review, approved, rejected, make_changes, deleted
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign key(s)

    category = db.Column(UUID(as_uuid=True), db.ForeignKey('categories.id'), nullable=False)
    food_class = db.Column(UUID(as_uuid=True), db.ForeignKey('food_classes.id'), nullable=False)
    group = db.Column(UUID(as_uuid=True), db.ForeignKey('groups.id'), nullable=False)
    source = db.Column(UUID(as_uuid=True), db.ForeignKey('sources.id'), nullable=False)
