var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var stream = fs.createReadStream('.' + request.url);
    //var stream2 = fs.createStream('styles.css');
    //stream.pipe(stream2).pipe(response);
    stream.pipe(response);
});

server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function() {
    console.log('ahora si estoy escuchando');
});