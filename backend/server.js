// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const { errorHandler, notFoundHandler } = require('./middleware/errorMiddleware');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true // if you need to support credentials
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(helmet()); // Secure HTTP headers
app.use(morgan('dev')); // Log HTTP requests

// Connect Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => {
    console.error(err);
    process.exit(1); // Terminate process if database connection fails
  });

// Define Routes
app.use('/api', routes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
