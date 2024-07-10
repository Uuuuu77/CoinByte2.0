// supportController.js
const Ticket = require('../models/Ticket');

// Create a new support ticket
const createTicket = async (req, res) => {
  try {
    const { subject, description } = req.body;
    const userId = req.user._id;

    const ticket = new Ticket({
      userId,
      subject,
      description,
    });

    await ticket.save();
    res.status(201).json({ message: 'Ticket created successfully', ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's support tickets
const getTickets = async (req, res) => {
  try {
    const userId = req.user._id;
    const tickets = await Ticket.find({ userId });

    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTicket,
  getTickets,
};
