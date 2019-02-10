/*console.log('hello from our node script!');shows this on our cmd termnial*/
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);
var user_log = [];

app.use('/', express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function(socket){
	socket.on('login', function(username, callback){
		if (user_log.includes(username)){
			callback(false);			
		} else{
			callback(true);
			user_log.push(username);
		}
	});
});

io.on('connection', function(socket){
	socket.on('message', function(msg){
		io.emit('message', msg);
	});
});

server.listen(8080, '0.0.0.0', function(){
	console.log('Chat server running');
});

