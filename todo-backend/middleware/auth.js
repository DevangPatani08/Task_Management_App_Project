// Necessary package imports
const jwt = require('jsonwebtoken');

// Import User model
const User = require('../models/usersModel');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied!...' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || '7e44d38ffe70a247b6f1b798f686e90a9f4cd063225787e21acc00147ff33cb1f8f645400072e77be1f84007936d28ddb70dcd3fd0bb21137932fe0c455d0dcd');
        const user = await User.findById(decoded.userId).select('-password');

        if(!user) {
            return res.status(401).json({ message: 'User not found, authorization denied!...' });
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ message: 'Token is not valid!...' });
    }
};

// Export the middleware
module.exports = auth;