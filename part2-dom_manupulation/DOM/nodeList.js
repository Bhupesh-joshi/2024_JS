let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));



// simple for loop
// for of loop
// forEach 

// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#FFF"
//     navItem.style.color = "#000"
//     navItem.style.fontWeight = "bold"
// };


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#FFF"
//     navItem.style.color = "#000"
//     navItem.style.fontWeight = "bold"
// };




// forEach
navItems.forEach((navItem)=> {
    // navItem.style.backgroundColor = "#FFF"
    // navItem.style.color = "#000"
    // navItem.style.fontWeight = "bold"
})
