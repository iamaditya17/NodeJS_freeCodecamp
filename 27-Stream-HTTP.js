const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf8');
    res.end(text)  //the content of big.txt file will be displayed on the webpage
    
}).listen(5000);