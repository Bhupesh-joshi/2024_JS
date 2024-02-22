// while loop

// 0 to 9
let i = 0;

while(i <=9 ){
    console.log("Value of i = " + i);
    i++;
}


// Example 2 
// Question (sum of first 10 natural numbers)
// Linior time
let num = 10;
let total = 0;
let j = 0;

// total = total + 1; // 0+1
// total = total + 2; // 1+2
// total = total + 3; // 3+3
// total = total + 4; // 6+4
// total = total + 5; // 10+5
// total = total + 6; // 15+6
// total = total + 7; // 21+7
// total = total + 8; // 28+8
// total = total + 9; // 36+9
// total = total + 10; //45+10

while (j<=num){
    total = total + j;
    console.log(`Value of Total: ${total}`);
    j++;
}



// Question 
// faster than while loop
// constant time
let sum = (num*(num+1))/2; 
console.log(sum);