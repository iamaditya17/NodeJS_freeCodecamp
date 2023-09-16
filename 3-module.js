// MODULES - Encapsulated Code (only share minimum)
// CommonJS (library), every file in Node is a module (by default)


const bitu = "Bitu"
const situ = 'Situ';

const sayHi = (name) => {
    console.log(`Hello ${name} how are you ?`);
}

sayHi('Aditya');  //Hello Aditya how are you ?
sayHi(bitu);  //Hello Bitu how are you ?
sayHi(situ);  //Hello situ how are you ?