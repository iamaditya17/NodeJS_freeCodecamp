//File System Module -->fs module(async)

//async --> Asynchronous

//Here we need to pass a callback method ; the callback metod will be called when we are done. eg: addEventListener()

const { readFile, writeFile } = require('fs');

readFile('./content/first.txt','utf8',(err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        const first = result;
        readFile('./content/first.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            const second = result;
            writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            })
        })
    }
}) // Hello this is first text file !!
