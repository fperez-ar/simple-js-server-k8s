const http = require('http-status-codes');
const express = require('express');
const config = require('./config');
const app = express();

app.get('/', function (req, res) {
  res.status(http.OK).send(`app ${process.pid}`);
});

app.listen(config.port, function () {
  console.log('app %s listening at port %s', process.pid, config.port);
});
