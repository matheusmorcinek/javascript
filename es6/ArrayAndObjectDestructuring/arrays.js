const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4, 5, 6];

const [a, b] = alphabet;
console.log(a, b);

//skip the second element
const [firstElement, , thirdElement] = alphabet;
console.log(firstElement, thirdElement);

//the second element and the rest of elements
const [, secondElement, ...rest] = alphabet;
console.log(secondElement, rest);

//combining two arrays with the destructuring and spread operator
const newArray = [...alphabet, ...numbers];
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b];
}

const [sumResult, multiplyResult, divisionResult = 'No division'] = sumAndMultiply(2, 3);
console.log('sum result: ', sumResult);
console.log('multiply result: ', multiplyResult);
console.log('division result: ', divisionResult);