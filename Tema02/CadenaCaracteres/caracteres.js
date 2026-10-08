const NAME_IN = document.getElementById('name');
const AGE_IN = document.getElementById('age');
const NAME_DIV = document.getElementById('name_info');
const AGE_DIV = document.getElementById('age_info');
const CHECK_BTN = document.getElementById('check');
const CLEAN_BTN = document.getElementById('clean');

if(CHECK_BTN) {
    CHECK_BTN.addEventListener('click', () => {
        var isNameCorrect =checkName();
        var isAgeCorrect = checkAge();
        if(isNameCorrect) {
            NAME_DIV.classList.add('correct');
            NAME_DIV.innerHTML = 'El nombre es correcto.';
        }
        if(isAgeCorrect) {
            AGE_DIV.classList.add('correct');
            AGE_DIV.innerHTML = 'La edad es correcta.';
        }
    });
}

if(CLEAN_BTN) {
    CLEAN_BTN.addEventListener('click', () => {
        clean();
    });
}

function checkName() {
    var name = NAME_IN.value.trim();
    if(name.length < 3 || name.length > 25) {
        NAME_DIV.classList.add('incorrect');
        NAME_DIV.innerHTML = 'El nombre debe tener entre 3 y 25 caracteres.';
        return false;
    }

    var errorsLocations = [];
    for(var i = 0; i < name.length; i++) {
        if(!name[i].match(/^[a-záéíóúçñ]$/i)) errorsLocations.push(i + 1);
    }

    if(errorsLocations.length != 0) {
        NAME_DIV.classList .add('incorrect');
        NAME_DIV.innerHTML = `Hay un error en el caracter o caracteres número ${errorsLocations.values} del nombre.`;
        return false;
    }

    return true;
}

function checkAge() {
    if(isNaN(AGE_IN.value.trim())) {
        AGE_DIV.classList.add('incorrect');
        AGE_DIV.innerHTML = 'La edad debe ser un número.';
        return false;
    }
    var age = parseInt(AGE_IN.value);
    if(age < 5 || age > 110) {
        AGE_DIV.classList.add('incorrect');
        AGE_DIV.innerHTML = 'La edad debe ser igual o superior a 5 y menor o igual a 110.';
        return false;
    }
    return true;
}

function clean() {
    NAME_IN.value = '';
    AGE_IN.value = '';
    NAME_DIV.innerHTML = '';
    NAME_IN.classList = '';
    AGE_DIV.innerHTML = '';
    AGE_IN.classList = '';
}