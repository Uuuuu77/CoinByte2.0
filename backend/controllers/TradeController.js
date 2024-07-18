// TradeController.js
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const { sendEmail } = require('../utils/email');

// Buy cryptocurrency
exports.buy = async (req, res) => {
  try {
    const { amount, cryptocurrency } = req.body;
    const userId = req.user._id;

    const transaction = new Transaction({
      userId,
      type: 'buy',
      amount,
      cryptocurrency,
    });

    await transaction.save();

    const user = await User.findById(userId);

    sendEmail(user.email, 'New Transaction', `A new buy transaction of ${amount} ${cryptocurrency} has been made.`);
    res.status(201).json({ success: true, message: 'Buy transaction successful', data: transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Sell cryptocurrency
exports.sell = async (req, res) => {
  try {
    const { amount, cryptocurrency } = req.body;
    const userId = req.user._id;

    const transaction = new Transaction({
      userId,
      type: 'sell',
      amount,
      cryptocurrency,
    });

    await transaction.save();

    const user = await User.findById(userId);

    sendEmail(user.email, 'New Transaction', `A new sell transaction of ${amount} ${cryptocurrency} has been made.`);
    res.status(201).json({ success: true, message: 'Sell transaction successful', data: transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get user transactions
exports.getTransactions = async (req, res) => {
  try {
    const userId = req.user._id;
    const transactions = await Transaction.find({ userId });

    res.json({ success: true, data: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
