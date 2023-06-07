Express User API
This is a simple RESTful API built with Express, which allows you to perform CRUD (Create, Read, Update, Delete) operations on user data. The API supports the following endpoints:

API Endpoints
GET /api/users
This endpoint retrieves a list of all users stored in the database.

Example Request

GET /api/users

Example Response

[
  {
    "id": "7f12b09e-6e6f-4aaf-9a46-5869c96ef65c",
    "username": "john_doe",
    "age": 25,
    "hobbies": ["reading", "gaming"]
  },
  {
    "id": "a4b402f3-3e48-4a2c-8a7a-96dbb61b2e9f",
    "username": "jane_smith",
    "age": 30,
    "hobbies": ["painting", "traveling"]
  }
]

GET /api/users/:userId
This endpoint retrieves a specific user based on their userId.

Example Request

GET /api/users/7f12b09e-6e6f-4aaf-9a46-5869c96ef65c

Example Response

{
  "id": "7f12b09e-6e6f-4aaf-9a46-5869c96ef65c",
  "username": "john_doe",
  "age": 25,
  "hobbies": ["reading", "gaming"]
}

POST /api/users
This endpoint creates a new user with the provided information.

Example Request

POST /api/users

Body:
{
  "username": "new_user",
  "age": 20,
  "hobbies": ["music", "sports"]
}


Example Response 

{
  "id": "d0d7e8b2-81b4-4419-993d-3351676d61b1",
  "username": "new_user",
  "age": 20,
  "hobbies": ["music", "sports"]
}


PUT /api/users/:userId
This endpoint updates the information of an existing user identified by their userId.

Example Request

PUT /api/users/d0d7e8b2-81b4-4419-993d-3351676d61b1

Body:
{
  "username": "updated_user",
  "age": 22,
  "hobbies": ["music", "cooking"]
}

DELETE /api/users/:userId
This endpoint deletes a user with the provided userId from the database.

Example Request
DELETE /api/users/d0d7e8b2-81b4-4419-993d-3351676d61b1

No Content (204)




