console.log("call method");

// const user1 = {
//     firstName : "John",
//     age : 21,
//     about : function(hobby, favSong){
//         console.log(`user name is ${this.firstName}, and age is ${this.age}, and hobby is ${hobby}, favorite song is ${favSong}`);
//     }
// }

// const user2 = {
//     firstName : "Perry",
//     age : 23,
// }

// user1.about("football", "galiiyan");
// user1.about.call(user2, "guitar", "sanam re");



// second way 

function about(hobby, favSong){
    console.log(`user name is ${this.firstName}, and age is ${this.age}, and hobby is ${hobby}, favorite song is ${favSong}`);
}

const user1 = {
    firstName : "John",
    age : 21,
}

const user2 = {
    firstName : "Perry",
    age : 23,
}

about.call(user1, "football", "galiiyan");
about.call(user2, "guitar", "sanam re");