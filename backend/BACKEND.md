# Momentum Backend Plan

A robust Node.js backend API for a Todo application with user authentication and task management features.

# Table of Content

<ul style='list-style-type: none'>
    <li>1. <a href='#-features'>🚀 Features</a></li>
    <li>2. <a href='#-tech-stack'>🛠 Tech Stack</a></li>
    <li>3. <a href='#-prerequisites'>📋 Prerequisites</a></li>
    <li>4. <a href='#-installation'>⚙️ Installation</a></li>
    <li>5. <a href='#-database-models'>🗄 Database Models</a></li>
    <ul style='list-style-type: none'>
        <li>5.1. <a href='#user-model'>User model</a></li>
        <li>5.2. <a href='#task-model'>Task model</a></li>
    </ul>
    <li>6. <a href='#-api-endpoints'>🔌 API Endpoints</a></li>
    <ul style='list-style-type: none'>
        <li>6.1. <a href='#authentication-routes'>Authentication Routes</a></li>
        <ul style='list-style-type: none'>
            <li>6.1.1. <a href='#user-registration'>User Registration</a></li>
            <li>6.1.2. <a href='#user-login'>User Login</a></li>
            <li>6.1.3. <a href='#get-current-user'>Get current user</a></li>
        </ul>
        <li>6.2. <a href='#task-routes-protected'>Task Route (Protected)</a></li>
        <ul style='list-style-type: none'>
            <li>6.2.1. <a href='#get-all-tasks-for-current-user'>Get all tasks for current user</a></li>
            <li>6.2.2. <a href='#create-new-task'>Create new task</a></li>
            <li>6.2.3. <a href='#update-task'>Update task</a></li>
            <li>6.2.4. <a href='#delete-task'>Delete task</a></li>
            <li>6.2.5. <a href='#toggle-complete-status'>Toggle Complete Status</a></li>
        </ul>
    </ul>
    <li>7. <a href='#-security-features'>🛡 Security Features</a></li>
    <li>8. <a href='#-security-features'>🚦 Request/Response Examples</a></li>
    <ul style='list-style-type: none'>
        <li>8.1. <a href='#1-user-registration'>User Registration</a></li>
        <li>8.2. <a href='#2-create-task'>Create Task</a></li>
    </ul>
    <li>9. <a href='#-testing'>🧪 Testing</a></li>
    <li>10. <a href='#-test-documentation'>📄 Test Documentation</a></li>
    <li>11. <a href='#-backend-structure'>📁 Backend Structure</a></li>
    <li>12. <a href='#-deployment'>🚀 Deployment</a></li>
    <ul style='list-style-type: none'>
        <li>12.1. <a href='#local-deployment'>Local Deployment</a></li>
        <li>12.2. <a href='#production-deployment'>Production Deployment</a></li>
    </ul>
    <li>13. <a href='#-environment-variables'>🔧 Environment Variables</a></li>
    <li>14. <a href='#-support'>🆘 Support</a></li>
</ul>

## 🚀 Features

- **User Authentication**: JWT-based registration and login.
- **Task Management**: Full CRUD operations for tasks.
- **Priority System**: Tasks categorized as To Do, Do Today, and For Later.
- **Automatic Organization**: Tasks automatically move to Overdue column when deadlines passes.
- **Auto Cleanup**: Completed tasks are automatically deleted after 30 days.
- **Security**: Password hashing, input validation, and user data isolation.
- **RESTful API**: Clean and consistent API endpoints.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **Validation**: express-validator
- **Environment**: dotenv for configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Tailwind CSS (v4.0 or higher)
- React JS
- Express JS
- npm

## ⚙️ Installation

1. **Clone the repository**

```cmd
  git clone https://github.com/DevangPatani08/Task_Management_App_Project.git
  cd backend
```

2. **Install dependencies**

```cmd
  npm install
```

3. **Environment Configuration**
Create a .env file in the root directory:
```cmd
  mkdir .env
```
Inside .env file:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your_super_secret_jwt_key_change_in_production
```

4. **Start the server**
```cmd
# Development mode
npm run dev

# Production mode
npm start
```

## 🗄 Database Models

### User Model

```
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date
}
```

### Task Model

```
{
  message: String (required),
  priority: String (enum: ['todo', 'do-today', 'for-later']),
  deadline: Date (required),
  completed: Boolean (default: false),
  completedAt: Date,
  userId: ObjectId (ref: 'User'),
  createdAt: Date
}
```

## 🔌 API Endpoints

### Authentication Routes

#### User registration

```http
  POST /api/auth/register
