import React from 'react';
import TradeForm from './TradeForm';
import OrderBook from './OrderBook';

const ExchangeOverview = () => {
  return (
    <div className="exchange-overview">
      <h2>Exchange Overview</h2>
      <div className="exchange-content">
        <TradeForm />
        <OrderBook />
      </div>
    </div>
  );
};

export default ExchangeOverview;
