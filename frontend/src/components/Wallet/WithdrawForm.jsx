// WithdrawForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './WithdrawForm.css';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [fiatAmount, setFiatAmount] = useState('');
  const [fiatCurrency, setFiatCurrency] = useState('USD');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/withdraw', {
        amount,
        currency,
        fiatAmount,
        fiatCurrency,
        destination,
      });
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
          placeholder="Cryptocurrency Amount"
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
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Wallet Address"
          required
        />
        <select value={fiatCurrency} onChange={(e) => setFiatCurrency(e.target.value)} required>
          <option value="USD">USD</option>
          <option value="KSH">KSH</option>
          <option value="GBP">GBP</option>
          <option value="Euro">Euro</option>
        </select>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination Bank Account"
          required
        />
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WithdrawForm;
