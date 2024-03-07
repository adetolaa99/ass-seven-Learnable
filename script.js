const todoList = document.getElementById("todo-list");

function addTodo() {
  const newTodoInput = document.getElementById("newTodo");
  const todoText = newTodoInput.value.trim();

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const todoInput = document.createElement("input");
  todoInput.type = "text";
  todoInput.value = todoText;
  todoInput.readOnly = true;

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.onclick = function () {
    todoInput.readOnly = false;
    todoInput.focus();
  };

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    listItem.remove();
  };

  listItem.appendChild(todoInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  newTodoInput.value = "";
}
