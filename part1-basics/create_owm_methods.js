console.log("create_owm_methods");

// const person = {
//     firstName : 'Bhupesh',
//     age : 36,
//     about : function () {
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     },
// };

// person.about();


// Ex 

function userInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
};

const person1 = {
    firstName : 'John',
    age : '22',
    about : userInfo,
}

const person2 = {
    firstName : 'phillips',
    age : '32',
    about : userInfo,
}

const person3 = {
    firstName : 'Perry',
    age : '28',
    about : userInfo,
}

person1.about();
person2.about();
person3.about();