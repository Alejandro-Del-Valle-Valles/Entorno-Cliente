const RESULT_DIV = document.getElementById('result');

const DATE = new Date();
RESULT_DIV.innerHTML = `${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`;