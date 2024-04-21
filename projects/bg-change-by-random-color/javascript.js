const mainButton = document.querySelector("button");
// console.log(mainButton);
const body = document.body;
const currColor = document.querySelector(".current-color");
// console.log(currColor);
const h1 = document.querySelector("h1");
// console.log(h1);

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", ()=> {
    // console.log("clicked me");
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currColor.textContent = randomColor;

    // mainButton.style.backgroundColor = randomColor;
    h1.style.color = randomColor;
})