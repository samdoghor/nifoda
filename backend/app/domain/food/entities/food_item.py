"""
app/domain/entities/food_item.py
this file holds the food item entity info
"""
from datetime import datetime
from uuid import uuid4


class FoodItemEntity:
    """
    the
    """

    def __init__(self, id: uuid4, name: str, scientific_name: str, description: str, food_item_status: str | None,
                 category: uuid4, food_class: uuid4, group: uuid4, source: uuid4, created_at: datetime | None,
                 updated_at: datetime | None):
        self.id = id
        self.name = name
        self.scientific_name = scientific_name
        self.description = description
        self.food_item_status = food_item_status  # pending_review, approved, rejected, make_changes, deleted
        self.category = category
        self.food_class = food_class
        self.group = group
        self.source = source
        self.created_at = created_at
        self.updated_at = updated_at

    def approve_food_item(self):
        """
        this function approves the food class
        """
        self.food_item_status = 'approved'

    def reject_food_item(self):
        """
        this function rejects the food class
        """
        self.food_item_status = 'rejected'

    def make_changes(self):
        """
        this function request contributor to make changes
        """
        self.food_item_status = 'make_changes'
