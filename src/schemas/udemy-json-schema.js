{
  "name": "learning_schedule",
  "schema": {
    "type": "object",
    "properties": {
      "schedule": {
        "type": "array",
        "description": "A sequence of daily learning schedules.",
        "items": {
          "type": "object",
          "properties": {
            "day_number": {
              "type": "number",
              "description": "The number of the day in the learning schedule."
            },
            "duration": {
              "type": "number",
              "description": "The duration of study in hours for that day."
            },
            "lessons": {
              "type": "array",
              "description": "List of lessons to cover on that day.",
              "items": {
                "type": "string",
                "description": "The title or identifier of a lesson."
              }
            }
          },
          "required": [
            "day_number",
            "duration",
            "lessons"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "schedule"
    ],
    "additionalProperties": false
  },
  "strict": true
}
