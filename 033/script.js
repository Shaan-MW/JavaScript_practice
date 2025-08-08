const image = document.querySelector('.image');
const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    if(image.style.visibility==="hidden"){
        image.style.visibility="visible";
        button.textContent='Hide';
    }else{
    image.style.visibility="hidden";
    button.textContent='Show';    
    }
});