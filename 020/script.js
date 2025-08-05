console.log("Array and Object(Properties) Destructuring");

let a =10;
let b =20;
console.log(`variable a = ${a}`);
console.log(`variable b = ${b}`);

[a,b] = [b,a];

console.log(`variable a = ${a}`);
console.log(`variable b = ${b}`);

const names = ["Mike", "John", "Rajini", "Vikram", "Steve"];
console.log(`Previous names - ${names}`);

[names[0],names[names.length-1]]  = [names[names.length-1],names[0]];
console.log(`updated names - ${names}`);

const [c,d,e,f,g] = names;
console.log(e);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

console.log("Object Destructuring");

function objectElement({firstName, lastName,age,course,job,sport="Nothing"}){
    console.log(`firstname : ${firstName}`);
    console.log(`lastName : ${lastName}`);  
    console.log(`age : ${age}`);
    console.log(`course : ${course}`);
    console.log(`job : ${job}`);
    console.log(`sport : ${sport}`);    
}

const person1 = {
    firstName:"Shaan",
    lastName : "Madhiwanan",
    age : 22,
    course : "Physical Science ICT",
    job : "Software Engineer",
}

const person2 = {
    firstName:"Sujithran",
    lastName : "Madhiwanan",
    age : 24,
    course : "Physical Science",
    job : "Data Scientist",
    sport : "Basket Ball",
}

const {firstName, lastName, age,course,job,sport="Nothing"} = person1;

console.log(`firstname : ${firstName}`);
console.log(`lastName : ${lastName}`);
console.log(`age : ${age}`);
console.log(`course : ${course}`);
console.log(`job : ${job}`);
console.log(`sport : ${sport}`);

console.log("Function Call.");
objectElement(person1);
objectElement(person2);