{
  "type": "object",
  "properties": {
    "flights": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "flight_date": {
            "type": "string",
            "format": "date",
            "description": "Date of the flight in YYYY-MM-DD format."
          },
          "airline": {
            "type": "string",
            "description": "Name of the airline."
          },
          "flight_number": {
            "type": "string",
            "description": "Flight number assigned by the airline."
          },
          "departure": {
            "type": "object",
            "properties": {
              "airport": {
                "type": "string",
                "description": "Name or IATA code of the departure airport."
              },
              "city": {
                "type": "string",
                "description": "City of the departure airport."
              },
              "country": {
                "type": "string",
                "description": "Country of the departure airport."
              },
              "time": {
                "type": "string",
                "format": "time",
                "description": "Departure time in HH:MM format (24-hour)."
              },
              "timezone": {
                "type": "string",
                "description": "Time zone of the departure location."
              }
            },
            "required": ["airport", "city", "country", "time", "timezone"]
          },
          "arrival": {
            "type": "object",
            "properties": {
              "airport": {
                "type": "string",
                "description": "Name or IATA code of the arrival airport."
              },
              "city": {
                "type": "string",
                "description": "City of the arrival airport."
              },
              "country": {
                "type": "string",
                "description": "Country of the arrival airport."
              },
              "time": {
                "type": "string",
                "format": "time",
                "description": "Arrival time in HH:MM format (24-hour)."
              },
              "timezone": {
                "type": "string",
                "description": "Time zone of the arrival location."
              }
            },
            "required": ["airport", "city", "country", "time", "timezone"]
          },
          "seat_number": {
            "type": "string",
            "description": "Assigned seat number."
          },
          "confirmation_number": {
            "type": "string",
            "description": "Booking confirmation number."
          },
          "check_in": {
            "type": "object",
            "properties": {
              "check_in_open_time": {
                "type": "string",
                "format": "datetime",
                "description": "Exact time when check-in opens."
              },
              "check_in_deadline": {
                "type": "string",
                "format": "datetime",
                "description": "Exact time when check-in closes."
              },
              "check_in_link": {
                "type": "string",
                "format": "uri",
                "description": "Direct link to the airline’s check-in page."
              },
              "reservation_link": {
                "type": "string",
                "format": "uri",
                "description": "Direct link to view or modify the booking on the airline’s website."
              }
            },
            "required": ["check_in_open_time", "check_in_deadline"]
          },
          "baggage": {
            "type": "object",
            "properties": {
              "carry_on": {
                "type": "string",
                "description": "Allowed carry-on baggage details."
              },
              "checked_baggage": {
                "type": "string",
                "description": "Checked baggage allowance details."
              }
            }
          },
          "terminal_and_gate": {
            "type": "object",
            "properties": {
              "departure_terminal": {
                "type": "string",
                "description": "Terminal for departure."
              },
              "departure_gate": {
                "type": "string",
                "description": "Gate for departure."
              },
              "arrival_terminal": {
                "type": "string",
                "description": "Terminal at arrival."
              },
              "arrival_gate": {
                "type": "string",
                "description": "Gate at arrival."
              }
            }
          },
          "additional_notes": {
            "type": "string",
            "description": "Any additional information about the flight."
          }
        },
        "required": ["flight_date", "airline", "flight_number", "departure", "arrival", "confirmation_number"]
      }
    }
  },
  "required": ["flights"],
  "additionalProperties": false
}
