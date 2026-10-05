const RESULT_DIV = document.getElementById('result');
const LEFT_BTN = document.getElementById('left');
const RIGTH_BTN = document.getElementById('rigth');
const TIME_BTN = document.getElementById('time');
const TEXT_IN = document.getElementById('text');

let id;

if(TIME_BTN) {
    TIME_BTN.addEventListener('click', () => {
        //showText = setInterval();
    });
}

if(LEFT_BTN) {
    LEFT_BTN.addEventListener('click', () => {
        if(id) clearInterval(id);
        var text = TEXT_IN.value.trim();
        id = setInterval(() => {
            text = text.slice(1) + text.charAt(0);
            RESULT_DIV.innerHTML = `<h1>${text}</h1>`;
        }, 1000);
        LEFT_BTN.disabled = true;
        RIGTH_BTN.disabled = false;
    });
}

if(RIGTH_BTN) {
    RIGTH_BTN.addEventListener('click', () => {
        if(id) clearInterval(id);
        var text = TEXT_IN.value.trim();
        id = setInterval(() => {
            text = text.slice(-1) + text.slice(0, -1);
            RESULT_DIV.innerHTML = `<h1>${text}</h1>`;
        }, 1000);
        LEFT_BTN.disabled = false;
        RIGTH_BTN.disabled = true;
    });
}