const RESULT_DIV = document.getElementById('result');
const SHOW_BTN = document.getElementById('show');
const NUM_IN = document.getElementById('num');

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        var value = NUM_IN.value.trim();
        if(isNaN(value) || parseInt(value) < 1) {
            RESULT_DIV.innerHTML = `Debe introducir un número positivo mayor que 0.`;
            return;
        }
        var result = calculateFactorial(parseInt(value));
        RESULT_DIV.innerHTML = `El factorial de ${value} es ${result}`;
    });
}

function calculateFactorial(original, result = 1) {
    if(original <= 1) return result;
    result *= original;
    return calculateFactorial(original - 1, result);
}