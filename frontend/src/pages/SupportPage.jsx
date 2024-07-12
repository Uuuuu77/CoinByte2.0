// SupportPage.jsx
import React from 'react';
import FAQ from '../components/Support/FAQ';
import SupportChat from '../components/Support/SupportChat';
import TicketSystem from '../components/Support/TicketSystem';
import '../styles/SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-page">
      <h2>Support</h2>
      <FAQ />
      <SupportChat />
      <TicketSystem />
    </div>
  );
};

export default SupportPage;
