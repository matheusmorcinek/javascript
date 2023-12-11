const person1 = {
    name: 'Matheus',
    level: 'admin'
};

const person2 = {
    name: 'Bruna',
    level: 'manager'
};

const giveAccessTo = (name) => {
    console.log('Acess granted to ' + name);
};

const verify = {
    admin: 500000,
    manager: 400000,
    user: 20000
};

const authenticate = (person) => {
    let arr = [];
    for (let index = 0; index < verify[person.level]; index++) {
        arr.push(index);
    };
    giveAccessTo(person.name);
};

function letPerson(person, fn) {
    return fn(person);
};

letPerson(person1, authenticate);