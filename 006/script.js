console.log("Map() Method");

let numbers = [1,2,3,4,5];

numbers.forEach(displayElements);
let squareNumberArray = numbers.map(squareNumbers);

squareNumberArray.forEach(displayElements);

function squareNumbers(element){
    return Math.pow(element,2);
}

function displayElements(element){
        console.log(element);
}