console.log("Human Object Example");

class Human{
    constructor(firstname,lastname,age){
        this.firstname =firstname;
        this.lastname=lastname;
        this.age=age;
    }

    set firstname(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length>0){
            this._firstname = newFirstName;
        }else{
            console.error("Please enter a valid firstname.");
        }
    }

    set lastname(newLastName){
        if(typeof newLastName === "string" && newLastName.length>0){
            this._lastname = newLastName;
        }else{
            console.error("Please enter a valid lastname.");
        }
    }

    set age(newAge){
        if(newAge>0){
            this._age = newAge;
        }else{
            console.error("enter valid age.");
        }
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }

    get fullname(){
        return this._firstname+" "+this._lastname;
    }

}

const human1 = new Human("Shaan","Madhiwanan",22);
console.log(human1.firstname);
console.log(human1.lastname);
console.log(human1.age);
console.log(human1.fullname);
