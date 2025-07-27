console.log("Function Expression");

const greet = function(name){
    return `Hello , ${name}`;
}

console.log(greet("shaan"));


setTimeout(function(){
    console.log("hello (delay 3 sec)");
} , 1000);

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

let squares = numbers.map(function(element){
    return Math.pow(element,2);
});
console.log(squares);

let cubes = numbers.map(function(element){
    return Math.pow(element,3);
});
console.log(cubes);

//filtering odds and evens
let odds = numbers.filter(function filterOdd(element){
    return element%2!==0;
});
console.log("Odd numbers : " + odds);

let evens = numbers.filter(function(element){
    return element%2===0;
});
console.log("Even Numbers : " + evens);


//reduce method;

let totalOfNumbers = numbers.reduce(function(accumulator, element){
    return accumulator+element;
})
console.log("Numbers(tot) : "+ totalOfNumbers);

let squareTotal = squares.reduce(function(accumulator,element){
    return accumulator+element;
});

console.log("Sqaures(tot) : ", squareTotal);

let cubesTotal = cubes.reduce(function(accumulator, element){
    return accumulator+element;
});

console.log("Cubes(tot) : "+ cubesTotal);

let oddTotal = odds.reduce(function(accumulator,element){
    return accumulator+element;
});
console.log("Odds(tot) : " + oddTotal);

let evenTotal = evens.reduce(function(accumulator,element){
    return accumulator+element;
});
console.log("Evens(tot) : "+ evenTotal);