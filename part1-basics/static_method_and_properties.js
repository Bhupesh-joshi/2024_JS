console.log("static_method_and_properties");

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age;
//     };

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     };

//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     };

//     static classInfo(){
//         return `this is person class`;
//     };

//     static stProp = "Static Property";

//     eat() {
//         return `${this.firstName} is eating`;
//     };

//     isSuperCute() {
//         return this.age <= 1;
//     };

//     isCute() {
//         return true;
//     }
// }

// const person1 = new Person("Bhupesh", "joshi", 8);
// // console.log(person1.eat());

// const info = Person.classInfo();
// console.log(info);

// console.log(Person.stProp);





// Exact

class Person {
    static classInfo(){
        return `this is static method`;
    };

    static stProp = "Static Property";
}

const info = Person.classInfo();
console.log(info);

console.log(Person.stProp);