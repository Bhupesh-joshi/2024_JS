console.log("arrow function and this");

const user1 = {
    firstName : "John",
    age : 21,
    about : ()=> {
        console.log(this.firstName, this.age);
    }
}

user1.about();