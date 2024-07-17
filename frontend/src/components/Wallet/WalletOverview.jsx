// src/components/Wallet/WalletOverview.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WalletOverview.css';

const WalletOverview = () => {
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const response = await axios.get('/api/wallet');
        setWallet(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching wallet:', error);
        setLoading(false);
      }
    };
    fetchWallet();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wallet) {
    return <div>Wallet not found</div>;
  }

  return (
    <div className="wallet-overview">
      <h2>Wallet Overview</h2>
      <p>Balance: {wallet.balance} BTC</p>
      <h3>Recent Transactions</h3>
      <ul>
        {wallet.transactions.map(transaction => (
          <li key={transaction._id}>
            {transaction.type} - {transaction.amount} BTC - {transaction.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletOverview;
