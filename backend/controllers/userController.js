// userController.js
const User = require('../models/User');

// Get user by username
const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user by username
const updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const updates = req.body;

    const user = await User.findOneAndUpdate({ username }, updates, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUser,
  updateUser,
};
