// click-events-practice 

// const btn1 = document.getElementById("one");
// // console.log(btn1);

// 1
// btn1.addEventListener("click", function() {
//     // console.log("you clicked me");
//     btn1.style.backgroundColor = "red";
//     btn1.style.color = "yellow";
// })


// 2
const allBtn = document.querySelectorAll(".my-buttons button");

// for(button of allBtn){
//     // console.log("h");
//     button.addEventListener("click", function() {
//         console.log("you clicked me");
//         this.style.backgroundColor = "red";
//         this.style.color = "yellow";
//     })
// }


// 3
allBtn.forEach(button => {
    button.addEventListener("click", (event)=> {
        // console.log(event.target);
        event.target.style.backgroundColor = "red";
        event.target.style.color = "yellow";
    })
})
