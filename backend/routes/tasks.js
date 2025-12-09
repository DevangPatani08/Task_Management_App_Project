const express = require('express');
const { body } = require('express-validator');
const auth = require('../middleware/authMiddleware.js');
const { getAllTasks, createTask, editTask, deleteTask, toggleCompletion } = require('../controllers/taskController.js');

const r = express.Router();

const taskValidator = [
    auth,
    body('message').notEmpty().isLength({ min: 2, max: 500}).withMessage('Task message can be anything under 500 characters!...'),
    body('deadline').isISO8601().withMessage('Valid deadline is required!...'),
];

// get all tasks for the user
r.get('/', auth, getAllTasks);

// Create a new task
r.post('/', taskValidator, createTask);

// Edit an existing task
r.put('/:id', taskValidator, editTask);

// delete a existing task
r.delete('/:id', auth, deleteTask);

// toggle task completion status
r.patch('/:id/toggle', auth, toggleCompletion);

module.exports = r;