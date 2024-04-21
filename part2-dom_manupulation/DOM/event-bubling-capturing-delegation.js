// event bubbling
// event propogation
// event capturing
// event delegation

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capturing events 
// child.addEventListener("click", ()=> {
//     console.log("Capture Child");
// }, true);

// parent.addEventListener("click", ()=> {
//     console.log("Capture Parent");
// }, true);

// grandParent.addEventListener("click", ()=> {
//     console.log("Capture grandParent");
// }, true);

// document.body.addEventListener("click", ()=> {
//     console.log("Capture body");
// }, true);



// normal events ---->>>> event bubbling
// child.addEventListener("click", ()=> {
//     console.log("you clicked Child");
// });

// parent.addEventListener("click", ()=> {
//     console.log("you clicked Parent");
// });

// grandParent.addEventListener("click", ()=> {
//     console.log("you clicked grandParent");
// });

// document.body.addEventListener("click", ()=> {
//     console.log("you clicked body");
// });


// event delegation
grandParent.addEventListener("click", (e)=> {
    // console.log("You clicked something");
    console.log(e.target.textContent);
    console.log(e.target);
});

