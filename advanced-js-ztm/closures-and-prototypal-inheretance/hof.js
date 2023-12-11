// const multiplyBy = (multiplicand) => {
//     return function(multiplier) {
//         return multiplicand * multiplier;
//     };
// }

const multiplyBy = (multiplicand) => (multiplier) => multiplicand * multiplier;

const multiplyByTwo = multiplyBy(2);

const product = multiplyByTwo(5);

console.log(product);

const multiplyByThree = multiplyBy(3);

const product2 = multiplyByThree(5);

console.log(product2);