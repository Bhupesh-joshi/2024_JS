// Ascending Order

const numbers = [100, 50, 90, 5, 2000];

numbers.sort((a, b)=> {
    return a - b;
});

console.log(numbers);



// Descending Order

// const numbers = [100, 50, 90, 5, 2000];

numbers.sort((a, b)=> {
    return b - a;
});

console.log(numbers);



// EX
// lowToHigh
const products = [
    {productID: 1, productName: "p1", price: 100},
    {productID: 2, productName: "p2", price: 90},
    {productID: 3, productName: "p3", price: 900},
    {productID: 4, productName: "p4", price: 50},
    {productID: 5, productName: "p5", price: 1200},
];

const lowToHigh = products.slice(0).sort((a, b)=> {
    return a.price - b.price;
});

console.log(products);
console.log(lowToHigh);



// highToLow
const highToLow = products.slice(0).sort((a, b)=> {
    return b.price - a.price;
});
console.log(highToLow);