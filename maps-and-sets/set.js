//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

//Set is a collection of unique values, means that you cannot have duplicate values on this set.

//Ice Cream Flavor Suggestions
//chocolate
//vanilla
//coffee
//coffee
//strawberry
//vanilla

const iceCreamFlavors = new Set();

iceCreamFlavors.add('chocolate');
iceCreamFlavors.add('vanilla');
iceCreamFlavors.add('coffee');
iceCreamFlavors.add('coffee');
iceCreamFlavors.add('strawberry');
iceCreamFlavors.add('vanilla');

console.table(iceCreamFlavors);

console.log('Does the Set contains the following flavors:');
console.log('Mint chocolate chip: ', iceCreamFlavors.has('mint chocolate chip'));
console.log('Coffee: ', iceCreamFlavors.has('coffee'));

console.log('What is the size of the ice cream Set?');
console.log(iceCreamFlavors.size);

console.log(iceCreamFlavors.delete('vanilla'));
console.log('Does vanilla still exist?', iceCreamFlavors.has('vanilla'));

iceCreamFlavors.clear();
console.log('Did our set clear? ', iceCreamFlavors.size);