console.log("Array of Objects");

const users = [{fullname:"Shaan Madhiwanan",age:22,gender:"Male"},
               {fullname:"Gayathri Murugados",age:28,gender:"Female"},
               {fullname:"Dhashana Shamini",age:27,gender:"Female"},
               {fullname:"Sujithran Madhiwanan",age:24,gender:"Male"},
               {fullname:"Chandra Ramani Madhiwanan",age:51,gender:"Female"}];


users.push({fullname:"Shanjeewan Madhiwanan",age:11,gender:"Male"});

console.log(users);

users.pop();
console.log(users);


for(const user in users){
    console.log(`Fullname : ${users[user].fullname}`);
}

users.forEach(user => console.log(user.fullname + " "+ user.age));


const fullnamesOfUsers = users.map(user => user.fullname);
console.log(fullnamesOfUsers);

function checkAge(element){
    return element.age>25;
}

const elderUsers = users.filter(checkAge);

for(const user in elderUsers){
    console.log(elderUsers[user].fullname);
}