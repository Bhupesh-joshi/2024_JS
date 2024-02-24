// Spread operator (new way)
// add more elements in arr2
let arr1 = ["item1", "item2"];

// slice
// let arr2 = arr1.slice(0).concat(["item3"]);

// Concat
// let arr2 = [].concat(arr1, ["item3"]);

// spread operator
let arr2  = [...arr1, "item3"];


console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);


console.log("sum Of Arrays");
// question 
// How to add 2 arrays
let array1 = ["item1", "item2"];
let array2 = ["item3", "item4"];

let sumOfArrays = [...array1, ...array2];
console.log(sumOfArrays);


let a = ["arr1", "arr2"];
let b = ["arr3", "arr4"];
let sum = [...a, ...b];
console.log(sum);