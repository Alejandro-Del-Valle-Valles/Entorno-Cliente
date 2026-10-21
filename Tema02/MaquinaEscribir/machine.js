const TEXT_IN = document.getElementById('text');
const TIMER_IN = document.getElementById('timer');
const SHOW_BTN = document.getElementById('show');
const CHANGE_TIME_BTN = document.getElementById('change-time');
const MACHIN = document.getElementById('machine');
const ERROR_DIV = document.getElementById('error');

let timerIntervalId;
let 

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        var text = TEXT_IN.value.trim();
        if(text === '') {
            alert('Debes introducir un texto');
            return;
        }

    });
}

if(CHANGE_TIME_BTN) {
    CHANGE_TIME_BTN.addEventListener('click', () => {
        var newTime = TIMER_IN.value.trim();
        ERROR_DIV.hidden = true;
        if(!newTime.match(/[0-9]/) || parseInt(newTime) < 0) {
            ERROR_DIV.hidden = false;
            return;
        }
        time = parseInt(newTime);
    });
}