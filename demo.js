 const tasks = [];

 document.getElementById('taskForm').addEventListener('submit', function(e) {
     e.preventDefault();

     let taskName = document.getElementById('taskName').value;
     let taskPriority = document.getElementById('taskPriority').value;
     
     const task = {
         name: taskName,
         priority: parseInt(taskPriority)
     };

     tasks.push(task);

     sortTasksByPriority();

     renderTaskList();

     document.getElementById('taskName').value = '';
     document.getElementById('taskPriority').value = '1';
 });

 function sortTasksByPriority() {
     tasks.sort((a, b) => a.priority - b.priority);
 }

 function renderTaskList() {
     const taskList = document.getElementById('taskList');
     taskList.innerHTML = ''; // Clear the current list

     tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('list-group-item');
         li.classList.add('task-item');
         li.innerHTML = `
             <span class="priority">Priority ${task.priority}:</span> ${task.name}
         `;
         taskList.appendChild(li);
     });
 }
