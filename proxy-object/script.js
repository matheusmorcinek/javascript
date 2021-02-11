//The proxy object will observe an instance, and each time that instance is modified the proxy will execute a custom function
//in other words, the proxy is an event listener...

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const COUNT_VALUE = 10;

let handler = {

    set: (currentContext, property, newValue) => {

        console.log(`\nsetting a new value`);
        console.log({ currentContext, property, newValue });

        currentContext[property] = newValue;

        return true;
    },
    get: (currentContext, property) => {

        console.log(`getting ${property} value: ${currentContext[property]}`);
        return currentContext[property];
    }
};

const counter = new Proxy({

    name: 'counter',
    value: COUNT_VALUE
}, handler);

console.log(counter);
console.log(counter.value);
console.log(counter.name);

counter.value = 11;

