// for_of_loop_in_Array

const arr = ["a", "b", "c"];

for(let i of arr){
    console.log(i);   
}


// ex 2 push

const cars = ["alto", "BMW"];
const car2 = ["AMG", "ferrari"];

for(let car of cars){
    car2.push(car);
}
console.log(car2);