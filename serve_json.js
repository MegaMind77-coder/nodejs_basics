var http = require('http');
var fs = require('fs');

var readstream = fs.createReadStream(__dirname + '/read.txt', 'utf8');

var server =  http.createServer(function(req, res){

    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var ishan = {
        'name' : 'ishan ',
        'job' : 'coder',
        'age' : 19,
    }
    if(req.url === '/home' || req.url === '/'){
        res.end(JSON.stringify(ishan));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("hahahahahah");
    }
});

server.listen(3000, '127.0.0.1');
