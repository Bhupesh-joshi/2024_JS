// AND _ OR Operator

// And operator &&
// Both conditions need to be true otherwise false in AND &&
// Example 1
let firstName = "Bhupesh";
let age = 20

if(firstName[0] === "B" && age >= 18){
    console.log("your name starts with B and your age is above 18");
} else {
    console.log("You are inside else");
};


// Example 2
let lastName = "Joshi";
let myAge = 21;
if(lastName[1] === "o" && myAge >= 20){
    console.log("your 1 index is i and your age is above 20");
} else {
    console.log("Both conditions are not true");
};



// OR || 
//  if only one condition will true it will work 

// Example 1
let OR_name = "Bhupesh";
let OR_Age = 17;

if (OR_name[0] === "B" || OR_Age >= 18){
    console.log("inside if Block");
} else {
    console.log("inside else Block");
};


// Example 2

let a = "john";
let b = "bob";

if(a[1] === "j" || b[2] === "i"){
    console.log("inside If Block");
} else {
    console.log("inside Else Block");
}