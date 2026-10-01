const resultDiv = document.getElementById('result_div');

const max = 6;
const min = 1;
let i = 1;

function createHeaders() {
    while(i < max) {
        resultDiv.innerHTML += `<h${i}>Cabecera ${i}</h${i}><br>`;
        i++;
    }
    while(i > min) {
        resultDiv.innerHTML += `<h${i}>Cabecera ${i}</h${i}><br>`;
        i--;
    }
}

createHeaders();