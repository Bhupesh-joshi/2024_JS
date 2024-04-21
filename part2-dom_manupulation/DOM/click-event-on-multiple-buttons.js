// click event

const allBtn = document.querySelectorAll(".my-buttons button");
// console.log(allBtn);

// btn1,addEventListener("click", function(){
//     console.log("you clicked me");
// })


// for of loop
// for(let button of allBtn){
//     button.addEventListener("click", function(){
//         // console.log("You clicked me !!!");
//         console.log(button.textContent);
//         // console.log(this.textContent);
//     })
// }


// simple for loop 
// for(let i = 0; i<allBtn.length; i++){
//     allBtn[i].addEventListener("click", function(){
//     console.log(this)
//     })
// }


// foreEach
allBtn.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
})