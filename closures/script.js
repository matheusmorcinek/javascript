function outerFunction(outerValue) {

    return function innerFunction(innerValue) {

        //the inner function has access to the variables and scope of the outer function
        
        console.log(`outer value: ${outerValue}`);
        console.log(`inner value: ${innerValue}`);
    }
}

let newFunction = outerFunction('outside');

newFunction('inside');