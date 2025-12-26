const TaskModel = require('../models/tasksModel.js');
const { validationResult } = require('express-validator');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = TaskModel.find({ userId: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error while fetch all tasks!...' });
    }
};

// Create new tasks
exports.createTask = async (req, res) => {
    try {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }
        
        const { message, priority = 'todo', deadline } = req.body;
        const newTask = new TaskModel({ message, priority, deadline, userId: req.user._id });
        await newTask.save();

        res.status(201).json(newTask);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error while creating a task!...' });
    }
};

// Edit a task
exports.editTask = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return (res.status(400).json({ errors: errors.array() }));
        }

        const task = TaskModel.findOne({ _id: req.params.id, userId: req.user._id });
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
        res.status(500).json({ message: 'Internal server error while updating a task!...' });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete({ _id: req.params.id, userId: req.user._id });
        
        if (!task) {
            return (res.status(404).json({ message: 'Task not found!...' }));
        }

        res.status(201).json({ message: 'Task has been deleted!...' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error while deleting a task!...' });
    }
};

// Toggle task status
exports.toggleCompletion = async (req, res) => {
    try {
        const task = await TaskModel.findOne({ _id: req.params.id, userId: req.user._id });

        if (!task) {
            return (res.status(404).json({ message: 'Task not found!...' }));
        }

        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date() : null;
        await task.save();

        res.status(201).json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error while changing task status!...' });
    }
};