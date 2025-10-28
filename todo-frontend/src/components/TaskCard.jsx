import React, { useState } from 'react';
import { isOverdue } from '../utils/taskUtils';
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmationModal from '../components/modal/ConfirmationModal';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const overdue = isOverdue(task);

    const handleDelete = () => {
        onDelete(task._id);
        setShowDeleteModal(false);
    };

    const getPriorityColor = (priority) => {
        const priorityLower = priority?.toLowerCase();
        switch (priorityLower) {
            case 'do-today': return 'bg-amber-100 text-amber-800'
            case 'for-later': return 'bg-green-100 text-green-800'
            default: return 'bg-indigo-100 text-indigo-800'
        }
    };
    
    const getPriorityText = (priority) => {
        const priorityLower = priority?.toLowerCase();
        switch (priorityLower) {
            case 'do-today': return 'Do Today'
            case 'for-later': return 'For Later'
            default: return 'To Do'
        }
    };

    return (
        <>
            <div className={`border rounded-lg p-4 mb-3 ${task.completed ? 'bg-gray-50 border-gray-200' : overdue ? 'bg-red-100 border-red-200' : 'bg-white border-gray-200'}`}>
                <div className="flex flex-col items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                        <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task._id)} className='appearance-none mt-1 h-4 w-4 bg-white border-1 border-gray-400 checked:bg-lime-500 checked:border-transparent rounded-full cursor-pointer' />
                        
                        <div className="flex-1">
                            <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : overdue ? 'text-red-700' : 'text-gray-900'}`}>{task.message}</p>
                            
                            <span className={`text-xs ${overdue && !task.completed ? 'text-red-500 font-medium' : 'text-gray-500'}`}>Due: {new Date(task.deadline).toLocaleString()}</span>
                            
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>{getPriorityText(task.priority)}</span>
                                
                                {task.completed && (<span className='px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full'>Completed</span>)}

                                {overdue && !task.completed && (<span className='px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full'>Overdue</span>)}
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end items-center gap-2">
                        <button type='button' onClick={() => onEdit(task)} disabled={task.completed} className={`p-1 cursor-pointer ${task.completed ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50'}`} title={task.completed ? 'Cannot edit completed tasks' : 'Edit task'}>
                            <FaEdit size={18} />
                        </button>
                        <button type='button' onClick={() => setShowDeleteModal(true)} className='p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded cursor-pointer' title='Delete task'>
                            <FaTrash size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation modal */}
            <ConfirmationModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={handleDelete} title='Delete Task' message="Are you sure you want to delete this task? This action is irreversible!..." />
        </>
    );
};

export default TaskCard;