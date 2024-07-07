const Ticket = require('../models/Ticket');  // Assuming you have a Ticket model defined

const createTicket = async (req, res) => {
  const { subject, description } = req.body;
  const userId = req.user._id;

  const ticket = new Ticket({
    userId,
    subject,
    description,
  });

  await ticket.save();

  res.status(201).json({ message: 'Ticket created successfully', ticket });
};

const getTickets = async (req, res) => {
  const userId = req.user._id;
  const tickets = await Ticket.find({ userId });

  res.json(tickets);
};

module.exports = {
  createTicket,
  getTickets,
};
