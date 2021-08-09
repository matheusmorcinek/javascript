const personOne = {
    name: 'Matheus',
    age: 30,
    // favoriteFood: 'Lasagna',
    address: {
        city: 'somewhere',
        state: 'one of them'
    }
};

const personTwo = {
    name: 'Bruna',
    age: 27,
    address: {
        city: 'somewhere else',
        state: 'another one of them'
    }
};

const { name, age, address: { city } } = personTwo;
console.log(name, age, city);

const { name: firstName, address, favoriteFood = 'Hamburguer' } = personOne;
console.log(firstName, address, favoriteFood);



const personThree = {
    name: 'Fernanda',
    age: 30,
    address: {
        city: 'somewhere else',
        state: 'another one of them'
    }
};

const personFour = {
    age: 26,
    favoriteFood: 'Pizza'
};

const person = { ...personThree, ...personFour };
console.log(person);

function printUser({ name, age, favoriteFood = 'Watermelon' }) {
    console.log(`name: ${name}, age: ${age}, favorite food: ${favoriteFood}`);
}

printUser(person);