const NUMBER_IN = document.getElementById('number');
//Navigation btns
const FIRST_BTN = document.getElementById('first');
const PREVIOUS_BTN = document.getElementById('previous');
const NEXT_BTN = document.getElementById('next');
const LAST_BTN = document.getElementById('last');
//Action btns
const REGISTER_BTN = document.getElementById('register');
const ERASE_BTN = document.getElementById('erase');
const UPDATE_BTN = document.getElementById('update');
const LIST_BTN = document.getElementById('list');
const ACCEPT_BTN = document.getElementById('accept');
const CANCEL_BTN = document.getElementById('cancel');
//Data
const ARRAY_DIV = document.getElementById('array');
const NUMBER_INDEX_DIV = document.getElementById('index');
const NUMBER_POSITION_DIV = document.getElementById('position');
const ARR_ASC_DIV = document.getElementById('arr-asc');
const ARR_DES_DIV = document.getElementById('arr-des');
const ERROR_HEADER = document.getElementById('error');

let numbers = [];
let index = 0;
let currentAction = 0; //0 register, 1 erase, 2 update

// Navigation Actions
if(FIRST_BTN) {
    FIRST_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index = 0;
            updateIndexPositionDivs();
        }
    });
}

if(PREVIOUS_BTN) {
    PREVIOUS_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index--;
            if(index < 0) index = numbers.length - 1;
            updateIndexPositionDivs();
        }
    });
}

if(NEXT_BTN) {
    NEXT_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index++;
            if(index > numbers.length - 1) index = 0;
            updateIndexPositionDivs();
        }
    });
}

if(LAST_BTN) {
    LAST_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index = numbers.length - 1;
            updateIndexPositionDivs();
        }
    });
}

// Modification Actions
/**
 * Register a new number
 */
if(REGISTER_BTN) {
    REGISTER_BTN.addEventListener('click', () => {
        disableAllButtons();
        enableAcceptCancelBtns();
        currentAction = 0; //Register value
    });
}

/**
 * Erase a number from the array
 */
if(ERASE_BTN) {
    ERASE_BTN.addEventListener('click', () => {
        disableModifications();
        enableAcceptCancelBtns();
        currentAction = 1; //Erase value
    });
}

/**
 * Change a number from the array to the input number
 */
if(UPDATE_BTN) {
    UPDATE_BTN.addEventListener('click', () => {
        disableModifications();
        enableAcceptCancelBtns();
        currentAction = 2; //Update value
    });
}

/**
 * Open a new window with a list of the number on the array, unordered, and ordered asc and desc
 */
if(LIST_BTN) {
    LIST_BTN.addEventListener('click', buildTableWindows);
}

/**
 * Confirm an action
 */
if(ACCEPT_BTN) {
    ACCEPT_BTN.addEventListener('click', () => {
        var number = checkNumber();
        ERROR_HEADER.hidden = true;
        if(!number) {
            ERROR_HEADER.hidden = false;
            return;
        }
        switch(currentAction) {
            case 0:
                numbers.push(number);
                updateArrayDiv();
                enableAllButtons();
                index = numbers.length - 1;
                updateIndexPositionDivs();
                break;
            case 1:
                numbers.splice(index, 1);
                if(index > numbers.length - 1 ) index = numbers.length - 1 > 0 ? numbers.length - 1 : 0;
                updateArrayDiv();
                updateIndexPositionDivs();
                enableAllButtons();
                break;
            case 2:
                numbers[index] = number;
                if(index > numbers.length - 1 ) index = numbers.length - 1 > 0 ? numbers.length - 1 : 0;
                updateArrayDiv();
                updateIndexPositionDivs();
                enableAllButtons();
                break;
        }
    });
}

/**
 * Cancel the current action
 */
if(CANCEL_BTN) CANCEL_BTN.addEventListener('click', enableAllButtons);


/**
 * Check if the input number is a decimal number.
 * @returns Number integer or undefined if ir's not a decimal number.
 */
const checkNumber = () => NUMBER_IN.value.match(/^\d+$/) ? parseInt(NUMBER_IN.value) : undefined;

/**
 * Update the divs with the number information
 */
function updateArrayDiv() {
    ARRAY_DIV.innerHTML = '';
    ARR_ASC_DIV.innerHTML = '';
    ARR_DES_DIV.innerHTML = '';
    
    numbers.forEach(n => {
        ARRAY_DIV.innerHTML += n + ' ';
    });
    
    let ascNumbers = [...numbers].sort((a,b) => a - b);
    ascNumbers.forEach(n => {
        ARR_ASC_DIV.innerHTML += n + ' ';
    });
    
    let descNumbers = [...numbers].sort((a,b) => b - a);
    descNumbers.forEach(n => {
        ARR_DES_DIV.innerHTML += n + ' ';
    });
}

/**
 * Update the divs realted to the index and position, also the numer input
 */
function updateIndexPositionDivs(){
    NUMBER_IN.value = numbers.length > 0 ? numbers[index] : '';
    NUMBER_INDEX_DIV.innerHTML = index;
    NUMBER_POSITION_DIV.innerHTML = index + 1;
}

/**
 * Enable the accept and cancel buttons
 */
function enableAcceptCancelBtns() {
    ACCEPT_BTN.hidden = false;
    CANCEL_BTN.hidden = false;
}

/**
 * Disable all navigation and action buttos except list, accept, and cancel.
 */
function disableAllButtons() {
    FIRST_BTN.disabled = true;
    PREVIOUS_BTN.disabled = true;
    NEXT_BTN.disabled = true;
    LAST_BTN.disabled = true;
    disableModifications();
}

/**
 * Disable register, erase, and update buttons.
 */
function disableModifications() {
    REGISTER_BTN.disabled = true;
    ERASE_BTN.disabled = true;
    UPDATE_BTN.disabled = true;
}

/**
 * Enable all buttons and hide Accept and Cancel buttons
 */
function enableAllButtons() {
    FIRST_BTN.disabled = false;
    PREVIOUS_BTN.disabled = false;
    NEXT_BTN.disabled = false;
    LAST_BTN.disabled = false;
    REGISTER_BTN.disabled = false;
    ERASE_BTN.disabled = false;
    UPDATE_BTN.disabled = false;
    ACCEPT_BTN.hidden = true;
    CANCEL_BTN.hidden = true;
}

/**
 * Open and build a windows with a table with all information
 */
function buildTableWindows() {
    var tableWindows = window.open('', '_blank', 'width=600px,heigth=600px');

    var table = `
    <table>
        <thead>
            <tr>
                <th>Array</th>
                <th>Ascendente</th>
                <th>Descendente</th>
            </tr>
        </thead>
        <tbody>
    `;
    let ascNumbers = [...numbers].sort((a,b) => a - b);
    let descNumbers = [...numbers].sort((a,b) => b - a);

    for(var i = 0; i < numbers.length - 1; i++) {
        table += `
            <tr>
                <td>${numbers[i]}</td>
                <td>${ascNumbers[i]}</td>
                <td>${descNumbers[i]}</td>
            </tr>
        `;
    }

    table += '</tbody></table>';

    var html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabla</title>
    </head>
    <body>
        ${table} 
        <button onclick="window.close()">Cerra Ventana</button>
    </body>
    </html>
    `;
    tableWindows.window.document.write(html);
    tableWindows.window.document.close();
}