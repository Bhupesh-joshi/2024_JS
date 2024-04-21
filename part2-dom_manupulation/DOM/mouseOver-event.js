// mouseOver Event

const btn = document.querySelector(".btn-headLine");
console.log(btn);

btn.addEventListener("mouseover", ()=> {
    console.log("MOuse Overed")
})

btn.addEventListener("mouseleave", ()=> {
    console.log("MOuse Leaved")
})