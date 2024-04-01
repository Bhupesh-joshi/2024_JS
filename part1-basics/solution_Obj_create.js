console.log("solution_Obj_create");


// linking 2 objects
// Chaining
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2.key1, obj2.key2, obj2.key3);
console.log(obj2.__proto__);





const userMethods = {
    about : function() {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function() {
        return this.age >= 18;
    },
    singh : function() {
        return "singh Called";
    },
};

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
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