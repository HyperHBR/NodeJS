const path = require('path');

const express = require('express');

const rootDir = require('../util/rootPath');

const routes = express.Router();

routes.get('/AddName',(req,res,next) => { //For Older Files Requests
    res.sendFile(path.join(rootDir,'views','admin.html'))
})

routes.get('/admin/AddName',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','admin.html'))
})

//Works Only For Post Request
routes.post('/NameAdded',(req,res,next) => { //For Older Files Requests
    res.send('<html><h1> Name Added </h1></html>');
})

//Works Only For Post Request
routes.post('/admin/NameAdded',(req,res,next) => { //Not Changing Again Whole Thing
    res.send('<html><h1> Name Added </h1></html>');
})

module.exports = routes;