import api from './api';

export const taskService = {
    async getAllTasks() {
        // Fetch all tasks using GET method
        const response = await api.get('/tasks');
        return (response.data);
    },

    async createTask(taskData) {
        // Create a task using POST method
        const response = await api.post('/tasks', taskData);
        return (response.data);
    },
    
    async updateTask(id, taskData) {
        // update a task using PUT method
        const response = await api.put(`/tasks/${id}`, taskData);
        return (response.data);
    },
    
    async deleteTask(id) {
        // Delete a task using DELETE method
        const response = await api.delete(`/tasks/${id}`);
        return (response.data);
    },
    
    async toggleComplete(id) {
        // Toggle complete status of a task using PATCH method
        const response = await api.patch(`/tasks/${id}/toggle`);
        return (response.data);
    }
}