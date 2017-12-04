var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/index.js',
  output: {
    filename: 'build/js/index.js'
  },

  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude : /node_modules/,
        loader : 'babel-loader',
        query: {
            presets: ['env', 'es2015', 'react', 'stage-2']
        }
      }
    ]
  },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    node: {
        dns: 'mock',
        net: 'mock'
    }
};

module.exports = config;