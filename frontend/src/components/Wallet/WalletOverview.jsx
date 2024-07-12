import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WalletOverview = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('/api/wallet/balance');
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="wallet-overview">
      <h2>Wallet Overview</h2>
      <p>Current Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default WalletOverview;
