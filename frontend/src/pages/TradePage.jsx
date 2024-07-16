// TradePage.jsx
import React, { useEffect, useState } from 'react';
import TradeOverview from '../components/Trade/TradeOverview';
import TradeForm from '../components/Trade/TradeForm';
import PremiumTradeForm from '../components/Trade/PremiumTradeForm';
import OrderBook from '../components/Trade/OrderBook';
import TradeHistory from '../components/Trade/TradeHistory';
import TradeStats from '../components/Trade/TradeStats';
import { fetchMarketData, fetchRecentTransactions } from '../services/api'; // Import API calls
import '../styles/TradePage.css';

const TradePage = () => {
  const [marketData, setMarketData] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const data = await fetchMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    const loadTransactions = async () => {
      try {
        const data = await fetchRecentTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    loadMarketData();
    loadTransactions();
  }, []);

  return (
    <div className="trade-page">
      <h2>Trade Cryptocurrencies and Assets</h2>
      <TradeOverview marketData={marketData} />
      <div className="trade-forms">
        <TradeForm />
        <PremiumTradeForm />
      </div>
      <OrderBook />
      <TradeHistory transactions={transactions} />
      <TradeStats />
    </div>
  );
};

export default TradePage;
