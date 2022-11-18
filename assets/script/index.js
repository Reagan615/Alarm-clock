'use strict';
let links = document.querySelectorAll(' nav a'),
bg = document.querySelector('.link-bg');

function setActive(el) {
links.forEach(link => {
link.classList.remove('active')
});
el.classList.add('active'); 
};


links.forEach((link,index) => {
link.addEventListener('click', e => {
e.preventDefault();
bg.style.transform = `translate(${125*index}px,-50%)`;
setActive(e.currentTarget);     
})  
}) ;