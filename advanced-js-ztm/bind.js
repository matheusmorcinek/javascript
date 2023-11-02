//ex 1

const wizard = {
    name: 'gandalf',
    mana: '100',
    health: '50',
    heal() {
        console.log(`... healing ${this.name}`);
        return this.health = 100;
    }
};

console.log(wizard);
wizard.heal();
console.log(wizard);


const archer = {
    name: 'legolas',
    mana: 50,
    health: 30
};

console.log(archer);

const healArcher = wizard.heal.bind(archer);

console.log(archer);

healArcher();

console.log(archer);




// ex 2

const obj = {
    name: 'Matheus',
    sing() {
        console.log('lalala ', this);
        var anotherFunction = function () {
            console.log('ulelele ', this)
            return
        }
        // anotherFunction();
        return anotherFunction.bind(this);
    }
}

// obj.sing();
obj.sing()();