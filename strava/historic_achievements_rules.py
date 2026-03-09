# Configurable historic achievements shown under "Historic Goals Achieved".
#
# Each rule supports:
# - title: heading shown in console and buts.md
# - emoji: icon shown with the heading
# - activity_type: Strava activity type to match
# - unit: unit used for matching and display (km, m, mi)
# - criteria:
#     - min_value
#     - max_value
#     - name_contains: string or list of strings, all matched case-insensitively

HISTORIC_ACHIEVEMENT_RULES = [
    {
        "title": "BRM 200",
        "emoji": "🚴",
        "activity_type": "Ride",
        "unit": "km",
        "criteria": {
            "min_value": 200,
        },
    },
    {
        "title": "BRM 300",
        "emoji": "🚴",
        "activity_type": "Ride",
        "unit": "km",
        "criteria": {
            "min_value": 300,
        },
    },
]
