function filterTaskByCompletion(tasks, completed) {
    const filteredTasks = tasks.filter((task) => task.completed === completed)
    return filteredTasks
}
const tasks = [
    { title: "Task 1", completed: true },
    { title: "Task 2", completed: false },
    { title: "Task 3", completed: false },
    { title: "Task 4", completed: true },
    { title: "Task 5", completed: true },
    { title: "Task 6", completed: false }
]
const completed = true;
const completedTasks = filterTaskByCompletion(tasks, completed);
console.log(completedTasks)