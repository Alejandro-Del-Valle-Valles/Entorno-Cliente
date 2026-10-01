const btnCheck = document.getElementById('check_btn');
const resultDiv = document.getElementById('result');

if(btnCheck) {
    btnCheck.addEventListener('click', () => {
        var age = parseInt(document.getElementById('age').value.toLowerCase());
        const category = ((age) => {
            switch(true) {
                case age >= 5 && age < 8:
                    return 'Pre-Banjamin';
                case age < 10:
                    return 'Benjamin';
                case age < 12:
                    return 'Alevín';
                case age < 14:
                    return 'Infantil';
                case age < 16:
                    return 'Cadete';
                case  age < 19:
                    return 'Juvenil';
                default:
                    return 'Fuera de categoría';
            }
        })(age);
        resultDiv.innerText = `La categoría del jugador es ${category}`;
    });
}