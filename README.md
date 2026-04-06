# Finance-Backend

A **production-ready backend API** for a Finance Tracker application built with **Node.js, Express, and MongoDB**.
It supports authentication, role-based access control, record management, and analytics.

# 🚀 Features

* 🔐 JWT Authentication (Signup/Login)
* 🛡️ Role-Based Authorization (Admin, Analyst)
* 📊 Record Management (Create, Read, Update, Delete)
* 🔍 Search & Filtering
* ♻️ Soft Delete Functionality
* 📈 Dashboard Analytics (Summary, Category, Monthly)


# 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (JSON Web Tokens)
* Swagger UI (API Docs)

# 📂 Project Structure

Backend Project
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── dashboard.controller.js
│   ├── record.controller.js
│   └── user.controller.js
│
├── middlewares/
│   ├── isAuth.js
│   └── authorize.js
│
├── models/
│   ├── records.js
│   └── user.js
│
├── routes/
│   ├── user.dashboard.js
│   ├── user.record.js
│   └── user.router.js
│
├── .env
├── createAdmin.js
├── node.js   (main server file)
├── package.json


# ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone <your-repo-url>
cd backend-project

### 2️⃣ Install dependencies
npm install express mongoose bcrypt jsonwebtoken dotenv express-rate-limit

### 3️⃣ Create `.env` file
PORT
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

### 4️⃣ Run the server
nodemon node.js

# 🌐 Base URL
http://localhost:4000/

# 🔐 Authentication

Most routes require a JWT token.

### 📌 Add token in headers:
Authorization: Bearer YOUR_TOKEN

# 👤 User APIs

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| POST   | `/api/auth/signup`            | Register user              |
| POST   | `/api/auth/login`             | Login user                 |
| GET    | `/api/users`                  | Get all users (Admin only) |
| PATCH  | `/api/users/:id/role`         | Update user role           |
| PATCH  | `/api/users/:id/status`       | Update user status         |
| GET    | `/api/users/search?q=keyword` | Search users               |
| DELETE | `/api/users/:id`              | Soft delete user           |

# 📊 Record APIs

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | `/api/records`     | Create record    |
| GET    | `/api/records`     | Get all records  |
| GET    | `/api/records/:id` | Get record by ID |
| PUT    | `/api/records/:id` | Update record    |
| DELETE | `/api/records/:id` | Delete record    |


## 🔍 Filtering Records

You can filter records using query params:

GET /api/records?type=expense&category=food&startDate=2024-01-01&endDate=2024-12-31

### Available Filters:

* `type` → income / expense
* `category` → food, travel, etc
* `startDate` → filter from date
* `endDate` → filter to date

# 📈 Dashboard APIs

| Method | Endpoint                  | Description        |
| ------ | ------------------------- | ------------------ |
| GET    | `/api/dashboard/summary`  | Financial summary  |
| GET    | `/api/dashboard/category` | Category breakdown |
| GET    | `/api/dashboard/monthly`  | Monthly analysis   |


# 📘 API Documentation (Swagger)

Swagger UI is available at:

http://localhost:4000/api-docs

### ✨ Swagger Features:

* View all APIs
* Try endpoints directly
* Add JWT token
* See request/response formats

---

# 🧪 Example Request (Postman)

### ➤ Create Record

POST /api/records
Authorization: Bearer TOKEN
Content-Type: application/json

{
  "amount": 500,
  "type": "expense",
  "category": "food"
}

# ⚠️ Error Handling

All APIs return standard responses:

{
  "success": false,
  "message": "Error message"
}

# 🔒 Roles & Permissions

| Role    | Access           |
| ------- | ---------------- |
| Admin   | Full access      |
| Analyst | Dashboard access |
| User    | Limited access   |


# 👨‍💻 Author
**Salman **
🎓 DTU Computer Science Student


# ⭐ If you like this project

Give it a ⭐ on GitHub and share it!
