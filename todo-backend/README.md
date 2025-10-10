# Momentum Backend Plan

A robust Node.js backend API for a Todo application with user authentication and task management.

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

### 📄 Test Documentation

This [Test Documentation]() contains the API tests methods, issues you mite face and expected test results with screenshots.

## 📁 Backend Structure

    backend/
    ├── config/          # Database configuration
    ├──├──
    ├── controllers/     # Route controllers
    ├──├──
    ├── middleware/      # Custom middleware (auth, validation)
    ├──├──
    ├── models/          # MongoDB models
    ├──├──
    ├── routes/          # API routes
    ├──├──
    ├── utils/           # Utility functions
    ├──├──
    ├── server.js        # Application entry point
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

##
<!-- ## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) -->

## 🆘 Support

For support, email devang.patani0806@gmail.com or create an issue in the repository.