const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    todoList.appendChild(li);
    todoInput.value = "";
    todoInput.focus();
});