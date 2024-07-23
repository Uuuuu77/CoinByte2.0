// WalletPage.jsx
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
      <div className="wallet-section">
        <WalletOverview />
      </div>
      <div className="wallet-section">
        <DepositForm />
        <WithdrawForm />
        <TransferForm />
	<ColdStorageForm />
      </div>
    </div>
  );
};

export default WalletPage;
