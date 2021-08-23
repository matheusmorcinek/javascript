const newYork = {city: "New York"};
const nola = {city: "New Orleans"};
const chicago = {city: "Chicago"};
const losAngeles = {city: "Los Angeles"};

//Create a WeakMap using the provided variables as keys.
//Set the value to whatever term you think of when you hear
//those cities. The value can be anything. Hint: use set()

const cities = new WeakMap();
cities.set(newYork, '🗽');
cities.set(nola, '⚜');
cities.set(chicago, '🐂');
cities.set(losAngeles, '🏙');

//Get the value associated with the key: nola.

console.log(cities.get(nola));

//Get the value associated with the key: dallas.
const dallas = {city: "Dallas"};

console.log(cities.get(dallas));

//Does this WeakMap have the key: newYork?

console.log('NY: ', cities.has(newYork));

//Delete the following key from your WeakMap: chicago

console.log(cities.delete(chicago));