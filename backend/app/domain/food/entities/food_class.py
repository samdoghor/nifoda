"""
app/domain/entities/food_class.py
this file holds the food class entity info
"""
from datetime import datetime
from uuid import uuid4


class FoodClassEntity:
    """
    the
    """

    def __init__(self, id: uuid4, name: str, description: str, food_class_status: str | None,
                 created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.name = name
        self.description = description
        self.food_class_status = food_class_status  # pending_review, approved, rejected, make_changes, deleted
        self.created_at = created_at
        self.updated_at = updated_at

    def approve_food_class(self):
        """
        this function approves the food class
        """
        self.food_class_status = 'approved'

    def reject_food_class(self):
        """
        this function rejects the food class
        """
        self.food_class_status = 'rejected'

    def make_changes(self):
        """
        this function request contributor to make changes
        """
        self.food_class_status = 'make_changes'
