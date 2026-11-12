import  { Human } from "./model/Human.js";
import { HumanStorage } from "./utils/HumanStorage.js";
import { DOM } from "./utils/DOM.js";

let currentAction;
let currentIndex = 0;
let currentHuman;

//TODO CRUD Actions

//NAVIGATION ACTIONS
if(DOM.navigation.first) {
    DOM.navigation.first.addEventListener('click', () => {
        currentIndex = 0;
        updateArray();
    });
}

if(DOM.navigation.previous) {
    DOM.navigation.previous.addEventListener('click', () => {
        currentIndex--;
        updateArray();
    });
}

if(DOM.navigation.next) {
    DOM.navigation.next.addEventListener('click', () => {
        currentIndex++;
        updateArray();
    });
}

if(DOM.navigation.last) {
    DOM.navigation.last.addEventListener('click', () => {
        currentIndex = HumanStorage.count() - 1;
        updateArray();
    });
}

//HUMAN ACTIONS
if(DOM.actions.eat) {
    DOM.actions.eat.addEventListener('click', () => {
        if(currentHuman) {
            currentHuman.eat();
            updateArray()
        }
    });
}

if(DOM.actions.run) {
    DOM.actions.run.addEventListener('click', () => {
        if(currentHuman) {
            currentHuman.run();
            updateArray();
        }
    });
}

//CRUD ACTIONS
if(DOM.crud.create) {
    DOM.crud.create.addEventListener('click', () => {
        currentAction = DOM.crud.create;
        DOM.navigation.first.disabled = true;
        DOM.navigation.previous.disabled = true;
        DOM.navigation.next.disabled = true;
        DOM.navigation.last.disabled = true;
        disableCUD();
        enableConfirmCancelBtns();
    });
}

if(DOM.crud.update) {
    DOM.crud.update.addEventListener('click', () => {
        currentAction = DOM.crud.update;
        disableCUD();
        enableConfirmCancelBtns();
    });
}

if(DOM.crud.delete) {
    DOM.crud.delete.addEventListener('click', () => {
        currentAction = DOM.crud.delete;
        disableCUD();
        enableConfirmCancelBtns();
    });
}

if(DOM.crud.list) {
    DOM.crud.list.addEventListener('click', () => {
        
    });
}

//CONTROL ACTIONS
if(DOM.controls.other) {
    DOM.controls.other.addEventListener('click', () => {
        
    });
}

if(DOM.controls.showPerson) {
    DOM.controls.other.addEventListener('click', () => {
        
    });
}

if(DOM.controls.confirm) {
    DOM.controls.confirm.addEventListener('click', () => {
        switch(currentAction) {
            case DOM.crud.create:
                registerHuman();
                break;
            case DOM.crud.update:
                modifyHuman();
                break;
            case DOM.crud.delete:
                deleteHuman();
                break;
            default:
                alert('La acción que tratas de realizar no es posible.');
                break;
        }
        disableConfirmCancelBtns();
        enableAllBtns();
    });
}

if(DOM.controls.cancel) {
    DOM.controls.cancel.addEventListener('click', () => {
        disableConfirmCancelBtns();
        enableAllBtns();
        updateArray();
    });
}

//UTIL FUNCTIONS
function enableConfirmCancelBtns() {
    DOM.controls.confirm.disabled = false;
    DOM.controls.cancel.disabled = false;
    DOM.controls.confirm.hidden = false;
    DOM.controls.cancel.hidden = false;
}

function disableConfirmCancelBtns() {
    DOM.controls.confirm.disabled = true;
    DOM.controls.cancel.disabled = true;
    DOM.controls.confirm.hidden = true;
    DOM.controls.cancel.hidden = true;
}

function enableAllBtns() {
    DOM.actions.eat.disabled = false;
    DOM.actions.run.disabled = false;
    DOM.navigation.first.disabled = false;
    DOM.navigation.previous.disabled = false;
    DOM.navigation.next.disabled = false;
    DOM.navigation.last.disabled = false;
    DOM.crud.create.disabled = false;
    DOM.crud.update.disabled = false;
    DOM.crud.delete.disabled = false;
}

function disableCUD() {
    DOM.actions.eat.disabled = true;
    DOM.actions.run.disabled = true;
    DOM.navigation.first.disabled = true;
    DOM.navigation.previous.disabled = true;
    DOM.navigation.next.disabled = true;
    DOM.navigation.last.disabled = true;
    DOM.crud.create.disabled = true;
    DOM.crud.update.disabled = true;
    DOM.crud.delete.disabled = true;
}

function updateArray() {
    if(currentIndex > HumanStorage.count()- 1) currentIndex = 0;
    else if(currentIndex < 0) currentIndex = HumanStorage.count() > 0 ? HumanStorage.count() - 1 : 0;
    if(HumanStorage.count() == 0) return;
    currentHuman = HumanStorage.getByIndex(currentIndex);
    DOM.inputs.deadname.value = currentHuman.name;
    DOM.inputs.name.value = currentHuman.name;
    DOM.inputs.weight.value = currentHuman.weight;
    DOM.inputs.age.value = currentHuman.age;
}

//CRUD FUNCTIONS
function registerHuman() {
    if(checkHumanData()) {
        var isCreated = HumanStorage.createHuman(createHuman());
        var message = isCreated
            ? 'Creado con éxito'
            : 'No se ha podido crear, es posible que ya exista un humano con ese nombre.';
        alert(message);
        if(isCreated) {
            currentIndex++;
            updateArray();
        }
    }
}

function modifyHuman() {
    if(checkHumanData()) {
        console.log(DOM.inputs.deadname.value);
        var message = HumanStorage.updateHuman(createHuman(), DOM.inputs.deadname.value.trim())
            ? 'Actualizao con éxito'
            : 'No se ha podido actualizar, es posible que no exista un humano con ese nombre.';
        alert(message);
    }
}

function deleteHuman() {
    var name = DOM.inputs.name.value.trim();
    if(name === '') {
        alert('El nombre no puede estar vacío para eliminar a una persona.');
        return;
    }
    if(confirm(`¿Estás seguro de eliminar a ${name}? Esta acción es irreversible`)) {
        var meesage = HumanStorage.deleteHuman(name)
            ? name + ' eliminado con éxito.'
            : name + ' no se ha podido eliminar';
        alert(meesage);
    }
}

function checkHumanData() {
    var name = DOM.inputs.name.value.trim();
    var weightStr = DOM.inputs.weight.value.trim();
    var ageStr = DOM.inputs.age.value.trim();
    var valid = true;
    if(name === '') {
        alert('El nombre no puede estar vacio.');
        valid = false;
    }
    if(!weightStr.match(/^\d+$/)) {
        alert('El peso debe ser un número entero y no puede estar vacío');
        valid = false;
    }
    if(!ageStr.match(/^\d+$/)) {
        alert('La edad debe ser un número entero positivo y no puede estar vacía.');
        valid = false;
    }
    var weight = parseInt(weightStr);
    var age = parseInt(ageStr);
    if(weight < 1) {
        alert('El peso no puede ser inferior a 1kg');
        valid = false;
    }
    if(age < 0) {
        alert('La edad no puede ser negativa.');
        valid = false;
    }
    return valid;
}

function createHuman() {
    var name = DOM.inputs.name.value.trim();
    var weight = parseInt(DOM.inputs.weight.value);
    var age = parseInt(DOM.inputs.age.value);
    return new Human(name, weight, age);
}