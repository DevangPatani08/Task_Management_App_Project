// import packages
const express = require('express');
const mg = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// import routes
const authRoutes = require('./routes/auth.js');
const taskRoutes = require('./routes/tasks.js');

// Load env 
dotenv.config();

// Initialize express app
const app = express();

// Declare PORT
const PORT = process.env.PORT;

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Create server and Connect to MongoDB Atlas
mg.connect(process.env.MONGODB_URI).then(() => {
    // Server listening at PORT
    app.listen(PORT, () => {
        console.log(`Server is up and running at http://localhost:${PORT} & Connected to MongoDB Atlas!...`);
    });
}).catch(error => {
    console.log(`Error: ${error}`);
    process.exit(1);
});