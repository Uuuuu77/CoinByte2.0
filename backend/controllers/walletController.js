const Wallet = require('../models/Wallet');  // Assuming you have a Wallet model defined

const getWallet = async (req, res) => {
  const userId = req.user._id;
  const wallet = await Wallet.findOne({ userId });

  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  res.json(wallet);
};

const updateWallet = async (req, res) => {
  const userId = req.user._id;
  const updates = req.body;

  const wallet = await Wallet.findOneAndUpdate({ userId }, updates, { new: true });

  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' });
  }

  res.json({ message: 'Wallet updated successfully', wallet });
};

module.exports = {
  getWallet,
  updateWallet,
};
