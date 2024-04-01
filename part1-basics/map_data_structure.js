console.log("map_data_structure");

// const person = {
//     firstName: 'John',
//     age : 21,
//     1:"one"
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person["firstName"]);

// for(let elements in person){
//     console.log(elements);
//     console.log(typeof elements);
// }



// map_data_structure

// const person = new Map();

// person.set("firstName", "Bhupesh");
// person.set("age", 12);
// person.set(1, "One");

// // Looping for of loop

// person.set([1,2,3], 'array');
// person.set({LastName : "Joshi"}, "of Bhupesh");

// for(let keys of person){
//     console.log(keys);
// }

// console.log(person);




// const person = new Map();

// person.set("firstName", "Bhupesh");
// person.set("age", 12);
// person.set(1, "One");

// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value);
// }




// const person = new Map([["firstName", "Bhupesh"], ["age", 7]]);
// console.log(person);


const person1 = {
    id : 1,
    firstName : "Bhupesh",
}

const person2 = {
    id : 2,
    firstName : "Tanisha",
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 30, gender: "male"});
extraInfo.set(person2, {age: 25, gender: "female"});

// console.log(extraInfo);
console.log(person1.id)

console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);