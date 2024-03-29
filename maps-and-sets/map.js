//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//Saturday todo list
// 8am Walk the dogs
// 12pm Lunch
// 3pm Watch a movie


//Creating a new Map() and add todo as a key-value pair
const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'launch');
saturday.set(3, 'watch a movie');

console.log(saturday);

const noon = saturday.get(12);
console.log('What am I doing at 12pm on Saturday:', noon);


const hasFour = saturday.has(4);
console.log('Does our map have four?', hasFour);

const hasEight = saturday.has(8);
console.log('Does our map has eight?', hasEight);


const saturdaySize = saturday.size;
console.log(`my map contains ${saturdaySize} elements.`);

// console.log('did my key-value pair successfully delete - 3?', saturday.delete(3));

// console.log('did my key-value pair successfully delete - 10?', saturday.delete(10));

// saturday.clear();
// console.log('Map size: ', saturday.size);


const saturdayKeys = saturday.keys();
const firstKey = saturdayKeys.next().value;
console.log('The first key in our saturday map is: ', firstKey);

const saturdayValues = saturday.values();
saturdayValues.next();
const secontValue = saturdayValues.next().value;
console.log('The second value in our saturday map is: ', secontValue);


//entries, returns an interator object that contains the key-value pairs of each element
const saturdayEntries = saturday.entries();
saturdayEntries.next();
saturdayEntries.next();
const thirdEntry = saturdayEntries.next();
console.log('what is the third entry on our map? ', thirdEntry.value);

saturday.forEach((value, key) => {
    if (key === 12) {
        console.log(`It's time for ${value}`);
    }
});