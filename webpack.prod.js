const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const appBaseConfig = require('./webpack.app.common.js');
const componentsBaseConfig = require('./webpack.components.common.js');
const containersBaseConfig = require('./webpack.containers.common.js');
const pagesBaseConfig = require('./webpack.pages.common.js');
const reducersBaseConfig = require('./webpack.reducers.common.js');
const sagasBaseConfig = require('./webpack.sagas.common.js');
const serverBaseConfig = require('./webpack.server.common.js');

const productionBuildConfig = {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

module.exports = [
  merge(appBaseConfig, productionBuildConfig),
  merge(componentsBaseConfig, productionBuildConfig),
  merge(containersBaseConfig, productionBuildConfig),
  merge(pagesBaseConfig, productionBuildConfig),
  merge(reducersBaseConfig, productionBuildConfig),
  merge(sagasBaseConfig, productionBuildConfig),
  merge(serverBaseConfig, productionBuildConfig),
];
