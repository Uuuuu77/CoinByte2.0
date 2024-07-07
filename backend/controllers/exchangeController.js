const Transaction = require('../models/Transaction');
const User = require('../models/User');
const { sendEmail } = require('../utils/sendEmail');

const createTransaction = async (req, res) => {
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

  // Send notification email
  sendEmail(user.email, 'New Transaction', `A new ${type} transaction of ${amount} ${cryptocurrency} has been made.`);

  res.status(201).json({ message: 'Transaction successful', transaction });
};

const getTransactions = async (req, res) => {
  const userId = req.user._id;
  const transactions = await Transaction.find({ userId });

  res.json(transactions);
};

module.exports = {
  createTransaction,
  getTransactions,
};
