//Filter Methods
//getting odd, even numbers seperately;
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
let odds = numbers.filter(getOdd);
let evens = numbers.filter(getEven);
function getOdd(element){
    return element%2 ===0;
}
function getEven(element){
    return element%2 !== 0;
}
console.log(odds);
console.log(evens);


let names = ['Shaan', 'Sujithran', 'Madhiwanan', 'Shanjeewan', 'Subaletchumi'];
let largeNames = names.filter(getNames);

function getNames(element){
    return element.length>5;
}

console.log(names);
console.log(largeNames);

//searching under 18
let agesOfUsers = [17,17,16,18,19,43,23];
let underAge = agesOfUsers.filter(filterAge);

function filterAge(element){
    return element<=18;
}

console.log(agesOfUsers);
console.log(underAge);