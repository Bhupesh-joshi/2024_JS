console.log("super_Keyword");

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

class Dog extends Animal {
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }

    eat(){
        return `Modified eat : ${this.name} is Eating`
    }

    run(){
        return `${this.name} is running on ${this.speed}`;
    }
}

const tommy = new Dog("tommy", 4, 45);
console.log(tommy.run());
console.log(tommy.eat());