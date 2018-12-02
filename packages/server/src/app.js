var express = require('express');
const path = require('path');
var logger = require("morgan");
const staticFilesPath = "../node_modules/storm-breaker-app"

var app = express();
app.use(logger('combined'));
app.use(express.static(path.join(__dirname, staticFilesPath)));

app.get('/health', function (req, res) {
 return res.send('up');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, staticFilesPath, 'index.html'));
});

module.exports = app;