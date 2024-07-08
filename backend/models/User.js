const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  },
  user_type: {
    type: String,
    required: true
  },
  google_id: {
    type: String,
    unique: true,
    sparse: true
  }
});

userSchema.methods.setPassword = async function(password) {
  this.password = await bcrypt.hash(password, 10);
};

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
