const NUMBER_IN = document.getElementById('number');
const RESULT_DIV = document.getElementById('result');
const SHOW_BTN = document.getElementById('show_btn');

if(NUMBER_IN && RESULT_DIV && SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        var number = parseInt(NUMBER_IN.value);
        var factorials = [];
        var actualNumber = number;
        for(var i = 2; i < number / 2; i++) {
            if(actualNumber % i == 0) {
                factorials.push(i);
                actualNumber = actualNumber / i;
                i -= 1;
            }
        }
        RESULT_DIV.innerHTML = `La descomposición factorial de ${number} es `;
        for(var n of factorials) {
            RESULT_DIV.innerHTML += ` ${n} X`;
        }
    });
}