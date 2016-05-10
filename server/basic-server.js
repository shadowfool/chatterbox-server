var dataObject = {};
dataObject.results = [{'username': 'james', 'text': 'hehe'}];

var headers = defaultCorsHeaders;
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var http = require('http').Server(app);

app.use(express.static('/Users/student/Desktop/2016-04-chatterbox-server/client/'));

app.get('/', function(req, res) {
  res.sendFile('/Users/student/Desktop/2016-04-chatterbox-server/client/index.html');
});

app.get('/classes/messages', function(req, res) {
  res.writeHead(200, headers);
  res.end(JSON.stringify(dataObject));
});

app.post('/send', function(req, res) {
  res.writeHead(201, headers);
  dataObject.results.push(req.body);
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});