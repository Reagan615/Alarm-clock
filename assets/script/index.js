'use strict';

let showTime = document.querySelector('.show-time');
let show = new Date();

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
let icon = document.querySelector('.icon');
let tips = document.querySelector('.tips');
const alarm = new Audio('assets/audio/alarm.mp3');
alarm.type = 'audio/mp3';

setAlarm.addEventListener('click', function() {
   let a = writeAlarm1.value;
   let b = writeAlarm2.value;

    if (a == '' || b == '') {
        tips.style.visibility = 'visible';
    } if (a > 0 && a < 24 && b >= 0 && b < 60) {
        showAlarm.innerText = `${a} : ${b}`;
        showAlarm.style.visibility = 'visible';
        icon.classList.add('icon2');
    }else {
        tips.style.visibility = 'visible';
    };
    setInterval(function() {
        let show = new Date();
        let h = show.getHours().toString().padStart(2, '0');
        let m = show.getMinutes().toString().padStart(2, '0');
       /*  console.log(a);
        console.log(b);
        console.log(h);
        console.log(m); */
        if(a === h && b === m) {
            showTime.style.removeProperty('color');
            showTime.classList.add('change');
            alarm.play();
          };
    },1000)

});














