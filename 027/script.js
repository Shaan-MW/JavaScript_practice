console.log("Closures");

let b =10; //global variable.

function outerFunction(){
    console.log("Outer function called");
    let a=7; //variable of outer function
    console.log(`outer function ${a}`);
    console.log(`outer function calling global var ${b}`);


    function innerFunction(){
        console.log("Inner function called");
        console.log(`inner function ${a}`);
        console.log(`inner function calling global var ${b}`);
    }

    innerFunction();
}

outerFunction();


function createCounter(){
    let count =0;

    function increment(){
        count++;
        console.log(count);
    }

    function getCount(){
        return count;
    }

    return {increment,getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();


console.log(`the current count is : ${counter.getCount()}`);



// Points Game

function startGame(){
    let score =0;

    function increasePoints(points){
        score+=points;
        console.log(`+${points}pts added.`);
    }

    function decreasePoints(points){
        score-=points;
        console.log(`-${points}pts removed.`);
    }

    function getScore(){
        return score;
    }

    return {increasePoints,decreasePoints,getScore}

}

score=100; //inner functions score wont be updated.

const person1 = startGame();
const person2 = startGame();

person1.increasePoints(5);
person1.decreasePoints(4);
console.log(`Net Score : ${person1.getScore()}pts.`);

person2.increasePoints(10);
person2.decreasePoints(1);
console.log(`Net Score : ${person2.getScore()}pts.`);