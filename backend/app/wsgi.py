"""
this
"""

from . import config
from .server import server as nifoda

if __name__ == "__main__":
    if config.environment == "PROD":
        nifoda.run()
