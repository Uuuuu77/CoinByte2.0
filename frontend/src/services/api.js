// api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
});

/**
 * Fetches the activity feed data from the server.
 * @returns {Promise<Array>} The list of activities.
 */
export const fetchActivities = async () => {
  try {
    const response = await axiosInstance.get('/activity-logs');
    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

/**
 * Fetches the market data from the server.
 * @returns {Promise<Array>} The market data.
 */
export const fetchMarketData = async () => {
  try {
    const response = await axiosInstance.get('/trade/market-data');
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

/**
 * Fetches the news feed data from the server.
 * @returns {Promise<Array>} The list of news items.
 */
export const fetchNews = async () => {
  try {
    const response = await axiosInstance.get('/news');
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

/**
 * Fetches the portfolio data from the server.
 * @returns {Promise<Object>} The portfolio data.
 */
export const fetchPortfolio = async () => {
  try {
    const response = await axiosInstance.get('/wallet/portfolio');
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
};

/**
 * Fetches the recent transactions data from the server.
 * @returns {Promise<Array>} The list of recent transactions.
 */
export const fetchRecentTransactions = async () => {
  try {
    const response = await axiosInstance.get('/wallet/recent-transactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching recent transactions:', error);
    throw error;
  }
};

/**
 * Fetches the performance chart data from the server.
 * @returns {Promise<Object>} The performance chart data.
 */
export const fetchPerformanceChartData = async () => {
  try {
    const response = await axiosInstance.get('/trade/performance-chart');
    return response.data;
  } catch (error) {
    console.error('Error fetching performance chart data:', error);
    throw error;
  }
};

/**
 * Fetches the user data from the server.
 * @returns {Promise<Object>} The user data.
 */
export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get('/user/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Fetches the messages from the server.
 * @returns {Promise<Array>} The list of messages.
 */
export const fetchMessages = async () => {
  try {
    const response = await axiosInstance.get('/messages');
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

/**
 * Fetches the notifications from the server.
 * @returns {Promise<Array>} The list of notifications.
 */
export const fetchNotifications = async () => {
  try {
    const response = await axiosInstance.get('/notifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

/**
 * Fetches the social posts from the server.
 * @returns {Promise<Array>} The list of posts.
 */
export const fetchSocialPosts = async () => {
  try {
    const response = await axiosInstance.get('/social/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching social posts:', error);
    throw error;
  }
};

/**
 * Fetches the support data from the server.
 * @returns {Promise<Object>} The support data.
 */
export const fetchSupportData = async () => {
  try {
    const response = await axiosInstance.get('/support');
    return response.data;
  } catch (error) {
    console.error('Error fetching support data:', error);
    throw error;
  }
};

/**
 * Subscribes a user to the newsletter.
 * @param {Object} subscriptionData - The subscription data (e.g., email).
 * @returns {Promise<Object>} The subscription response.
 */
export const subscribeToNewsletter = async (subscriptionData) => {
  try {
    const response = await axiosInstance.post('/subscribe', subscriptionData);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
