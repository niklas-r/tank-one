var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
var commands = require('./commands')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// CORS
app.use(cors()); // include before other routes

// API
app.get('/', (req, res) => {
  res.send('Hello Tank Warriors!')
})

app.get('/info', (req, res) => {
  return res.json({
    name: 'tank-one',
    owner: 'Awesome people!'
  })
});

app.post('/command', (req, res) => {
  return res.json(commands.getRandomCommand())
});

app.get('/command', (req, res) => {
  return res.send('POST för helvete!')
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
