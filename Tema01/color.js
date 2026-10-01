const RESULT_DIV = document.getElementById('result');
const NUMBER_IN = document.getElementById('number');
const SHOW_BTN  = document.getElementById('show_btn');

if(RESULT_DIV && NUMBER_IN && SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        RESULT_DIV.innerHTML = '';
        var number = parseInt(NUMBER_IN.value);
        if(isNaN(number) || number < 2) return;
        var i = 2;
        var isNotPrime = true;
        while(i < Math.sqrt(number) && isNotPrime) {
            isNotPrime = number % i === 0;
            i++;
        }
        var result = isNotPrime ? '<font color="red">NO</font>' : '<font color="blue">SI</font>';
        RESULT_DIV.innerHTML = `El número ${number} ${result} es primo.`;
    });
}