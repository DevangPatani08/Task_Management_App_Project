import React, { useState } from 'react';
import { checkOverdue } from '../utils/taskUtils';
import Typography from './Typography';
import Button from './Button';
import { Edit, Trash } from 'lucide-react';
import ConfirmationModal from './modal/ConfirmationModal';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const overdue = checkOverdue(task);

    const handleDelete = () => {
        onDelete(task._id);
        setShowDeleteModal(false);
    };

    const getPriorityColor = (priority) => {
        const priorityLower = priority?.toLowerCase();
        switch (priorityLower) {
            case 'do-today': return 'bg-green-200 text-green-900'
            case 'for-later': return 'bg-primary-200 text-primary-900'
            default: return 'bg-neutral-200 text-neutral-900'
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
            <div className={`border rounded-md p-4 mb-3 ${task.completed ? 'bg-neutral-50 border-neutral-200' : overdue ? 'bg-white border-red-200' : 'bg-white border-neutral-300'}`}>
                
                <div className='flex items-start justify-between gap-2'>
                    <div className='w-full flex-1'>
                        
                        <Typography variant='p' weight='medium' className={`${task.completed ? 'line-through text-neutral-500' : overdue ? 'text-red-700' : 'text-neutral-900'}`}>{task.message}</Typography>
                        
                        <span className={`text-xs ${overdue && !task.completed ? 'text-red-500 font-medium' : 'text-neutral-500'}`}>Due: {new Date(task.deadline).toLocaleString()}</span>
                        
                        <div className='flex flex-wrap items-center gap-2 mt-2'>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>{getPriorityText(task.priority)}</span>

                            {task.completed && (<span className='px-2 py-1 text-xs font-medium bg-green-200 text-green-900 rounded-full'>Completed</span>)}
                            
                            {!task.completed && overdue && (<span className='px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full'>Overdue</span>)}
                        </div>
                    </div>
                    <input type='checkbox' checked={task.completed} onChange={() => onToggleComplete(task._id)} className='appearance-none mt-1 h-4 w-4 bg-white border border-neutral-400 checked:bg-lime-500 checked:border-transparent rounded-full' />
                </div>
                <div className='w-full flex justify-end items-center gap-4 p-2'>
                    <Button type='button' btnType='iconsPrimary' handleClick={() => { onEdit(task); console.log('Clicked!....'); }} disabled={task.completed} title={task.completed ? 'Cannot edit completed task' : 'Edit Task'}>
                        <Edit className='w-4.5 h-4.5'/>
                    </Button>
                    <Button type='button' btnType='iconsDanger' handleClick={() => setShowDeleteModal(true)}  title='Delete Task'>
                        <Trash className='w-4.5 h-4.5'/>
                    </Button>
                </div>
            </div>

            {/* Confirm Delete Modal */}
            <ConfirmationModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={handleDelete} title='Delete Task' message='Are you sure you want to delete this task? This action is irreversible!...' />
        </>
    );
};

export default TaskCard;