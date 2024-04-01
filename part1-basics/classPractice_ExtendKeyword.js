console.log("classPractice_ExtendKeyword.js");

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     };
    
//     eat(){
//         return `${this.name} is Eating`
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// };

// const ani1 = new Animal("dog", 3);
// console.log(ani1);

// console.log(ani1.eat());
// console.log(ani1.isSuperCute());
// console.log(ani1.isCute());


// Cat class

// class Cat {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     };
    
//     eat(){
//         return `${this.name} is Eating`
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// };

// const pussy = new Cat("Pussy", 2);
// console.log(pussy); 




// Inheritance

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    
    eat(){
        return `${this.name} is Eating`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
};

class Cat extends Animal {

}

const pussy = new Cat("Pussy", 4);
console.log(pussy.eat());
console.log(pussy.isCute());