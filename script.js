const enter = document.querySelector('#enter');
const toDoList = document.querySelector('#list');
const input = document.querySelector('#new-todo');
const remove = document.createElement('button');
const todoForm = document.querySelector('#todo-form');

enter.addEventListener("click", (event) => {
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = input.value;

    toDoList.appendChild(newItem);
})

remove.innerHTML = "Delete";
todoForm.appendChild(remove);

