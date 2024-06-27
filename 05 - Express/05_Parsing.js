Code:

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : false})); //So Use Can Extra Data From HTML Body

app.use('/AddName',(req,res,next) => {
    res.send("<html><form action='/NameAdded' method='POST'><input type='text'><button type='submit'>Add Name</button></form></html>")
})

//Works Only For Post Request
app.post('/NameAdded',(req,res,next) => {
    res.send
    res.send("<h1>Name Added</h1>");
})

app.use('/',(req,res,next) => {
    res.send("<h1>Hello From Express.js</h1>");
})

app.listen(3001);