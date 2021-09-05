const http = require('http');
const port = 8080;

const requestListenner = function(req,res){
    res.writeHead(206);
    res.end(port.toString());
}
const server = http.createServer(requestListenner);
server.listen(port);