const RESULT_DIV = document.getElementById('result');

if(RESULT_DIV) {
    for(var i = 1; i < 10; i++) {
        for(j = 1; j <= i; j++) RESULT_DIV.innerHTML += j;
        RESULT_DIV.innerHTML += '<br>';
    }
    for(var i = 1; i < 10; i++) {
        for(j = 1; j <= i; j++) RESULT_DIV.innerHTML += i;
        RESULT_DIV.innerHTML += '<br>';
    }
}