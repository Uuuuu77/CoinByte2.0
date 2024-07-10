// walletController.js
const Wallet = require('../models/Wallet');

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

module.exports = {
  getWallet,
  updateWallet,
};
