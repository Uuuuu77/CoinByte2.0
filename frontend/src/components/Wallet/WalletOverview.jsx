// WalletOverview.jsx
import React from 'react';
import './WalletOverview.css';

const WalletOverview = () => {
  // Dummy data, replace with real data
  const walletData = {
    BTC: 0.5,
    DOGE: 2000,
    USDT: 1000,
    LTC: 10,
    ETH: 2,
  };

  return (
    <div className="wallet-overview">
      <h2>Wallet Overview</h2>
      <ul>
        {Object.entries(walletData).map(([currency, amount]) => (
          <li key={currency}>
            {currency}: {amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletOverview;

