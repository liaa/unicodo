var webpack = require('webpack');
var PRODUCTION = JSON.parse(process.env.Webpack_PRODUCTION || "0");

var config = {
  entry: "./src/js/main.jsx",
  output: {
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader:"jsx-loader"}
    ]
  },
  plugins: PRODUCTION ? [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ] : []
};

module.exports = config;
