// Importing The Required Module
const http = require('http');
const routes = require('./routes');

//Creates An HTTP Server
const server = http.createServer((req,res) => {
    routes.routesHandler();
})

server.listen(3005);