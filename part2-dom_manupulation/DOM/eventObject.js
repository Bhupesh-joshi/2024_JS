// event Object 

// const btn1 = document.querySelector("#one");
// btn1.addEventListener("click", function(event){
//     console.log(event);
// })



const allBtn = document.querySelectorAll(".my-buttons button");
// // for of loop
// for(let button of allBtn){
//     button.addEventListener("click", function(){
//         // console.log(this);
//     })
// }


// for of loop ---> Arrow function
for(let button of allBtn){
    button.addEventListener("click", (event)=>{
        // console.log(this.textContent);
        console.log(event.target);
        console.log(event.currentTarget);
    })
}