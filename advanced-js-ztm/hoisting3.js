// hoisting happen in EVERY execution context!!


var favouriteFood = 'sushi';

var foodThoughts = function() {
    console.log('Original favourite food ', favouriteFood);

    var favouriteFood = 'lasagna';

    console.log('New favourite food ', favouriteFood);
};

foodThoughts();


