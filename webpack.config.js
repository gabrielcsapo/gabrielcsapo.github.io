const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'public', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: false,
      mangle: {
          screw_ie8: true
      },
      compress: {
          screw_ie8: true
      },
      comments: false
    })
  ]
}
