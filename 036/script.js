console.log("Promises in Java Script");

// Asynchrous code using Callbacks. 

function walkDog(callback){
    setTimeout(()=>{
        console.log("You walk the dog.");
        callback();
    },1500);
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("You cleaned the Kitchen.");
        callback();
    },2500);
}

function takeOutTrash(callback){
    setTimeout(()=>{
        console.log("you take out the trash");
        callback();
    },500);
}


//if we continue this, this is know as callback hell.
walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("You did all the works.")
        })
    })
});

// callbacks ends.

// using method chainings
function walkTheDog(){
    return new Promise((resolve,reject) =>{
    setTimeout(()=>{
    const isDogWalked = true;
        if(isDogWalked){
            resolve("You walk the dog.");
        }else{
            reject("You didn't walk the dog yet.")
        }
    },1500);
    });
}

function cleanTheKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isCleaned =true;
            if(isCleaned){
                resolve("You cleaned the Kitchen.");
            }else{
                reject("You didn't cleaned the Kitchen yet.");
            }
        },2500);
    })
}

function takeOutTheTrash(callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isTrashOut = true;
            if(isTrashOut){
                resolve("you take out the trash");
            }else{
                reject("You didn't take out the trash.");
            }
        },500);
    });
}

walkTheDog().then(value => {console.log(value); return cleanTheKitchen()})
            .then(value => {console.log(value); return takeOutTheTrash()})
            .then(value => {console.log(value); console.log("All works Done.")} )
            .catch(error => console.error(error));