const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newInnerHtml = 
        `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newInnerHtml;
    // console.log(newLi)
    todoList.append(newLi);
    todoInput.value = "";
});

// event delegation
todoList.addEventListener("click", (e)=> {
    console.log(e.target);

    if(e.target.classList.contains("remove")){
        // console.log("Delete");
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }

    if(e.target.classList.contains("done")){
        // console.log("done");
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-Through"
    }
})