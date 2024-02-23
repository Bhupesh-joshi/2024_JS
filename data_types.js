// Primitive Vs Reference data types

console.log("Primitive data type");
// Primitive Data Type String

let num1 = 5;
let num2 = num1;

console.log("Num 1-> ", num1);
console.log("Num 2-> ", num2);
num1++;
console.log("After increment on Num 1");
console.log("Num 1-> ", num1);
console.log("Num 2-> ", num2);



console.log("Reference data type");
// Reference data type Array

let array1 = ["item1", "item2"];
let array2 = array1

console.log("Array 1-> ", array1);
console.log("Array 2-> ", array2);
array1.push("item3");
console.log("After pushing element on array");
console.log("Array 1-> ", array1);
console.log("Array 2-> ", array2);