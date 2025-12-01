import { useEffect, useState } from "react";
import { taskServices } from '../services/tasks';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

export const useTasks = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const errorToast = (error, defaultMsg = 'An error occurred!...') => {
        const message = error?.response?.data?.message || error?.message || error || defaultMsg;
        
        toast.error(typeof message === 'string' ? message : defaultMsg, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
        });
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await taskServices.getAllTasks();
                setTasks(data);
            } catch (err) {
                errorToast(err, 'Failed to load tasks!...');
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        toast.dismiss(); // clear all previous toast
        fetch();
    }, []);

    const createTask = async (data) => {
        try {
            const newTask = await taskServices.createTask(data);
            setTasks(prev => [...prev, newTask]);

            return (newTask);
        
        } catch (err) {
            const errMsg = err.response?.data?.message || err;
            errorToast(errMsg, 'Failed to create task!...');
        }
    };

    const updateTask = async (id, data) => {
        try {
            const update = await taskServices.updateTask(id, data);
            setTasks(prev => prev.map(task => task._id === id ? update : task));

            return (update);
        
        } catch (err) {
            errorToast(err, 'Failed to update task!...');
        }
    };

    const deleteTask = async (id) => {
        try {
            await taskServices.deleteTask(id);
            setTasks(prev => prev.filter(task => task._id !== id));
        
        } catch (err) {
            errorToast(err, 'Failed to delete task!...');
        }
    };

    const toggleComplete = async (id) => {
        try {
            const toggledTask = await taskServices.toggleComplete(id);
            setTasks(prev => prev.map(task => task._id === id ? toggledTask : task));

            return (toggledTask);

        } catch (err) {
            errorToast(err, 'Failed to toggle task complete status!...');
        }
    };


    return ({ tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete });
};