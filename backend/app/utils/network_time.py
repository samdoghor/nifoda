"""remote_datetime.py

Keyword arguments:
argument -- description
Return: return_description
"""

from datetime import datetime, timezone

import ntplib

client = ntplib.NTPClient()


class NetworkTime:
    @staticmethod
    def network_time():
        try:

            response = client.request('time.windows.com', version=3)
            network_time = datetime.fromtimestamp(
                response.tx_time, timezone.utc)
            return network_time
        except Exception:
            network_time = datetime.now(timezone.utc)
            return network_time
