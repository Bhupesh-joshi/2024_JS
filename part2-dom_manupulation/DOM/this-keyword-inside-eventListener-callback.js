// this-keyword-inside-eventListener-callback

const btn = document.querySelector(".btn-headLine");


// function myFunc(){
//     console.log("You clicked me ! ! ! ! ! !");
//     console.log("value of This");
//     console.log(this);
// };

// btn.addEventListener("click", myFunc);
// output = this = button



// btn.addEventListener("click", function(){
//     console.log("You clicked me ! ! ! ! ! !");
//     console.log("value of This");
//     console.log(this);
// })
// output = this = button



btn.addEventListener("click", ()=>{
    console.log("You clicked me ! ! ! ! ! !");
    console.log("value of This");
    console.log(this);
})
// Output = this = window