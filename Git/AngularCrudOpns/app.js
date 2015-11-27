
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , getData = require('./routes/getData')
  , http = require('http')
  , path = require('path')
  , bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json())

// all environments
app.set('port', process.env.PORT || 9999);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.use('/getData',getData);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
