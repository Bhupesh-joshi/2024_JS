// intro to events
// click
// button press
// mouseOver


const btn = document.querySelector(".btn-headLine");
// console.log(btn);


// can not use it because can't call it multiple times
// btn.onclick = function(){
//     console.log("You clicked me ! ! ! ! ! !");
// }



// method ==== addEventListener

// function clickMe(){
//     console.log("You clicked me ! ! ! ! ! !");
// }
// btn.addEventListener("click", clickMe);


// btn.addEventListener("click", function(){
//     console.log("You clicked me ! ! ! ! ! !");
// })

// arrow function
btn.addEventListener("click", ()=>{
    console.log("You clicked me ! ! ! ! ! !");
})