export const DOM = {
    inputs: {
        deadname: document.getElementById('deadname'),
        name: document.getElementById('name'),
        weight: document.getElementById('weight'),
        age: document.getElementById('age')
    },

    navigation: {
        first: document.getElementById('first'),
        previous: document.getElementById('previous'),
        next: document.getElementById('next'),
        last: document.getElementById('last')
    },

    actions: {
        eat: document.getElementById('eat'),
        run: document.getElementById('run')
    },

    crud: {
        create: document.getElementById('create-btn'),
        update: document.getElementById('update-btn'),
        delete: document.getElementById('delete-btn'),
        list: document.getElementById('list-btn'),
        showSelectedPerson: document.getElementById('show-person-btn') 
    },

    controls: {
        other: document.getElementById('other-btn'),
        showPerson: document.getElementById('show-person-btn'),
        confirm: document.getElementById('confirm-btn'),
        cancel: document.getElementById('cancel-btn')
    }
};

export function buildTableWindows(humans) {
    var tableWindows = window.open('', '_blank', 'width=600px,heigth=600px');

    var table = `
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Edad</th>
                <th>Categoría</th>
            </tr>
        </thead>
        <tbody>
    `;
    humans.forEach(human => {
        table += `
            <tr>
                <td>${human.name}</td>
                <td>${human.weight}</td>
                <td>${human.age}</td>
                <td>${human.category()}</td>
            </tr>
        `;
    });

    table += '</tbody></table>';

    var html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tabla</title>
    </head>
    <body>
        ${table} 
        <button onclick="window.close()">Cerra Ventana</button>
    </body>
    </html>
    `;
    tableWindows.window.document.write(html);
    tableWindows.window.document.close();
}