import { Persona } from './Persona.js';
import { PersonaStorage } from './PersonaStorage.js';
import { MY_DOM, checkValidCode, checkValidDate } from './Utils.js';

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
        if(currentAction) {
            switch(currentAction) {
                case MY_DOM.crud.register:
                    registerPerson();
                    break;
                case MY_DOM.crud.modify:
                    modifyPerson();
                    break;
                case MY_DOM.crud.delete:
                    deletePerson();
                    break;
                default:
                    break;
            }
        }
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

//CRUD METHDOS
function registerPerson() {
    var isCreated = false;
    if(validatePersonData()) {
        var person = new Persona(
            MY_DOM.inputs.name.value.trim(),
            MY_DOM.inputs.surname.value.trim(),
            MY_DOM.inputs.direction.value.trim(),
            MY_DOM.inputs.bornDate.value.trim(),
            MY_DOM.inputs.genderSelected == MY_DOM.inputs.male,
            MY_DOM.inputs.code.value.trim()
        );
        isCreated = PersonaStorage.create(person);
    }
    if(isCreated) {
        alert(MY_DOM.inputs.name.value.trim() + ' creado con éxito.');
        if(currentIndex) currentIndex++;
        else currentIndex = 0;
        updatePersonsArray();
    } else {
        alert('No se ha podido crear la persona.');
    }
}

function modifyPerson() {
    var isUpdated = false;
    if(currentPerson && validatePersonData()) {

        isUpdated = true;
    }
    if(isUpdated) alert(currentPerson.name + ' actualizado con éxito.');
    else alert('No se ha podido actualizar la persona.');
}

function deletePerson() {
    var isDeleted = false;
    if(currentPerson) {

    }
    if(isDeleted) {
        alert(currentPerson.name + ' eliminado con éxito.');
        currentIndex--;
        updatePersonsArray();
    } else {
        alert('No se ha podido eliminar la persona.');
    }
}

function validatePersonData() {
    var isValid = true;
    if(MY_DOM.inputs.name.value.trim() === '') {
        isValid = false;
        alert('El nombre no puede estar vacio.');
    }
    if(MY_DOM.inputs.surname.value.trim() === '') {
        isValid = false;
        alert('El apellido no puede estar vacio.');
    }
    if(MY_DOM.inputs.direction.value.trim() === '') {
        isValid = false;
        alert('La dirección no puede estar vacio.');
    }
    if(checkValidCode(MY_DOM.inputs.code.value.trim())) {
        isValid = false;
        alert('El código postal no puede estar vacio ni contener letras ni tener más de 5 números.');
    }
    if(checkValidDate(MY_DOM.inputs.female.value.trim())) {
        isValid = false;
        alert('La fecha de naicmiento no puede estar vacia, debe ser inferior a hoy y debe cumplir el formato.');
    }
    return isValid;
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
        var dateString = currentPerson.bornDate.getFullYear() + '-' + (currentPerson.bornDate.getMonth() + 1) + '-' + currentPerson.bornDate.getDate();
        MY_DOM.inputs.deadname.value = currentPerson.name;
        MY_DOM.inputs.name.value = currentPerson.name;
        MY_DOM.inputs.surname.value = currentPerson.surname;
        MY_DOM.inputs.direction.value = currentPerson.direction;
        MY_DOM.inputs.bornDate.value = dateString;
        if(currentPerson.gender) MY_DOM.inputs.male.checked = true;
        else MY_DOM.inputs.female.checked = true;
        MY_DOM.inputs.code.value = currentPerson.code;
    }
}