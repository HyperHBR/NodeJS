const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log("Hello1");
    next();//IMP To Pass It To Next MiddleWare In Line
})

app.use((req,res,next) => {
    console.log("Hello2");
    res.send("<h1>Hello From Express.js</h1>");  // <-------------------
})

app.listen(3000);