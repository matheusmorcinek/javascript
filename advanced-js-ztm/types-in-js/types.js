//primitive types - it's a data that only represents a single value;
console.log(typeof 5);
console.log(typeof 'la la la');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol('hehehe'));


//NON-primitive
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// Array.isArray([])
// true
// Array.isArray({})
// false
// typeof {}
// 'object'
// typeof []