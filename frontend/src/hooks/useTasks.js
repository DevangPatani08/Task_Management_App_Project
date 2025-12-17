import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { taskServices } from '../services/tasks.js';

export const useTasks = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await taskServices.getAllTasks();
                setTasks(data);
            } catch (err) {
                const errMsg = err?.message || 'Failed to load tasks!...';
                setError(err);
                toast.error(errMsg);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, []);

    const createTask = async (data) => {
        try {
            const newTask = await taskServices.createTask(data);
            setTasks(prev => [...prev, newTask]);

            toast.success(`New task created!...`);

            return (newTask);

        } catch (err) {
            const errMsg = err.response?.data?.message || err || 'Failed to create a task!...';
            toast.error(errMsg);
        };
    };

    const updateTask = async (id, data) => {
        try {
            const update = await taskServices.updateTask(id, data);
            setTasks(prev => prev.map(task => task._id === id ? update : task));

            toast.success(`Task updated successfully!...`);

            return (update);

        } catch (err) {
            const errMsg = err.response?.data?.message || err || 'Failed to update the task!...';
            toast.error(errMsg);
        };
    };
    
    const deleteTask = async (id) => {
        try {
            await taskServices.deleteTask(id);
            setTasks(prev => prev.filter(task => task._id !== id));

            toast.success('Task deleted successfully!...');

        } catch (err) {
            const errMsg = err.response?.data?.message || err || 'Failed to delete the task!...';
            toast.error(errMsg);
        };
    };
    
    const toggleComplete = async (id) => {
        try {
            const toggle = await taskServices.toggleComplete(id);
            setTasks(prev => prev.map(task => task._id === id ? toggle : task));

            if (toggle.completed) {
                toast('Task Updated!...', { icon: '' });
            } else {
                if (new Date(toggle.deadline) < new Date()) {
                    toast('Task Is Overdue & Pending!...', { icon: '' });
                } else {
                    toast('Task Updated!...', { icon: '' });
                } 
            }

            return (toggle);

        } catch (err) {
            const errMsg = err.response?.data?.message || err || 'Failed to toggle the task complete status!...';
            toast.error(errMsg);
        };
    };

    return ({ tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete });
};