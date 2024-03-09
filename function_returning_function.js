// function_returning_function.js

function myFunc(){
    function myFunc2(){
        return "inside myFunc2";
    };

    return myFunc2;
};

const result = myFunc();
console.log(result());