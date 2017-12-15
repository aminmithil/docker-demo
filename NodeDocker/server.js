var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.send('Hello Mithil');
});

app.post('/mithil', function(req, res) {
	console.log(req.body);
	res.send(req.body);
});

app.listen(8081, function() {
	console.log('Magic listen on 8081');
}); 
