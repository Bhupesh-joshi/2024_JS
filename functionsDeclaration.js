// Functions
// functionsDeclaration.js


function hello() {
    console.log("Hello Bhupesh");
}
// hello();


function twoPlusFour() {
    console.log(2 + 4);
}
// twoPlusFour()



// Return Value
// function twoPlusFour(){
//     return 2+4;
// }
// const returnValue = twoPlusFour();
// console.log(returnValue);



// Reusable Function

// function twoPlusFour(){
//     return 2+4;
// }
// const returnValue = twoPlusFour();
// console.log(returnValue);


// Reusable function
// function sumOfTwoNumbers(number1, number2){
//     return number1 + number2;
// } 

// const returnValue = sumOfTwoNumbers(5,5);
// console.log(returnValue);



// Exercise

function sumOfThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

const returnValue = sumOfThreeNumbers(5, 5, 5)
// console.log(returnValue);



// ex 2 divide

function division(num1, num2) {
    return num1 / num2;
}

const newValue = division(2, 4)
// console.log(newValue)



// Modules

function modules(num1, num2) {
    return num1 % num2;
}

const modValue = modules(2, 4)
// console.log(modValue)




// odd even

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// const returnTF = isEven(22);
// console.log(returnTF);



// Shortcut method for same 

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(223));
 



// input = string, OutPut = first character

// function firstChar(string) {
//     return string[0];
// }

// console.log(firstChar("Bhupesh"))



// Question 

function findTarget(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,3,4,5];
const ans = findTarget(myArray, 4)
console.log(ans);
