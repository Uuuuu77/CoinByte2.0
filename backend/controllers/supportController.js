// supportController.js
const Ticket = require('../models/SupportTicket');

// Create a new support ticket
exports.createTicket = async (req, res) => {
  try {
    const { subject, description } = req.body;
    const userId = req.user._id;

    const ticket = new Ticket({
      userId,
      subject,
      description,
    });

    await ticket.save();
    res.status(201).json({ success: true, message: 'Ticket created successfully', data: ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get user's support tickets
exports.getTickets = async (req, res) => {
  try {
    const userId = req.user._id;
    const tickets = await Ticket.find({ userId });

    res.json({ success: true, data: tickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
