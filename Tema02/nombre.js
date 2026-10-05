const RESULT_DIV = document.getElementById('result');
const SHOW_BTN = document.getElementById('show');
const NAME_IN = document.getElementById('name');
const SURNAME_ONE_IN = document.getElementById('surname_one');
const SURNAME_TWO_IN = document.getElementById('surname_two');

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        var name = NAME_IN.value.trim();
        var surnameOne = SURNAME_ONE_IN.value.trim();
        var surnameTwo = SURNAME_TWO_IN.value.trim();
        if(name === '') {
            alert('El nombre no puede estar vacío.');
            return;
        }
        else if(surnameOne === '') {
            alert('El primer apellido no puede estar vacio.');
            return;
        }
        else if(surnameTwo === '') {
            alert('El Segundo apellido no puede estar vacío.');
            return;
        }
        name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
        RESULT_DIV.innerHTML = `${name} ${surnameOne.toLowerCase()} ${surnameTwo.toLowerCase()}`;
    });
}