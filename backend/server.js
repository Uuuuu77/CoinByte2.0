// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler, notFoundHandler } = require('./middleware/errorMiddleware');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

// Enable cors
const corsOptions = {
  origin: [
    'http://localhost:5173/', // Add your local frontend origin here
    'https://coin-byte2o-john-njugunas-projects.vercel.app'
  ],
  optionsSuccessStatus: 200,
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
