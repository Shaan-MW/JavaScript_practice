console.log("Callback Function");

hello(wait,goodbye);

function hello(callbackFunction,callback){
    console.log("Hello World");
    callbackFunction();
    callback();
}

function goodbye(){
    console.log("Goodbye World");
}

//goodbye passed as a parameter and processed after the execution of hello() function.

function wait(){
    console.log("Waiting.");
}

// second callback argument.