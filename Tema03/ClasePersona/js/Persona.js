export class Persona {

    __constructor(name, surname, direction, bornDate, gender, code) {
        this.name = name;
        this.surname = surname;
        this.direction = direction;
        this.bornDate = bornDate;
        this.gender = gender;
        this.code = code;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get surname() {
        return this._surname;
    }

    set surname() {
        this._surname = this.surname;
    }

    get direction() {
        return this._direction;
    }

    set direction(newDirection) {
        this._direction = newDirection;
    }

    get bornDate() {
        return this._bornDate;
    }

    set bornDate(newBornDate) {
        this._bornDate = newBornDate;
    }

    get gender() {
        return this._gender;
    }

    set gender(newGender) {
        this._gender = newGender;
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = newCode;
    }

    //TODO: Métodos señor señora y obtener edad
}