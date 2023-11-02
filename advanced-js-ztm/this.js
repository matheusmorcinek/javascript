// function a() { 
//     console.log('hello ', this);
// }

// a();


const singer = {
    name: 'matheus',
    sing: function() {
        console.log('lalala ', this.name);
    }
}

singer.sing();