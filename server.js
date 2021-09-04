const http = require('http');
const port = process.env.port || 8080;

const requestListenner = function(req,res){
    res.writeHead(200);
    res.end('kocham Poznan');
} 
const server = http.createServer(requestListenner);
server.listen(port);