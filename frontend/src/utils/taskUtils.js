// Check overdue tasks
export const checkOverdue = (task) => {
    return (new Date(task.deadline) < new Date() && !task.completed);
};

export const sortTasks = (tasks) => {
    return ([...tasks].sort((x, y) => {
        if (x.completed !== y.completed) return (x.completed === true ? 1 : -1);

        return (new Date(x.deadline) - new Date(y.deadline));
    }));
};

export const ctgTasks = (tasks) => {
    return (tasks.reduce((acc, task) => {
        if (task.completed) {
            if (task.priority === 'do-today') {
                acc.doToday.push(task);
            } else if (task.priority === 'for-later') {
                acc.forLater.push(task);
            } else {
                acc.toDo.push(task);
            }
        } else if (checkOverdue(task)) {
            acc.overDue.push(task);
        } else {
            if (task.priority === 'do-today') {
                acc.doToday.push(task);
            } else if (task.priority === 'for-later') {
                acc.forLater.push(task);
            } else {
                acc.toDo.push(task);
            }
        }

        return (acc);
    }, { toDo: [], forLater: [], doToday: [], overDue: [] }));
};