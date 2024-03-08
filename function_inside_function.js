function app(){
    const myFunc = ()=> {
        console.log("myFunc Called");
    }

    const addTwoNum = (num1, num2)=> num1 + num2;
    
    
    console.log("Func Called");
    myFunc();
    console.log(addTwoNum(2,2));
};


app();