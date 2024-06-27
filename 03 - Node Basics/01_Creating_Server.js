// Importing The Required Module
const http = require('http');

//Creates An HTTP Server
const server = http.createServer((req,res) => {
    console.log(req);
})

//Listens On Port 3000
server.listen(3000);