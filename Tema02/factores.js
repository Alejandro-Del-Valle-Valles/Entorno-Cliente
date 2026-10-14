const RESULT_DIV = document.getElementById('result');
const SHOW_BTN = document.getElementById('show');
const NUM_IN = document.getElementById('num');

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () => {
        if(isNaN(NUM_IN.value) || parseInt(NUM_IN.value) < 2) {
            alert('Debes introducir un número positivo mayor que 1');
            return;
        }
        var num = parseInt(NUM_IN.value);
        var facts = [];
        for(var i = 2; i < Math.sqrt(num); i++) {
            if(num % i === 0) facts.push(i);
        }
        RESULT_DIV.innerHTML = `La descomposición en factores del número introducido por el usuario es: ${num} = `;
        facts.forEach(n => RESULT_DIV.innerHTML += `${n} X `);
        RESULT_DIV.innerHTML = RESULT_DIV.innerHTML.slice(0, -2);
    });
}