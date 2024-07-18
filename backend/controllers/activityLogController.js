// activityLogController.js
const ActivityLog = require('../models/ActivityLog');

// Fetches all activity logs
exports.getActivityLogs = async (req, res) => {
  try {
    const activityLogs = await ActivityLog.find();
    res.json({ success: true, data: activityLogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching activity logs' });
  }
};

// Fetches a single activity log by ID
exports.getActivityLogById = async (req, res) => {
  try {
    const activityLog = await ActivityLog.findById(req.params.id);
    if (!activityLog) {
      return res.status(404).json({ success: false, message: 'Activity log not found' });
    }
    res.json({ success: true, data: activityLog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching activity log' });
  }
};

// Creates a new activity log
exports.createActivityLog = async (req, res) => {
  try {
    const newActivityLog = new ActivityLog(req.body);
    await newActivityLog.save();
    res.status(201).json({ success: true, data: newActivityLog });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: 'Error creating activity log' });
  }
};
