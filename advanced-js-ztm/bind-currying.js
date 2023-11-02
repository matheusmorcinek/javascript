function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3));

const multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(3));