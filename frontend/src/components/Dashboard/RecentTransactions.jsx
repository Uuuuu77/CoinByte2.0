import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecentTransactions.css';

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions'); // Replace with your API endpoint
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            <p>{transaction.name}: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
