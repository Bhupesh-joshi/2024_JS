console.log("clone_using_object_assign");

const obj = {
    id : 1,
    firstName : 'John',
};

// const obj2 = obj;

// old Method
// const obj2 = Object.assign({}, obj);
// obj2.gender = 'male';

// new Method
const obj2 = {...obj};
obj2.gender = 'female';



console.log(obj);
console.log(obj2);