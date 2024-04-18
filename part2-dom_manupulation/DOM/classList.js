const sectionTodo = document.querySelector(".todo-section")
// console.log(sectionTodo.classList);
sectionTodo.classList.add('bg-dark');

// for removing the container class
sectionTodo.classList.remove("container");


// to check class existence
const ans = sectionTodo.classList.contains("container");
console.log(ans);

// toggle
sectionTodo.classList.toggle("bg-dark");

const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");