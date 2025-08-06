console.log("Sorting Method");

const numbers = [10,5,25,1,201,17];
const names = ["aadhi", "Janani", "priya", "babi", "chithra"];
names.sort();
console.log(names);

numbers.sort((a,b)=>a-b); //sorting asc
console.log(numbers);

numbers.sort((a,b)=>b-a); // sorting desc
console.log(numbers);


const students = [{fullName:"shaan",age:22,gpa:3.2},
                  {fullName:"Sujithran", age:24, gpa:3.0},
                  {fullName: "Chandra Balan",age:42,gpa:4.0}
]

students.sort((a,b)=>(b.gpa-a.gpa));
console.log(students);

students.sort((a,b)=>(a.fullName.localeCompare(b.fullName)));
console.log(students);