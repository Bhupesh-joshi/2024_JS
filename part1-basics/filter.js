const numbers = [2,3,4,5,6,7];

// function isEven(numbers) {
//     return numbers%2 === 0;
// };

const evenNums = numbers.filter((numbers)=>{
    return numbers%2 === 0;
});
console.log(evenNums);