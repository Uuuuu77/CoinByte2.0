// paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', // or 'live'
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

exports.createStripePayment = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPayPalPayment = (req, res) => {
  const { amount, currency } = req.body;
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "transactions": [{
      "amount": {
        "currency": currency,
        "total": amount
      }
    }],
    "redirect_urls": {
      "return_url": "http://return.url",
      "cancel_url": "http://cancel.url"
    }
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(payment);
    }
  });
};
