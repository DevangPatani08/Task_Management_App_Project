// Necessary package imports
const express = require('express');
const { body, validationResult } = require('express-validator');

// Import authentication middleware
const auth = require('../middleware/auth');

// Import task controller functions
const { getAllTasks, createTask, editTask, deleteTask, toggleCompletion } = require('../controllers/taskController');

// Initialize router
const router = express.Router();


// Get all tasks for the user
router.get('/', auth, getAllTasks);

// Create a new task
router.post('/', [
    auth,
    body('message').notEmpty().withMessage('Task message is required!...'),
    body('deadline').isISO8601().withMessage('Valid deadline is required!...')
], createTask);

// Edit an existing task
router.put('/:id', [
    auth,
    body('message').notEmpty().withMessage('Task message is required!...'),
    body('deadline').isISO8601().withMessage('Valid deadline is required!...')
], editTask);

// Delete a existing task
router.delete('/:id', auth, deleteTask);

// Toggle task completion status
router.patch('/:id/toggle', auth, toggleCompletion);

// Export the router
module.exports = router;