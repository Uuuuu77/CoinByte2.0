const axios = require('axios');

// Binance API
const BINANCE_API_BASE_URL = 'https://api.binance.com';
const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Function to get price data from Binance
async function getBinancePrice(symbol) {
    try {
        const response = await axios.get(`${BINANCE_API_BASE_URL}/api/v3/ticker/price`, {
            params: { symbol }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Binance price data:', error);
        throw error;
    }
}

// Function to get price data from CoinGecko
async function getCoinGeckoPrice(id) {
    try {
        const response = await axios.get(`${COINGECKO_API_BASE_URL}/simple/price`, {
            params: { ids: id, vs_currencies: 'usd' }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching CoinGecko price data:', error);
        throw error;
    }
}

module.exports = {
    getBinancePrice,
    getCoinGeckoPrice
};
