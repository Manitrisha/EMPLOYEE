# Employee Management System

A full-stack Employee Management System built using React, Node.js, Express.js, and MongoDB.  
This project allows users to create, view, edit, and manage employee details.

# Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv
- Nodemon

---

# Project Structure

```bash
employee/
│
├── employee-backend/
│   │
│   ├── API/
│   │   └── empApp.js
│   │
│   ├── models/
│   │   └── EmpModel.js
│   │
│   ├── node_modules/
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── CreateEmp.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   ├── Employee.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ListOfEmps.jsx
│   │   │   ├── RootLayout.jsx
│   │   │   └── Test.jsx
│   │   │
│   │   ├── contexts/
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── config.js
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── .gitignore
```

---

# Features

- Add Employee
- Edit Employee
- Delete Employee
- View Employee Details
- List All Employees
- MongoDB Database Integration
- REST API
- Responsive UI

---

# Backend Setup

## Step 1: Move to Backend Folder

```bash
cd employee-backend
```

---

## Step 2: Initialize Node Project

```bash
npm init -y
```

---

## Step 3: Install Packages

### Production Packages

```bash
npm install express mongoose cors dotenv
```

### Development Packages

```bash
npm install --save-dev nodemon
```

---

# Backend Package Purpose

| Package | Purpose |
|---|---|
| express | Backend framework |
| mongoose | MongoDB connection |
| cors | Connect frontend and backend |
| dotenv | Store environment variables |
| nodemon | Auto restart server |

---

# Create .env File

Create a `.env` file inside `employee-backend`.

```env
DB_URL=your_mongodb_connection_string
```

---

# Backend Start Command

## Normal Start

```bash
node server.js
```

## Nodemon Start

```bash
nodemon server.js
```

---

# Frontend Setup

## Step 1: Move to Frontend Folder

```bash
cd frontend
```

---

## Step 2: Create React Project Using Vite

```bash
npm create vite@latest
```

Choose:
- Framework → React
- Variant → JavaScript

---

## Step 3: Install Packages

```bash
npm install
```

Additional packages:

```bash
npm install react-router-dom axios
```

---

# Frontend Package Purpose

| Package | Purpose |
|---|---|
| react-router-dom | Routing |
| axios | API requests |

---

# Frontend Start Command

```bash
npm run dev
```

---

# Backend API Base URL

Example:

```js
http://localhost:4000/emp-api
```

---

# CORS Configuration

```js
app.use(
  cors({
    origin: [
      "http://localhost:5173"
    ]
  })
);
```

---

# MongoDB Connection Example

```js
mongoose.connect(process.env.DB_URL)
```

---

# API Routes Example

| Method | Route | Purpose |
|---|---|---|
| GET | /emp-api/employees | Get all employees |
| GET | /emp-api/employee/:id | Get single employee |
| POST | /emp-api/create-emp | Create employee |
| PUT | /emp-api/update-emp/:id | Update employee |
| DELETE | /emp-api/delete-emp/:id | Delete employee |

---

# GitHub Commands

## Initialize Git

```bash
git init
```

---

## Add Files

```bash
git add .
```

---

## Commit Files

```bash
git commit -m "Initial Commit"
```

---

## Add Remote Repository

```bash
git remote add origin your_github_repository_link
```

---

## Push Code

```bash
git push -u origin main
```

---

# Run Full Project

## Start Backend

```bash
cd employee-backend
nodemon server.js
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# Local URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:4000 |

---

# Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render / Railway / Cyclic

---

# Common Errors

## Failed to Fetch

### Solution
- Backend not running
- Wrong API URL
- CORS issue
- MongoDB connection failed

---

## CORS Error

### Solution

```js
app.use(cors())
```

or

```js
origin: ["http://localhost:5173"]
```

---

## MongoDB Connection Error

### Solution
Check:
- Internet connection
- MongoDB URL
- IP whitelist in MongoDB Atlas



