// const numbers = new Set([1.1, "abc", 1, 2, 3]);
// console.log(numbers);

const arr = ["item1", "item2", "item3"];

const newNum = new Set();

newNum.add(1);
newNum.add(2);
newNum.add("abc");
newNum.add(arr);
if(newNum.has(2)){
    console.log("2 is present");
} else {
    console.log("2 is not present");
};
console.log(newNum);

for(nums of newNum){
    console.log(nums);
}




const array2 = [1,2,3,3,4,5,6,6,7,5]; 

const uniqueElement = new Set(array2);
console.log(uniqueElement);

let length = 0;
for(let elements of uniqueElement) {
    length++;
}
console.log(length);