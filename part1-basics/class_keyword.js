console.log("class_keyword");

class CreateUser {
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    };

    about(){
        return `${this.firstName} is ${this.age} years old`;
    };
    is18(){
        return this.age >= 18;
    };
    singh(){
        return "singh Called";
    };
    // func(a){
    //     console.log(a);
    // }
}

const user1 = new CreateUser("Bhupesh", "Joshi", "bhupeshjoshi@gmail.com", 23, "123 st SJ, CA");
const user2 = new CreateUser("Ellis", "perry", "bhupeshjoshi@gmail.com", 23, "123 st NYC, NY");
const user3 = new CreateUser("Shreyanka", "Patil", "bhupeshjoshi@gmail.com", 23, "123 Nagpur Mumbai");

// console.log(user1.is18());
// console.log(Object.getPrototypeOf(user1));

// user1.func("Bhupesh");