"""
app/domain/entities/category.py
this file holds the category entity info
"""
from datetime import datetime
from uuid import uuid4


class CategoryEntity:
    """
    the
    """

    def __init__(self, id: uuid4, name: str, description: str, category_status: str | None, group: uuid4,
                 created_at: datetime | None, updated_at: datetime | None):
        self.id = id
        self.name = name
        self.description = description
        self.category_status = category_status  # pending_review, approved, rejected, make_changes, deleted
        self.group = group
        self.created_at = created_at
        self.updated_at = updated_at

    def approve_category(self):
        """
        this function approves the category
        """
        self.category_status = 'approved'

    def reject_category(self):
        """
        this function rejects the category
        """
        self.category_status = 'rejected'

    def make_changes(self):
        """
        this function request contributor to make changes
        """
        self.category_status = 'make_changes'
