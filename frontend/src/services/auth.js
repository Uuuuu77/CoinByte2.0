// auth.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  localStorage.setItem('token', response.data.token);
  return response.data.user; // Return user data
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  localStorage.setItem('token', response.data.token);
  return response.data.user; // Return user data
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.user;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
};
