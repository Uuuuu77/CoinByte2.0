// SupportPage.jsx

import React from 'react';
import FAQ from '../components/Support/FAQ';
import SupportChat from '../components/Support/SupportChat';
import TicketSystem from '../components/Support/TicketSystem';
import ContactForm from '../components/Support/ContactForm';
import '../styles/Support.css'; // Main CSS file for the support page

const Support = () => {
  return (
    <div className="support-page">
      <h1>Support Center</h1>
      <div className="support-section">
        <FAQ />
      </div>
      <div className="support-section">
        <SupportChat />
      </div>
      <div className="support-section">
        <TicketSystem />
      </div>
      <div className="support-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default Support;
