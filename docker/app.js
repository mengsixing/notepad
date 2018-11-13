var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('dist');

// 开启静态资源服务
var server = http.createServer(function onRequest(req, res) {
    serve(req, res, finalhandler(req, res));
});

server.listen(8083);

console.log('server is running at 127.0.0.1:8083.');
