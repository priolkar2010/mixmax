var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var https = require('https');
var port = process.env.PORT || 9443;
var cors = require('cors');
var fs  = require('fs');

var privateKey   = fs.readFileSync('certs/yelpintegration.key', 'utf8');
var certificate  = fs.readFileSync('certs/yelpintegration.crt', 'utf8');
var credentials  = {key: privateKey, cert: certificate};

// Had to do cors, so that the mixmax app can call this app from the browser also started this server on https for the same reason
var corsOptions = {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
};

app.get('/typeahead', cors(corsOptions), require('./routes/api/typeahead'));
app.get('/resolver', cors(corsOptions), require('./routes/api/resolver'));


var server = https.createServer(credentials, app);

server.listen(port, function(){
    console.log("https server started on port: %s ", port);
});

module.exports = app;
