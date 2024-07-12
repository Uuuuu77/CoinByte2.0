import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TicketSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/api/tickets');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({ ...newTicket, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tickets', newTicket);
      setTickets([...tickets, response.data]);
      setNewTicket({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div className="ticket-system">
      <h2>Support Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={newTicket.title}
          onChange={handleInputChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={newTicket.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <span>{new Date(ticket.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketSystem;
