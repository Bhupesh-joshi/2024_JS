// String Methods 

// trim()
// toUpperCase()
// toLowerCase()
// slice()


console.log("toUpperCase Starting")
// trim();

// Example 1
let firstName = "    Bhupesh      ";
console.log(firstName.length);

let newString = firstName.trim();

console.log(newString.length);

// example 2
let str1 = "  JOSHI   "
console.log(str1.length);
console.log(str1);

str1 = str1.trim();
console.log(str1);


console.log("toUpperCase Starting")
// toUpperCase()

// Example 1
let a_String = "bhupesH";
console.log(a_String);

let a_newString = a_String.toUpperCase();
console.log(a_newString);

// Example 2
let b_string = "JoshI";
console.log(b_string);

b_string = b_string.toUpperCase();
console.log(b_string);


console.log("toLowerCase Starting")
// toLowerCase()

// Example 1
let c_string = "UTTARAKHaND";
console.log(c_string);

let c_newString = c_string.toLowerCase();
console.log(c_newString);

// Example 2
let d_string = "PITHORAGARH";
console.log(d_string);

d_string = d_string.toLowerCase();
console.log(d_string);


console.log("Slice Starting")
// Slice() Method

// Example 1
let s_String = "Bhupesh";
console.log(s_String);

let s_newString = s_String.slice(0, 3);
console.log(s_newString);

// Example 2
let r_String = "Rohit"; 
console.log(r_String);

r_String = r_String.slice(0, -1);
console.log(r_String);