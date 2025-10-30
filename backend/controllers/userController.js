// userController.js
const User = require('../models/User');

// Get user by username
exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    
    // Sanitize and validate username to prevent NoSQL injection
    if (typeof username !== 'string' || !username.trim()) {
      return res.status(400).json({ success: false, message: 'Invalid username' });
    }
    
    const user = await User.findOne({ username: username.trim() }).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update user by username - only allow users to update their own profile
exports.updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const updates = req.body;
    
    // Sanitize and validate username to prevent NoSQL injection
    if (typeof username !== 'string' || !username.trim()) {
      return res.status(400).json({ success: false, message: 'Invalid username' });
    }

    // Check if authenticated user is trying to update their own profile
    if (req.user.username !== username.trim()) {
      return res.status(403).json({ success: false, message: 'You can only update your own profile' });
    }

    // Prevent password updates through this endpoint
    const { password, ...safeUpdates } = updates;
    if (password) {
      return res.status(400).json({ success: false, message: 'Password cannot be updated through this endpoint' });
    }

    // Prevent username and email changes to avoid conflicts
    delete safeUpdates.username;
    delete safeUpdates.email;
    delete safeUpdates.user_type;

    const user = await User.findOneAndUpdate(
      { username: username.trim() }, 
      { $set: safeUpdates, updatedAt: Date.now() }, 
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, message: 'User updated successfully', data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
