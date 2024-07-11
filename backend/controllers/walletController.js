// walletController.js
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');

// Get user's wallet
const getWallet = async (req, res) => {
  try {
    const userId = req.user._id;
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    res.json(wallet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user's wallet
const updateWallet = async (req, res) => {
  try {
    const userId = req.user._id;
    const updates = req.body;

    const wallet = await Wallet.findOneAndUpdate({ userId }, updates, { new: true });

    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }

    res.json({ message: 'Wallet updated successfully', wallet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a transaction
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
    res.status(201).json({ message: 'Transaction created successfully', transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getWallet,
  updateWallet,
  createTransaction,
};
