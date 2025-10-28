import React, {useState, useEffect, useMemo} from 'react';
import { categorizeTasks } from '../utils/taskUtils';
import TaskColumn from './TaskColumn';

const TaskBoard = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every minute to re-categorize overdue tasks
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const categorize = useMemo(() => {
        return categorizeTasks(tasks);
    }, [tasks, currentTime]);

    return (
        <div className='w-full h-full flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
            {/* To Do Column */}
            <TaskColumn title='To Do' tasks={categorize.todo} type='todo' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            {/* Do Today Column */}
            <TaskColumn title='Do today' tasks={categorize.doToday} type='do-today' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            {/* For Later Column */}
            <TaskColumn title='For Later' tasks={categorize.forLater} type='for-later' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            
            {/* OverDue Column */}
            <TaskColumn title='OverDue' tasks={categorize.overdue} type='overdue' onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />
        </div>
    );
};

export default TaskBoard;