//Path module - it is a inbuilt module which allows the user to interact with the file path.

const path = require('path')

//Path separator
console.log(path.sep); //  \

//Joining a file path
const filePath = path.join('content/', 'subFolder', 'test.txt');

console.log(filePath); // content\subFolder\test.txt

//Getting the basename of the filepath
const base = path.basename(filePath);
console.log(base);  // test.txt

//Resolve the absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subFolder', 'test.txt');

console.log(absolutePath);  //D:\Node JS (Free codecamp\content\subFolder\test.txt

/*----Explore more about Path module in the documentation-----*/