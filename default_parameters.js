// Old Method

function app(a, b){
    if(typeof b === 'undefined'){
        b = 0;
    }
    return a + b;
}

const ans = app(5);
console.log(ans);



// New Method
function newMethod(a, b=1){
    return a + b;
}

const adding = newMethod(5);
console.log(adding);

