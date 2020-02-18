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
        use: [
          {loader: "style-loader"},
          {loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              },
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'react/assets',
              publicPath: 'js/react/assets',
            },
          },
        ],
      },
    ]
  }
};