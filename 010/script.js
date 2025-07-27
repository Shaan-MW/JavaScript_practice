console.log("Function Expression");

const greet = function(name){
    return `Hello , ${name}`;
}

console.log(greet("shaan"));


setTimeout(function(){
    console.log("hello (delay 3 sec)");
} , 3000);