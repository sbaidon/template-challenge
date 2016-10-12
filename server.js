var path = require('path');
var express = require('express');
var cors = require('cors');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

var app = express();

var backend = express();

var { blogs } = require('./data')

var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.use(require('webpack-hot-middleware')(compiler));

//app.use('/static', express.static(__dirname + '/dist'));

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

backend.post('/blog', cors(corsOptions),  (req, res) => {
  const { blogs } = req;
  
  
});

backend.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Backend listening at http://localhost:8080');
});
