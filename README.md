# Connectify - Social Media Feed Application 🚀

Connectify is a full-stack social media feed application where users can create accounts, login, create posts, like posts, and comment on posts.

This project is built using the MERN stack and demonstrates frontend development, backend API creation, database management, authentication, and deployment.

## Project Link - [https://connectify-social-media-app-chi.vercel.app/](https://connectify-social-media-app-chi.vercel.app/)

---

## Features ✨

- User Registration
- User Login Authentication
- JWT based authentication
- Create new posts
- View all posts
- Like posts
- Add comments on posts
- Responsive social media style UI
- Trending section
- MongoDB database integration

---

## Tech Stack 🛠️

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt Password Encryption

### Database
- MongoDB Atlas

### Deployment
- Frontend: Vercel
- Backend: Render

---

## Project Structure 📂

```
connectify-social-media-app
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── pages
    ├── components
    └── package.json
```

---

## Application Flow 🔄

1. User creates an account using the registration page.
2. User details are stored securely in MongoDB.
3. User logs in using email and password.
4. Backend verifies the user and generates a JWT token.
5. After login, users can access the social media feed.
6. Users can create posts, like posts, and add comments.

---

## API Endpoints 🌐

### Authentication

**Register User**
```
POST /api/auth/register
```

Request:
```json
{
  "username": "user",
  "email": "user@gmail.com",
  "password": "123456"
}
```

**Login User**
```
POST /api/auth/login
```

Request:
```json
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "JWT_TOKEN"
}
```

### Posts

**Get all posts**
```
GET /api/posts
```

**Create post**
```
POST /api/posts
```

**Like post**
```
PUT /api/posts/like/:id
```

### Comments

**Get comments**
```
GET /api/comments/:postId
```

**Add comment**
```
POST /api/comments/:postId
```

---

## Installation and Setup ⚙️

Clone the repository:
```bash
git clone https://github.com/SrishtiSingh100/connectify-social-media-app.git
```

Go inside project:
```bash
cd connectify-social-media-app
```

### Backend Setup

Open backend folder:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5004
```

Run backend:
```bash
npm run dev
```

Backend runs on:
```
http://localhost:5004
```

### Frontend Setup

Open frontend folder:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start frontend:
```bash
npm start
```

Frontend runs on:
```
http://localhost:3000
```

---

## Deployment 🚀

- Frontend is deployed using **Vercel**.
- Backend is deployed using **Render**.
- **MongoDB Atlas** is used as the cloud database.

---

## Learning Outcome 📚

Through this project, I learned:

- [x] Building REST APIs using Express.js
- [x] Connecting frontend and backend
- [x] Managing MongoDB databases
- [x] Implementing authentication
- [x] Deploying full-stack applications

---

## Author

**Srishti Singh**
GitHub: [https://github.com/SrishtiSingh100](https://github.com/SrishtiSingh100)
