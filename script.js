let tasks = [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskDescription = taskInput.value.trim();

  if (taskDescription !== "") {
    tasks.push({ description: taskDescription, completed: false });
    taskInput.value = ""; // Clear input field after adding the task
    renderTasks(); // Re-render tasks
  }
}

// Function to toggle completion of task
function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the array
  renderTasks(); // Re-render tasks
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the list

  // Split tasks into pending and completed for better sorting
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // Render pending tasks
  pendingTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
                    <input type="checkbox" onclick="toggleTaskStatus(${tasks.indexOf(
                      task
                    )})" />
                    ${task.description}
                    <span class="delete-btn" onclick="deleteTask(${tasks.indexOf(
                      task
                    )})">🗑️</span>
                `;
    taskList.appendChild(li);
  });

  // Render completed tasks with strikethrough
  completedTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "completed";
    li.innerHTML = `
                    <input type="checkbox" onclick="toggleTaskStatus(${tasks.indexOf(
                      task
                    )})" checked />
                    ${task.description}
                    <span class="delete-btn" onclick="deleteTask(${tasks.indexOf(
                      task
                    )})">🗑️</span>
                `;
    taskList.appendChild(li);
  });
}
