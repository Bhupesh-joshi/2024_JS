class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }


    // method 2
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const person1 = new Person("Bhupesh", "Joshi", 15);

// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("Ram", "Charan");

// console.log(person1.firstName);
// console.log(person1.lastName);


    // method 2
    person1.fullName = "Ram Charan";
    console.log(person1);