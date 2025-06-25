let taskList = [
    {taskItem: "Buy groceries", date: "10-1-2025"}, 
    {taskItem: "Walk the dog", date: "10-2-2025"}
];
button = document.getElementById("addTaskButton");

function DeleteTask(index) {
    taskList.splice(index, 1); // Remove the task at the specified index
    DisplayTasks(); // Refresh the task list display
}

function DisplayTasks()
{
    let taskContainer = document.querySelector(".taskContainer");
    taskContainer.innerHTML = ""; // Clear the container before displaying tasks
    taskList.forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.className = "taskItem"; // Assign a class for styling
        taskElement.innerHTML = `<p>${task.taskItem}  ${task.date} <button onclick="DeleteTask(${index})">Delete</button></p>`;
        taskContainer.appendChild(taskElement);
    });
}

function AddTask()
{
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    let dateInput = document.getElementById("taskDate");
    let dateValue = dateInput.value;
    console.log(task, dateValue); // Log the task and date for debuggin
    if(!task || !dateValue) {
        alert("Please enter a task and select a date.");
        return; // Exit if input is invalid
    }
    taskList.push({taskItem: task, date: dateValue}); // Add new task to the list
    taskInput.value = ""; // Clear the input field
    DisplayTasks();    
}

DisplayTasks(); // Initial display of tasks
