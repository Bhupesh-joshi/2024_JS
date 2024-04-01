// Number guessing Game

// let correctNum = 100;
// let userGuess = +prompt("Guess a Number");

// if (correctNum === userGuess) {
//     console.log("You are Right");
// } else {
//     if(userGuess < correctNum) {
//         console.log("Number is low");
//     } else {
//         console.log("Number is High");
//     }
// }



// example 2
let myNum = 5;
let guessedNum = +prompt("Guess a Number in Between 10");

if(myNum === guessedNum) {
    console.log("Correct Guess");
} else {
    if(guessedNum < myNum) {
        console.log("Too LOW");
    } else {
        console.log("Too HIGH");
    }
}