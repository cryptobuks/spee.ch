const mainBaseConfig = require('./webpack.main.common.js');
const merge = require('webpack-merge');

const devBuildConfig = {
  watch  : true,
  devtool: 'inline-source-map',
};

module.exports = [
  merge(mainBaseConfig, devBuildConfig),
];
