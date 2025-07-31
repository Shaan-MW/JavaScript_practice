console.log("Inheritance in JS");

class Animal{
    constructor(legs,eyes,isTail){
        this.legs=legs;
        this.eyes=eyes;
        this.isTail=isTail;
    }

    running(){
        console.log(`${this.name} is sleeping.`);
    }
}

class Fish extends Animal{
    constructor(name,legs,eyes,isTail){
        super(legs,eyes,isTail);
        this.name=name;
    }
}

const animal1 = new Animal(4,2,true);
console.log(animal1.legs);
console.log(animal1.eyes);
console.log(animal1.isTail);
animal1.running();

const fish1 = new Fish('Angel',0,2,false);
fish1.running();
console.log(fish1.legs);
console.log(fish1.eyes);
console.log(fish1.isTail);

