const array = [2,3,4,5];

const square = array.map((num, index)=>{
    return num * num;
});

console.log(square);



// EX2 

const users = [
    {name: 'John', age : 22},
    {name: 'Kate', age : 20},
    {name: 'Perry', age : 29},
    {name: 'Jane', age : 25},
];

const userNames = users.map((firstName)=>{
    return firstName.name;
});

console.log(userNames);