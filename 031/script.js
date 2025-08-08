const box = document.querySelector('.box');

console.log(box.textContent);

box.addEventListener('click', event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Oops 😒";
});

box.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "don't do it 😢";
});

box.addEventListener('mouseout', event =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click me 😊";
});