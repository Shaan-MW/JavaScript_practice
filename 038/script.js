console.log("JSON file handling.");

const names = ["Shaan", "Sujithran", "Shanjeewan", "Shamini", "Prem", "Akilesh", "Shashwinth"];
const person = {
    "name":"Shaan Madhiwanan",
    "age":22,
    "isStudent":true,
    "Skills":["Java", "Javascript","Mysql"],
    "Address":{
        "City":"Colombo",
        "Country":"Sri Lanka"
    }
}
const people = [
    {
        "name":"Shaan",
        "age":22
    },
    {
        "name":"Sujithran",
        "age":24
    },
    {
        "name":"Shanjeewan",
        "age":11

    }
]

console.log(typeof names);
console.log(typeof person);
console.log(typeof people);

const jsonNameString = JSON.stringify(names);
const jsonPersonString = JSON.stringify(person);
const jsonPeopleString = JSON.stringify(people);

console.log(typeof jsonNameString);
console.log(typeof jsonPersonString);
console.log(typeof jsonPeopleString);

const jsonNames = '["Shaan", "Sujithran", "Shanjeewan", "Shamini", "Prem", "Akilesh", "Shashwinth"]';
const jsonPerson = '{"name":"Shaan Madhiwanan","age":22,"isStudent":true,"Skills":["Java", "Javascript","Mysql"],"Address":{"City":"Colombo","Country":"Sri Lanka"}}';
const jsonPeople = '[{"name":"Shaan","age":22},{"name":"Sujithran","age":24},{"name":"Shanjeewan","age":11}]';

const nameObject = JSON.parse(jsonNames);
const personObject = JSON.parse(jsonPerson);
const peopleObject = JSON.parse(jsonPeople);

console.log(typeof nameObject);
//console.log(nameObject);


fetch("person.json")
    .then(response => response.json())
    .then(values => console.log(values))
    .catch(error => console.log(error));
    
fetch("userNames.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));
    
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value=>console.log(value.name + ' '+ value.age)) )
    .catch(error => console.log(error));