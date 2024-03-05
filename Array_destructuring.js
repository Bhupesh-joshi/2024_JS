// Array Destructuring

const array = ["a", "b", "c", "d"];

let [var1, var2] = array;
console.log(var1, var2);



// ex2 change the value

let [newVar1, newVar2] = array;
newVar1 = "Value changed";
console.log(newVar1, newVar2);



// ex3 Skipping the value

let [v1, , v3, v4] = array;
console.log(v1, v3, v4)


// ex 4 making new array for index[2,3]

let [newVariable1, newVariable2, ...secondArray] = array;
console.log(secondArray);


// second Method for this 

let thirdArray = array.slice(2)
console.log(thirdArray)