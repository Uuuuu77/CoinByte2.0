import React, { useState } from 'react';
import axios from 'axios';
import './WithdrawForm.css';

const WithdrawForm = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');
  const [walletAddress, setWalletAddress] = useState('');
  const [fiatCurrency, setFiatCurrency] = useState('USD');
  const [destination, setDestination] = useState('');
  const [withdrawMethod, setWithdrawMethod] = useState('wallet'); // 'wallet' or 'bank'
  const [message, setMessage] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/wallet/withdraw', {
        amount,
        currency,
        walletAddress: withdrawMethod === 'wallet' ? walletAddress : '',
        fiatCurrency: withdrawMethod === 'bank' ? fiatCurrency : '',
        destination: withdrawMethod === 'bank' ? destination : '',
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
        
        <div className="withdraw-method">
          <label>
            <input
              type="radio"
              value="wallet"
              checked={withdrawMethod === 'wallet'}
              onChange={() => setWithdrawMethod('wallet')}
            />
            Wallet Address
          </label>
          <label>
            <input
              type="radio"
              value="bank"
              checked={withdrawMethod === 'bank'}
              onChange={() => setWithdrawMethod('bank')}
            />
            Bank Account
          </label>
        </div>

        {withdrawMethod === 'wallet' ? (
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Wallet Address"
            required
          />
        ) : (
          <>
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
          </>
        )}
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WithdrawForm;
