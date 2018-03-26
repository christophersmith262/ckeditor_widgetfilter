var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/dist');
var APP_DIR = path.resolve(__dirname, 'js/src');

var config = {
  entry: APP_DIR + '/index.js',
  entry: {
    'plugins/widgetfilter/plugin': APP_DIR + '/plugins/widgetfilter/plugin.js',
    'widgetfilter': APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  plugins: [
  ],
  module : {
    rules: [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    drupal: 'Drupal',
    backbone: 'Backbone',
    ckeditor: 'CKEDITOR',
    underscore: '_',
  }
};

module.exports = config;
