import { checkValidCode, checkValidDate } from "./Utils.js";

export class Persona {

    constructor(name, surname, direction, bornDate, gender, code) {
        this.name = name;
        this.surname = surname;
        this.direction = direction;
        this.bornDate = bornDate;
        this.gender = gender; // IMPORTANT: true for male, false for female
        this.code = code;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        newName = newName.trim();
        this._name = newName === '' ? 'Desconcoido' : newName;
    }

    get surname() {
        return this._surname;
    }

    set surname(newSurname) {
        newSurname = newSurname.trim();
        this._surname = newSurname === '' ? 'Desconocido' : newSurname;
    }

    get direction() {
        return this._direction;
    }

    set direction(newDirection) {
        newDirection = newDirection.trim();
        this._direction = newDirection === '' ? 'Desconcodia' : newDirection;
    }

    get bornDate() {
        return this._bornDate;
    }

    set bornDate(newBornDate) {
        if(checkValidDate(newBornDate)) this._bornDate = new Date(newBornDate.trim());
        else {
            var today = new Date();
            today.setDate(today.getDate() - 1);
            this._bornDate = today;
        }
    }

    // IMPORTANT: true for male, false for female
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
        newCode = newCode.trim();
        this._code = newCode.length === 5 && checkValidCode(newCode) ? newCode : '00000';
    }

    age() {
        var today = new Date();
        var years = this.bornDate.getFullYear() - today.getFullYear();
        const bdayReached = this.bornDate.getMonth() < today.getMonth() ||
        (
            this.bornDate.getMonth() === today.getMonth() &&
            this.bornDate.getDate() <= today.getDate()
        );
        if(bdayReached) years--;
        return years;
    }

    pronom() {
        return this.gender ? 'Sr' : 'Sra';
    }
}