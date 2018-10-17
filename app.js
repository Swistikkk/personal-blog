var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);