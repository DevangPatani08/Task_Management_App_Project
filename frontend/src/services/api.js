import axios from 'axios';

// api base url
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// api endpoint
const api = axios.create({ baseURL: API_BASE_URL });

// add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    
    return (config);
});

// handle token expire
api.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (Promise.reject(error));
});

export default api;
