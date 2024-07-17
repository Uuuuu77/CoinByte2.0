// controllers/walletController.js
const Wallet = require('../models/Wallet');
const Transaction = require('../models/Transaction');

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.user.id }).populate('transactions');
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deposit = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.user.id });
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
    
    const transaction = new Transaction({ walletId: wallet.id, type: 'deposit', amount, status: 'completed' });
    await transaction.save();
    
    wallet.balance += amount;
    wallet.transactions.push(transaction.id);
    await wallet.save();
    
    res.json({ message: 'Deposit successful', wallet });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.withdraw = async (req, res) => {
  const { amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId: req.user.id });
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });
    if (wallet.balance < amount) return res.status(400).json({ message: 'Insufficient balance' });
    
    const transaction = new Transaction({ walletId: wallet.id, type: 'withdrawal', amount, status: 'completed' });
    await transaction.save();
    
    wallet.balance -= amount;
    wallet.transactions.push(transaction.id);
    await wallet.save();
    
    res.json({ message: 'Withdrawal successful', wallet });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.transfer = async (req, res) => {
  const { recipientId, amount } = req.body;
  try {
    const senderWallet = await Wallet.findOne({ userId: req.user.id });
    if (!senderWallet) return res.status(404).json({ message: 'Sender wallet not found' });
    if (senderWallet.balance < amount) return res.status(400).json({ message: 'Insufficient balance' });

    const recipientWallet = await Wallet.findOne({ userId: recipientId });
    if (!recipientWallet) return res.status(404).json({ message: 'Recipient wallet not found' });
    
    const senderTransaction = new Transaction({ walletId: senderWallet.id, type: 'transfer', amount, status: 'completed' });
    await senderTransaction.save();
    
    const recipientTransaction = new Transaction({ walletId: recipientWallet.id, type: 'transfer', amount, status: 'completed' });
    await recipientTransaction.save();
    
    senderWallet.balance -= amount;
    senderWallet.transactions.push(senderTransaction.id);
    await senderWallet.save();

    recipientWallet.balance += amount;
    recipientWallet.transactions.push(recipientTransaction.id);
    await recipientWallet.save();
    
    res.json({ message: 'Transfer successful', senderWallet, recipientWallet });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
