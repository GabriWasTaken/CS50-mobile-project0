const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let counter = 0;
let uncheckedCounter = 0;

function newTodo() {
  const newTodo = document.createElement("li");
  newTodo.classList.add(classNames.TODO_ITEM);
  list.append(newTodo);
  counter++;

  itemCountSpan.textContent = counter;

  const checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add(classNames.TODO_CHECKBOX);
  checkbox.addEventListener("change", function (e) {
    if (e.target.checked) {
      uncheckedCounter--;
      uncheckedCountSpan.textContent = uncheckedCounter;
    } else {
      uncheckedCounter++;
      uncheckedCountSpan.textContent = uncheckedCounter;
    }
  });
  uncheckedCounter++;
  uncheckedCountSpan.textContent = uncheckedCounter;
  newTodo.append(checkbox);

  const TEXT = document.createElement("div");
  TEXT.textContent = counter;
  newTodo.append(TEXT);

  const deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.textContent = "DELETE";
  deleteTodoBtn.classList.add(classNames.TODO_DELETE);
  deleteTodoBtn.addEventListener("click", function (e) {
    list.removeChild(e.target.parentNode);
    counter--;
    itemCountSpan.textContent = counter;
    uncheckedCounter--;
    uncheckedCountSpan.textContent = uncheckedCounter;
  });
  newTodo.append(deleteTodoBtn);
}
