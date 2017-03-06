const webpack = require('webpack');

module.exports = {
  entry: './public/index.js',
  output: {
    path: './public',
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
