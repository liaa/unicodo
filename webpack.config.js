var config = {
  entry: "./src/js/main.jsx",
  output: {
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader:"jsx-loader"}
    ]
  }
};

module.exports = config;
