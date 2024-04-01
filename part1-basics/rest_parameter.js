// rest parameter

// function app(a, b, ...c){
//     console.log(a, b, c);
// }

// app(1,2,3,4,5,6,7,8,9,10,11);


// addition
function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,6,7);
console.log(ans);
