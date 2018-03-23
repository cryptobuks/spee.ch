const Path = require('path');
const CLIENT_ROOT = Path.resolve(__dirname, 'client/');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target   : 'web',
  entry    : ['babel-polyfill', 'whatwg-fetch', './client/components'],
  externals: [nodeExternals()],
  output   : {
    path      : Path.join(__dirname, 'exports/'),
    publicPath: 'exports/',
    filename  : 'components.js',
  },
  module: {
    loaders: [
      {
        test   : /.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query  : {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      CLIENT_ROOT,
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
};
