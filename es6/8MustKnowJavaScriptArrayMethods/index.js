const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

const filteredItems = items.filter(item => item.price <= 100);
console.table(filteredItems);

const itemNames = items.map(item => item.name);
console.table(itemNames);

const book = items.find(item => item.name === 'Book');
console.log(book);

// at least one item is cheaper than 10?
const hasInexpensiveItems = items.some(item => item.price <= 10);
console.log('has inexpensive items: ', hasInexpensiveItems);

// every single item falls under that. every item in the array is less than 100?
const areAllItemsCheap = items.every(item => item.price <= 100);
console.log('areAllItemsCheap', areAllItemsCheap);

// reduce method will be doing some operation on the array, and returning a combination of all those operations
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log('total price: ', totalPrice);

const numbersArray = [1, 2, 3, 5];
const includesFour = numbersArray.includes(4);
console.log(numbersArray);
console.log('includes four: ', includesFour);