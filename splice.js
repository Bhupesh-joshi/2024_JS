// start, delete, insert 

const myArray = ["a", "b", "c", "d", "e"];

// deleted
const delItem = myArray.splice(2, 2);
console.log("Deleted item ", delItem);
console.log(myArray);


// inserted
const newArray = ["a", "b", "c", "d", "e"];

newArray.splice(2, 0, "z");
console.log(newArray);




// insert delete together

const secArray = ["a", "b", "c", "d", "e"];

const myDelItem = secArray.splice(3, 2, "z");
console.log("Deleted item ", myDelItem);
console.log(secArray);
