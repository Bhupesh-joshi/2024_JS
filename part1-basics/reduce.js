const numbers = [1,2,3,4,5];

const sumAll = numbers.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});

console.log(sumAll);



// EX 2

const userCart = [
    {productID : 1, productName : "Mobile", price: 100},
    {productID : 2, productName : "Laptop", price: 200},
    {productID : 3, productName : "TV", price: 300},
];

const sumPrice = userCart.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue.price;
}, 0);

console.log(sumPrice);