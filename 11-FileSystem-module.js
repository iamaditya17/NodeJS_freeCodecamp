//File System Module -->fs module(sync)

//sync --> synchronous

const { readFileSync, writeFileSync } = require('fs');

//To read the content of a file --> we need to pass it's path to the readFileSync function

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first) //Hello this is first text file !!
console.log(second); //Hello this is second text file !!

// in writeFileSync() we first pass the path of the file where the content will be written then we pass the content that should be written. 

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);

//here if it finds the given file is not there then it will create a file with given name and if there are some contents already then it will override those contents with the new contents.