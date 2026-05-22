# Employee Management Frontend

This is the frontend part of the Employee Management System built using React.js and Vite.

## Features

- Employee Registration Form
- Employee List Display
- Edit Employee Details
- Delete Employee Details
- Responsive User Interface
- API Integration using Axios

---

# Project Structure

```bash
frontend/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

# Technologies Used

- React.js
- Vite
- Axios
- Bootstrap / CSS

---

# Installed Packages

```bash
npm install axios
```

For Vite project:

```bash
npm create vite@latest
```

---

# Main Functionalities

## Add Employee

Add employee details using form.

## View Employees

Display all employee records.

## Edit Employee

Update employee information.

## Delete Employee

Remove employee details.

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

---

# API Connection

Frontend communicates with backend APIs using Axios.

Example:

```js
axios.get("http://localhost:5000/employees")
```

---

# Build Command

```bash
npm run build
```

---

# Preview Build

```bash
npm run preview
```

---

# Author

Developed as an Employee Management System Project.
