var path = require('path');
var express = require('express');
var cors = require('cors');

//var webpack = require('webpack');
//var config = require('./webpack.config');
//var compiler = webpack(config);
var app = express();

var backend = express();

var blogs = require('./data').blogs

var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200
};

/*
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
*/

app.use('/template-challenge/dist/', express.static(__dirname + '/dist'));

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


backend.get('/blog' , cors(corsOptions), (req, res) => {
  return res.json(blogs);
});

backend.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Backend listening at http://localhost:8080');
});
