// WalletPage.jsx
import React from 'react';
import WalletOverview from '../components/Wallet/WalletOverview';
import Transactions from '../components/Wallet/Transactions';
import DepositWithdraw from '../components/Wallet/DepositWithdraw';
import '../styles/WalletPage.css';

const WalletPage = () => {
  return (
    <div className="wallet-page">
      <h2>Wallet</h2>
      <WalletOverview />
      <Transactions />
      <DepositWithdraw />
    </div>
  );
};

export default WalletPage;
