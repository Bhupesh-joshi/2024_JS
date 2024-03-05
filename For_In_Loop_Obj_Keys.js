// Loop in Object

const person = {
    name : 'John',
    age : 36,
    "nick name" : ["jo", "JJ", "Jen"]
}


// for in Loop 

// for (let key in person){
//     // console.log(key)
//     console.log(`${key} : ${person[key]}`)
//     // console.log(key, ":", person[key])
// }



// Object keys Method

// console.log(Object.keys(person))

for(let key of Object.keys(person)){
    // console.log(key);
    console.log(key, ":", person[key]);
}
