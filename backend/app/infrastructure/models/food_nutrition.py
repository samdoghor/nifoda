"""
## Module Name: food_nutrition.py

This module defines the many to many Relationship class, representing food
items such as Rice, Nutrition and Nutrition Value.

"""

# imports

from uuid import uuid4

from sqlalchemy import UUID

try:
    from ..utils import NetworkTime
    from . import db
    from .abc import BaseModel, MetaBaseModel
except ImportError:
    from utils import NetworkTime

    from . import db
    from .abc import BaseModel, MetaBaseModel


# model


class FoodNutritionModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    ''' This class defines the Food Model e.g Rice '''

    __tablename__ = 'food_nutritions'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)

    is_approved = db.Column(db.Boolean, default=False, nullable=False)

    created_at = db.Column(db.DateTime, default=NetworkTime.network_time())
    updated_at = db.Column(db.DateTime, onupdate=NetworkTime.network_time())

    # foreign keys

    food_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'foods.id'), nullable=False)

    nutrient_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'nutrients.id'), nullable=False)

    nutrient_value_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'nutrient_values.id'), nullable=False)

    def __repr__(self):
        return f'FoodNutrient(id={self.id})'
