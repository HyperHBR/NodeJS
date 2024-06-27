
const fs = require('fs');

const routesHandler = (req,res) => {
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
        const body = [];
        //On Receiving Data Process It
        req.on('data' , (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        
        //Now After Completely Receiving It
        req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const msg = parsedBody.split('=')[1];
            fs.writeFileSync('05Text.txt',msg);
        })
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
}

// module.exports = routesHandler;

// module.exports.routesHandler = routesHandler;
// module.exports.text = "Hyper";

// module.exports = {
//     routesHandler : routesHandler,
//     text : "Hyper";
// }

exports.routesHandler = routesHandler;
exports.text = "Hyper";

