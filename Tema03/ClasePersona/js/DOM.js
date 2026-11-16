export const DOM = {
    inputs: {
        name: document.getElementById('name'),
        surname: document.getElementById('surname',),
        direction: document.getElementById('direction'),
        bornDate: document.getElementById('born-date'),
        gender: document.querySelector('input[name="gender"]:checked'),
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