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


async function doWorks(){
    console.log("Getting ready to walk the dog..");
    const dogWalkResult = await walkTheDog();
    console.log(dogWalkResult); 

    const cleanKitchenResult = await cleanTheKitchen();
    console.log(cleanKitchenResult);

    const takeOutResult = await takeOutTheTrash();
    console.log(takeOutResult);

    console.log("All Works Done.");
}

doWorks();