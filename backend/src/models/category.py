"""
## Module Name: category.py

This module defines the CategoryModel class, representing categories in which
the food falls under (e.g., Whole Grain).

The CategoryModel class is a SQLAlchemy model that extends the BaseModel and
uses the MetaBaseModel metaclass.
It provides database columns for storing category information, such as name,
description, and timestamps.
It also defines relationships with the GroupModel model.

## Example Usage:

--------------

### Creating a new category

category = CategoryModel(name='Whole Grain', description='Breakfast cereals')

category.save()

### Retrieving all categories

categories = CategoryModel.query.all()

### Accessing category properties

for category in categories:

    print(category.name)

    print(category.foods)

"""

# imports

from uuid import uuid4

from sqlalchemy import UUID

from . import db
from .abc import BaseModel, MetaBaseModel

from utils import NetworkTime

# model


class CategoryModel(db.Model, BaseModel, metaclass=MetaBaseModel):

    """ This class defines categories in which the food falls under e.g
    Whole Grain """

    __tablename__ = 'categories'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    name = db.Column(db.String(), unique=True, nullable=False)
    description = db.Column(db.String())

    is_approved = db.Column(db.Boolean, default=False, nullable=False)

    created_at = db.Column(db.DateTime, default=NetworkTime.network_time())
    updated_at = db.Column(db.DateTime, onupdate=NetworkTime.network_time())

    # foreign keys

    group_id = db.Column(UUID(as_uuid=True), db.ForeignKey(
        'groups.id'), nullable=False)

    # relationships

    foods = db.relationship(
        'FoodModel', backref='categories', lazy=True)

    def __repr__(self):
        return f'Category(id={self.id}, name={self.name})'
