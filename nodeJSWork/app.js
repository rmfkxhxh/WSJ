var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('hello World!!!');
}).listen(8080);

console.log("Create Server listen to 8080");