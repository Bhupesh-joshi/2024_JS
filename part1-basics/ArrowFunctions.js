// Arrow Function

const HBD = () => {
    console.log("Happy Birthday Arrow")
}

HBD();


// addTwoNUm
const addTwoNum = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwoNum(2, 1));


// isEven 
const isEven = num => num % 2 === 0;

console.log(isEven(3));


// firstChar
const firstChar = string => string[0];

console.log(firstChar("KKJS"))



// findTarget
const findTarget = (array, target)=> {
    for(let i = 0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return "N0"
}

const myArray = [1,2,3,4,5,6];
const ans = findTarget(myArray, 9);

console.log(ans)