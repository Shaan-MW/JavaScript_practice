console.log("Shuffle an array");
console.log("Cards game");
console.log("Fisher-Yates Algorithm.");

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffleCards(cards);
console.log(cards);

function shuffleCards(array){
    for(let i=array.length-1;i>0;i--){
        const randomShuffler = Math.floor(Math.random()*(i+1));
        [array[i],array[randomShuffler]] = [array[randomShuffler],array[i]];
    }
}
