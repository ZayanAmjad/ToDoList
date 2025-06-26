let taskList = JSON.parse(localStorage.getItem('taskList')) || [ ];
button = document.getElementById("addTaskButton");
DisplayTasks(); // Initial display of tasks

function DeleteTask(index) {
    taskList.splice(index, 1); // Remove the task at the specified index
    DisplayTasks(); // Refresh the task list display
}

function DeleteAllTasks() {
    taskList = []; // Clear the task list
    localStorage.removeItem("taskList"); // Remove from local storage
    DisplayTasks(); // Refresh the task list display
}

function DisplayTasks()
{
    let taskContainer = document.querySelector(".taskContainer");
    taskContainer.innerHTML = ""; // Clear the container before displaying tasks
    taskList.forEach((task, index) => {
        let taskElement = document.createElement("div");
        taskElement.className = "taskItem"; // Assign a class for styling
        taskElement.innerHTML = `
            <span class="taskText">${task.taskItem}</span>
            <span class="taskDate">${task.date}</span>
            <button class="deleteButton" onclick="DeleteTask(${index})">Delete</button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

function AddTask()
{
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    let dateInput = document.getElementById("taskDate");
    let dateValue = dateInput.value;
    console.log(task, dateValue); // Log the task and date for debugging
    if(!task || !dateValue) {
        alert("Please enter a task and select a date.");
        return; // Exit if input is invalid
    }
    taskList.push({taskItem: task, date: dateValue}); // Add new task to the list
    localStorage.setItem("taskList", JSON.stringify(taskList)); // Save to local storage
    taskInput.value = ""; // Clear the input field
    dateInput.value = ""; // Clear the date input field
    DisplayTasks();    
}

