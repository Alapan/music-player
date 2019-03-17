var path = require('path');

var SRC_DIR = path.resolve(__dirname + '/src/js');
var DEST_DIR = path.resolve(__dirname + '/build');

module.exports = {
  entry: {
    main: [
      SRC_DIR + '/index.js'
    ],
    vendor: [
      'jquery',
      'bootstrap',
      'lodash'
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: DEST_DIR
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
}
