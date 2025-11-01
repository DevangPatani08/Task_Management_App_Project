import { useEffect, useState } from 'react';
import { taskService } from '../services/tasks';

export const useTasks = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    // Fetch all tasks from database
    const fetchTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const tasksData = await taskService.getAllTasks();
            setTasks(tasksData);
        } catch (error) {
            setError(error?.data?.message || 'ERROR: Failed to fetch tasks!...');
        } finally {
            setLoading(false);
        }
    };

    // call the fetch tasks function on every page load
    useEffect(() => {
        fetchTasks();
    }, []);

    // Create a task
    const createTask = async (tasksData) => {
        try {
            const newTask = await taskService.createTask(tasksData);
            setTasks([...tasks, newTask]);
            return (newTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    // Update a task by ID
    const updateTask = async (id, tasksData) => {
        try {
            const updatedTask = await taskService.updateTask(id, tasksData);
            setTasks(prev => prev.map(task => task._id === id ? updatedTask : task));
            return (updatedTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    // Delete a task by ID
    const deleteTask = async (id) => {
        try {
            await taskService.deleteTask(id);
            setTasks(prev => prev.filter(task => task._id !== id));
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    // Toggle the complete status of a task by ID
    const toggleComplete = async (id) => {
        try {
            const toggledTask = await taskService.toggleComplete(id);
            setTasks(prev => prev.map(task => task._id === id ? toggledTask : task));
            return (toggledTask);
        } catch (error) {
            throw error.response?.data || error;
        }
    };

    return ({ tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete });

}