import { useEffect, useState, createContext, useContext } from 'react';
import { authService } from '../services/auth';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within the AuthProvider!...');
    }

    return (context);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const userData = await authService.getCurrentUser();
                setUser(userData);
            }
        } catch (error) {
            console.log(error);
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        const response = await authService.login(credentials);
        localStorage.setItem('token', response.token);
        setUser(response.user);
        return (response);
    };

    const register = async (userData) => {
        const response = await authService.register(userData);
        localStorage.setItem('token', response.token);
        setUser(response.user);
        return (response);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const value = { user, login, register, logout, loading };

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
};