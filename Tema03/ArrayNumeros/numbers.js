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
            NUMBER_IN.value = numbers[index];
            NUMBER_INDEX_DIV.innerHTML = index;
            NUMBER_POSITION_DIV.innerHTML = index + 1;
        }
    });
}

if(PREVIOUS_BTN) {
    PREVIOUS_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index--;
            if(index < 0) index = numbers.length - 1;
            NUMBER_IN.value = numbers[index];
            NUMBER_INDEX_DIV.innerHTML = index;
            NUMBER_POSITION_DIV.innerHTML = index + 1;
        }
    });
}

if(NEXT_BTN) {
    NEXT_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index++;
            if(index > numbers.length - 1) index = 0;
            NUMBER_IN.value = numbers[index];
            NUMBER_INDEX_DIV.innerHTML = index;
            NUMBER_POSITION_DIV.innerHTML = index + 1;
        }
    });
}

if(LAST_BTN) {
    LAST_BTN.addEventListener('click', () => {
        if(numbers.length > 0) {
            index = numbers.length - 1;
            NUMBER_IN.value = numbers[index];
            NUMBER_INDEX_DIV.innerHTML = index;
            NUMBER_POSITION_DIV.innerHTML = index + 1;
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
        ACCEPT_BTN.hidden = false;
        CANCEL_BTN.hidden = false;
        currentAction = 0; //Register value
    });
}

/**
 * Erase a number from the array
 */
if(ERASE_BTN) {
    ERASE_BTN.addEventListener('click', () => {
        disableModifications();
        currentAction = 1; //Erase value
    });
}

/**
 * Change a number from the array to the input number
 */
if(UPDATE_BTN) {
    UPDATE_BTN.addEventListener('click', () => {
        disableModifications();
        currentAction = 2; //Update value
    });
}

/**
 * Open a new window with a list of the number on the array, unordered, and ordered asc and desc
 */
if(LIST_BTN) {
    LIST_BTN.addEventListener('click', () => {

    });
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
                //Register
                break;
            case 1:
                //Erase
                break;
            case 2:
                //Update
                break;
        }
    });
}

/**
 * Cancel the current action
 */
if(CANCEL_BTN) CANCEL_BTN.addEventListener('click', enableAllButtons());


/**
 * Check if the input number is a decimal number.
 * @returns Number integer or undefined if ir's not a decimal number.
 */
const checkNumber = () => NUMBER_IN.value.match(/[0-9]/) ? parseInt(number) : undefined;

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