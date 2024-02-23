// Spread operator (new way)
// add more elements in arr2
let arr1 = ["item1", "item2"];
let arr2 = [...arr1];
arr2.push("item3");

console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);