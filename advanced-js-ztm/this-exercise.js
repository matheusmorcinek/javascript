const a = {
    name: 'Matheus',
    say() {
        console.log(this);
    }
};

const b = {
    name: 'Bruna',
    say() {
        return function () {
            console.log(this)
        }
    }
};

const c = {
    name: 'Fefa',
    say() {
        return () => console.log(this);
    }
};


a.say();
b.say()();
c.say()();


// In the lexical scope, "this" is determined by where the function is defined.
// Regular functions have their own "this" context, which can change when they are called.
// Arrow functions capture "this" from their surrounding lexical scope and maintain that context.