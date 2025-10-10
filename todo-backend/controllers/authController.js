// Necessary package imports
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

// Import User model
const User = require('../models/usersModel');

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET || '7e44d38ffe70a247b6f1b798f686e90a9f4cd063225787e21acc00147ff33cb1f8f645400072e77be1f84007936d28ddb70dcd3fd0bb21137932fe0c455d0dcd', { expiresIn: '7d' });
};

// Register a new user
exports.registerUser =  async (req, res) => {
    try {
        const errors = validationResult(req);

        // check if there are validation errors
        if (!errors.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }

        const { username, email, password } = req.body;
        
        // get matching existing user
        let user = await User.findOne({ $or: [{ email }, { username }] });

        // Check if user already exists
        if (user) {
            return (res.status(400).json({ message: 'User already exists!...' }));
        }

        // If user does not exist, create a new user
        user = new User({ username, email, password });
        await user.save();

        // Generate JWT token
        const token = generateToken(user._id);

        res.status(201).json({
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        // check if there are any validation errors
        if (!errors.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }

        const { email, password } = req.body;

        // Check if user exists by email
        const user = await User.findOne({ email });

        if (!user) {
            return (res.status(400).json({ message: 'Invalid Credentials!...' }));
        }

        // Check if password matches
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return (res.status(400).json({ message: 'Invalid Credentials!...' }));
        }

        // Generate JWT token
        const token = generateToken(user._id);

        // if everything is fine, return the token and user details
        res.json({
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Get current user
exports.getCurrentUser = async (req, res) => { res.json({ user: { id: req.user._id, username: req.user.username, email: req.user.email } }) };