
# Momentum Frontend Plan

A modern, responsive React frontend for the TodoApp with beautiful UI and seamless user experience.


## ✨ Features

- **Modern UI**: Built with Tailwind CSS for a clean, responsive design
- **User Authentication**: Login and registration with persistent sessions
- **Task Management**: Interactive 4-column Kanban board
- **Real-time Updates**: Live task updates without page reload
- **Modal Interfaces**: Popup forms for task creation and editing
- **Confirmation Dialogs**: Safe deletion with confirmation modals
- **Priority System**: Visual priority indicators and automatic categorization
- **Overdue Detection**: Automatic overdue task highlighting
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
## 🛠 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: React Context API + Custom Hooks
- **Icons**: Heroicons (SVG)
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js (v16 or higher)
- React Js
- npm or yarn
- Backend API running (see backend README)
- Figma
- Vite React JS
- Tailwind CSS

## ⚙️ Installation

1. **Clone the repository**

```cmd
   git clone <your-repo-url> (only if not done during backend setup)
   cd frontend
```

2. **Install dependencies**

```cmd
  npm install
```

3. Environment Configuration

Create a .env file in the root directory:

```cmd
   mkdir .env
```

Inside .env file:

```env
  VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start the development server

```cmd
  npm run dev
```

5. Build for production

```cmd
   npm run build
```




## 🎨 Project Structure

    frontend/
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # Reusable components
    │   │   ├── auth/       # Authentication components
    │   │   ├── common/     # Shared components (Modal, Navbar)
    │   │   └── tasks/      # Task-related components
    │   ├── context/        # React Context providers
    │   ├── hooks/          # Custom React hooks
    │   ├── pages/          # Page components
    │   ├── services/       # API service layer
    │   └── utils/          # Utility functions
    └── package.json

## 🧩 Key Components

### Authentication
- `AuthContext` - Global authentication state management
- `Login Page & Signup Page` - User authentication forms
- `ProtectedRoute` - Route protection wrapper

### Task Management
- `TaskBoard` - Main 4-column Kanban board
- `TaskColumn` - Individual column component
- `TaskCard` - Individual task display with actions
- `TaskForm` - Create/edit task modal form

### Common Components
- `Navbar` - Global navigation with auth state
- `Modal` - Reusable modal component
- `ConfirmationModal` - Delete confirmation dialog
## 🔌 API Integration

#### Auth Service

```javascript
   authService.login(credentials)
   authService.signup(userData)
   authService.getCurrentUser()
```

#### Task Service

```javascript
   taskService.getAllTasks()
   taskService.createTask(taskData)
   taskService.updateTask(id, taskData)
   taskService.deleteTask(id)
   taskService.toggleComplete(id)
```

## 🎯 Task Categories

The application features 4 main task columns:
- **To Do** - Default priority tasks
- **Do Today** - High priority tasks for today
- **For Later** - Lower priority tasks
- **Overdue** - Automatically detected overdue tasks


## 🎨 Styling & Design

- **Color Scheme:** Indigo primary with semantic colors for priorities
- **Responsive:** Mobile-first design with Tailwind CSS
- **Icons:** Heroicons SVG icons for consistent design
- **Loading States:** Smooth loading indicators
- **Error Handling:** User-friendly error messages

## 🚀 Key Features

### User Experience
- Persistent login sessions
- Form validation with helpful error messages
- Loading states during API calls
- Confirmation for destructive actions
- Responsive design for all devices

### Task Management
- Drag-and-drop like column organization
- Real-time status updates
- Priority-based visual indicators
- Deadline tracking with overdue detection
- Completed task management

## 📱 Pages

### Home Page (/)
- Landing page with feature overview
- Call-to-action for new users
- Responsive hero section

### Authentication Pages (/login, /signup)
- Clean, accessible forms
- Form validation
- Error handling

### Todo Page (/todo)
- Protected route (requires authentication)
- Main task management interface
- 4-column Kanban board
- Create task button

### Contact Page (/contact)
- Contact form
- Company information

## 🔧 Custom Hooks

### 1. useAuth
Manages authentication state and provides login/logout functionality.

### 2. useTasks
Manages task state and provides CRUD operations for tasks.

## 🛠 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Environment Variables

| Variable | Description |	Default |
| :------- | :---------- | :------ |
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` |

## 🚀 Deployment

### Local Development
- Ensure backend is running
- Set `VITE_API_BASE_URL` in `.env`
- Run `npm run dev`

### Production Build
- Update `VITE_API_BASE_URL` to production backend
- Run `npm run build`
- Deploy the `dist` folder to your hosting service

### Recommended Hosting
- **Netlify** (Static hosting)
- **Vercel** (Static hosting)
- **GitHub Pages** (Static hosting)


## 🧪 Testing

### Manual Testing Checklist
- User registration and login
- Task creation with different priorities
- Task editing and deletion
- Task completion toggling
- Automatic overdue detection
- Responsive design on different screens
- Form validation
- Error handling
## 🐛 Common Issues

- **CORS Errors:** Ensure backend CORS is configured for frontend domain
- **Authentication Issues:** Check JWT token storage and API headers
- **API Connection:** Verify `VITE_API_BASE_URL` is correct

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


## 🆘 Support

For support, email devang.patani0806@gmail.com or create an issue in the repository.