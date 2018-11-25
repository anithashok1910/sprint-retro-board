const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var logger = require("morgan");
const staticFilesPath = "./node_modules/storm-breaker-app"
app.use(logger('combined'));

app.use(express.static(path.join(__dirname, staticFilesPath)));



app.get('/health', function (req, res) {
 return res.send('up');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, staticFilesPath, 'index.html'));
});

app.listen(process.env.PORT || 8080);