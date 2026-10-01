const RESULT_DIV = document.getElementById('result');
const SHOW_BTN = document.getElementById('show_btn');
const ELEMENTS_IN = document.getElementById('elements');
const MIN_VALUE_IN = document.getElementById('min');
const MAX_VALUE_IN = document.getElementById('max');

if(SHOW_BTN) {
    SHOW_BTN.addEventListener('click', () =>  {
        var numElements = parseInt(ELEMENTS_IN.value);
        var min = parseInt(MIN_VALUE_IN.value);
        var max = parseInt(MAX_VALUE_IN.value);
        if(min > max) {
            var temp = max;
            max = min;
            min = temp;
        }
        
        var elements = [];
        var newNumber;
        do {
            newNumber = Math.floor(Math.random() * (max - min + 1) + min);
            if(!elements.includes(newNumber)) elements.push(newNumber);
        } while(elements.length != numElements);
        showData(elements);
    });
}

function showData(elements) {
    RESULT_DIV.innerHTML = '';
    RESULT_DIV.innerHTML = `${elements}<br>`;
    elements.sort((a, b) => b - a);
    RESULT_DIV.innerHTML += `${elements}<br>`;
}