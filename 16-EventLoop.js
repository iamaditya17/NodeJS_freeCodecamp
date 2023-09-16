// in Event loop the Js will run first all the immediate code/task that are available then it will run the callback methods. It is used for offloading.

const { readFile } = require('fs')

console.log('Started a first task');
//CHECK FILE PATH !!!

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result)
    console.log('Completed First task')
})
console.log('Starting 2nd task');
//-----Output-----//

/* Started a first task
Starting 2nd task
Hello this is first text file !!
Completed First task
*/

//Here the immediate available tasks are executed first then the callback methods executed.


//-------Another Example--------//

// Started OS process
console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0)

console.log('Third');
//Completed & exited OS process

//-----Output-----//
/*  First
    Third
    Second */
