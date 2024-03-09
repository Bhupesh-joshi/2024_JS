const myVar = "value1";

function myApp() {

    function myFunc() {
        
        const myFunc2 = () => {
            console.log("inside myFunc2", myVar);
        }
        
        myFunc2();
        console.log("inside myFunc");
    }

    console.log("inside myApp");
    myFunc()
}

myApp();