import api from './api.js';

export const taskServices = {
    async getAllTasks() {
        const res = await api.get('/tasks');
        return (res.data);
    },
    async createTask(taskData) {
        const res = await api.post('/tasks', taskData);
        return (res.data);
    },
    async updateTask(id, taskData) {
        
        const res = await api.put(`/tasks/${id}`, taskData);
        return (res.data);
    },
    async deleteTask(id) {
        const res = await api.delete(`/tasks/${id}`);
        return (res.data);
    },
    async toggleComplete(id) {
        const res = await api.patch(`/tasks/${id}/toggle`);
        return (res.data);
    }
};