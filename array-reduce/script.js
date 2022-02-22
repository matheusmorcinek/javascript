const items = [
    { name: 'Rice', price: 5 },
    { name: 'Book', price: 20 },
    { name: 'Chicken', price: 10 },
    { name: 'Monitor', price: 100 }
];

//The reduce method basically takes an array of values and reduces it down to one single value.

//it takes two parameters, the first is an arrow function and the second is our starting point..
const result = items.reduce((total, item) => {
    return total + item.price;
}, 0);

console.log('total price: ', result);

//The within function can takes four params:
// Acumulator (acc)
// Current value (cur)
// Current Index (idx)
// Original array (src)