const path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'react/bundle.js',
    chunkFilename: '[id].js',
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