//The browser rqst to the server through HTTP protocol.
//HTTP is a stateless protocol bcuz when a transaction ends then the connection between server and browser will also be lost.

const http = require('http');

//Here we are creating a server and passing 2 parameters as Request,Response
// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.write('Welcome to our home page') 
//     res.end()
// })

// server.listen(4000) //it means the server will listen to port 5000 ; For executing this go to browser & search localhost:4000


//There were total 4 types of inbuilt modules are there in the Node JS & they are : i) OS ii) Path iii) FS iv) HTTP

const server1 = http.createServer((req, res) => {
    if (req.url === '/') // if the rqst is coming to home page
    {
        res.end("Welcome to our Home page");
    }
    if (req.url === '/about')
    {
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href= "/">Back to home page</a>
    `)
})

server1.listen(5000)