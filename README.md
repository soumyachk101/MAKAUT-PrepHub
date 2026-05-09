# MAKAUT-PrepHub

A centralized, easily accessible platform for MAKAUT engineering students to find structured study materials, previous year questions (PYQs), and notes for their semester preparation.

## Quick Start

### Backend

To start the backend server, simply navigate to the `backend` directory and run:

```bash
cd backend
npm install
node run_server.js
```
The server will be available at `http://localhost:5000`. This mock server uses an in-memory database and is pre-seeded with dummy data.

### Frontend

To run the Next.js frontend, navigate to the `frontend` directory and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`. Make sure to have the backend running so data can be loaded properly.

## Technical Requirements
* Node.js v18 or later

## Tech Stack
* **Frontend:** Next.js (App Router), React, Tailwind CSS, Lucide Icons
* **Backend:** Node.js, Express, Mongoose, mongodb-memory-server
