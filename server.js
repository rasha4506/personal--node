var http = require('http');
var fs = require('fs')
http.createServer(function(req, res){
    fs.readFile('portfolio.html', function(err, data) {
        if (data) {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        }
    });
}).listen(4040);