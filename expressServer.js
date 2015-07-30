// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });



var express = require('express');
var app = express();
var server = require('http').createServer(app);

// app.use(express.static(process.cwd() + '/public'));

app.get('/', function(request, response){
  response.sendfile('index.html')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;