//Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  e.preventDefault();

  //creating Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //creating li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);

  //creating check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("completedButton");
  todoDiv.appendChild(completedButton);

  //creating trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trashButton");
  todoDiv.appendChild(trashButton);

  //appending the todo div to the ul
  todoList.appendChild(todoDiv);

  //clearing todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //Deleting todo
  if (item.classList[0] === "trashButton") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    //removing it now after the animation
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check mark
  if (item.classList[0] === "completedButton") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
