const { bitu, situ } = require('./4-firstModule');  //destructuring

const sayHi = require('./5-utils');

console.log(bitu);  //Bitu
console.log(situ);   //Situ

sayHi('Aditya');  //Hello Aditya how are you ?
sayHi(bitu);  //Hello Bitu how are you ?
sayHi(situ);  //Hello Situ how are you ?


/* import from 7-alternative-syntax file*/

const data = require('./7-alternative-syntax')

console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

/* if we use like this

const names = require('./4-firstModule');

then in the function call we have to pass like this

sayHi(names.bitu);
sayHi(names.situ);

*/

//if inside the module/file we have a function then we can import/require that module without assigning it to a variable

require('./8-mind-Grenade');  //The sum is: 30
