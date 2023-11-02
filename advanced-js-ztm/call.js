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

wizard.heal.call(archer);

console.log(archer);