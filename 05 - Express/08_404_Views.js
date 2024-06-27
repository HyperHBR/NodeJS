const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended : false})); //So Use Can Extra Data From HTML Body

//Routes
const adminRoutes = require('./routes/adminRoutes');
const consumerRoutes = require('./routes/consumerRoutes');

app.use('/admin',adminRoutes);  // <-------------------
app.use(consumerRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3001);