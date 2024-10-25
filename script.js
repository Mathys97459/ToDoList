document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const details = document.getElementById('details');
    const taskDetail = document.getElementById('taskDetail');
    const closeDetails = document.getElementById('closeDetails');
  
    let tasks = [];
  
    const renderTasks = () => {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
  
        // Affichage du détail de la tâche
        listItem.addEventListener('click', () => {
          taskDetail.textContent = `Détails de la tâche : ${task.text} - Assigné à : ${task.assignee}`;
          details.style.display = 'block';
        });
  
        // Bouton de suppression
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', (event) => {
          event.stopPropagation(); // Évite le déclenchement de l'événement de la tâche
          tasks.splice(index, 1);
          renderTasks();
        });
  
        listItem.appendChild(deleteButton);
        listItem.classList.toggle('completed', task.completed);
        taskList.appendChild(listItem);
      });
    };
  
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const assignee = prompt('À qui affecter cette tâche ?') || 'Non affecté';
  
      tasks.push({ text: taskText, completed: false, assignee: assignee });
      taskInput.value = '';
      renderTasks();
    });
  
    closeDetails.addEventListener('click', () => {
      details.style.display = 'none';
    });
  });
  