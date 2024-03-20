console.log("optional_chaining");

const user = {
    firstName : "Bhupesh",
    // address : {houseNumber : "121"},
};

console.log(user);
console.log(user.firstName);
console.log(user?.address?.houseNumber);