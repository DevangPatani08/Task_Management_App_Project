const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/usersModel.js');

// Generate token
const genToken = (id) => {
    return (jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' }));
};

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) return (res.status(400).json({ errors: errors.array() }));

        const { username, email, password } = req.body;

        let user = await User.findOne({ $or: [{ email }, { username }] });

        if (user) return (res.status(400).json({ message: 'User already exists!...' }));

        user = new User({ username, email, password });
        await user.save();

        const token = genToken(user._id);

        res.status(201).json({token, user: { id: user._id, username: user.username, email: user.email }});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// User login
exports.loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) return (res.status(400).json({ errors: errors.array() }));

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return (res.status(400).json({ message: 'Invalid Credentials!...' }));

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return (res.status(400).json({ message: 'Invalid Credentials!...' }));

        const token = genToken(user._id);

        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email }});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// get current user
exports.getCurrentUser = async (req, res) => res.status(200).json({ user: { id: req.user._id, username: req.user.username, email: req.user.email } });