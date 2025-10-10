// Necessary package imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Declare PORT from environment variables
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Connection to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI).then(() => {
    // Server listening at specified PORT
    app.listen(PORT, () => {
        console.log(`Server is up and running at http://localhost:${PORT} & Connected to MongoDB Atlas!...`);
    });
}).catch(error => console.log(`Error: ${error}`));