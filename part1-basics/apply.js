console.log("apply method");

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

about.apply(user1, ["football", "galiiyan"]);
about.apply(user2, ["guitar", "sanam re"]);