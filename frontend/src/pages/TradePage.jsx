// TradePage.jsx
import React from 'react';
import TradeOverview from '../components/Trade/TradeOverview';
import TradeForm from '../components/Trade/TradeForm';
import PremiumTradeForm from '../components/Trade/PremiumTradeForm';
import OrderBook from '../components/Trade/OrderBook';
import TradeHistory from '../components/Trade/TradeHistory';
import TradeStats from '../components/Trade/TradeStats';
import '../styles/TradePage.css';

const TradePage = () => {
  return (
    <div className="trade-page">
      <h2>Trade Cryptocurrencies and Assets</h2>
      <TradeOverview />
      <div className="trade-forms">
        <TradeForm />
        <PremiumTradeForm />
      </div>
      <OrderBook />
      <TradeHistory />
      <TradeStats />
    </div>
  );
};

export default TradePage;
