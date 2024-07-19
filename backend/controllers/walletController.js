// controllers/walletController.js
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');
const { getCoinGeckoPrice } = require('../utils/api');

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.user._id }).populate('transactions');
    if (!wallet) return res.status(404).json({ success: false, message: 'Wallet not found' });

    const priceData = await getCoinGeckoPrice('bitcoin'); // Example for Bitcoin, you can replace with actual currency
    const price = priceData['bitcoin']?.usd;
    const balanceInUSD = wallet.balance * price;

    res.json({ success: true, data: { wallet, balanceInUSD } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.deposit = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.user._id });
    if (!wallet) return res.status(404).json({ success: false, message: 'Wallet not found' });

    const transaction = new Transaction({ walletId: wallet._id, type: 'deposit', amount, status: 'completed' });
    await transaction.save();

    wallet.balance += amount;
    wallet.transactions.push(transaction._id);
    await wallet.save();

    res.json({ success: true, message: 'Deposit successful', data: wallet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.withdraw = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.user._id });
    if (!wallet) return res.status(404).json({ success: false, message: 'Wallet not found' });
    if (wallet.balance < amount) return res.status(400).json({ success: false, message: 'Insufficient balance' });

    const transaction = new Transaction({ walletId: wallet._id, type: 'withdrawal', amount, status: 'completed' });
    await transaction.save();

    wallet.balance -= amount;
    wallet.transactions.push(transaction._id);
    await wallet.save();

    res.json({ success: true, message: 'Withdrawal successful', data: wallet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.transfer = async (req, res) => {
  const { recipientId, amount } = req.body;
  try {
    const senderWallet = await Wallet.findOne({ userId: req.user._id });
    if (!senderWallet) return res.status(404).json({ success: false, message: 'Sender wallet not found' });
    if (senderWallet.balance < amount) return res.status(400).json({ success: false, message: 'Insufficient balance' });

    const recipientWallet = await Wallet.findOne({ userId: recipientId });
    if (!recipientWallet) return res.status(404).json({ success: false, message: 'Recipient wallet not found' });

    const senderTransaction = new Transaction({ walletId: senderWallet._id, type: 'transfer', amount, status: 'completed' });
    await senderTransaction.save();

    const recipientTransaction = new Transaction({ walletId: recipientWallet._id, type: 'transfer', amount, status: 'completed' });
    await recipientTransaction.save();

    senderWallet.balance -= amount;
    senderWallet.transactions.push(senderTransaction._id);
    await senderWallet.save();

    recipientWallet.balance += amount;
    recipientWallet.transactions.push(recipientTransaction._id);
    await recipientWallet.save();

    res.json({ success: true, message: 'Transfer successful', data: { senderWallet, recipientWallet } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
