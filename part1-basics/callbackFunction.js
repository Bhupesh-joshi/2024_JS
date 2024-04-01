function func2(name){
    console.log("Inside func2");
    console.log(`My name is ${name}`);
}


function func1(callback){
    console.log("Inside func1");
    callback("Bhupesh");
}

func1(func2);