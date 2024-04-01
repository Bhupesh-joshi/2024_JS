// String Concatenation
// used for addition of string

let string1 = "Bhupesh";
let space = " ";
let string2 = "Joshi";

console.log(string1 + space + string2);


// Question
// 1
let str1 = "22";
let str2 = "11";

console.log(str1 + str2);
console.log(+str1 + +str2);


// 2
let a = +"10";
let b = +"20";
console.log(a + b);


// 3
// My name is Rohit and my age is 24
let age = 24;
let name = "Rohit";
let aboutMe = "My name is" + " " + name + " " + "My age is " + age;

console.log(aboutMe);


// Template String
let myName = "Bhupesh";
let myAge = 20;

let sec_aboutMe = `My name is ${myName} and my age is ${myAge}`
console.log(sec_aboutMe);