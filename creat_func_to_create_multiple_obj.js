console.log("create_functions_to_create_multiple_object");

const user = {
    firstName: 'Bhupesh',
    lastName: 'Joshi',
    email: 'joshi@gmail.com',
    age: 21,
    address: '123 Main St new York',
    about: function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function() {
        return this.age >= 18;
    }
};

const aboutUser = user.about();
console.log(aboutUser);


// making is reusable

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old`;
    },
    user.is18 = function() {
        return this.age >= 18;
    }
    return user;
};

const user1 = createUser("Bhupesh", "Joshi", "bhupeshjoshi@gmail.com", 23, "123 st NYC, NY");
console.log(user1);

const about = user1.about();
const is18 = user1.is18();

console.log(is18);
console.log(about);


// // example 2

// function newUser(firstName, lastName, age, email, address){
//     const exUse = {};
//     exUse.firstName = firstName,
//     exUse.lastName = lastName,
//     exUse.age = age,
//     exUse.email = email,
//     exUse.address = address,
//     exUse.newAbout = function(){
//         return `${firstName} is ${age} years old`;
//     }, 
//     exUse.newIs18 = function(){
//         return this.age >= 18;
//     }
//     return exUse;
// };

// const newUser1 = newUser("Mukesh", "Joshi", 16, "mukesh@gmail.com", "12 st UK");
// console.log(newUser1);

// const newAbout = newUser1.newAbout();
// console.log(newAbout);

// const newIs18 = newUser1.newIs18();
// console.log(newIs18);