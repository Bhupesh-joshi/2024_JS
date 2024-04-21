// how to get dimensions of the element

const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect().height;
console.log(info);

