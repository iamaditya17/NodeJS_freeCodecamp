// NPM : Node Package Manager
//Through this we can use other developer's code in our code by simply adding it to our code.

// For adding refer to the npm documentation

// npm - global command, comes with node
// npm --version : use this command to see the version of your npm.


// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> ( for mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init-y (everything default)
// npm i lodash : this command is used to load the dependencies/lodash

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)

console.log(newItems);  //[ 1, 2, 3, 4 ]

//.gitignore is a file which specify which files can be ignored while pushing  to the repositery.
// REPL -----> REPL means Read Evaluation Print Loop