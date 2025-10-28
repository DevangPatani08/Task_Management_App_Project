import React, { useEffect, useState } from 'react';

const TaskForm = ({ isOpen, onClose, task, mode, onSubmit }) => {
    const [formData, setFormData] = useState({
        message: '',
        priority: 'todo',
        deadline: ''
    });
    const [errors, setErrors] = useState({});    

    useEffect(() => {
        const formatDeadlineDate = (dateValue) => {  
            if (!dateValue) return '';
            
            const deadline = new Date(dateValue);
            
            if (!deadline) return '';
            
            // Get the local datetime in the correct format for datetime-local input
            const year = deadline.getFullYear();
            const month = String(deadline.getMonth() + 1).padStart(2, '0');
            const day = String(deadline.getDate()).padStart(2, '0');
            const hours = String(deadline.getHours()).padStart(2, '0');
            const minutes = String(deadline.getMinutes()).padStart(2, '0');
            
            const formattedDeadline = !isNaN(deadline.getTime()) ? `${year}-${month}-${day}T${hours}:${minutes}` : '';

            return (formattedDeadline);
        };
        
        if (task && mode === 'edit') {
            setFormData({ message: task.message, priority: task.priority, deadline: formatDeadlineDate(task.deadline) });
        } else {
            setFormData({ message: '', priority: 'todo', deadline: '' });
        }

        setErrors({});
    }, [task, mode, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

        // clear error while typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.message.trim()) {
            newErrors.message = 'Message is a required field!...';
        }

        if (!formData.deadline) {
            newErrors.deadline = 'Deadline is a required field!...';
        } else if (new Date(formData.deadline) < new Date()) {
            newErrors.deadline = 'Deadline cannot be in the past!...';
        }

        setErrors(newErrors);
        return (Object.keys(newErrors).length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await onSubmit(formData);
            onClose();
        } catch (error) {
            console.error('Submission Error: ', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-md">
                <div className="p-6">
                    <h2 className='text-xl font-bold mb-4'>{mode === 'create' ? 'Create A New Task' : 'Edit Task'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>Text Message<span className='text-red-500'>*</span></label>
                            <textarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder='Enter your task...' rows={3} className={`w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.message ? 'border-red-500' : 'border-gray-400'}`} />
                            {errors.message && (<p className='text-red-500 text-sm mt-1'>{errors.message}</p>)}
                        </div>
                        <div className="mb-4">
                            <label htmlFor='priority' className='block text-sm font-medium text-gray-700 mb-2'>Priority<span className='text-red-500'>*</span></label>
                            <select name="priority" id="priority" value={formData.priority} onChange={handleChange} className='w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent border-gray-400'>
                                <option value="todo">To Do</option>
                                <option value="do-today">Do Today</option>
                                <option value="for-later">For Later</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor='deadline' className='block text-sm font-medium text-gray-700 mb-2'>Deadline<span className='text-red-500'>*</span></label>
                            <input type='datetime-local' name="deadline" id="deadline" value={formData.deadline} onChange={handleChange} className={`w-full p-3 border bg-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${errors.deadline ? 'border-red-500' : 'border-gray-400'}`} />
                            {errors.deadline && (<p className='text-red-500 text-sm mt-1'>{errors.deadline}</p>)}
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button type="button" onClick={onClose} className='px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer'>Cancel</button>
                            <button type="submit" className='px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out'>{mode === 'create' ? 'Create Task' : 'Update Task'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;