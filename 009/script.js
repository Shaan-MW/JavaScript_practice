console.log("Reduce method");

let prices = [2,45,33,200,50,43];

const total = prices.reduce(getTotal);

function getTotal(accumulator, element){
    return accumulator+element;
}

console.log("Price total "+ total);

let grades = [65,43,76,88,76,43,90];
console.log("Shaan Marks - "+ grades);
const totalMarks =grades.reduce(getTotal);
console.log("Total : "+ totalMarks + "/"+grades.length*100);

if(totalMarks>=400){
    console.log("You are passed.");
}else{
    console.log("You are failed");
}


let randomNumbers = [10,20,43,32,5,78,54,90];
const max = randomNumbers.reduce(getMax);
function getMax(accumulator, element){
    return Math.max(accumulator,element);
}

console.log("Calculated Maximum : " + max);

const min = randomNumbers.reduce(getMin);
console.log("Calculated Minimum : "+ min);

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}