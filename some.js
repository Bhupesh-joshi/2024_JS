const numbers = [3, 5, 6, 7, 9];

const ans = numbers.some((isEven)=> {
    return isEven % 2 === 0;
});

console.log(ans);



// EX
// is there any product which is more than 1000

const products = [
    {productID: 1, productName: "p1", price: 100},
    {productID: 2, productName: "p2", price: 500},
    {productID: 3, productName: "p3", price: 700},
    {productID: 4, productName: "p4", price: 1200},
    {productID: 5, productName: "p5", price: 300},
];

const result = products.some((num)=>{
    return num.price > 1000;
});

console.log(result);