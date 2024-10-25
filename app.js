document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelector(".task-input");
  const addButton = document.querySelector(".add-button");
  const todoList = document.querySelector(".todo-list ul");

  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.className = "task";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.className = "task-content";

    const editButton = document.createElement("button");
    editButton.textContent = "Modifier";
    editButton.className = "edit-button";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.className = "delete-button";

    li.appendChild(taskContent);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
  }

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskElement = createTaskElement(taskText);
      todoList.appendChild(taskElement);
      taskInput.value = "";
    }
  }

  function editTask(taskElement) {
    const taskContent = taskElement.querySelector(".task-content");
    const newTaskText = prompt("Modifier la tâche:", taskContent.textContent);
    if (newTaskText !== null) {
      taskContent.textContent = newTaskText.trim();
    }
  }

  function deleteTask(taskElement) {
    todoList.removeChild(taskElement);
  }

  addButton.addEventListener("click", addTask);

  todoList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
      editTask(event.target.parentElement);
    } else if (event.target.classList.contains("delete-button")) {
      deleteTask(event.target.parentElement);
    }
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
