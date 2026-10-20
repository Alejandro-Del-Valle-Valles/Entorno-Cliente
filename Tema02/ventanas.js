const MOVE_BTN = document.getElementById('move');
const SIZE_BTN = document.getElementById('size');
const MOVE_SIZE_BTN = document.getElementById('move-size');
const MOVE_TO_BTN = document.getElementById('move-to');
const X_IN = document.getElementById('x');
const Y_IN = document.getElementById('Y');

if(MOVE_BTN) {
    MOVE_BTN.addEventListener('click', () => {
        var top = 100;
        var left = 100;
        var win = window.open('about:blank', '', `width=300,height=200,left=${left},top=${top}`) ;
        var intervalId = setInterval(() => {
            top += 10;
            left += 10;
            win.moveTo(0, 0);
        }, 100);

        setTimeout(() => {
            win.close();
            clearInterval(intervalId);
        }, 5000);
    });
}

if(SIZE_BTN) {
    SIZE_BTN.addEventListener('click', () => {
        var width = 200;
        var heigth = 300;
        var win = window.open('about:blank', '', `width=${width},height=${heigth}`) ;
        var intervalId = setInterval(() => {
            width += 10;
            heigth += 10;
            win.resizeTo(width, heigth);
        }, 1000);

        setTimeout(() => {
            win.close();
            clearInterval(intervalId);
        }, 5000);
    });
}

if(MOVE_SIZE_BTN) {
    MOVE_SIZE_BTN.addEventListener('click', () => {
        var top = 100;
        var left = 100;
        var width = 200;
        var heigth = 300;
        var win = window.open('about:blank', '', `width=${width},height=${heigth},top=${top},left=${left}`) ;
        var intervalId = setInterval(() => {
            top += 10;
            left += 10;
            heigth += 10;
            width += 10;
            win.moveTo(left, top);
            win.resizeTo(width, heigth);
        }, 1000);

        setTimeout(() => {
            win.close();
            clearInterval(intervalId);
        }, 5000);
    });
}

if( MOVE_TO_BTN) {
    MOVE_TO_BTN.addEventListener('click', () => {

    });
}