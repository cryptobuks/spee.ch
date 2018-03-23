const Path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node  : {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry    : ['babel-polyfill', 'whatwg-fetch', './package.js'],
  output   : {
    path         : Path.join(__dirname, '/'),
    publicPath   : '/',
    filename     : 'index.js',
    library      : '',
    libraryTarget: 'commonjs-module',
  },
  module: {
    rules: [
      {
        test   : /.jsx?$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        options: {
          presets: ['es2015',  'react', 'stage-2'],
        },
      },
      {
        test  : /.css$/,
        loader: 'css-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
