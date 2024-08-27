
document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addButton = document.querySelector('button[type="submit"]');

    addButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';

            listItem.appendChild(taskSpan);
            listItem.appendChild(removeButton);

            todoList.appendChild(listItem);

            todoInput.value = "";

            removeButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });
        }
    });
});
