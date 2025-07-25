// 1) Square Numbers.
console.log("Square Numbers.");
let numbers = [1,2,3,4,5,6,7,8,9];
let squareElements = numbers.map(square);
function square(element){
    return Math.pow(element,2);
}

console.log(numbers);
console.log(squareElements);

// 2) Uppercase Words.

console.log("Changing to Upper case.");
let names = ['shaan','james','julie','max','kohli'];
let namesUpper = names.map(changeToUpper);
function changeToUpper(element){
    return element.toUpperCase();
}

console.log(names);
console.log(namesUpper);

// 3) Adding 1 to Element

console.log("Adding 1 to each element");
let addedOne = numbers.map(addOne);
function addOne(element){
    return element+1;
}

console.log(numbers);
console.log(addedOne);

// 4) Prefix each string with Hello

let nameWithPrefix = names.map(addPrefix);
function addPrefix(element){
    return "Hello "+ element;
}

console.log(names);
console.log(nameWithPrefix);

// 5) Extract names from objects