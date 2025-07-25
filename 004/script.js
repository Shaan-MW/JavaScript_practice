console.log("Foreach Method");

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(printElement);

function printElement(element){
    findOddOrEven(element);
}

function findOddOrEven(element){
    if(element%2===0){
        console.log(element + " : Even Number");
    }else{
        console.log(element +" : Odd Number");
    }
}