myFunction();

//function declaration
function myFunction() {

    console.log('This is my first function');
};

myFunction();

// mySecondFunction();

//function expression
var mySecondFunction = () => {

    console.log('This is my second function');
};

mySecondFunction();

//In the first example, the function can be called at the beginning of the script. In the second, only after its initialization.