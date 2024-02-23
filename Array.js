// Array

let num = [1, 2, 3, 4, 5];
let chars = ["Bhupesh", "Ramesh", "Mukesh"];
let mixedArray = ["Bhupesh", "Joshi", 1, 2.5, null, undefined];

console.log(mixedArray);
console.log(mixedArray.length);
console.log(mixedArray[1]);
console.log(typeof mixedArray);
console.log(Array.isArray(mixedArray));

// array inside Array
let inside = [1, 2, ["Bhupesh", "Joshi"]];
console.log(inside[0]);