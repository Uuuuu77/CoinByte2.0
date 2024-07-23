// WithdrawForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './WithdrawForm.css';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/withdraw', { amount, currency, destination });
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
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} required>
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="DOGE">Dogecoin (DOGE)</option>
          <option value="USDT">Tether (USDT)</option>
          <option value="LTC">Litecoin (LTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
        </select>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination Address"
          required
        />
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WithdrawForm;
