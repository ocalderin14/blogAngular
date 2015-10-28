var express = require('express');
var app = express();
app.use(express.static('public'));

app.use(
        "/",
        express.static(__dirname) 
);



app.set('port', process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 3000, function(){
	var host = server.address().address;
	var port = server.address().port;	
});

