// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const { errorHandler, notFoundHandler } = require('./middleware/errorMiddleware');
const { loadConfig } = require('./config/env');
const routes = require('./routes/index');

const config = loadConfig();
const app = express();

const corsOptions = {
  origin: config.corsOrigins,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json({ limit: '10kb' }));
app.use(helmet());
app.use(morgan('combined', { skip: (req) => req.path === '/health' }));
app.use(mongoSanitize());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: 'draft-7', legacyHeaders: false }));

// Connect Database
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error(err);
    process.exit(1); // Terminate process if database connection fails
  });

// Define Routes
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(404).json({ success: false, message: 'Resource Not Found' });
});

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
