// validationMiddleware.js
const { body, param, validationResult } = require('express-validator');
const validator = require('validator');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

// Middleware to check validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

// Sanitize text input to prevent XSS
const sanitizeText = (text) => {
  if (typeof text !== 'string') return text;
  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });
};

// Validation rules for user registration
const validateRegister = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric')
    .customSanitizer(sanitizeText),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  body('userType')
    .trim()
    .notEmpty()
    .withMessage('User type is required')
    .customSanitizer(sanitizeText),
  validate
];

// Validation rules for user login
const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .customSanitizer(sanitizeText),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  validate
];

// Validation rules for wallet operations
const validateWalletAmount = [
  body('amount')
    .isFloat({ min: 0.01 })
    .withMessage('Amount must be a positive number greater than 0'),
  validate
];

// Validation rules for transfer
const validateTransfer = [
  body('amount')
    .isFloat({ min: 0.01 })
    .withMessage('Amount must be a positive number greater than 0'),
  body('recipientId')
    .trim()
    .isMongoId()
    .withMessage('Invalid recipient ID'),
  validate
];

// Validation rules for trade operations
const validateTrade = [
  body('amount')
    .isFloat({ min: 0.01 })
    .withMessage('Amount must be a positive number greater than 0'),
  body('cryptocurrency')
    .trim()
    .notEmpty()
    .withMessage('Cryptocurrency is required')
    .isLength({ max: 20 })
    .withMessage('Cryptocurrency name too long')
    .customSanitizer(sanitizeText),
  validate
];

// Validation rules for post creation
const validatePost = [
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required')
    .isLength({ max: 1000 })
    .withMessage('Content must be less than 1000 characters')
    .customSanitizer(sanitizeText),
  validate
];

// Validation rules for comment creation
const validateComment = [
  body('postId')
    .trim()
    .isMongoId()
    .withMessage('Invalid post ID'),
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required')
    .isLength({ max: 500 })
    .withMessage('Content must be less than 500 characters')
    .customSanitizer(sanitizeText),
  validate
];

// Validation rules for payment
const validatePayment = [
  body('amount')
    .isInt({ min: 1 })
    .withMessage('Amount must be a positive integer'),
  body('currency')
    .trim()
    .isLength({ min: 3, max: 3 })
    .withMessage('Currency must be a 3-letter code')
    .isAlpha()
    .withMessage('Currency must contain only letters')
    .toUpperCase(),
  validate
];

// Validation rule for username parameter
const validateUsername = [
  param('username')
    .trim()
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric'),
  validate
];

module.exports = {
  validate,
  validateRegister,
  validateLogin,
  validateWalletAmount,
  validateTransfer,
  validateTrade,
  validatePost,
  validateComment,
  validatePayment,
  validateUsername,
  sanitizeText
};
