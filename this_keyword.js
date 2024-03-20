console.log("this keyword");

console.log(this);
console.log(window);
console.log(this===window);


function myFunc(){
    console.log(this);
}
myFunc();


function func2(){
    "use strict"
    console.log(this);
}
func2();