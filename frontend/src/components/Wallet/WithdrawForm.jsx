// src/components/Wallet/WithdrawForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './WithdrawForm.css';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/withdraw', { amount });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error making withdrawal');
    }
  };

  return (
    <div className="withdraw-form">
      <h2>Withdraw Funds</h2>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WithdrawForm;
