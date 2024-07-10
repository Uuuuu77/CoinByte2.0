// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(helmet()); // Secure HTTP headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Log HTTP requests

// Connect Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error(err);
    process.exit(1); // Terminate process if database connection fails
  });

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/exchange', require('./routes/exchangeRoutes'));
app.use('/api/social', require('./routes/socialRoutes'));
app.use('/api/support', require('./routes/supportRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/wallet', require('./routes/walletRoutes'));
app.use('/api/activity-logs', require('./routes/activityLogRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
