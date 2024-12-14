"""
## Module Name: tribe.py

This module defines the TribeModel class, representing tribes in which food
could have names (e.g., Urhobo).

The TribeModel class is a SQLAlchemy model that extends the BaseModel and uses
the MetaBaseModel metaclass.
It provides database columns for storing tribe information, such as tribe name,
description, and location.
It also defines a relationship with the LocalFoodNameModel model.

## Example Usage:

--------------

### Creating a new tribe

tribe = TribeModel(tribe="Urhobo", description="A tribe in Nigeria",
location="Delta State")

tribe.save()

### Retrieving all tribes

tribes = TribeModel.query.all()

### Accessing tribe properties

for tribe in tribes:

    print(tribe.tribe)

    print(tribe.description)

    print(tribe.location)

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


class TribeModel(db.Model, BaseModel, metaclass=MetaBaseModel):
    ''' This class defines tribes in which the food could have names in e.g
    Urhobo '''

    __tablename__ = 'tribes'

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid4)
    tribe = db.Column(db.String(), unique=True, nullable=False)
    description = db.Column(db.String())
    country = db.Column(db.String())

    is_approved = db.Column(db.Boolean, default=False, nullable=False)

    created_at = db.Column(db.DateTime, default=NetworkTime.network_time())
    updated_at = db.Column(db.DateTime, onupdate=NetworkTime.network_time())

    # relationships

    local_food_names = db.relationship(
        'LocalFoodNameModel', backref='tribes', lazy=True)

    def __repr__(self):
        return f'Tribe(id={self.id}, tribe={self.tribe})'
