const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json()); //Parse Json Object
app.use(router);

module.exports = app;