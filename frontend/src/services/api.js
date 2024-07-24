// api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Fetches the activity feed data from the server.
 * @returns {Promise<Array>} The list of activities.
 */
export const fetchActivities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/activity-logs`);
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
    const response = await axios.get(`${API_BASE_URL}/trade/market-data`);
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
    const response = await axios.get(`${API_BASE_URL}/news`);
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
    const response = await axios.get(`${API_BASE_URL}/wallet/portfolio`);
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
    const response = await axios.get(`${API_BASE_URL}/wallet/recent-transactions`);
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
    const response = await axios.get(`${API_BASE_URL}/trade/performance-chart`);
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
    const response = await axios.get(`${API_BASE_URL}/user/profile`);
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
    const response = await axios.get(`${API_BASE_URL}/messages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Function to create a new post
export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/social/posts`, postData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Function to create a new comment
export const createComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/social/posts/${postId}/comments`, commentData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};

// Function to fetch comments for a specific post
export const fetchComments = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/social/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

/**
 * Fetches the notifications from the server.
 * @returns {Promise<Array>} The list of notifications.
 */
export const fetchNotifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/notifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

/**
 * Fetches the support data from the server.
 * @returns {Promise<Object>} The support data.
 */
export const fetchSupportData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/support`);
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
    const response = await axios.post(`${API_BASE_URL}/subscribe`, subscriptionData);
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
