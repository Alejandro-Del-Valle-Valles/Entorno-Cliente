const RESULT_DIV = document.getElementById('result');

for(var i = 1; i < 301; i++) {
    if(i % 4 == 0) {
        RESULT_DIV.innerHTML += `<font color="green" size="16">${i}</font>`;
    } else if(i % 9 == 0) {
        RESULT_DIV.innerHTML += `<font color="red" size="-2">${i}</font>`;
    } else {
        RESULT_DIV.innerHTML += `${i}`;
    }
    if(i % 10 == 0) RESULT_DIV.innerHTML +="<br>";
}