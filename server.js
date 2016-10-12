var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

var backend = express();

/*
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
*/

//app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static(__dirname + '/dist'));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 8081 , (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8081');
});

backend.get('/' , (req, res) => {
  res.json({hey: 'hello'});
});

backend.post('/blog', (req, res) => {
  const { blogs } = req;
  
  
});

backend.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Backend listening at http://localhost:8080');
});
