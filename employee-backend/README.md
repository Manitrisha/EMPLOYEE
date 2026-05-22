# Employee Management Backend

This is the backend part of the Employee Management System built using Node.js, Express.js, and MongoDB.

## Features

- Employee CRUD Operations
- REST API Development
- MongoDB Database Integration
- Express Server Setup
- Employee Schema and Models
- API Testing Support

---

# Project Structure

```bash
employee-backend/
│
├── API/
│   └── employeeApi.js
│
├── models/
│   └── employeeModel.js
│
├── package.json
├── package-lock.json
└── server.js
```

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cors
- Nodemon

---

# Installed Packages

```bash
npm install express mongoose cors
```

Development dependency:

```bash
npm install nodemon --save-dev
```

---

# Employee Schema

Employee Schema contains:

- Name
- Email
- Mobile
- Designation
- Company Name

---

# API Operations

## Create Employee

Add new employee details.

## Read Employees

Fetch all employee details.

## Update Employee

Edit employee information.

## Delete Employee

Remove employee data.

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to backend folder:

```bash
cd employee-backend
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

---

# Server File

Main server configuration:

```bash
server.js
```

---

# Database Connection

MongoDB connection is handled using Mongoose.

Example:

```js
mongoose.connect("mongodb_url")
```

---

# API Example Routes

```bash
POST   /employee
GET    /employees
PUT    /employee/:id
DELETE /employee/:id
```

---

# Author

Developed as an Employee Management System Project.
