// function calculatePower(power){
//     return function(number){
//         return number ** power
//     };
// };

// const square = calculatePower(2);
// const ans2 = square(2);
// console.log(ans2);

// const cube = calculatePower(3);
// const ans = cube(2);
// console.log(ans);


// short way same functionality

// can write like this as well
// const calculatePower = power => number => number ** power;

const calculatePower = (power) =>{
    return (number) =>
        number ** power
};

const square = calculatePower(2);
const ans2 = square(2);
console.log(ans2);

const cube = calculatePower(3);
const ans = cube(2);
console.log(ans);