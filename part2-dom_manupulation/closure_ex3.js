function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("you called me");
            counter++;
        } else{
            console.log("I am already called");
        };
    };
}

let ans = func();
// console.log(ans());
ans()
ans()
// ans()
