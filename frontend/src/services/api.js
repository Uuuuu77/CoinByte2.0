// api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com'; // Replace with your actual API base URL

/**
 * Fetches the activity feed data from the server.
 * @returns {Promise<Array>} The list of activities.
 */
export const fetchActivities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/activities`);
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
    const response = await axios.get(`${API_BASE_URL}/api/market-data`);
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
    const response = await axios.get(`${API_BASE_URL}/api/news`);
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
    const response = await axios.get(`${API_BASE_URL}/api/portfolio`);
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
    const response = await axios.get(`${API_BASE_URL}/api/recent-transactions`);
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
    const response = await axios.get(`${API_BASE_URL}/api/performance-chart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching performance chart data:', error);
    throw error;
  }
};
