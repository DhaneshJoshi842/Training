let displayH = document.getElementById("display_hrs");
let displayM = document.getElementById("display_min");
let displayS = document.getElementById("display_sec");
let sec = 0;
let min = 0;
let hrs = 0;

setInterval(() => {
    if (sec == 60) {
        sec = 0;
    }
    displayS.innerText = ++sec;
}, 1000)

setInterval(() => {
    if (min == 60) {
        min = 0;
    }
    displayM.innerText = ++min;
}, 60000)

setInterval(() => {
    if (hrs == 24) {
        hrs = 0;
    }
    displayH.innerText = ++hrs;
}, 3600000);

