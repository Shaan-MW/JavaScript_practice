console.log("Arrow funtions");

const hello = () => {
    console.log("Hello");
}

const bye = () => console.log("bye");
const greet = (name) => console.log(`Hello, ${name}`);
const add = (a,b) => a+b;

setTimeout(()=> console.log("Hello by 3sec delay."),3000);

greet("Shaan");
console.log(add(1,5));
bye();
hello();


let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

let squares  = numbers.map(element => Math.pow(element,2)); //Map method.
let odds = numbers.filter(element => element%2===0);
let totalOfNumbers = numbers.reduce((accumulator,element) => accumulator+element);
console.log(squares);
console.log(odds);
console.log(totalOfNumbers);