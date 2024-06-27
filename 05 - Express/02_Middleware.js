Code : 

const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log("Hello1");
    next();//IMP To Pass It To Next MiddleWare In Line
})

app.use((req,res,next) => {
    console.log("Hello2");
    next();
})

app.listen(3000);