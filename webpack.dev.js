const appBaseConfig = require('./webpack.app.common.js');
const componentsBaseConfig = require('./webpack.components.common.js');
const containersBaseConfig = require('./webpack.containers.common.js');
const pagesBaseConfig = require('./webpack.pages.common.js');
const reducersBaseConfig = require('./webpack.reducers.common.js');
const sagasBaseConfig = require('./webpack.sagas.common.js');
const serverBaseConfig = require('./webpack.server.common.js');
const merge = require('webpack-merge');

const devBuildConfig = {
  watch  : true,
  devtool: 'inline-source-map',
};

module.exports = [
  merge(appBaseConfig, devBuildConfig),
  merge(componentsBaseConfig, devBuildConfig),
  merge(containersBaseConfig, devBuildConfig),
  merge(pagesBaseConfig, devBuildConfig),
  merge(reducersBaseConfig, devBuildConfig),
  merge(sagasBaseConfig, devBuildConfig),
  merge(serverBaseConfig, devBuildConfig),
];
