import React, { useEffect, useState } from 'react';
import Typography from './Typography';
import Button from './Button';

const TaskForm = ({ isOpen, onClose, task, mode, onSubmit }) => {
    const [formData, setFormData] = useState({ message: '', priority: 'todo', deadline: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const formatDD = (dateValue) => {
            if (!dateValue) return '';

            const deadline = new Date(dateValue);

            if (!deadline) return '';

            const y = deadline.getFullYear();
            const m = String(deadline.getMonth() + 1).padStart(2, '0');
            const d = String(deadline.getDate()).padStart(2, '0');
            const hr = String(deadline.getHours()).padStart(2, '0');
            const min = String(deadline.getMinutes()).padStart(2, '0');

            const formattedDeadline = !isNaN(deadline.getTime()) ? `${y}-${m}-${d}T${hr}:${min}` : '';

            return formattedDeadline;
        };

        if (task && mode === 'edit') {
            setFormData({ message: task.message, priority: task.priority, deadline: formatDD(task.deadline) });
        } else {
            setFormData({ message: '', priority: 'todo', deadline: '' });
        }

        setErrors({});
    }, [task, mode, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const Err = {};

        if (!formData.message.trim()) Err.message = 'Message is a required field!...';

        if (!formData.deadline) {
            Err.deadline = 'Deadline is a required field!...';
        } else if (new Date(formData.deadline) < new Date()) {
            Err.deadline = 'Deadline cannot be in the past!...';
        }

        setErrors(Err);
        return (Object.keys(Err).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await onSubmit(formData);
            onClose();
        } catch (err) {
            console.error(`Submission Error: ${err}`);
        }
    };

    if (!isOpen) return (null);

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg w-full max-w-md'>
                <div className='p-6'>
                    <Typography variant='h4' weight='bold' className='mb-4'>{mode === 'create' ? 'Create A New Task' : 'Edit Task'}</Typography>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='message' className='block text-sm font-medium text-neutral-700 mb-2'>Message<span className='text-red-500'>*</span></label>
                            <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder='Type message here...' rows={3} className={`w-full p-3 text-neutral-600 focus:text-neutral-700 bg-white border rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-neutral-400'}`} required />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='priority' className='block text-sm font-medium text-neutral-700 mb-2'>Priority<span className='text-red-500'>*</span></label>
                            <select name="priority" id="priority" value={formData.priority} onChange={handleChange} required className='w-full text-neutral-600 focus:text-neutral-700 border border-neutral-400 rounded-md p-3 text-base bg-white focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary-500'>
                                <option value="todo">To Do</option>
                                <option value="do-today">Do today</option>
                                <option value="for-later">For Later</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='deadline' className='block text-sm font-medium text-neutral-700 mb-2'>Deadline<span className='text-red-500'>*</span></label>
                            <input type="datetime-local" name='deadline' id='deadline' value={formData.deadline} onChange={handleChange} className={`w-full p-3 text-neutral-600 focus:text-neutral-700 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.deadline ? 'border-red-500' : 'border-neutral-400'}`} required />
                        </div>
                        <div className='flex items-center justify-end gap-6 pt-6 pb-2'>
                            <Button type='button' btnType='bgNone' handleClick={onClose}>Cancel</Button>
                            <Button type='submit' btnType='primary'>{mode === 'create' ? 'Create Task' : 'Update Task'}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;