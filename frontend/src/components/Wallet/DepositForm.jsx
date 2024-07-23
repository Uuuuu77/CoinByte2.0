// DepositForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './DepositForm.css';

const DepositForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [message, setMessage] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/deposit', { amount, currency });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error making deposit');
    }
  };

  return (
    <div className="deposit-form">
      <h2>Deposit Funds</h2>
      <form onSubmit={handleDeposit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} required>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="DOGE">Dogecoin (DOGE)</option>
          <option value="USDT">Tether (USDT)</option>
          <option value="LTC">Litecoin (LTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
        </select>
        <button type="submit">Deposit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DepositForm;
