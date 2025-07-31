console.log("Constructor Method");

function Human(name,age,gender,isMember){
    this.name=name,
    this.age=age,
    this.gender=gender,
    this.isMember=isMember,
    this.duty=function(){console.log(`${this.name} is on duty.`)};
}

const human1 = new Human('shaan',22,'male',true);
const human2 = new Human('sujithran',24,'male',false);

console.log(human1.name+ " "+ human1.age);
console.log(human2.name+ " "+ human2.age);

human1.duty();
human2.duty();

