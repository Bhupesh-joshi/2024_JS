const user2 = {
    firstName : "John",
    age : 21,
    about() {
        console.log(this.firstName, this.age);
    }
}

user2.about();