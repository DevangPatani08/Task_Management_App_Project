import { useState } from 'react';
import { checkOverdue } from '../utils/taskUtils';
import Typography from './Typography';
import Button from './Button';
import { BadgeInfo, Clock3, Edit, Trash } from 'lucide-react';
import ConfirmationModal from './modal/ConfirmationModal';
import ViewMessageModal from './modal/ViewMessageModal';

const TaskCard = ({ task, onEdit, onDelete, onToggleComplete }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const overdue = checkOverdue(task);

    const handleDelete = () => {
        onDelete(task._id);
        setShowDeleteModal(false);
    };

    const getPriorityColor = (priority) => {
        const priorityLower = priority?.toLowerCase();
        switch (priorityLower) {
            case 'do-today': return 'bg-green-200 text-green-900'
            case 'for-later': return 'bg-neutral-200 text-neutral-900'
            default: return 'bg-primary-200 text-primary-900'
        }
    };

    const getPriorityText = (priority) => {
        const priorityLower = priority?.toLowerCase();
        switch (priorityLower) {
            case 'do-today': return 'High'
            case 'for-later': return 'Low'
            default: return 'Medium'
        }
    };

    const calDue = () => {
        const { deadline, createdAt, completed } = task;

        if (!createdAt || !deadline) return 'No deadline';


        try {
            const DDate = new Date(deadline);
            const CDate = new Date(createdAt);
            const now = new Date();

            const tmins = DDate - CDate;
            const tdays = Math.ceil(tmins / (24 * 60 * 60 * 1000));
            
            const remainingMins = DDate - now;
            const remainingDays = Math.ceil(remainingMins / (24 * 60 * 60 * 1000));

            if (isNaN(tdays) || isNaN(remainingDays)) return 'Invalid date';

            if (completed) return (`${tdays}/${remainingDays} days`);

            if (remainingDays < 0) return (`-${Math.abs(remainingDays)}/${tdays} days`);

            return (`${remainingDays}/${tdays} days`);

        } catch (err) {
            console.error(`Error calculating deadline: ${err}`);
            return "Error";
        }
    };


    return (
        <>
            <div className={`flex flex-col gap-0 border rounded-md p-4 mb-3 ${task.completed ? 'bg-neutral-50 border-neutral-200' : overdue ? 'bg-white border-red-200' : 'bg-white border-neutral-300'}`}>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <span className={`px-2 py-1 text-sm font-medium rounded-full ${getPriorityColor(task.priority)} `}>{getPriorityText(task.priority)}</span>

                        {task.completed && <span className='px-2 py-1 text-sm font-medium rounded-full text-green-900 bg-green-200'>Completed</span>}
                        
                        {!task.completed && overdue && <span className='px-2 py-1 text-sm font-medium rounded-full text-white bg-red-500'>Overdue</span>}
                    </div>
                    <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task._id)} className="peer relative appearance-none w-5 h-5 border border-neutral-400 rounded-sm text-white focus:outline-none checked:bg-green-500 hover:ring hover:ring-green-300 after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-no-repeat after:bg-center after:bg-size-[40px] after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]" />
                </div>
                <div className='w-full h-max p-2 border-b border-neutral-400 mt-2 mb-4'>
                    <Typography variant='p' weight='medium' className={`line-clamp-2 ${task.completed ? 'line-through text-neutral-500' : overdue ? 'text-red-700' : 'text-neutral-900'}`}>{task.message}</Typography>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <div className={`flex items-center justify-center gap-2 px-2 py-1 rounded-full text-sm ${overdue && !task.completed ? 'bg-red-500 text-white font-medium' : 'bg-orange-100 text-neutral-900'}`}>
                        <Clock3 className='w-4 h-4'/>
                        <span>{calDue()}</span>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <Button type='button' btnType='iconsSecondary' handleClick={() => setShowMessageModal(true)} title='View full message'>
                            <BadgeInfo className='w-4.5 h-4.5' />
                        </Button>
                        <Button type='button' btnType='iconsPrimary' handleClick={() => onEdit(task)} disabled={task.completed} title={task.completed ? 'Cannot edit completed task' : 'Edit Task'}>
                            <Edit className='w-4.5 h-4.5' />
                        </Button>
                        <Button type='button' btnType='iconsDanger' handleClick={() => setShowDeleteModal(true)} title='Delete Task'>
                            <Trash className='w-4.5 h-4.5'/>
                        </Button>
                    </div>
                </div>
            </div>

            {/* View Full Message Modal */}
            <ViewMessageModal isOpen={showMessageModal} onClose={() => setShowMessageModal(false)} title='View Full Message' message={task.message} />

            {/* Confirm Delete Modal */}
            <ConfirmationModal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={handleDelete} title='Delete Task' message='Are you sure you want to delete this task? This action is irreversible!...' />
        </>
    );
};

export default TaskCard;