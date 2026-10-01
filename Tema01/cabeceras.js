const RESULT_DIV = document.getElementById('result_div');
const NUM_HEADERS = document.getElementById('num_headers');
const NUM_REP = document.getElementById('num_rep');
const SHOW_BTN = document.getElementById('show_btn');

if(NUM_HEADERS && NUM_REP && SHOW_BTN && RESULT_DIV) {
    SHOW_BTN.addEventListener('click', () => {
        var numHeaders = parseInt(NUM_HEADERS.value);
        var numRep = parseInt(NUM_REP.value);
        if(numHeaders < 0 || numHeaders > 6) {
            alert('El número de cabeceras no puede ser inferior a 1 ni superior a 6.');
            return;
        }
        if(numRep < 1 || numRep > 10) {
            alert('El número de repeticiones no puede ser inferior a 1 ni superior a 10.');
            return;
        }

        RESULT_DIV.innerHTML = '';
        var i = 0;
        while(i != numRep) {
            var j = 1;
            while(j <= numHeaders) {
                RESULT_DIV.innerHTML += `<h${j}>Cabecera</h${j}>`;
                j++;
            }
            j--;
            while(j > 0) {
                RESULT_DIV.innerHTML += `<h${j}>Cabecera</h${j}>`;
                j--;
            }
            i++;
        }
    });
}