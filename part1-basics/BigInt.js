// BigInt data type in JS

// to check the limit
console.log(Number.MAX_SAFE_INTEGER);

// creating BIgINT
let BigI = BigInt(222);
let O_BigI = 111n;

let sum = BigI + O_BigI;

console.log(sum);
console.log(typeof sum);

console.log(typeof BigInt);
