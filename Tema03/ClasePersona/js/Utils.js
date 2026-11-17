const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MY_DOM = {
    inputs: {
        deadname: document.getElementById('deadname'),
        name: document.getElementById('name'),
        surname: document.getElementById('surname',),
        direction: document.getElementById('direction'),
        bornDate: document.getElementById('born-date'),
        genderSelected: document.querySelector('input[name="gender"]:checked'),
        male: document.getElementById('male'),
        female: document.getElementById('female'),
        code: document.getElementById('code')
    },
    navigation: {
        first: document.getElementById('first-btn'),
        previous: document.getElementById('previous-btn'),
        next: document.getElementById('next-btn'),
        last: document.getElementById('last-btn')
    },
    crud: {
        register: document.getElementById('register-btn'),
        modify: document.getElementById('modify-btn'),
        delete: document.getElementById('delete-btn'),
        listAll: document.getElementById('list-all-btn'),
        listCurrent: document.getElementById('list-current-btn'),
    },
    actions: {
        accept: document.getElementById('accept-btn'),
        cancel: document.getElementById('cancel-btn'),
    }
};

export function checkValidDate(dateIn) {
    var date = new Date(dateIn);
    return Number.isNaN(date) && date.getTime() < new Date();
}

export function checkValidCode(code) {
    var isValid = true;
    for(var char in code) {
        if(!NUMBERS.some(n => n == char)) isValid = false;
    }
    return isValid;
}