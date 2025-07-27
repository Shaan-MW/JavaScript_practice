console.log("Objects in Java Script.");

const person1 = {
    firstName:"Shaan",
    secondName:"Madhiwanan",
    age:22,
    isUngergraduate :true,
    sayHello: function(){console.log(`Hello, I'm ${this.firstName}`);},
};

const person2 = {
    firstName:"Patrick",
    secondName:"Bateman",
    age:35,
    isUngergraduate :false,
    sayHello: function(){console.log(`Hello, I'm ${this.firstName}`);},
};

console.log(`hello!, ${person1.firstName}`);
person1.sayHello();

console.log(`hello!, ${person2.firstName}`);
person2.sayHello();

for(let key in person1){
    console.log(person1[key]);
}