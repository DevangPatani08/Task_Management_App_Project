import React from 'react'
import { sortTasks } from '../utils/taskUtils'
import Typography from './Typography';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, type, onEdit, onDelete, onToggleComplete }) => {
  const sortedTasks = sortTasks(tasks);

  const columnColor = () => {
    switch (type) {
      case 'todo': return 'bg-primary-50 border-primary-200'
      case 'do-today': return 'bg-green-50 border-green-200'
      case 'for-later': return 'bg-neutral-50 border-neutral-200'
      case 'overdue': return 'bg-red-50 border-red-200'
      default: return 'bg-neutral-50 border-neutral-200'
    }
  };

  const headerColor = () => {
    switch (type) {
      case 'todo': return 'bg-primary-500 text-white'
      case 'do-today': return 'bg-green-500 text-white'
      case 'for-later': return 'bg-neutral-500 text-white'
      case 'overdue': return 'bg-red-500 text-white'
      default: return 'bg-neutral-500 text-white'
    }
  };

  return (
    <div className={`border-2 rounded-md ${columnColor()} flex flex-col items-center justify-start`}>
      <div className={`w-full p-3 rounded-t-md ${headerColor()}`}>
        <Typography variant='h6' weight='semibold' className='text-center'>
          {title} <span className='text-base opacity-90'>({tasks.length})</span>
        </Typography>
      </div>
      <div className='w-full p-3 flex-1 min-h-max max-h-full overflow-y-auto'>
        {sortedTasks.length === 0 ? (
          <Typography variant='p' weight='regular' className='w-full text-center text-neutral-700 rounded-md bg-neutral-200 px-8 py-2'>No task found...</Typography>
        ) : (
          sortedTasks.map(task => (
            <TaskCard key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;