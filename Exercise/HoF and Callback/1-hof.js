//foreach
const arr = ["Cat", "Dog", "Elephant", "Lion", "Tiger",];
arr.forEach(function(item) {
    console.log(item);
});

//map
const arr2 = [1, 2, 3, 4, 5];
const doubled = arr2.map((item) => {
    return item * 3;
})

console.log (doubled)

//filter
const arr3 = [1, 2, 3, 4, 5];
const evenNumber = arr3.filter((item) => {
    return item % 2 == 0
})

console.log(evenNumber);

//reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((total, item) => {
    return total + item
})

console.log(sum);
