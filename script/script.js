// VARIABLES

const todoInput = document.querySelector(".todoInput");

// console.log();

const todoButton = document.querySelector(".todoButton");
const todolist = document.querySelector(".todoList");

// APPEL FONCTION

todoButton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);

// FONCTIONS

function addTodo(event) {
  event.preventDefault();

  // Generer au click une toto div (LI Delete et Done)

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Créer le Li

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");

  // Ajouter la Li à la todoDiv
  todoDiv.appendChild(newTodo);
  // Ajouter la todo au localstorage
  // savelocaTodos(todo.Input.value);

  // Bouton Check

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Bouton Delete

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Ajouter toto à TodoList
  todolist.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  // console.log(e.target);
  const item = e.target;
  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // Chcek mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("complete");
  }
}
// function savelocaTodos() {
//   // checker si il y a des item existant
//   let todos;
//   if (localStorage.getItem["todos"] === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
