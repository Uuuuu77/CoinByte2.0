import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WalletOverview = () => {
  const [balance, setBalance] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const balanceResponse = await axios.get('/api/wallet/balance');
        setBalance(balanceResponse.data.balance);

        const activitiesResponse = await axios.get('/api/wallet/activities');
        setActivities(activitiesResponse.data.activities);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      }
    };

    fetchWalletData();
  }, []);

  return (
    <div className="wallet-overview">
      <h2>Wallet Overview</h2>
      <p>Balance: ${balance}</p>
      <h3>Recent Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <p>{activity.description}</p>
            <span>{new Date(activity.date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletOverview;
