let navItems = document.getElementsByTagName("a");
// console.log(navItems[0]);

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




// HTML collection changing into Array
navItems = Array.from(navItems);

// forEach
navItems.forEach((navItem)=> {
    navItem.style.backgroundColor = "#FFF"
    navItem.style.color = "#000"
    // navItem.style.fontWeight = "bold"
})
