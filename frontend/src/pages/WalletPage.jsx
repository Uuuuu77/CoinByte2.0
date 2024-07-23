// src/pages/WalletPage.jsx
import React from 'react';
import WalletOverview from '../components/Wallet/WalletOverview';
import DepositForm from '../components/Wallet/DepositForm';
import WithdrawForm from '../components/Wallet/WithdrawForm';
import TransferForm from '../components/Wallet/TransferForm';
import ColdStorageForm from '../components/Wallet/ColdStorageForm';
import '../styles/WalletPage.css';

const WalletPage = () => {
  return (
    <div className="wallet-page">
      <div className="wallet-overview-section">
        <WalletOverview />
      </div>
      <div className="wallet-forms-section">
        <div className="wallet-row">
          <div className="wallet-form">
            <DepositForm />
          </div>
          <div className="wallet-form">
            <WithdrawForm />
          </div>
        </div>
        <div className="wallet-row">
          <div className="wallet-form">
            <TransferForm />
          </div>
          <div className="wallet-form">
            <ColdStorageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
