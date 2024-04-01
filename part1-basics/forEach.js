const myArray = [5, 2, 4, 6];

// function myFunc(firstNum, index){
//     console.log(`index is ${index} number is ${firstNum}`);
// }

// for(let i = 0; i < myArray.length; i++){
//     myFunc(myArray[i], i);
// }

myArray.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`);

});




// Ex

const array = [1, 2, 3, 4, 5];
array.forEach(function(num, ind){
    console.log(num*2, ":", ind);
});



// EX
const users = [
    {name: 'John', age : 22},
    {name: 'Kate', age : 20},
    {name: 'Perry', age : 29},
    {name: 'Jane', age : 25},
];

// users.forEach(function(firstName){
//     console.log(firstName.name);
// });

users.forEach((firstName) => {
    console.log(firstName.name); 
});