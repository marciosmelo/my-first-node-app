var express = require('express');

//create an express app
var app = express();

//create an express route for the home page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

//just to send a message
console.log('Server has started!');