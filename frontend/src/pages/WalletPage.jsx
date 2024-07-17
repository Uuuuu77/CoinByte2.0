// WalletPage.jsx
import React from 'react';
import WalletOverview from '../components/Wallet/WalletOverview';
import DepositForm from '../components/Wallet/DepositForm';
import WithdrawForm from '../components/Wallet/WithdrawForm';
import TransferForm from '../components/Wallet/TransferForm';
import '../styles/WalletPage.css';

const WalletPage = () => {
  return (
    <div className="wallet-page">
      <WalletOverview />
      <DepositForm />
      <WithdrawForm />
      <TransferForm />
    </div>
  );
};

export default WalletPage;
