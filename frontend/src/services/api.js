// src/services/api.js
import axios from 'axios';

// Base URL for the backend server
const BASE_URL = 'http://localhost:5000/api'; // Adjust if your backend runs on a different port or domain

// Function to handle API requests
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example of an API call to get user data
export const getUserData = async (userId) => {
    try {
        const response = await api.get(`/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

// Example of an API call to login
export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Add other API functions as needed
