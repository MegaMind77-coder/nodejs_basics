var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

var server =  http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readstream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
    readstream.pipe(res);

});

server.listen(3000, '127.0.0.1');
