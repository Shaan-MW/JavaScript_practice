console.log("Super Keyword in Js.");

class Animal{
    constructor(name,age,eyes){
        this.name=name;
        this.age=age;
        this.eyes=eyes;
    }

    move(){
        console.log(`${this.name} is moving`);
    }
}

class Dog extends Animal{
    constructor(name,age,eyes,legs){
        super(name,age,eyes);
        this.legs=legs;
    }

    move(){
        super.move();
        console.log("Dog is moving");
    }
}

const dog = new Dog('Jimmy',5,2,4);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.eyes);
dog.move();
