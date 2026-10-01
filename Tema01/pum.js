const RESULT_DIV = document.getElementById('result');

var index;
for(var i = 1; i < 101; i++) {
    index = i.toString();
    if(index.charAt(index.length - 1) == 7) RESULT_DIV.innerHTML += "PUM<br>";
    else RESULT_DIV.innerHTML += `${i},`;
}