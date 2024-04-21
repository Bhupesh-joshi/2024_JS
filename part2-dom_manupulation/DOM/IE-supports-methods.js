// Old methods support IE
// appendChild
// insertBefore
// replaceChild
// removeChild


// appendChild
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new Todo";
// ul.appendChild(li);


// insertBefore
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "new Todo";
// ul.insertBefore(li, referenceNode);


// replaceChild
// const ul = document.querySelector(".todo-list");
// // newElement
// const li = document.createElement("li");
// li.textContent = "new Todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li, referenceNode);


// removeChild
const ul = document.querySelector(".todo-list");
// newElement
const li = document.createElement("li");
li.textContent = "new Todo";
const referenceNode = document.querySelector(".first-todo");
ul.removeChild(referenceNode);
