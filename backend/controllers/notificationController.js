// notificationController.js
const Notification = require('../models/Notification');

// Fetches all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json({ success: true, data: notifications });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching notifications' });
  }
};

// Fetches a single notification by ID
exports.getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }
    res.json({ success: true, data: notification });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error fetching notification' });
  }
};

// Creates a new notification
exports.createNotification = async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(201).json({ success: true, data: newNotification });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: 'Error creating notification' });
  }
};
