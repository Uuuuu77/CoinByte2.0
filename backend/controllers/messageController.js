// messageController.js
const Message = require('../models/Message');

// Fetches all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({ success: true, data: messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching messages' });
  }
};

// Fetches a single message by ID
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.json({ success: true, data: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching message' });
  }
};

// Creates a new message
exports.createMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Error creating message' });
  }
};
