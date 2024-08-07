// TransferForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './TransferForm.css';

const TransferForm = () => {
  const [recipientId, setRecipientId] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/transfer', { recipientId, amount, currency });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error making transfer');
    }
  };

  return (
    <div className="transfer-form">
      <h2>Transfer Funds</h2>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          placeholder="Recipient ID"
          required
        />
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
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TransferForm;
