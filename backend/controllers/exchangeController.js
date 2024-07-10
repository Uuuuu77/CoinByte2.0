// exchangeController.js
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const { sendEmail } = require('../utils/sendEmail');

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { type, amount, cryptocurrency } = req.body;
    const userId = req.user._id;

    const transaction = new Transaction({
      userId,
      type,
      amount,
      cryptocurrency,
    });

    await transaction.save();

    const user = await User.findById(userId);

    sendEmail(user.email, 'New Transaction', `A new ${type} transaction of ${amount} ${cryptocurrency} has been made.`);
    res.status(201).json({ message: 'Transaction successful', transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user transactions
const getTransactions = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactions = await Transaction.find({ userId });

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
};
