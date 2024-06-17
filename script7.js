const foo = () =>{
    console.log(this.name); // returns undefined
}
foo.call({name: 'bar'});

function boo() { 
    console.log(this.name); // returns bar
    const any = () =>{
        console.log(this.name); // returns bar bcoz "this" scope inside a arrow function refers to its parent scope
    }
}
boo.call({name: 'bar'});

const details = {
    id: 123,
    name : "johd doe",
    age : 25,
    gender : "male",
    phone : 1234567890,
    email : "johd doe",
    address : {
        city : "new york",
        state : "new york",
        country : "usa"
    }
}

// to freeze a property we can use Object.defineProperty instead of Object.freeze
// Object.freeze(details.id);
Object.defineProperty(details, 'id', {
    value: details.id,
    writable: false, // Make the property read-only
    configurable: false // Make the property non-configurable
});

// or

// Define getter function for 'id'
// Object.defineProperty(details, 'id', {
//     get: function() {
//         return this._id;
//     }
// });
details.id = 155;
details.name ="some name";
console.log(details);
