const enter = document.querySelector('#enter');
const toDoList = document.querySelector('#list');
const input = document.querySelector('#new-todo')

enter.addEventListener("click", (event) => {
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = input.value;

    toDoList.appendChild(newItem);
})