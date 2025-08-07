console.log("Error Handling in JS");

console.log(1+3);
const numbers =[1,2,3,4];
console.log(numbers);

let x =12;
try{
    if(x>5){
        throw new Error("Big");
    }
    console.log(x);
}catch(error){
    console.error(error);
}finally{
    console.log("Final called");
}

console.log("Handled error");