console.log("SetTimeOut function in JS");

function sayHello(){
    console.log("Hello World");
}

setTimeout(sayHello,3000);
// callbacks cannot contain '()' type without '()'

setTimeout(function(){console.log("Hello 2")}, 4000);

const timeoutID = setTimeout(()=>console.log("using arrow function. "),5000);
clearTimeout(timeoutID); // this will be cancelled.

const buttonEl = document.getElementById("start-BTN");
buttonEl.addEventListener('click',alertWindow);

function alertWindow(){
    window.alert("Alerting window");
}