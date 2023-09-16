const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end("HOME PAGE")  
    }
    if (req.url === '/about')
    {
        //BLOCKING CODE
        for (let i = 0; i < 1000; i++)   
        {
            for (let j = 0; j < 1000; j++)
            {
                console.log(`${i} ${j}`);
            }
        }
        res.end("ABOUT PAGE")
    }
    
})

server.listen(5000, () => {
    console.log("Server is listening on port 5000.....")
})   //This will run first bcuz listen() is asynchronous