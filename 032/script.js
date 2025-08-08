const objectBox = document.querySelector('.mybox');
const keyPressed = document.querySelector('.press');
const moveAmount = 10;
let x=0;
let y=0;
objectBox.addEventListener('click', event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "😒";
});

objectBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "😢";
});

objectBox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "😂";
});


document.addEventListener('keydown', event =>{
    objectBox.textContent = '😁';
    keyPressed.textContent = `${event.key}`;

    switch(event.key){
        case '2':
            y+=moveAmount;
            break;
        case '8':
            y-=moveAmount;
            break;
        case '4':
            x-=moveAmount;
            break;
        case '6':
            x+=moveAmount;
            break;
        case '3':
            y+=moveAmount;
            x+=moveAmount;
            break;
        case '7':
            y-=moveAmount;
            x-=moveAmount;
            break;
        case '1':
            x-=moveAmount;
            y+=moveAmount;
            break;
        case '9':
            x+=moveAmount;
            y-=moveAmount;
            break;
    }
    

    objectBox.style.top=`${y}px`;
    objectBox.style.left=`${x}px`;

});

document.addEventListener('keyup', event =>{
    objectBox.textContent = '😂';
     keyPressed.textContent = `${event.key}`;
});

//arrow keys Arrowup, Arrowdown, Arrowleft, Arrowright