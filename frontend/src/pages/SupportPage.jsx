// SupportPage.jsx
import React from 'react';
import SearchBar from '../components/Support/SearchBar';
import FAQ from '../components/Support/FAQ';
import SupportChat from '../components/Support/SupportChat';
import TicketSystem from '../components/Support/TicketSystem';
import ContactForm from '../components/Support/ContactForm';
import '../styles/SupportPage.css'; 

const Support = () => {
  return (
    <div className="support-page">
      <header className="support-header">
        <h1>Support Center</h1>
        <SearchBar />
      </header>

      <section className="support-categories">
        <h2>How can we help you?</h2>
        <div className="category-grid">
          <div className="category-item">Account Issues</div>
          <div className="category-item">Trading Help</div>
          <div className="category-item">Security</div>
          <div className="category-item">Technical Support</div>
        </div>
      </section>

      <section className="support-content">
        <FAQ />
        <SupportChat />
        <TicketSystem />
        <ContactForm />
      </section>
    </div>
  );
};

export default Support;
