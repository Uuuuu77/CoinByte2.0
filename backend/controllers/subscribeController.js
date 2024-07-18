// subscribeController.js
const SubscriptionModel = require('../models/Subscription');

// Handles user subscription
exports.subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const subscription = await SubscriptionModel.create({ email });
    res.status(200).json({ success: true, message: 'Subscription successful', data: subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to subscribe' });
  }
};
