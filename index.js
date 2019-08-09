const express = require('express');
const app = express();
const port = 8080;
const homeRouter = require('./api/controller/home/home.router');

app.use('/', homeRouter);

app.listen(port, (err) => {
    console.log(err);
})