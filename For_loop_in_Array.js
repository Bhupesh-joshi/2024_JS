// For loop in Array

let fruits = ["apple", "orange", "Mango", "Banana"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);
// console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toLocaleUpperCase());
    console.log(fruits[i]);
}

console.log(fruits2);