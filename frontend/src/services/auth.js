import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this URL to your backend API

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  localStorage.setItem('token', response.data.token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  localStorage.setItem('token', response.data.token);
};
