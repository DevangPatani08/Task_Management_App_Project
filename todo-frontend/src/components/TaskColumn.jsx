import React from 'react';
import { sortTasks } from '../utils/taskUtils';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, type, onEdit, onDelete, onToggleComplete }) => {
    const sortedTasks = sortTasks(tasks);

    const getColumnColor = () => {
        switch (type) {
            case 'todo': return 'bg-gray-50 border-gray-200'
            case 'do-today': return 'bg-green-50 border-green-200'
            case 'for-later': return 'bg-indigo-50 border-indigo-200'
            case 'overdue': return 'bg-red-50 border-red-200'
            default: return 'bg-gray-50 border-gray-200'
        }
    };

    const getHeaderColor = () => {
        switch (type) {
            case 'todo': return 'bg-gray-500 text-white'
            case 'do-today': return 'bg-green-500 text-white'
            case 'for-later': return 'bg-indigo-500 text-white'
            case 'overdue': return 'bg-red-500 text-white'
            default: return 'bg-gray-500 text-white'
        }
    };

    return (
        <div className={`border-2 rounded-lg ${getColumnColor()}`}>
            <div className={`p-3 rounded-t-lg ${getHeaderColor()}`}>
                <h3 className='font-semibold text-center'>{title} <span className='text-sm opacity-90'>({tasks.length})</span></h3>
            </div>
            <div className="p-3 min-h-[200px] max-h-full overflow-y-auto">
                {sortedTasks.length === 0 ? (
                    <div className="text-center text-gray-700 bg-gray-200 py-8">
                        <p>No Tasks Found</p>
                    </div>
                ) : (
                    sortedTasks.map(task => (
                        <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default TaskColumn;