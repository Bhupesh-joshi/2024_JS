// Object inside Array

const users = [
    {userId : 1, firstName : "Bhupesh", Gender : "Male" },
    {userId : 2, firstName : "Roshni", Gender : "Female" },
    {userId : 3, firstName : "Suresh", Gender : "Male" }
];

console.log(users);


// Looping in Object inside Array

for(let user of users){
    console.log(user.firstName, user.Gender)
}