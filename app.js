document.addEventListeners('D0MContentLoaded', () => {
  const taskInput = document.querySelector('.task-input');
  const detailsInput = document.querySelector('.details-input');
  const assigneeInput = document.querySelector('.assignee-input');
  const addButton = document.querySelector('.add-button');
  const taskList = document.querySelector('.todo-list ul');
  const details = document.getElementById('details');
  const taskDetail = document.getElementById('taskDetail');
  const closeDetails = document.getElementById('closeDetails');

  let tasks = [];

  const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = task.text;

      // Bouton pour afficher les détails de la tâche
      const detailButton = document.createElement('button');
      detailButton.textContent = 'Détails';
      detailButton.classList.add('detail-button');
      detailButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Évite le déclenchement de l'événement de la tâche
        taskDetail.textContent = `Tâche : ${task.text} <br> Détails : ${task.details} - Assigné à : ${task.assignee}`;
        details.style.display = 'block';
      });

      // Bouton de modification
      const editButton = document.createElement('button');
      editButton.textContent = 'Modifier';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêche le détail de s'afficher
        const newTaskText = prompt('Modifier le titre de la tâche:', task.text);
        const newTaskDetails = prompt('Modifier les détails de la tâche:', task.details);
        const newAssignee = prompt('Modifier la personne assignée:', task.assignee);
        
        if (newTaskText) {
          tasks[index].text = newTaskText;
        }
        if (newTaskDetails) {
          tasks[index].details = newTaskDetails;
        }
        if (newAssignee) {
          tasks[index].assignee = newAssignee;
        }
        
        renderTasks();
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

      // Bouton pour marquer la tâche comme terminée
      const completeButton = document.createElement('button');
      completeButton.textContent = task.completed ? 'Rétablir' : 'Terminer';
      completeButton.classList.add('complete-button');
      completeButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Évite le déclenchement de l'événement de la tâche
        task.completed = !task.completed; // Changer l'état de complétion
        renderTasks();
      });

      listItem.appendChild(detailButton); // Ajout du bouton Détails
      listItem.appendChild(editButton);    // Ajout du bouton Modifier
      listItem.appendChild(completeButton); // Ajout du bouton Terminer/Rétablir
      listItem.appendChild(deleteButton);   // Ajout du bouton Supprimer
      listItem.classList.toggle('completed', task.completed);
      taskList.appendChild(listItem);
    });
  };

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const taskDetails = detailsInput.value.trim();
    const assignee = assigneeInput.value.trim() || 'Non affecté';

    if (taskText === '') return;

    tasks.push({ text: taskText, details: taskDetails, completed: false, assignee: assignee });
    taskInput.value = '';
    detailsInput.value = '';
    assigneeInput.value = '';
    renderTasks();
  });

  closeDetails.addEventListener('click', () => {
    details.style.display = 'none';
  });
});

// Script de sabotage éducatif
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.querySelector('.add-button');

  // Fonction pour réinitialiser la liste des tâches
  const resetTasks = () => {
    const confirmation = confirm('Êtes-vous sûr de vouloir réinitialiser toutes les tâches ?');
    if (confirmation) {
      tasks = []; // Réinitialise la liste des tâches
      renderTasks();
      alert('Toutes les tâches ont été réinitialisées !');
    }
  };

  // Ajoute un bouton de réinitialisation au DOM
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Réinitialiser toutes les tâches';
  resetButton.classList.add('reset-button');
  resetButton.addEventListener('click', resetTasks);

  // Ajout du bouton à la fin de la liste des tâches
  const taskList = document.querySelector('.todo-list ul');
  taskList.appendChild(resetButton);


  const imagesContainer = document.querySelector('.todo-list');
  for (let i = 0; i < 25; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = "971375F2-520E-4EC3-8328-F24C8FAD274A.jpeg";
    imgElement.alt = `Image ${i + 1}`; // Attribut alt pour l'accessibilité
    imagesContainer.appendChild(imgElement); // Ajoute l'image au conteneur
  }
});

