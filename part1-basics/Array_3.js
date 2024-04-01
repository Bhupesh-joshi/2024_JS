// How to clone Array
// How to concatenate arrays

console.log("Clone with Slice");
// Clone with Slice
let array1 = ["item1", "item2"];
let array2 = array1.slice(0);

array1.push("item3");

console.log(array1 === array2);
console.log(array1);
console.log(array2);


console.log("Clone with Concat");
// Clone with Concat
let arr1 = ["item1", "item2"];
let arr2 = [].concat(array1);

console.log(arr1 === arr2);
console.log(array1);
console.log(array2);


console.log("Clone with spread operator");
// Spread operator (new way) 
let newArr1 = ["item1", "item2"];
let newArr2 = [...newArr1];

console.log(newArr1 === newArr2);
console.log(newArr1);
console.log(newArr2);
