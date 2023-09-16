// STREAMS are used to read and write sequencially


/*STREAMS are of 4 types:

i) Readable : used to read the code sequencially
ii) Writeable : used to write the code sequencially
iii) Duplex : used to both read & write sequencially
iv) Transform : used to transform the data while reading or writing

*/

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 9000, encoding: 'utf-8' });

// default size of buffer 64KB
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark : 9000})
// const stream = createReadStream('./content/big.txt',{encoding : 'utf-8'})

stream.on('data', (result) => {
    console.log(result);
})