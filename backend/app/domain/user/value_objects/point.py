"""
app/domain/value_object/point.py
this file holds the point value object
"""


class PointCheck:
    """
    the
    """

    def __init__(self, point: int):

        if type(point) is not int:
            raise ValueError(f"Invalid value: point must be a number")

        if point < 0:
            raise ValueError(f"Invalid value: point must be a positive number")

        self.point = point
