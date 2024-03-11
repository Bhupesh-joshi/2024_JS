// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every((num)=> {
//     return num % 2 === 0;
// });

// console.log(result);



// EX

const products = [
    {productID: 1, productName: "p1", price: 100},
    {productID: 2, productName: "p2", price: 90},
    {productID: 3, productName: "p3", price: 900},
    {productID: 4, productName: "p4", price: 50},
    {productID: 5, productName: "p5", price: 1200},
];

const myPrice = products.every((productPrice) => {
    return productPrice.price < 3000;
});

console.log(myPrice);