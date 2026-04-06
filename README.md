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

# 📂 Project Structure

📁 Backend Project
│
├── 📁 config
│   └── db.js
│
├── 📁 controllers
│   ├── dashboard.controller.js
│   ├── record.controller.js
│   └── user.controller.js
│
├── 📁 middlewares
│   ├── isAuth.js
│   └── authorize.js
│
├── 📁 models
│   ├── records.js
│   └── user.js
│
├── 📁 routes
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

# 👑 Create Admin User

This project includes a script to create an initial **Admin user**.

---

## 📌 Why needed?

* Admin role is required to:

  * Manage users
  * Access all records
  * Use dashboard APIs

## ⚙️ How to create Admin
Run the following command:

node createAdmin.js

## 📥 What it does

* Creates a default admin user in the database
* Assigns role = `admin`

## 📌 Example Admin Credentials
Email: admin@gmail.com
Password: admin123
*(You can modify these inside `createAdmin.js` file)*

## ⚠️ Important Notes

* Run this script **only once**
* If admin already exists, it should not create duplicate
* Make sure MongoDB is connected before running

## 🔐 After Creating Admin

1. Login using admin credentials:
POST /api/auth/login

3. Use the token to access protected routes:
Authorization: Bearer TOKEN


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

# 📘 API Documentation

This section describes all available APIs and how to use them.

# 🔐 Authentication
Most APIs require authentication using JWT.
### Header:
Authorization: Bearer YOUR_TOKEN

# 👤 USER APIs

## 1. Signup
**Endpoint:**

POST /api/auth/signup
**Body:**

json
{
  "name": "Salman",
  "email": "salman@gmail.com",
  "password": "123456"
}

**Response:**
json
{
  "message": "User registered successfully"
}

## 2. Login
**Endpoint:**
POST /api/auth/login

**Body:**
json
{
  "email": "salman@gmail.com",
  "password": "123456"
}

**Response:**
json
{
  "token": "JWT_TOKEN"
}

## 3. Get All Users (Admin)
**Endpoint:**

GET /api/users

## 4. Update User Role
**Endpoint:**
PATCH /api/users/:id/role

**Body:**
json
{
  "role": "admin"
}

## 5. Update User Status

**Endpoint:**
PATCH /api/users/:id/status

## 7. Soft Delete User
**Endpoint:**
DELETE /api/users/:id

# 📊 RECORD APIs

## 1. Create Record
**Endpoint:**

POST /api/records
**Body:**
json
{
  "amount": 500,
  "type": "expense",
  "category": "food"
}

## 2. Get All Records

**Endpoint:**
GET /api/records

## 🔍 Filters
GET /api/records?type=expense&category=food&startDate=2024-01-01&endDate=2024-12-31

## 3. Get Record by ID
GET /api/records/:id

## 4. Update Record
PUT /api/records/:id

## 5. Delete Record
DELETE /api/records/:id

# 📈 DASHBOARD APIs
## 1. Summary
GET /api/dashboard/summary

## 2. Category Breakdown
GET /api/dashboard/category

## 3. Monthly Analysis
GET /api/dashboard/monthly

# ⚠️ Error Format

{
  "success": false,
  "message": "Something went wrong"
}

# 👨‍💻 Author
**Salman **
🎓 DTU Computer Science Student


# ⭐ If you like this project

Give it a ⭐ on GitHub and share it!
