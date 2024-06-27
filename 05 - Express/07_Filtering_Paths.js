const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : false})); //So Use Can Extra Data From HTML Body

//Routes
const adminRoutes = require('./routes/adminRoutes');
const consumerRoutes = require('./routes/consumerRoutes');

app.use('/admin',adminRoutes);  // <-------------------
app.use(consumerRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile('<h1>PAGE NOT FOUND!</h1>');
})

app.listen(3001);