```

| Parameter          | Type     | Description                     |
| :--------          | :------- | :-------------------------      |
| `user_name`        | `string` | **Required**. Unique user name  |
| `email`            | `string` | **Required**. Unique user email |
| `password`         | `string` | **Required**. Password that will be hashed using jwt & bcrypt packages |
| `confirm_password` | `string` | **Required**. Re-entered Password for confirmation but will not be added to database |

#### User login

```http
  POST /api/auth/login
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `email`    | `string` | **Required**. User email          |
| `password` | `string` | **Required**. User password       |

#### Get current user

```http
  GET /api/auth/me
```

### Task Routes (Protected)

#### Get all tasks for current user

```http
  GET /api/tasks
```

#### Create new task

```http
  POST /api/tasks
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `message`    | `string` | **Required**. Todo message/text |
| `priority` | `string` | **Required**. Priority options(To Do, Do Today or For Later) |
| `deadline` | `date` | **Required**. Task deadline date |
| `status` | `boolean` | Task completion status(true/false) |

#### Update task

```http
  PUT /api/tasks/:id
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `_id`    | `string` | **Required**. Id of the list item from the database. |
| `message`    | `string` | **Required**. Todo message/text |
| `priority` | `string` | **Required**. Priority options(To Do, Do Today or For Later) |
| `deadline` | `date` | **Required**. Task deadline date |
| `status` | `boolean` | Task completion status(true/false) |

#### Delete task

```http
  DELETE /api/tasks/:id
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `_id`    | `string` | **Required**. Id of the list item from the database. |

#### Toggle complete status

```http
  PATCH /api/tasks/:id/complete
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `_id`    | `string` | **Required**. Id of the list item from the database. |

## 🛡 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Input validation and sanitization
- User data isolation
- CORS configuration
- Environment variable protection

## 🚦 Request/Response Examples

### 1. User Registration

Request: POST /api/auth/register
```
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### 2. Create Task

Request: POST /api/tasks

Authorization: Bearer <jwt_token>

```
{
  "message": "Complete project documentation",
  "priority": "do-today",
  "deadline": "2024-01-15T23:59:00.000Z"
}
```

## 🧪 Testing

Use Postman or any API client to test the endpoints:
- Register a new user.
- Login to get JWT token.
- Use the token in Authorization header for task endpoints.
- Test all CRUD(Create, Read, Update and Delete) operations.

## 📄 Test Documentation

This [Test Documentation](https://github.com/DevangPatani08/Task_Management_App_Project/blob/3446824d423ee0c2298f9457489f3840982239ea/todo-backend/API_TEST_DOCUMENTATION.md) contains the API tests methods, issues you mite face and expected test results with screenshots.

## 📁 Backend Structure

    backend/
    ├── controllers/                 # Route controllers
    ├──├── authController.js         # User authentication functions
    ├──├── taskController.js         # Task CRUD functions
    ├── middleware/                  # Custom middleware (auth, validation)
    ├──├── auth.js                   # Authentication middleware file
    ├── models/                      # MongoDB models
    ├──├── tasksModel.js             # Task Schema 
    ├──├── usersModel.js             # User Schema 
    ├── routes/                      # API routes
    ├──├── auth.js                   # User auth routes
    ├──├── tasks.js                  # Task routes
    ├── testIamges/                  # Screenshots/Images of API test using postman
    ├── API_TEST_DOCUMENTATION.md    # API Test documentation file
    ├── .env                         # Environmental Variable (Not Uploaded to Git)
    ├── server.js                    # Application entry point
    └── package.json

## 🚀 Deployment

### Local Deployment
- Ensure MongoDB is running
- Set environment variables
- Run ```npm start```

### Production Deployment
- Set ```NODE_ENV=production```
- Use MongoDB Atlas for database
- Set strong JWT secret
- Configure CORS for your frontend domain

## 🔧 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Variable | Description | Default |
| :------- | :---------- | :------ |
| `NODE_ENV` | Application environment | development |
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/todoapp |
| `JWT_SECRET` | Secret key for JWT tokens | Required |

## 🆘 Support

For support, email devang.patani0806@gmail.com or create an issue in the repository.