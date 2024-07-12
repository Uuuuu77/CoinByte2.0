// ExchangePage.jsx
import React from 'react';
import ExchangeOverview from '../components/Exchange/ExchangeOverview';
import OrderBook from '../components/Exchange/OrderBook';
import TradeForm from '../components/Exchange/TradeForm';
import '../styles/ExchangePage.css';

const ExchangePage = () => {
  return (
    <div className="exchange-page">
      <h2>Exchange</h2>
      <ExchangeOverview />
      <OrderBook />
      <TradeForm />
    </div>
  );
};

export default ExchangePage;
