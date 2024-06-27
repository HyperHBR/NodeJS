const express = require('express');
const app = express();

/*
Note : For app.use() Not For app.get() 
'/' Will Handle Any Request Starting With '/'. Eg: '/','/ABC','/Hyper'......
'/Hyper' Will Handle Any Request Starting With '/'. Eg: '/Hyper','/HyperABC','/HyperHyper'......
*/

app.use('/',(req,res,next) => {  // <-------------------
    console.log("Hello Always");
    next();
})

app.use('/Hyper',(req,res,next) => {  // <-------------------
    console.log("Hello1");
    res.send("<h1>Hyper</h1>");
    //next(); //No Need Of Next Here Since If One Is Encountered No Need For Next
})

app.use('/',(req,res,next) => {  // <-------------------
    console.log("Hello2");
    res.send("<h1>Hello From Express.js</h1>");
})

app.listen(3000);