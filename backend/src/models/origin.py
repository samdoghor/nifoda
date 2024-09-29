"""
## Module Name: origin.py

This module defines the OriginModel class, representing origins in which
the food were first cited (e.g., Nigeria).

The OriginModel class is a SQLAlchemy model that extends the BaseModel and
uses the MetaBaseModel metaclass.
It provides database columns for storing origin information, such as country,
 and timestamps.
It also defines relationships with the FoodModel model.

## Example Usage:

--------------

### Creating a new origin

origin = OriginModel(country='Nigeria', description='Origin')

origin.save()

### Retrieving all origins

origins = OriginModel.query.all()

### Accessing origin properties

for origin in origins:

    print(origin.name)

    print(origin.foods)

"""

# imports

from uuid import uuid4

from sqlalchemy import UUID

from . import db
from .abc import BaseModel, MetaBaseModel

from utils import NetworkTime

# model


class OriginModel(db.Model, BaseModel, metaclass=MetaBaseModel):

    """ This class defines origins in which the food falls under e.g
    Nigeria """

    __tablename__ = 'origins'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    country = db.Column(db.String(), unique=True, nullable=False)
    short_code = db.Column(db.String())
    flag = db.Column(db.String())

    is_approved = db.Column(db.Boolean, default=False, nullable=False)

    created_at = db.Column(db.DateTime, default=NetworkTime.network_time())
    updated_at = db.Column(db.DateTime, onupdate=NetworkTime.network_time())

    # relationships

    foods = db.relationship(
        'FoodModel', backref='origins', lazy=True)

    def __repr__(self):
        return f'Origin(id={self.id}, country={self.name})'
