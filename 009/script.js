console.log("Reduce method");

let prices = [2,45,33,200,50,43];

const total = prices.reduce(getTotal);

function getTotal(accumulator, element){
    return accumulator+element;
}

console.log("Price total "+ total);