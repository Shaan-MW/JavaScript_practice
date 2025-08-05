console.log("Nested Objects.");

const person = {
    fullname :{
        firstname: 'shaan',
        lastname : 'madhiwanan',
    },
    age:30,
    gender:"Male",
    hobbies:["Singing", "Dancing", "Playing"],
    sports : ["Cricket", "Football"],
    address:{
        no:25,
        colony:"M.F.Real View",
        area:"Udamalwatte",
        street : "Ettampitiya Road",
        city : "bandarawela"
    }
}

console.log(person.fullname.firstname);
console.log(person.fullname);
console.log(person.address.no);

for(const properties in person.address){
    console.log(person.address[properties]);
}
