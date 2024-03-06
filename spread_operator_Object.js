// Spread Operator in Object

// Array

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const newArray = [...array1, ...array2]
// const againNewArray = [..."1234567"]

// console.log(newArray)
// console.log(againNewArray)



// Object

const object1 = {
    key1 : "value1",
    key2 : "value2"
}

const object2 = {
    key3 : "value3",
    key4 : "value4"
}

const newObject = {...object1, ...object2, name : "Bhupesh"};
console.log(newObject)

const myObj = {..."abc"};
console.log(myObj);

const alphabet = {..."abcdefghighijklmnopqrstuvwxyz"};
console.log(alphabet)

