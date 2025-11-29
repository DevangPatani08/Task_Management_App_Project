import React, { useEffect, useMemo, useState } from 'react';
import { ctgTasks } from '../utils/taskUtils';
import TaskColumn from './TaskColumn';

const TaskBoard = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const ctg = useMemo(() => { return ctgTasks(tasks); }, [tasks, currentTime]);

    return (
        <div className='w-full flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            
            <TaskColumn title='To Do' tasks={ctg.toDo} type='todo' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            <TaskColumn title='Do Today' tasks={ctg.doToday} type='do-today' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            <TaskColumn title='For Later' tasks={ctg.forLater} type='for-later' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            <TaskColumn title='OverDue' tasks={ctg.overDue} type='overdue' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
        </div>
    );
};

export default TaskBoard;