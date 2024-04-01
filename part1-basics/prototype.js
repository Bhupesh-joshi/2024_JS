function hello(){
    console.log("Hello World");
}

hello();
console.log(hello.name);

hello.myOwnProperty = "this is my Own Property";
console.log(hello.myOwnProperty);



// Using prototype

function greet(){
    console.log("Good Morning");
}

greet.prototype.key1 = "value1";
greet.prototype.key2 = "value2";
greet.prototype.func1 = function(){
    return "Function inside Prototype";
};

console.log(greet.prototype);
console.log(greet.prototype.func1());