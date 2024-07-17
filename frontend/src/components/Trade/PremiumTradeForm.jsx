// PremiumTradeForm.jsx
import React, { useState } from 'react';
import './PremiumTradeForm.css';

const PremiumTradeForm = () => {
  const [crypto, setCrypto] = useState('');
  const [asset, setAsset] = useState('');

  const handleTrade = (e) => {
    e.preventDefault();
    console.log(`Trading ${crypto} against ${asset}`);
  };

  return (
    <div className="premium-trade-form">
      <h3>Premium Trade Form</h3>
      <form onSubmit={handleTrade}>
        <label>Cryptocurrency:</label>
        <select
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          required
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="litecoin">Litecoin</option>
          <option value="dogecoin">Dogecoin</option>
          <option value="tether">Tether</option>
        </select>
        <label>Asset:</label>
        <select
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          required
        >
          <option value="stocks">Stocks</option>
          <option value="forex">Forex</option>
          <option value="real-estate">Real Estate</option>
          {/* Add more options */}
        </select>
        <button type="submit" className="trade-button">Trade</button>
      </form>
    </div>
  );
};

export default PremiumTradeForm;
