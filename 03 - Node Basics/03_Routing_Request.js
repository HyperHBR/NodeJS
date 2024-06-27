// Importing The Required Module
const http = require('http');

//Creates An HTTP Server
const server = http.createServer((req,res) => {
    const url = req.url;
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
server.listen(3002);