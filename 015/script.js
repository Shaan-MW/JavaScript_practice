console.log("Static Keyword in JS");


class User{

    static userCount =0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }

    displayDetails(){
        console.log(`${this.username}`);
    }

    static displayOnline(){
        console.log(`${User.userCount} Online`)
    }

}

const user1 = new User('Shaan');
const user2 = new User('Shanjeewan');

user1.displayDetails();
user2.displayDetails();

console.log(User.userCount);
User.displayOnline();