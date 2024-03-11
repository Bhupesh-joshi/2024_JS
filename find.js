const myArray = ["Elephant", "dog", "cat", "Lion"];

const ans = myArray.find((string)=>{
    return string.length === 3;
});

console.log(ans);




// Ex

const users = [
    {userID: 1, userName: "Bhupesh"},
    {userID: 2, userName: "Harshit"},
    {userID: 3, userName: "Lokesh"},
    {userID: 4, userName: "Ramesh"},
    {userID: 5, userName: "Bhavesh"},
];

const result = users.find((myUser) => {
    return myUser.userID === 3;
});

console.log(result);