const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/authMiddleware.js');
const { registerUser, loginUser, getCurrentUser } = require('../controllers/authController.js');

const r = express.Router();

const registerValidator = [
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long!...'),
    body('email').isEmail().withMessage('Please include a valid email!...'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long!...')
];

const loginValidator = [
    body('email').isEmail().withMessage('Please include a valid email!...'),
    body('password').exists().withMessage('Password is required!...')
];

// Register new user
r.post('/register', registerValidator, registerUser);

// User login
r.post('/login', loginValidator, loginUser);

// Get current user
r.get('/me', auth, getCurrentUser);

module.exports = r;