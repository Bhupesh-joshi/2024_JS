// Parameters destructuring
// Param destructuring

const person = {
    name :  "John",
    gender : "Male",
    age : 22
};

function getPersonDetails({name, gender, age}){
    console.log(name, gender, age);
}

getPersonDetails(person);