// Subscribe.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscribeSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Subscribe', SubscribeSchema);
