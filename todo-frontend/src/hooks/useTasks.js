import React, { useEffect, useState } from 'react';
import { taskService } from '../services/tasks';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch all tasks from database
    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const tasksData = await taskService.getAllTasks();
            setTasks(tasksData);
        } catch (error) {
            setError(error.response?.data?.message || 'ERROR: Failed to fetch tasks!...');
        } finally {
            setLoading(false);
        }
    };

    // Call the fetch function on every page load
    useEffect(() => {
        fetchTasks();
    }, []);

    // Create a task
    const createTask = async (taskData) => {
        try {
            const newTask = await taskService.createTask(taskData);
            setTasks(prev => [newTask, ...prev]);
            return (newTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };
    
    // Update a task by id
    const updateTask = async (id, taskData) => {
        try {
            const updatedTask = await taskService.updateTask(id, taskData);
            setTasks(prev => prev.map(task => task._id === id ? updatedTask : task));
            return (updatedTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };
    
    // Delete a task by id
    const deleteTask = async (id) => {
        try {
            await taskService.deleteTask(id);
            setTasks(prev => prev.filter(task => task._id !== id));
        } catch (error) {
            throw error.response?.data || error;
        }
    };
    
    // Toggle the complete status of a task by id
    const toggleComplete = async (id) => {
        try {
            const toggledTask = await taskService.toggleComplete(id);
            setTasks(prev => prev.map(task => task._id === id ? toggledTask : task));
            return (toggledTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    return ({ tasks, loading, error, fetchTasks, createTask, updateTask, deleteTask, toggleComplete });
};