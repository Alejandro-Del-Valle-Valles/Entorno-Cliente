export class Human {

    static #RANGE_CATEGORIES = [
        {min: 10, max: 11, category: 'Benjamín'},
        {min: 12, max: 13, category: 'Alevín'},
        {min: 14, max: 15, category: 'Infantil'},
        {min: 16, max: 17, category: 'Cadete'},
        {min: 18, max: 19, category: 'Junior'},
        {min: 20, max: 29, category: 'Senior 20'},
        {min: 30, max: 39, category: 'Senior 30'},
        {min: 40, max: 49, category: 'Senior 40'},
        {min: 50, max: 59, category: 'Senior 50'},
        {min: 60, max: 69, category: 'Senior 60'},
        {min: 70, max: 79, category: 'Senior 70'},
    ];
    
    constructor(name, weight, age) {
        this.name = name;
        this.weight = weight;
        this.age = age;
    }

    set name(name) {
        this._name = name.trim();
    }

    get name()  {
        return this._name;
    }

    set weight(weight) {
        this._weight = weight > 0 ? weight : 1;
    }

    get weight() {
        return this._weight;
    }

    set age(age) {
        this._age = age >= 0 ? age : 0;
    }

    get age() {
        return this._age;
    }

    eat() {
        this._weight++;
    }

    run() {
        this._weight--;
        if(this._weight == 0) this._weight = 0;
    }

    category() {
        const range = Human.#RANGE_CATEGORIES.find(
            range => this.age >= range.min && this.age <= range.max
        );

        return range?.category ?? 'Fuera de categoría';
    }
}