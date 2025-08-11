const taskInput = document.getElementById('ta');
const taskDate = document.getElementById('task-date');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function createTaskElement(taskText, dateTime) {
    const li = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = `${taskText} ${dateTime ? `- (${dateTime})` : ''}`;

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.onclick = () => li.classList.toggle('completed');

    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.onclick = () => {
        const newTask = prompt('Edit Task:', taskText);
        if (newTask) {
            taskContent.textContent = `${newTask} ${dateTime ? `- (${dateTime})` : ''}`;
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(actions);

    taskList.appendChild(li);
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    createTaskElement(taskText, dateTime);

    taskInput.value = '';
    taskDate.value = '';
});
