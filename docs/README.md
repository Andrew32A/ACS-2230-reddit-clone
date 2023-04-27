# Backend-focused Reddit Clone

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose (ODM)
- JSON Web Tokens (JWT)

## Features
- Authentication & Authorization
- User registration with email and password
- User login with JWT authentication
- Authorization checks for CRUD operations on posts and comments
- Posts & Comments
- Create, read, update, and delete posts
- Comment on posts
- Upvote and downvote posts and comments
- Sorting & Filtering
- Sort posts by date, score, or number of comments
- Filter posts by subreddit or user

# Architecture
The backend is built using Node.js and Express.js. MongoDB is used as the database with Mongoose as the ODM. JSON Web Tokens (JWT) are used for authentication and authorization.

## Models
- User: Stores user information such as email, password hash, and JWT token.
- Post: Stores post information such as title, body, subreddit, score, and author.
- Comment: Stores comment information such as body, post, score, and author.

## Routes
- Authentication Routes: /api/auth/register, /api/auth/login
- Post Routes: /api/posts, /api/posts/:id
- Comment Routes: /api/posts/:id/comments, /api/posts/:postId/comments/:commentId
- User Routes: /api/users/:id

## Controllers
- Authentication Controller: Handles user registration and login.
- Post Controller: Handles CRUD operations on posts.
- Comment Controller: Handles CRUD operations on comments.
- User Controller: Handles user profile and activity.

## Middleware
- JWT Middleware: Verifies JWT token for authenticated routes.
- Authorization Middleware: Checks user authorization for CRUD operations on posts and comments.

# Conclusion
This Reddit clone backend provides basic features such as authentication, authorization, CRUD operations on posts and comments, and sorting and filtering. With the technologies used, the backend is scalable, maintainable, and secure.