// TicketSystem.jsx

import React, { useState } from 'react';
import './TicketSystem.css';

const TicketSystem = () => {
  const [ticketData, setTicketData] = useState({
    issue: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setTicketData({
      ...ticketData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit ticket logic
    console.log('Ticket submitted:', ticketData);
  };

  return (
    <div className="ticket-system-container">
      <h3>Submit a Support Ticket</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="issue">Issue</label>
          <input
            type="text"
            id="issue"
            name="issue"
            value={ticketData.issue}
            onChange={handleInputChange}
            placeholder="Describe your issue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleInputChange}
            placeholder="Provide a detailed description of your issue"
            required
          />
        </div>

        <button type="submit" className="submit-ticket-button">Submit Ticket</button>
      </form>
    </div>
  );
};

export default TicketSystem;
