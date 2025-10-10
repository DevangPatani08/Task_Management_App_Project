// Necessary package imports
const express = require('express');
const { body } = require('express-validator');

// Import middleware for authentication
const auth = require('../middleware/auth');

// Import auth controller functions
const { registerUser, loginUser, getCurrentUser } = require('../controllers/authController');

// Initialize router
const router = express.Router();

// Register a new user
router.post('/register', [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!...'),
    body('email').isEmail().withMessage('Please include a valid email!...'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!...')
], registerUser);

// Login user
router.post('/login', [
    body('email').isEmail().withMessage('Please include a valid email!...'),
    body('password').exists().withMessage('Password is required!...')
], loginUser);

// Get current user
router.get('/me', auth, getCurrentUser);

// Export the router
module.exports = router;