import axios from 'axios';

// set base url as the base url value from the .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// create a api endpoint using axios
const api = axios.create({ baseURL: API_BASE_URL });

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return (config);
});

// Handle token expiration
api.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login'
    }

    return Promise.reject(error);
});

export default api;