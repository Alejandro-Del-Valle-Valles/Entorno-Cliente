const RESULT_DIV = document.getElementById('result');
const PARAMS = new URLSearchParams(window.location.search);
const NAME = PARAMS.get('name');

if(NAME && RESULT_DIV) {
    RESULT_DIV.innerHTML = `Buenos días ${NAME}`;
}