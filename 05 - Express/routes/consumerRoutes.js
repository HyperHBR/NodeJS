const path = require('path');

const express = require('express');

const rootDir = require('../util/rootPath');

const routes = express.Router();

routes.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports = routes;