var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var winston = require('winston');

var app = express();

var page1 = require('./routes/page1');
var apppage2 = require('./routes/mypage2');

//set the app engine and default layout name
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

// view engine setup
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/page1', page1);
app.use('/page2', apppage2);

/*
// TODO this will require in production deployment
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

/*
// TODO add global error handling page for application
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

/*
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("NodeJS Application Demo\n");
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
*/


http.createServer(app).listen(app.get('port'), function(){
	winston.info('The server has started');
});

module.exports = app;
