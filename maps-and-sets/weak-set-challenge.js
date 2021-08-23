//Survey Respondents
const resOne = { id: 1234 };
const resTwo = { id: 5678 };
const resThree = { id: 9012 };
const resFour = { id: 3456 };

//Create a new WeakSet and add the above values to your newly created WeakSet. 
const results = new WeakSet();
results.add(resOne);
results.add(resTwo);
results.add(resThree);
results.add(resFour);

//Does your WeakSet have any responses tied to the {id: 9012}?

console.log('Does your WeakSet have any responses tied to the {id: 9012}? ', results.has(resThree));

//Does your WeakSet have any responses tied to the {id: 0123}?

console.log('Does your WeakSet have any responses tied to the {id: 0123}?', results.has({ id: 0123 }));

//We need to delete resThree from the WeakSet.

results.delete(resThree);
console.log(results.has(resThree));