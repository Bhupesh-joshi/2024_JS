inner HTML

const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);
headLine.innerHTML = "<h1>Inner HTML has changed</h1>";
headLine.innerHTML += "<button class=\"btn\"> Learn More </button>"
console.log(headLine.innerHTML);