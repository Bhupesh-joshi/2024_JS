// if else if - Multiple Conditions

let tempInDegree = 0;

if(tempInDegree < 0) {
    console.log("Its Too Cold Outside");
} else if (tempInDegree < 15) {
    console.log("Its Cold Outside");
} else if (tempInDegree < 25) {
    console.log("Whether is Okay");
} else if (tempInDegree < 35) {
    console.log("Lets swim Today");
} else if (tempInDegree < 45) {
    console.log("Turn on AC");
} else {
    console.log("Too Hot Outside...!!");
}



// Example 2

let myNum = 28;

if (myNum < 5){
    console.log("Less than 5");
} else if (myNum < 10){
    console.log("Less than 10");
} else if (myNum < 15) {
    console.log("Less than 15");
} else if (myNum < 20) {
    console.log("Less than 20");
} else if (myNum < 25) {
    console.log("Less than 25");
} else {
    console.log("Bigger Num")
}



// sunday Monday

let day = 5;

if (day == 1){
    console.log("Monday");
} else if (day == 2){
    console.log("Tuesday");
} else if (day == 3){
    console.log("Wednesday");
} else if (day == 4) {
    console.log("Thursday")
} else if (day == 5) {
    console.log("Friday")
} else if (day == 6) {
    console.log("Saturday")
} else if (day == 7) {
    console.log("Sunday")
} else {
    console.log("Invalid Input")
}