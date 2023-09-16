// GLOBALS - NO WINDOW !!!!

//Node JS doesn't run on Browser

// __dirname - path to current directory
//__filename - file name
// require - function to use the modules (CommonJS)
// module - info about the current module (file)
// process - info about the environment where the program is being executed

console.log(__dirname);  //D:\Node JS (Free codecamp

console.log(__filename); //D:\Node JS (Free codecamp\app.js

setInterval(() => {
    console.log("Hello World !!");
},1000)    //this will print Hello world after each 1000ms(1 sec) for infinite times