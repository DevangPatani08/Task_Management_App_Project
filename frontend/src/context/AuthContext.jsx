import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/auth";


const AuthContext = createContext();

// Auth hook
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuth must be used within the authProvider!...');

    return (context);
};

// Auth Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {

            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const userData = await AuthService.getCurrentUser();
                    setUser(userData);
                }

            } catch (error) {
                console.log(error);
                localStorage.removeItem('token');
                setUser(null);

            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);
    
    const login = async (credentials) => {
        const response = await AuthService.login(credentials);
        localStorage.setItem('token', response.token);
        setUser(response.user);
    
        return (response);
    };

    const register = async (userData) => {
        try {
            const response = await AuthService.register(userData);
            localStorage.setItem('token', response.token);
            setUser(response.user);
            
            return (response);

        } catch (error) {
            console.error(`Registration Error: ${error}`);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
    );
};