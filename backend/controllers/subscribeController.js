// subscribeController.js
const Subscribe = require('../models/Subscribe');
const { sendEmail } = require('../utils/email');
const { validateEmail } = require('../utils/validators');

exports.subscribe = async (req, res) => {
    const { email } = req.body;
    
    if (!validateEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        const existingSubscriber = await Subscribe.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: 'Email is already subscribed' });
        }
        const newSubscriber = new Subscribe({ email });
        await newSubscriber.save();

        // Send confirmation email
        await sendEmail('Subscription Confirmation', email, 'Thank you for subscribing!');

        res.status(201).json({ message: 'Subscription successful', subscriber: newSubscriber });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
