console.log("Bind method");

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

const func1 = about.bind(user1, "football", "galiiyan");
const func2 = about.bind(user2, "guitar", "sanam re");

func1();
func2();