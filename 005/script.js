console.log("ForEach() Methods");


let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);


numbers.forEach(determineOddEven);
numbers.forEach(elementIndexArray);
numbers.forEach(displayElements); //array.forEach(Callback);

numbers.forEach(doubleTheElement);
numbers.forEach(displayElements);

//funtion which display the elements
function displayElements(element){
    console.log(element);
}

function determineOddEven(element){
    if(element%2==0)
        console.log(element + " : Even Number.");
    else
        console.log(element + " : Odd Numbers.");
}

function elementIndexArray(element,index,array){
    console.log("element : "+ element +" index : "+index+" array : "+array);
}


function doubleTheElement(element,index,array){
    array[index] = element*2;
}

//array - gives the whole array.
// index - gives the specific index of the element
// element - give the element.


let fruits = ["Apple", "Banana", "Orange", "Mango"];



fruits.forEach(displayFruits);

fruits.forEach(fruitsUpper);
fruits.forEach(displayFruits);

fruits.forEach(fruitsLower);
fruits.forEach(displayFruits);


fruits.forEach(lastLetterCaps);
fruits.forEach(displayFruits);


function displayFruits(element){
    console.log(element);
}

function fruitsUpper(element,index,array){
    array[index] = element.toUpperCase();
}

function fruitsLower(element, index,array){
    array[index] = element.toLowerCase();
}

function lastLetterCaps(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

console.log(fruits[0].slice(1))