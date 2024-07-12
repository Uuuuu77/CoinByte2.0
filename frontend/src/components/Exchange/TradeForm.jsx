import React, { useState } from 'react';

const TradeForm = () => {
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleTrade = (e) => {
    e.preventDefault();
    // Handle trade logic here
    console.log(`Trading ${amount} at ${price}`);
  };

  return (
    <div className="trade-form">
      <h3>Trade Form</h3>
      <form onSubmit={handleTrade}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Trade</button>
      </form>
    </div>
  );
};

export default TradeForm;
