var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/template-challenge/dist/'
  },
  resolve: {
      fallback: path.join(__dirname, "client", "templates", "helpers")
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    // Images
    { test: /\.(png|jpg|svg)$/, 
      loader: 'file-loader?mimetype=image/png',
      include: path.join(__dirname, 'client') 
    }, // inline base64 URLs for <=8k images, direct URLs for the rest
    { test: /\.handlebars$/, 
      loader: "handlebars-loader",
      include: path.join(__dirname, 'client') 
    },
    {
       test: /\.(eot|svg|ttf|woff|woff2)$/,
       loader: 'file-loader?limit=50000',
       include: path.join(__dirname, 'client', 'fonts')
    }

    ]
  }
};
