'use strict';
/* let links = document.querySelectorAll(' nav a'),

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
}) ; */

let showTime = document.querySelector('.show-time');
setTimeout(time);
let setTime = setTimeout(time, 1000);
function time() {
    let show = new Date();
    let h = show.getHours().toString().padStart(2, '0');
    let m = show.getMinutes().toString().padStart(2, '0');
    let s = show.getSeconds().toString().padStart(2, '0');
    showTime.innerHTML = `${h}:${m}:${s}`;
    setTime = setTimeout('time()', 1000);
};

let writeAlarm1 = document.querySelector('.set-time .hour');
let writeAlarm2 = document.querySelector('.set-time .minute');
let setAlarm = document.querySelector('.set-alarm button');
let showAlarm = document.querySelector('.alarm-time');
let tips = document.querySelector('.tips');
const alarm = new Audio('C:/Users/lenovo/Desktop/Alarm clock/assets/audio/alarm.mp3');
alarm.type = 'audio/mp3';


setAlarm.addEventListener('click', function() {
    let a = writeAlarm1.value;
    let b = writeAlarm2.value;
    let show = new Date();
    let h = show.getHours().toString();
    let m = show.getMinutes().toString();
    if (a == '' || b == '') {
        tips.style.visibility = 'visible';
    } if (a > 0 && a < 24 && b > 0 && b < 60) {
        showAlarm.innerText = `${a} : ${b}`;
        showAlarm.style.visibility = 'visible';
    }else {
        tips.style.visibility = 'visible';
    }
    console.log(a);
    console.log(b);
    console.log(h);
    console.log(m);

    if(a === h && m === b) {
        showTime.style.color = 'red';
        alarm.play();
    }
});








