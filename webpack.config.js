const appBaseConfig = require('./webpack.app.common.js');
const componentsBaseConfig = require('./webpack.components.common.js');
const containersBaseConfig = require('./webpack.containers.common.js');
const pagesBaseConfig = require('./webpack.pages.common.js');
const reducersBaseConfig = require('./webpack.reducers.common.js');
const sagasBaseConfig = require('./webpack.sagas.common.js');
const serverBaseConfig = require('./webpack.server.common.js');

module.exports = [
  appBaseConfig,
  componentsBaseConfig,
  containersBaseConfig,
  pagesBaseConfig,
  reducersBaseConfig,
  sagasBaseConfig,
  serverBaseConfig,
];
