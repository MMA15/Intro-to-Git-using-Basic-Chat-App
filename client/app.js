var socket = io(); /*This is saying that socket is now a reference to the Socket.IO library.*/

$('form').submit(function(){
	var text = $('#message').val();
	var id = $('#initials').val();
	socket.emit('message', id + ' says: '+ text);/*The code above says to emit the textual message to the server instead of performing our temporary alert behaviour.*/
	$('#message').val(''); /* The second line in the code simply clears the input so that another message can be typed by the same user.*/	
	return false;
});

socket.on('message', function(msg){
	$('<li>').text(msg).appendTo('#history');
});