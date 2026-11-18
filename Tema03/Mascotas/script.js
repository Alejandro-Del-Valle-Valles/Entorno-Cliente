class Mascota {

    constructor(nombre, peso, adopcion) {
        this.nombre = nombre;
        this.peso = peso;
        this.adopcion = adopcion;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre.trim();
    }

    get peso() {
        return this._peso;
    }

    set peso(nuevoPeso) {
        this._peso = parseInt(nuevoPeso);
    }

    get adopcion() {
        return this._adopcion;
    }

    set adopcion(nuevaFecha) {
        this._adopcion = nuevaFecha;
    }

    edad() {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this._adopcion.getFullYear();
        if(this._adopcion.getMonth() == hoy.getMonth() && this._adopcion.getDate() > hoy.getDate()
        || this._adopcion.getMonth() > hoy.getMonth()) {
            edad--;
        }
        return edad;
    }
}

const NOMBRE_IN = document.getElementById('nombre');
const PESO_IN = document.getElementById('peso');
const ADOPCION_IN = document.getElementById('adopcion');

let indiceActual;
let mascotaActual;
const MASCOTAS = [];

function registrarMascota() {
    var acepta = confirm('¿Seguro que quieres registrar la mascota?');
    if(!acepta) return;
    var nombre = NOMBRE_IN.value.trim();
    var pesoStr = PESO_IN.value.trim();
    var adopcionStr = ADOPCION_IN.value.trim();
    var esCorrecto = true;
    if(nombre.length < 3) {
        alert('El nombre debe contener más de 5 caracteres.');
        esCorrecto = false;
    }
    if(!comprobarPeso(pesoStr)) {
        alert('El peso debe ser un número entero y no puede estar vacio.');
        esCorrecto = false;
    }
    if(!comprobarFecha(adopcionStr)) {
        alert('La fecha tiene que tener el formato correcto y no puede ser posterior a la fecha actual.');
        esCorrecto = false;
    }
    if(!esCorrecto) return;
    var peso = parseInt(pesoStr);
    var adopcion = transformarFecha(adopcionStr);
    var mascota = new Mascota(nombre, peso, adopcion);
    MASCOTAS.push(mascota);
    alert(nombre + ' creado con éxito.');
    if(indiceActual !== undefined) indiceActual++;
    else indiceActual = 0;
    actualizarDatos();
}

function eliminarMascota() {
    var acepta = confirm('¿Estás seguro de que quieres eliminar? La acción es irreversible.');
    if(indiceActual !== undefined && acepta) {
        MASCOTAS.pop(indiceActual);
        indiceActual--;
        if(indiceActual < 0) indiceActual = MASCOTAS.length - 1 > -1 ? MASCOTAS.length : 0;
        actualizarDatos();
    }
}

function primeraMascota() {
    indiceActual = 0;
    actualizarDatos();
}

function anteriorMascota() {
    if(indiceActual !== undefined) {
        indiceActual--;
        if(indiceActual < 0) indiceActual = MASCOTAS.length - 1 < 0 ? 0 : MASCOTAS.length - 1;
        actualizarDatos();
    } else indiceActual = 0;
}

function siguienteMascota() {
    if(indiceActual !== undefined) {
        indiceActual++;
        if(indiceActual > MASCOTAS.length - 1) indiceActual = 0;
        actualizarDatos();
    } else indiceActual = 0;
}

function ultimaMascota() {
    indiceActual = MASCOTAS.length - 1 > -1 ? MASCOTAS.length - 1 : 0;
    actualizarDatos();
}

function listarMascotas() {
    crearTabla(MASCOTAS);
}

function listarActual() {
    if(mascotaActual) crearTabla([mascotaActual]);
    else alert('Selecciona primero una mascota.');
}

function comprobarPeso(pesoStr) {
    var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var esValido = pesoStr.trim().length > 0; //Empiezo validando que haya metido algo, aunque no sea un número.
    var i = 0;
    while(i < pesoStr.length) {
        if(!numeros.includes(pesoStr[i])) {
            esValido = false;
            break;
        }
        i++;
    }
    return esValido;
}

function comprobarFecha(fechaStr) {
    var datos = fechaStr.split('/');
    if(datos.length != 3) return false;
    var fecha = new Date(datos[2] + '-' + datos[1] + '-' + datos[0]);
    if(isNaN(fecha)) return false; //La función isNaN si vale para comprobar si la fecha se ha creado bien, si los datos fuesen incrrectos esta funcón lo comprueba.
    return fecha.getTime() < new Date().getTime();
}

function transformarFecha(fechaStr) {
    var datos = fechaStr.split('/');
    return new Date(datos[2] + '-' + datos[1] + '-' + datos[0]);
}

function formatoFechaPresentacion(fecha) {
    return fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
}

function actualizarDatos() {
    mascotaActual = MASCOTAS[indiceActual];
    if(mascotaActual) {
        NOMBRE_IN.value = mascotaActual.nombre;
        PESO_IN.value = mascotaActual.peso;
        ADOPCION_IN.value = formatoFechaPresentacion(mascotaActual.adopcion);
    }
}

function crearTabla(mascotas) {
    var ventana = window.open('', '_blank', 'width=600px,heigth=600px');
    var html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Lista Mascotas</title>
</head>
<body>
<table>
<thead>
    <tr>
        <th>Nombre</th>
        <th>Peso</th>
        <th>Fecha de Adopción</th>
        <th>Edad</th>
    </tr>
</thead>
<tbody>
    `;
    for(var i = 0; i < mascotas.length; i++) {
        var mascota = mascotas[i];
        html += `
        <tr>
            <td>${mascota.nombre}</td>
            <td>${mascota.peso}Kg</td>
            <td>${formatoFechaPresentacion(mascota.adopcion)}</td>
            <td>${mascota.edad()}</td>
        </tr>
        `;
    }

    html += '<input type="button" value="Cerrar Ventana" onclick="window.close()"></tbody></table></body>';
    ventana.window.document.write(html);
    ventana.window.document.close();
}