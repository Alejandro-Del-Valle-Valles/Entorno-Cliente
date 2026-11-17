export class PersonaStorage {
    static #PERSONS = [];

    static create(person) {
        var isCreated = false;
        if(!this.#PERSONS.some(p => p.name === person.name)) {
            this.#PERSONS.push(person);
            isCreated = true;
        }
        return isCreated;
    }

    static update(person, deadname) {
        var isUpdated = false;
        var indexPerson = this.#PERSONS.findIndex(p => p.name === deadname);
        if((person.name === deadname || !this.#PERSONS.some(p => p.name === person.name)) && indexPerson !== -1) {
            this.#PERSONS[indexPerson] = person;
            isUpdated = true;
        }
        return isUpdated;
    }

    static delete(name) {
        var isDeleted = false;
        var indexPerson = this.#PERSONS.findIndex(p => p.name === name);
        if(indexPerson !== -1) {
            this.#PERSONS.splice(indexPerson, 1);
            isDeleted = true;
        }
        return isDeleted;
    }

    static getByIndex(index) {
        return this.#PERSONS.length - 1 <= index ? this.#PERSONS[index] : undefined;
    }

    static getByName(name) {
        return this.#PERSONS.find(p => p.name === name);
    }

    static getAll() {
        return this.#PERSONS;
    }

    static count() {
        return this.#PERSONS.length;
    }
}