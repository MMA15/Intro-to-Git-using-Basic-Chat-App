/*console.log('hello from our node script!');shows this on our cmd termnial*/
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function(socket){
	socket.on('message', function(msg){
		io.emit('message', msg);
	});
});

server.listen(8080, '0.0.0.0', function(){
	console.log('Chat server running');
});