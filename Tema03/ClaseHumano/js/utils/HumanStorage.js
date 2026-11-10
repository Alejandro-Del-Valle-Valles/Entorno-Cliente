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

    static count() {
        return this.#HUMANS.length;
    }

    static getAll() {
        return this.#HUMANS;
    }

    static getByIndex(index) {
        return index > this.count() - 1 || index < 0
            ? null    
            : this.#HUMANS[index];
    }

    static getByName(name) {
        return this.#HUMANS.find(h => h.name == name);
    }

    static createHuman(human) {
        var created = false;
        var index = this.#HUMANS.indexOf(h => h.name == human.name);
        if(index == -1) {
            this.#HUMANS.push(human);
            created = true;
        }
        return created;
    }

    static updateHuman(human) {
        var updated = false;
        var index = this.#HUMANS.indexOf(h => h.name == human.name);
        if(index > -1) {
            this.#HUMANS[index] = human;
            updated = true;
        }
        return updated;
    }

    static deleteHuman(name) {
        var deleted = false;
        var index = this.#HUMANS.indexOf(h => h.name == name);
        if(index > -1) {
            this.#HUMANS.pop(index);
            deleted = true;
        }
        return deleted;
    }
}