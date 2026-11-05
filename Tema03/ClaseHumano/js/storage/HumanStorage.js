import { Human } from "../model/Human.js";

export class HumanStorage {
    static #HUMANS = [];

    static list() {
        var html =`
            <table>
                <thead>
                    <tr>
                        <th><b>Nombre</b></th>
                        <th><b>Peso</b></th>
                        <th><b>Edad</b></th>
                        <th><b>Categoría</b></th>
                    </tr>
                </thead>
                <tbody>
        `;
        for(const human in this.#HUMANS) {
            if(!human instanceof Human) return
                html += `
                    <tr>
                        <td>${human.name}</td>
                        <td>${human.weight}</td>
                        <td>${human.age}</td>
                        <td>${human.category()}</td>
                    </tr>
                `;
            }
        html += '</tbody></table>';
        return html;
    }

    static showPerson(human) {
        if(!human instanceof Human) return;
        return `
            <table>
                <thead>
                    <tr>
                        <th><b>Nombre</b></th>
                        <th><b>Peso</b></th>
                        <th><b>Edad</b></th>
                        <th><b>Categoría</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${human.name}</td>
                        <td>${human.weight}</td>
                        <td>${human.age}</td>
                        <td>${human.category()}</td>
                    </tr>
                </tbody>
            </table>`;
    }
}