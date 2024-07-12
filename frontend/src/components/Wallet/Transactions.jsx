import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/wallet/transactions');
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.description}</p>
            <p>Amount: ${transaction.amount}</p>
            <span>{new Date(transaction.date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
