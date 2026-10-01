const SHOW_BTN = document.getElementById('show');
const RESULT_DIV = document.getElementById('result');
const DAY_IN = document.getElementById('day_in');
const MONTH_IN = document.getElementById('month_in');
const YEAR_IN = document.getElementById('year_in');
const HOUR_IN = document.getElementById('hour_in');
const MINUTE_IN = document.getElementById('minute_in');
const SECOND_IN = document.getElementById('second_in');
const WEEK_DAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

SHOW_BTN.addEventListener('click', () => {
    var year = parseInt(YEAR_IN.value);
    var month = parseInt(MONTH_IN.value) - 1;
    var day = parseInt(DAY_IN.value);
    var hour = parseInt(HOUR_IN.value);
    var minute = parseInt(MINUTE_IN.value);
    var second = parseInt(SECOND_IN.value);
    var date = new Date(year, month, day, hour, minute, second);
    var weekDay = WEEK_DAYS[date.getDay()];
    var monthName = MONTHS[date.getMonth()];
    RESULT_DIV.innerHTML = `En San Fernando de Henares, ${weekDay} a ${day} de ${monthName} de ${year} a las ${hour} horas ${minute} minutos y ${second} segundos.`;
});