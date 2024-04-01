// for in loop in array

const fruits = ["a", "b"];

for(let index in fruits){
    console.log(index)
}



// ex 2 Push

const arr1 = ["Le", "Re"];
const arr2 = ["he", "she"];

for(let index in arr1){
    arr2.push(arr1[index]);
}

console.log(arr2);