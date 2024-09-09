// TicketSystem.jsx

import React from 'react';
import './TicketSystem.css';

const TicketSystem = () => {
  return (
    <div className="ticket-system-container">
      <h2>Submit a Support Ticket</h2>
      <form className="ticket-form">
        <input type="text" placeholder="Your Name" className="ticket-input" />
        <input type="email" placeholder="Your Email" className="ticket-input" />
        <textarea placeholder="Describe your issue..." className="ticket-textarea"></textarea>
        <button type="submit" className="ticket-button">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketSystem;
