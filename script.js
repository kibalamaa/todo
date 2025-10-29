const taskInput = document.getElementById('task');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('added_tasks');

let primaryKey = 0;
taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const str = taskInput.value.trim();
    if (!str) return;

    const li = document.createElement('li');
    li.id = `task-${primaryKey}`;

    const span = document.createElement('span');
    span.textContent = str

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => li.remove());

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', () => {
        new_str = prompt('Edit Task', span.textContent);
        if (new_str) {
            span.textContent = new_str;
        }
    });
    li.appendChild(span)
    li.appendChild(editBtn);
    li.appendChild(deleteBtn)
    taskList.appendChild(li)

    primaryKey++;
    taskInput.value = "";
 
    
});