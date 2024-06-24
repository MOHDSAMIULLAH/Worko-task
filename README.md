# Worko API

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
```bash
git clone https://github.com/MOHDSAMIULLAH/Worko-task.git
cd worko-task
npm install
```

  ### Setup
  - Create a `.env` file in the root directory with the following content:
    ```
    DB_URI=mongodb://localhost:27017/worko
    PORT=6000
    ```

  ### Running the Application
  ```bash
  npm start
  ```

  ### API Endpoints
  ```bash
  - `GET /api/worko/user` - List all users
  - `GET /api/worko/user/:userId` - Get user details
  - `POST /api/worko/user` - Create user
  - `PUT /api/worko/user/:userId` - Update user
  - `PATCH /api/worko/user/:userId` - Patch user
  - `DELETE /api/worko/user/:userId` - Soft delete user
  ```


When using Postman to interact with your API, you'll need to set up the requests properly to match the endpoints you defined. Here’s how you can format each type of request in Postman, including setting up basic authentication.

### Setting Up Basic Authentication in Postman

1. **Open Postman.**
2. **Create a new request.**
3. **Go to the `Authorization` tab.**
4. **Select `Basic Auth` from the `Type` dropdown.**
5. **Enter your username (`admin`) and password (`secret`).**

### API Requests

#### 1. List Users (GET /worko/user)

- **Method:** GET
- **URL:** `http://localhost:6000/api/worko/user`
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** None
- **Body:** None

Click `Send`.

#### 2. Get User Details (GET /worko/user/:userId)

- **Method:** GET
- **URL:** `http://localhost:6000/api/worko/user/USER_ID` (replace `USER_ID` with the actual user ID)
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** None
- **Body:** None

Click `Send`.

#### 3. Create User (POST /worko/user)

- **Method:** POST
- **URL:** `http://localhost:6000/api/worko/user`
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** Content-Type: application/json
- **Body:**
  - Select `raw` and `JSON` from the dropdown.
  - Enter the JSON payload:
    ```json
    {
      "email": "test@example.com",
      "name": "Test User",
      "age": 30,
      "city": "Test City",
      "zipCode": "12345"
    }
    ```

Click `Send`.

#### 4. Update User (PUT /worko/user/:userId)

- **Method:** PUT
- **URL:** `http://localhost:6000/api/worko/user/USER_ID` (replace `USER_ID` with the actual user ID)
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** Content-Type: application/json
- **Body:**
  - Select `raw` and `JSON` from the dropdown.
  - Enter the JSON payload:
    ```json
    {
      "email": "updated@example.com",
      "name": "Updated User",
      "age": 35,
      "city": "Updated City",
      "zipCode": "67890"
    }
    ```

Click `Send`.

#### 5. Patch User (PATCH /worko/user/:userId)

- **Method:** PATCH
- **URL:** `http://localhost:6000/api/worko/user/USER_ID` (replace `USER_ID` with the actual user ID)
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** Content-Type: application/json
- **Body:**
  - Select `raw` and `JSON` from the dropdown.
  - Enter the JSON payload with the fields you want to update:
    ```json
    {
      "city": "Partially Updated City",
      "zipCode": "54321"
    }
    ```

Click `Send`.

#### 6. Soft Delete User (DELETE /worko/user/:userId)

- **Method:** DELETE
- **URL:** `http://localhost:6000/api/worko/user/USER_ID` (replace `USER_ID` with the actual user ID)
- **Authorization:** Basic Auth (set up as described above)
- **Headers:** None
- **Body:** None

Click `Send`.





