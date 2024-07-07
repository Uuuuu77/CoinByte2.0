const User = require('../models/User');

const getUser = async (req, res) => {
  const { username } = req.params;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

const updateUser = async (req, res) => {
  const { username } = req.params;
  const updates = req.body;

  const user = await User.findOneAndUpdate({ username }, updates, { new: true });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({ message: 'User updated successfully', user });
};

module.exports = {
  getUser,
  updateUser,
};
