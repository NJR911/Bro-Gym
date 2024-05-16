/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Initialize user state from localStorage
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
    const [token, setToken] = useState(storedToken);

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    
    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            const token = response.data?.authorization.token;
            const user = response.data?.user;

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setToken(token);
            setUser(user);
            console.log('Logged in:', response.data);
        } catch (error) {
            console.error('Login error:', error.response.data);
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name, email, password
            });
            const token = response.data?.authorization.token;
            const user = response.data?.user;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setToken(token);
            setUser(user);
            console.log('Registered:', response.data);
        } catch (error) {
            console.error('Registration error:', error.response.data);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setToken(null);
            setUser(null);
            console.log('Logged out');
        } catch (error) {
            console.error('Logout error:', error.response.data);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// localStorage.clear()
