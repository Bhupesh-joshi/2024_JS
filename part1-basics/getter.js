class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Bhupesh", "Joshi", 15);
console.log(person1.firstName);
console.log(person1.fullName);
