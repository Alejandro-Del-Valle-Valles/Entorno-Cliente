import { Persona } from './Persona.js';
import { PersonaStorage } from './PersonaStorage.js';
import { MY_DOM } from './Utils.js';

let currentIndex;
let currentPerson;
let currentAction;

// NAVIGATION BUTTONS
if(MY_DOM.navigation.first) {
    MY_DOM.navigation.first.addEventListener('click', () => {
        currentIndex = 0;
        updatePersonsArray();
    });
}

if(MY_DOM.navigation.previous) {
    MY_DOM.navigation.previous.addEventListener('click', () => {
        currentIndex--;
        if(currentIndex < 0) {
            var length = PersonaStorage.count() - 1;
            currentIndex = length < 0 ? 0 : length;
        }
        updatePersonsArray();
    });
}

if(MY_DOM.navigation.next) {
    MY_DOM.navigation.next.addEventListener('click', () => {
        currentIndex++;
        var length = PersonaStorage.count() - 1;
        if(currentIndex > length) currentIndex = 0
        updatePersonsArray();
    });
}

if(MY_DOM.navigation.last) {
    MY_DOM.navigation.last.addEventListener('click', () => {
        var length = PersonaStorage.count() - 1;
        currentIndex = length < 0 ? 0 : length;
        updatePersonsArray();
    });
}

// CRUD BUTTONS
if(MY_DOM.crud.register) {
    MY_DOM.crud.register.addEventListener('click', () => {
        currentAction = MY_DOM.crud.register;
        disableNavigation();
        enableAcceptCancel();
    });
}

if(MY_DOM.crud.modify) {
    MY_DOM.crud.modify.addEventListener('click', () => {
        currentAction = MY_DOM.crud.modify;
        disableNavigation();
        enableAcceptCancel();
    });
}

if(MY_DOM.crud.delete) {
    MY_DOM.crud.delete.addEventListener('click', () => {
        currentAction = MY_DOM.crud.delete;
        disableNavigation();
        enableAcceptCancel();
    });
}

if(MY_DOM.crud.listAll) {
    MY_DOM.crud.listAll.addEventListener('click', () => {

    });
}

if(MY_DOM.crud.listCurrent) {
    MY_DOM.crud.listCurrent.addEventListener('click', () => {

    });
}

// ACTION BUTTONS
if(MY_DOM.actions.accept) {
    MY_DOM.actions.accept.addEventListener('click', () => {
        currentAction = undefined;
        enableNavigation();
        disableAcceptCancel();
    });
}

if(MY_DOM.actions.cancel) {
    MY_DOM.actions.cancel.addEventListener('click', () => {
        currentAction = undefined;
        enableNavigation();
        disableAcceptCancel();
    });
}

function enableNavigation() {
    MY_DOM.navigation.first.disabled = false;
    MY_DOM.navigation.previous.disabled = false;
    MY_DOM.navigation.next.disabled = false;
    MY_DOM.navigation.last.disabled = false;
}

function disableNavigation() {
    MY_DOM.navigation.first.disabled = true;
    MY_DOM.navigation.previous.disabled = true;
    MY_DOM.navigation.next.disabled = true;
    MY_DOM.navigation.last.disabled = true;
}

function enableAcceptCancel() {
    MY_DOM.actions.accept.disabled = false;
    MY_DOM.actions.cancel.disabled = false;
    MY_DOM.actions.accept.hidden = false;    
    MY_DOM.actions.cancel.hidden = false;
}

function disableAcceptCancel() {
    MY_DOM.actions.accept.disabled = true;
    MY_DOM.actions.cancel.disabled = true;
    MY_DOM.actions.accept.hidden = true;
    MY_DOM.actions.cancel.hidden = true;
}

function updatePersonsArray() {
    currentPerson = PersonaStorage.getByIndex(currentIndex);
    if(currentPerson) {
        MY_DOM.inputs.deadname.value = currentPerson.name;
        MY_DOM.inputs.name.value = currentPerson.name;
        MY_DOM.inputs.surname.value = currentPerson.surname;
        MY_DOM.inputs.direction.value = currentPerson.direction;
        MY_DOM.inputs.bornDate.value = currentPerson.bornDate;
        if(currentPerson.gender) MY_DOM.inputs.male.checked = true;
        else MY_DOM.inputs.female.checked = true;
        MY_DOM.inputs.code.value = currentPerson.code;
    }
}