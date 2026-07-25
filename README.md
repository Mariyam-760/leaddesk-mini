# LeadDesk Mini

LeadDesk Mini is a full-stack lead management application built as part of the **Digital Heroes Full Stack Development Internship Assignment**.

The application allows visitors to submit business enquiries through a public landing page while providing administrators with a secure dashboard to manage incoming leads.

---

## Features

### Public Website

- Responsive landing page
- Lead enquiry form
- Client-side form validation
- Server-side validation
- Store leads in MySQL database

### Admin Dashboard

- Secure Admin Login
- JWT Authentication
- Protected Routes
- View all leads
- Search leads
- Update lead status
- Delete leads

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcrypt
- mysql2
- dotenv
- cors

---

## Project Structure

```
LeadDesk-Mini/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── config/
│   ├── models/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Mariyam-760/leaddesk-mini
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=leaddesk_db

JWT_SECRET=your_jwt_secret
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|----------|-------------------------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Leads

| Method | Endpoint | Authentication |
|----------|--------------------------|----------------|
| POST | /api/leads | No |
| GET | /api/leads | Yes |
| PATCH | /api/leads/:id/status | Yes |
| DELETE | /api/leads/:id | Yes |

---

## Database

Database Name

```
leaddesk_db
```

Tables

- users
- leads

---

## Assignment Features Completed

- Responsive Landing Page
- Lead Submission Form
- MySQL Database Integration
- Admin Login
- JWT Authentication
- Protected Dashboard
- Search Leads
- Update Lead Status
- Delete Leads
- Client-side Validation
- Server-side Validation

---

## Deployment

Frontend

```
https://leaddesk-mini-lake.vercel.app/
```

Backend

```
https://leaddesk-mini-backend-sh7s.onrender.com/
```


## Author

**Safa Mariyam**

Digital Heroes Full Stack Development Internship Assignment