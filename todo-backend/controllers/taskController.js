const Task = require('../models/tasksModel');
const { validationResult } = require('express-validator');

// Get all tasks for the user
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Create a new Task
exports.createTask = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!error.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }

        const { message, priority = 'todo', deadline } = req.body;
        
        // Create a new task
        const newTask = new Task({ message, priority, deadline, userId: req.user.id });
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Edit exsisting task by ID
exports.editTask = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }

        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return (res.status(404).json({ message: 'Task not found!...' }));
        }

        const { message, priority, deadline } = req.body;
        task.message = message;
        task.priority = priority;
        task.deadline = deadline;

        await task.save();

        res.status(201).json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Delete exising task by ID
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return (res.status(404).json({ message: 'Task not found!...' }));
        }

        res.status(201).json({ message: 'Task deleted successfully!...' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};

// Toggle task completion status
exports.toggleCompletion = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return (res.status(404).json({ message: 'Task not found!...' }));
        }

        task.completed = !task.completed;
        task.completedAt = task.completed ? Date.now() : null;
        
        await task.save();
        res.json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error!...' });
    }
};