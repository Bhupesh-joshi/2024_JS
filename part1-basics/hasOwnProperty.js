console.log("has Own Property");



function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
};

CreateUser.prototype.about = function() {
            return `${this.firstName} is ${this.age} years old`;
        };
CreateUser.prototype.is18 = function() {
            return this.age >= 18;
        };
CreateUser.prototype.singh = function() {
            return "singh Called";
        };

const user1 = new CreateUser("Bhupesh", "Joshi", "bhupeshjoshi@gmail.com", 23, "123 st SJ, CA");
const user2 = new CreateUser("Ellis", "perry", "bhupeshjoshi@gmail.com", 23, "123 st NYC, NY");
const user3 = new CreateUser("Shreyanka", "Patil", "bhupeshjoshi@gmail.com", 23, "123 Nagpur Mumbai");

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

// console.log(user1);

// const about = user1.about();
// const is18 = user1.is18();

// console.log(is18);
// console.log(about);

// console.log(user2.about());
// console.log(user3.about());
// console.log(user2.singh());