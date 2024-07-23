// ColdStorageForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ColdStorageForm.css';

const ColdStorageForm = () => {
  const [amount, setAmount] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('Bitcoin');
  const [message, setMessage] = useState('');

  const handleColdStorage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/cold-storage', { amount, cryptocurrency });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error storing in cold storage');
    }
  };

  return (
    <div className="cold-storage-form">
      <h2>Cold Storage</h2>
      <form onSubmit={handleColdStorage}>
        <select
          value={cryptocurrency}
          onChange={(e) => setCryptocurrency(e.target.value)}
          required
        >
          <option value="Bitcoin">Bitcoin</option>
          <option value="Dogecoin">Dogecoin</option>
          <option value="Tether">Tether</option>
          <option value="Litecoin">Litecoin</option>
          <option value="Ethereum">Ethereum</option>
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Store in Cold Storage</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ColdStorageForm;
