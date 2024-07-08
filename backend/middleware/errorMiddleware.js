const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Resource Not Found',
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
