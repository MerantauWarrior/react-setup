const path = require("path");

module.exports = {
  entry: {
    home: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'react/[name].bundle.js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};