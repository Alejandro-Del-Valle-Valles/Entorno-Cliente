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
            if(currentHuman) currentHuman.eat();
            updateArray()
        }
    });
}

if(DOM.actions.run) {
    DOM.actions.run.addEventListener('click', () => {
        if(currentHuman) currentHuman.run();
        updateArray();
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
    currentHuman = HumanStorage.HUMANS[currentIndex];
    DOM.inputs.name.value = currentHuman.name;
    DOM.inputs.weight.value = currentHuman.weight;
    DOM.inputs.age.value = currentHuman.age;
}