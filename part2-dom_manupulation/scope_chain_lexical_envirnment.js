// lexical environment scope chain

const lastName = "Joshi"

const printName = function () {
    const firstName = "Bhupesh";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    };
    myFunction();
}
printName();



