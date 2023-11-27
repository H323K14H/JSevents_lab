const enter = document.querySelector('#enter');
const toDoList = document.querySelector('#list');
const input = document.querySelector('#new-todo');
const remove = document.createElement('button');
const todoForm = document.querySelector('#todo-form');

enter.addEventListener("click", (event) => {
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = input.value;

    // Create and append a unique "Delete" button for this list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        newItem.parentNode.removeChild(newItem); // Remove the corresponding list item
    });

    // Append both the list item and its associated delete button
    newItem.appendChild(deleteButton);
    toDoList.appendChild(newItem);
})






