console.log("use Prototype");


function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
};

createUser.prototype.about = function() {
            return `${this.firstName} is ${this.age} years old`;
        };
createUser.prototype.is18 = function() {
            return this.age >= 18;
        };
createUser.prototype.singh = function() {
            return "singh Called";
        };


const user1 = createUser("Bhupesh", "Joshi", "bhupeshjoshi@gmail.com", 23, "123 st SJ, CA");
const user2 = createUser("Ellis", "perry", "bhupeshjoshi@gmail.com", 23, "123 st NYC, NY");
const user3 = createUser("Shreyanka", "Patil", "bhupeshjoshi@gmail.com", 23, "123 Nagpur Mumbai");

console.log(user1);

const about = user1.about();
const is18 = user1.is18();

console.log(is18);
console.log(about);

console.log(user2.about());
console.log(user3.about());
console.log(user2.singh());