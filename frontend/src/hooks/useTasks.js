import { useEffect, useState } from "react";
import { taskServices } from '../services/tasks';

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
                setError(err);
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

            return (newTask);
        
        } catch (err) {
            throw err.response?.data?.message || err;
        }
    };

    const updateTask = async (id, data) => {
        try {
            const update = await taskServices.updateTask(id, data);
            setTasks(prev => prev.map(task => task._id === id ? update : task));

            return (update);
        
        } catch (err) {
            throw err.response?.data?.message || err;
        }
    };

    const deleteTask = async (id) => {
        try {
            await taskServices.deleteTask(id);
            setTasks(prev => prev.filter(task => task._id !== id));
        
        } catch (err) {
            throw err.response?.data?.message || err;
        }
    };

    const toggleComplete = async (id) => {
        try {
            const toggledTask = await taskServices.toggleComplete(id);
            setTasks(prev => prev.map(task => task._id === id ? toggledTask : task));

            return (toggledTask);

        } catch (err) {
            throw err.response?.data?.message || err;
        }
    };

    return ({ tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete });
};