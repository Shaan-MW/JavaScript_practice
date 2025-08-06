console.log("Nested Object and Classes");

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(no,street,area,city){
        this.no = no;
        this.street=street;
        this.area=area;
        this.city=city;
    }
}

const person1 = new Person("Shaan",22,25,"Ettampitiya Road","M.F.Real View","Bandarawela");
const person2 = new Person("Sujithran",24,25,"Ettampitiya Road","M.F.Real View","Bandarawela");
const person3 = new Person("Shanjeewan",11,25,"Ettampitiya Road","M.F.Real View","Bandarawela");


console.log(person1.address);
console.log(person1.name);
console.log(person1.address.street);
console.log(person2.address.area);
console.log(person3.address.city);
console.log(person2.name);
console.log(person3.name);