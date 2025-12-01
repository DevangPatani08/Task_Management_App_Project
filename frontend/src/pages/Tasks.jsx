import { useTasks } from '../hooks/useTasks';
import { useAuth } from '../context/AuthContext';
import Typography from '../components/Typography';
import Button from '../components/Button';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskBoard from '../components/TaskBoard';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
    const { tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete } = useTasks();
    const { user } = useAuth();
    const [showForm, setShowForm] = useState(false);
    const [edit, setEdit] = useState(null);

    const handleEditClick = (task) => setEdit(task);
    const handleCreate = async (data) => await createTask(data);
    const handleEdit = async (data) => {
        await updateTask(edit._id, data);
        setEdit(null);
    };

    const handleClose = () => {
        setShowForm(false);
        setEdit(null);
    };


    if (loading) {
        return (
            <div className='flex-1 min-h-screen flex justify-center items-center'>
                <div className='loading-spinner'></div>
            </div>
        );
    } else if (error) {
        return (
            <div className='wrapper'>
                <div className='bg-red-50 border-red-200 rounded-md p-4'>
                    <Typography variant='p' weight='regular' className='text-red-700'>{`Error: ${error}`}</Typography>
                </div>
            </div>
        );
    } else {
        return (
            <section className='w-full h-max py-6 md:py-4 px-3 md:px-16 flex flex-col justify-center items-center flex-1'>
                <div className='wrapper flex-1 flex flex-col justify-center items-start h-full'>
                    <div className='w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6'>
                        <div className='w-full md:w-fit text-center md:text-left'>
                            <Typography variant='h3' weight='bold'>
                                Welcome <span className='text-primary-500'>{`${user.username}`}</span>,
                            </Typography>
                            <Typography variant='p' weight='regular' className='text-neutral-600'>Organize your tasks and boost your productivity.</Typography>
                        </div>

                        <Button type='button' btnType='primary' handleClick={() => setShowForm(true)}>
                            <Plus className='w-5 h-5' />
                            <span>Create Task</span>
                        </Button>
                    </div>
                    
                    {/* Task board */}
                    <TaskBoard tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} onEdit={handleEditClick} />

                    {/* TaskForm create mode */}
                    {showForm && <TaskForm isOpen={showForm} onClose={handleClose} mode='create' onSubmit={handleCreate} />}

                    {/* TaskForm edit mode */}
                    {edit && <TaskForm isOpen={!!edit} onClose={handleClose} mode='edit' onSubmit={handleEdit} task={edit} />}
                </div>
            </section>
        );
    }
};

export default Tasks;