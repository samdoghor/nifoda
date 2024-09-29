import config
from server import server as nifoda

if __name__ == "__main__":
    if config.ENVIRONMENT == "PROD":
        nifoda.run()
