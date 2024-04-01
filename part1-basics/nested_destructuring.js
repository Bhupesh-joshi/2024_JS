// nested_destructuring

const users = [
    {userId : 1, firstName : "Bhupesh", Gender : "Male" },
    {userId : 2, firstName : "Roshni", Gender : "Female" },
    {userId : 3, firstName : "Suresh", Gender : "Male" }
];

// const [user1, user2, user3] = users;
// console.log(user1);



// Destructuring from  object

// const [{firstName}, , {Gender}] = users;
// console.log(firstName, Gender);



// changing the key name

// const [{firstName : user_F_Name}, , {Gender : user_F_Gender}] = users;
// console.log(user_F_Name, user_F_Gender);




// changing the key name and with userID  

const [{firstName : user_F_Name, userId}, , {Gender : user_F_Gender}] = users;
console.log(user_F_Name, userId, user_F_Gender);