console.log("Objects in Java Script.");

const person1 = {
    firstName:"Shaan",
    secondName:"Madhiwanan",
    age:22,
    isUngergraduate :true,
    sayHello: function(){console.log(`Hello, I'm ${this.firstName}`);},
    sayBye : function(){console.log(`Bye from ${this.firstName} ${this.secondName}`)},
};

const person2 = {
    firstName:"Patrick",
    secondName:"Bateman",
    age:35,
    isUngergraduate :false,
    sayHello: function(){console.log(`Hello, I'm ${this.firstName}`);},
    sayBye : function(){console.log(`Bye from ${this.firstName} ${this.secondName}`)},
};

console.log(`hello!, ${person1.firstName}`);
person1.sayHello();
person1.sayBye();

console.log(`hello!, ${person2.firstName}`);
person2.sayHello();
person2.sayBye();

for(let key in person1){
    console.log(person1[key]);
}