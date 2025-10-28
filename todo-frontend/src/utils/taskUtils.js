// Check if task is overdue or not
export const isOverdue = (task) => {
    // return boolean value for the condition that the task deadline is less than current date and task is not marked as complete
    return (new Date(task.deadline) < new Date() && !task.complete);
};

export const sortTasks = (tasks) => {
    return ([...tasks].sort((a, b) => {
        if (a.completed !== b.completed) {
            return (a.completed ? 1 : -1);
        }
        return (new Date(a.deadline) - new Date(b.deadline));
    }));
};

export const categorizeTasks = (tasks) => {
    const now = new Date(); // Use current time for real-time categorization
    
    return tasks.reduce((acc, task) => {
        if (task.completed) {
            // Completed tasks might go in a separate category or be excluded
            // For now, let's include them in their priority columns
            if (task.priority === 'do-today') acc.doToday.push(task);
            else if (task.priority === 'for-later') acc.forLater.push(task);
            else acc.todo.push(task);
        } else if (isOverdue(task)) {
            acc.overdue.push(task);
        } else {
            // Categorize by priority for non-overdue, incomplete tasks
            if (task.priority === 'do-today') acc.doToday.push(task);
            else if (task.priority === 'for-later') acc.forLater.push(task);
            else acc.todo.push(task);
        }
        return acc;
    }, {
        todo: [],
        doToday: [],
        forLater: [],
        overdue: []
    });
};