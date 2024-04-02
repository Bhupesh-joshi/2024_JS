// closure
// function can return function

// function outerFunction(){
//     function innerFunction(){
//         console.log("inner function");
//     }
//     return innerFunction;
// };

// const ans = outerFunction();
// // console.log(ans);
// ans();



function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
};

const ans = printFullName("Bhupesh", "Joshi");
// console.log(ans);
ans();


