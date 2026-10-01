const RESULT_DIV = document.getElementById('result');
const START_BTN = document.getElementById('start_btn');
const STOP_BTN = document.getElementById('stop_btn');

let showClock = setInterval('showDate()', 1000);

if(START_BTN) START_BTN.addEventListener('click', () => {
    showClock = setInterval('showDate()', 1000);
});

if(STOP_BTN) STOP_BTN.addEventListener('click', () => {
    clearInterval(showClock);
});

function showDate() {
    var date = new Date();
    RESULT_DIV.innerHTML = `<h1>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h1>`;
}