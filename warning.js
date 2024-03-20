console.log("warning");

// don't do this mistake

const user1 = {
    firstName : "John",
    age : 21,
    about : function about(){
        console.log(this.firstName, this.age);
    }
}

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();