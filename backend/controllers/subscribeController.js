// subscribeController.js
exports.subscribe = async (req, res) => {
  const { email } = req.body;

  // Add your logic to handle the subscription
  // For example, save the email to your database or an email marketing service

  try {
    // Assuming you save the email to a database
    await SubscriptionModel.create({ email });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to subscribe' });
  }
};
