// Function Expression

const HBD = function(){
    console.log("Happy Birthday");
}
HBD();



// Add two nums

const addTwo = function(num1, num2){
    return num1 + num2;
}

console.log(addTwo(2,2));



// isEven

const isEven = function(num){
    return num % 2 === 0;
}

console.log(isEven(45));



// firstChar
const firstChar = function(string){
    return string[0];
}

console.log(firstChar("Bhupesh"));



// Target
const isTarget = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,2,3,4,5];
const ans = isTarget(myArray, 3);
console.log(ans);