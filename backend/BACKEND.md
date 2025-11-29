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