/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , https = require('https')
  , fs = require('fs')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

/*
 * desc : open http / https server 
 */
var port = { "http" : 8080, "https" : 443 }
, allowService = { "http" : true, "https" : false };

if ( allowService["http"] ) {
  http.createServer(app).listen(port["http"], function(){
    console.log('http listening on port ' + port["http"]);
  });
}

if ( allowService["https"] ) {
  var options = {
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('cert.pem'),
    ca: fs.readFileSync('chain.pem')
  };

  https.createServer(options, app).listen(port["https"], function(){
    console.log('https listening on port ' + port["https"]);
  });
}