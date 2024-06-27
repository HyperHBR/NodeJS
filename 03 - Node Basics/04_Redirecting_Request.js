// Importing The Required Module
const http = require('http');
const fs = require('fs');

//Creates An HTTP Server
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url == '/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My First Response</title>');
        res.write('</head>');
        res.write('<body>');
        res.write("<form action='/message' method='POST'>");
        res.write("<input type='text' name='message'>");
        res.write("<button type='submit'>Send</button>");
        res.write("</form>");
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };
    if(url == '/message' && method=='POST'){
        fs.writeFileSync('04Text.txt',"DUMMY");
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.write('<html>');
    res.write('<head>');
    res.write('<title>My First Response</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>My First Node.js Server Response</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})

//Listens On Port 3000
server.listen(3004);