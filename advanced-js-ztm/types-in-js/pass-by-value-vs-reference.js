//primitive types - pass by value
//objects - pass by reference

var a = 1;
var b = a;

b++;

console.log(a); //1
console.log(b); //2
//this is because pass by value;


const obj1 = { name: 'Teemo', password: '123' };
const obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);
//this is because pass by reference;

//one possible solution when needed - es6;
const obj3 = { ...obj2 };
obj3.password = 'ulele';
console.log(obj1);
console.log(obj2);
console.log(obj3);

//one possible solution when needed - the old way;
const obj4 = Object.assign({}, obj1);
obj4.password = 'muahaha';
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);


//and we also have the same behaviour using arrays, because arrays are simply objects
const temp1 = [1, 2, 3, 4, 5];
const temp2 = temp1;

temp2.push(213243);

console.log(temp1);
console.log(temp2);

//one possible solution when needed - es6
const temp3 = [...temp2];
temp3.pop();
console.log(temp1);
console.log(temp2);
console.log(temp3);

//one possible solution when needed - old way
const temp4 = [].concat(temp2)
temp4.pop();
temp4.pop();
console.log(temp1);
console.log(temp2);
console.log(temp3);
console.log(temp4);


//important! each object gets passed by reference

const objTemp1 = { a: 1, b: 2, deep: { something: 'kek' } };
const objTemp2 = { ...objTemp1 };

objTemp2.deep.something = 'lol';

console.log(objTemp1);
console.log(objTemp2);

//the solution is copy every.. deep object
const objTemp3 = { ...objTemp1, deep: { ...objTemp1.deep } };
objTemp3.deep.something = 'lmao';

console.log(objTemp1);
console.log(objTemp2);
console.log(objTemp3);

//oorrr if the object is too big.. but a bad workaround with performance implications..
const objTemp4 = JSON.parse(JSON.stringify(objTemp1));
objTemp4.deep.something = 'kkkkk';
console.log(objTemp1);
console.log(objTemp4);