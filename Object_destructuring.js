// Object Destructuring

// const carModel = {
//     car1 : "alto",
//     car2 : "BMW"
// }

// const car1 = carModel.car1;
// const car2 = carModel.car2;
// console.log(car1, car2);




// Shortcut Method
// const carModel = {
//     car1 : "alto",
//     car2 : "BMW"
// }

// const {car1, car2} = carModel;
// console.log(car1, car2);




// Changing the key name

// const carModel = {
//     car1 : "alto",
//     car2 : "BMW"
// }

// const {car1:model1, car2:model2} = carModel;
// console.log(model1, model2);




// storing rest key value pairs in different object

const carModel = {
    car1 : "alto",
    car2 : "BMW",
    car3 : "AMG",
    car4 : "Polo"
}

const {car1, car2, ...restProperties} = carModel;

console.log(car1, car2, restProperties)