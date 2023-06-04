//custom hof that return another function
function multiplyBy (n) {
    return function (x) {
        return n * x;
    }
}

//fill the parameter n
const double = multiplyBy(2);

//fill the parameter x
console.log(double(3))


//custom hof that implement callbacks
function repeat (n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    } 
}

function logNumber(x) {
    console.log(`The is number is ${x}`)
}

repeat(3, logNumber);