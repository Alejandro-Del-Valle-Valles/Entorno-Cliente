const NAME_IN = document.getElementById('name');
const CREATE_BTN = document.getElementById('create');
const CLOSE_BTN = document.getElementById('close');

var newWindow;
if(CREATE_BTN) {
    CREATE_BTN.addEventListener('click', () => {
        var name = NAME_IN.value.trim();
        if(name.length < 1) {
            alert('El nombre debe tener al menos una letra.');
            return;
        }
        newWindow = window.open(`nombreVentanaResultado.html?name=${name}`, '');
    });
}

if(CLOSE_BTN) {
    CLOSE_BTN.addEventListener('click', () => {
        if(newWindow) newWindow.close();
    });
}