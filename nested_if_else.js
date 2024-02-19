// Number guessing Game

let correctNum = 100;
let userGuess = +prompt("Guess a Number");

if (correctNum === userGuess) {
    console.log("You are Right");
} else {
    if(userGuess < correctNum) {
        console.log("Number is low");
    } else {
        console.log("Number is High");
    }
}