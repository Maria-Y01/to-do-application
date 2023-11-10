function createTodo() {
    let listItem = document.createElement("li");
    let todosContainerElement = document.getElementById("todos-container");
    todosContainerElement.appendChild(listItem);
  
    let userInput = document.getElementById("note").value;
     listItem.innerHTML = userInput;
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    document.getElementById('note').value = '';
  }
  
  function deleteTodos() {
    document.getElementById("todos-container").innerHTML = '';
  }
  
  function todoCheck(e, todo) {
    if (todo.style.textDecoration === '') {
      todo.style.textDecoration = 'line-through';
    } else {
      todo.style.textDecoration = '';
    }
  }
