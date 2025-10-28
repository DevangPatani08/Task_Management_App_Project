import api from "./api";

export const authService = {
    async login(credentials) {
        // login a user using POST method
        const response = await api.post('/auth/login', credentials);
        return (response.data);
    },
    async register(userData) {
        // Register a user using POSt method
        const response = await api.post('/auth/register', userData);
        return (response.data);
    },
    async getCurrentUser() {
        // Get the current user using GET method
        const response = await api.get('/auth/me');
        return (response.data.user);
    }
}