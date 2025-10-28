import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import TaskBoard from '../components/TaskBoard';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

const Tasks = () => {
    const { tasks, loading, error, createTask, updateTask, deleteTask, toggleComplete } = useTasks();
    const [editingTask, setEditingTask] = useState(null);
    const [showTaskForm, setShowTaskForm] = useState(false);


    const handleEditClick = (task) => {
        setEditingTask(task);
    };

    const handleCreateTask = async (taskData) => {
        await createTask(taskData);
    };

    const handleEditTask = async (taskData) => {
        await updateTask(editingTask._id, taskData);
        setEditingTask(null);
    };

    const handleCloseForm = () => {
        setShowTaskForm(false);
        setEditingTask(null);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className='text-red-700'>Error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <main className='w-full min-h-screen h-full flex flex-col'>
            <div className="w-full flex-1 px-3 md:px-16 py-10 md:py-12 mt-20 md:mt-25 container mx-auto flex flex-col justify-start items-center">
                <div className="w-full px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className='w-full md:w-fit text-center md:text-left'>
                        <h2 className='text-3xl font-bold text-gray-900'>My Tasks</h2>
                        <p className='mt-2 text-base/6 text-gray-600'>Organize your tasks and boost your productivity</p>
                    </div>

                    <button type="button" onClick={() => setShowTaskForm(true)} className='flex items-center justify-center gap-1 text-base/6 font-bold text-white bg-indigo-500 px-6 py-3 rounded hover:bg-indigo-700 transition-all duration-300 ease-in-out'>
                        <FaPlus size={24} />
                        <span>Add New Task</span>
                    </button>
                </div>

                {/* Display the task board */}
                <TaskBoard tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} onEdit={handleEditClick} />

                {/* Display task form in create mode for creating new tasks */}
                {showTaskForm && <TaskForm isOpen={showTaskForm} onClose={handleCloseForm} mode='create' onSubmit={handleCreateTask} />}

                {/* Display task form in edit mode for editing a existing tasks */}
                {editingTask && <TaskForm isOpen={!!editingTask} onClose={handleCloseForm} mode='edit' task={editingTask} onSubmit={handleEditTask} />}
            </div>
        </main>
    );
};

export default Tasks;