// VARIABLES
const form = document.querySelector("form");
console.log();
const list = document.querySelector(".todoList");

// FONCTIONS
function addTodo(event) {
  event.preventDefault();
  const valueInput = form[0].value;
  //   console.log(valueInput);
}
// APPEL FONCTION
form.addEventListener("submit", addTodo);

let inputOkok = document.querySelector(".todoInput");
inputOkok.value = "";
