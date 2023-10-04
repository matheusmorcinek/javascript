// exemple 1

// let myName = 'Matheus';

// function printName() {
//     console.log(myName);
// };

// myName = 'Bruna';

// printName();


// example 2

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ', outerVariable)
        console.log('Inner variable: ', innerVariable)
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');