export const DOM = {
    inputs: {
        deadname: document.getElementById('deadname'),
        name: document.getElementById('name'),
        weight: document.getElementById('weight'),
        age: document.getElementById('age')
    },

    navigation: {
        first: document.getElementById('first'),
        previous: document.getElementById('previous'),
        next: document.getElementById('next'),
        last: document.getElementById('last')
    },

    actions: {
        eat: document.getElementById('eat'),
        run: document.getElementById('run')
    },

    crud: {
        create: document.getElementById('create-btn'),
        update: document.getElementById('update-btn'),
        delete: document.getElementById('delete-btn'),
        list: document.getElementById('list-btn')
    },

    controls: {
        other: document.getElementById('other-btn'),
        showPerson: document.getElementById('show-person-btn'),
        confirm: document.getElementById('confirm-btn'),
        cancel: document.getElementById('cancel-btn')
    }
};