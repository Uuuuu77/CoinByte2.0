// activityLogController.js
const ActivityLog = require('../models/ActivityLog');

const getActivityLogs = async (req, res) => {
  try {
    const logs = await ActivityLog.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createActivityLog = async (req, res) => {
  const log = new ActivityLog(req.body);
  try {
    const newLog = await log.save();
    res.status(201).json(newLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getActivityLogs,
  createActivityLog,
};
