// TradeController.js
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const { sendEmail } = require('../utils/email');
const { getCoinGeckoPrice } = require('../utils/api');

// Buy cryptocurrency
exports.buy = async (req, res) => {
  try {
    const { amount, cryptocurrency } = req.body;
    const userId = req.user._id;

    const priceData = await getCoinGeckoPrice(cryptocurrency);
    const price = priceData[cryptocurrency]?.usd;

    if (!price) {
      return res.status(400).json({ success: false, message: 'Invalid cryptocurrency' });
    }

    const transaction = new Transaction({
      userId,
      type: 'buy',
      amount,
      cryptocurrency,
      price
    });

    await transaction.save();

    const user = await User.findById(userId);

    sendEmail(user.email, 'New Transaction', `A new buy transaction of ${amount} ${cryptocurrency} at ${price} USD has been made.`);
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

    const priceData = await getCoinGeckoPrice(cryptocurrency);
    const price = priceData[cryptocurrency]?.usd;

    if (!price) {
      return res.status(400).json({ success: false, message: 'Invalid cryptocurrency' });
    }

    const transaction = new Transaction({
      userId,
      type: 'sell',
      amount,
      cryptocurrency,
      price
    });

    await transaction.save();

    const user = await User.findById(userId);

    sendEmail(user.email, 'New Transaction', `A new sell transaction of ${amount} ${cryptocurrency} at ${price} USD has been made.`);
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
