const CREATE_BTN = document.getElementById('create');
const CLOSE_BTN = document.getElementById('close');

var newWindow;
if(CREATE_BTN) {
    CREATE_BTN.addEventListener('click', () => {
        newWindow = window.open('windowOpen.html', '', 'width: 500; height: 500;');
        newWindow.setTimeout(() => {newWindow.close()}, 3000);
    });
}

if(CLOSE_BTN) {
    CLOSE_BTN.addEventListener('click', () => {
        if(newWindow) newWindow.close()
    });
}