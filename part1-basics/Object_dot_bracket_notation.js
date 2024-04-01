// Object_dot_bracket_notation.js

const person = {
    name : "Bhupesh",
    age : 22,
}

// dot notation

person.gender = "male"

// bracket notation
person["hobbies"] = "sleeping";  
console.log(person)


// we can make object like

const obj = {
    "name" : "John",
    "age" : "22"
}

console.log(obj);


// exercise

const student = {
    1 : "John",
    2 : "Rohn",
    3 : "Down",
    4 : "Perry"
}

student["6"] = "Mohit"
console.log(student);



// adding spaces
const cars = {
    "one key" : "BMW",
    "two key" : "alto",
    "three key" : "maruti"
}

console.log(cars);


// variable to key value

const mail = "Email";
const students = {
    "stud 1" : "Ramesh",
    "stud 2" : "Bhupesh",
    "stud 3" : "Mohit"
};

students[mail] = "bhupesh@gmail.com";
console.log(students);