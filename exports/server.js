module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "exports/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SiteConfig() {
  var _this = this;

  this.analytics = {
    googleId: 'default'
  };
  this.assetDefaults = {
    description: 'An asset published on Spee.ch',
    thumbnail: 'https://spee.ch/assets/img/video_thumb_default.png',
    title: 'Spee.ch'
  };
  this.auth = {
    sessionKey: 'default'
  };
  this.customComponents = {
    components: {},
    containers: {},
    pages: {}
  };
  this.details = {
    description: 'Open-source, decentralized image and video sharing.',
    host: 'default',
    port: 3000,
    title: 'Default Title',
    twitter: '@spee_ch'
  };
  this.localPublicFolder = null;
  this.publishing = {
    additionalClaimAddresses: [],
    disabled: false,
    disabledMessage: 'Please check back soon.',
    primaryClaimAddress: 'default',
    thumbnailChannel: 'default',
    thumbnailChannelId: 'default',
    uploadDirectory: '/home/lbry/Uploads'
  };
  this.configure = function (config) {
    if (!config) {
      return console.log('No site config received.');
    }
    var analytics = config.analytics,
        assetDefaults = config.assetDefaults,
        auth = config.auth,
        customComponents = config.customComponents,
        details = config.details,
        localPublicFolder = config.localPublicFolder,
        publishing = config.publishing;

    _this.analytics = analytics;
    _this.assetDefaults = assetDefaults;
    _this.auth = auth;
    _this.details = details;
    _this.localPublicFolder = localPublicFolder;
    _this.publishing = publishing;
    _this.customComponents = customComponents;
  };
};

module.exports = new SiteConfig();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectFile = selectFile;
exports.clearFile = clearFile;
exports.updateMetadata = updateMetadata;
exports.updateClaim = updateClaim;
exports.setPublishInChannel = setPublishInChannel;
exports.updatePublishStatus = updatePublishStatus;
exports.updateError = updateError;
exports.updateSelectedChannel = updateSelectedChannel;
exports.toggleMetadataInputs = toggleMetadataInputs;
exports.onNewThumbnail = onNewThumbnail;
exports.startPublish = startPublish;

var _publish_action_types = __webpack_require__(34);

var actions = _interopRequireWildcard(_publish_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// export action creators
function selectFile(file) {
  return {
    type: actions.FILE_SELECTED,
    data: file
  };
};

function clearFile() {
  return {
    type: actions.FILE_CLEAR
  };
};

function updateMetadata(name, value) {
  return {
    type: actions.METADATA_UPDATE,
    data: {
      name: name,
      value: value
    }
  };
};

function updateClaim(value) {
  return {
    type: actions.CLAIM_UPDATE,
    data: value
  };
};

function setPublishInChannel(channel) {
  return {
    type: actions.SET_PUBLISH_IN_CHANNEL,
    channel: channel
  };
};

function updatePublishStatus(status, message) {
  return {
    type: actions.PUBLISH_STATUS_UPDATE,
    data: {
      status: status,
      message: message
    }
  };
};

function updateError(name, value) {
  return {
    type: actions.ERROR_UPDATE,
    data: {
      name: name,
      value: value
    }
  };
};

function updateSelectedChannel(channelName) {
  return {
    type: actions.SELECTED_CHANNEL_UPDATE,
    data: channelName
  };
};

function toggleMetadataInputs(showMetadataInputs) {
  return {
    type: actions.TOGGLE_METADATA_INPUTS,
    data: showMetadataInputs
  };
};

function onNewThumbnail(file) {
  return {
    type: actions.THUMBNAIL_NEW,
    data: file
  };
};

function startPublish(history) {
  return {
    type: actions.PUBLISH_START,
    data: { history: history }
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sequelize = __webpack_require__(26);
var logger = __webpack_require__(2);

console.log('exporting sequelize models');

var _require = __webpack_require__(23),
    database = _require.database,
    username = _require.username,
    password = _require.password;

var db = {};
// set sequelize options
var sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: { decimalNumbers: true }, // fix to ensure DECIMAL will not be stored as a string
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 10000
  }
});

// establish mysql connection
sequelize.authenticate().then(function () {
  logger.info('Sequelize has established mysql connection successfully.');
}).catch(function (err) {
  logger.error('Sequelize was unable to connect to the database:', err);
});

// manually add each model to the db object
var Certificate = __webpack_require__(63);
var Channel = __webpack_require__(64);
var Claim = __webpack_require__(65);
var File = __webpack_require__(66);
var Request = __webpack_require__(67);
var User = __webpack_require__(68);
db['Certificate'] = sequelize.import('Certificate', Certificate);
db['Channel'] = sequelize.import('Channel', Channel);
db['Claim'] = sequelize.import('Claim', Claim);
db['File'] = sequelize.import('File', File);
db['Request'] = sequelize.import('Request', Request);
db['User'] = sequelize.import('User', User);

// run model.association for each model in the db object that has an association
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    logger.info('Associating model:', modelName);
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// add an 'upsert' method to the db object
db.upsert = function (Model, values, condition, tableName) {
  return Model.findOne({
    where: condition
  }).then(function (obj) {
    if (obj) {
      // update
      logger.debug('updating record in db.' + tableName);
      return obj.update(values);
    } else {
      // insert
      logger.debug('creating record in db.' + tableName);
      return Model.create(values);
    }
  }).catch(function (error) {
    logger.error(tableName + '.upsert error', error);
    throw error;
  });
};

module.exports = db;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(19);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(90);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel,
      site = _ref.site;

  return {
    channelName: channel.loggedInChannel.name,
    channelShortId: channel.loggedInChannel.shortId,
    channelLongId: channel.loggedInChannel.longId,
    siteDescription: site.description
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChannelLogin: function onChannelLogin(name, shortId, longId) {
      dispatch((0, _channel.updateLoggedInChannel)(name, shortId, longId));
      dispatch((0, _publish.updateSelectedChannel)(name));
    },
    onChannelLogout: function onChannelLogout() {
      dispatch((0, _channel.updateLoggedInChannel)(null, null, null));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onHandleShowPageUri = onHandleShowPageUri;
exports.onRequestError = onRequestError;
exports.onNewChannelRequest = onNewChannelRequest;
exports.onNewAssetRequest = onNewAssetRequest;
exports.onRequestUpdate = onRequestUpdate;
exports.addRequestToRequestList = addRequestToRequestList;
exports.addAssetToAssetList = addAssetToAssetList;
exports.addNewChannelToChannelList = addNewChannelToChannelList;
exports.onUpdateChannelClaims = onUpdateChannelClaims;
exports.updateChannelClaims = updateChannelClaims;
exports.fileRequested = fileRequested;
exports.updateFileAvailability = updateFileAvailability;
exports.updateDisplayAssetError = updateDisplayAssetError;

var _show_action_types = __webpack_require__(12);

var actions = _interopRequireWildcard(_show_action_types);

var _show_request_types = __webpack_require__(43);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// basic request parsing
function onHandleShowPageUri(params) {
  return {
    type: actions.HANDLE_SHOW_URI,
    data: params
  };
};

function onRequestError(error) {
  return {
    type: actions.REQUEST_ERROR,
    data: error
  };
};

function onNewChannelRequest(channelName, channelId) {
  var requestType = _show_request_types.CHANNEL;
  var requestId = 'cr#' + channelName + '#' + channelId;
  return {
    type: actions.CHANNEL_REQUEST_NEW,
    data: { requestType: requestType, requestId: requestId, channelName: channelName, channelId: channelId }
  };
};

function onNewAssetRequest(name, id, channelName, channelId, extension) {
  var requestType = extension ? _show_request_types.ASSET_LITE : _show_request_types.ASSET_DETAILS;
  var requestId = 'ar#' + name + '#' + id + '#' + channelName + '#' + channelId;
  return {
    type: actions.ASSET_REQUEST_NEW,
    data: {
      requestType: requestType,
      requestId: requestId,
      name: name,
      modifier: {
        id: id,
        channel: {
          name: channelName,
          id: channelId
        }
      }
    }
  };
};

function onRequestUpdate(requestType, requestId) {
  return {
    type: actions.REQUEST_UPDATE,
    data: {
      requestType: requestType,
      requestId: requestId
    }
  };
};

function addRequestToRequestList(id, error, key) {
  return {
    type: actions.REQUEST_LIST_ADD,
    data: { id: id, error: error, key: key }
  };
};

// asset actions

function addAssetToAssetList(id, error, name, claimId, shortId, claimData) {
  return {
    type: actions.ASSET_ADD,
    data: { id: id, error: error, name: name, claimId: claimId, shortId: shortId, claimData: claimData }
  };
}

// channel actions

function addNewChannelToChannelList(id, name, shortId, longId, claimsData) {
  return {
    type: actions.CHANNEL_ADD,
    data: { id: id, name: name, shortId: shortId, longId: longId, claimsData: claimsData }
  };
};

function onUpdateChannelClaims(channelKey, name, longId, page) {
  return {
    type: actions.CHANNEL_CLAIMS_UPDATE_ASYNC,
    data: { channelKey: channelKey, name: name, longId: longId, page: page }
  };
};

function updateChannelClaims(channelListId, claimsData) {
  return {
    type: actions.CHANNEL_CLAIMS_UPDATE_SUCCESS,
    data: { channelListId: channelListId, claimsData: claimsData }
  };
};

// display a file

function fileRequested(name, claimId) {
  return {
    type: actions.FILE_REQUESTED,
    data: { name: name, claimId: claimId }
  };
};

function updateFileAvailability(status) {
  return {
    type: actions.FILE_AVAILABILITY_UPDATE,
    data: status
  };
};

function updateDisplayAssetError(error) {
  return {
    type: actions.DISPLAY_ASSET_ERROR,
    data: error
  };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(86);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var site = _ref.site;
  var defaultDescription = site.defaultDescription,
      defaultThumbnail = site.defaultThumbnail,
      siteDescription = site.description,
      siteHost = site.host,
      siteTitle = site.title,
      siteTwitter = site.twitter;

  return {
    defaultDescription: defaultDescription,
    defaultThumbnail: defaultThumbnail,
    siteDescription: siteDescription,
    siteHost: siteHost,
    siteTitle: siteTitle,
    siteTwitter: siteTwitter
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = request;

__webpack_require__(93);

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Parses the status returned by a network request
 *
 * @param  {object} response   A response from a network request
 * @param  {object} response   The parsed JSON from the network request
 *
 * @return {object | undefined} Returns object with status and statusText, or undefined
 */
function checkStatus(response, jsonResponse) {
  if (response.status >= 200 && response.status < 300) {
    return jsonResponse;
  }
  var error = new Error(jsonResponse.message);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

function request(url, options) {
  return fetch(url, options).then(function (response) {
    return Promise.all([response, parseJSON(response)]);
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        response = _ref2[0],
        jsonResponse = _ref2[1];

    return checkStatus(response, jsonResponse);
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// request actions
var HANDLE_SHOW_URI = exports.HANDLE_SHOW_URI = 'HANDLE_SHOW_URI';
var REQUEST_ERROR = exports.REQUEST_ERROR = 'REQUEST_ERROR';
var REQUEST_UPDATE = exports.REQUEST_UPDATE = 'REQUEST_UPDATE';
var ASSET_REQUEST_NEW = exports.ASSET_REQUEST_NEW = 'ASSET_REQUEST_NEW';
var CHANNEL_REQUEST_NEW = exports.CHANNEL_REQUEST_NEW = 'CHANNEL_REQUEST_NEW';
var REQUEST_LIST_ADD = exports.REQUEST_LIST_ADD = 'REQUEST_LIST_ADD';

// asset actions
var ASSET_ADD = exports.ASSET_ADD = 'ASSET_ADD';

// channel actions
var CHANNEL_ADD = exports.CHANNEL_ADD = 'CHANNEL_ADD';

var CHANNEL_CLAIMS_UPDATE_ASYNC = exports.CHANNEL_CLAIMS_UPDATE_ASYNC = 'CHANNEL_CLAIMS_UPDATE_ASYNC';
var CHANNEL_CLAIMS_UPDATE_SUCCESS = exports.CHANNEL_CLAIMS_UPDATE_SUCCESS = 'CHANNEL_CLAIMS_UPDATE_SUCCESS';

// asset/file display actions
var FILE_REQUESTED = exports.FILE_REQUESTED = 'FILE_REQUESTED';
var FILE_AVAILABILITY_UPDATE = exports.FILE_AVAILABILITY_UPDATE = 'FILE_AVAILABILITY_UPDATE';
var DISPLAY_ASSET_ERROR = exports.DISPLAY_ASSET_ERROR = 'DISPLAY_ASSET_ERROR';

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectAsset = exports.selectAsset = function selectAsset(show) {
  var request = show.requestList[show.request.id];
  var assetKey = request.key;
  return show.assetList[assetKey];
};

var selectShowState = exports.selectShowState = function selectShowState(state) {
  return state.show;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(60);
var logger = __webpack_require__(2);

var _require = __webpack_require__(61),
    _require$api = _require.api,
    apiHost = _require$api.apiHost,
    apiPort = _require$api.apiPort;

var lbryApiUri = 'http://' + apiHost + ':' + apiPort;

var _require2 = __webpack_require__(17),
    chooseGaLbrynetPublishLabel = _require2.chooseGaLbrynetPublishLabel,
    sendGATimingEvent = _require2.sendGATimingEvent;

var handleLbrynetResponse = function handleLbrynetResponse(_ref, resolve, reject) {
  var data = _ref.data;

  logger.debug('lbry api data:', data);
  if (data.result) {
    // check for an error
    if (data.result.error) {
      logger.debug('Lbrynet api error:', data.result.error);
      reject(new Error(data.result.error));
      return;
    };
    resolve(data.result);
    return;
  }
  // fallback in case it just timed out
  reject(JSON.stringify(data));
};

module.exports = {
  publishClaim: function publishClaim(publishParams) {
    logger.debug('lbryApi >> Publishing claim to "' + publishParams.name + '"');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'publish',
        params: publishParams
      }).then(function (response) {
        sendGATimingEvent('lbrynet', 'publish', chooseGaLbrynetPublishLabel(publishParams), gaStartTime, Date.now());
        handleLbrynetResponse(response, resolve, reject);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getClaim: function getClaim(uri) {
    logger.debug('lbryApi >> Getting Claim for "' + uri + '"');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'get',
        params: { uri: uri, timeout: 20 }
      }).then(function (response) {
        sendGATimingEvent('lbrynet', 'getClaim', 'GET', gaStartTime, Date.now());
        handleLbrynetResponse(response, resolve, reject);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getClaimList: function getClaimList(claimName) {
    logger.debug('lbryApi >> Getting claim_list for "' + claimName + '"');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'claim_list',
        params: { name: claimName }
      }).then(function (response) {
        sendGATimingEvent('lbrynet', 'getClaimList', 'CLAIM_LIST', gaStartTime, Date.now());
        handleLbrynetResponse(response, resolve, reject);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  resolveUri: function resolveUri(uri) {
    logger.debug('lbryApi >> Resolving URI for "' + uri + '"');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'resolve',
        params: { uri: uri }
      }).then(function (_ref2) {
        var data = _ref2.data;

        sendGATimingEvent('lbrynet', 'resolveUri', 'RESOLVE', gaStartTime, Date.now());
        if (data.result[uri].error) {
          // check for errors
          reject(data.result[uri].error);
        } else {
          // if no errors, resolve
          resolve(data.result[uri]);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getDownloadDirectory: function getDownloadDirectory() {
    logger.debug('lbryApi >> Retrieving the download directory path from lbry daemon...');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'settings_get'
      }).then(function (_ref3) {
        var data = _ref3.data;

        sendGATimingEvent('lbrynet', 'getDownloadDirectory', 'SETTINGS_GET', gaStartTime, Date.now());
        if (data.result) {
          resolve(data.result.download_directory);
        } else {
          return new Error('Successfully connected to lbry daemon, but unable to retrieve the download directory.');
        }
      }).catch(function (error) {
        logger.error('Lbrynet Error:', error);
        resolve('/home/lbry/Downloads/');
      });
    });
  },
  createChannel: function createChannel(name) {
    logger.debug('lbryApi >> Creating channel for ' + name + '...');
    var gaStartTime = Date.now();
    return new Promise(function (resolve, reject) {
      axios.post(lbryApiUri, {
        method: 'channel_new',
        params: {
          channel_name: name,
          amount: 0.1
        }
      }).then(function (response) {
        sendGATimingEvent('lbrynet', 'createChannel', 'CHANNEL_NEW', gaStartTime, Date.now());
        handleLbrynetResponse(response, resolve, reject);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);
var ua = __webpack_require__(62);

var _require = __webpack_require__(3),
    googleId = _require.analytics.googleId,
    title = _require.details.title;

function createServeEventParams(headers, ip, originalUrl) {
  return {
    eventCategory: 'client requests',
    eventAction: 'serve request',
    eventLabel: originalUrl,
    ipOverride: ip,
    userAgentOverride: headers['user-agent']
  };
};

function createPublishTimingEventParams(category, variable, label, startTime, endTime) {
  var duration = endTime - startTime;
  return {
    userTimingCategory: category,
    userTimingVariableName: variable,
    userTimingTime: duration,
    userTimingLabel: label
  };
};

function sendGoogleAnalyticsEvent(ip, params) {
  var visitorId = ip.replace(/\./g, '-');
  var visitor = ua(googleId, visitorId, { strictCidFormat: false, https: true });
  visitor.event(params, function (err) {
    if (err) {
      logger.error('Google Analytics Event Error >>', err);
    }
  });
};

function sendGoogleAnalyticsTiming(visitorId, params) {
  var visitor = ua(googleId, visitorId, { strictCidFormat: false, https: true });
  visitor.timing(params, function (err) {
    if (err) {
      logger.error('Google Analytics Event Error >>', err);
    }
    logger.debug('Timing event successfully sent to google analytics');
  });
};

module.exports = {
  sendGAServeEvent: function sendGAServeEvent(headers, ip, originalUrl) {
    var params = createServeEventParams(headers, ip, originalUrl);
    sendGoogleAnalyticsEvent(ip, params);
  },
  sendGATimingEvent: function sendGATimingEvent(category, variable, label, startTime, endTime) {
    var params = createPublishTimingEventParams(category, variable, label, startTime, endTime);
    sendGoogleAnalyticsTiming(title, params);
  },
  chooseGaLbrynetPublishLabel: function chooseGaLbrynetPublishLabel(_ref) {
    var channelName = _ref.channel_name,
        channelId = _ref.channel_id;

    return channelName || channelId ? 'PUBLISH_IN_CHANNEL_CLAIM' : 'PUBLISH_ANONYMOUS_CLAIM';
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLoggedInChannel = updateLoggedInChannel;

var _channel_action_types = __webpack_require__(36);

var actions = _interopRequireWildcard(_channel_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// export action creators

function updateLoggedInChannel(name, shortId, longId) {
  return {
    type: actions.CHANNEL_UPDATE,
    data: {
      name: name,
      shortId: shortId,
      longId: longId
    }
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActiveStatusBar = __webpack_require__(115);

var _ActiveStatusBar2 = _interopRequireDefault(_ActiveStatusBar);

var _InactiveStatusBar = __webpack_require__(116);

var _InactiveStatusBar2 = _interopRequireDefault(_InactiveStatusBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.state = {
      bars: [],
      index: 0,
      incrementer: 1
    };
    _this.createBars = _this.createBars.bind(_this);
    _this.startProgressBar = _this.startProgressBar.bind(_this);
    _this.updateProgressBar = _this.updateProgressBar.bind(_this);
    _this.stopProgressBar = _this.stopProgressBar.bind(_this);
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createBars();
      this.startProgressBar();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopProgressBar();
    }
  }, {
    key: 'createBars',
    value: function createBars() {
      var bars = [];
      for (var i = 0; i <= this.props.size; i++) {
        bars.push({ isActive: false });
      }
      this.setState({ bars: bars });
    }
  }, {
    key: 'startProgressBar',
    value: function startProgressBar() {
      this.updateInterval = setInterval(this.updateProgressBar.bind(this), 300);
    }
  }, {
    key: 'updateProgressBar',
    value: function updateProgressBar() {
      var index = this.state.index;
      var incrementer = this.state.incrementer;
      var bars = this.state.bars;
      // flip incrementer if necessary, to stay in bounds
      if (index < 0 || index > this.props.size) {
        incrementer = incrementer * -1;
        index += incrementer;
      }
      // update the indexed bar
      if (incrementer > 0) {
        bars[index].isActive = true;
      } else {
        bars[index].isActive = false;
      };
      // increment index
      index += incrementer;
      // update state
      this.setState({
        bars: bars,
        incrementer: incrementer,
        index: index
      });
    }
  }, {
    key: 'stopProgressBar',
    value: function stopProgressBar() {
      clearInterval(this.updateInterval);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.bars.map(function (bar, index) {
          return bar.isActive ? _react2.default.createElement(_ActiveStatusBar2.default, { key: index }) : _react2.default.createElement(_InactiveStatusBar2.default, { key: index });
        })
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

;

ProgressBar.propTypes = {
  size: _propTypes2.default.number.isRequired
};

exports.default = ProgressBar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage = function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      var error = this.props.error;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row row--padded' },
          _react2.default.createElement(
            'p',
            null,
            error
          )
        )
      );
    }
  }]);

  return ErrorPage;
}(_react2.default.Component);

;

ErrorPage.propTypes = {
  error: _propTypes2.default.string.isRequired
};

exports.default = ErrorPage;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function MysqlConfig() {
  var _this = this;

  this.database = 'default';
  this.username = 'default';
  this.password = 'default';
  this.configure = function (config) {
    if (!config) {
      return console.log('No MySQL config received.');
    }
    var database = config.database,
        username = config.username,
        password = config.password;

    _this.database = database;
    _this.username = username;
    _this.password = password;
  };
};

module.exports = new MysqlConfig();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function SlackConfig() {
  var _this = this;

  this.slackWebHook = 'default';
  this.slackErrorChannel = 'default';
  this.slackInfoChannel = 'default';
  this.configure = function (config) {
    if (!config) {
      return console.log('No slack config received.');
    }
    var slackWebHook = config.slackWebHook,
        slackErrorChannel = config.slackErrorChannel,
        slackInfoChannel = config.slackInfoChannel;

    _this.slackWebHook = slackWebHook;
    _this.slackErrorChannel = slackErrorChannel;
    _this.slackInfoChannel = slackInfoChannel;
  };
};

module.exports = new SlackConfig();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  returnShortId: function returnShortId(claimsArray, longId) {
    var claimIndex = void 0;
    var shortId = longId.substring(0, 1); // default short id is the first letter
    var shortIdLength = 0;
    // find the index of this claim id
    claimIndex = claimsArray.findIndex(function (element) {
      return element.claimId === longId;
    });
    if (claimIndex < 0) {
      throw new Error('claim id not found in claims list');
    }
    // get an array of all claims with lower height
    var possibleMatches = claimsArray.slice(0, claimIndex);
    // remove certificates with the same prefixes until none are left.
    while (possibleMatches.length > 0) {
      shortIdLength += 1;
      shortId = longId.substring(0, shortIdLength);
      possibleMatches = possibleMatches.filter(function (element) {
        return element.claimId && element.claimId.substring(0, shortIdLength) === shortId;
      });
    }
    return shortId;
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);
var fs = __webpack_require__(75);

var _require = __webpack_require__(3),
    details = _require.details,
    publishing = _require.publishing;

module.exports = {
  parsePublishApiRequestBody: function parsePublishApiRequestBody(_ref) {
    var name = _ref.name,
        nsfw = _ref.nsfw,
        license = _ref.license,
        title = _ref.title,
        description = _ref.description,
        thumbnail = _ref.thumbnail;

    // validate name
    if (!name) {
      throw new Error('no name field found in request');
    }
    var invalidNameCharacters = /[^A-Za-z0-9,-]/.exec(name);
    if (invalidNameCharacters) {
      throw new Error('The claim name you provided is not allowed.  Only the following characters are allowed: A-Z, a-z, 0-9, and "-"');
    }
    // optional parameters
    nsfw = nsfw === 'true';
    license = license || null;
    title = title || null;
    description = description || null;
    thumbnail = thumbnail || null;
    // return results
    return {
      name: name,
      nsfw: nsfw,
      license: license,
      title: title,
      description: description,
      thumbnail: thumbnail
    };
  },
  parsePublishApiRequestFiles: function parsePublishApiRequestFiles(_ref2) {
    var file = _ref2.file,
        thumbnail = _ref2.thumbnail;

    // make sure a file was provided
    if (!file) {
      throw new Error('no file with key of [file] found in request');
    }
    if (!file.path) {
      throw new Error('no file path found');
    }
    if (!file.type) {
      throw new Error('no file type found');
    }
    if (!file.size) {
      throw new Error('no file type found');
    }
    // validate the file name
    if (/'/.test(file.name)) {
      throw new Error('apostrophes are not allowed in the file name');
    }
    // validate the file
    module.exports.validateFileTypeAndSize(file);
    // return results
    return {
      fileName: file.name,
      filePath: file.path,
      fileType: file.type,
      thumbnailFileName: thumbnail ? thumbnail.name : null,
      thumbnailFilePath: thumbnail ? thumbnail.path : null,
      thumbnailFileType: thumbnail ? thumbnail.type : null
    };
  },
  validateFileTypeAndSize: function validateFileTypeAndSize(file) {
    // check file type and size
    switch (file.type) {
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/png':
        if (file.size > 10000000) {
          logger.debug('publish > file validation > .jpeg/.jpg/.png was too big');
          throw new Error('Sorry, images are limited to 10 megabytes.');
        }
        break;
      case 'image/gif':
        if (file.size > 50000000) {
          logger.debug('publish > file validation > .gif was too big');
          throw new Error('Sorry, .gifs are limited to 50 megabytes.');
        }
        break;
      case 'video/mp4':
        if (file.size > 50000000) {
          logger.debug('publish > file validation > .mp4 was too big');
          throw new Error('Sorry, videos are limited to 50 megabytes.');
        }
        break;
      default:
        logger.debug('publish > file validation > unrecognized file type');
        throw new Error('The ' + file.type + ' content type is not supported.  Only, .jpeg, .png, .gif, and .mp4 files are currently supported.');
    }
    return file;
  },
  createBasicPublishParams: function createBasicPublishParams(filePath, name, title, description, license, nsfw, thumbnail) {
    logger.debug('Creating Publish Parameters');
    // provide defaults for title
    if (title === null || title.trim() === '') {
      title = name;
    }
    // provide default for description
    if (description === null || description.trim() === '') {
      description = '';
    }
    // provide default for license
    if (license === null || license.trim() === '') {
      license = ' '; // default to empty string
    }
    // create the publish params
    var publishParams = {
      name: name,
      file_path: filePath,
      bid: 0.01,
      metadata: {
        description: description,
        title: title,
        author: details.title,
        language: 'en',
        license: license,
        nsfw: nsfw
      },
      claim_address: publishing.primaryClaimAddress
    };
    // add thumbnail to channel if video
    if (thumbnail) {
      publishParams['metadata']['thumbnail'] = thumbnail;
    }
    return publishParams;
  },
  createThumbnailPublishParams: function createThumbnailPublishParams(thumbnailFilePath, claimName, license, nsfw) {
    if (!thumbnailFilePath) {
      return;
    }
    logger.debug('Creating Thumbnail Publish Parameters');
    // create the publish params
    return {
      name: claimName + '-thumb',
      file_path: thumbnailFilePath,
      bid: 0.01,
      metadata: {
        title: claimName + ' thumbnail',
        description: 'a thumbnail for ' + claimName,
        author: details.title,
        language: 'en',
        license: license,
        nsfw: nsfw
      },
      claim_address: publishing.primaryClaimAddress,
      channel_name: publishing.thumbnailChannel,
      channel_id: publishing.thumbnailChannelId
    };
  },
  deleteTemporaryFile: function deleteTemporaryFile(filePath) {
    fs.unlink(filePath, function (err) {
      if (err) {
        logger.error('error deleting temporary file ' + filePath);
        throw err;
      }
      logger.debug('successfully deleted ' + filePath);
    });
  },
  addGetResultsToFileData: function addGetResultsToFileData(fileInfo, getResult) {
    fileInfo.fileName = getResult.file_name;
    fileInfo.filePath = getResult.download_path;
    return fileInfo;
  },
  createFileData: function createFileData(_ref3) {
    var name = _ref3.name,
        claimId = _ref3.claimId,
        outpoint = _ref3.outpoint,
        height = _ref3.height,
        address = _ref3.address,
        nsfw = _ref3.nsfw,
        contentType = _ref3.contentType;

    return {
      name: name,
      claimId: claimId,
      outpoint: outpoint,
      height: height,
      address: address,
      fileName: '',
      filePath: '',
      fileType: contentType,
      nsfw: nsfw
    };
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var logger = __webpack_require__(2);

module.exports = {
  handleErrorResponse: function handleErrorResponse(originalUrl, ip, error, res) {
    logger.error('Error on ' + originalUrl, module.exports.useObjectPropertiesIfNoKeys(error));

    var _module$exports$retur = module.exports.returnErrorMessageAndStatus(error),
        _module$exports$retur2 = _slicedToArray(_module$exports$retur, 2),
        status = _module$exports$retur2[0],
        message = _module$exports$retur2[1];

    res.status(status).json(module.exports.createErrorResponsePayload(status, message));
  },
  returnErrorMessageAndStatus: function returnErrorMessageAndStatus(error) {
    var status = void 0,
        message = void 0;
    // check for daemon being turned off
    if (error.code === 'ECONNREFUSED') {
      status = 503;
      message = 'Connection refused.  The daemon may not be running.';
      // fallback for everything else
    } else {
      status = 400;
      if (error.message) {
        message = error.message;
      } else {
        message = error;
      };
    };
    return [status, message];
  },
  useObjectPropertiesIfNoKeys: function useObjectPropertiesIfNoKeys(err) {
    if (Object.keys(err).length === 0) {
      var newErrorObject = {};
      Object.getOwnPropertyNames(err).forEach(function (key) {
        newErrorObject[key] = err[key];
      });
      return newErrorObject;
    }
    return err;
  },
  createErrorResponsePayload: function createErrorResponsePayload(status, message) {
    return {
      status: status,
      success: false,
      message: message
    };
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var db = __webpack_require__(6);
var logger = __webpack_require__(2);

var _require = __webpack_require__(77),
    returnPaginatedChannelClaims = _require.returnPaginatedChannelClaims;

var NO_CHANNEL = 'NO_CHANNEL';
var NO_CLAIM = 'NO_CLAIM';
var NO_FILE = 'NO_FILE';

module.exports = {
  getClaimId: function getClaimId(channelName, channelClaimId, name, claimId) {
    if (channelName) {
      return module.exports.getClaimIdByChannel(channelName, channelClaimId, name);
    } else {
      return module.exports.getClaimIdByClaim(name, claimId);
    }
  },
  getClaimIdByClaim: function getClaimIdByClaim(claimName, claimId) {
    logger.debug('getClaimIdByClaim(' + claimName + ', ' + claimId + ')');
    return new Promise(function (resolve, reject) {
      db.Claim.getLongClaimId(claimName, claimId).then(function (longClaimId) {
        if (!longClaimId) {
          resolve(NO_CLAIM);
        }
        resolve(longClaimId);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getClaimIdByChannel: function getClaimIdByChannel(channelName, channelClaimId, claimName) {
    logger.debug('getClaimIdByChannel(' + channelName + ', ' + channelClaimId + ', ' + claimName + ')');
    return new Promise(function (resolve, reject) {
      db.Certificate.getLongChannelId(channelName, channelClaimId) // 1. get the long channel id
      .then(function (longChannelId) {
        if (!longChannelId) {
          return [null, null];
        }
        return Promise.all([longChannelId, db.Claim.getClaimIdByLongChannelId(longChannelId, claimName)]); // 2. get the long claim id
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            longChannelId = _ref2[0],
            longClaimId = _ref2[1];

        if (!longChannelId) {
          return resolve(NO_CHANNEL);
        }
        if (!longClaimId) {
          return resolve(NO_CLAIM);
        }
        resolve(longClaimId);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getChannelData: function getChannelData(channelName, channelClaimId, page) {
    return new Promise(function (resolve, reject) {
      // 1. get the long channel Id (make sure channel exists)
      db.Certificate.getLongChannelId(channelName, channelClaimId).then(function (longChannelClaimId) {
        if (!longChannelClaimId) {
          return [null, null, null];
        }
        // 2. get the short ID and all claims for that channel
        return Promise.all([longChannelClaimId, db.Certificate.getShortChannelIdFromLongChannelId(longChannelClaimId, channelName)]);
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            longChannelClaimId = _ref4[0],
            shortChannelClaimId = _ref4[1];

        if (!longChannelClaimId) {
          return resolve(NO_CHANNEL);
        }
        // 3. return all the channel information
        resolve({
          channelName: channelName,
          longChannelClaimId: longChannelClaimId,
          shortChannelClaimId: shortChannelClaimId
        });
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getChannelClaims: function getChannelClaims(channelName, channelClaimId, page) {
    return new Promise(function (resolve, reject) {
      // 1. get the long channel Id (make sure channel exists)
      db.Certificate.getLongChannelId(channelName, channelClaimId).then(function (longChannelClaimId) {
        if (!longChannelClaimId) {
          return [null, null, null];
        }
        // 2. get the short ID and all claims for that channel
        return Promise.all([longChannelClaimId, db.Claim.getAllChannelClaims(longChannelClaimId)]);
      }).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            longChannelClaimId = _ref6[0],
            channelClaimsArray = _ref6[1];

        if (!longChannelClaimId) {
          return resolve(NO_CHANNEL);
        }
        // 3. format the data for the view, including pagination
        var paginatedChannelViewData = returnPaginatedChannelClaims(channelName, longChannelClaimId, channelClaimsArray, page);
        // 4. return all the channel information and contents
        resolve(paginatedChannelViewData);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  getLocalFileRecord: function getLocalFileRecord(claimId, name) {
    return db.File.findOne({ where: { claimId: claimId, name: name } }).then(function (file) {
      if (!file) {
        return NO_FILE;
      }
      return file.dataValues;
    });
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _redux = __webpack_require__(18);

var _reducers = __webpack_require__(33);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

var _GAListener = __webpack_require__(38);

var _GAListener2 = _interopRequireDefault(_GAListener);

var _app = __webpack_require__(39);

var _app2 = _interopRequireDefault(_app);

var _renderFullPage = __webpack_require__(45);

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (req, res) {
  var context = {};

  // create a new Redux store instance
  var store = (0, _redux.createStore)(_reducers2.default);

  // render component to a string
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(
        _GAListener2.default,
        null,
        _react2.default.createElement(_app2.default, null)
      )
    )
  ));

  // get head tags from helmet
  var helmet = _reactHelmet2.default.renderStatic();

  // check for a redirect
  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(301, context.url);
  } else {}
  // we're good, send the response


  // get the initial state from our Redux store
  var preloadedState = store.getState();

  // send the rendered page back to the client
  res.send((0, _renderFullPage2.default)(helmet, html, preloadedState));
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _publish = __webpack_require__(79);

var _publish2 = _interopRequireDefault(_publish);

var _channel = __webpack_require__(80);

var _channel2 = _interopRequireDefault(_channel);

var _show = __webpack_require__(81);

var _show2 = _interopRequireDefault(_show);

var _site = __webpack_require__(82);

var _site2 = _interopRequireDefault(_site);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  channel: _channel2.default,
  publish: _publish2.default,
  show: _show2.default,
  site: _site2.default
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILE_SELECTED = exports.FILE_SELECTED = 'FILE_SELECTED';
var FILE_CLEAR = exports.FILE_CLEAR = 'FILE_CLEAR';
var METADATA_UPDATE = exports.METADATA_UPDATE = 'METADATA_UPDATE';
var CLAIM_UPDATE = exports.CLAIM_UPDATE = 'CLAIM_UPDATE';
var SET_PUBLISH_IN_CHANNEL = exports.SET_PUBLISH_IN_CHANNEL = 'SET_PUBLISH_IN_CHANNEL';
var PUBLISH_STATUS_UPDATE = exports.PUBLISH_STATUS_UPDATE = 'PUBLISH_STATUS_UPDATE';
var ERROR_UPDATE = exports.ERROR_UPDATE = 'ERROR_UPDATE';
var SELECTED_CHANNEL_UPDATE = exports.SELECTED_CHANNEL_UPDATE = 'SELECTED_CHANNEL_UPDATE';
var TOGGLE_METADATA_INPUTS = exports.TOGGLE_METADATA_INPUTS = 'TOGGLE_METADATA_INPUTS';
var THUMBNAIL_NEW = exports.THUMBNAIL_NEW = 'THUMBNAIL_NEW';
var PUBLISH_START = exports.PUBLISH_START = 'PUBLISH_START';

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN = exports.LOGIN = 'Existing';
var CREATE = exports.CREATE = 'New';

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL_UPDATE = exports.CHANNEL_UPDATE = 'CHANNEL_UPDATE';

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOCAL_CHECK = exports.LOCAL_CHECK = 'LOCAL_CHECK';
var UNAVAILABLE = exports.UNAVAILABLE = 'UNAVAILABLE';
var ERROR = exports.ERROR = 'ERROR';
var AVAILABLE = exports.AVAILABLE = 'AVAILABLE';

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(83);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(3),
    googleId = _require.analytics.googleId;

_reactGa2.default.initialize(googleId);

var GAListener = function (_React$Component) {
  _inherits(GAListener, _React$Component);

  function GAListener() {
    _classCallCheck(this, GAListener);

    return _possibleConstructorReturn(this, (GAListener.__proto__ || Object.getPrototypeOf(GAListener)).apply(this, arguments));
  }

  _createClass(GAListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.sendPageView(this.props.history.location);
      this.props.history.listen(this.sendPageView);
    }
  }, {
    key: 'sendPageView',
    value: function sendPageView(location) {
      _reactGa2.default.set({ page: location.pathname });
      _reactGa2.default.pageview(location.pathname);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return GAListener;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(GAListener);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _dynamicImport = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = (0, _dynamicImport.importCustomComponent)('pages/HomePage') || __webpack_require__(85).default;
var AboutPage = (0, _dynamicImport.importCustomComponent)('pages/AboutPage') || __webpack_require__(122).default;
var LoginPage = (0, _dynamicImport.importCustomComponent)('pages/LoginPage') || __webpack_require__(123).default;
var ShowPage = (0, _dynamicImport.importCustomComponent)('pages/ShowPage') || __webpack_require__(125).default;
var FourOhFourPage = (0, _dynamicImport.importCustomComponent)('pages/FourOhFourPage') || __webpack_require__(142).default;

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: HomePage }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: AboutPage }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: LoginPage }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:identifier/:claim', component: ShowPage }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:claim', component: ShowPage }),
    _react2.default.createElement(_reactRouterDom.Route, { component: FourOhFourPage })
  );
};

exports.default = App;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(96);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    file: publish.file,
    thumbnail: publish.thumbnail,
    fileError: publish.error.file
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectFile: function selectFile(file) {
      dispatch((0, _publish.selectFile)(file));
    },
    setFileError: function setFileError(value) {
      dispatch((0, _publish.clearFile)());
      dispatch((0, _publish.updateError)('file', value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(19);

var _view = __webpack_require__(113);

var _view2 = _interopRequireDefault(_view);

var _publish = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChannelLogin: function onChannelLogin(name, shortId, longId) {
      dispatch((0, _channel.updateLoggedInChannel)(name, shortId, longId));
      dispatch((0, _publish.updateSelectedChannel)(name));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_view2.default);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(19);

var _view = __webpack_require__(114);

var _view2 = _interopRequireDefault(_view);

var _publish = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChannelLogin: function onChannelLogin(name, shortId, longId) {
      dispatch((0, _channel.updateLoggedInChannel)(name, shortId, longId));
      dispatch((0, _publish.updateSelectedChannel)(name));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_view2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = 'CHANNEL';
var ASSET_LITE = exports.ASSET_LITE = 'ASSET_LITE';
var ASSET_DETAILS = exports.ASSET_DETAILS = 'ASSET_DETAILS';

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(129);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(8);

var _show2 = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select error and status
  var error = show.displayAsset.error;
  var status = show.displayAsset.status;
  // select asset
  var asset = (0, _show2.selectAsset)(show);
  //  return props
  return {
    error: error,
    status: status,
    asset: asset
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onFileRequest: function onFileRequest(name, claimId) {
      dispatch((0, _show.fileRequested)(name, claimId));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (helmet, html, preloadedState) {
    // take the html and preloadedState and return the full page
    return '\n    <!DOCTYPE html>\n    <html lang="en" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">\n        <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <!--helmet-->\n            ' + helmet.title.toString() + '\n            ' + helmet.meta.toString() + '\n            ' + helmet.link.toString() + '\n            <!--style sheets-->\n            <link rel="stylesheet" href="/assets/css/reset.css" type="text/css">\n            <link rel="stylesheet" href="/assets/css/general.css" type="text/css">\n            <link rel="stylesheet" href="/assets/css/mediaQueries.css" type="text/css">\n            <!--google font-->\n            <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">\n        </head>\n        <body id="main-body">\n            <div class="row row--tall flex-container--column">\n                <div id="react-app" class="row row--tall flex-container--column">' + html + '</div>\n            </div>\n            <script>\n                window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\<') + '\n            </script>\n            <script src="/bundle/bundle.js"></script>\n        </body>\n    </html>\n  ';
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectSiteState = exports.selectSiteState = function selectSiteState(state) {
  return state.site;
};

var selectSiteHost = exports.selectSiteHost = function selectSiteHost(state) {
  return state.site.host;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(49);
module.exports = __webpack_require__(50);


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// app dependencies
var express = __webpack_require__(51);
var bodyParser = __webpack_require__(52);
var expressHandlebars = __webpack_require__(53);
var Handlebars = __webpack_require__(54);
var helmet = __webpack_require__(55);
var passport = __webpack_require__(22);

var _require = __webpack_require__(56),
    serializeSpeechUser = _require.serializeSpeechUser,
    deserializeSpeechUser = _require.deserializeSpeechUser;

var cookieSession = __webpack_require__(57);
var http = __webpack_require__(58);
// logging dependencies
var logger = __webpack_require__(2);

function Server() {
  var _this = this;

  this.configureMysql = function (mysqlConfig) {
    __webpack_require__(23).configure(mysqlConfig);
  };
  this.configureSite = function (siteConfig) {
    __webpack_require__(3).configure(siteConfig);
    _this.sessionKey = siteConfig.auth.sessionKey;
    _this.PORT = siteConfig.details.port;
    _this.localPublicFolder = siteConfig.localPublicFolder;
  };
  this.configureSlack = function (slackConfig) {
    __webpack_require__(24).configure(slackConfig);
  };
  this.createApp = function () {
    // create an Express application
    var app = express();

    // trust the proxy to get ip address for us
    app.enable('trust proxy');

    // add middleware
    app.use(helmet()); // set HTTP headers to protect against well-known web vulnerabilties
    app.use(express.static(__dirname + '/public')); // 'express.static' to serve static files from public directory
    if (_this.localPublicFolder) {
      app.use(express.static('' + _this.localPublicFolder)); // use process.cwb to see where this started from?
    };
    app.use(bodyParser.json()); // 'body parser' for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // 'body parser' for parsing application/x-www-form-urlencoded
    app.use(function (req, res, next) {
      // custom logging middleware to log all incoming http requests
      logger.verbose('Request on ' + req.originalUrl + ' from ' + req.ip);
      next();
    });

    // configure passport
    passport.serializeUser(serializeSpeechUser);
    passport.deserializeUser(deserializeSpeechUser);
    var localSignupStrategy = __webpack_require__(59);
    var localLoginStrategy = __webpack_require__(70);
    passport.use('local-signup', localSignupStrategy);
    passport.use('local-login', localLoginStrategy);
    // initialize passport
    app.use(cookieSession({
      name: 'session',
      keys: [_this.sessionKey],
      maxAge: 24 * 60 * 60 * 1000 // i.e. 24 hours
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // configure handlebars & register it with express app
    var hbs = expressHandlebars.create({
      defaultLayout: 'embed',
      handlebars: Handlebars
    });
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    // set the routes on the app
    __webpack_require__(71)(app);
    __webpack_require__(72)(app);
    __webpack_require__(78)(app);
    __webpack_require__(144)(app);
    __webpack_require__(155)(app);

    _this.app = app;
  };
  this.initialize = function () {
    __webpack_require__(156)(logger);
    __webpack_require__(158)(logger);
    _this.createApp();
    _this.server = http.Server(_this.app);
  };
  this.start = function () {
    var db = __webpack_require__(6);
    // sync sequelize
    db.sequelize.sync()
    // start the server
    .then(function () {
      _this.server.listen(_this.PORT, function () {
        logger.info('Server is listening on PORT ' + _this.PORT);
      });
    }).catch(function (error) {
      logger.error('Startup Error:', error);
    });
  };
};

module.exports = Server;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);

module.exports = {
  serializeSpeechUser: function serializeSpeechUser(user, done) {
    // returns user data to be serialized into session
    logger.debug('serializing user');
    done(null, user);
  },
  deserializeSpeechUser: function deserializeSpeechUser(user, done) {
    // deserializes session and populates additional info to req.user
    logger.debug('deserializing user');
    done(null, user);
  }
};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var PassportLocalStrategy = __webpack_require__(25).Strategy;
var lbryApi = __webpack_require__(16);
var logger = __webpack_require__(2);
var db = __webpack_require__(6);

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function (username, password, done) {
  logger.verbose('new channel signup request. user: ' + username + ' pass: ' + password + ' .');
  var userInfo = {};
  // server-side validaton of inputs (username, password)

  // create the channel and retrieve the metadata
  return lbryApi.createChannel('@' + username).then(function (tx) {
    // create user record
    var userData = {
      userName: username,
      password: password
    };
    logger.verbose('userData >', userData);
    // create user record
    var channelData = {
      channelName: '@' + username,
      channelClaimId: tx.claim_id
    };
    logger.verbose('channelData >', channelData);
    // create certificate record
    var certificateData = {
      claimId: tx.claim_id,
      name: '@' + username
      // address,
    };
    logger.verbose('certificateData >', certificateData);
    // save user and certificate to db
    return Promise.all([db.User.create(userData), db.Channel.create(channelData), db.Certificate.create(certificateData)]);
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        newUser = _ref2[0],
        newChannel = _ref2[1],
        newCertificate = _ref2[2];

    logger.verbose('user and certificate successfully created');
    // store the relevant newUser info to be passed back for req.User
    userInfo['id'] = newUser.id;
    userInfo['userName'] = newUser.userName;
    userInfo['channelName'] = newChannel.channelName;
    userInfo['channelClaimId'] = newChannel.channelClaimId;
    // associate the instances
    return Promise.all([newCertificate.setChannel(newChannel), newChannel.setUser(newUser)]);
  }).then(function () {
    logger.verbose('user and certificate successfully associated');
    return db.Certificate.getShortChannelIdFromLongChannelId(userInfo.channelClaimId, userInfo.channelName);
  }).then(function (shortChannelId) {
    userInfo['shortChannelId'] = shortChannelId;
    return done(null, userInfo);
  }).catch(function (error) {
    logger.error('signup error', error);
    return done(error);
  });
});

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var lbryConfig = {
  api: {
    apiHost: 'localhost',
    apiPort: '5279'
  }
};

module.exports = lbryConfig;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("universal-analytics");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);

var _require = __webpack_require__(27),
    returnShortId = _require.returnShortId;

module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING,
      BOOLEAN = _ref.BOOLEAN,
      INTEGER = _ref.INTEGER,
      TEXT = _ref.TEXT,
      DECIMAL = _ref.DECIMAL;

  var Certificate = sequelize.define('Certificate', {
    address: {
      type: STRING,
      default: null
    },
    amount: {
      type: DECIMAL(19, 8),
      default: null
    },
    claimId: {
      type: STRING,
      default: null
    },
    claimSequence: {
      type: INTEGER,
      default: null
    },
    decodedClaim: {
      type: BOOLEAN,
      default: null
    },
    depth: {
      type: INTEGER,
      default: null
    },
    effectiveAmount: {
      type: DECIMAL(19, 8),
      default: null
    },
    hasSignature: {
      type: BOOLEAN,
      default: null
    },
    height: {
      type: INTEGER,
      default: null
    },
    hex: {
      type: TEXT('long'),
      default: null
    },
    name: {
      type: STRING,
      default: null
    },
    nout: {
      type: INTEGER,
      default: null
    },
    txid: {
      type: STRING,
      default: null
    },
    validAtHeight: {
      type: INTEGER,
      default: null
    },
    outpoint: {
      type: STRING,
      default: null
    },
    valueVersion: {
      type: STRING,
      default: null
    },
    claimType: {
      type: STRING,
      default: null
    },
    certificateVersion: {
      type: STRING,
      default: null
    },
    keyType: {
      type: STRING,
      default: null
    },
    publicKey: {
      type: TEXT('long'),
      default: null
    }
  }, {
    freezeTableName: true
  });

  Certificate.associate = function (db) {
    Certificate.belongsTo(db.Channel, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Certificate.getShortChannelIdFromLongChannelId = function (longChannelId, channelName) {
    var _this = this;

    logger.debug('getShortChannelIdFromLongChannelId ' + channelName + ':' + longChannelId);
    return new Promise(function (resolve, reject) {
      _this.findAll({
        where: { name: channelName },
        order: [['height', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            throw new Error('No channel(s) found with that channel name');
          default:
            return resolve(returnShortId(result, longChannelId));
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Certificate.getLongChannelIdFromShortChannelId = function (channelName, channelClaimId) {
    var _this2 = this;

    logger.debug('getLongChannelIdFromShortChannelId(' + channelName + ', ' + channelClaimId + ')');
    return new Promise(function (resolve, reject) {
      _this2.findAll({
        where: {
          name: channelName,
          claimId: {
            $like: channelClaimId + '%'
          }
        },
        order: [['height', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            return resolve(null);
          default:
            // note results must be sorted
            return resolve(result[0].claimId);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Certificate.getLongChannelIdFromChannelName = function (channelName) {
    var _this3 = this;

    logger.debug('getLongChannelIdFromChannelName(' + channelName + ')');
    return new Promise(function (resolve, reject) {
      _this3.findAll({
        where: { name: channelName },
        order: [['effectiveAmount', 'DESC'], ['height', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            return resolve(null);
          default:
            return resolve(result[0].claimId);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Certificate.validateLongChannelId = function (name, claimId) {
    var _this4 = this;

    logger.debug('validateLongChannelId(' + name + ', ' + claimId + ')');
    return new Promise(function (resolve, reject) {
      _this4.findOne({
        where: { name: name, claimId: claimId }
      }).then(function (result) {
        if (!result) {
          return resolve(null);
        };
        resolve(claimId);
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Certificate.getLongChannelId = function (channelName, channelClaimId) {
    logger.debug('getLongChannelId(' + channelName + ', ' + channelClaimId + ')');
    if (channelClaimId && channelClaimId.length === 40) {
      // if a full channel id is provided
      return this.validateLongChannelId(channelName, channelClaimId);
    } else if (channelClaimId && channelClaimId.length < 40) {
      // if a short channel id is provided
      return this.getLongChannelIdFromShortChannelId(channelName, channelClaimId);
    } else {
      return this.getLongChannelIdFromChannelName(channelName); // if no channel id provided
    }
  };

  return Certificate;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING;

  var Channel = sequelize.define('Channel', {
    channelName: {
      type: STRING,
      allowNull: false
    },
    channelClaimId: {
      type: STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  Channel.associate = function (db) {
    Channel.belongsTo(db.User);
    Channel.hasOne(db.Certificate);
  };

  return Channel;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);

var _require = __webpack_require__(27),
    returnShortId = _require.returnShortId;

var _require2 = __webpack_require__(3),
    defaultThumbnail = _require2.assetDefaults.thumbnail,
    host = _require2.details.host;

function determineFileExtensionFromContentType(contentType) {
  switch (contentType) {
    case 'image/jpeg':
    case 'image/jpg':
      return 'jpeg';
    case 'image/png':
      return 'png';
    case 'image/gif':
      return 'gif';
    case 'video/mp4':
      return 'mp4';
    default:
      logger.debug('setting unknown file type as file extension jpeg');
      return 'jpeg';
  }
};

function determineThumbnail(storedThumbnail, defaultThumbnail) {
  if (storedThumbnail === '') {
    return defaultThumbnail;
  }
  return storedThumbnail;
};

function prepareClaimData(claim) {
  // logger.debug('preparing claim data based on resolved data:', claim);
  claim['thumbnail'] = determineThumbnail(claim.thumbnail, defaultThumbnail);
  claim['fileExt'] = determineFileExtensionFromContentType(claim.contentType);
  claim['host'] = host;
  return claim;
};

module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING,
      BOOLEAN = _ref.BOOLEAN,
      INTEGER = _ref.INTEGER,
      TEXT = _ref.TEXT,
      DECIMAL = _ref.DECIMAL;

  var Claim = sequelize.define('Claim', {
    address: {
      type: STRING,
      default: null
    },
    amount: {
      type: DECIMAL(19, 8),
      default: null
    },
    claimId: {
      type: STRING,
      default: null
    },
    claimSequence: {
      type: INTEGER,
      default: null
    },
    decodedClaim: {
      type: BOOLEAN,
      default: null
    },
    depth: {
      type: INTEGER,
      default: null
    },
    effectiveAmount: {
      type: DECIMAL(19, 8),
      default: null
    },
    hasSignature: {
      type: BOOLEAN,
      default: null
    },
    height: {
      type: INTEGER,
      default: null
    },
    hex: {
      type: TEXT('long'),
      default: null
    },
    name: {
      type: STRING,
      default: null
    },
    nout: {
      type: INTEGER,
      default: null
    },
    txid: {
      type: STRING,
      default: null
    },
    validAtHeight: {
      type: INTEGER,
      default: null
    },
    outpoint: {
      type: STRING,
      default: null
    },
    claimType: {
      type: STRING,
      default: null
    },
    certificateId: {
      type: STRING,
      default: null
    },
    author: {
      type: STRING,
      default: null
    },
    description: {
      type: TEXT('long'),
      default: null
    },
    language: {
      type: STRING,
      default: null
    },
    license: {
      type: STRING,
      default: null
    },
    licenseUrl: {
      type: STRING,
      default: null
    },
    nsfw: {
      type: BOOLEAN,
      default: null
    },
    preview: {
      type: STRING,
      default: null
    },
    thumbnail: {
      type: STRING,
      default: null
    },
    title: {
      type: STRING,
      default: null
    },
    metadataVersion: {
      type: STRING,
      default: null
    },
    contentType: {
      type: STRING,
      default: null
    },
    source: {
      type: STRING,
      default: null
    },
    sourceType: {
      type: STRING,
      default: null
    },
    sourceVersion: {
      type: STRING,
      default: null
    },
    streamVersion: {
      type: STRING,
      default: null
    },
    valueVersion: {
      type: STRING,
      default: null
    },
    channelName: {
      type: STRING,
      allowNull: true,
      default: null
    }
  }, {
    freezeTableName: true
  });

  Claim.associate = function (db) {
    Claim.belongsTo(db.File, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  Claim.getShortClaimIdFromLongClaimId = function (claimId, claimName) {
    var _this = this;

    logger.debug('Claim.getShortClaimIdFromLongClaimId for ' + claimName + '#' + claimId);
    return new Promise(function (resolve, reject) {
      _this.findAll({
        where: { name: claimName },
        order: [['height', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            throw new Error('No claim(s) found with that claim name');
          default:
            resolve(returnShortId(result, claimId));
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.getAllChannelClaims = function (channelClaimId) {
    var _this2 = this;

    logger.debug('Claim.getAllChannelClaims for ' + channelClaimId);
    return new Promise(function (resolve, reject) {
      _this2.findAll({
        where: { certificateId: channelClaimId },
        order: [['height', 'ASC']],
        raw: true // returns an array of only data, not an array of instances
      }).then(function (channelClaimsArray) {
        // logger.debug('channelclaimsarray length:', channelClaimsArray.length);
        switch (channelClaimsArray.length) {
          case 0:
            return resolve(null);
          default:
            channelClaimsArray.forEach(function (claim) {
              claim['fileExt'] = determineFileExtensionFromContentType(claim.contentType);
              claim['thumbnail'] = determineThumbnail(claim.thumbnail, defaultThumbnail);
              return claim;
            });
            return resolve(channelClaimsArray);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.getClaimIdByLongChannelId = function (channelClaimId, claimName) {
    var _this3 = this;

    logger.debug('finding claim id for claim ' + claimName + ' from channel ' + channelClaimId);
    return new Promise(function (resolve, reject) {
      _this3.findAll({
        where: { name: claimName, certificateId: channelClaimId },
        order: [['id', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            return resolve(null);
          case 1:
            return resolve(result[0].claimId);
          default:
            logger.error(result.length + ' records found for "' + claimName + '" in channel "' + channelClaimId + '"');
            return resolve(result[0].claimId);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.getLongClaimIdFromShortClaimId = function (name, shortId) {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      _this4.findAll({
        where: {
          name: name,
          claimId: {
            $like: shortId + '%'
          } },
        order: [['height', 'ASC']]
      }).then(function (result) {
        switch (result.length) {
          case 0:
            return resolve(null);
          default:
            // note results must be sorted
            return resolve(result[0].claimId);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.getTopFreeClaimIdByClaimName = function (name) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      _this5.findAll({
        where: { name: name },
        order: [['effectiveAmount', 'DESC'], ['height', 'ASC']] // note: maybe height and effective amount need to switch?
      }).then(function (result) {
        logger.debug('length of result', result.length);
        switch (result.length) {
          case 0:
            return resolve(null);
          default:
            return resolve(result[0].dataValues.claimId);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.validateLongClaimId = function (name, claimId) {
    var _this6 = this;

    return new Promise(function (resolve, reject) {
      _this6.findOne({
        where: { name: name, claimId: claimId }
      }).then(function (result) {
        if (!result) {
          return resolve(null);
        };
        resolve(claimId);
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  Claim.getLongClaimId = function (claimName, claimId) {
    logger.debug('getLongClaimId(' + claimName + ', ' + claimId + ')');
    if (claimId && claimId.length === 40) {
      // if a full claim id is provided
      return this.validateLongClaimId(claimName, claimId);
    } else if (claimId && claimId.length < 40) {
      return this.getLongClaimIdFromShortClaimId(claimName, claimId); // if a short claim id is provided
    } else {
      return this.getTopFreeClaimIdByClaimName(claimName); // if no claim id is provided
    }
  };

  Claim.resolveClaim = function (name, claimId) {
    var _this7 = this;

    logger.debug('Claim.resolveClaim: ' + name + ' ' + claimId);
    return new Promise(function (resolve, reject) {
      _this7.findAll({
        where: { name: name, claimId: claimId }
      }).then(function (claimArray) {
        switch (claimArray.length) {
          case 0:
            return resolve(null);
          case 1:
            return resolve(prepareClaimData(claimArray[0].dataValues));
          default:
            logger.error('more than one record matches ' + name + '#' + claimId + ' in db.Claim');
            return resolve(prepareClaimData(claimArray[0].dataValues));
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  return Claim;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING,
      BOOLEAN = _ref.BOOLEAN,
      INTEGER = _ref.INTEGER;

  var File = sequelize.define('File', {
    name: {
      type: STRING,
      allowNull: false
    },
    claimId: {
      type: STRING,
      allowNull: false
    },
    address: {
      type: STRING,
      allowNull: false
    },
    outpoint: {
      type: STRING,
      allowNull: false
    },
    height: {
      type: INTEGER,
      allowNull: false,
      default: 0
    },
    fileName: {
      type: STRING,
      allowNull: false
    },
    filePath: {
      type: STRING,
      allowNull: false
    },
    fileType: {
      type: STRING
    },
    nsfw: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    trendingEligible: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    freezeTableName: true
  });

  File.associate = function (db) {
    File.hasMany(db.Request);
    File.hasOne(db.Claim);
  };

  File.getRecentClaims = function () {
    return this.findAll({
      where: { nsfw: false, trendingEligible: true },
      order: [['createdAt', 'DESC']],
      limit: 25
    });
  };

  return File;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING,
      BOOLEAN = _ref.BOOLEAN,
      TEXT = _ref.TEXT;

  var Request = sequelize.define('Request', {
    action: {
      type: STRING,
      allowNull: false
    },
    url: {
      type: STRING,
      allowNull: false
    },
    ipAddress: {
      type: STRING,
      allowNull: true
    },
    result: {
      type: TEXT('long'),
      allowNull: true,
      default: null
    }
  }, {
    freezeTableName: true
  });

  Request.associate = function (db) {
    Request.belongsTo(db.File, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Request;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bcrypt = __webpack_require__(69);
var logger = __webpack_require__(2);

module.exports = function (sequelize, _ref) {
  var STRING = _ref.STRING;

  var User = sequelize.define('User', {
    userName: {
      type: STRING,
      allowNull: false
    },
    password: {
      type: STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  User.associate = function (db) {
    User.hasOne(db.Channel);
  };

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.changePassword = function (newPassword) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      // generate a salt string to use for hashing
      bcrypt.genSalt(function (saltError, salt) {
        if (saltError) {
          logger.error('salt error', saltError);
          reject(saltError);
          return;
        }
        // generate a hashed version of the user's password
        bcrypt.hash(newPassword, salt, function (hashError, hash) {
          // if there is an error with the hash generation return the error
          if (hashError) {
            logger.error('hash error', hashError);
            reject(hashError);
            return;
          }
          // replace the current password with the new hash
          _this.update({ password: hash }).then(function () {
            resolve();
          }).catch(function (error) {
            reject(error);
          });
        });
      });
    });
  };

  // pre-save hook method to hash the user's password before the user's info is saved to the db.
  User.hook('beforeCreate', function (user, options) {
    logger.debug('User.beforeCreate hook...');
    return new Promise(function (resolve, reject) {
      // generate a salt string to use for hashing
      bcrypt.genSalt(function (saltError, salt) {
        if (saltError) {
          logger.error('salt error', saltError);
          reject(saltError);
          return;
        }
        // generate a hashed version of the user's password
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          // if there is an error with the hash generation return the error
          if (hashError) {
            logger.error('hash error', hashError);
            reject(hashError);
            return;
          }
          // replace the password string with the hash password value
          user.password = hash;
          resolve();
        });
      });
    });
  });

  return User;
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PassportLocalStrategy = __webpack_require__(25).Strategy;
var logger = __webpack_require__(2);
var db = __webpack_require__(6);

var returnUserAndChannelInfo = function returnUserAndChannelInfo(userInstance) {
  return new Promise(function (resolve, reject) {
    var userInfo = {};
    userInfo['id'] = userInstance.id;
    userInfo['userName'] = userInstance.userName;
    userInstance.getChannel().then(function (_ref) {
      var channelName = _ref.channelName,
          channelClaimId = _ref.channelClaimId;

      userInfo['channelName'] = channelName;
      userInfo['channelClaimId'] = channelClaimId;
      return db.Certificate.getShortChannelIdFromLongChannelId(channelClaimId, channelName);
    }).then(function (shortChannelId) {
      userInfo['shortChannelId'] = shortChannelId;
      resolve(userInfo);
    }).catch(function (error) {
      reject(error);
    });
  });
};

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function (username, password, done) {
  return db.User.findOne({
    where: { userName: username }
  }).then(function (user) {
    if (!user) {
      logger.debug('no user found');
      return done(null, false, { message: 'Incorrect username or password' });
    }
    return user.comparePassword(password).then(function (isMatch) {
      if (!isMatch) {
        logger.debug('incorrect password');
        return done(null, false, { message: 'Incorrect username or password' });
      }
      logger.debug('Password was a match, returning User');
      return returnUserAndChannelInfo(user).then(function (userInfo) {
        return done(null, userInfo);
      }).catch(function (error) {
        return error;
      });
    }).catch(function (error) {
      return error;
    });
  }).catch(function (error) {
    return done(error);
  });
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);
var passport = __webpack_require__(22);

module.exports = function (app) {
  // route for sign up
  app.post('/signup', passport.authenticate('local-signup'), function (req, res) {
    logger.verbose('successful signup for ' + req.user.channelName);
    res.status(200).json({
      success: true,
      channelName: req.user.channelName,
      channelClaimId: req.user.channelClaimId,
      shortChannelId: req.user.shortChannelId
    });
  });
  // route for log in
  app.post('/login', function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).json({
          success: false,
          message: info.message
        });
      }
      logger.debug('successful login');
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.status(200).json({
          success: true,
          channelName: req.user.channelName,
          channelClaimId: req.user.channelClaimId,
          shortChannelId: req.user.shortChannelId
        });
      });
    })(req, res, next);
  });
  // route to log out
  app.get('/logout', function (req, res) {
    req.logout();
    res.status(200).json({ success: true, message: 'you successfully logged out' });
  });
  // see if user is authenticated, and return credentials if so
  app.get('/user', function (req, res) {
    if (req.user) {
      res.status(200).json({ success: true, data: req.user });
    } else {
      res.status(401).json({ success: false, message: 'user is not logged in' });
    }
  });
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var logger = __webpack_require__(2);
var multipart = __webpack_require__(73);

var _require = __webpack_require__(3),
    uploadDirectory = _require.publishing.uploadDirectory,
    host = _require.details.host;

var multipartMiddleware = multipart({ uploadDir: uploadDirectory });
var db = __webpack_require__(6);

var _require2 = __webpack_require__(74),
    claimNameIsAvailable = _require2.claimNameIsAvailable,
    checkChannelAvailability = _require2.checkChannelAvailability,
    publish = _require2.publish;

var _require3 = __webpack_require__(16),
    getClaimList = _require3.getClaimList,
    resolveUri = _require3.resolveUri,
    getClaim = _require3.getClaim;

var _require4 = __webpack_require__(28),
    addGetResultsToFileData = _require4.addGetResultsToFileData,
    createBasicPublishParams = _require4.createBasicPublishParams,
    createThumbnailPublishParams = _require4.createThumbnailPublishParams,
    parsePublishApiRequestBody = _require4.parsePublishApiRequestBody,
    parsePublishApiRequestFiles = _require4.parsePublishApiRequestFiles,
    createFileData = _require4.createFileData;

var errorHandlers = __webpack_require__(29);

var _require5 = __webpack_require__(17),
    sendGATimingEvent = _require5.sendGATimingEvent;

var _require6 = __webpack_require__(76),
    authenticateUser = _require6.authenticateUser;

var _require7 = __webpack_require__(30),
    getChannelData = _require7.getChannelData,
    getChannelClaims = _require7.getChannelClaims,
    getClaimId = _require7.getClaimId;

var NO_CHANNEL = 'NO_CHANNEL';
var NO_CLAIM = 'NO_CLAIM';

module.exports = function (app) {
  // route to check whether site has published to a channel
  app.get('/api/channel/availability/:name', function (_ref, res) {
    var ip = _ref.ip,
        originalUrl = _ref.originalUrl,
        name = _ref.params.name;

    var gaStartTime = Date.now();
    checkChannelAvailability(name).then(function (availableName) {
      res.status(200).json(availableName);
      sendGATimingEvent('end-to-end', 'claim name availability', name, gaStartTime, Date.now());
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to get a short channel id from long channel Id
  app.get('/api/channel/short-id/:longId/:name', function (_ref2, res) {
    var ip = _ref2.ip,
        originalUrl = _ref2.originalUrl,
        params = _ref2.params;

    db.Certificate.getShortChannelIdFromLongChannelId(params.longId, params.name).then(function (shortId) {
      res.status(200).json(shortId);
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  app.get('/api/channel/data/:channelName/:channelClaimId', function (_ref3, res) {
    var ip = _ref3.ip,
        originalUrl = _ref3.originalUrl,
        body = _ref3.body,
        params = _ref3.params;

    var channelName = params.channelName;
    var channelClaimId = params.channelClaimId;
    if (channelClaimId === 'none') channelClaimId = null;
    getChannelData(channelName, channelClaimId, 0).then(function (data) {
      if (data === NO_CHANNEL) {
        return res.status(404).json({ success: false, message: 'No matching channel was found' });
      }
      res.status(200).json({ success: true, data: data });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  app.get('/api/channel/claims/:channelName/:channelClaimId/:page', function (_ref4, res) {
    var ip = _ref4.ip,
        originalUrl = _ref4.originalUrl,
        body = _ref4.body,
        params = _ref4.params;

    var channelName = params.channelName;
    var channelClaimId = params.channelClaimId;
    if (channelClaimId === 'none') channelClaimId = null;
    var page = params.page;
    getChannelClaims(channelName, channelClaimId, page).then(function (data) {
      if (data === NO_CHANNEL) {
        return res.status(404).json({ success: false, message: 'No matching channel was found' });
      }
      res.status(200).json({ success: true, data: data });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to run a claim_list request on the daemon
  app.get('/api/claim/list/:name', function (_ref5, res) {
    var ip = _ref5.ip,
        originalUrl = _ref5.originalUrl,
        params = _ref5.params;

    getClaimList(params.name).then(function (claimsList) {
      res.status(200).json(claimsList);
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to get an asset
  app.get('/api/claim/get/:name/:claimId', function (_ref6, res) {
    var ip = _ref6.ip,
        originalUrl = _ref6.originalUrl,
        params = _ref6.params;

    var name = params.name;
    var claimId = params.claimId;
    // resolve the claim
    db.Claim.resolveClaim(name, claimId).then(function (resolveResult) {
      // make sure a claim actually exists at that uri
      if (!resolveResult) {
        throw new Error('No matching uri found in Claim table');
      }
      var fileData = createFileData(resolveResult);
      // get the claim
      return Promise.all([fileData, getClaim(name + '#' + claimId)]);
    }).then(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          fileData = _ref8[0],
          getResult = _ref8[1];

      fileData = addGetResultsToFileData(fileData, getResult);
      return Promise.all([db.upsert(db.File, fileData, { name: name, claimId: claimId }, 'File'), getResult]);
    }).then(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          fileRecord = _ref10[0],
          _ref10$ = _ref10[1],
          message = _ref10$.message,
          completed = _ref10$.completed;

      res.status(200).json({ success: true, message: message, completed: completed });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to check whether this site published to a claim
  app.get('/api/claim/availability/:name', function (_ref11, res) {
    var ip = _ref11.ip,
        originalUrl = _ref11.originalUrl,
        name = _ref11.params.name;

    var gaStartTime = Date.now();
    claimNameIsAvailable(name).then(function (result) {
      res.status(200).json(result);
      sendGATimingEvent('end-to-end', 'claim name availability', name, gaStartTime, Date.now());
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to run a resolve request on the daemon
  app.get('/api/claim/resolve/:name/:claimId', function (_ref12, res) {
    var headers = _ref12.headers,
        ip = _ref12.ip,
        originalUrl = _ref12.originalUrl,
        params = _ref12.params;

    resolveUri(params.name + '#' + params.claimId).then(function (resolvedUri) {
      res.status(200).json(resolvedUri);
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to run a publish request on the daemon
  app.post('/api/claim/publish', multipartMiddleware, function (_ref13, res) {
    var body = _ref13.body,
        files = _ref13.files,
        headers = _ref13.headers,
        ip = _ref13.ip,
        originalUrl = _ref13.originalUrl,
        user = _ref13.user;

    // define variables
    var channelName = void 0,
        channelId = void 0,
        channelPassword = void 0,
        description = void 0,
        fileName = void 0,
        filePath = void 0,
        fileType = void 0,
        gaStartTime = void 0,
        license = void 0,
        name = void 0,
        nsfw = void 0,
        thumbnail = void 0,
        thumbnailFileName = void 0,
        thumbnailFilePath = void 0,
        thumbnailFileType = void 0,
        title = void 0;
    // record the start time of the request
    gaStartTime = Date.now();
    // validate the body and files of the request
    try {
      var _parsePublishApiReque = parsePublishApiRequestBody(body);
      // validateApiPublishRequest(body, files);


      name = _parsePublishApiReque.name;
      nsfw = _parsePublishApiReque.nsfw;
      license = _parsePublishApiReque.license;
      title = _parsePublishApiReque.title;
      description = _parsePublishApiReque.description;
      thumbnail = _parsePublishApiReque.thumbnail;

      var _parsePublishApiReque2 = parsePublishApiRequestFiles(files);

      fileName = _parsePublishApiReque2.fileName;
      filePath = _parsePublishApiReque2.filePath;
      fileType = _parsePublishApiReque2.fileType;
      thumbnailFileName = _parsePublishApiReque2.thumbnailFileName;
      thumbnailFilePath = _parsePublishApiReque2.thumbnailFilePath;
      thumbnailFileType = _parsePublishApiReque2.thumbnailFileType;
      channelName = body.channelName;
      channelId = body.channelId;
      channelPassword = body.channelPassword;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    // check channel authorization
    Promise.all([authenticateUser(channelName, channelId, channelPassword, user), claimNameIsAvailable(name), createBasicPublishParams(filePath, name, title, description, license, nsfw, thumbnail), createThumbnailPublishParams(thumbnailFilePath, name, license, nsfw)]).then(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 4),
          _ref15$ = _ref15[0],
          channelName = _ref15$.channelName,
          channelClaimId = _ref15$.channelClaimId,
          validatedClaimName = _ref15[1],
          publishParams = _ref15[2],
          thumbnailPublishParams = _ref15[3];

      // add channel details to the publish params
      if (channelName && channelClaimId) {
        publishParams['channel_name'] = channelName;
        publishParams['channel_id'] = channelClaimId;
      }
      // publish the thumbnail
      if (thumbnailPublishParams) {
        publish(thumbnailPublishParams, thumbnailFileName, thumbnailFileType);
      }
      // publish the asset
      return publish(publishParams, fileName, fileType);
    }).then(function (result) {
      res.status(200).json({
        success: true,
        message: 'publish completed successfully',
        data: {
          name: name,
          claimId: result.claim_id,
          url: host + '/' + result.claim_id + '/' + name,
          lbryTx: result
        }
      });
      // record the publish end time and send to google analytics
      sendGATimingEvent('end-to-end', 'publish', fileType, gaStartTime, Date.now());
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to get a short claim id from long claim Id
  app.get('/api/claim/short-id/:longId/:name', function (_ref16, res) {
    var ip = _ref16.ip,
        originalUrl = _ref16.originalUrl,
        body = _ref16.body,
        params = _ref16.params;

    db.Claim.getShortClaimIdFromLongClaimId(params.longId, params.name).then(function (shortId) {
      res.status(200).json({ success: true, data: shortId });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  app.post('/api/claim/long-id', function (_ref17, res) {
    var ip = _ref17.ip,
        originalUrl = _ref17.originalUrl,
        body = _ref17.body,
        params = _ref17.params;

    logger.debug('body:', body);
    var channelName = body.channelName;
    var channelClaimId = body.channelClaimId;
    var claimName = body.claimName;
    var claimId = body.claimId;
    getClaimId(channelName, channelClaimId, claimName, claimId).then(function (result) {
      if (result === NO_CHANNEL) {
        return res.status(404).json({ success: false, message: 'No matching channel could be found' });
      }
      if (result === NO_CLAIM) {
        return res.status(404).json({ success: false, message: 'No matching claim id could be found' });
      }
      res.status(200).json({ success: true, data: result });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  app.get('/api/claim/data/:claimName/:claimId', function (_ref18, res) {
    var ip = _ref18.ip,
        originalUrl = _ref18.originalUrl,
        body = _ref18.body,
        params = _ref18.params;

    var claimName = params.claimName;
    var claimId = params.claimId;
    if (claimId === 'none') claimId = null;
    db.Claim.resolveClaim(claimName, claimId).then(function (claimInfo) {
      if (!claimInfo) {
        return res.status(404).json({ success: false, message: 'No claim could be found' });
      }
      res.status(200).json({ success: true, data: claimInfo });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
  // route to see if asset is available locally
  app.get('/api/file/availability/:name/:claimId', function (_ref19, res) {
    var ip = _ref19.ip,
        originalUrl = _ref19.originalUrl,
        params = _ref19.params;

    var name = params.name;
    var claimId = params.claimId;
    db.File.findOne({ where: { name: name, claimId: claimId } }).then(function (result) {
      if (result) {
        return res.status(200).json({ success: true, data: true });
      }
      res.status(200).json({ success: true, data: false });
    }).catch(function (error) {
      errorHandlers.handleErrorResponse(originalUrl, ip, error, res);
    });
  });
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("connect-multiparty");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = __webpack_require__(2);
var db = __webpack_require__(6);
var lbryApi = __webpack_require__(16);
var publishHelpers = __webpack_require__(28);

var _require = __webpack_require__(3),
    _require$publishing = _require.publishing,
    primaryClaimAddress = _require$publishing.primaryClaimAddress,
    additionalClaimAddresses = _require$publishing.additionalClaimAddresses;

var Sequelize = __webpack_require__(26);
var Op = Sequelize.Op;

module.exports = {
  publish: function publish(publishParams, fileName, fileType) {
    return new Promise(function (resolve, reject) {
      var publishResults = void 0,
          certificateId = void 0,
          channelName = void 0;
      // publish the file
      return lbryApi.publishClaim(publishParams).then(function (tx) {
        logger.info('Successfully published ' + publishParams.name + ' ' + fileName, tx);
        publishResults = tx;
        // get the channel information
        if (publishParams.channel_name) {
          logger.debug('this claim was published in channel: ' + publishParams.channel_name);
          return db.Channel.findOne({ where: { channelName: publishParams.channel_name } });
        } else {
          logger.debug('this claim was not published in a channel');
          return null;
        }
      }).then(function (channel) {
        // set channel information
        certificateId = null;
        channelName = null;
        if (channel) {
          certificateId = channel.channelClaimId;
          channelName = channel.channelName;
        }
        logger.debug('certificateId: ' + certificateId);
      }).then(function () {
        // create the File record
        var fileRecord = {
          name: publishParams.name,
          claimId: publishResults.claim_id,
          title: publishParams.metadata.title,
          description: publishParams.metadata.description,
          address: publishParams.claim_address,
          outpoint: publishResults.txid + ':' + publishResults.nout,
          height: 0,
          fileName: fileName,
          filePath: publishParams.file_path,
          fileType: fileType,
          nsfw: publishParams.metadata.nsfw
        };
        // create the Claim record
        var claimRecord = {
          name: publishParams.name,
          claimId: publishResults.claim_id,
          title: publishParams.metadata.title,
          description: publishParams.metadata.description,
          address: publishParams.claim_address,
          thumbnail: publishParams.metadata.thumbnail,
          outpoint: publishResults.txid + ':' + publishResults.nout,
          height: 0,
          contentType: fileType,
          nsfw: publishParams.metadata.nsfw,
          amount: publishParams.bid,
          certificateId: certificateId,
          channelName: channelName
        };
        // upsert criteria
        var upsertCriteria = {
          name: publishParams.name,
          claimId: publishResults.claim_id
        };
        // upsert the records
        return Promise.all([db.upsert(db.File, fileRecord, upsertCriteria, 'File'), db.upsert(db.Claim, claimRecord, upsertCriteria, 'Claim')]);
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            file = _ref2[0],
            claim = _ref2[1];

        logger.debug('File and Claim records successfully created');
        return Promise.all([file.setClaim(claim), claim.setFile(file)]);
      }).then(function () {
        logger.debug('File and Claim records successfully associated');
        resolve(publishResults); // resolve the promise with the result from lbryApi.publishClaim;
      }).catch(function (error) {
        logger.error('PUBLISH ERROR', error);
        publishHelpers.deleteTemporaryFile(publishParams.file_path); // delete the local file
        reject(error);
      });
    });
  },
  claimNameIsAvailable: function claimNameIsAvailable(name) {
    var claimAddresses = additionalClaimAddresses || [];
    claimAddresses.push(primaryClaimAddress);
    // find any records where the name is used
    return db.Claim.findAll({
      attributes: ['address'],
      where: {
        name: name,
        address: _defineProperty({}, Op.or, claimAddresses)
      }
    }).then(function (result) {
      if (result.length >= 1) {
        throw new Error('That claim is already in use');
      };
      return name;
    }).catch(function (error) {
      throw error;
    });
  },
  checkChannelAvailability: function checkChannelAvailability(name) {
    return db.Channel.findAll({
      where: { channelName: name }
    }).then(function (result) {
      if (result.length >= 1) {
        throw new Error('That channel has already been claimed');
      }
      return name;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var db = __webpack_require__(6);
var logger = __webpack_require__(2);

module.exports = {
  authenticateUser: function authenticateUser(channelName, channelId, channelPassword, user) {
    // case: no channelName or channel Id are provided (anonymous), regardless of whether user token is provided
    if (!channelName && !channelId) {
      return {
        channelName: null,
        channelClaimId: null
      };
    }
    // case: channelName or channel Id are provided with user token
    if (user) {
      if (channelName && channelName !== user.channelName) {
        throw new Error('the provided channel name does not match user credentials');
      }
      if (channelId && channelId !== user.channelClaimId) {
        throw new Error('the provided channel id does not match user credentials');
      }
      return {
        channelName: user.channelName,
        channelClaimId: user.channelClaimId
      };
    }
    // case: channelName or channel Id are provided with password instead of user token
    if (!channelPassword) throw new Error('no channel password provided');
    return module.exports.authenticateChannelCredentials(channelName, channelId, channelPassword);
  },
  authenticateChannelCredentials: function authenticateChannelCredentials(channelName, channelId, userPassword) {
    return new Promise(function (resolve, reject) {
      // hoisted variables
      var channelData = void 0;
      // build the params for finding the channel
      var channelFindParams = {};
      if (channelName) channelFindParams['channelName'] = channelName;
      if (channelId) channelFindParams['channelClaimId'] = channelId;
      // find the channel
      db.Channel.findOne({
        where: channelFindParams
      }).then(function (channel) {
        if (!channel) {
          logger.debug('no channel found');
          throw new Error('Authentication failed, you do not have access to that channel');
        }
        channelData = channel.get();
        logger.debug('channel data:', channelData);
        return db.User.findOne({
          where: { userName: channelData.channelName.substring(1) }
        });
      }).then(function (user) {
        if (!user) {
          logger.debug('no user found');
          throw new Error('Authentication failed, you do not have access to that channel');
        }
        return user.comparePassword(userPassword);
      }).then(function (isMatch) {
        if (!isMatch) {
          logger.debug('incorrect password');
          throw new Error('Authentication failed, you do not have access to that channel');
        }
        logger.debug('...password was a match...');
        resolve(channelData);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CLAIMS_PER_PAGE = 12;

module.exports = {
  returnPaginatedChannelClaims: function returnPaginatedChannelClaims(channelName, longChannelClaimId, claims, page) {
    var totalPages = module.exports.determineTotalPages(claims);
    var paginationPage = module.exports.getPageFromQuery(page);
    var viewData = {
      channelName: channelName,
      longChannelClaimId: longChannelClaimId,
      claims: module.exports.extractPageFromClaims(claims, paginationPage),
      previousPage: module.exports.determinePreviousPage(paginationPage),
      currentPage: paginationPage,
      nextPage: module.exports.determineNextPage(totalPages, paginationPage),
      totalPages: totalPages,
      totalResults: module.exports.determineTotalClaims(claims)
    };
    return viewData;
  },
  getPageFromQuery: function getPageFromQuery(page) {
    if (page) {
      return parseInt(page);
    }
    return 1;
  },
  extractPageFromClaims: function extractPageFromClaims(claims, pageNumber) {
    if (!claims) {
      return []; // if no claims, return this default
    }
    // logger.debug('claims is array?', Array.isArray(claims));
    // logger.debug(`pageNumber ${pageNumber} is number?`, Number.isInteger(pageNumber));
    var claimStartIndex = (pageNumber - 1) * CLAIMS_PER_PAGE;
    var claimEndIndex = claimStartIndex + CLAIMS_PER_PAGE;
    var pageOfClaims = claims.slice(claimStartIndex, claimEndIndex);
    return pageOfClaims;
  },
  determineTotalPages: function determineTotalPages(claims) {
    if (!claims) {
      return 0;
    } else {
      var totalClaims = claims.length;
      if (totalClaims < CLAIMS_PER_PAGE) {
        return 1;
      }
      var fullPages = Math.floor(totalClaims / CLAIMS_PER_PAGE);
      var remainder = totalClaims % CLAIMS_PER_PAGE;
      if (remainder === 0) {
        return fullPages;
      }
      return fullPages + 1;
    }
  },
  determinePreviousPage: function determinePreviousPage(currentPage) {
    if (currentPage === 1) {
      return null;
    }
    return currentPage - 1;
  },
  determineNextPage: function determineNextPage(totalPages, currentPage) {
    if (currentPage === totalPages) {
      return null;
    }
    return currentPage + 1;
  },
  determineTotalClaims: function determineTotalClaims(claims) {
    if (!claims) {
      return 0;
    }
    return claims.length;
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3),
    host = _require.details;

var handlePageRender = __webpack_require__(31);

module.exports = function (app) {
  // route for the home page
  app.get('/', function (req, res) {
    handlePageRender(req, res);
  });
  // route to display login page
  app.get('/login', function (req, res) {
    handlePageRender(req, res);
  });
  // route to show 'about' page
  app.get('/about', function (req, res) {
    handlePageRender(req, res);
  });
  // route to display a list of the trending images
  app.get('/trending', function (req, res) {
    res.status(301).redirect('/popular');
  });
  app.get('/popular', function (req, res) {
    handlePageRender(req, res);
  });
  // route to display a list of the trending images
  app.get('/new', function (req, res) {
    handlePageRender(req, res);
  });
  // route to send embedable video player (for twitter)
  app.get('/embed/:claimId/:name', function (_ref, res) {
    var params = _ref.params;

    var claimId = params.claimId;
    var name = params.name;
    // get and render the content
    res.status(200).render('embed', { layout: 'embed', host: host, claimId: claimId, name: name });
  });
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actions.FILE_SELECTED:
      return Object.assign({}, initialState, { // note: clears to initial state
        file: action.data
      });
    case actions.FILE_CLEAR:
      return initialState;
    case actions.METADATA_UPDATE:
      return Object.assign({}, state, {
        metadata: Object.assign({}, state.metadata, _defineProperty({}, action.data.name, action.data.value))
      });
    case actions.CLAIM_UPDATE:
      return Object.assign({}, state, {
        claim: action.data
      });
    case actions.SET_PUBLISH_IN_CHANNEL:
      return Object.assign({}, state, {
        publishInChannel: action.channel
      });
    case actions.PUBLISH_STATUS_UPDATE:
      return Object.assign({}, state, {
        status: action.data
      });
    case actions.ERROR_UPDATE:
      return Object.assign({}, state, {
        error: Object.assign({}, state.error, _defineProperty({}, action.data.name, action.data.value))
      });
    case actions.SELECTED_CHANNEL_UPDATE:
      return Object.assign({}, state, {
        selectedChannel: action.data
      });
    case actions.TOGGLE_METADATA_INPUTS:
      return Object.assign({}, state, {
        showMetadataInputs: action.data
      });
    case actions.THUMBNAIL_NEW:
      return Object.assign({}, state, {
        thumbnail: action.data
      });
    default:
      return state;
  }
};

var _publish_action_types = __webpack_require__(34);

var actions = _interopRequireWildcard(_publish_action_types);

var _publish_channel_select_states = __webpack_require__(35);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(3),
    publishing = _require.publishing;

var initialState = {
  disabled: publishing.disabled,
  disabledMessage: publishing.disabledMessage,
  publishInChannel: false,
  selectedChannel: _publish_channel_select_states.LOGIN,
  showMetadataInputs: false,
  status: {
    status: null,
    message: null
  },
  error: {
    file: null,
    url: null,
    channel: null,
    publishSubmit: null
  },
  file: null,
  claim: '',
  metadata: {
    title: '',
    description: '',
    license: '',
    nsfw: false
  },
  thumbnail: null
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case actions.CHANNEL_UPDATE:
      return Object.assign({}, state, {
        loggedInChannel: action.data
      });
    default:
      return state;
  }
};

var _channel_action_types = __webpack_require__(36);

var actions = _interopRequireWildcard(_channel_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  loggedInChannel: {
    name: null,
    shortId: null,
    longId: null
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    // handle request
    case actions.REQUEST_ERROR:
      return Object.assign({}, state, {
        request: Object.assign({}, state.request, {
          error: action.data
        })
      });
    case actions.REQUEST_UPDATE:
      return Object.assign({}, state, {
        request: Object.assign({}, state.request, {
          type: action.data.requestType,
          id: action.data.requestId
        })
      });
    // store requests
    case actions.REQUEST_LIST_ADD:
      return Object.assign({}, state, {
        requestList: Object.assign({}, state.requestList, _defineProperty({}, action.data.id, {
          error: action.data.error,
          key: action.data.key
        }))
      });
    // asset data
    case actions.ASSET_ADD:
      return Object.assign({}, state, {
        assetList: Object.assign({}, state.assetList, _defineProperty({}, action.data.id, {
          error: action.data.error,
          name: action.data.name,
          claimId: action.data.claimId,
          shortId: action.data.shortId,
          claimData: action.data.claimData
        }))
      });
    // channel data
    case actions.CHANNEL_ADD:
      return Object.assign({}, state, {
        channelList: Object.assign({}, state.channelList, _defineProperty({}, action.data.id, {
          name: action.data.name,
          longId: action.data.longId,
          shortId: action.data.shortId,
          claimsData: action.data.claimsData
        }))
      });
    case actions.CHANNEL_CLAIMS_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        channelList: Object.assign({}, state.channelList, _defineProperty({}, action.data.channelListId, Object.assign({}, state.channelList[action.data.channelListId], {
          claimsData: action.data.claimsData
        })))
      });
    // display an asset
    case actions.FILE_AVAILABILITY_UPDATE:
      return Object.assign({}, state, {
        displayAsset: Object.assign({}, state.displayAsset, {
          status: action.data
        })
      });
    case actions.DISPLAY_ASSET_ERROR:
      return Object.assign({}, state, {
        displayAsset: Object.assign({}, state.displayAsset, {
          error: action.data,
          status: _asset_display_states.ERROR
        })
      });
    default:
      return state;
  }
};

var _show_action_types = __webpack_require__(12);

var actions = _interopRequireWildcard(_show_action_types);

var _asset_display_states = __webpack_require__(37);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  request: {
    error: null,
    type: null,
    id: null
  },
  requestList: {},
  channelList: {},
  assetList: {},
  displayAsset: {
    error: null,
    status: _asset_display_states.LOCAL_CHECK
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

var siteConfig = __webpack_require__(3);

var googleAnalyticsId = siteConfig.analytics.googleId,
    _siteConfig$assetDefa = siteConfig.assetDefaults,
    defaultThumbnail = _siteConfig$assetDefa.thumbnail,
    defaultDescription = _siteConfig$assetDefa.description,
    _siteConfig$details = siteConfig.details,
    description = _siteConfig$details.description,
    host = _siteConfig$details.host,
    title = _siteConfig$details.title,
    twitter = _siteConfig$details.twitter;


var initialState = {
  description: description,
  googleAnalyticsId: googleAnalyticsId,
  host: host,
  title: title,
  twitter: twitter,
  defaultDescription: defaultDescription,
  defaultThumbnail: defaultThumbnail
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = __webpack_require__(3),
    customComponents = _require.customComponents;

function getDeepestChildValue(parent, childrenKeys) {
  var childKey = childrenKeys.shift(); // .shift() retrieves the first element of array and removes it from array
  var child = parent[childKey];
  if (childrenKeys.length >= 1) {
    return getDeepestChildValue(child, childrenKeys);
  }
  return child;
}

var importCustomComponent = exports.importCustomComponent = function importCustomComponent(filePath) {
  // validate inputs
  if (!filePath) {
    throw new Error('no file path provided to dynamicImport()');
  }
  if (typeof filePath !== 'string') {
    console.log('dynamicImport > filePath:', filePath);
    console.log('dynamicImport > filePath type:', typeof filePath === 'undefined' ? 'undefined' : _typeof(filePath));
    throw new Error('file path provided to dynamicImport() must be a string');
  }
  if (!customComponents) {
    console.log('no custom components config provided');
    return null;
  }
  // split out the file folders  // filter out any empty or white-space-only strings
  var folders = filePath.split('/').filter(function (folderName) {
    return folderName.replace(/\s/g, '').length;
  });
  // check for the component corresponding to file path in the site config object
  // i.e. customComponents[folders[0]][folders[2][...][folders[n]]
  var component = getDeepestChildValue(customComponents, folders);
  if (component) {
    console.log('found custom component for', filePath);
    return component;
  } else {
    console.log('no custom component found for', filePath);
    return null;
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _PublishTool = __webpack_require__(94);

var _PublishTool2 = _interopRequireDefault(_PublishTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row row--tall flex-container--column' },
        _react2.default.createElement(_SEO2.default, null),
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row row--tall row--padded flex-container--column' },
          _react2.default.createElement(_PublishTool2.default, null)
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

;

exports.default = HomePage;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageTitle = __webpack_require__(87);

var _metaTags = __webpack_require__(88);

var _canonicalLink = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEO = function (_React$Component) {
  _inherits(SEO, _React$Component);

  function SEO() {
    _classCallCheck(this, SEO);

    return _possibleConstructorReturn(this, (SEO.__proto__ || Object.getPrototypeOf(SEO)).apply(this, arguments));
  }

  _createClass(SEO, [{
    key: 'render',
    value: function render() {
      // props from state
      var _props = this.props,
          defaultDescription = _props.defaultDescription,
          defaultThumbnail = _props.defaultThumbnail,
          siteDescription = _props.siteDescription,
          siteHost = _props.siteHost,
          siteTitle = _props.siteTitle,
          siteTwitter = _props.siteTwitter;
      // props from parent

      var _props2 = this.props,
          asset = _props2.asset,
          channel = _props2.channel,
          pageUri = _props2.pageUri;
      var pageTitle = this.props.pageTitle;
      // create page title, tags, and canonical link

      pageTitle = (0, _pageTitle.createPageTitle)(siteTitle, pageTitle);
      var metaTags = (0, _metaTags.createMetaTags)(siteDescription, siteHost, siteTitle, siteTwitter, asset, channel, defaultDescription, defaultThumbnail);
      var canonicalLink = (0, _canonicalLink.createCanonicalLink)(asset, channel, pageUri, siteHost);
      // render results
      return _react2.default.createElement(_reactHelmet2.default, {
        title: pageTitle,
        meta: metaTags,
        link: [{ rel: 'canonical', href: canonicalLink }]
      });
    }
  }]);

  return SEO;
}(_react2.default.Component);

;

SEO.propTypes = {
  pageTitle: _propTypes2.default.string,
  pageUri: _propTypes2.default.string,
  channel: _propTypes2.default.object,
  asset: _propTypes2.default.object
};

exports.default = SEO;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createPageTitle = exports.createPageTitle = function createPageTitle(siteTitle, pageTitle) {
  if (!pageTitle) {
    return "" + siteTitle;
  }
  return siteTitle + " - " + pageTitle;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var determineOgThumbnailContentType = function determineOgThumbnailContentType(thumbnail) {
  if (thumbnail) {
    var fileExt = thumbnail.substring(thumbnail.lastIndexOf('.'));
    switch (fileExt) {
      case 'jpeg':
      case 'jpg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'mp4':
        return 'video/mp4';
      default:
        return 'image/jpeg';
    }
  }
  return '';
};

var createBasicMetaTags = function createBasicMetaTags(siteHost, siteDescription, siteTitle, siteTwitter) {
  return [{ property: 'og:title', content: siteTitle }, { property: 'og:url', content: siteHost }, { property: 'og:site_name', content: siteTitle }, { property: 'og:description', content: siteDescription }, { property: 'twitter:site', content: siteTwitter }, { property: 'twitter:card', content: 'summary' }];
};

var createChannelMetaTags = function createChannelMetaTags(siteTitle, siteHost, siteTwitter, channel) {
  var name = channel.name,
      longId = channel.longId;

  return [{ property: 'og:title', content: name + ' on ' + siteTitle }, { property: 'og:url', content: siteHost + '/' + name + ':' + longId }, { property: 'og:site_name', content: siteTitle }, { property: 'og:description', content: name + ', a channel on ' + siteTitle }, { property: 'twitter:site', content: siteTwitter }, { property: 'twitter:card', content: 'summary' }];
};

var createAssetMetaTags = function createAssetMetaTags(siteHost, siteTitle, siteTwitter, asset, defaultDescription, defaultThumbnail) {
  var claimData = asset.claimData;
  var contentType = claimData.contentType;

  var embedUrl = siteHost + '/' + claimData.claimId + '/' + claimData.name;
  var showUrl = siteHost + '/' + claimData.claimId + '/' + claimData.name;
  var source = siteHost + '/' + claimData.claimId + '/' + claimData.name + '.' + claimData.fileExt;
  var ogTitle = claimData.title || claimData.name;
  var ogDescription = claimData.description || defaultDescription;
  var ogThumbnailContentType = determineOgThumbnailContentType(claimData.thumbnail);
  var ogThumbnail = claimData.thumbnail || defaultThumbnail;
  var metaTags = [{ property: 'og:title', content: ogTitle }, { property: 'og:url', content: showUrl }, { property: 'og:site_name', content: siteTitle }, { property: 'og:description', content: ogDescription }, { property: 'og:image:width', content: 600 }, { property: 'og:image:height', content: 315 }, { property: 'twitter:site', content: siteTwitter }];
  if (contentType === 'video/mp4' || contentType === 'video/webm') {
    metaTags.push({ property: 'og:video', content: source });
    metaTags.push({ property: 'og:video:secure_url', content: source });
    metaTags.push({ property: 'og:video:type', content: contentType });
    metaTags.push({ property: 'og:image', content: ogThumbnail });
    metaTags.push({ property: 'og:image:type', content: ogThumbnailContentType });
    metaTags.push({ property: 'og:type', content: 'video' });
    metaTags.push({ property: 'twitter:card', content: 'player' });
    metaTags.push({ property: 'twitter:player', content: embedUrl });
    metaTags.push({ property: 'twitter:player:width', content: 600 });
    metaTags.push({ property: 'twitter:text:player_width', content: 600 });
    metaTags.push({ property: 'twitter:player:height', content: 337 });
    metaTags.push({ property: 'twitter:player:stream', content: source });
    metaTags.push({ property: 'twitter:player:stream:content_type', content: contentType });
  } else {
    metaTags.push({ property: 'og:image', content: source });
    metaTags.push({ property: 'og:image:type', content: contentType });
    metaTags.push({ property: 'og:type', content: 'article' });
    metaTags.push({ property: 'twitter:card', content: 'summary_large_image' });
  }
  return metaTags;
};

var createMetaTags = exports.createMetaTags = function createMetaTags(siteDescription, siteHost, siteTitle, siteTwitter, asset, channel, defaultDescription, defaultThumbnail) {
  if (asset) {
    return createAssetMetaTags(siteHost, siteTitle, siteTwitter, asset, defaultDescription, defaultThumbnail);
  };
  if (channel) {
    return createChannelMetaTags(siteHost, siteTitle, siteTwitter, channel);
  };
  return createBasicMetaTags(siteDescription, siteHost, siteTitle, siteTwitter);
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createBasicCanonicalLink = function createBasicCanonicalLink(page, siteHost) {
  return siteHost + "/" + page;
};

var createAssetCanonicalLink = function createAssetCanonicalLink(asset, siteHost) {
  var channelName = void 0,
      certificateId = void 0,
      name = void 0,
      claimId = void 0;
  if (asset.claimData) {
    var _asset$claimData = asset.claimData;
    channelName = _asset$claimData.channelName;
    certificateId = _asset$claimData.certificateId;
    name = _asset$claimData.name;
    claimId = _asset$claimData.claimId;
  };
  if (channelName) {
    return siteHost + "/" + channelName + ":" + certificateId + "/" + name;
  };
  return siteHost + "/" + claimId + "/" + name;
};

var createChannelCanonicalLink = function createChannelCanonicalLink(channel, siteHost) {
  var name = channel.name,
      longId = channel.longId;

  return siteHost + "/" + name + ":" + longId;
};

var createCanonicalLink = exports.createCanonicalLink = function createCanonicalLink(asset, channel, page, siteHost) {
  if (asset) {
    return createAssetCanonicalLink(asset, siteHost);
  }
  if (channel) {
    return createChannelCanonicalLink(channel, siteHost);
  }
  return createBasicCanonicalLink(page, siteHost);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Logo = __webpack_require__(91);

var _Logo2 = _interopRequireDefault(_Logo);

var _NavBarChannelOptionsDropdown = __webpack_require__(92);

var _NavBarChannelOptionsDropdown2 = _interopRequireDefault(_NavBarChannelOptionsDropdown);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VIEW = 'VIEW';
var LOGOUT = 'LOGOUT';

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.checkForLoggedInUser = _this.checkForLoggedInUser.bind(_this);
    _this.logoutUser = _this.logoutUser.bind(_this);
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // check to see if the user is already logged in
      this.checkForLoggedInUser();
    }
  }, {
    key: 'checkForLoggedInUser',
    value: function checkForLoggedInUser() {
      var _this2 = this;

      var params = { credentials: 'include' };
      (0, _request2.default)('/user', params).then(function (_ref) {
        var data = _ref.data;

        _this2.props.onChannelLogin(data.channelName, data.shortChannelId, data.channelClaimId);
      }).catch(function (error) {
        console.log('/user error:', error.message);
      });
    }
  }, {
    key: 'logoutUser',
    value: function logoutUser() {
      var _this3 = this;

      var params = { credentials: 'include' };
      (0, _request2.default)('/logout', params).then(function () {
        _this3.props.onChannelLogout();
      }).catch(function (error) {
        console.log('/logout error', error.message);
      });
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event) {
      var value = event.target.selectedOptions[0].value;
      switch (value) {
        case LOGOUT:
          this.logoutUser();
          break;
        case VIEW:
          // redirect to channel page
          this.props.history.push('/' + this.props.channelName + ':' + this.props.channelLongId);
          break;
        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var siteDescription = this.props.siteDescription;

      return _react2.default.createElement(
        'div',
        { className: 'row row--wide nav-bar' },
        _react2.default.createElement(
          'div',
          { className: 'row row--padded row--short flex-container--row flex-container--space-between-center' },
          _react2.default.createElement(_Logo2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'nav-bar--center' },
            _react2.default.createElement(
              'span',
              { className: 'nav-bar-tagline' },
              siteDescription
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-bar--right' },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-bar-link link--nav', activeClassName: 'link--nav-active', to: '/', exact: true },
              'Publish'
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { className: 'nav-bar-link link--nav', activeClassName: 'link--nav-active', to: '/about' },
              'About'
            ),
            this.props.channelName ? _react2.default.createElement(_NavBarChannelOptionsDropdown2.default, {
              channelName: this.props.channelName,
              handleSelection: this.handleSelection,
              defaultSelection: this.props.channelName,
              VIEW: VIEW,
              LOGOUT: LOGOUT
            }) : _react2.default.createElement(
              _reactRouterDom.NavLink,
              { id: 'nav-bar-login-link', className: 'nav-bar-link link--nav', activeClassName: 'link--nav-active', to: '/login' },
              'Channel'
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(NavBar);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo() {
  return _react2.default.createElement(
    'svg',
    { version: '1.1', id: 'Layer_1', x: '0px', y: '0px', height: '24px', viewBox: '0 0 80 31', enableBackground: 'new 0 0 80 31', className: 'nav-bar-logo' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/' },
      _react2.default.createElement(
        'title',
        null,
        'Logo'
      ),
      _react2.default.createElement(
        'desc',
        null,
        'Spee.ch logo'
      ),
      _react2.default.createElement(
        'g',
        { id: 'About' },
        _react2.default.createElement(
          'g',
          { id: 'Publish-Form-V2-_x28_filled_x29_', transform: 'translate(-42.000000, -23.000000)' },
          _react2.default.createElement(
            'g',
            { id: 'Group-17', transform: 'translate(42.000000, 22.000000)' },
            _react2.default.createElement(
              'text',
              { transform: 'matrix(1 0 0 1 0 20)', fontSize: '25', fontFamily: 'Roboto' },
              'Spee<h'
            ),
            _react2.default.createElement(
              'g',
              { id: 'Group-16', transform: 'translate(0.000000, 30.000000)' },
              _react2.default.createElement('path', { id: 'Line-8', fill: 'none', stroke: '#09F911', strokeWidth: '1', strokeLinecap: 'square', d: 'M0.5,1.5h15' }),
              _react2.default.createElement('path', { id: 'Line-8-Copy', fill: 'none', stroke: '#029D74', strokeWidth: '1', strokeLinecap: 'square', d: 'M16.5,1.5h15' }),
              _react2.default.createElement('path', { id: 'Line-8-Copy-2', fill: 'none', stroke: '#E35BD8', strokeWidth: '1', strokeLinecap: 'square', d: 'M32.5,1.5h15' }),
              _react2.default.createElement('path', { id: 'Line-8-Copy-3', fill: 'none', stroke: '#4156C5', strokeWidth: '1', strokeLinecap: 'square', d: 'M48.5,1.5h15' }),
              _react2.default.createElement('path', { id: 'Line-8-Copy-4', fill: 'none', stroke: '#635688', strokeWidth: '1', strokeLinecap: 'square', d: 'M64.5,1.5h15' })
            )
          )
        )
      )
    )
  );
};

exports.default = Logo;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBarChannelDropdown(_ref) {
  var channelName = _ref.channelName,
      handleSelection = _ref.handleSelection,
      defaultSelection = _ref.defaultSelection,
      VIEW = _ref.VIEW,
      LOGOUT = _ref.LOGOUT;

  return _react2.default.createElement(
    'select',
    { type: 'text', id: 'nav-bar-channel-select', className: 'select select--arrow link--nav', onChange: handleSelection, value: defaultSelection },
    _react2.default.createElement(
      'option',
      { id: 'nav-bar-channel-select-channel-option' },
      channelName
    ),
    _react2.default.createElement(
      'option',
      { value: VIEW },
      'View'
    ),
    _react2.default.createElement(
      'option',
      { value: LOGOUT },
      'Logout'
    )
  );
};

exports.default = NavBarChannelDropdown;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(95);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    disabled: publish.disabled,
    file: publish.file,
    status: publish.status.status
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dropzone = __webpack_require__(40);

var _Dropzone2 = _interopRequireDefault(_Dropzone);

var _PublishDetails = __webpack_require__(99);

var _PublishDetails2 = _interopRequireDefault(_PublishDetails);

var _PublishStatus = __webpack_require__(117);

var _PublishStatus2 = _interopRequireDefault(_PublishStatus);

var _PublishDisabledMessage = __webpack_require__(120);

var _PublishDisabledMessage2 = _interopRequireDefault(_PublishDisabledMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishTool = function (_React$Component) {
  _inherits(PublishTool, _React$Component);

  function PublishTool() {
    _classCallCheck(this, PublishTool);

    return _possibleConstructorReturn(this, (PublishTool.__proto__ || Object.getPrototypeOf(PublishTool)).apply(this, arguments));
  }

  _createClass(PublishTool, [{
    key: 'render',
    value: function render() {
      if (this.props.disabled) {
        console.log('publish is disabled');
        return _react2.default.createElement(_PublishDisabledMessage2.default, null);
      } else {
        console.log('publish is not disabled');
        if (this.props.file) {
          if (this.props.status) {
            return _react2.default.createElement(_PublishStatus2.default, null);
          } else {
            return _react2.default.createElement(_PublishDetails2.default, null);
          }
        }
        return _react2.default.createElement(_Dropzone2.default, null);
      }
    }
  }]);

  return PublishTool;
}(_react2.default.Component);

;

exports.default = PublishTool;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _file = __webpack_require__(97);

var _PublishPreview = __webpack_require__(98);

var _PublishPreview2 = _interopRequireDefault(_PublishPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropzone = function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone(props) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this, props));

    _this.state = {
      dragOver: false,
      mouseOver: false,
      dimPreview: false
    };
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    _this.handleDragEnter = _this.handleDragEnter.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFileInput = _this.handleFileInput.bind(_this);
    _this.chooseFile = _this.chooseFile.bind(_this);
    return _this;
  }

  _createClass(Dropzone, [{
    key: 'handleDrop',
    value: function handleDrop(event) {
      event.preventDefault();
      this.setState({ dragOver: false });
      // if dropped items aren't files, reject them
      var dt = event.dataTransfer;
      if (dt.items) {
        if (dt.items[0].kind === 'file') {
          var droppedFile = dt.items[0].getAsFile();
          this.chooseFile(droppedFile);
        }
      }
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(event) {
      event.preventDefault();
    }
  }, {
    key: 'handleDragEnd',
    value: function handleDragEnd(event) {
      var dt = event.dataTransfer;
      if (dt.items) {
        for (var i = 0; i < dt.items.length; i++) {
          dt.items.remove(i);
        }
      } else {
        event.dataTransfer.clearData();
      }
    }
  }, {
    key: 'handleDragEnter',
    value: function handleDragEnter() {
      this.setState({ dragOver: true, dimPreview: true });
    }
  }, {
    key: 'handleDragLeave',
    value: function handleDragLeave() {
      this.setState({ dragOver: false, dimPreview: false });
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      this.setState({ mouseOver: true, dimPreview: true });
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      this.setState({ mouseOver: false, dimPreview: false });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      document.getElementById('file_input').click();
    }
  }, {
    key: 'handleFileInput',
    value: function handleFileInput(event) {
      event.preventDefault();
      var fileList = event.target.files;
      this.chooseFile(fileList[0]);
    }
  }, {
    key: 'chooseFile',
    value: function chooseFile(file) {
      if (file) {
        try {
          (0, _file.validateFile)(file); // validate the file's name, type, and size
        } catch (error) {
          return this.props.setFileError(error.message);
        }
        // stage it so it will be ready when the publish button is clicked
        this.props.selectFile(file);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row row--tall flex-container--column' },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('input', { className: 'input-file', type: 'file', id: 'file_input', name: 'file_input', accept: 'video/*,image/*', onChange: this.handleFileInput, encType: 'multipart/form-data' })
        ),
        _react2.default.createElement(
          'div',
          { id: 'preview-dropzone', className: 'row row--padded row--tall dropzone' + (this.state.dragOver ? ' dropzone--drag-over' : ''), onDrop: this.handleDrop, onDragOver: this.handleDragOver, onDragEnd: this.handleDragEnd, onDragEnter: this.handleDragEnter, onDragLeave: this.handleDragLeave, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onClick: this.handleClick },
          this.props.file ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PublishPreview2.default, {
              dimPreview: this.state.dimPreview,
              file: this.props.file,
              thumbnail: this.props.thumbnail
            }),
            _react2.default.createElement(
              'div',
              { id: 'dropzone-text-holder', className: 'flex-container--column flex-container--center-center' },
              this.state.dragOver ? _react2.default.createElement(
                'div',
                { id: 'dropzone-dragover' },
                _react2.default.createElement(
                  'p',
                  { className: 'blue' },
                  'Drop it.'
                )
              ) : null,
              this.state.mouseOver ? _react2.default.createElement(
                'div',
                { id: 'dropzone-instructions' },
                _react2.default.createElement(
                  'p',
                  { className: 'info-message-placeholder info-message--failure', id: 'input-error-file-selection' },
                  this.props.fileError
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Drag & drop image or video here to publish'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'fine-print' },
                  'OR'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'blue--underlined' },
                  'CHOOSE FILE'
                )
              ) : null
            )
          ) : _react2.default.createElement(
            'div',
            { id: 'dropzone-text-holder', className: 'flex-container--column flex-container--center-center' },
            this.state.dragOver ? _react2.default.createElement(
              'div',
              { id: 'dropzone-dragover' },
              _react2.default.createElement(
                'p',
                { className: 'blue' },
                'Drop it.'
              )
            ) : _react2.default.createElement(
              'div',
              { id: 'dropzone-instructions' },
              _react2.default.createElement(
                'p',
                { className: 'info-message-placeholder info-message--failure', id: 'input-error-file-selection' },
                this.props.fileError
              ),
              _react2.default.createElement(
                'p',
                null,
                'Drag & drop image or video here to publish'
              ),
              _react2.default.createElement(
                'p',
                { className: 'fine-print' },
                'OR'
              ),
              _react2.default.createElement(
                'p',
                { className: 'blue--underlined' },
                'CHOOSE FILE'
              )
            )
          )
        )
      );
    }
  }]);

  return Dropzone;
}(_react2.default.Component);

;

exports.default = Dropzone;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  validateFile: function validateFile(file) {
    if (!file) {
      throw new Error('no file provided');
    }
    if (/'/.test(file.name)) {
      throw new Error('apostrophes are not allowed in the file name');
    }
    // validate size and type
    switch (file.type) {
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/png':
        if (file.size > 10000000) {
          throw new Error('Sorry, images are limited to 10 megabytes.');
        }
        break;
      case 'image/gif':
        if (file.size > 50000000) {
          throw new Error('Sorry, GIFs are limited to 50 megabytes.');
        }
        break;
      case 'video/mp4':
        if (file.size > 50000000) {
          throw new Error('Sorry, videos are limited to 50 megabytes.');
        }
        break;
      default:
        throw new Error(file.type + ' is not a supported file type. Only, .jpeg, .png, .gif, and .mp4 files are currently supported.');
    }
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishPreview = function (_React$Component) {
  _inherits(PublishPreview, _React$Component);

  function PublishPreview(props) {
    _classCallCheck(this, PublishPreview);

    var _this = _possibleConstructorReturn(this, (PublishPreview.__proto__ || Object.getPrototypeOf(PublishPreview)).call(this, props));

    _this.state = {
      imgSource: '',
      defaultThumbnail: '/assets/img/video_thumb_default.png'
    };
    return _this;
  }

  _createClass(PublishPreview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setPreviewImageSource(this.props.file);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.file !== this.props.file) {
        this.setPreviewImageSource(newProps.file);
      }
      if (newProps.thumbnail !== this.props.thumbnail) {
        if (newProps.thumbnail) {
          this.setPreviewImageSourceFromFile(newProps.thumbnail);
        } else {
          this.setState({ imgSource: this.state.defaultThumbnail });
        }
      }
    }
  }, {
    key: 'setPreviewImageSourceFromFile',
    value: function setPreviewImageSourceFromFile(file) {
      var _this2 = this;

      var previewReader = new FileReader();
      previewReader.readAsDataURL(file);
      previewReader.onloadend = function () {
        _this2.setState({ imgSource: previewReader.result });
      };
    }
  }, {
    key: 'setPreviewImageSource',
    value: function setPreviewImageSource(file) {
      if (file.type !== 'video/mp4') {
        this.setPreviewImageSourceFromFile(file);
      } else {
        if (this.props.thumbnail) {
          this.setPreviewImageSourceFromFile(this.props.thumbnail);
        }
        this.setState({ imgSource: this.state.defaultThumbnail });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', {
        id: 'dropzone-preview',
        src: this.state.imgSource,
        className: this.props.dimPreview ? 'dim' : '',
        alt: 'publish preview'
      });
    }
  }]);

  return PublishPreview;
}(_react2.default.Component);

;

PublishPreview.propTypes = {
  dimPreview: _propTypes2.default.bool.isRequired,
  file: _propTypes2.default.object.isRequired,
  thumbnail: _propTypes2.default.object
};

exports.default = PublishPreview;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(100);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel,
      publish = _ref.publish;

  return {
    file: publish.file
  };
};

var mapDispatchToProps = {
  clearFile: _publish.clearFile,
  startPublish: _publish.startPublish
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Dropzone = __webpack_require__(40);

var _Dropzone2 = _interopRequireDefault(_Dropzone);

var _PublishTitleInput = __webpack_require__(101);

var _PublishTitleInput2 = _interopRequireDefault(_PublishTitleInput);

var _PublishUrlInput = __webpack_require__(103);

var _PublishUrlInput2 = _interopRequireDefault(_PublishUrlInput);

var _PublishThumbnailInput = __webpack_require__(106);

var _PublishThumbnailInput2 = _interopRequireDefault(_PublishThumbnailInput);

var _PublishMetadataInputs = __webpack_require__(108);

var _PublishMetadataInputs2 = _interopRequireDefault(_PublishMetadataInputs);

var _ChannelSelect = __webpack_require__(111);

var _ChannelSelect2 = _interopRequireDefault(_ChannelSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishDetails = function (_React$Component) {
  _inherits(PublishDetails, _React$Component);

  function PublishDetails(props) {
    _classCallCheck(this, PublishDetails);

    var _this = _possibleConstructorReturn(this, (PublishDetails.__proto__ || Object.getPrototypeOf(PublishDetails)).call(this, props));

    _this.onPublishSubmit = _this.onPublishSubmit.bind(_this);
    return _this;
  }

  _createClass(PublishDetails, [{
    key: 'onPublishSubmit',
    value: function onPublishSubmit() {
      this.props.startPublish(this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row row--no-bottom' },
        _react2.default.createElement(
          'div',
          { className: 'column column--10' },
          _react2.default.createElement(_PublishTitleInput2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'column column--5 column--sml-10' },
          _react2.default.createElement(
            'div',
            { className: 'row row--padded' },
            _react2.default.createElement(_Dropzone2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'column column--5 column--sml-10 align-content-top' },
          _react2.default.createElement(
            'div',
            { id: 'publish-active-area', className: 'row row--padded' },
            _react2.default.createElement(
              'div',
              { className: 'row row--padded row--no-top row--wide' },
              _react2.default.createElement(_PublishUrlInput2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'row row--padded row--no-top row--wide' },
              _react2.default.createElement(_ChannelSelect2.default, null)
            ),
            this.props.file.type === 'video/mp4' && _react2.default.createElement(
              'div',
              { className: 'row row--padded row--no-top row--wide ' },
              _react2.default.createElement(_PublishThumbnailInput2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'row row--padded row--no-top row--no-bottom row--wide' },
              _react2.default.createElement(_PublishMetadataInputs2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'row row--wide align-content-center' },
              _react2.default.createElement(
                'button',
                { id: 'publish-submit', className: 'button--primary button--large', onClick: this.onPublishSubmit },
                'Publish'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row row--padded row--no-bottom align-content-center' },
              _react2.default.createElement(
                'button',
                { className: 'button--cancel', onClick: this.props.clearFile },
                'Cancel'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row row--short align-content-center' },
              _react2.default.createElement(
                'p',
                { className: 'fine-print' },
                'By clicking \'Publish\', you affirm that you have the rights to publish this content to the LBRY network, and that you understand the properties of publishing it to a decentralized, user-controlled network. ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://lbry.io/learn' },
                  'Read more.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PublishDetails;
}(_react2.default.Component);

;

exports.default = (0, _reactRouterDom.withRouter)(PublishDetails);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(102);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    title: publish.metadata.title
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onMetadataChange: function onMetadataChange(name, value) {
      dispatch((0, _publish.updateMetadata)(name, value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishTitleInput = function (_React$Component) {
  _inherits(PublishTitleInput, _React$Component);

  function PublishTitleInput(props) {
    _classCallCheck(this, PublishTitleInput);

    var _this = _possibleConstructorReturn(this, (PublishTitleInput.__proto__ || Object.getPrototypeOf(PublishTitleInput)).call(this, props));

    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(PublishTitleInput, [{
    key: 'handleInput',
    value: function handleInput(e) {
      var name = e.target.name;
      var value = e.target.value;
      this.props.onMetadataChange(name, value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { type: 'text', id: 'publish-title', className: 'input-text text--large input-text--full-width', name: 'title', placeholder: 'Give your post a title...', onChange: this.handleInput, value: this.props.title });
    }
  }]);

  return PublishTitleInput;
}(_react2.default.Component);

exports.default = PublishTitleInput;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _publish = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(104);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel,
      publish = _ref.publish;

  return {
    loggedInChannelName: channel.loggedInChannel.name,
    loggedInChannelShortId: channel.loggedInChannel.shortId,
    fileName: publish.file.name,
    publishInChannel: publish.publishInChannel,
    selectedChannel: publish.selectedChannel,
    claim: publish.claim,
    urlError: publish.error.url
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClaimChange: function onClaimChange(value) {
      dispatch((0, _publish.updateClaim)(value));
      dispatch((0, _publish.updateError)('publishSubmit', null));
    },
    onUrlError: function onUrlError(value) {
      dispatch((0, _publish.updateError)('url', value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

var _PublishUrlMiddleDisplay = __webpack_require__(105);

var _PublishUrlMiddleDisplay2 = _interopRequireDefault(_PublishUrlMiddleDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishUrlInput = function (_React$Component) {
  _inherits(PublishUrlInput, _React$Component);

  function PublishUrlInput(props) {
    _classCallCheck(this, PublishUrlInput);

    var _this = _possibleConstructorReturn(this, (PublishUrlInput.__proto__ || Object.getPrototypeOf(PublishUrlInput)).call(this, props));

    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(PublishUrlInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          claim = _props.claim,
          fileName = _props.fileName;

      if (!claim) {
        this.setClaimName(fileName);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var claim = _ref.claim,
          fileName = _ref.fileName;

      // if a new file was chosen, update the claim name
      if (fileName !== this.props.fileName) {
        return this.setClaimName(fileName);
      }
      // if the claim has updated, check its availability
      if (claim !== this.props.claim) {
        this.validateClaim(claim);
      }
    }
  }, {
    key: 'handleInput',
    value: function handleInput(event) {
      var value = event.target.value;
      value = this.cleanseInput(value);
      // update the state
      this.props.onClaimChange(value);
    }
  }, {
    key: 'cleanseInput',
    value: function cleanseInput(input) {
      input = input.replace(/\s+/g, '-'); // replace spaces with dashes
      input = input.replace(/[^A-Za-z0-9-]/g, ''); // remove all characters that are not A-Z, a-z, 0-9, or '-'
      return input;
    }
  }, {
    key: 'setClaimName',
    value: function setClaimName(fileName) {
      var fileNameWithoutEnding = fileName.substring(0, fileName.lastIndexOf('.'));
      var cleanClaimName = this.cleanseInput(fileNameWithoutEnding);
      this.props.onClaimChange(cleanClaimName);
    }
  }, {
    key: 'validateClaim',
    value: function validateClaim(claim) {
      var _this2 = this;

      if (!claim) {
        return this.props.onUrlError('Enter a url above');
      }
      (0, _request2.default)('/api/claim/availability/' + claim).then(function () {
        _this2.props.onUrlError(null);
      }).catch(function (error) {
        _this2.props.onUrlError(error.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          claim = _props2.claim,
          loggedInChannelName = _props2.loggedInChannelName,
          loggedInChannelShortId = _props2.loggedInChannelShortId,
          publishInChannel = _props2.publishInChannel,
          selectedChannel = _props2.selectedChannel,
          urlError = _props2.urlError;

      return _react2.default.createElement(
        'div',
        { className: 'column column--10 column--sml-10' },
        _react2.default.createElement(
          'div',
          { className: 'input-text--primary span--relative' },
          _react2.default.createElement(
            'span',
            { className: 'url-text--secondary' },
            'spee.ch / '
          ),
          _react2.default.createElement(_PublishUrlMiddleDisplay2.default, {
            publishInChannel: publishInChannel,
            selectedChannel: selectedChannel,
            loggedInChannelName: loggedInChannelName,
            loggedInChannelShortId: loggedInChannelShortId
          }),
          _react2.default.createElement('input', { type: 'text', id: 'claim-name-input', className: 'input-text', name: 'claim', placeholder: 'your-url-here', onChange: this.handleInput, value: claim }),
          claim && !urlError && _react2.default.createElement(
            'span',
            { id: 'input-success-claim-name', className: 'info-message--success span--absolute' },
            '\u2713'
          ),
          urlError && _react2.default.createElement(
            'span',
            { id: 'input-success-channel-name', className: 'info-message--failure span--absolute' },
            '\u2716'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          urlError ? _react2.default.createElement(
            'p',
            { id: 'input-error-claim-name', className: 'info-message--failure' },
            urlError
          ) : _react2.default.createElement(
            'p',
            { className: 'info-message' },
            'Choose a custom url'
          )
        )
      );
    }
  }]);

  return PublishUrlInput;
}(_react2.default.Component);

exports.default = PublishUrlInput;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UrlMiddle(_ref) {
  var publishInChannel = _ref.publishInChannel,
      selectedChannel = _ref.selectedChannel,
      loggedInChannelName = _ref.loggedInChannelName,
      loggedInChannelShortId = _ref.loggedInChannelShortId;

  if (publishInChannel) {
    if (selectedChannel === loggedInChannelName) {
      return _react2.default.createElement(
        'span',
        { id: 'url-channel', className: 'url-text--secondary' },
        loggedInChannelName,
        ':',
        loggedInChannelShortId,
        ' /'
      );
    }
    return _react2.default.createElement(
      'span',
      { id: 'url-channel-placeholder', className: 'url-text--secondary tooltip' },
      '@channel',
      _react2.default.createElement(
        'span',
        {
          className: 'tooltip-text' },
        'Select a channel below'
      ),
      ' /'
    );
  }
  return _react2.default.createElement(
    'span',
    { id: 'url-no-channel-placeholder', className: 'url-text--secondary tooltip' },
    'xyz',
    _react2.default.createElement(
      'span',
      { className: 'tooltip-text' },
      'This will be a random id'
    ),
    ' /'
  );
}

UrlMiddle.propTypes = {
  publishInChannel: _propTypes2.default.bool.isRequired,
  loggedInChannelName: _propTypes2.default.string,
  loggedInChannelShortId: _propTypes2.default.string
};

exports.default = UrlMiddle;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(107);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var file = _ref.publish.file;

  return {
    file: file
  };
};

var mapDispatchToProps = {
  onNewThumbnail: _publish.onNewThumbnail
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString = atob(dataURI.split(',')[1]);
  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

var PublishThumbnailInput = function (_React$Component) {
  _inherits(PublishThumbnailInput, _React$Component);

  function PublishThumbnailInput(props) {
    _classCallCheck(this, PublishThumbnailInput);

    var _this = _possibleConstructorReturn(this, (PublishThumbnailInput.__proto__ || Object.getPrototypeOf(PublishThumbnailInput)).call(this, props));

    _this.state = {
      videoSource: null,
      error: null,
      sliderMinRange: 1,
      sliderMaxRange: null,
      sliderValue: null
    };
    _this.handleVideoLoadedData = _this.handleVideoLoadedData.bind(_this);
    _this.handleSliderChange = _this.handleSliderChange.bind(_this);
    _this.createThumbnail = _this.createThumbnail.bind(_this);
    return _this;
  }

  _createClass(PublishThumbnailInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var file = this.props.file;

      this.setVideoSource(file);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // if file changes
      if (nextProps.file && nextProps.file !== this.props.file) {
        var file = nextProps.file;

        this.setVideoSource(file);
      };
    }
  }, {
    key: 'setVideoSource',
    value: function setVideoSource(file) {
      var _this2 = this;

      var previewReader = new FileReader();
      previewReader.readAsDataURL(file);
      previewReader.onloadend = function () {
        var dataUri = previewReader.result;
        var blob = dataURItoBlob(dataUri);
        var videoSource = URL.createObjectURL(blob);
        _this2.setState({ videoSource: videoSource });
      };
    }
  }, {
    key: 'handleVideoLoadedData',
    value: function handleVideoLoadedData(event) {
      var duration = event.target.duration;
      var totalMinutes = Math.floor(duration / 60);
      var totalSeconds = Math.floor(duration % 60);
      // set the slider
      this.setState({
        sliderMaxRange: duration * 100,
        sliderValue: duration * 100 / 2,
        totalMinutes: totalMinutes,
        totalSeconds: totalSeconds
      });
      // update the current time of the video
      var video = document.getElementById('video-thumb-player');
      video.currentTime = duration / 2;
    }
  }, {
    key: 'handleSliderChange',
    value: function handleSliderChange(event) {
      var value = parseInt(event.target.value);
      // update the slider value
      this.setState({
        sliderValue: value
      });
      // update the current time of the video
      var video = document.getElementById('video-thumb-player');
      video.currentTime = value / 100;
    }
  }, {
    key: 'createThumbnail',
    value: function createThumbnail() {
      // take a snapshot
      var video = document.getElementById('video-thumb-player');
      var canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      var dataUrl = canvas.toDataURL();
      var blob = dataURItoBlob(dataUrl);
      var snapshot = new File([blob], 'thumbnail.png', {
        type: 'image/png'
      });
      // set the thumbnail in redux store
      if (snapshot) {
        this.props.onNewThumbnail(snapshot);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          videoSource = _state.videoSource,
          sliderMinRange = _state.sliderMinRange,
          sliderMaxRange = _state.sliderMaxRange,
          sliderValue = _state.sliderValue,
          totalMinutes = _state.totalMinutes,
          totalSeconds = _state.totalSeconds;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'label' },
          'Thumbnail:'
        ),
        _react2.default.createElement('video', {
          id: 'video-thumb-player',
          preload: 'metadata',
          muted: true,
          style: { display: 'none' },
          playsInline: true,
          onLoadedData: this.handleVideoLoadedData,
          src: videoSource,
          onSeeked: this.createThumbnail
        }),
        sliderValue ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'flex-container--row flex-container--space-between-center', style: { width: '100%' } },
            _react2.default.createElement(
              'span',
              { className: 'info-message' },
              '0\'00"'
            ),
            _react2.default.createElement(
              'span',
              { className: 'info-message' },
              totalMinutes,
              '\'',
              totalSeconds,
              '"'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', {
              type: 'range',
              min: sliderMinRange,
              max: sliderMaxRange,
              value: sliderValue,
              className: 'slider',
              onChange: this.handleSliderChange
            })
          )
        ) : _react2.default.createElement(
          'p',
          { className: 'info-message' },
          'loading... '
        ),
        error ? _react2.default.createElement(
          'p',
          { className: 'info-message--failure' },
          error
        ) : _react2.default.createElement(
          'p',
          { className: 'info-message' },
          'Use slider to set thumbnail'
        )
      );
    }
  }]);

  return PublishThumbnailInput;
}(_react2.default.Component);

exports.default = PublishThumbnailInput;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(109);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    showMetadataInputs: publish.showMetadataInputs,
    description: publish.metadata.description,
    license: publish.metadata.license,
    nsfw: publish.metadata.nsfw
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onMetadataChange: function onMetadataChange(name, value) {
      dispatch((0, _publish.updateMetadata)(name, value));
    },
    onToggleMetadataInputs: function onToggleMetadataInputs(value) {
      dispatch((0, _publish.toggleMetadataInputs)(value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ExpandingTextArea = __webpack_require__(110);

var _ExpandingTextArea2 = _interopRequireDefault(_ExpandingTextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishMetadataInputs = function (_React$Component) {
  _inherits(PublishMetadataInputs, _React$Component);

  function PublishMetadataInputs(props) {
    _classCallCheck(this, PublishMetadataInputs);

    var _this = _possibleConstructorReturn(this, (PublishMetadataInputs.__proto__ || Object.getPrototypeOf(PublishMetadataInputs)).call(this, props));

    _this.toggleShowInputs = _this.toggleShowInputs.bind(_this);
    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  _createClass(PublishMetadataInputs, [{
    key: 'toggleShowInputs',
    value: function toggleShowInputs() {
      this.props.onToggleMetadataInputs(!this.props.showMetadataInputs);
    }
  }, {
    key: 'handleInput',
    value: function handleInput(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.props.onMetadataChange(name, value);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(event) {
      var name = event.target.name;
      var selectedOption = event.target.selectedOptions[0].value;
      this.props.onMetadataChange(name, selectedOption);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'publish-details', className: 'row row--padded row--no-top row--wide' },
        this.props.showMetadataInputs && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row row--no-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--3 column--med-10 align-content-top' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'publish-license', className: 'label' },
                'Description:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--7 column--sml-10' },
              _react2.default.createElement(_ExpandingTextArea2.default, {
                id: 'publish-description',
                className: 'textarea textarea--primary textarea--full-width',
                rows: 1,
                maxLength: 2000,
                style: { maxHeight: 200 },
                name: 'description',
                placeholder: 'Optional description',
                value: this.props.description,
                onChange: this.handleInput })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row row--no-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--3 column--med-10' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'publish-license', className: 'label' },
                'License:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--7 column--sml-10' },
              _react2.default.createElement(
                'select',
                { type: 'text', name: 'license', id: 'publish-license', className: 'select select--primary', onChange: this.handleSelect },
                _react2.default.createElement(
                  'option',
                  { value: ' ' },
                  'Unspecified'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Public Domain' },
                  'Public Domain'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Creative Commons' },
                  'Creative Commons'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row row--no-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'publish-nsfw', className: 'label' },
                'Mature:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--7' },
              _react2.default.createElement('input', { className: 'input-checkbox', type: 'checkbox', id: 'publish-nsfw', name: 'nsfw', value: this.props.nsfw, onChange: this.handleInput })
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { className: 'button--secondary', onClick: this.toggleShowInputs },
          this.props.showMetadataInputs ? 'less' : 'more'
        )
      );
    }
  }]);

  return PublishMetadataInputs;
}(_react2.default.Component);

exports.default = PublishMetadataInputs;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandingTextarea = function (_Component) {
  _inherits(ExpandingTextarea, _Component);

  function ExpandingTextarea(props) {
    _classCallCheck(this, ExpandingTextarea);

    var _this = _possibleConstructorReturn(this, (ExpandingTextarea.__proto__ || Object.getPrototypeOf(ExpandingTextarea)).call(this, props));

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(ExpandingTextarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.adjustTextarea({});
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      var onChange = this.props.onChange;

      if (onChange) onChange(event);
      this.adjustTextarea(event);
    }
  }, {
    key: 'adjustTextarea',
    value: function adjustTextarea(_ref) {
      var _ref$target = _ref.target,
          target = _ref$target === undefined ? this.el : _ref$target;

      target.style.height = 0;
      target.style.height = target.scrollHeight + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rest = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement('textarea', _extends({}, rest, {
        ref: function ref(x) {
          return _this2.el = x;
        },
        onChange: this._handleChange
      }));
    }
  }]);

  return ExpandingTextarea;
}(_react.Component);

ExpandingTextarea.propTypes = {
  onChange: _propTypes2.default.func
};

exports.default = ExpandingTextarea;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(112);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel,
      publish = _ref.publish;

  return {
    loggedInChannelName: channel.loggedInChannel.name,
    publishInChannel: publish.publishInChannel,
    selectedChannel: publish.selectedChannel,
    channelError: publish.error.channel
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onPublishInChannelChange: function onPublishInChannelChange(value) {
      dispatch((0, _publish.updateError)('channel', null));
      dispatch((0, _publish.setPublishInChannel)(value));
    },
    onChannelSelect: function onChannelSelect(value) {
      dispatch((0, _publish.updateError)('channel', null));
      dispatch((0, _publish.updateSelectedChannel)(value));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChannelLoginForm = __webpack_require__(41);

var _ChannelLoginForm2 = _interopRequireDefault(_ChannelLoginForm);

var _ChannelCreateForm = __webpack_require__(42);

var _ChannelCreateForm2 = _interopRequireDefault(_ChannelCreateForm);

var _publish_channel_select_states = __webpack_require__(35);

var states = _interopRequireWildcard(_publish_channel_select_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelSelect = function (_React$Component) {
  _inherits(ChannelSelect, _React$Component);

  function ChannelSelect(props) {
    _classCallCheck(this, ChannelSelect);

    var _this = _possibleConstructorReturn(this, (ChannelSelect.__proto__ || Object.getPrototypeOf(ChannelSelect)).call(this, props));

    _this.toggleAnonymousPublish = _this.toggleAnonymousPublish.bind(_this);
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(ChannelSelect, [{
    key: 'toggleAnonymousPublish',
    value: function toggleAnonymousPublish(event) {
      var value = event.target.value;
      if (value === 'anonymous') {
        this.props.onPublishInChannelChange(false);
      } else {
        this.props.onPublishInChannelChange(true);
      }
    }
  }, {
    key: 'handleSelection',
    value: function handleSelection(event) {
      var selectedOption = event.target.selectedOptions[0].value;
      this.props.onChannelSelect(selectedOption);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'column column--3 column--med-10' },
            _react2.default.createElement('input', { type: 'radio', name: 'anonymous-or-channel', id: 'anonymous-radio', className: 'input-radio', value: 'anonymous', checked: !this.props.publishInChannel, onChange: this.toggleAnonymousPublish }),
            _react2.default.createElement(
              'label',
              { className: 'label label--pointer', htmlFor: 'anonymous-radio' },
              'Anonymous'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--7 column--med-10' },
            _react2.default.createElement('input', { type: 'radio', name: 'anonymous-or-channel', id: 'channel-radio', className: 'input-radio', value: 'in a channel', checked: this.props.publishInChannel, onChange: this.toggleAnonymousPublish }),
            _react2.default.createElement(
              'label',
              { className: 'label label--pointer', htmlFor: 'channel-radio' },
              'In a channel'
            )
          ),
          this.props.channelError ? _react2.default.createElement(
            'p',
            { className: 'info-message--failure' },
            this.props.channelError
          ) : _react2.default.createElement(
            'p',
            { className: 'info-message' },
            'Publish anonymously or in a channel'
          )
        ),
        this.props.publishInChannel && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'column column--3' },
            _react2.default.createElement(
              'label',
              { className: 'label', htmlFor: 'channel-name-select' },
              'Channel:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--7' },
            _react2.default.createElement(
              'select',
              { type: 'text', id: 'channel-name-select', className: 'select select--arrow', value: this.props.selectedChannel, onChange: this.handleSelection },
              this.props.loggedInChannelName && _react2.default.createElement(
                'option',
                { value: this.props.loggedInChannelName, id: 'publish-channel-select-channel-option' },
                this.props.loggedInChannelName
              ),
              _react2.default.createElement(
                'option',
                { value: states.LOGIN },
                'Existing'
              ),
              _react2.default.createElement(
                'option',
                { value: states.CREATE },
                'New'
              )
            )
          ),
          this.props.selectedChannel === states.LOGIN && _react2.default.createElement(_ChannelLoginForm2.default, null),
          this.props.selectedChannel === states.CREATE && _react2.default.createElement(_ChannelCreateForm2.default, null)
        )
      );
    }
  }]);

  return ChannelSelect;
}(_react2.default.Component);

exports.default = ChannelSelect;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelLoginForm = function (_React$Component) {
  _inherits(ChannelLoginForm, _React$Component);

  function ChannelLoginForm(props) {
    _classCallCheck(this, ChannelLoginForm);

    var _this = _possibleConstructorReturn(this, (ChannelLoginForm.__proto__ || Object.getPrototypeOf(ChannelLoginForm)).call(this, props));

    _this.state = {
      error: null,
      name: '',
      password: ''
    };
    _this.handleInput = _this.handleInput.bind(_this);
    _this.loginToChannel = _this.loginToChannel.bind(_this);
    return _this;
  }

  _createClass(ChannelLoginForm, [{
    key: 'handleInput',
    value: function handleInput(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'loginToChannel',
    value: function loginToChannel(event) {
      var _this2 = this;

      event.preventDefault();
      var params = {
        method: 'POST',
        body: JSON.stringify({ username: this.state.name, password: this.state.password }),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        credentials: 'include'
      };
      (0, _request2.default)('login', params).then(function (_ref) {
        var success = _ref.success,
            channelName = _ref.channelName,
            shortChannelId = _ref.shortChannelId,
            channelClaimId = _ref.channelClaimId,
            message = _ref.message;

        if (success) {
          _this2.props.onChannelLogin(channelName, shortChannelId, channelClaimId);
        } else {
          _this2.setState({ 'error': message });
        };
      }).catch(function (error) {
        if (error.message) {
          _this2.setState({ 'error': error.message });
        } else {
          _this2.setState({ 'error': error });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { id: 'channel-login-form' },
        _react2.default.createElement(
          'div',
          { className: 'row row--wide row--short' },
          _react2.default.createElement(
            'div',
            { className: 'column column--3 column--sml-10' },
            _react2.default.createElement(
              'label',
              { className: 'label', htmlFor: 'channel-login-name-input' },
              'Name:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--6 column--sml-10' },
            _react2.default.createElement(
              'div',
              { className: 'input-text--primary flex-container--row flex-container--left-bottom' },
              _react2.default.createElement(
                'span',
                null,
                '@'
              ),
              _react2.default.createElement('input', { type: 'text', id: 'channel-login-name-input', className: 'input-text', name: 'name', placeholder: 'Your Channel Name', value: this.state.channelName, onChange: this.handleInput })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row row--wide row--short' },
          _react2.default.createElement(
            'div',
            { className: 'column column--3 column--sml-10' },
            _react2.default.createElement(
              'label',
              { className: 'label', htmlFor: 'channel-login-password-input' },
              'Password:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--6 column--sml-10' },
            _react2.default.createElement(
              'div',
              { className: 'input-text--primary' },
              _react2.default.createElement('input', { type: 'password', id: 'channel-login-password-input', name: 'password', className: 'input-text', placeholder: '', value: this.state.channelPassword, onChange: this.handleInput })
            )
          )
        ),
        this.state.error ? _react2.default.createElement(
          'p',
          { className: 'info-message--failure' },
          this.state.error
        ) : _react2.default.createElement(
          'p',
          { className: 'info-message' },
          'Enter the name and password for your channel'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row row--wide' },
          _react2.default.createElement(
            'button',
            { className: 'button--primary', onClick: this.loginToChannel },
            'Authenticate'
          )
        )
      );
    }
  }]);

  return ChannelLoginForm;
}(_react2.default.Component);

exports.default = ChannelLoginForm;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(20);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelCreateForm = function (_React$Component) {
  _inherits(ChannelCreateForm, _React$Component);

  function ChannelCreateForm(props) {
    _classCallCheck(this, ChannelCreateForm);

    var _this = _possibleConstructorReturn(this, (ChannelCreateForm.__proto__ || Object.getPrototypeOf(ChannelCreateForm)).call(this, props));

    _this.state = {
      error: null,
      channel: '',
      password: '',
      status: null
    };
    _this.handleChannelInput = _this.handleChannelInput.bind(_this);
    _this.handleInput = _this.handleInput.bind(_this);
    _this.createChannel = _this.createChannel.bind(_this);
    return _this;
  }

  _createClass(ChannelCreateForm, [{
    key: 'cleanseChannelInput',
    value: function cleanseChannelInput(input) {
      input = input.replace(/\s+/g, '-'); // replace spaces with dashes
      input = input.replace(/[^A-Za-z0-9-]/g, ''); // remove all characters that are not A-Z, a-z, 0-9, or '-'
      return input;
    }
  }, {
    key: 'handleChannelInput',
    value: function handleChannelInput(event) {
      var value = event.target.value;
      value = this.cleanseChannelInput(value);
      this.setState({ channel: value });
      if (value) {
        this.updateIsChannelAvailable(value);
      } else {
        this.setState({ error: 'Please enter a channel name' });
      }
    }
  }, {
    key: 'handleInput',
    value: function handleInput(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'updateIsChannelAvailable',
    value: function updateIsChannelAvailable(channel) {
      var _this2 = this;

      var channelWithAtSymbol = '@' + channel;
      (0, _request2.default)('/api/channel/availability/' + channelWithAtSymbol).then(function () {
        _this2.setState({ 'error': null });
      }).catch(function (error) {
        _this2.setState({ 'error': error.message });
      });
    }
  }, {
    key: 'checkIsChannelAvailable',
    value: function checkIsChannelAvailable(channel) {
      var channelWithAtSymbol = '@' + channel;
      return (0, _request2.default)('/api/channel/availability/' + channelWithAtSymbol);
    }
  }, {
    key: 'checkIsPasswordProvided',
    value: function checkIsPasswordProvided(password) {
      return new Promise(function (resolve, reject) {
        if (!password || password.length < 1) {
          return reject(new Error('Please provide a password'));
        }
        resolve();
      });
    }
  }, {
    key: 'makePublishChannelRequest',
    value: function makePublishChannelRequest(username, password) {
      var params = {
        method: 'POST',
        body: JSON.stringify({ username: username, password: password }),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        credentials: 'include'
      };
      return new Promise(function (resolve, reject) {
        (0, _request2.default)('/signup', params).then(function (result) {
          return resolve(result);
        }).catch(function (error) {
          reject(new Error('Unfortunately, we encountered an error while creating your channel. Please let us know in Discord! ' + error.message));
        });
      });
    }
  }, {
    key: 'createChannel',
    value: function createChannel(event) {
      var _this3 = this;

      event.preventDefault();
      this.checkIsPasswordProvided(this.state.password).then(function () {
        return _this3.checkIsChannelAvailable(_this3.state.channel);
      }).then(function () {
        _this3.setState({ status: 'We are publishing your new channel.  Sit tight...' });
        return _this3.makePublishChannelRequest(_this3.state.channel, _this3.state.password);
      }).then(function (result) {
        _this3.setState({ status: null });
        _this3.props.onChannelLogin(result.channelName, result.shortChannelId, result.channelClaimId);
      }).catch(function (error) {
        if (error.message) {
          _this3.setState({ 'error': error.message, status: null });
        } else {
          _this3.setState({ 'error': error, status: null });
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.state.status ? _react2.default.createElement(
          'form',
          { id: 'publish-channel-form' },
          _react2.default.createElement(
            'div',
            { className: 'row row--wide row--short' },
            _react2.default.createElement(
              'div',
              { className: 'column column--3 column--sml-10' },
              _react2.default.createElement(
                'label',
                { className: 'label', htmlFor: 'new-channel-name' },
                'Name:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--6 column--sml-10' },
              _react2.default.createElement(
                'div',
                { className: 'input-text--primary flex-container--row flex-container--left-bottom span--relative' },
                _react2.default.createElement(
                  'span',
                  null,
                  '@'
                ),
                _react2.default.createElement('input', { type: 'text', name: 'channel', id: 'new-channel-name', className: 'input-text', placeholder: 'exampleChannelName', value: this.state.channel, onChange: this.handleChannelInput }),
                this.state.channel && !this.state.error && _react2.default.createElement(
                  'span',
                  { id: 'input-success-channel-name', className: 'info-message--success span--absolute' },
                  '\u2713'
                ),
                this.state.error && _react2.default.createElement(
                  'span',
                  { id: 'input-success-channel-name', className: 'info-message--failure span--absolute' },
                  '\u2716'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row row--wide row--short' },
            _react2.default.createElement(
              'div',
              { className: 'column column--3 column--sml-10' },
              _react2.default.createElement(
                'label',
                { className: 'label', htmlFor: 'new-channel-password' },
                'Password:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--6 column--sml-10' },
              _react2.default.createElement(
                'div',
                { className: 'input-text--primary' },
                _react2.default.createElement('input', { type: 'password', name: 'password', id: 'new-channel-password', className: 'input-text', placeholder: '', value: this.state.password, onChange: this.handleInput })
              )
            )
          ),
          this.state.error ? _react2.default.createElement(
            'p',
            { className: 'info-message--failure' },
            this.state.error
          ) : _react2.default.createElement(
            'p',
            { className: 'info-message' },
            'Choose a name and password for your channel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row row--wide' },
            _react2.default.createElement(
              'button',
              { className: 'button--primary', onClick: this.createChannel },
              'Create Channel'
            )
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            { className: 'fine-print' },
            this.state.status
          ),
          _react2.default.createElement(_ProgressBar2.default, { size: 12 })
        )
      );
    }
  }]);

  return ChannelCreateForm;
}(_react2.default.Component);

exports.default = ChannelCreateForm;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActiveStatusBar = function ActiveStatusBar() {
  return _react2.default.createElement(
    'span',
    { className: 'progress-bar progress-bar--active' },
    '| '
  );
};

exports.default = ActiveStatusBar;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InactiveStatusBar = function InactiveStatusBar() {
  return _react2.default.createElement(
    'span',
    { className: 'progress-bar progress-bar--inactive' },
    '| '
  );
};

exports.default = InactiveStatusBar;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(5);

var _view = __webpack_require__(118);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    status: publish.status.status,
    message: publish.status.message
  };
};

var mapDispatchToProps = {
  clearFile: _publish.clearFile
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(20);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _publish_claim_states = __webpack_require__(119);

var publishStates = _interopRequireWildcard(_publish_claim_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishStatus = function (_React$Component) {
  _inherits(PublishStatus, _React$Component);

  function PublishStatus() {
    _classCallCheck(this, PublishStatus);

    return _possibleConstructorReturn(this, (PublishStatus.__proto__ || Object.getPrototypeOf(PublishStatus)).apply(this, arguments));
  }

  _createClass(PublishStatus, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          message = _props.message,
          clearFile = _props.clearFile;

      return _react2.default.createElement(
        'div',
        { className: 'row row--tall flex-container--column flex-container--center-center' },
        status === publishStates.LOAD_START && _react2.default.createElement(
          'div',
          { className: 'row align-content-center' },
          _react2.default.createElement(
            'p',
            null,
            'File is loading to server'
          ),
          _react2.default.createElement(
            'p',
            { className: 'blue' },
            '0%'
          )
        ),
        status === publishStates.LOADING && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row align-content-center' },
            _react2.default.createElement(
              'p',
              null,
              'File is loading to server'
            ),
            _react2.default.createElement(
              'p',
              { className: 'blue' },
              message
            )
          )
        ),
        status === publishStates.PUBLISHING && _react2.default.createElement(
          'div',
          { className: 'row align-content-center' },
          _react2.default.createElement(
            'p',
            null,
            'Upload complete.  Your file is now being published on the blockchain...'
          ),
          _react2.default.createElement(_ProgressBar2.default, { size: 12 }),
          _react2.default.createElement(
            'p',
            null,
            'Curious what magic is happening here? ',
            _react2.default.createElement(
              'a',
              { className: 'link--primary', target: 'blank', href: 'https://lbry.io/faq/what-is-lbry' },
              'Learn more.'
            )
          )
        ),
        status === publishStates.SUCCESS && _react2.default.createElement(
          'div',
          { className: 'row align-content-center' },
          _react2.default.createElement(
            'p',
            null,
            'Your publish is complete! You are being redirected to it now.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'If you are not automatically redirected, ',
            _react2.default.createElement(
              'a',
              { className: 'link--primary', target: '_blank', href: message },
              'click here.'
            )
          )
        ),
        status === publishStates.FAILED && _react2.default.createElement(
          'div',
          { className: 'row align-content-center' },
          _react2.default.createElement(
            'p',
            null,
            'Something went wrong...'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'strong',
              null,
              message
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'For help, post the above error text in the #speech channel on the ',
            _react2.default.createElement(
              'a',
              { className: 'link--primary', href: 'https://discord.gg/YjYbwhS', target: '_blank' },
              'lbry discord'
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'button--secondary', onClick: clearFile },
            'Reset'
          )
        )
      );
    }
  }]);

  return PublishStatus;
}(_react2.default.Component);

;

exports.default = PublishStatus;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD_START = exports.LOAD_START = 'LOAD_START';
var LOADING = exports.LOADING = 'LOADING';
var PUBLISHING = exports.PUBLISHING = 'PUBLISHING';
var SUCCESS = exports.SUCCESS = 'SUCCESS';
var FAILED = exports.FAILED = 'FAILED';

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(121);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var publish = _ref.publish;

  return {
    message: publish.disabledMessage
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishDisabledMessage = function (_React$Component) {
  _inherits(PublishDisabledMessage, _React$Component);

  function PublishDisabledMessage() {
    _classCallCheck(this, PublishDisabledMessage);

    return _possibleConstructorReturn(this, (PublishDisabledMessage.__proto__ || Object.getPrototypeOf(PublishDisabledMessage)).apply(this, arguments));
  }

  _createClass(PublishDisabledMessage, [{
    key: 'render',
    value: function render() {
      var message = this.props.message;
      console.log('this.props.message:', message);
      return _react2.default.createElement(
        'div',
        { className: 'row dropzone--disabled row--tall flex-container--column flex-container--center-center' },
        _react2.default.createElement(
          'p',
          { className: 'text--disabled' },
          'Publishing is currently disabled.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'text--disabled' },
          message
        )
      );
    }
  }]);

  return PublishDisabledMessage;
}(_react2.default.Component);

exports.default = PublishDisabledMessage;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = function (_React$Component) {
  _inherits(AboutPage, _React$Component);

  function AboutPage() {
    _classCallCheck(this, AboutPage);

    return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
  }

  _createClass(AboutPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SEO2.default, { pageTitle: 'About', pageUri: 'about' }),
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row row--padded' },
          _react2.default.createElement(
            'div',
            { className: 'column column--5 column--med-10 align-content-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'p',
                { className: 'pull-quote' },
                'Spee.ch is an open-source project.  Please contribute to the existing site, or fork it and make your own.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://twitter.com/spee_ch' },
                  'TWITTER'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://github.com/lbryio/spee.ch' },
                  'GITHUB'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://discord.gg/YjYbwhS' },
                  'DISCORD CHANNEL'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://github.com/lbryio/spee.ch/blob/master/README.md' },
                  'DOCUMENTATION'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--5 column--med-10 align-content-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'p',
                null,
                'Spee.ch is a media-hosting site that reads from and publishes content to the ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', href: 'https://lbry.io' },
                  'LBRY'
                ),
                ' blockchain.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Spee.ch is a hosting service, but with the added benefit that it stores your content on a decentralized network of computers -- the ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', href: 'https://lbry.io/get' },
                  'LBRY'
                ),
                ' network.  This means that your images are stored in multiple locations without a single point of failure.'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'Contribute'
              ),
              _react2.default.createElement(
                'p',
                null,
                'If you have an idea for your own spee.ch-like site on top of LBRY, fork our ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', href: 'https://github.com/lbryio/spee.ch' },
                  'github repo'
                ),
                ' and go to town!'
              ),
              _react2.default.createElement(
                'p',
                null,
                'If you want to improve spee.ch, join our ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', href: 'https://discord.gg/YjYbwhS' },
                  'discord channel'
                ),
                ' or solve one of our ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', href: 'https://github.com/lbryio/spee.ch/issues' },
                  'github issues'
                ),
                '.'
              )
            )
          )
        )
      );
    }
  }]);

  return AboutPage;
}(_react2.default.Component);

;

exports.default = AboutPage;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(124);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var channel = _ref.channel;

  return {
    loggedInChannelName: channel.loggedInChannel.name
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _ChannelLoginForm = __webpack_require__(41);

var _ChannelLoginForm2 = _interopRequireDefault(_ChannelLoginForm);

var _ChannelCreateForm = __webpack_require__(42);

var _ChannelCreateForm2 = _interopRequireDefault(_ChannelCreateForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_React$Component) {
  _inherits(LoginPage, _React$Component);

  function LoginPage() {
    _classCallCheck(this, LoginPage);

    return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
  }

  _createClass(LoginPage, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // re-route the user to the homepage if the user is logged in
      if (newProps.loggedInChannelName !== this.props.loggedInChannelName) {
        this.props.history.push('/');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SEO2.default, { pageTitle: 'Login', pageUri: 'login' }),
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row row--padded' },
          _react2.default.createElement(
            'div',
            { className: 'column column--5 column--med-10 align-content-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'p',
                null,
                'Channels allow you to publish and group content under an identity. You can create a channel for yourself, or share one with like-minded friends.  You can create 1 channel, or 100, so whether you\'re ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: '/@catalonia2017:43dcf47163caa21d8404d9fe9b30f78ef3e146a8' },
                  'documenting important events'
                ),
                ', or making a public repository for ',
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: '/@catGifs' },
                  'cat gifs'
                ),
                ' (password: \'1234\'), try creating a channel for it!'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--5 column--med-10 align-content-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'h3',
                { className: 'h3--no-bottom' },
                'Log in to an existing channel:'
              ),
              _react2.default.createElement(_ChannelLoginForm2.default, null),
              _react2.default.createElement(
                'h3',
                { className: 'h3--no-bottom' },
                'Create a brand new channel:'
              ),
              _react2.default.createElement(_ChannelCreateForm2.default, null)
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react2.default.Component);

;

exports.default = (0, _reactRouterDom.withRouter)(LoginPage);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _show = __webpack_require__(8);

var _view = __webpack_require__(126);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  return {
    error: show.request.error,
    requestType: show.request.type
  };
};

var mapDispatchToProps = {
  onHandleShowPageUri: _show.onHandleShowPageUri
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ErrorPage = __webpack_require__(21);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _ShowAssetLite = __webpack_require__(127);

var _ShowAssetLite2 = _interopRequireDefault(_ShowAssetLite);

var _ShowAssetDetails = __webpack_require__(130);

var _ShowAssetDetails2 = _interopRequireDefault(_ShowAssetDetails);

var _ShowChannel = __webpack_require__(136);

var _ShowChannel2 = _interopRequireDefault(_ShowChannel);

var _show_request_types = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowPage = function (_React$Component) {
  _inherits(ShowPage, _React$Component);

  function ShowPage() {
    _classCallCheck(this, ShowPage);

    return _possibleConstructorReturn(this, (ShowPage.__proto__ || Object.getPrototypeOf(ShowPage)).apply(this, arguments));
  }

  _createClass(ShowPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onHandleShowPageUri(this.props.match.params);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.match.params !== this.props.match.params) {
        this.props.onHandleShowPageUri(nextProps.match.params);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          requestType = _props.requestType;

      if (error) {
        return _react2.default.createElement(_ErrorPage2.default, { error: error });
      }
      switch (requestType) {
        case _show_request_types.CHANNEL:
          return _react2.default.createElement(_ShowChannel2.default, null);
        case _show_request_types.ASSET_LITE:
          return _react2.default.createElement(_ShowAssetLite2.default, null);
        case _show_request_types.ASSET_DETAILS:
          return _react2.default.createElement(_ShowAssetDetails2.default, null);
        default:
          return _react2.default.createElement(
            'p',
            null,
            'loading...'
          );
      }
    }
  }]);

  return ShowPage;
}(_react2.default.Component);

;

exports.default = ShowPage;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(128);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select request info
  var requestId = show.request.id;
  // select asset info
  var asset = void 0;
  var request = show.requestList[requestId] || null;
  var assetList = show.assetList;
  if (request && assetList) {
    var assetKey = request.key; // note: just store this in the request
    asset = assetList[assetKey] || null;
  };
  // return props
  return {
    asset: asset
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

var _reactRouterDom = __webpack_require__(4);

var _AssetDisplay = __webpack_require__(44);

var _AssetDisplay2 = _interopRequireDefault(_AssetDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowLite = function (_React$Component) {
  _inherits(ShowLite, _React$Component);

  function ShowLite() {
    _classCallCheck(this, ShowLite);

    return _possibleConstructorReturn(this, (ShowLite.__proto__ || Object.getPrototypeOf(ShowLite)).apply(this, arguments));
  }

  _createClass(ShowLite, [{
    key: 'render',
    value: function render() {
      var asset = this.props.asset;

      if (asset) {
        var _asset$claimData = asset.claimData,
            name = _asset$claimData.name,
            claimId = _asset$claimData.claimId;

        return _react2.default.createElement(
          'div',
          { className: 'row row--tall flex-container--column flex-container--center-center show-lite-container' },
          _react2.default.createElement(_SEO2.default, { pageTitle: name, asset: asset }),
          _react2.default.createElement(_AssetDisplay2.default, null),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { id: 'asset-boilerpate', className: 'link--primary fine-print', to: '/' + claimId + '/' + name },
            'hosted via Spee.ch'
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'row row--tall row--padded flex-container--column flex-container--center-center' },
        _react2.default.createElement(
          'p',
          null,
          'loading asset data...'
        )
      );
    }
  }]);

  return ShowLite;
}(_react2.default.Component);

;

exports.default = ShowLite;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(20);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _asset_display_states = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetDisplay = function (_React$Component) {
  _inherits(AssetDisplay, _React$Component);

  function AssetDisplay() {
    _classCallCheck(this, AssetDisplay);

    return _possibleConstructorReturn(this, (AssetDisplay.__proto__ || Object.getPrototypeOf(AssetDisplay)).apply(this, arguments));
  }

  _createClass(AssetDisplay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$asset$claimDat = this.props.asset.claimData,
          name = _props$asset$claimDat.name,
          claimId = _props$asset$claimDat.claimId;

      this.props.onFileRequest(name, claimId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          error = _props.error,
          _props$asset$claimDat2 = _props.asset.claimData,
          name = _props$asset$claimDat2.name,
          claimId = _props$asset$claimDat2.claimId,
          contentType = _props$asset$claimDat2.contentType,
          fileExt = _props$asset$claimDat2.fileExt,
          thumbnail = _props$asset$claimDat2.thumbnail;

      return _react2.default.createElement(
        'div',
        { id: 'asset-display-component' },
        status === _asset_display_states.LOCAL_CHECK && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Checking to see if Spee.ch has your asset locally...'
          )
        ),
        status === _asset_display_states.UNAVAILABLE && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Sit tight, we\'re searching the LBRY blockchain for your asset!'
          ),
          _react2.default.createElement(_ProgressBar2.default, { size: 12 }),
          _react2.default.createElement(
            'p',
            null,
            'Curious what magic is happening here? ',
            _react2.default.createElement(
              'a',
              { className: 'link--primary', target: 'blank', href: 'https://lbry.io/faq/what-is-lbry' },
              'Learn more.'
            )
          )
        ),
        status === _asset_display_states.ERROR && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Unfortunately, we couldn\'t download your asset from LBRY.  You can help us out by sharing the below error message in the ',
            _react2.default.createElement(
              'a',
              { className: 'link--primary', href: 'https://discord.gg/YjYbwhS', target: '_blank' },
              'LBRY discord'
            ),
            '.'
          ),
          _react2.default.createElement(
            'i',
            null,
            _react2.default.createElement(
              'p',
              { id: 'error-message' },
              error
            )
          )
        ),
        status === _asset_display_states.AVAILABLE && function () {
          switch (contentType) {
            case 'image/jpeg':
            case 'image/jpg':
            case 'image/png':
              return _react2.default.createElement('img', {
                className: 'asset',
                src: '/' + claimId + '/' + name + '.' + fileExt,
                alt: name });
            case 'image/gif':
              return _react2.default.createElement('img', {
                className: 'asset',
                src: '/' + claimId + '/' + name + '.' + fileExt,
                alt: name
              });
            case 'video/mp4':
              return _react2.default.createElement(
                'video',
                { className: 'asset video', controls: true, poster: thumbnail },
                _react2.default.createElement('source', {
                  src: '/' + claimId + '/' + name + '.' + fileExt
                }),
                _react2.default.createElement(
                  'p',
                  null,
                  'Your browser does not support the ',
                  _react2.default.createElement(
                    'code',
                    null,
                    'video'
                  ),
                  ' element.'
                )
              );
            default:
              return _react2.default.createElement(
                'p',
                null,
                'Unsupported file type'
              );
          }
        }()
      );
    }
  }]);

  return AssetDisplay;
}(_react2.default.Component);

;

exports.default = AssetDisplay;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(131);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select request info
  var requestId = show.request.id;
  // select asset info
  var asset = void 0;
  var request = show.requestList[requestId] || null;
  var assetList = show.assetList;
  if (request && assetList) {
    var assetKey = request.key; // note: just store this in the request
    asset = assetList[assetKey] || null;
  };
  // return props
  return {
    asset: asset
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _ErrorPage = __webpack_require__(21);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _AssetTitle = __webpack_require__(132);

var _AssetTitle2 = _interopRequireDefault(_AssetTitle);

var _AssetDisplay = __webpack_require__(44);

var _AssetDisplay2 = _interopRequireDefault(_AssetDisplay);

var _AssetInfo = __webpack_require__(134);

var _AssetInfo2 = _interopRequireDefault(_AssetInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowAssetDetails = function (_React$Component) {
  _inherits(ShowAssetDetails, _React$Component);

  function ShowAssetDetails() {
    _classCallCheck(this, ShowAssetDetails);

    return _possibleConstructorReturn(this, (ShowAssetDetails.__proto__ || Object.getPrototypeOf(ShowAssetDetails)).apply(this, arguments));
  }

  _createClass(ShowAssetDetails, [{
    key: 'render',
    value: function render() {
      var asset = this.props.asset;

      if (asset) {
        var name = asset.claimData.name;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SEO2.default, { pageTitle: name + ' - details', asset: asset }),
          _react2.default.createElement(_NavBar2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'row row--tall row--padded' },
            _react2.default.createElement(
              'div',
              { className: 'column column--10' },
              _react2.default.createElement(_AssetTitle2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--5 column--sml-10 align-content-top' },
              _react2.default.createElement(
                'div',
                { className: 'row row--padded show-details-container' },
                _react2.default.createElement(_AssetDisplay2.default, null)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--5 column--sml-10 align-content-top' },
              _react2.default.createElement(
                'div',
                { className: 'row row--padded' },
                _react2.default.createElement(_AssetInfo2.default, null)
              )
            )
          )
        );
      };
      return _react2.default.createElement(_ErrorPage2.default, { error: 'loading asset data...' });
    }
  }]);

  return ShowAssetDetails;
}(_react2.default.Component);

;

exports.default = ShowAssetDetails;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(133);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  var _selectAsset = (0, _show.selectAsset)(show),
      title = _selectAsset.claimData.title;

  return {
    title: title
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetTitle = function AssetTitle(_ref) {
  var title = _ref.title;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      { className: 'text--large' },
      title
    )
  );
};

exports.default = AssetTitle;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(135);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select asset
  var asset = (0, _show.selectAsset)(show);
  //  return props
  return {
    asset: asset
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetInfo = function (_React$Component) {
  _inherits(AssetInfo, _React$Component);

  function AssetInfo(props) {
    _classCallCheck(this, AssetInfo);

    var _this = _possibleConstructorReturn(this, (AssetInfo.__proto__ || Object.getPrototypeOf(AssetInfo)).call(this, props));

    _this.copyToClipboard = _this.copyToClipboard.bind(_this);
    return _this;
  }

  _createClass(AssetInfo, [{
    key: 'copyToClipboard',
    value: function copyToClipboard(event) {
      var elementToCopy = event.target.dataset.elementtocopy;
      var element = document.getElementById(elementToCopy);
      element.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        this.setState({ error: 'Oops, unable to copy' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$asset = this.props.asset,
          shortId = _props$asset.shortId,
          _props$asset$claimDat = _props$asset.claimData,
          channelName = _props$asset$claimDat.channelName,
          certificateId = _props$asset$claimDat.certificateId,
          description = _props$asset$claimDat.description,
          name = _props$asset$claimDat.name,
          claimId = _props$asset$claimDat.claimId,
          fileExt = _props$asset$claimDat.fileExt,
          contentType = _props$asset$claimDat.contentType,
          thumbnail = _props$asset$claimDat.thumbnail,
          host = _props$asset$claimDat.host;

      return _react2.default.createElement(
        'div',
        null,
        channelName && _react2.default.createElement(
          'div',
          { className: 'row row--padded row--wide row--no-top' },
          _react2.default.createElement(
            'div',
            { className: 'column column--2 column--med-10' },
            _react2.default.createElement(
              'span',
              { className: 'text' },
              'Channel:'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column--8 column--med-10' },
            _react2.default.createElement(
              'span',
              { className: 'text' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' + channelName + ':' + certificateId },
                channelName
              )
            )
          )
        ),
        description && _react2.default.createElement(
          'div',
          { className: 'row row--padded row--wide row--no-top' },
          _react2.default.createElement(
            'span',
            { className: 'text' },
            description
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'show-share-buttons' },
          _react2.default.createElement(
            'div',
            { className: 'row row--padded row--wide row--no-top' },
            _react2.default.createElement(
              'div',
              { className: 'column column--2 column--med-10' },
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Share:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'div',
                {
                  className: 'row row--short row--wide flex-container--row flex-container--space-between-bottom flex-container--wrap' },
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://twitter.com/intent/tweet?text=' + host + '/' + shortId + '/' + name },
                  'twitter'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://www.facebook.com/sharer/sharer.php?u=' + host + '/' + shortId + '/' + name },
                  'facebook'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + host + '/' + shortId + '/' + name },
                  'tumblr'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'link--primary', target: '_blank', href: 'https://www.reddit.com/submit?url=' + host + '/' + shortId + '/' + name + '&title=' + name },
                  'reddit'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row row--padded row--wide row--no-top' },
          _react2.default.createElement(
            'div',
            { id: 'show-short-link' },
            _react2.default.createElement(
              'div',
              { className: 'column column--2 column--med-10' },
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Link:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'div',
                { className: 'row row--short row--wide' },
                _react2.default.createElement(
                  'div',
                  { className: 'column column--7' },
                  _react2.default.createElement(
                    'div',
                    { className: 'input-error', id: 'input-error-copy-short-link', hidden: 'true' },
                    'error here'
                  ),
                  _react2.default.createElement('input', { type: 'text', id: 'short-link', className: 'input-disabled input-text--full-width', readOnly: true,
                    spellCheck: 'false',
                    value: host + '/' + shortId + '/' + name + '.' + fileExt,
                    onClick: this.select })
                ),
                _react2.default.createElement('div', { className: 'column column--1' }),
                _react2.default.createElement(
                  'div',
                  { className: 'column column--2' },
                  _react2.default.createElement(
                    'button',
                    { className: 'button--primary button--wide', 'data-elementtocopy': 'short-link',
                      onClick: this.copyToClipboard },
                    'copy'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'show-embed-code' },
            _react2.default.createElement(
              'div',
              { className: 'column column--2 column--med-10' },
              _react2.default.createElement(
                'span',
                { className: 'text' },
                'Embed:'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--8 column--med-10' },
              _react2.default.createElement(
                'div',
                { className: 'row row--short row--wide' },
                _react2.default.createElement(
                  'div',
                  { className: 'column column--7' },
                  _react2.default.createElement(
                    'div',
                    { className: 'input-error', id: 'input-error-copy-embed-text', hidden: 'true' },
                    'error here'
                  ),
                  contentType === 'video/mp4' ? _react2.default.createElement('input', { type: 'text', id: 'embed-text', className: 'input-disabled input-text--full-width', readOnly: true,
                    onClick: this.select, spellCheck: 'false',
                    value: '<video width="100%" controls poster="' + thumbnail + '" src="' + host + '/' + claimId + '/' + name + '.' + fileExt + '"/></video>' }) : _react2.default.createElement('input', { type: 'text', id: 'embed-text', className: 'input-disabled input-text--full-width', readOnly: true,
                    onClick: this.select, spellCheck: 'false',
                    value: '<img src="' + host + '/' + claimId + '/' + name + '.' + fileExt + '"/>'
                  })
                ),
                _react2.default.createElement('div', { className: 'column column--1' }),
                _react2.default.createElement(
                  'div',
                  { className: 'column column--2' },
                  _react2.default.createElement(
                    'button',
                    { className: 'button--primary button--wide', 'data-elementtocopy': 'embed-text',
                      onClick: this.copyToClipboard },
                    'copy'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-container--row flex-container--space-between-bottom' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'link--primary', to: '/' + shortId + '/' + name + '.' + fileExt },
            _react2.default.createElement(
              'span',
              {
                className: 'text' },
              'Direct Link'
            )
          ),
          _react2.default.createElement(
            'a',
            { className: 'link--primary', href: host + '/' + claimId + '/' + name + '.' + fileExt, download: name },
            'Download'
          ),
          _react2.default.createElement(
            'a',
            { className: 'link--primary', target: '_blank', href: 'https://lbry.io/dmca' },
            'Report'
          )
        )
      );
    }
  }]);

  return AssetInfo;
}(_react2.default.Component);

;

exports.default = AssetInfo;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(137);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select request info
  var requestId = show.request.id;
  // select request
  var previousRequest = show.requestList[requestId] || null;
  // select channel
  var channel = void 0;
  if (previousRequest) {
    var channelKey = previousRequest.key;
    channel = show.channelList[channelKey] || null;
  }
  return {
    channel: channel
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(9);

var _SEO2 = _interopRequireDefault(_SEO);

var _ErrorPage = __webpack_require__(21);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _ChannelClaimsDisplay = __webpack_require__(138);

var _ChannelClaimsDisplay2 = _interopRequireDefault(_ChannelClaimsDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowChannel = function (_React$Component) {
  _inherits(ShowChannel, _React$Component);

  function ShowChannel() {
    _classCallCheck(this, ShowChannel);

    return _possibleConstructorReturn(this, (ShowChannel.__proto__ || Object.getPrototypeOf(ShowChannel)).apply(this, arguments));
  }

  _createClass(ShowChannel, [{
    key: 'render',
    value: function render() {
      var channel = this.props.channel;

      if (channel) {
        var name = channel.name,
            longId = channel.longId,
            shortId = channel.shortId;

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SEO2.default, { pageTitle: name, channel: channel }),
          _react2.default.createElement(_NavBar2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'row row--tall row--padded' },
            _react2.default.createElement(
              'div',
              { className: 'column column--10' },
              _react2.default.createElement(
                'h2',
                null,
                'channel name: ',
                name
              ),
              _react2.default.createElement(
                'p',
                { className: 'fine-print' },
                'full channel id: ',
                longId
              ),
              _react2.default.createElement(
                'p',
                { className: 'fine-print' },
                'short channel id: ',
                shortId
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column column--10' },
              _react2.default.createElement(_ChannelClaimsDisplay2.default, null)
            )
          )
        );
      };
      return _react2.default.createElement(_ErrorPage2.default, { error: 'loading channel data...' });
    }
  }]);

  return ShowChannel;
}(_react2.default.Component);

;

exports.default = ShowChannel;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _show = __webpack_require__(8);

var _view = __webpack_require__(139);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var show = _ref.show;

  // select channel key
  var request = show.requestList[show.request.id];
  var channelKey = request.key;
  // select channel claims
  var channel = show.channelList[channelKey] || null;
  // return props
  return {
    channelKey: channelKey,
    channel: channel
  };
};

var mapDispatchToProps = {
  onUpdateChannelClaims: _show.onUpdateChannelClaims
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_view2.default);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AssetPreview = __webpack_require__(140);

var _AssetPreview2 = _interopRequireDefault(_AssetPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChannelClaimsDisplay = function (_React$Component) {
  _inherits(ChannelClaimsDisplay, _React$Component);

  function ChannelClaimsDisplay(props) {
    _classCallCheck(this, ChannelClaimsDisplay);

    var _this = _possibleConstructorReturn(this, (ChannelClaimsDisplay.__proto__ || Object.getPrototypeOf(ChannelClaimsDisplay)).call(this, props));

    _this.showNextResultsPage = _this.showNextResultsPage.bind(_this);
    _this.showPreviousResultsPage = _this.showPreviousResultsPage.bind(_this);
    return _this;
  }

  _createClass(ChannelClaimsDisplay, [{
    key: 'showPreviousResultsPage',
    value: function showPreviousResultsPage() {
      var currentPage = this.props.channel.claimsData.currentPage;

      var previousPage = parseInt(currentPage) - 1;
      this.showNewPage(previousPage);
    }
  }, {
    key: 'showNextResultsPage',
    value: function showNextResultsPage() {
      var currentPage = this.props.channel.claimsData.currentPage;

      var nextPage = parseInt(currentPage) + 1;
      this.showNewPage(nextPage);
    }
  }, {
    key: 'showNewPage',
    value: function showNewPage(page) {
      var _props = this.props,
          channelKey = _props.channelKey,
          _props$channel = _props.channel,
          name = _props$channel.name,
          longId = _props$channel.longId;

      this.props.onUpdateChannelClaims(channelKey, name, longId, page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$channel$claims = this.props.channel.claimsData,
          claims = _props$channel$claims.claims,
          currentPage = _props$channel$claims.currentPage,
          totalPages = _props$channel$claims.totalPages;

      return _react2.default.createElement(
        'div',
        { className: 'row row--tall' },
        claims.length > 0 ? _react2.default.createElement(
          'div',
          null,
          claims.map(function (claim, index) {
            return _react2.default.createElement(_AssetPreview2.default, {
              claimData: claim,
              key: claim.name + '-' + index
            });
          }),
          _react2.default.createElement(
            'div',
            null,
            currentPage > 1 && _react2.default.createElement(
              'button',
              { className: 'button--secondary', onClick: this.showPreviousResultsPage },
              'Previous Page'
            ),
            currentPage < totalPages && _react2.default.createElement(
              'button',
              { className: 'button--secondary', onClick: this.showNextResultsPage },
              'Next Page'
            )
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'There are no claims in this channel'
        )
      );
    }
  }]);

  return ChannelClaimsDisplay;
}(_react2.default.Component);

;

exports.default = ChannelClaimsDisplay;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(141);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var defaultThumbnail = _ref.site.defaults.defaultThumbnail;

  return {
    defaultThumbnail: defaultThumbnail
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetPreview = function AssetPreview(_ref) {
  var defaultThumbnail = _ref.defaultThumbnail,
      _ref$claimData = _ref.claimData,
      name = _ref$claimData.name,
      claimId = _ref$claimData.claimId,
      fileExt = _ref$claimData.fileExt,
      contentType = _ref$claimData.contentType,
      thumbnail = _ref$claimData.thumbnail;

  var directSourceLink = claimId + '/' + name + '.' + fileExt;
  var showUrlLink = '/' + claimId + '/' + name;
  return _react2.default.createElement(
    'div',
    { className: 'asset-holder' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: showUrlLink },
      function () {
        switch (contentType) {
          case 'image/jpeg':
          case 'image/jpg':
          case 'image/png':
          case 'image/gif':
            return _react2.default.createElement('img', {
              className: 'asset-preview',
              src: directSourceLink,
              alt: name
            });
          case 'video/mp4':
            return _react2.default.createElement('img', {
              className: 'asset-preview video',
              src: thumbnail || defaultThumbnail,
              alt: name
            });
          default:
            return _react2.default.createElement(
              'p',
              null,
              'unsupported file type'
            );
        }
      }()
    )
  );
};

exports.default = AssetPreview;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(143);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$site = _ref.site,
      host = _ref$site.host,
      title = _ref$site.title;

  return {
    host: host,
    title: title
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(_view2.default);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavBar = __webpack_require__(7);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FourOhForPage = function (_React$Component) {
  _inherits(FourOhForPage, _React$Component);

  function FourOhForPage() {
    _classCallCheck(this, FourOhForPage);

    return _possibleConstructorReturn(this, (FourOhForPage.__proto__ || Object.getPrototypeOf(FourOhForPage)).apply(this, arguments));
  }

  _createClass(FourOhForPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          host = _props.host;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            title,
            ' - 404'
          ),
          _react2.default.createElement('link', { rel: 'canonical', href: host + '/404' })
        ),
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row row--padded' },
          _react2.default.createElement(
            'h2',
            null,
            '404'
          ),
          _react2.default.createElement(
            'p',
            null,
            'That page does not exist'
          )
        )
      );
    }
  }]);

  return FourOhForPage;
}(_react2.default.Component);

;

exports.default = FourOhForPage;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(17),
    sendGAServeEvent = _require.sendGAServeEvent;

var _require2 = __webpack_require__(145),
    determineResponseType = _require2.determineResponseType,
    flipClaimNameAndIdForBackwardsCompatibility = _require2.flipClaimNameAndIdForBackwardsCompatibility,
    logRequestData = _require2.logRequestData,
    getClaimIdAndServeAsset = _require2.getClaimIdAndServeAsset;

var lbryUri = __webpack_require__(146);
var handleShowRender = __webpack_require__(147);
var SERVE = 'SERVE';

module.exports = function (app) {
  // route to serve a specific asset using the channel or claim id
  app.get('/:identifier/:claim', function (req, res) {
    var headers = req.headers,
        ip = req.ip,
        originalUrl = req.originalUrl,
        params = req.params;
    // decide if this is a show request

    var hasFileExtension = void 0;
    try {
      var _lbryUri$parseModifie = lbryUri.parseModifier(params.claim);

      hasFileExtension = _lbryUri$parseModifie.hasFileExtension;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    var responseType = determineResponseType(hasFileExtension, headers);
    if (responseType !== SERVE) {
      return handleShowRender(req, res);
    }
    // handle serve request
    // send google analytics
    sendGAServeEvent(headers, ip, originalUrl);
    // parse the claim
    var claimName = void 0;
    try {
      var _lbryUri$parseClaim = lbryUri.parseClaim(params.claim);

      claimName = _lbryUri$parseClaim.claimName;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    // parse the identifier
    var isChannel = void 0,
        channelName = void 0,
        channelClaimId = void 0,
        claimId = void 0;
    try {
      var _lbryUri$parseIdentif = lbryUri.parseIdentifier(params.identifier);

      isChannel = _lbryUri$parseIdentif.isChannel;
      channelName = _lbryUri$parseIdentif.channelName;
      channelClaimId = _lbryUri$parseIdentif.channelClaimId;
      claimId = _lbryUri$parseIdentif.claimId;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (!isChannel) {
      var _flipClaimNameAndIdFo = flipClaimNameAndIdForBackwardsCompatibility(claimId, claimName);

      var _flipClaimNameAndIdFo2 = _slicedToArray(_flipClaimNameAndIdFo, 2);

      claimId = _flipClaimNameAndIdFo2[0];
      claimName = _flipClaimNameAndIdFo2[1];
    }
    // log the request data for debugging
    logRequestData(responseType, claimName, channelName, claimId);
    // get the claim Id and then serve the asset
    getClaimIdAndServeAsset(channelName, channelClaimId, claimName, claimId, originalUrl, ip, res);
  });
  // route to serve the winning asset at a claim or a channel page
  app.get('/:claim', function (req, res) {
    var headers = req.headers,
        ip = req.ip,
        originalUrl = req.originalUrl,
        params = req.params;
    // decide if this is a show request

    var hasFileExtension = void 0;
    try {
      var _lbryUri$parseModifie2 = lbryUri.parseModifier(params.claim);

      hasFileExtension = _lbryUri$parseModifie2.hasFileExtension;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    var responseType = determineResponseType(hasFileExtension, headers);
    if (responseType !== SERVE) {
      return handleShowRender(req, res);
    }
    // handle serve request
    // send google analytics
    sendGAServeEvent(headers, ip, originalUrl);
    // parse the claim
    var claimName = void 0;
    try {
      var _lbryUri$parseClaim2 = lbryUri.parseClaim(params.claim);

      claimName = _lbryUri$parseClaim2.claimName;
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    // log the request data for debugging
    logRequestData(responseType, claimName, null, null);
    // get the claim Id and then serve the asset
    getClaimIdAndServeAsset(null, null, claimName, null, originalUrl, ip, res);
  });
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);

var _require = __webpack_require__(30),
    getClaimId = _require.getClaimId,
    getLocalFileRecord = _require.getLocalFileRecord;

var _require2 = __webpack_require__(29),
    handleErrorResponse = _require2.handleErrorResponse;

var SERVE = 'SERVE';
var SHOW = 'SHOW';
var NO_FILE = 'NO_FILE';
var NO_CHANNEL = 'NO_CHANNEL';
var NO_CLAIM = 'NO_CLAIM';

function clientAcceptsHtml(_ref) {
  var accept = _ref.accept;

  return accept && accept.match(/text\/html/);
};

function requestIsFromBrowser(headers) {
  return headers['user-agent'] && headers['user-agent'].match(/Mozilla/);
};

function clientWantsAsset(_ref2) {
  var accept = _ref2.accept,
      range = _ref2.range;

  var imageIsWanted = accept && accept.match(/image\/.*/) && !accept.match(/text\/html/) && !accept.match(/text\/\*/);
  var videoIsWanted = accept && range;
  return imageIsWanted || videoIsWanted;
};

function isValidClaimId(claimId) {
  return claimId.length === 40 && !/[^A-Za-z0-9]/g.test(claimId);
};

function isValidShortId(claimId) {
  return claimId.length === 1; // it should really evaluate the short url itself
};

function isValidShortIdOrClaimId(input) {
  return isValidClaimId(input) || isValidShortId(input);
};

function serveAssetToClient(claimId, name, res) {
  return getLocalFileRecord(claimId, name).then(function (fileRecord) {
    // check that a local record was found
    if (fileRecord === NO_FILE) {
      return res.status(307).redirect('/api/claim/get/' + name + '/' + claimId);
    }
    // serve the file
    var filePath = fileRecord.filePath,
        fileType = fileRecord.fileType;

    logger.verbose('serving file: ' + filePath);
    var sendFileOptions = {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Content-Type': fileType || 'image/jpeg'
      }
    };
    res.status(200).sendFile(filePath, sendFileOptions);
  }).catch(function (error) {
    throw error;
  });
};

module.exports = {
  getClaimIdAndServeAsset: function getClaimIdAndServeAsset(channelName, channelClaimId, claimName, claimId, originalUrl, ip, res) {
    // get the claim Id and then serve the asset
    getClaimId(channelName, channelClaimId, claimName, claimId).then(function (fullClaimId) {
      if (fullClaimId === NO_CLAIM) {
        return res.status(404).json({ success: false, message: 'no claim id could be found' });
      } else if (fullClaimId === NO_CHANNEL) {
        return res.status(404).json({ success: false, message: 'no channel id could be found' });
      }
      serveAssetToClient(fullClaimId, claimName, res);
      // postToStats(responseType, originalUrl, ip, claimName, fullClaimId, 'success');
    }).catch(function (error) {
      handleErrorResponse(originalUrl, ip, error, res);
      // postToStats(responseType, originalUrl, ip, claimName, fullClaimId, 'fail');
    });
  },
  determineResponseType: function determineResponseType(hasFileExtension, headers) {
    var responseType = void 0;
    if (hasFileExtension) {
      responseType = SERVE; // assume a serve request if file extension is present
      if (clientAcceptsHtml(headers)) {
        // if the request comes from a browser, change it to a show request
        responseType = SHOW;
      }
    } else {
      responseType = SHOW;
      if (clientWantsAsset(headers) && requestIsFromBrowser(headers)) {
        // this is in case someone embeds a show url
        logger.debug('Show request came from browser but wants an image/video. Changing response to serve...');
        responseType = SERVE;
      }
    }
    return responseType;
  },
  flipClaimNameAndIdForBackwardsCompatibility: function flipClaimNameAndIdForBackwardsCompatibility(identifier, name) {
    // this is a patch for backwards compatability with '/name/claim_id' url format
    if (isValidShortIdOrClaimId(name) && !isValidShortIdOrClaimId(identifier)) {
      var tempName = name;
      name = identifier;
      identifier = tempName;
    }
    return [identifier, name];
  },
  logRequestData: function logRequestData(responseType, claimName, channelName, claimId) {
    logger.debug('responseType ===', responseType);
    logger.debug('claim name === ', claimName);
    logger.debug('channel name ===', channelName);
    logger.debug('claim id ===', claimId);
  }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var logger = __webpack_require__(2);

module.exports = {
  REGEXP_INVALID_CLAIM: /[^A-Za-z0-9-]/g,
  REGEXP_INVALID_CHANNEL: /[^A-Za-z0-9-@]/g,
  REGEXP_ADDRESS: /^b(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/,
  CHANNEL_CHAR: '@',
  parseIdentifier: function parseIdentifier(identifier) {
    logger.debug('parsing identifier:', identifier);
    var componentsRegex = new RegExp('([^:$#/]*)' + // value (stops at the first separator or end)
    '([:$#]?)([^/]*)' // modifier separator, modifier (stops at the first path separator or end)
    );

    var _componentsRegex$exec = componentsRegex.exec(identifier).map(function (match) {
      return match || null;
    }),
        _componentsRegex$exec2 = _slicedToArray(_componentsRegex$exec, 4),
        proto = _componentsRegex$exec2[0],
        value = _componentsRegex$exec2[1],
        modifierSeperator = _componentsRegex$exec2[2],
        modifier = _componentsRegex$exec2[3];

    logger.debug(proto + ', ' + value + ', ' + modifierSeperator + ', ' + modifier);

    // Validate and process name
    if (!value) {
      throw new Error('Check your url.  No channel name provided before "' + modifierSeperator + '"');
    }
    var isChannel = value.startsWith(module.exports.CHANNEL_CHAR);
    var channelName = isChannel ? value : null;
    var claimId = void 0;
    if (isChannel) {
      if (!channelName) {
        throw new Error('No channel name after @.');
      }
      var nameBadChars = channelName.match(module.exports.REGEXP_INVALID_CHANNEL);
      if (nameBadChars) {
        throw new Error('Invalid characters in channel name: ' + nameBadChars.join(', ') + '.');
      }
    } else {
      claimId = value;
    }

    // Validate and process modifier
    var channelClaimId = void 0;
    if (modifierSeperator) {
      if (!modifier) {
        throw new Error('No modifier provided after separator "' + modifierSeperator + '"');
      }

      if (modifierSeperator === ':') {
        channelClaimId = modifier;
      } else {
        throw new Error('The "' + modifierSeperator + '" modifier is not currently supported');
      }
    }
    return {
      isChannel: isChannel,
      channelName: channelName,
      channelClaimId: channelClaimId,
      claimId: claimId
    };
  },
  parseClaim: function parseClaim(claim) {
    logger.debug('parsing name:', claim);
    var componentsRegex = new RegExp('([^:$#/.]*)' + // name (stops at the first modifier)
    '([:$#.]?)([^/]*)' // modifier separator, modifier (stops at the first path separator or end)
    );

    var _componentsRegex$exec3 = componentsRegex.exec(claim).map(function (match) {
      return match || null;
    }),
        _componentsRegex$exec4 = _slicedToArray(_componentsRegex$exec3, 4),
        proto = _componentsRegex$exec4[0],
        claimName = _componentsRegex$exec4[1],
        modifierSeperator = _componentsRegex$exec4[2],
        modifier = _componentsRegex$exec4[3];

    logger.debug(proto + ', ' + claimName + ', ' + modifierSeperator + ', ' + modifier);

    // Validate and process name
    if (!claimName) {
      throw new Error('No claim name provided before .');
    }
    var nameBadChars = claimName.match(module.exports.REGEXP_INVALID_CLAIM);
    if (nameBadChars) {
      throw new Error('Invalid characters in claim name: ' + nameBadChars.join(', ') + '.');
    }
    // Validate and process modifier
    if (modifierSeperator) {
      if (!modifier) {
        throw new Error('No file extension provided after separator ' + modifierSeperator + '.');
      }
      if (modifierSeperator !== '.') {
        throw new Error('The ' + modifierSeperator + ' modifier is not supported in the claim name');
      }
    }
    // return results
    return {
      claimName: claimName
    };
  },
  parseModifier: function parseModifier(claim) {
    logger.debug('parsing modifier:', claim);
    var componentsRegex = new RegExp('([^:$#/.]*)' + // name (stops at the first modifier)
    '([:$#.]?)([^/]*)' // modifier separator, modifier (stops at the first path separator or end)
    );

    var _componentsRegex$exec5 = componentsRegex.exec(claim).map(function (match) {
      return match || null;
    }),
        _componentsRegex$exec6 = _slicedToArray(_componentsRegex$exec5, 4),
        proto = _componentsRegex$exec6[0],
        claimName = _componentsRegex$exec6[1],
        modifierSeperator = _componentsRegex$exec6[2],
        modifier = _componentsRegex$exec6[3];

    logger.debug(proto + ', ' + claimName + ', ' + modifierSeperator + ', ' + modifier);
    // Validate and process modifier
    var hasFileExtension = false;
    if (modifierSeperator) {
      hasFileExtension = true;
    }
    return {
      hasFileExtension: hasFileExtension
    };
  }
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _redux = __webpack_require__(18);

var _index = __webpack_require__(33);

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

var _index3 = __webpack_require__(38);

var _index4 = _interopRequireDefault(_index3);

var _app = __webpack_require__(39);

var _app2 = _interopRequireDefault(_app);

var _renderFullPage = __webpack_require__(45);

var _renderFullPage2 = _interopRequireDefault(_renderFullPage);

var _reduxSaga = __webpack_require__(148);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _effects = __webpack_require__(15);

var _show_uri = __webpack_require__(149);

var _show = __webpack_require__(8);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var returnSagaWithParams = function returnSagaWithParams(saga, params) {
  return (/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _effects.call)(saga, params);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })
  );
};

module.exports = function (req, res) {
  var context = {};

  // create and apply middleware
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var middleware = (0, _redux.applyMiddleware)(sagaMiddleware);

  // create a new Redux store instance
  var store = (0, _redux.createStore)(_index2.default, middleware);

  // create saga
  var action = (0, _show.onHandleShowPageUri)(req.params);
  var saga = returnSagaWithParams(_show_uri.handleShowPageUri, action);

  // run the saga middleware
  sagaMiddleware.run(saga).done.then(function () {
    // render component to a string
    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(
          _index4.default,
          null,
          _react2.default.createElement(_app2.default, null)
        )
      )
    ));

    // get head tags from helmet
    var helmet = _reactHelmet2.default.renderStatic();

    // check for a redirect
    if (context.url) {
      return res.redirect(301, context.url);
    }

    // get the initial state from our Redux store
    var preloadedState = store.getState();

    // send the rendered page back to the client
    res.send((0, _renderFullPage2.default)(helmet, html, preloadedState));
  });
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleShowPageUri = handleShowPageUri;
exports.watchHandleShowPageUri = watchHandleShowPageUri;

var _effects = __webpack_require__(15);

var _show_action_types = __webpack_require__(12);

var actions = _interopRequireWildcard(_show_action_types);

var _show = __webpack_require__(8);

var _show_asset = __webpack_require__(150);

var _show_channel = __webpack_require__(152);

var _lbryUri = __webpack_require__(154);

var _lbryUri2 = _interopRequireDefault(_lbryUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(parseAndUpdateIdentifierAndClaim),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(parseAndUpdateClaimOnly),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(handleShowPageUri),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchHandleShowPageUri);

function parseAndUpdateIdentifierAndClaim(modifier, claim) {
  var isChannel, channelName, channelClaimId, claimId, claimName, extension, _lbryUri$parseIdentif, _lbryUri$parseClaim;

  return regeneratorRuntime.wrap(function parseAndUpdateIdentifierAndClaim$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // this is a request for an asset
          // claim will be an asset claim
          // the identifier could be a channel or a claim id
          isChannel = void 0, channelName = void 0, channelClaimId = void 0, claimId = void 0, claimName = void 0, extension = void 0;
          _context.prev = 1;
          _lbryUri$parseIdentif = _lbryUri2.default.parseIdentifier(modifier);
          isChannel = _lbryUri$parseIdentif.isChannel;
          channelName = _lbryUri$parseIdentif.channelName;
          channelClaimId = _lbryUri$parseIdentif.channelClaimId;
          claimId = _lbryUri$parseIdentif.claimId;
          _lbryUri$parseClaim = _lbryUri2.default.parseClaim(claim);
          claimName = _lbryUri$parseClaim.claimName;
          extension = _lbryUri$parseClaim.extension;
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t0.message));

        case 16:
          return _context.abrupt('return', _context.sent);

        case 17:
          if (!isChannel) {
            _context.next = 21;
            break;
          }

          _context.next = 20;
          return (0, _effects.call)(_show_asset.newAssetRequest, (0, _show.onNewAssetRequest)(claimName, null, channelName, channelClaimId, extension));

        case 20:
          return _context.abrupt('return', _context.sent);

        case 21:
          ;
          _context.next = 24;
          return (0, _effects.call)(_show_asset.newAssetRequest, (0, _show.onNewAssetRequest)(claimName, claimId, null, null, extension));

        case 24:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 12]]);
}
function parseAndUpdateClaimOnly(claim) {
  var isChannel, channelName, channelClaimId, _lbryUri$parseIdentif2, claimName, extension, _lbryUri$parseClaim2;

  return regeneratorRuntime.wrap(function parseAndUpdateClaimOnly$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // this could be a request for an asset or a channel page
          // claim could be an asset claim or a channel claim
          isChannel = void 0, channelName = void 0, channelClaimId = void 0;
          _context2.prev = 1;
          _lbryUri$parseIdentif2 = _lbryUri2.default.parseIdentifier(claim);
          isChannel = _lbryUri$parseIdentif2.isChannel;
          channelName = _lbryUri$parseIdentif2.channelName;
          channelClaimId = _lbryUri$parseIdentif2.channelClaimId;
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 12;
          return (0, _effects.put)((0, _show.onRequestError)(_context2.t0.message));

        case 12:
          return _context2.abrupt('return', _context2.sent);

        case 13:
          if (!isChannel) {
            _context2.next = 17;
            break;
          }

          _context2.next = 16;
          return (0, _effects.call)(_show_channel.newChannelRequest, (0, _show.onNewChannelRequest)(channelName, channelClaimId));

        case 16:
          return _context2.abrupt('return', _context2.sent);

        case 17:
          // if not for a channel, parse the claim request
          claimName = void 0, extension = void 0;
          _context2.prev = 18;
          _lbryUri$parseClaim2 = _lbryUri2.default.parseClaim(claim);
          claimName = _lbryUri$parseClaim2.claimName;
          extension = _lbryUri$parseClaim2.extension;
          _context2.next = 29;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t1 = _context2['catch'](18);
          _context2.next = 28;
          return (0, _effects.put)((0, _show.onRequestError)(_context2.t1.message));

        case 28:
          return _context2.abrupt('return', _context2.sent);

        case 29:
          _context2.next = 31;
          return (0, _effects.call)(_show_asset.newAssetRequest, (0, _show.onNewAssetRequest)(claimName, null, null, null, extension));

        case 31:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 8], [18, 24]]);
}

function handleShowPageUri(action) {
  var _action$data, identifier, claim;

  return regeneratorRuntime.wrap(function handleShowPageUri$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _action$data = action.data, identifier = _action$data.identifier, claim = _action$data.claim;

          if (!identifier) {
            _context3.next = 5;
            break;
          }

          _context3.next = 4;
          return (0, _effects.call)(parseAndUpdateIdentifierAndClaim, identifier, claim);

        case 4:
          return _context3.abrupt('return', _context3.sent);

        case 5:
          _context3.next = 7;
          return (0, _effects.call)(parseAndUpdateClaimOnly, claim);

        case 7:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
};

function watchHandleShowPageUri() {
  return regeneratorRuntime.wrap(function watchHandleShowPageUri$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(actions.HANDLE_SHOW_URI, handleShowPageUri);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newAssetRequest = newAssetRequest;
exports.watchNewAssetRequest = watchNewAssetRequest;

var _effects = __webpack_require__(15);

var _show_action_types = __webpack_require__(12);

var actions = _interopRequireWildcard(_show_action_types);

var _show = __webpack_require__(8);

var _assetApi = __webpack_require__(151);

var _show2 = __webpack_require__(13);

var _site = __webpack_require__(46);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(newAssetRequest),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchNewAssetRequest);

function newAssetRequest(action) {
  var _action$data, requestType, requestId, name, modifier, state, host, longId, _ref, assetKey, shortId, _ref2, claimData, _ref3;

  return regeneratorRuntime.wrap(function newAssetRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$data = action.data, requestType = _action$data.requestType, requestId = _action$data.requestId, name = _action$data.name, modifier = _action$data.modifier;
          // put an action to update the request in redux

          _context.next = 3;
          return (0, _effects.put)((0, _show.onRequestUpdate)(requestType, requestId));

        case 3:
          _context.next = 5;
          return (0, _effects.select)(_show2.selectShowState);

        case 5:
          state = _context.sent;
          _context.next = 8;
          return (0, _effects.select)(_site.selectSiteHost);

        case 8:
          host = _context.sent;

          if (!state.requestList[requestId]) {
            _context.next = 11;
            break;
          }

          return _context.abrupt('return', null);

        case 11:
          // get long id && add request to request list
          longId = void 0;
          _context.prev = 12;
          _context.next = 15;
          return (0, _effects.call)(_assetApi.getLongClaimId, host, name, modifier);

        case 15:
          _ref = _context.sent;
          longId = _ref.data;
          _context.next = 24;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context['catch'](12);
          _context.next = 23;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t0.message));

        case 23:
          return _context.abrupt('return', _context.sent);

        case 24:
          assetKey = 'a#' + name + '#' + longId;
          _context.next = 27;
          return (0, _effects.put)((0, _show.addRequestToRequestList)(requestId, null, assetKey));

        case 27:
          if (!state.assetList[assetKey]) {
            _context.next = 29;
            break;
          }

          return _context.abrupt('return', null);

        case 29:
          // get short Id
          shortId = void 0;
          _context.prev = 30;
          _context.next = 33;
          return (0, _effects.call)(_assetApi.getShortId, host, name, longId);

        case 33:
          _ref2 = _context.sent;
          shortId = _ref2.data;
          _context.next = 42;
          break;

        case 37:
          _context.prev = 37;
          _context.t1 = _context['catch'](30);
          _context.next = 41;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t1.message));

        case 41:
          return _context.abrupt('return', _context.sent);

        case 42:
          // get asset claim data
          claimData = void 0;
          _context.prev = 43;
          _context.next = 46;
          return (0, _effects.call)(_assetApi.getClaimData, host, name, longId);

        case 46:
          _ref3 = _context.sent;
          claimData = _ref3.data;
          _context.next = 55;
          break;

        case 50:
          _context.prev = 50;
          _context.t2 = _context['catch'](43);
          _context.next = 54;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t2.message));

        case 54:
          return _context.abrupt('return', _context.sent);

        case 55:
          _context.next = 57;
          return (0, _effects.put)((0, _show.addAssetToAssetList)(assetKey, null, name, longId, shortId, claimData));

        case 57:
          _context.next = 59;
          return (0, _effects.put)((0, _show.onRequestError)(null));

        case 59:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[12, 19], [30, 37], [43, 50]]);
};

function watchNewAssetRequest() {
  return regeneratorRuntime.wrap(function watchNewAssetRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(actions.ASSET_REQUEST_NEW, newAssetRequest);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLongClaimId = getLongClaimId;
exports.getShortId = getShortId;
exports.getClaimData = getClaimData;

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLongClaimId(host, name, modifier) {
  var body = {};
  // create request params
  if (modifier) {
    if (modifier.id) {
      body['claimId'] = modifier.id;
    } else {
      body['channelName'] = modifier.channel.name;
      body['channelClaimId'] = modifier.channel.id;
    }
  }
  body['claimName'] = name;
  var params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  // create url
  var url = host + '/api/claim/long-id';
  // return the request promise
  return (0, _request2.default)(url, params);
};

function getShortId(host, name, claimId) {
  var url = host + '/api/claim/short-id/' + claimId + '/' + name;
  return (0, _request2.default)(url);
};

function getClaimData(host, name, claimId) {
  var url = host + '/api/claim/data/' + name + '/' + claimId;
  return (0, _request2.default)(url);
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newChannelRequest = newChannelRequest;
exports.watchNewChannelRequest = watchNewChannelRequest;
exports.watchUpdateChannelClaims = watchUpdateChannelClaims;

var _effects = __webpack_require__(15);

var _show_action_types = __webpack_require__(12);

var actions = _interopRequireWildcard(_show_action_types);

var _show = __webpack_require__(8);

var _channelApi = __webpack_require__(153);

var _show2 = __webpack_require__(13);

var _site = __webpack_require__(46);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(newChannelRequest),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchNewChannelRequest),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(getNewClaimsAndUpdateChannel),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchUpdateChannelClaims);

function newChannelRequest(action) {
  var _action$data, requestType, requestId, channelName, channelId, state, host, longId, shortId, _ref, _ref$data, channelKey, claimsData, _ref2;

  return regeneratorRuntime.wrap(function newChannelRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _action$data = action.data, requestType = _action$data.requestType, requestId = _action$data.requestId, channelName = _action$data.channelName, channelId = _action$data.channelId;
          // put an action to update the request in redux

          _context.next = 3;
          return (0, _effects.put)((0, _show.onRequestUpdate)(requestType, requestId));

        case 3:
          _context.next = 5;
          return (0, _effects.select)(_show2.selectShowState);

        case 5:
          state = _context.sent;
          _context.next = 8;
          return (0, _effects.select)(_site.selectSiteHost);

        case 8:
          host = _context.sent;

          if (!state.requestList[requestId]) {
            _context.next = 11;
            break;
          }

          return _context.abrupt('return', null);

        case 11:
          // get channel long id
          longId = void 0, shortId = void 0;
          _context.prev = 12;
          _context.next = 15;
          return (0, _effects.call)(_channelApi.getChannelData, host, channelName, channelId);

        case 15:
          _ref = _context.sent;
          _ref$data = _ref.data;
          longId = _ref$data.longChannelClaimId;
          shortId = _ref$data.shortChannelClaimId;
          _context.next = 26;
          break;

        case 21:
          _context.prev = 21;
          _context.t0 = _context['catch'](12);
          _context.next = 25;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t0.message));

        case 25:
          return _context.abrupt('return', _context.sent);

        case 26:
          // store the request in the channel requests list
          channelKey = 'c#' + channelName + '#' + longId;
          _context.next = 29;
          return (0, _effects.put)((0, _show.addRequestToRequestList)(requestId, null, channelKey));

        case 29:
          if (!state.channelList[channelKey]) {
            _context.next = 31;
            break;
          }

          return _context.abrupt('return', null);

        case 31:
          // get channel claims data
          claimsData = void 0;
          _context.prev = 32;
          _context.next = 35;
          return (0, _effects.call)(_channelApi.getChannelClaims, host, longId, channelName, 1);

        case 35:
          _ref2 = _context.sent;
          claimsData = _ref2.data;
          _context.next = 44;
          break;

        case 39:
          _context.prev = 39;
          _context.t1 = _context['catch'](32);
          _context.next = 43;
          return (0, _effects.put)((0, _show.onRequestError)(_context.t1.message));

        case 43:
          return _context.abrupt('return', _context.sent);

        case 44:
          _context.next = 46;
          return (0, _effects.put)((0, _show.addNewChannelToChannelList)(channelKey, channelName, shortId, longId, claimsData));

        case 46:
          _context.next = 48;
          return (0, _effects.put)((0, _show.onRequestError)(null));

        case 48:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[12, 21], [32, 39]]);
}

function watchNewChannelRequest() {
  return regeneratorRuntime.wrap(function watchNewChannelRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(actions.CHANNEL_REQUEST_NEW, newChannelRequest);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
};

function getNewClaimsAndUpdateChannel(action) {
  var _action$data2, channelKey, name, longId, page, host, claimsData, _ref3;

  return regeneratorRuntime.wrap(function getNewClaimsAndUpdateChannel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _action$data2 = action.data, channelKey = _action$data2.channelKey, name = _action$data2.name, longId = _action$data2.longId, page = _action$data2.page;
          _context3.next = 3;
          return (0, _effects.select)(_site.selectSiteHost);

        case 3:
          host = _context3.sent;
          claimsData = void 0;
          _context3.prev = 5;
          _context3.next = 8;
          return (0, _effects.call)(_channelApi.getChannelClaims, host, longId, name, page);

        case 8:
          _ref3 = _context3.sent;
          claimsData = _ref3.data;
          _context3.next = 17;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3['catch'](5);
          _context3.next = 16;
          return (0, _effects.put)((0, _show.onRequestError)(_context3.t0.message));

        case 16:
          return _context3.abrupt('return', _context3.sent);

        case 17:
          _context3.next = 19;
          return (0, _effects.put)((0, _show.updateChannelClaims)(channelKey, claimsData));

        case 19:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[5, 12]]);
}

function watchUpdateChannelClaims() {
  return regeneratorRuntime.wrap(function watchUpdateChannelClaims$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(actions.CHANNEL_CLAIMS_UPDATE_ASYNC, getNewClaimsAndUpdateChannel);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelData = getChannelData;
exports.getChannelClaims = getChannelClaims;

var _request = __webpack_require__(11);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChannelData(host, id, name) {
  if (!id) id = 'none';
  var url = host + '/api/channel/data/' + name + '/' + id;
  return (0, _request2.default)(url);
};

function getChannelClaims(host, longId, name, page) {
  if (!page) page = 1;
  var url = host + '/api/channel/claims/' + name + '/' + longId + '/' + page;
  return (0, _request2.default)(url);
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = {
  REGEXP_INVALID_CLAIM: /[^A-Za-z0-9-]/g,
  REGEXP_INVALID_CHANNEL: /[^A-Za-z0-9-@]/g,
  REGEXP_ADDRESS: /^b(?=[^0OIl]{32,33})[0-9A-Za-z]{32,33}$/,
  CHANNEL_CHAR: '@',
  parseIdentifier: function parseIdentifier(identifier) {
    var componentsRegex = new RegExp('([^:$#/]*)' + // value (stops at the first separator or end)
    '([:$#]?)([^/]*)' // modifier separator, modifier (stops at the first path separator or end)
    );

    var _componentsRegex$exec = componentsRegex // eslint-disable-line no-unused-vars
    .exec(identifier).map(function (match) {
      return match || null;
    }),
        _componentsRegex$exec2 = _slicedToArray(_componentsRegex$exec, 4),
        proto = _componentsRegex$exec2[0],
        value = _componentsRegex$exec2[1],
        modifierSeperator = _componentsRegex$exec2[2],
        modifier = _componentsRegex$exec2[3];

    // Validate and process name


    if (!value) {
      throw new Error('Check your URL.  No channel name provided before "' + modifierSeperator + '"');
    }
    var isChannel = value.startsWith(module.exports.CHANNEL_CHAR);
    var channelName = isChannel ? value : null;
    var claimId = void 0;
    if (isChannel) {
      if (!channelName) {
        throw new Error('Check your URL.  No channel name after "@".');
      }
      var nameBadChars = channelName.match(module.exports.REGEXP_INVALID_CHANNEL);
      if (nameBadChars) {
        throw new Error('Check your URL.  Invalid characters in channel name: "' + nameBadChars.join(', ') + '".');
      }
    } else {
      claimId = value;
    }

    // Validate and process modifier
    var channelClaimId = void 0;
    if (modifierSeperator) {
      if (!modifier) {
        throw new Error('Check your URL.  No modifier provided after separator "' + modifierSeperator + '"');
      }

      if (modifierSeperator === ':') {
        channelClaimId = modifier;
      } else {
        throw new Error('Check your URL.  The "' + modifierSeperator + '" modifier is not currently supported');
      }
    }
    return {
      isChannel: isChannel,
      channelName: channelName,
      channelClaimId: channelClaimId || null,
      claimId: claimId || null
    };
  },
  parseClaim: function parseClaim(name) {
    var componentsRegex = new RegExp('([^:$#/.]*)' + // name (stops at the first extension)
    '([:$#.]?)([^/]*)' // extension separator, extension (stops at the first path separator or end)
    );

    var _componentsRegex$exec3 = componentsRegex // eslint-disable-line no-unused-vars
    .exec(name).map(function (match) {
      return match || null;
    }),
        _componentsRegex$exec4 = _slicedToArray(_componentsRegex$exec3, 4),
        proto = _componentsRegex$exec4[0],
        claimName = _componentsRegex$exec4[1],
        extensionSeperator = _componentsRegex$exec4[2],
        extension = _componentsRegex$exec4[3];

    // Validate and process name


    if (!claimName) {
      throw new Error('Check your URL.  No claim name provided before "."');
    }
    var nameBadChars = claimName.match(module.exports.REGEXP_INVALID_CLAIM);
    if (nameBadChars) {
      throw new Error('Check your URL.  Invalid characters in claim name: "' + nameBadChars.join(', ') + '".');
    }
    // Validate and process extension
    if (extensionSeperator) {
      if (!extension) {
        throw new Error('Check your URL.  No file extension provided after separator "' + extensionSeperator + '".');
      }
      if (extensionSeperator !== '.') {
        throw new Error('Check your URL.  The "' + extensionSeperator + '" separator is not supported in the claim name.');
      }
    }
    return {
      claimName: claimName,
      extension: extension || null
    };
  }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var handlePageRender = __webpack_require__(31);

module.exports = function (app) {
  // a catch-all route if someone visits a page that does not exist
  app.use('*', function (req, res) {
    // send response
    handlePageRender(req, res);
  });
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(157),
    logLevel = _require.logLevel;

module.exports = function (winston) {
  // configure
  winston.configure({
    transports: [new winston.transports.Console({
      level: logLevel,
      timestamp: false,
      colorize: true,
      prettyPrint: true,
      handleExceptions: true,
      humanReadableUnhandledException: true
    })]
  });
  // test all the log levels
  winston.error('Level 0');
  winston.warn('Level 1');
  winston.info('Level 2');
  winston.verbose('Level 3');
  winston.debug('Level 4');
  winston.silly('Level 5');
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var loggerConfig = {
  logLevel: 'debug' // options: silly, debug, verbose, info
};

module.exports = loggerConfig;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winstonSlackWebHook = __webpack_require__(159).SlackWebHook;
var slackConfig = __webpack_require__(24);

module.exports = function (winston) {
  var slackWebHook = slackConfig.slackWebHook,
      slackErrorChannel = slackConfig.slackErrorChannel,
      slackInfoChannel = slackConfig.slackInfoChannel;

  if (slackWebHook) {
    // add a transport for errors to slack
    if (slackErrorChannel) {
      winston.add(winstonSlackWebHook, {
        name: 'slack-errors-transport',
        level: 'warn',
        webhookUrl: slackWebHook,
        channel: slackErrorChannel,
        username: 'spee.ch',
        iconEmoji: ':face_with_head_bandage:'
      });
    };
    if (slackInfoChannel) {
      winston.add(winstonSlackWebHook, {
        name: 'slack-info-transport',
        level: 'info',
        webhookUrl: slackWebHook,
        channel: slackInfoChannel,
        username: 'spee.ch',
        iconEmoji: ':nerd_face:'
      });
    };
    // send test message
    winston.error('Slack "error" logging is online.');
    winston.info('Slack "info" logging is online.');
  } else {
    winston.warn('Slack logging is not enabled because no slackWebHook config var provided.');
  }
};

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = require("winston-slack-webhook");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODdjYWViOTg5Mjc3NThlOWM4YzciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIiIsIndlYnBhY2s6Ly8vLi9jb25maWcvc2l0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FjdGlvbnMvcHVibGlzaC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL05hdkJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9zaG93LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NFTy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9zaG93X2FjdGlvbl90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VsZWN0b3JzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvbGJyeUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9nb29nbGVBbmFseXRpY3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvRXJyb3JQYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwid2VicGFjazovLy8uL2NvbmZpZy9teXNxbENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvc2xhY2tDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9zZXF1ZWxpemVIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9oZWxwZXJzL3B1Ymxpc2hIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9oZWxwZXJzL2Vycm9ySGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbnRyb2xsZXJzL3NlcnZlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9oYW5kbGVQYWdlUmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb25zdGFudHMvcHVibGlzaF9hY3Rpb25fdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NoYW5uZWxfc2VsZWN0X3N0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29uc3RhbnRzL2NoYW5uZWxfYWN0aW9uX3R5cGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb25zdGFudHMvYXNzZXRfZGlzcGxheV9zdGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvR0FMaXN0ZW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Ecm9wem9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsTG9naW5Gb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxDcmVhdGVGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb25zdGFudHMvc2hvd19yZXF1ZXN0X3R5cGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9yZW5kZXJGdWxsUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc2VsZWN0b3JzL3NpdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aGF0d2ctZmV0Y2hcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3MtaGFuZGxlYmFyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhhbmRsZWJhcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoZWxtZXRcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9hdXRoSGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFzc3BvcnQvbG9jYWwtc2lnbnVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2xicnlDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5pdmVyc2FsLWFuYWx5dGljc1wiIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvY2VydGlmaWNhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvY2xhaW0uanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9maWxlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3Bhc3Nwb3J0L2xvY2FsLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvYXV0aC1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9hcGktcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbXVsdGlwYXJ0eVwiIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9wdWJsaXNoQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy8uL3NlcnZlci9hdXRoL2F1dGhlbnRpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9oZWxwZXJzL2NoYW5uZWxQYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMvcGFnZS1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL3B1Ymxpc2guanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL3NpdGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ2FcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvZHluYW1pY0ltcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvSG9tZVBhZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NFTy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvcGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91dGlscy9tZXRhVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvY2Fub25pY2FsTGluay5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9OYXZCYXIvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTG9nby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVG9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVG9vbC92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Ecm9wem9uZS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9QdWJsaXNoUHJldmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaERldGFpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaERldGFpbHMvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRpdGxlSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRpdGxlSW5wdXQvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFVybElucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hVcmxJbnB1dC92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9QdWJsaXNoVXJsTWlkZGxlRGlzcGxheS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRodW1ibmFpbElucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hUaHVtYm5haWxJbnB1dC92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoTWV0YWRhdGFJbnB1dHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaE1ldGFkYXRhSW5wdXRzL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0V4cGFuZGluZ1RleHRBcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxTZWxlY3Qvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbExvZ2luRm9ybS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9BY3RpdmVTdGF0dXNCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0luYWN0aXZlU3RhdHVzQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoU3RhdHVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hTdGF0dXMvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NsYWltX3N0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hEaXNhYmxlZE1lc3NhZ2Uvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Fib3V0UGFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0xvZ2luUGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvTG9naW5QYWdlL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9TaG93UGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvU2hvd1BhZ2Uvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0TGl0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9TaG93QXNzZXRMaXRlL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9TaG93QXNzZXREZXRhaWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1Nob3dBc3NldERldGFpbHMvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXRUaXRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Bc3NldFRpdGxlL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0SW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Bc3NldEluZm8vdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0NoYW5uZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0NoYW5uZWwvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbENsYWltc0Rpc3BsYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbENsYWltc0Rpc3BsYXkvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQXNzZXRQcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Fzc2V0UHJldmlldy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvRm91ck9oRm91clBhZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9wYWdlcy9Gb3VyT2hGb3VyUGFnZS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzL2Fzc2V0LXJvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9zZXJ2ZUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvbGJyeVVyaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaGVscGVycy9oYW5kbGVTaG93UmVuZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NhZ2FzL3Nob3dfdXJpLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zYWdhcy9zaG93X2Fzc2V0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hcGkvYXNzZXRBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NhZ2FzL3Nob3dfY2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBpL2NoYW5uZWxBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL2xicnlVcmkuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy9mYWxsYmFjay1yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvY29uZmlndXJlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9sb2dnZXJDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2hlbHBlcnMvY29uZmlndXJlU2xhY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luc3Rvbi1zbGFjay13ZWJob29rXCIiXSwibmFtZXMiOlsiU2l0ZUNvbmZpZyIsImFuYWx5dGljcyIsImdvb2dsZUlkIiwiYXNzZXREZWZhdWx0cyIsImRlc2NyaXB0aW9uIiwidGh1bWJuYWlsIiwidGl0bGUiLCJhdXRoIiwic2Vzc2lvbktleSIsImN1c3RvbUNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiY29udGFpbmVycyIsInBhZ2VzIiwiZGV0YWlscyIsImhvc3QiLCJwb3J0IiwidHdpdHRlciIsImxvY2FsUHVibGljRm9sZGVyIiwicHVibGlzaGluZyIsImFkZGl0aW9uYWxDbGFpbUFkZHJlc3NlcyIsImRpc2FibGVkIiwiZGlzYWJsZWRNZXNzYWdlIiwicHJpbWFyeUNsYWltQWRkcmVzcyIsInRodW1ibmFpbENoYW5uZWwiLCJ0aHVtYm5haWxDaGFubmVsSWQiLCJ1cGxvYWREaXJlY3RvcnkiLCJjb25maWd1cmUiLCJjb25maWciLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlbGVjdEZpbGUiLCJjbGVhckZpbGUiLCJ1cGRhdGVNZXRhZGF0YSIsInVwZGF0ZUNsYWltIiwic2V0UHVibGlzaEluQ2hhbm5lbCIsInVwZGF0ZVB1Ymxpc2hTdGF0dXMiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZVNlbGVjdGVkQ2hhbm5lbCIsInRvZ2dsZU1ldGFkYXRhSW5wdXRzIiwib25OZXdUaHVtYm5haWwiLCJzdGFydFB1Ymxpc2giLCJhY3Rpb25zIiwiZmlsZSIsInR5cGUiLCJGSUxFX1NFTEVDVEVEIiwiZGF0YSIsIkZJTEVfQ0xFQVIiLCJuYW1lIiwidmFsdWUiLCJNRVRBREFUQV9VUERBVEUiLCJDTEFJTV9VUERBVEUiLCJjaGFubmVsIiwiU0VUX1BVQkxJU0hfSU5fQ0hBTk5FTCIsInN0YXR1cyIsIm1lc3NhZ2UiLCJQVUJMSVNIX1NUQVRVU19VUERBVEUiLCJFUlJPUl9VUERBVEUiLCJjaGFubmVsTmFtZSIsIlNFTEVDVEVEX0NIQU5ORUxfVVBEQVRFIiwic2hvd01ldGFkYXRhSW5wdXRzIiwiVE9HR0xFX01FVEFEQVRBX0lOUFVUUyIsIlRIVU1CTkFJTF9ORVciLCJoaXN0b3J5IiwiUFVCTElTSF9TVEFSVCIsIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJsb2dnZXIiLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJkYiIsInNlcXVlbGl6ZSIsImRpYWxlY3QiLCJkaWFsZWN0T3B0aW9ucyIsImRlY2ltYWxOdW1iZXJzIiwibG9nZ2luZyIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlIiwiYWNxdWlyZSIsImF1dGhlbnRpY2F0ZSIsInRoZW4iLCJpbmZvIiwiY2F0Y2giLCJlcnJvciIsImVyciIsIkNlcnRpZmljYXRlIiwiQ2hhbm5lbCIsIkNsYWltIiwiRmlsZSIsIlJlcXVlc3QiLCJVc2VyIiwiaW1wb3J0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJ1cHNlcnQiLCJNb2RlbCIsInZhbHVlcyIsImNvbmRpdGlvbiIsInRhYmxlTmFtZSIsImZpbmRPbmUiLCJ3aGVyZSIsIm9iaiIsImRlYnVnIiwidXBkYXRlIiwiY3JlYXRlIiwibWFwU3RhdGVUb1Byb3BzIiwic2l0ZSIsImxvZ2dlZEluQ2hhbm5lbCIsImNoYW5uZWxTaG9ydElkIiwic2hvcnRJZCIsImNoYW5uZWxMb25nSWQiLCJsb25nSWQiLCJzaXRlRGVzY3JpcHRpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJvbkNoYW5uZWxMb2dpbiIsImRpc3BhdGNoIiwib25DaGFubmVsTG9nb3V0Iiwib25IYW5kbGVTaG93UGFnZVVyaSIsIm9uUmVxdWVzdEVycm9yIiwib25OZXdDaGFubmVsUmVxdWVzdCIsIm9uTmV3QXNzZXRSZXF1ZXN0Iiwib25SZXF1ZXN0VXBkYXRlIiwiYWRkUmVxdWVzdFRvUmVxdWVzdExpc3QiLCJhZGRBc3NldFRvQXNzZXRMaXN0IiwiYWRkTmV3Q2hhbm5lbFRvQ2hhbm5lbExpc3QiLCJvblVwZGF0ZUNoYW5uZWxDbGFpbXMiLCJ1cGRhdGVDaGFubmVsQ2xhaW1zIiwiZmlsZVJlcXVlc3RlZCIsInVwZGF0ZUZpbGVBdmFpbGFiaWxpdHkiLCJ1cGRhdGVEaXNwbGF5QXNzZXRFcnJvciIsInBhcmFtcyIsIkhBTkRMRV9TSE9XX1VSSSIsIlJFUVVFU1RfRVJST1IiLCJjaGFubmVsSWQiLCJyZXF1ZXN0VHlwZSIsInJlcXVlc3RJZCIsIkNIQU5ORUxfUkVRVUVTVF9ORVciLCJpZCIsImV4dGVuc2lvbiIsIkFTU0VUX1JFUVVFU1RfTkVXIiwibW9kaWZpZXIiLCJSRVFVRVNUX1VQREFURSIsImtleSIsIlJFUVVFU1RfTElTVF9BREQiLCJjbGFpbUlkIiwiY2xhaW1EYXRhIiwiQVNTRVRfQUREIiwiY2xhaW1zRGF0YSIsIkNIQU5ORUxfQUREIiwiY2hhbm5lbEtleSIsInBhZ2UiLCJDSEFOTkVMX0NMQUlNU19VUERBVEVfQVNZTkMiLCJjaGFubmVsTGlzdElkIiwiQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX1NVQ0NFU1MiLCJGSUxFX1JFUVVFU1RFRCIsIkZJTEVfQVZBSUxBQklMSVRZX1VQREFURSIsIkRJU1BMQVlfQVNTRVRfRVJST1IiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0VGh1bWJuYWlsIiwic2l0ZUhvc3QiLCJzaXRlVGl0bGUiLCJzaXRlVHdpdHRlciIsInJlcXVlc3QiLCJwYXJzZUpTT04iLCJyZXNwb25zZSIsImpzb24iLCJjaGVja1N0YXR1cyIsImpzb25SZXNwb25zZSIsIkVycm9yIiwidXJsIiwib3B0aW9ucyIsImZldGNoIiwiUHJvbWlzZSIsImFsbCIsInNlbGVjdEFzc2V0Iiwic2hvdyIsInJlcXVlc3RMaXN0IiwiYXNzZXRLZXkiLCJhc3NldExpc3QiLCJzZWxlY3RTaG93U3RhdGUiLCJzdGF0ZSIsImF4aW9zIiwiYXBpIiwiYXBpSG9zdCIsImFwaVBvcnQiLCJsYnJ5QXBpVXJpIiwiY2hvb3NlR2FMYnJ5bmV0UHVibGlzaExhYmVsIiwic2VuZEdBVGltaW5nRXZlbnQiLCJoYW5kbGVMYnJ5bmV0UmVzcG9uc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiSlNPTiIsInN0cmluZ2lmeSIsInB1Ymxpc2hDbGFpbSIsInB1Ymxpc2hQYXJhbXMiLCJnYVN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJwb3N0IiwibWV0aG9kIiwiZ2V0Q2xhaW0iLCJ1cmkiLCJ0aW1lb3V0IiwiZ2V0Q2xhaW1MaXN0IiwiY2xhaW1OYW1lIiwicmVzb2x2ZVVyaSIsImdldERvd25sb2FkRGlyZWN0b3J5IiwiZG93bmxvYWRfZGlyZWN0b3J5IiwiY3JlYXRlQ2hhbm5lbCIsImNoYW5uZWxfbmFtZSIsImFtb3VudCIsInVhIiwiY3JlYXRlU2VydmVFdmVudFBhcmFtcyIsImhlYWRlcnMiLCJpcCIsIm9yaWdpbmFsVXJsIiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlwT3ZlcnJpZGUiLCJ1c2VyQWdlbnRPdmVycmlkZSIsImNyZWF0ZVB1Ymxpc2hUaW1pbmdFdmVudFBhcmFtcyIsImNhdGVnb3J5IiwidmFyaWFibGUiLCJsYWJlbCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJkdXJhdGlvbiIsInVzZXJUaW1pbmdDYXRlZ29yeSIsInVzZXJUaW1pbmdWYXJpYWJsZU5hbWUiLCJ1c2VyVGltaW5nVGltZSIsInVzZXJUaW1pbmdMYWJlbCIsInNlbmRHb29nbGVBbmFseXRpY3NFdmVudCIsInZpc2l0b3JJZCIsInJlcGxhY2UiLCJ2aXNpdG9yIiwic3RyaWN0Q2lkRm9ybWF0IiwiaHR0cHMiLCJldmVudCIsInNlbmRHb29nbGVBbmFseXRpY3NUaW1pbmciLCJ0aW1pbmciLCJzZW5kR0FTZXJ2ZUV2ZW50IiwiY2hhbm5lbF9pZCIsInVwZGF0ZUxvZ2dlZEluQ2hhbm5lbCIsIkNIQU5ORUxfVVBEQVRFIiwiUHJvZ3Jlc3NCYXIiLCJwcm9wcyIsImJhcnMiLCJpbmRleCIsImluY3JlbWVudGVyIiwiY3JlYXRlQmFycyIsImJpbmQiLCJzdGFydFByb2dyZXNzQmFyIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJzdG9wUHJvZ3Jlc3NCYXIiLCJpIiwic2l6ZSIsInB1c2giLCJpc0FjdGl2ZSIsInNldFN0YXRlIiwidXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYXAiLCJiYXIiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiRXJyb3JQYWdlIiwic3RyaW5nIiwiTXlzcWxDb25maWciLCJTbGFja0NvbmZpZyIsInNsYWNrV2ViSG9vayIsInNsYWNrRXJyb3JDaGFubmVsIiwic2xhY2tJbmZvQ2hhbm5lbCIsInJldHVyblNob3J0SWQiLCJjbGFpbXNBcnJheSIsImNsYWltSW5kZXgiLCJzdWJzdHJpbmciLCJzaG9ydElkTGVuZ3RoIiwiZmluZEluZGV4IiwiZWxlbWVudCIsInBvc3NpYmxlTWF0Y2hlcyIsInNsaWNlIiwibGVuZ3RoIiwiZmlsdGVyIiwiZnMiLCJwYXJzZVB1Ymxpc2hBcGlSZXF1ZXN0Qm9keSIsIm5zZnciLCJsaWNlbnNlIiwiaW52YWxpZE5hbWVDaGFyYWN0ZXJzIiwiZXhlYyIsInBhcnNlUHVibGlzaEFwaVJlcXVlc3RGaWxlcyIsInBhdGgiLCJ0ZXN0IiwidmFsaWRhdGVGaWxlVHlwZUFuZFNpemUiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwiZmlsZVR5cGUiLCJ0aHVtYm5haWxGaWxlTmFtZSIsInRodW1ibmFpbEZpbGVQYXRoIiwidGh1bWJuYWlsRmlsZVR5cGUiLCJjcmVhdGVCYXNpY1B1Ymxpc2hQYXJhbXMiLCJ0cmltIiwiZmlsZV9wYXRoIiwiYmlkIiwibWV0YWRhdGEiLCJhdXRob3IiLCJsYW5ndWFnZSIsImNsYWltX2FkZHJlc3MiLCJjcmVhdGVUaHVtYm5haWxQdWJsaXNoUGFyYW1zIiwiZGVsZXRlVGVtcG9yYXJ5RmlsZSIsInVubGluayIsImFkZEdldFJlc3VsdHNUb0ZpbGVEYXRhIiwiZmlsZUluZm8iLCJnZXRSZXN1bHQiLCJmaWxlX25hbWUiLCJkb3dubG9hZF9wYXRoIiwiY3JlYXRlRmlsZURhdGEiLCJvdXRwb2ludCIsImhlaWdodCIsImFkZHJlc3MiLCJjb250ZW50VHlwZSIsImhhbmRsZUVycm9yUmVzcG9uc2UiLCJyZXMiLCJ1c2VPYmplY3RQcm9wZXJ0aWVzSWZOb0tleXMiLCJyZXR1cm5FcnJvck1lc3NhZ2VBbmRTdGF0dXMiLCJjcmVhdGVFcnJvclJlc3BvbnNlUGF5bG9hZCIsImNvZGUiLCJuZXdFcnJvck9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJzdWNjZXNzIiwicmV0dXJuUGFnaW5hdGVkQ2hhbm5lbENsYWltcyIsIk5PX0NIQU5ORUwiLCJOT19DTEFJTSIsIk5PX0ZJTEUiLCJnZXRDbGFpbUlkIiwiY2hhbm5lbENsYWltSWQiLCJnZXRDbGFpbUlkQnlDaGFubmVsIiwiZ2V0Q2xhaW1JZEJ5Q2xhaW0iLCJnZXRMb25nQ2xhaW1JZCIsImxvbmdDbGFpbUlkIiwiZ2V0TG9uZ0NoYW5uZWxJZCIsImxvbmdDaGFubmVsSWQiLCJnZXRDbGFpbUlkQnlMb25nQ2hhbm5lbElkIiwiZ2V0Q2hhbm5lbERhdGEiLCJsb25nQ2hhbm5lbENsYWltSWQiLCJnZXRTaG9ydENoYW5uZWxJZEZyb21Mb25nQ2hhbm5lbElkIiwic2hvcnRDaGFubmVsQ2xhaW1JZCIsImdldENoYW5uZWxDbGFpbXMiLCJnZXRBbGxDaGFubmVsQ2xhaW1zIiwiY2hhbm5lbENsYWltc0FycmF5IiwicGFnaW5hdGVkQ2hhbm5lbFZpZXdEYXRhIiwiZ2V0TG9jYWxGaWxlUmVjb3JkIiwiZGF0YVZhbHVlcyIsInJlcSIsImNvbnRleHQiLCJzdG9yZSIsImh0bWwiLCJoZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJyZWRpcmVjdCIsInByZWxvYWRlZFN0YXRlIiwiZ2V0U3RhdGUiLCJzZW5kIiwicHVibGlzaCIsIkxPR0lOIiwiQ1JFQVRFIiwiTE9DQUxfQ0hFQ0siLCJVTkFWQUlMQUJMRSIsIkVSUk9SIiwiQVZBSUxBQkxFIiwiaW5pdGlhbGl6ZSIsIkdBTGlzdGVuZXIiLCJzZW5kUGFnZVZpZXciLCJsb2NhdGlvbiIsImxpc3RlbiIsInNldCIsInBhdGhuYW1lIiwicGFnZXZpZXciLCJjaGlsZHJlbiIsIkhvbWVQYWdlIiwiZGVmYXVsdCIsIkFib3V0UGFnZSIsIkxvZ2luUGFnZSIsIlNob3dQYWdlIiwiRm91ck9oRm91clBhZ2UiLCJBcHAiLCJmaWxlRXJyb3IiLCJzZXRGaWxlRXJyb3IiLCJDSEFOTkVMIiwiQVNTRVRfTElURSIsIkFTU0VUX0RFVEFJTFMiLCJkaXNwbGF5QXNzZXQiLCJhc3NldCIsIm9uRmlsZVJlcXVlc3QiLCJ0b1N0cmluZyIsIm1ldGEiLCJsaW5rIiwic2VsZWN0U2l0ZVN0YXRlIiwic2VsZWN0U2l0ZUhvc3QiLCJleHByZXNzIiwiYm9keVBhcnNlciIsImV4cHJlc3NIYW5kbGViYXJzIiwiSGFuZGxlYmFycyIsInBhc3Nwb3J0Iiwic2VyaWFsaXplU3BlZWNoVXNlciIsImRlc2VyaWFsaXplU3BlZWNoVXNlciIsImNvb2tpZVNlc3Npb24iLCJodHRwIiwiU2VydmVyIiwiY29uZmlndXJlTXlzcWwiLCJteXNxbENvbmZpZyIsImNvbmZpZ3VyZVNpdGUiLCJzaXRlQ29uZmlnIiwiUE9SVCIsImNvbmZpZ3VyZVNsYWNrIiwic2xhY2tDb25maWciLCJjcmVhdGVBcHAiLCJhcHAiLCJlbmFibGUiLCJ1c2UiLCJzdGF0aWMiLCJfX2Rpcm5hbWUiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJuZXh0IiwidmVyYm9zZSIsInNlcmlhbGl6ZVVzZXIiLCJkZXNlcmlhbGl6ZVVzZXIiLCJsb2NhbFNpZ251cFN0cmF0ZWd5IiwibG9jYWxMb2dpblN0cmF0ZWd5IiwibWF4QWdlIiwic2Vzc2lvbiIsImhicyIsImRlZmF1bHRMYXlvdXQiLCJoYW5kbGViYXJzIiwiZW5naW5lIiwic2VydmVyIiwic3RhcnQiLCJzeW5jIiwidXNlciIsImRvbmUiLCJQYXNzcG9ydExvY2FsU3RyYXRlZ3kiLCJTdHJhdGVneSIsImxicnlBcGkiLCJ1c2VybmFtZUZpZWxkIiwicGFzc3dvcmRGaWVsZCIsInVzZXJJbmZvIiwidXNlckRhdGEiLCJ1c2VyTmFtZSIsImNoYW5uZWxEYXRhIiwidHgiLCJjbGFpbV9pZCIsImNlcnRpZmljYXRlRGF0YSIsIm5ld1VzZXIiLCJuZXdDaGFubmVsIiwibmV3Q2VydGlmaWNhdGUiLCJzZXRDaGFubmVsIiwic2V0VXNlciIsInNob3J0Q2hhbm5lbElkIiwibGJyeUNvbmZpZyIsIlNUUklORyIsIkJPT0xFQU4iLCJJTlRFR0VSIiwiVEVYVCIsIkRFQ0lNQUwiLCJkZWZpbmUiLCJjbGFpbVNlcXVlbmNlIiwiZGVjb2RlZENsYWltIiwiZGVwdGgiLCJlZmZlY3RpdmVBbW91bnQiLCJoYXNTaWduYXR1cmUiLCJoZXgiLCJub3V0IiwidHhpZCIsInZhbGlkQXRIZWlnaHQiLCJ2YWx1ZVZlcnNpb24iLCJjbGFpbVR5cGUiLCJjZXJ0aWZpY2F0ZVZlcnNpb24iLCJrZXlUeXBlIiwicHVibGljS2V5IiwiZnJlZXplVGFibGVOYW1lIiwiYmVsb25nc1RvIiwiZm9yZWlnbktleSIsImFsbG93TnVsbCIsImZpbmRBbGwiLCJvcmRlciIsImdldExvbmdDaGFubmVsSWRGcm9tU2hvcnRDaGFubmVsSWQiLCIkbGlrZSIsImdldExvbmdDaGFubmVsSWRGcm9tQ2hhbm5lbE5hbWUiLCJ2YWxpZGF0ZUxvbmdDaGFubmVsSWQiLCJoYXNPbmUiLCJkZXRlcm1pbmVGaWxlRXh0ZW5zaW9uRnJvbUNvbnRlbnRUeXBlIiwiZGV0ZXJtaW5lVGh1bWJuYWlsIiwic3RvcmVkVGh1bWJuYWlsIiwicHJlcGFyZUNsYWltRGF0YSIsImNsYWltIiwiY2VydGlmaWNhdGVJZCIsImxpY2Vuc2VVcmwiLCJwcmV2aWV3IiwibWV0YWRhdGFWZXJzaW9uIiwic291cmNlIiwic291cmNlVHlwZSIsInNvdXJjZVZlcnNpb24iLCJzdHJlYW1WZXJzaW9uIiwiZ2V0U2hvcnRDbGFpbUlkRnJvbUxvbmdDbGFpbUlkIiwicmF3IiwiZ2V0TG9uZ0NsYWltSWRGcm9tU2hvcnRDbGFpbUlkIiwiZ2V0VG9wRnJlZUNsYWltSWRCeUNsYWltTmFtZSIsInZhbGlkYXRlTG9uZ0NsYWltSWQiLCJyZXNvbHZlQ2xhaW0iLCJjbGFpbUFycmF5IiwiZGVmYXVsdFZhbHVlIiwidHJlbmRpbmdFbGlnaWJsZSIsImhhc01hbnkiLCJnZXRSZWNlbnRDbGFpbXMiLCJsaW1pdCIsImFjdGlvbiIsImlwQWRkcmVzcyIsImJjcnlwdCIsInByb3RvdHlwZSIsImNvbXBhcmVQYXNzd29yZCIsImNvbXBhcmUiLCJjaGFuZ2VQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiZ2VuU2FsdCIsInNhbHRFcnJvciIsInNhbHQiLCJoYXNoIiwiaGFzaEVycm9yIiwiaG9vayIsInJldHVyblVzZXJBbmRDaGFubmVsSW5mbyIsInVzZXJJbnN0YW5jZSIsImdldENoYW5uZWwiLCJpc01hdGNoIiwibG9nSW4iLCJnZXQiLCJsb2dvdXQiLCJtdWx0aXBhcnQiLCJtdWx0aXBhcnRNaWRkbGV3YXJlIiwidXBsb2FkRGlyIiwiY2xhaW1OYW1lSXNBdmFpbGFibGUiLCJjaGVja0NoYW5uZWxBdmFpbGFiaWxpdHkiLCJlcnJvckhhbmRsZXJzIiwiYXV0aGVudGljYXRlVXNlciIsImF2YWlsYWJsZU5hbWUiLCJib2R5IiwiY2xhaW1zTGlzdCIsInJlc29sdmVSZXN1bHQiLCJmaWxlRGF0YSIsImZpbGVSZWNvcmQiLCJjb21wbGV0ZWQiLCJyZXNvbHZlZFVyaSIsImZpbGVzIiwiY2hhbm5lbFBhc3N3b3JkIiwidmFsaWRhdGVkQ2xhaW1OYW1lIiwidGh1bWJuYWlsUHVibGlzaFBhcmFtcyIsImxicnlUeCIsImNsYWltSW5mbyIsInB1Ymxpc2hIZWxwZXJzIiwiT3AiLCJwdWJsaXNoUmVzdWx0cyIsImNsYWltUmVjb3JkIiwidXBzZXJ0Q3JpdGVyaWEiLCJzZXRDbGFpbSIsInNldEZpbGUiLCJjbGFpbUFkZHJlc3NlcyIsImF0dHJpYnV0ZXMiLCJvciIsImF1dGhlbnRpY2F0ZUNoYW5uZWxDcmVkZW50aWFscyIsInVzZXJQYXNzd29yZCIsImNoYW5uZWxGaW5kUGFyYW1zIiwiQ0xBSU1TX1BFUl9QQUdFIiwiY2xhaW1zIiwidG90YWxQYWdlcyIsImRldGVybWluZVRvdGFsUGFnZXMiLCJwYWdpbmF0aW9uUGFnZSIsImdldFBhZ2VGcm9tUXVlcnkiLCJ2aWV3RGF0YSIsImV4dHJhY3RQYWdlRnJvbUNsYWltcyIsInByZXZpb3VzUGFnZSIsImRldGVybWluZVByZXZpb3VzUGFnZSIsImN1cnJlbnRQYWdlIiwibmV4dFBhZ2UiLCJkZXRlcm1pbmVOZXh0UGFnZSIsInRvdGFsUmVzdWx0cyIsImRldGVybWluZVRvdGFsQ2xhaW1zIiwicGFyc2VJbnQiLCJwYWdlTnVtYmVyIiwiY2xhaW1TdGFydEluZGV4IiwiY2xhaW1FbmRJbmRleCIsInBhZ2VPZkNsYWltcyIsInRvdGFsQ2xhaW1zIiwiZnVsbFBhZ2VzIiwiTWF0aCIsImZsb29yIiwicmVtYWluZGVyIiwiaGFuZGxlUGFnZVJlbmRlciIsInJlbmRlciIsImxheW91dCIsImluaXRpYWxTdGF0ZSIsImFzc2lnbiIsInB1Ymxpc2hJbkNoYW5uZWwiLCJzZWxlY3RlZENoYW5uZWwiLCJwdWJsaXNoU3VibWl0IiwiY2hhbm5lbExpc3QiLCJnb29nbGVBbmFseXRpY3NJZCIsImdldERlZXBlc3RDaGlsZFZhbHVlIiwicGFyZW50IiwiY2hpbGRyZW5LZXlzIiwiY2hpbGRLZXkiLCJzaGlmdCIsImNoaWxkIiwiaW1wb3J0Q3VzdG9tQ29tcG9uZW50IiwiZm9sZGVycyIsInNwbGl0IiwiZm9sZGVyTmFtZSIsImNvbXBvbmVudCIsIlNFTyIsInBhZ2VVcmkiLCJwYWdlVGl0bGUiLCJtZXRhVGFncyIsImNhbm9uaWNhbExpbmsiLCJyZWwiLCJocmVmIiwib2JqZWN0IiwiY3JlYXRlUGFnZVRpdGxlIiwiZGV0ZXJtaW5lT2dUaHVtYm5haWxDb250ZW50VHlwZSIsImZpbGVFeHQiLCJsYXN0SW5kZXhPZiIsImNyZWF0ZUJhc2ljTWV0YVRhZ3MiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJjcmVhdGVDaGFubmVsTWV0YVRhZ3MiLCJjcmVhdGVBc3NldE1ldGFUYWdzIiwiZW1iZWRVcmwiLCJzaG93VXJsIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJvZ1RodW1ibmFpbENvbnRlbnRUeXBlIiwib2dUaHVtYm5haWwiLCJjcmVhdGVNZXRhVGFncyIsImNyZWF0ZUJhc2ljQ2Fub25pY2FsTGluayIsImNyZWF0ZUFzc2V0Q2Fub25pY2FsTGluayIsImNyZWF0ZUNoYW5uZWxDYW5vbmljYWxMaW5rIiwiY3JlYXRlQ2Fub25pY2FsTGluayIsIlZJRVciLCJMT0dPVVQiLCJOYXZCYXIiLCJjaGVja0ZvckxvZ2dlZEluVXNlciIsImxvZ291dFVzZXIiLCJoYW5kbGVTZWxlY3Rpb24iLCJjcmVkZW50aWFscyIsInRhcmdldCIsInNlbGVjdGVkT3B0aW9ucyIsIkxvZ28iLCJOYXZCYXJDaGFubmVsRHJvcGRvd24iLCJkZWZhdWx0U2VsZWN0aW9uIiwiUHVibGlzaFRvb2wiLCJEcm9wem9uZSIsImRyYWdPdmVyIiwibW91c2VPdmVyIiwiZGltUHJldmlldyIsImhhbmRsZURyb3AiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyYWdFbmQiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRmlsZUlucHV0IiwiY2hvb3NlRmlsZSIsInByZXZlbnREZWZhdWx0IiwiZHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImtpbmQiLCJkcm9wcGVkRmlsZSIsImdldEFzRmlsZSIsInJlbW92ZSIsImNsZWFyRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsImZpbGVMaXN0IiwidmFsaWRhdGVGaWxlIiwiUHVibGlzaFByZXZpZXciLCJpbWdTb3VyY2UiLCJzZXRQcmV2aWV3SW1hZ2VTb3VyY2UiLCJuZXdQcm9wcyIsInNldFByZXZpZXdJbWFnZVNvdXJjZUZyb21GaWxlIiwicHJldmlld1JlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwiYm9vbCIsIlB1Ymxpc2hEZXRhaWxzIiwib25QdWJsaXNoU3VibWl0Iiwib25NZXRhZGF0YUNoYW5nZSIsIlB1Ymxpc2hUaXRsZUlucHV0IiwiaGFuZGxlSW5wdXQiLCJlIiwibG9nZ2VkSW5DaGFubmVsTmFtZSIsImxvZ2dlZEluQ2hhbm5lbFNob3J0SWQiLCJ1cmxFcnJvciIsIm9uQ2xhaW1DaGFuZ2UiLCJvblVybEVycm9yIiwiUHVibGlzaFVybElucHV0Iiwic2V0Q2xhaW1OYW1lIiwidmFsaWRhdGVDbGFpbSIsImNsZWFuc2VJbnB1dCIsImlucHV0IiwiZmlsZU5hbWVXaXRob3V0RW5kaW5nIiwiY2xlYW5DbGFpbU5hbWUiLCJVcmxNaWRkbGUiLCJkYXRhVVJJdG9CbG9iIiwiZGF0YVVSSSIsImJ5dGVTdHJpbmciLCJhdG9iIiwibWltZVN0cmluZyIsImlhIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwiUHVibGlzaFRodW1ibmFpbElucHV0IiwidmlkZW9Tb3VyY2UiLCJzbGlkZXJNaW5SYW5nZSIsInNsaWRlck1heFJhbmdlIiwic2xpZGVyVmFsdWUiLCJoYW5kbGVWaWRlb0xvYWRlZERhdGEiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJjcmVhdGVUaHVtYm5haWwiLCJzZXRWaWRlb1NvdXJjZSIsIm5leHRQcm9wcyIsImRhdGFVcmkiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwidG90YWxNaW51dGVzIiwidG90YWxTZWNvbmRzIiwidmlkZW8iLCJjdXJyZW50VGltZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwic25hcHNob3QiLCJkaXNwbGF5Iiwib25Ub2dnbGVNZXRhZGF0YUlucHV0cyIsIlB1Ymxpc2hNZXRhZGF0YUlucHV0cyIsInRvZ2dsZVNob3dJbnB1dHMiLCJoYW5kbGVTZWxlY3QiLCJjaGVja2VkIiwic2VsZWN0ZWRPcHRpb24iLCJtYXhIZWlnaHQiLCJFeHBhbmRpbmdUZXh0YXJlYSIsIl9oYW5kbGVDaGFuZ2UiLCJhZGp1c3RUZXh0YXJlYSIsIm9uQ2hhbmdlIiwiZWwiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsInJlc3QiLCJ4IiwiZnVuYyIsImNoYW5uZWxFcnJvciIsIm9uUHVibGlzaEluQ2hhbm5lbENoYW5nZSIsIm9uQ2hhbm5lbFNlbGVjdCIsInN0YXRlcyIsIkNoYW5uZWxTZWxlY3QiLCJ0b2dnbGVBbm9ueW1vdXNQdWJsaXNoIiwiQ2hhbm5lbExvZ2luRm9ybSIsImxvZ2luVG9DaGFubmVsIiwiSGVhZGVycyIsIkNoYW5uZWxDcmVhdGVGb3JtIiwiaGFuZGxlQ2hhbm5lbElucHV0IiwiY2xlYW5zZUNoYW5uZWxJbnB1dCIsInVwZGF0ZUlzQ2hhbm5lbEF2YWlsYWJsZSIsImNoYW5uZWxXaXRoQXRTeW1ib2wiLCJjaGVja0lzUGFzc3dvcmRQcm92aWRlZCIsImNoZWNrSXNDaGFubmVsQXZhaWxhYmxlIiwibWFrZVB1Ymxpc2hDaGFubmVsUmVxdWVzdCIsIkFjdGl2ZVN0YXR1c0JhciIsIkluYWN0aXZlU3RhdHVzQmFyIiwicHVibGlzaFN0YXRlcyIsIlB1Ymxpc2hTdGF0dXMiLCJMT0FEX1NUQVJUIiwiTE9BRElORyIsIlBVQkxJU0hJTkciLCJTVUNDRVNTIiwiRkFJTEVEIiwiUHVibGlzaERpc2FibGVkTWVzc2FnZSIsIm1hdGNoIiwiU2hvd0xpdGUiLCJBc3NldERpc3BsYXkiLCJTaG93QXNzZXREZXRhaWxzIiwiQXNzZXRUaXRsZSIsIkFzc2V0SW5mbyIsImNvcHlUb0NsaXBib2FyZCIsImVsZW1lbnRUb0NvcHkiLCJkYXRhc2V0IiwiZWxlbWVudHRvY29weSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicHJldmlvdXNSZXF1ZXN0IiwiU2hvd0NoYW5uZWwiLCJDaGFubmVsQ2xhaW1zRGlzcGxheSIsInNob3dOZXh0UmVzdWx0c1BhZ2UiLCJzaG93UHJldmlvdXNSZXN1bHRzUGFnZSIsInNob3dOZXdQYWdlIiwiZGVmYXVsdHMiLCJBc3NldFByZXZpZXciLCJkaXJlY3RTb3VyY2VMaW5rIiwic2hvd1VybExpbmsiLCJGb3VyT2hGb3JQYWdlIiwiZGV0ZXJtaW5lUmVzcG9uc2VUeXBlIiwiZmxpcENsYWltTmFtZUFuZElkRm9yQmFja3dhcmRzQ29tcGF0aWJpbGl0eSIsImxvZ1JlcXVlc3REYXRhIiwiZ2V0Q2xhaW1JZEFuZFNlcnZlQXNzZXQiLCJsYnJ5VXJpIiwiaGFuZGxlU2hvd1JlbmRlciIsIlNFUlZFIiwiaGFzRmlsZUV4dGVuc2lvbiIsInBhcnNlTW9kaWZpZXIiLCJyZXNwb25zZVR5cGUiLCJwYXJzZUNsYWltIiwiaXNDaGFubmVsIiwicGFyc2VJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsIlNIT1ciLCJjbGllbnRBY2NlcHRzSHRtbCIsImFjY2VwdCIsInJlcXVlc3RJc0Zyb21Ccm93c2VyIiwiY2xpZW50V2FudHNBc3NldCIsInJhbmdlIiwiaW1hZ2VJc1dhbnRlZCIsInZpZGVvSXNXYW50ZWQiLCJpc1ZhbGlkQ2xhaW1JZCIsImlzVmFsaWRTaG9ydElkIiwiaXNWYWxpZFNob3J0SWRPckNsYWltSWQiLCJzZXJ2ZUFzc2V0VG9DbGllbnQiLCJzZW5kRmlsZU9wdGlvbnMiLCJzZW5kRmlsZSIsImZ1bGxDbGFpbUlkIiwidGVtcE5hbWUiLCJSRUdFWFBfSU5WQUxJRF9DTEFJTSIsIlJFR0VYUF9JTlZBTElEX0NIQU5ORUwiLCJSRUdFWFBfQUREUkVTUyIsIkNIQU5ORUxfQ0hBUiIsImNvbXBvbmVudHNSZWdleCIsIlJlZ0V4cCIsInByb3RvIiwibW9kaWZpZXJTZXBlcmF0b3IiLCJzdGFydHNXaXRoIiwibmFtZUJhZENoYXJzIiwiam9pbiIsInJldHVyblNhZ2FXaXRoUGFyYW1zIiwic2FnYSIsInNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJ1biIsImhhbmRsZVNob3dQYWdlVXJpIiwid2F0Y2hIYW5kbGVTaG93UGFnZVVyaSIsInBhcnNlQW5kVXBkYXRlSWRlbnRpZmllckFuZENsYWltIiwicGFyc2VBbmRVcGRhdGVDbGFpbU9ubHkiLCJuZXdBc3NldFJlcXVlc3QiLCJ3YXRjaE5ld0Fzc2V0UmVxdWVzdCIsImdldFNob3J0SWQiLCJnZXRDbGFpbURhdGEiLCJuZXdDaGFubmVsUmVxdWVzdCIsIndhdGNoTmV3Q2hhbm5lbFJlcXVlc3QiLCJ3YXRjaFVwZGF0ZUNoYW5uZWxDbGFpbXMiLCJnZXROZXdDbGFpbXNBbmRVcGRhdGVDaGFubmVsIiwiZXh0ZW5zaW9uU2VwZXJhdG9yIiwibG9nTGV2ZWwiLCJ3aW5zdG9uIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJsZXZlbCIsInRpbWVzdGFtcCIsImNvbG9yaXplIiwicHJldHR5UHJpbnQiLCJoYW5kbGVFeGNlcHRpb25zIiwiaHVtYW5SZWFkYWJsZVVuaGFuZGxlZEV4Y2VwdGlvbiIsIndhcm4iLCJzaWxseSIsImxvZ2dlckNvbmZpZyIsIndpbnN0b25TbGFja1dlYkhvb2siLCJTbGFja1dlYkhvb2siLCJhZGQiLCJ3ZWJob29rVXJsIiwiaWNvbkVtb2ppIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FB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TUFBSUYsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFFBQUlDLGlCQUFKLEVBQXVCO0FBQ3JCaW1CLGNBQVFjLEdBQVIsQ0FBWUYsbUJBQVosRUFBaUM7QUFDL0J0MUIsY0FBWSx3QkFEbUI7QUFFL0I2MEIsZUFBWSxNQUZtQjtBQUcvQlksb0JBQVlqbkIsWUFIbUI7QUFJL0JwTyxpQkFBWXFPLGlCQUptQjtBQUsvQnBOLGtCQUFZLFNBTG1CO0FBTS9CcTBCLG1CQUFZO0FBTm1CLE9BQWpDO0FBUUQ7QUFDRCxRQUFJaG5CLGdCQUFKLEVBQXNCO0FBQ3BCZ21CLGNBQVFjLEdBQVIsQ0FBWUYsbUJBQVosRUFBaUM7QUFDL0J0MUIsY0FBWSxzQkFEbUI7QUFFL0I2MEIsZUFBWSxNQUZtQjtBQUcvQlksb0JBQVlqbkIsWUFIbUI7QUFJL0JwTyxpQkFBWXNPLGdCQUptQjtBQUsvQnJOLGtCQUFZLFNBTG1CO0FBTS9CcTBCLG1CQUFZO0FBTm1CLE9BQWpDO0FBUUQ7QUFDRDtBQUNBaEIsWUFBUXB5QixLQUFSLENBQWMsa0NBQWQ7QUFDQW95QixZQUFRdHlCLElBQVIsQ0FBYSxpQ0FBYjtBQUNELEdBekJELE1BeUJPO0FBQ0xzeUIsWUFBUVMsSUFBUixDQUFhLDJFQUFiO0FBQ0Q7QUFDRixDQTlCRCxDOzs7Ozs7QUNIQSxrRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJleHBvcnRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4N2NhZWI5ODkyNzc1OGU5YzhjNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBTaXRlQ29uZmlnICgpIHtcbiAgdGhpcy5hbmFseXRpY3MgPSB7XG4gICAgZ29vZ2xlSWQ6ICdkZWZhdWx0JyxcbiAgfTtcbiAgdGhpcy5hc3NldERlZmF1bHRzID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gYXNzZXQgcHVibGlzaGVkIG9uIFNwZWUuY2gnLFxuICAgIHRodW1ibmFpbCAgOiAnaHR0cHM6Ly9zcGVlLmNoL2Fzc2V0cy9pbWcvdmlkZW9fdGh1bWJfZGVmYXVsdC5wbmcnLFxuICAgIHRpdGxlICAgICAgOiAnU3BlZS5jaCcsXG4gIH07XG4gIHRoaXMuYXV0aCA9IHtcbiAgICBzZXNzaW9uS2V5OiAnZGVmYXVsdCcsXG4gIH07XG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50cyA9IHtcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBjb250YWluZXJzOiB7fSxcbiAgICBwYWdlcyAgICAgOiB7fSxcbiAgfTtcbiAgdGhpcy5kZXRhaWxzID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnT3Blbi1zb3VyY2UsIGRlY2VudHJhbGl6ZWQgaW1hZ2UgYW5kIHZpZGVvIHNoYXJpbmcuJyxcbiAgICBob3N0ICAgICAgIDogJ2RlZmF1bHQnLFxuICAgIHBvcnQgICAgICAgOiAzMDAwLFxuICAgIHRpdGxlICAgICAgOiAnRGVmYXVsdCBUaXRsZScsXG4gICAgdHdpdHRlciAgICA6ICdAc3BlZV9jaCcsXG4gIH07XG4gIHRoaXMubG9jYWxQdWJsaWNGb2xkZXIgPSBudWxsO1xuICB0aGlzLnB1Ymxpc2hpbmcgPSB7XG4gICAgYWRkaXRpb25hbENsYWltQWRkcmVzc2VzOiBbXSxcbiAgICBkaXNhYmxlZCAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgIGRpc2FibGVkTWVzc2FnZSAgICAgICAgIDogJ1BsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICBwcmltYXJ5Q2xhaW1BZGRyZXNzICAgICA6ICdkZWZhdWx0JyxcbiAgICB0aHVtYm5haWxDaGFubmVsICAgICAgICA6ICdkZWZhdWx0JyxcbiAgICB0aHVtYm5haWxDaGFubmVsSWQgICAgICA6ICdkZWZhdWx0JyxcbiAgICB1cGxvYWREaXJlY3RvcnkgICAgICAgICA6ICcvaG9tZS9sYnJ5L1VwbG9hZHMnLFxuICB9O1xuICB0aGlzLmNvbmZpZ3VyZSA9IChjb25maWcpID0+IHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdObyBzaXRlIGNvbmZpZyByZWNlaXZlZC4nKTtcbiAgICB9XG4gICAgY29uc3QgeyBhbmFseXRpY3MsIGFzc2V0RGVmYXVsdHMsIGF1dGgsIGN1c3RvbUNvbXBvbmVudHMsIGRldGFpbHMsIGxvY2FsUHVibGljRm9sZGVyLCBwdWJsaXNoaW5nIH0gPSBjb25maWc7XG4gICAgdGhpcy5hbmFseXRpY3MgPSBhbmFseXRpY3M7XG4gICAgdGhpcy5hc3NldERlZmF1bHRzID0gYXNzZXREZWZhdWx0cztcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgdGhpcy5sb2NhbFB1YmxpY0ZvbGRlciA9IGxvY2FsUHVibGljRm9sZGVyO1xuICAgIHRoaXMucHVibGlzaGluZyA9IHB1Ymxpc2hpbmc7XG4gICAgdGhpcy5jdXN0b21Db21wb25lbnRzID0gY3VzdG9tQ29tcG9uZW50cztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNpdGVDb25maWcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9zaXRlQ29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ2NvbnN0YW50cy9wdWJsaXNoX2FjdGlvbl90eXBlcyc7XG5cbi8vIGV4cG9ydCBhY3Rpb24gY3JlYXRvcnNcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RGaWxlIChmaWxlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5GSUxFX1NFTEVDVEVELFxuICAgIGRhdGE6IGZpbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGaWxlICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkZJTEVfQ0xFQVIsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEgKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5NRVRBREFUQV9VUERBVEUsXG4gICAgZGF0YToge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2xhaW0gKHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DTEFJTV9VUERBVEUsXG4gICAgZGF0YTogdmFsdWUsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHVibGlzaEluQ2hhbm5lbCAoY2hhbm5lbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuU0VUX1BVQkxJU0hfSU5fQ0hBTk5FTCxcbiAgICBjaGFubmVsLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVB1Ymxpc2hTdGF0dXMgKHN0YXR1cywgbWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuUFVCTElTSF9TVEFUVVNfVVBEQVRFLFxuICAgIGRhdGE6IHtcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFcnJvciAobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkVSUk9SX1VQREFURSxcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZENoYW5uZWwgKGNoYW5uZWxOYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5TRUxFQ1RFRF9DSEFOTkVMX1VQREFURSxcbiAgICBkYXRhOiBjaGFubmVsTmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVNZXRhZGF0YUlucHV0cyAoc2hvd01ldGFkYXRhSW5wdXRzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5UT0dHTEVfTUVUQURBVEFfSU5QVVRTLFxuICAgIGRhdGE6IHNob3dNZXRhZGF0YUlucHV0cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5ld1RodW1ibmFpbCAoZmlsZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuVEhVTUJOQUlMX05FVyxcbiAgICBkYXRhOiBmaWxlLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UHVibGlzaCAoaGlzdG9yeSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuUFVCTElTSF9TVEFSVCxcbiAgICBkYXRhOiB7IGhpc3RvcnkgfSxcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL3B1Ymxpc2guanMiLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcblxuY29uc29sZS5sb2coJ2V4cG9ydGluZyBzZXF1ZWxpemUgbW9kZWxzJyk7XG5jb25zdCB7IGRhdGFiYXNlLCB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9teXNxbENvbmZpZycpO1xuY29uc3QgZGIgPSB7fTtcbi8vIHNldCBzZXF1ZWxpemUgb3B0aW9uc1xuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShkYXRhYmFzZSwgdXNlcm5hbWUsIHBhc3N3b3JkLCB7XG4gIGhvc3QgICAgICAgICAgOiAnbG9jYWxob3N0JyxcbiAgZGlhbGVjdCAgICAgICA6ICdteXNxbCcsXG4gIGRpYWxlY3RPcHRpb25zOiB7ZGVjaW1hbE51bWJlcnM6IHRydWV9LCAvLyBmaXggdG8gZW5zdXJlIERFQ0lNQUwgd2lsbCBub3QgYmUgc3RvcmVkIGFzIGEgc3RyaW5nXG4gIGxvZ2dpbmcgICAgICAgOiBmYWxzZSxcbiAgcG9vbCAgICAgICAgICA6IHtcbiAgICBtYXggICAgOiA1LFxuICAgIG1pbiAgICA6IDAsXG4gICAgaWRsZSAgIDogMTAwMDAsXG4gICAgYWNxdWlyZTogMTAwMDAsXG4gIH0sXG59KTtcblxuLy8gZXN0YWJsaXNoIG15c3FsIGNvbm5lY3Rpb25cbnNlcXVlbGl6ZVxuICAuYXV0aGVudGljYXRlKClcbiAgLnRoZW4oKCkgPT4ge1xuICAgIGxvZ2dlci5pbmZvKCdTZXF1ZWxpemUgaGFzIGVzdGFibGlzaGVkIG15c3FsIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5LicpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBsb2dnZXIuZXJyb3IoJ1NlcXVlbGl6ZSB3YXMgdW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOicsIGVycik7XG4gIH0pO1xuXG4vLyBtYW51YWxseSBhZGQgZWFjaCBtb2RlbCB0byB0aGUgZGIgb2JqZWN0XG5jb25zdCBDZXJ0aWZpY2F0ZSA9IHJlcXVpcmUoJy4vY2VydGlmaWNhdGUuanMnKTtcbmNvbnN0IENoYW5uZWwgPSByZXF1aXJlKCcuL2NoYW5uZWwuanMnKTtcbmNvbnN0IENsYWltID0gcmVxdWlyZSgnLi9jbGFpbS5qcycpO1xuY29uc3QgRmlsZSA9IHJlcXVpcmUoJy4vZmlsZS5qcycpO1xuY29uc3QgUmVxdWVzdCA9IHJlcXVpcmUoJy4vcmVxdWVzdC5qcycpO1xuY29uc3QgVXNlciA9IHJlcXVpcmUoJy4vdXNlci5qcycpO1xuZGJbJ0NlcnRpZmljYXRlJ10gPSBzZXF1ZWxpemUuaW1wb3J0KCdDZXJ0aWZpY2F0ZScsIENlcnRpZmljYXRlKTtcbmRiWydDaGFubmVsJ10gPSBzZXF1ZWxpemUuaW1wb3J0KCdDaGFubmVsJywgQ2hhbm5lbCk7XG5kYlsnQ2xhaW0nXSA9IHNlcXVlbGl6ZS5pbXBvcnQoJ0NsYWltJywgQ2xhaW0pO1xuZGJbJ0ZpbGUnXSA9IHNlcXVlbGl6ZS5pbXBvcnQoJ0ZpbGUnLCBGaWxlKTtcbmRiWydSZXF1ZXN0J10gPSBzZXF1ZWxpemUuaW1wb3J0KCdSZXF1ZXN0JywgUmVxdWVzdCk7XG5kYlsnVXNlciddID0gc2VxdWVsaXplLmltcG9ydCgnVXNlcicsIFVzZXIpO1xuXG4vLyBydW4gbW9kZWwuYXNzb2NpYXRpb24gZm9yIGVhY2ggbW9kZWwgaW4gdGhlIGRiIG9iamVjdCB0aGF0IGhhcyBhbiBhc3NvY2lhdGlvblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgbG9nZ2VyLmluZm8oJ0Fzc29jaWF0aW5nIG1vZGVsOicsIG1vZGVsTmFtZSk7XG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG4vLyBhZGQgYW4gJ3Vwc2VydCcgbWV0aG9kIHRvIHRoZSBkYiBvYmplY3RcbmRiLnVwc2VydCA9IChNb2RlbCwgdmFsdWVzLCBjb25kaXRpb24sIHRhYmxlTmFtZSkgPT4ge1xuICByZXR1cm4gTW9kZWxcbiAgICAuZmluZE9uZSh7XG4gICAgICB3aGVyZTogY29uZGl0aW9uLFxuICAgIH0pXG4gICAgLnRoZW4ob2JqID0+IHtcbiAgICAgIGlmIChvYmopIHsgIC8vIHVwZGF0ZVxuICAgICAgICBsb2dnZXIuZGVidWcoYHVwZGF0aW5nIHJlY29yZCBpbiBkYi4ke3RhYmxlTmFtZX1gKTtcbiAgICAgICAgcmV0dXJuIG9iai51cGRhdGUodmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7ICAvLyBpbnNlcnRcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBjcmVhdGluZyByZWNvcmQgaW4gZGIuJHt0YWJsZU5hbWV9YCk7XG4gICAgICAgIHJldHVybiBNb2RlbC5jcmVhdGUodmFsdWVzKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihgJHt0YWJsZU5hbWV9LnVwc2VydCBlcnJvcmAsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9tb2RlbHMvaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlTG9nZ2VkSW5DaGFubmVsIH0gZnJvbSAnYWN0aW9ucy9jaGFubmVsJztcbmltcG9ydCB7dXBkYXRlU2VsZWN0ZWRDaGFubmVsfSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2hhbm5lbCwgc2l0ZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2hhbm5lbE5hbWUgICA6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLm5hbWUsXG4gICAgY2hhbm5lbFNob3J0SWQ6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLnNob3J0SWQsXG4gICAgY2hhbm5lbExvbmdJZCA6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLmxvbmdJZCxcbiAgICBzaXRlRGVzY3JpcHRpb246IHNpdGUuZGVzY3JpcHRpb24sXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFubmVsTG9naW46IChuYW1lLCBzaG9ydElkLCBsb25nSWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbChuYW1lLCBzaG9ydElkLCBsb25nSWQpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlbGVjdGVkQ2hhbm5lbChuYW1lKSk7XG4gICAgfSxcbiAgICBvbkNoYW5uZWxMb2dvdXQ6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbChudWxsLCBudWxsLCBudWxsKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvTmF2QmFyL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdjb25zdGFudHMvc2hvd19hY3Rpb25fdHlwZXMnO1xuXG5pbXBvcnQgeyBDSEFOTkVMLCBBU1NFVF9MSVRFLCBBU1NFVF9ERVRBSUxTIH0gZnJvbSAnY29uc3RhbnRzL3Nob3dfcmVxdWVzdF90eXBlcyc7XG5cbi8vIGJhc2ljIHJlcXVlc3QgcGFyc2luZ1xuZXhwb3J0IGZ1bmN0aW9uIG9uSGFuZGxlU2hvd1BhZ2VVcmkgKHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuSEFORExFX1NIT1dfVVJJLFxuICAgIGRhdGE6IHBhcmFtcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlcXVlc3RFcnJvciAoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLlJFUVVFU1RfRVJST1IsXG4gICAgZGF0YTogZXJyb3IsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb25OZXdDaGFubmVsUmVxdWVzdCAoY2hhbm5lbE5hbWUsIGNoYW5uZWxJZCkge1xuICBjb25zdCByZXF1ZXN0VHlwZSA9IENIQU5ORUw7XG4gIGNvbnN0IHJlcXVlc3RJZCA9IGBjciMke2NoYW5uZWxOYW1lfSMke2NoYW5uZWxJZH1gO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ0hBTk5FTF9SRVFVRVNUX05FVyxcbiAgICBkYXRhOiB7IHJlcXVlc3RUeXBlLCByZXF1ZXN0SWQsIGNoYW5uZWxOYW1lLCBjaGFubmVsSWQgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5ld0Fzc2V0UmVxdWVzdCAobmFtZSwgaWQsIGNoYW5uZWxOYW1lLCBjaGFubmVsSWQsIGV4dGVuc2lvbikge1xuICBjb25zdCByZXF1ZXN0VHlwZSA9IGV4dGVuc2lvbiA/IEFTU0VUX0xJVEUgOiBBU1NFVF9ERVRBSUxTO1xuICBjb25zdCByZXF1ZXN0SWQgPSBgYXIjJHtuYW1lfSMke2lkfSMke2NoYW5uZWxOYW1lfSMke2NoYW5uZWxJZH1gO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQVNTRVRfUkVRVUVTVF9ORVcsXG4gICAgZGF0YToge1xuICAgICAgcmVxdWVzdFR5cGUsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgICBuYW1lLFxuICAgICAgbW9kaWZpZXI6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNoYW5uZWw6IHtcbiAgICAgICAgICBuYW1lOiBjaGFubmVsTmFtZSxcbiAgICAgICAgICBpZCAgOiBjaGFubmVsSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXF1ZXN0VXBkYXRlIChyZXF1ZXN0VHlwZSwgcmVxdWVzdElkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5SRVFVRVNUX1VQREFURSxcbiAgICBkYXRhOiB7XG4gICAgICByZXF1ZXN0VHlwZSxcbiAgICAgIHJlcXVlc3RJZCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlcXVlc3RUb1JlcXVlc3RMaXN0IChpZCwgZXJyb3IsIGtleSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuUkVRVUVTVF9MSVNUX0FERCxcbiAgICBkYXRhOiB7IGlkLCBlcnJvciwga2V5IH0sXG4gIH07XG59O1xuXG4vLyBhc3NldCBhY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBc3NldFRvQXNzZXRMaXN0IChpZCwgZXJyb3IsIG5hbWUsIGNsYWltSWQsIHNob3J0SWQsIGNsYWltRGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQVNTRVRfQURELFxuICAgIGRhdGE6IHsgaWQsIGVycm9yLCBuYW1lLCBjbGFpbUlkLCBzaG9ydElkLCBjbGFpbURhdGEgfSxcbiAgfTtcbn1cblxuLy8gY2hhbm5lbCBhY3Rpb25zXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdDaGFubmVsVG9DaGFubmVsTGlzdCAoaWQsIG5hbWUsIHNob3J0SWQsIGxvbmdJZCwgY2xhaW1zRGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ0hBTk5FTF9BREQsXG4gICAgZGF0YTogeyBpZCwgbmFtZSwgc2hvcnRJZCwgbG9uZ0lkLCBjbGFpbXNEYXRhIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb25VcGRhdGVDaGFubmVsQ2xhaW1zIChjaGFubmVsS2V5LCBuYW1lLCBsb25nSWQsIHBhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5ORUxfQ0xBSU1TX1VQREFURV9BU1lOQyxcbiAgICBkYXRhOiB7Y2hhbm5lbEtleSwgbmFtZSwgbG9uZ0lkLCBwYWdlfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGFubmVsQ2xhaW1zIChjaGFubmVsTGlzdElkLCBjbGFpbXNEYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOTkVMX0NMQUlNU19VUERBVEVfU1VDQ0VTUyxcbiAgICBkYXRhOiB7Y2hhbm5lbExpc3RJZCwgY2xhaW1zRGF0YX0sXG4gIH07XG59O1xuXG4vLyBkaXNwbGF5IGEgZmlsZVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZVJlcXVlc3RlZCAobmFtZSwgY2xhaW1JZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuRklMRV9SRVFVRVNURUQsXG4gICAgZGF0YTogeyBuYW1lLCBjbGFpbUlkIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRmlsZUF2YWlsYWJpbGl0eSAoc3RhdHVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5GSUxFX0FWQUlMQUJJTElUWV9VUERBVEUsXG4gICAgZGF0YTogc3RhdHVzLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlBc3NldEVycm9yIChlcnJvcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuRElTUExBWV9BU1NFVF9FUlJPUixcbiAgICBkYXRhOiBlcnJvcixcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9zaG93LmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNpdGUgfSkgPT4ge1xuICBjb25zdCB7IGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCwgZGVzY3JpcHRpb246IHNpdGVEZXNjcmlwdGlvbiwgaG9zdDogc2l0ZUhvc3QsIHRpdGxlOiBzaXRlVGl0bGUsIHR3aXR0ZXI6IHNpdGVUd2l0dGVyIH0gPSBzaXRlO1xuICByZXR1cm4ge1xuICAgIGRlZmF1bHREZXNjcmlwdGlvbixcbiAgICBkZWZhdWx0VGh1bWJuYWlsLFxuICAgIHNpdGVEZXNjcmlwdGlvbixcbiAgICBzaXRlSG9zdCxcbiAgICBzaXRlVGl0bGUsXG4gICAgc2l0ZVR3aXR0ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TRU8vaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJ2Nyb3NzLWZldGNoL3BvbHlmaWxsJztcblxuLyoqXG4gKiBQYXJzZXMgdGhlIEpTT04gcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICpcbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIHJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gcGFyc2VKU09OIChyZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG4vKipcbiAqIFBhcnNlcyB0aGUgc3RhdHVzIHJldHVybmVkIGJ5IGEgbmV0d29yayByZXF1ZXN0XG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIEEgcmVzcG9uc2UgZnJvbSBhIG5ldHdvcmsgcmVxdWVzdFxuICogQHBhcmFtICB7b2JqZWN0fSByZXNwb25zZSAgIFRoZSBwYXJzZWQgSlNPTiBmcm9tIHRoZSBuZXR3b3JrIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIHtvYmplY3QgfCB1bmRlZmluZWR9IFJldHVybnMgb2JqZWN0IHdpdGggc3RhdHVzIGFuZCBzdGF0dXNUZXh0LCBvciB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gY2hlY2tTdGF0dXMgKHJlc3BvbnNlLCBqc29uUmVzcG9uc2UpIHtcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxuICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihqc29uUmVzcG9uc2UubWVzc2FnZSk7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHRocm93IGVycm9yO1xufVxuXG4vKipcbiAqIFJlcXVlc3RzIGEgVVJMLCByZXR1cm5pbmcgYSBwcm9taXNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB1cmwgICAgICAgVGhlIFVSTCB3ZSB3YW50IHRvIHJlcXVlc3RcbiAqIEBwYXJhbSAge29iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIHdlIHdhbnQgdG8gcGFzcyB0byBcImZldGNoXCJcbiAqXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgICBUaGUgcmVzcG9uc2UgZGF0YVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3QgKHVybCwgb3B0aW9ucykge1xuICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcmVzcG9uc2UsIHBhcnNlSlNPTihyZXNwb25zZSldKTtcbiAgICB9KVxuICAgIC50aGVuKChbcmVzcG9uc2UsIGpzb25SZXNwb25zZV0pID0+IHtcbiAgICAgIHJldHVybiBjaGVja1N0YXR1cyhyZXNwb25zZSwganNvblJlc3BvbnNlKTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9yZXF1ZXN0LmpzIiwiLy8gcmVxdWVzdCBhY3Rpb25zXG5leHBvcnQgY29uc3QgSEFORExFX1NIT1dfVVJJID0gJ0hBTkRMRV9TSE9XX1VSSSc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9FUlJPUiA9ICdSRVFVRVNUX0VSUk9SJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VQREFURSA9ICdSRVFVRVNUX1VQREFURSc7XG5leHBvcnQgY29uc3QgQVNTRVRfUkVRVUVTVF9ORVcgPSAnQVNTRVRfUkVRVUVTVF9ORVcnO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfUkVRVUVTVF9ORVcgPSAnQ0hBTk5FTF9SRVFVRVNUX05FVyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9MSVNUX0FERCA9ICdSRVFVRVNUX0xJU1RfQUREJztcblxuLy8gYXNzZXQgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IEFTU0VUX0FERCA9IGBBU1NFVF9BRERgO1xuXG4vLyBjaGFubmVsIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0FERCA9ICdDSEFOTkVMX0FERCc7XG5cbmV4cG9ydCBjb25zdCBDSEFOTkVMX0NMQUlNU19VUERBVEVfQVNZTkMgPSAnQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX0FTWU5DJztcbmV4cG9ydCBjb25zdCBDSEFOTkVMX0NMQUlNU19VUERBVEVfU1VDQ0VTUyA9ICdDSEFOTkVMX0NMQUlNU19VUERBVEVfU1VDQ0VTUyc7XG5cbi8vIGFzc2V0L2ZpbGUgZGlzcGxheSBhY3Rpb25zXG5leHBvcnQgY29uc3QgRklMRV9SRVFVRVNURUQgPSAnRklMRV9SRVFVRVNURUQnO1xuZXhwb3J0IGNvbnN0IEZJTEVfQVZBSUxBQklMSVRZX1VQREFURSA9ICdGSUxFX0FWQUlMQUJJTElUWV9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IERJU1BMQVlfQVNTRVRfRVJST1IgPSAnRElTUExBWV9BU1NFVF9FUlJPUic7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29uc3RhbnRzL3Nob3dfYWN0aW9uX3R5cGVzLmpzIiwiZXhwb3J0IGNvbnN0IHNlbGVjdEFzc2V0ID0gKHNob3cpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IHNob3cucmVxdWVzdExpc3Rbc2hvdy5yZXF1ZXN0LmlkXTtcbiAgY29uc3QgYXNzZXRLZXkgPSByZXF1ZXN0LmtleTtcbiAgcmV0dXJuIHNob3cuYXNzZXRMaXN0W2Fzc2V0S2V5XTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RTaG93U3RhdGUgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHN0YXRlLnNob3c7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlbGVjdG9ycy9zaG93LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCB7IGFwaTogeyBhcGlIb3N0LCBhcGlQb3J0IH0gfSA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9sYnJ5Q29uZmlnLmpzJyk7XG5jb25zdCBsYnJ5QXBpVXJpID0gJ2h0dHA6Ly8nICsgYXBpSG9zdCArICc6JyArIGFwaVBvcnQ7XG5jb25zdCB7IGNob29zZUdhTGJyeW5ldFB1Ymxpc2hMYWJlbCwgc2VuZEdBVGltaW5nRXZlbnQgfSA9IHJlcXVpcmUoJy4vZ29vZ2xlQW5hbHl0aWNzLmpzJyk7XG5cbmNvbnN0IGhhbmRsZUxicnluZXRSZXNwb25zZSA9ICh7IGRhdGEgfSwgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGxvZ2dlci5kZWJ1ZygnbGJyeSBhcGkgZGF0YTonLCBkYXRhKTtcbiAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgLy8gY2hlY2sgZm9yIGFuIGVycm9yXG4gICAgaWYgKGRhdGEucmVzdWx0LmVycm9yKSB7XG4gICAgICBsb2dnZXIuZGVidWcoJ0xicnluZXQgYXBpIGVycm9yOicsIGRhdGEucmVzdWx0LmVycm9yKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoZGF0YS5yZXN1bHQuZXJyb3IpKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHJlc29sdmUoZGF0YS5yZXN1bHQpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBmYWxsYmFjayBpbiBjYXNlIGl0IGp1c3QgdGltZWQgb3V0XG4gIHJlamVjdChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHVibGlzaENsYWltIChwdWJsaXNoUGFyYW1zKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBsYnJ5QXBpID4+IFB1Ymxpc2hpbmcgY2xhaW0gdG8gXCIke3B1Ymxpc2hQYXJhbXMubmFtZX1cImApO1xuICAgIGNvbnN0IGdhU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QobGJyeUFwaVVyaSwge1xuICAgICAgICAgIG1ldGhvZDogJ3B1Ymxpc2gnLFxuICAgICAgICAgIHBhcmFtczogcHVibGlzaFBhcmFtcyxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHNlbmRHQVRpbWluZ0V2ZW50KCdsYnJ5bmV0JywgJ3B1Ymxpc2gnLCBjaG9vc2VHYUxicnluZXRQdWJsaXNoTGFiZWwocHVibGlzaFBhcmFtcyksIGdhU3RhcnRUaW1lLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICBoYW5kbGVMYnJ5bmV0UmVzcG9uc2UocmVzcG9uc2UsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldENsYWltICh1cmkpIHtcbiAgICBsb2dnZXIuZGVidWcoYGxicnlBcGkgPj4gR2V0dGluZyBDbGFpbSBmb3IgXCIke3VyaX1cImApO1xuICAgIGNvbnN0IGdhU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QobGJyeUFwaVVyaSwge1xuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgcGFyYW1zOiB7IHVyaSwgdGltZW91dDogMjAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHNlbmRHQVRpbWluZ0V2ZW50KCdsYnJ5bmV0JywgJ2dldENsYWltJywgJ0dFVCcsIGdhU3RhcnRUaW1lLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICBoYW5kbGVMYnJ5bmV0UmVzcG9uc2UocmVzcG9uc2UsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldENsYWltTGlzdCAoY2xhaW1OYW1lKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBsYnJ5QXBpID4+IEdldHRpbmcgY2xhaW1fbGlzdCBmb3IgXCIke2NsYWltTmFtZX1cImApO1xuICAgIGNvbnN0IGdhU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QobGJyeUFwaVVyaSwge1xuICAgICAgICAgIG1ldGhvZDogJ2NsYWltX2xpc3QnLFxuICAgICAgICAgIHBhcmFtczogeyBuYW1lOiBjbGFpbU5hbWUgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHNlbmRHQVRpbWluZ0V2ZW50KCdsYnJ5bmV0JywgJ2dldENsYWltTGlzdCcsICdDTEFJTV9MSVNUJywgZ2FTdGFydFRpbWUsIERhdGUubm93KCkpO1xuICAgICAgICAgIGhhbmRsZUxicnluZXRSZXNwb25zZShyZXNwb25zZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVzb2x2ZVVyaSAodXJpKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBsYnJ5QXBpID4+IFJlc29sdmluZyBVUkkgZm9yIFwiJHt1cml9XCJgKTtcbiAgICBjb25zdCBnYVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KGxicnlBcGlVcmksIHtcbiAgICAgICAgICBtZXRob2Q6ICdyZXNvbHZlJyxcbiAgICAgICAgICBwYXJhbXM6IHsgdXJpIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIHNlbmRHQVRpbWluZ0V2ZW50KCdsYnJ5bmV0JywgJ3Jlc29sdmVVcmknLCAnUkVTT0xWRScsIGdhU3RhcnRUaW1lLCBEYXRlLm5vdygpKTtcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHRbdXJpXS5lcnJvcikgeyAgLy8gY2hlY2sgZm9yIGVycm9yc1xuICAgICAgICAgICAgcmVqZWN0KGRhdGEucmVzdWx0W3VyaV0uZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7ICAvLyBpZiBubyBlcnJvcnMsIHJlc29sdmVcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXN1bHRbdXJpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXREb3dubG9hZERpcmVjdG9yeSAoKSB7XG4gICAgbG9nZ2VyLmRlYnVnKCdsYnJ5QXBpID4+IFJldHJpZXZpbmcgdGhlIGRvd25sb2FkIGRpcmVjdG9yeSBwYXRoIGZyb20gbGJyeSBkYWVtb24uLi4nKTtcbiAgICBjb25zdCBnYVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KGxicnlBcGlVcmksIHtcbiAgICAgICAgICBtZXRob2Q6ICdzZXR0aW5nc19nZXQnLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICBzZW5kR0FUaW1pbmdFdmVudCgnbGJyeW5ldCcsICdnZXREb3dubG9hZERpcmVjdG9yeScsICdTRVRUSU5HU19HRVQnLCBnYVN0YXJ0VGltZSwgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEucmVzdWx0LmRvd25sb2FkX2RpcmVjdG9yeSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1N1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gbGJyeSBkYWVtb24sIGJ1dCB1bmFibGUgdG8gcmV0cmlldmUgdGhlIGRvd25sb2FkIGRpcmVjdG9yeS4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdMYnJ5bmV0IEVycm9yOicsIGVycm9yKTtcbiAgICAgICAgICByZXNvbHZlKCcvaG9tZS9sYnJ5L0Rvd25sb2Fkcy8nKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZUNoYW5uZWwgKG5hbWUpIHtcbiAgICBsb2dnZXIuZGVidWcoYGxicnlBcGkgPj4gQ3JlYXRpbmcgY2hhbm5lbCBmb3IgJHtuYW1lfS4uLmApO1xuICAgIGNvbnN0IGdhU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QobGJyeUFwaVVyaSwge1xuICAgICAgICAgIG1ldGhvZDogJ2NoYW5uZWxfbmV3JyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGNoYW5uZWxfbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGFtb3VudCAgICAgIDogMC4xLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBzZW5kR0FUaW1pbmdFdmVudCgnbGJyeW5ldCcsICdjcmVhdGVDaGFubmVsJywgJ0NIQU5ORUxfTkVXJywgZ2FTdGFydFRpbWUsIERhdGUubm93KCkpO1xuICAgICAgICAgIGhhbmRsZUxicnluZXRSZXNwb25zZShyZXNwb25zZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9sYnJ5QXBpLmpzIiwiY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnd2luc3RvbicpO1xuY29uc3QgdWEgPSByZXF1aXJlKCd1bml2ZXJzYWwtYW5hbHl0aWNzJyk7XG5jb25zdCB7IGFuYWx5dGljcyA6IHsgZ29vZ2xlSWQgfSwgZGV0YWlsczogeyB0aXRsZSB9IH0gPSByZXF1aXJlKCcuLi8uLi9jb25maWcvc2l0ZUNvbmZpZy5qcycpO1xuXG5mdW5jdGlvbiBjcmVhdGVTZXJ2ZUV2ZW50UGFyYW1zIChoZWFkZXJzLCBpcCwgb3JpZ2luYWxVcmwpIHtcbiAgcmV0dXJuIHtcbiAgICBldmVudENhdGVnb3J5ICAgIDogJ2NsaWVudCByZXF1ZXN0cycsXG4gICAgZXZlbnRBY3Rpb24gICAgICA6ICdzZXJ2ZSByZXF1ZXN0JyxcbiAgICBldmVudExhYmVsICAgICAgIDogb3JpZ2luYWxVcmwsXG4gICAgaXBPdmVycmlkZSAgICAgICA6IGlwLFxuICAgIHVzZXJBZ2VudE92ZXJyaWRlOiBoZWFkZXJzWyd1c2VyLWFnZW50J10sXG4gIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQdWJsaXNoVGltaW5nRXZlbnRQYXJhbXMgKGNhdGVnb3J5LCB2YXJpYWJsZSwgbGFiZWwsIHN0YXJ0VGltZSwgZW5kVGltZSkge1xuICBjb25zdCBkdXJhdGlvbiA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gIHJldHVybiB7XG4gICAgdXNlclRpbWluZ0NhdGVnb3J5ICAgIDogY2F0ZWdvcnksXG4gICAgdXNlclRpbWluZ1ZhcmlhYmxlTmFtZTogdmFyaWFibGUsXG4gICAgdXNlclRpbWluZ1RpbWUgICAgICAgIDogZHVyYXRpb24sXG4gICAgdXNlclRpbWluZ0xhYmVsICAgICAgIDogbGFiZWwsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBzZW5kR29vZ2xlQW5hbHl0aWNzRXZlbnQgKGlwLCBwYXJhbXMpIHtcbiAgY29uc3QgdmlzaXRvcklkID0gaXAucmVwbGFjZSgvXFwuL2csICctJyk7XG4gIGNvbnN0IHZpc2l0b3IgPSB1YShnb29nbGVJZCwgdmlzaXRvcklkLCB7IHN0cmljdENpZEZvcm1hdDogZmFsc2UsIGh0dHBzOiB0cnVlIH0pO1xuICB2aXNpdG9yLmV2ZW50KHBhcmFtcywgKGVycikgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGxvZ2dlci5lcnJvcignR29vZ2xlIEFuYWx5dGljcyBFdmVudCBFcnJvciA+PicsIGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHNlbmRHb29nbGVBbmFseXRpY3NUaW1pbmcgKHZpc2l0b3JJZCwgcGFyYW1zKSB7XG4gIGNvbnN0IHZpc2l0b3IgPSB1YShnb29nbGVJZCwgdmlzaXRvcklkLCB7IHN0cmljdENpZEZvcm1hdDogZmFsc2UsIGh0dHBzOiB0cnVlIH0pO1xuICB2aXNpdG9yLnRpbWluZyhwYXJhbXMsIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ0dvb2dsZSBBbmFseXRpY3MgRXZlbnQgRXJyb3IgPj4nLCBlcnIpO1xuICAgIH1cbiAgICBsb2dnZXIuZGVidWcoYFRpbWluZyBldmVudCBzdWNjZXNzZnVsbHkgc2VudCB0byBnb29nbGUgYW5hbHl0aWNzYCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNlbmRHQVNlcnZlRXZlbnQgKGhlYWRlcnMsIGlwLCBvcmlnaW5hbFVybCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGNyZWF0ZVNlcnZlRXZlbnRQYXJhbXMoaGVhZGVycywgaXAsIG9yaWdpbmFsVXJsKTtcbiAgICBzZW5kR29vZ2xlQW5hbHl0aWNzRXZlbnQoaXAsIHBhcmFtcyk7XG4gIH0sXG4gIHNlbmRHQVRpbWluZ0V2ZW50IChjYXRlZ29yeSwgdmFyaWFibGUsIGxhYmVsLCBzdGFydFRpbWUsIGVuZFRpbWUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBjcmVhdGVQdWJsaXNoVGltaW5nRXZlbnRQYXJhbXMoY2F0ZWdvcnksIHZhcmlhYmxlLCBsYWJlbCwgc3RhcnRUaW1lLCBlbmRUaW1lKTtcbiAgICBzZW5kR29vZ2xlQW5hbHl0aWNzVGltaW5nKHRpdGxlLCBwYXJhbXMpO1xuICB9LFxuICBjaG9vc2VHYUxicnluZXRQdWJsaXNoTGFiZWwgKHsgY2hhbm5lbF9uYW1lOiBjaGFubmVsTmFtZSwgY2hhbm5lbF9pZDogY2hhbm5lbElkIH0pIHtcbiAgICByZXR1cm4gKGNoYW5uZWxOYW1lIHx8IGNoYW5uZWxJZCA/ICdQVUJMSVNIX0lOX0NIQU5ORUxfQ0xBSU0nIDogJ1BVQkxJU0hfQU5PTllNT1VTX0NMQUlNJyk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvZ29vZ2xlQW5hbHl0aWNzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcyc7XG5cbi8vIGV4cG9ydCBhY3Rpb24gY3JlYXRvcnNcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbCAobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOTkVMX1VQREFURSxcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRJZCxcbiAgICAgIGxvbmdJZCxcbiAgICB9LFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL2NoYW5uZWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBY3RpdmVTdGF0dXNCYXIgZnJvbSAnY29tcG9uZW50cy9BY3RpdmVTdGF0dXNCYXInO1xuaW1wb3J0IEluYWN0aXZlU3RhdHVzQmFyIGZyb20gJ2NvbXBvbmVudHMvSW5hY3RpdmVTdGF0dXNCYXInO1xuXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmFycyAgICAgICA6IFtdLFxuICAgICAgaW5kZXggICAgICA6IDAsXG4gICAgICBpbmNyZW1lbnRlcjogMSxcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlQmFycyA9IHRoaXMuY3JlYXRlQmFycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnRQcm9ncmVzc0JhciA9IHRoaXMuc3RhcnRQcm9ncmVzc0Jhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIgPSB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wUHJvZ3Jlc3NCYXIgPSB0aGlzLnN0b3BQcm9ncmVzc0Jhci5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmNyZWF0ZUJhcnMoKTtcbiAgICB0aGlzLnN0YXJ0UHJvZ3Jlc3NCYXIoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5zdG9wUHJvZ3Jlc3NCYXIoKTtcbiAgfVxuICBjcmVhdGVCYXJzICgpIHtcbiAgICBjb25zdCBiYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5wcm9wcy5zaXplOyBpKyspIHtcbiAgICAgIGJhcnMucHVzaCh7aXNBY3RpdmU6IGZhbHNlfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYXJzIH0pO1xuICB9XG4gIHN0YXJ0UHJvZ3Jlc3NCYXIgKCkge1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVByb2dyZXNzQmFyLmJpbmQodGhpcyksIDMwMCk7XG4gIH07XG4gIHVwZGF0ZVByb2dyZXNzQmFyICgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmluZGV4O1xuICAgIGxldCBpbmNyZW1lbnRlciA9IHRoaXMuc3RhdGUuaW5jcmVtZW50ZXI7XG4gICAgbGV0IGJhcnMgPSB0aGlzLnN0YXRlLmJhcnM7XG4gICAgLy8gZmxpcCBpbmNyZW1lbnRlciBpZiBuZWNlc3NhcnksIHRvIHN0YXkgaW4gYm91bmRzXG4gICAgaWYgKChpbmRleCA8IDApIHx8IChpbmRleCA+IHRoaXMucHJvcHMuc2l6ZSkpIHtcbiAgICAgIGluY3JlbWVudGVyID0gaW5jcmVtZW50ZXIgKiAtMTtcbiAgICAgIGluZGV4ICs9IGluY3JlbWVudGVyO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgdGhlIGluZGV4ZWQgYmFyXG4gICAgaWYgKGluY3JlbWVudGVyID4gMCkge1xuICAgICAgYmFyc1tpbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXJzW2luZGV4XS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgLy8gaW5jcmVtZW50IGluZGV4XG4gICAgaW5kZXggKz0gaW5jcmVtZW50ZXI7XG4gICAgLy8gdXBkYXRlIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBiYXJzLFxuICAgICAgaW5jcmVtZW50ZXIsXG4gICAgICBpbmRleCxcbiAgICB9KTtcbiAgfTtcbiAgc3RvcFByb2dyZXNzQmFyICgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9O1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5iYXJzLm1hcCgoYmFyLCBpbmRleCkgPT4gYmFyLmlzQWN0aXZlID8gPEFjdGl2ZVN0YXR1c0JhciBrZXk9e2luZGV4fSAvPiA6IDxJbmFjdGl2ZVN0YXR1c0JhciBrZXk9e2luZGV4fS8+KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnY29udGFpbmVycy9OYXZCYXInO1xuXG5jbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgPHA+e2Vycm9yfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5FcnJvclBhZ2UucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BhZ2VzL0Vycm9yUGFnZS9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0XCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIE15c3FsQ29uZmlnICgpIHtcbiAgdGhpcy5kYXRhYmFzZSA9ICdkZWZhdWx0JztcbiAgdGhpcy51c2VybmFtZSA9ICdkZWZhdWx0JztcbiAgdGhpcy5wYXNzd29yZCA9ICdkZWZhdWx0JztcbiAgdGhpcy5jb25maWd1cmUgPSAoY29uZmlnKSA9PiB7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnTm8gTXlTUUwgY29uZmlnIHJlY2VpdmVkLicpO1xuICAgIH1cbiAgICBjb25zdCB7ZGF0YWJhc2UsIHVzZXJuYW1lLCBwYXNzd29yZH0gPSBjb25maWc7XG4gICAgdGhpcy5kYXRhYmFzZSA9IGRhdGFiYXNlO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBNeXNxbENvbmZpZygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL215c3FsQ29uZmlnLmpzIiwiZnVuY3Rpb24gU2xhY2tDb25maWcgKCkge1xuICB0aGlzLnNsYWNrV2ViSG9vayAgICAgID0gJ2RlZmF1bHQnO1xuICB0aGlzLnNsYWNrRXJyb3JDaGFubmVsID0gJ2RlZmF1bHQnO1xuICB0aGlzLnNsYWNrSW5mb0NoYW5uZWwgID0gJ2RlZmF1bHQnO1xuICB0aGlzLmNvbmZpZ3VyZSA9IChjb25maWcpID0+IHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdObyBzbGFjayBjb25maWcgcmVjZWl2ZWQuJyk7XG4gICAgfVxuICAgIGNvbnN0IHtzbGFja1dlYkhvb2ssIHNsYWNrRXJyb3JDaGFubmVsLCBzbGFja0luZm9DaGFubmVsfSA9IGNvbmZpZztcbiAgICB0aGlzLnNsYWNrV2ViSG9vayA9IHNsYWNrV2ViSG9vaztcbiAgICB0aGlzLnNsYWNrRXJyb3JDaGFubmVsID0gc2xhY2tFcnJvckNoYW5uZWw7XG4gICAgdGhpcy5zbGFja0luZm9DaGFubmVsID0gc2xhY2tJbmZvQ2hhbm5lbDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNsYWNrQ29uZmlnKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvc2xhY2tDb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0LWxvY2FsXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcXVlbGl6ZVwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmV0dXJuU2hvcnRJZDogZnVuY3Rpb24gKGNsYWltc0FycmF5LCBsb25nSWQpIHtcbiAgICBsZXQgY2xhaW1JbmRleDtcbiAgICBsZXQgc2hvcnRJZCA9IGxvbmdJZC5zdWJzdHJpbmcoMCwgMSk7IC8vIGRlZmF1bHQgc2hvcnQgaWQgaXMgdGhlIGZpcnN0IGxldHRlclxuICAgIGxldCBzaG9ydElkTGVuZ3RoID0gMDtcbiAgICAvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGlzIGNsYWltIGlkXG4gICAgY2xhaW1JbmRleCA9IGNsYWltc0FycmF5LmZpbmRJbmRleChlbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYWltSWQgPT09IGxvbmdJZDtcbiAgICB9KTtcbiAgICBpZiAoY2xhaW1JbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xhaW0gaWQgbm90IGZvdW5kIGluIGNsYWltcyBsaXN0Jyk7XG4gICAgfVxuICAgIC8vIGdldCBhbiBhcnJheSBvZiBhbGwgY2xhaW1zIHdpdGggbG93ZXIgaGVpZ2h0XG4gICAgbGV0IHBvc3NpYmxlTWF0Y2hlcyA9IGNsYWltc0FycmF5LnNsaWNlKDAsIGNsYWltSW5kZXgpO1xuICAgIC8vIHJlbW92ZSBjZXJ0aWZpY2F0ZXMgd2l0aCB0aGUgc2FtZSBwcmVmaXhlcyB1bnRpbCBub25lIGFyZSBsZWZ0LlxuICAgIHdoaWxlIChwb3NzaWJsZU1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgc2hvcnRJZExlbmd0aCArPSAxO1xuICAgICAgc2hvcnRJZCA9IGxvbmdJZC5zdWJzdHJpbmcoMCwgc2hvcnRJZExlbmd0aCk7XG4gICAgICBwb3NzaWJsZU1hdGNoZXMgPSBwb3NzaWJsZU1hdGNoZXMuZmlsdGVyKGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gKGVsZW1lbnQuY2xhaW1JZCAmJiAoZWxlbWVudC5jbGFpbUlkLnN1YnN0cmluZygwLCBzaG9ydElkTGVuZ3RoKSA9PT0gc2hvcnRJZCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzaG9ydElkO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL3NlcXVlbGl6ZUhlbHBlcnMuanMiLCJjb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmNvbnN0IHsgZGV0YWlscywgcHVibGlzaGluZyB9ID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3NpdGVDb25maWcuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhcnNlUHVibGlzaEFwaVJlcXVlc3RCb2R5ICh7bmFtZSwgbnNmdywgbGljZW5zZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aHVtYm5haWx9KSB7XG4gICAgLy8gdmFsaWRhdGUgbmFtZVxuICAgIGlmICghbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBuYW1lIGZpZWxkIGZvdW5kIGluIHJlcXVlc3QnKTtcbiAgICB9XG4gICAgY29uc3QgaW52YWxpZE5hbWVDaGFyYWN0ZXJzID0gL1teQS1aYS16MC05LC1dLy5leGVjKG5hbWUpO1xuICAgIGlmIChpbnZhbGlkTmFtZUNoYXJhY3RlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNsYWltIG5hbWUgeW91IHByb3ZpZGVkIGlzIG5vdCBhbGxvd2VkLiAgT25seSB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQ6IEEtWiwgYS16LCAwLTksIGFuZCBcIi1cIicpO1xuICAgIH1cbiAgICAvLyBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgbnNmdyA9IChuc2Z3ID09PSAndHJ1ZScpO1xuICAgIGxpY2Vuc2UgPSBsaWNlbnNlIHx8IG51bGw7XG4gICAgdGl0bGUgPSB0aXRsZSB8fCBudWxsO1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgbnVsbDtcbiAgICB0aHVtYm5haWwgPSB0aHVtYm5haWwgfHwgbnVsbDtcbiAgICAvLyByZXR1cm4gcmVzdWx0c1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgbnNmdyxcbiAgICAgIGxpY2Vuc2UsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGh1bWJuYWlsLFxuICAgIH07XG4gIH0sXG4gIHBhcnNlUHVibGlzaEFwaVJlcXVlc3RGaWxlcyAoe2ZpbGUsIHRodW1ibmFpbH0pIHtcbiAgICAvLyBtYWtlIHN1cmUgYSBmaWxlIHdhcyBwcm92aWRlZFxuICAgIGlmICghZmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBmaWxlIHdpdGgga2V5IG9mIFtmaWxlXSBmb3VuZCBpbiByZXF1ZXN0Jyk7XG4gICAgfVxuICAgIGlmICghZmlsZS5wYXRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGZpbGUgcGF0aCBmb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoIWZpbGUudHlwZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBmaWxlIHR5cGUgZm91bmQnKTtcbiAgICB9XG4gICAgaWYgKCFmaWxlLnNpemUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZmlsZSB0eXBlIGZvdW5kJyk7XG4gICAgfVxuICAgIC8vIHZhbGlkYXRlIHRoZSBmaWxlIG5hbWVcbiAgICBpZiAoLycvLnRlc3QoZmlsZS5uYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcG9zdHJvcGhlcyBhcmUgbm90IGFsbG93ZWQgaW4gdGhlIGZpbGUgbmFtZScpO1xuICAgIH1cbiAgICAvLyB2YWxpZGF0ZSB0aGUgZmlsZVxuICAgIG1vZHVsZS5leHBvcnRzLnZhbGlkYXRlRmlsZVR5cGVBbmRTaXplKGZpbGUpO1xuICAgIC8vIHJldHVybiByZXN1bHRzXG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVOYW1lICAgICAgICAgOiBmaWxlLm5hbWUsXG4gICAgICBmaWxlUGF0aCAgICAgICAgIDogZmlsZS5wYXRoLFxuICAgICAgZmlsZVR5cGUgICAgICAgICA6IGZpbGUudHlwZSxcbiAgICAgIHRodW1ibmFpbEZpbGVOYW1lOiAodGh1bWJuYWlsID8gdGh1bWJuYWlsLm5hbWUgOiBudWxsKSxcbiAgICAgIHRodW1ibmFpbEZpbGVQYXRoOiAodGh1bWJuYWlsID8gdGh1bWJuYWlsLnBhdGggOiBudWxsKSxcbiAgICAgIHRodW1ibmFpbEZpbGVUeXBlOiAodGh1bWJuYWlsID8gdGh1bWJuYWlsLnR5cGUgOiBudWxsKSxcbiAgICB9O1xuICB9LFxuICB2YWxpZGF0ZUZpbGVUeXBlQW5kU2l6ZSAoZmlsZSkge1xuICAgIC8vIGNoZWNrIGZpbGUgdHlwZSBhbmQgc2l6ZVxuICAgIHN3aXRjaCAoZmlsZS50eXBlKSB7XG4gICAgICBjYXNlICdpbWFnZS9qcGVnJzpcbiAgICAgIGNhc2UgJ2ltYWdlL2pwZyc6XG4gICAgICBjYXNlICdpbWFnZS9wbmcnOlxuICAgICAgICBpZiAoZmlsZS5zaXplID4gMTAwMDAwMDApIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoJ3B1Ymxpc2ggPiBmaWxlIHZhbGlkYXRpb24gPiAuanBlZy8uanBnLy5wbmcgd2FzIHRvbyBiaWcnKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5LCBpbWFnZXMgYXJlIGxpbWl0ZWQgdG8gMTAgbWVnYWJ5dGVzLicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1hZ2UvZ2lmJzpcbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IDUwMDAwMDAwKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKCdwdWJsaXNoID4gZmlsZSB2YWxpZGF0aW9uID4gLmdpZiB3YXMgdG9vIGJpZycpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnksIC5naWZzIGFyZSBsaW1pdGVkIHRvIDUwIG1lZ2FieXRlcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiA1MDAwMDAwMCkge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZygncHVibGlzaCA+IGZpbGUgdmFsaWRhdGlvbiA+IC5tcDQgd2FzIHRvbyBiaWcnKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5LCB2aWRlb3MgYXJlIGxpbWl0ZWQgdG8gNTAgbWVnYWJ5dGVzLicpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdwdWJsaXNoID4gZmlsZSB2YWxpZGF0aW9uID4gdW5yZWNvZ25pemVkIGZpbGUgdHlwZScpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSAnICsgZmlsZS50eXBlICsgJyBjb250ZW50IHR5cGUgaXMgbm90IHN1cHBvcnRlZC4gIE9ubHksIC5qcGVnLCAucG5nLCAuZ2lmLCBhbmQgLm1wNCBmaWxlcyBhcmUgY3VycmVudGx5IHN1cHBvcnRlZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGU7XG4gIH0sXG4gIGNyZWF0ZUJhc2ljUHVibGlzaFBhcmFtcyAoZmlsZVBhdGgsIG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGljZW5zZSwgbnNmdywgdGh1bWJuYWlsKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBQdWJsaXNoIFBhcmFtZXRlcnNgKTtcbiAgICAvLyBwcm92aWRlIGRlZmF1bHRzIGZvciB0aXRsZVxuICAgIGlmICh0aXRsZSA9PT0gbnVsbCB8fCB0aXRsZS50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aXRsZSA9IG5hbWU7XG4gICAgfVxuICAgIC8vIHByb3ZpZGUgZGVmYXVsdCBmb3IgZGVzY3JpcHRpb25cbiAgICBpZiAoZGVzY3JpcHRpb24gPT09IG51bGwgfHwgZGVzY3JpcHRpb24udHJpbSgpID09PSAnJykge1xuICAgICAgZGVzY3JpcHRpb24gPSAnJztcbiAgICB9XG4gICAgLy8gcHJvdmlkZSBkZWZhdWx0IGZvciBsaWNlbnNlXG4gICAgaWYgKGxpY2Vuc2UgPT09IG51bGwgfHwgbGljZW5zZS50cmltKCkgPT09ICcnKSB7XG4gICAgICBsaWNlbnNlID0gJyAnOyAgLy8gZGVmYXVsdCB0byBlbXB0eSBzdHJpbmdcbiAgICB9XG4gICAgLy8gY3JlYXRlIHRoZSBwdWJsaXNoIHBhcmFtc1xuICAgIGNvbnN0IHB1Ymxpc2hQYXJhbXMgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZmlsZV9wYXRoOiBmaWxlUGF0aCxcbiAgICAgIGJpZCAgICAgIDogMC4wMSxcbiAgICAgIG1ldGFkYXRhIDoge1xuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGF1dGhvciAgOiBkZXRhaWxzLnRpdGxlLFxuICAgICAgICBsYW5ndWFnZTogJ2VuJyxcbiAgICAgICAgbGljZW5zZSxcbiAgICAgICAgbnNmdyxcbiAgICAgIH0sXG4gICAgICBjbGFpbV9hZGRyZXNzOiBwdWJsaXNoaW5nLnByaW1hcnlDbGFpbUFkZHJlc3MsXG4gICAgfTtcbiAgICAvLyBhZGQgdGh1bWJuYWlsIHRvIGNoYW5uZWwgaWYgdmlkZW9cbiAgICBpZiAodGh1bWJuYWlsKSB7XG4gICAgICBwdWJsaXNoUGFyYW1zWydtZXRhZGF0YSddWyd0aHVtYm5haWwnXSA9IHRodW1ibmFpbDtcbiAgICB9XG4gICAgcmV0dXJuIHB1Ymxpc2hQYXJhbXM7XG4gIH0sXG4gIGNyZWF0ZVRodW1ibmFpbFB1Ymxpc2hQYXJhbXMgKHRodW1ibmFpbEZpbGVQYXRoLCBjbGFpbU5hbWUsIGxpY2Vuc2UsIG5zZncpIHtcbiAgICBpZiAoIXRodW1ibmFpbEZpbGVQYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgVGh1bWJuYWlsIFB1Ymxpc2ggUGFyYW1ldGVyc2ApO1xuICAgIC8vIGNyZWF0ZSB0aGUgcHVibGlzaCBwYXJhbXNcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSAgICAgOiBgJHtjbGFpbU5hbWV9LXRodW1iYCxcbiAgICAgIGZpbGVfcGF0aDogdGh1bWJuYWlsRmlsZVBhdGgsXG4gICAgICBiaWQgICAgICA6IDAuMDEsXG4gICAgICBtZXRhZGF0YSA6IHtcbiAgICAgICAgdGl0bGUgICAgICA6IGAke2NsYWltTmFtZX0gdGh1bWJuYWlsYCxcbiAgICAgICAgZGVzY3JpcHRpb246IGBhIHRodW1ibmFpbCBmb3IgJHtjbGFpbU5hbWV9YCxcbiAgICAgICAgYXV0aG9yICAgICA6IGRldGFpbHMudGl0bGUsXG4gICAgICAgIGxhbmd1YWdlICAgOiAnZW4nLFxuICAgICAgICBsaWNlbnNlLFxuICAgICAgICBuc2Z3LFxuICAgICAgfSxcbiAgICAgIGNsYWltX2FkZHJlc3M6IHB1Ymxpc2hpbmcucHJpbWFyeUNsYWltQWRkcmVzcyxcbiAgICAgIGNoYW5uZWxfbmFtZSA6IHB1Ymxpc2hpbmcudGh1bWJuYWlsQ2hhbm5lbCxcbiAgICAgIGNoYW5uZWxfaWQgICA6IHB1Ymxpc2hpbmcudGh1bWJuYWlsQ2hhbm5lbElkLFxuICAgIH07XG4gIH0sXG4gIGRlbGV0ZVRlbXBvcmFyeUZpbGUgKGZpbGVQYXRoKSB7XG4gICAgZnMudW5saW5rKGZpbGVQYXRoLCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoYGVycm9yIGRlbGV0aW5nIHRlbXBvcmFyeSBmaWxlICR7ZmlsZVBhdGh9YCk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICAgIGxvZ2dlci5kZWJ1Zyhgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgJHtmaWxlUGF0aH1gKTtcbiAgICB9KTtcbiAgfSxcbiAgYWRkR2V0UmVzdWx0c1RvRmlsZURhdGEgKGZpbGVJbmZvLCBnZXRSZXN1bHQpIHtcbiAgICBmaWxlSW5mby5maWxlTmFtZSA9IGdldFJlc3VsdC5maWxlX25hbWU7XG4gICAgZmlsZUluZm8uZmlsZVBhdGggPSBnZXRSZXN1bHQuZG93bmxvYWRfcGF0aDtcbiAgICByZXR1cm4gZmlsZUluZm87XG4gIH0sXG4gIGNyZWF0ZUZpbGVEYXRhICh7IG5hbWUsIGNsYWltSWQsIG91dHBvaW50LCBoZWlnaHQsIGFkZHJlc3MsIG5zZncsIGNvbnRlbnRUeXBlIH0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGNsYWltSWQsXG4gICAgICBvdXRwb2ludCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGFkZHJlc3MsXG4gICAgICBmaWxlTmFtZTogJycsXG4gICAgICBmaWxlUGF0aDogJycsXG4gICAgICBmaWxlVHlwZTogY29udGVudFR5cGUsXG4gICAgICBuc2Z3LFxuICAgIH07XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvcHVibGlzaEhlbHBlcnMuanMiLCJjb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoYW5kbGVFcnJvclJlc3BvbnNlOiBmdW5jdGlvbiAob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKSB7XG4gICAgbG9nZ2VyLmVycm9yKGBFcnJvciBvbiAke29yaWdpbmFsVXJsfWAsIG1vZHVsZS5leHBvcnRzLnVzZU9iamVjdFByb3BlcnRpZXNJZk5vS2V5cyhlcnJvcikpO1xuICAgIGNvbnN0IFtzdGF0dXMsIG1lc3NhZ2VdID0gbW9kdWxlLmV4cG9ydHMucmV0dXJuRXJyb3JNZXNzYWdlQW5kU3RhdHVzKGVycm9yKTtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMoc3RhdHVzKVxuICAgICAgLmpzb24obW9kdWxlLmV4cG9ydHMuY3JlYXRlRXJyb3JSZXNwb25zZVBheWxvYWQoc3RhdHVzLCBtZXNzYWdlKSk7XG4gIH0sXG4gIHJldHVybkVycm9yTWVzc2FnZUFuZFN0YXR1czogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgbGV0IHN0YXR1cywgbWVzc2FnZTtcbiAgICAvLyBjaGVjayBmb3IgZGFlbW9uIGJlaW5nIHR1cm5lZCBvZmZcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VDT05OUkVGVVNFRCcpIHtcbiAgICAgIHN0YXR1cyA9IDUwMztcbiAgICAgIG1lc3NhZ2UgPSAnQ29ubmVjdGlvbiByZWZ1c2VkLiAgVGhlIGRhZW1vbiBtYXkgbm90IGJlIHJ1bm5pbmcuJztcbiAgICAgIC8vIGZhbGxiYWNrIGZvciBldmVyeXRoaW5nIGVsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gNDAwO1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXNzYWdlID0gZXJyb3I7XG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFtzdGF0dXMsIG1lc3NhZ2VdO1xuICB9LFxuICB1c2VPYmplY3RQcm9wZXJ0aWVzSWZOb0tleXM6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZXJyKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGxldCBuZXdFcnJvck9iamVjdCA9IHt9O1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZXJyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgbmV3RXJyb3JPYmplY3Rba2V5XSA9IGVycltrZXldO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3RXJyb3JPYmplY3Q7XG4gICAgfVxuICAgIHJldHVybiBlcnI7XG4gIH0sXG4gIGNyZWF0ZUVycm9yUmVzcG9uc2VQYXlsb2FkIChzdGF0dXMsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzLFxuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlLFxuICAgIH07XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvZXJyb3JIYW5kbGVycy5qcyIsImNvbnN0IGRiID0gcmVxdWlyZSgnLi4vbW9kZWxzL2luZGV4Jyk7XG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCB7IHJldHVyblBhZ2luYXRlZENoYW5uZWxDbGFpbXMgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY2hhbm5lbFBhZ2luYXRpb24uanMnKTtcblxuY29uc3QgTk9fQ0hBTk5FTCA9ICdOT19DSEFOTkVMJztcbmNvbnN0IE5PX0NMQUlNID0gJ05PX0NMQUlNJztcbmNvbnN0IE5PX0ZJTEUgPSAnTk9fRklMRSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDbGFpbUlkIChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIG5hbWUsIGNsYWltSWQpIHtcbiAgICBpZiAoY2hhbm5lbE5hbWUpIHtcbiAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cy5nZXRDbGFpbUlkQnlDaGFubmVsKGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cy5nZXRDbGFpbUlkQnlDbGFpbShuYW1lLCBjbGFpbUlkKTtcbiAgICB9XG4gIH0sXG4gIGdldENsYWltSWRCeUNsYWltIChjbGFpbU5hbWUsIGNsYWltSWQpIHtcbiAgICBsb2dnZXIuZGVidWcoYGdldENsYWltSWRCeUNsYWltKCR7Y2xhaW1OYW1lfSwgJHtjbGFpbUlkfSlgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGIuQ2xhaW0uZ2V0TG9uZ0NsYWltSWQoY2xhaW1OYW1lLCBjbGFpbUlkKVxuICAgICAgICAudGhlbihsb25nQ2xhaW1JZCA9PiB7XG4gICAgICAgICAgaWYgKCFsb25nQ2xhaW1JZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShOT19DTEFJTSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUobG9uZ0NsYWltSWQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRDbGFpbUlkQnlDaGFubmVsIChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIGNsYWltTmFtZSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgZ2V0Q2xhaW1JZEJ5Q2hhbm5lbCgke2NoYW5uZWxOYW1lfSwgJHtjaGFubmVsQ2xhaW1JZH0sICR7Y2xhaW1OYW1lfSlgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGIuQ2VydGlmaWNhdGUuZ2V0TG9uZ0NoYW5uZWxJZChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQpIC8vIDEuIGdldCB0aGUgbG9uZyBjaGFubmVsIGlkXG4gICAgICAgIC50aGVuKGxvbmdDaGFubmVsSWQgPT4ge1xuICAgICAgICAgIGlmICghbG9uZ0NoYW5uZWxJZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsb25nQ2hhbm5lbElkLCBkYi5DbGFpbS5nZXRDbGFpbUlkQnlMb25nQ2hhbm5lbElkKGxvbmdDaGFubmVsSWQsIGNsYWltTmFtZSldKTsgIC8vIDIuIGdldCB0aGUgbG9uZyBjbGFpbSBpZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2xvbmdDaGFubmVsSWQsIGxvbmdDbGFpbUlkXSkgPT4ge1xuICAgICAgICAgIGlmICghbG9uZ0NoYW5uZWxJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoTk9fQ0hBTk5FTCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghbG9uZ0NsYWltSWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKE5PX0NMQUlNKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShsb25nQ2xhaW1JZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldENoYW5uZWxEYXRhIChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIHBhZ2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gMS4gZ2V0IHRoZSBsb25nIGNoYW5uZWwgSWQgKG1ha2Ugc3VyZSBjaGFubmVsIGV4aXN0cylcbiAgICAgIGRiLkNlcnRpZmljYXRlLmdldExvbmdDaGFubmVsSWQoY2hhbm5lbE5hbWUsIGNoYW5uZWxDbGFpbUlkKVxuICAgICAgICAudGhlbihsb25nQ2hhbm5lbENsYWltSWQgPT4ge1xuICAgICAgICAgIGlmICghbG9uZ0NoYW5uZWxDbGFpbUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gW251bGwsIG51bGwsIG51bGxdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyAyLiBnZXQgdGhlIHNob3J0IElEIGFuZCBhbGwgY2xhaW1zIGZvciB0aGF0IGNoYW5uZWxcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2xvbmdDaGFubmVsQ2xhaW1JZCwgZGIuQ2VydGlmaWNhdGUuZ2V0U2hvcnRDaGFubmVsSWRGcm9tTG9uZ0NoYW5uZWxJZChsb25nQ2hhbm5lbENsYWltSWQsIGNoYW5uZWxOYW1lKV0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2xvbmdDaGFubmVsQ2xhaW1JZCwgc2hvcnRDaGFubmVsQ2xhaW1JZF0pID0+IHtcbiAgICAgICAgICBpZiAoIWxvbmdDaGFubmVsQ2xhaW1JZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoTk9fQ0hBTk5FTCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIDMuIHJldHVybiBhbGwgdGhlIGNoYW5uZWwgaW5mb3JtYXRpb25cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIGNoYW5uZWxOYW1lLFxuICAgICAgICAgICAgbG9uZ0NoYW5uZWxDbGFpbUlkLFxuICAgICAgICAgICAgc2hvcnRDaGFubmVsQ2xhaW1JZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0Q2hhbm5lbENsYWltcyAoY2hhbm5lbE5hbWUsIGNoYW5uZWxDbGFpbUlkLCBwYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIDEuIGdldCB0aGUgbG9uZyBjaGFubmVsIElkIChtYWtlIHN1cmUgY2hhbm5lbCBleGlzdHMpXG4gICAgICBkYi5DZXJ0aWZpY2F0ZS5nZXRMb25nQ2hhbm5lbElkKGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZClcbiAgICAgICAgLnRoZW4obG9uZ0NoYW5uZWxDbGFpbUlkID0+IHtcbiAgICAgICAgICBpZiAoIWxvbmdDaGFubmVsQ2xhaW1JZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBudWxsLCBudWxsXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gMi4gZ2V0IHRoZSBzaG9ydCBJRCBhbmQgYWxsIGNsYWltcyBmb3IgdGhhdCBjaGFubmVsXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsb25nQ2hhbm5lbENsYWltSWQsIGRiLkNsYWltLmdldEFsbENoYW5uZWxDbGFpbXMobG9uZ0NoYW5uZWxDbGFpbUlkKV0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2xvbmdDaGFubmVsQ2xhaW1JZCwgY2hhbm5lbENsYWltc0FycmF5XSkgPT4ge1xuICAgICAgICAgIGlmICghbG9uZ0NoYW5uZWxDbGFpbUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShOT19DSEFOTkVMKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gMy4gZm9ybWF0IHRoZSBkYXRhIGZvciB0aGUgdmlldywgaW5jbHVkaW5nIHBhZ2luYXRpb25cbiAgICAgICAgICBsZXQgcGFnaW5hdGVkQ2hhbm5lbFZpZXdEYXRhID0gcmV0dXJuUGFnaW5hdGVkQ2hhbm5lbENsYWltcyhjaGFubmVsTmFtZSwgbG9uZ0NoYW5uZWxDbGFpbUlkLCBjaGFubmVsQ2xhaW1zQXJyYXksIHBhZ2UpO1xuICAgICAgICAgIC8vIDQuIHJldHVybiBhbGwgdGhlIGNoYW5uZWwgaW5mb3JtYXRpb24gYW5kIGNvbnRlbnRzXG4gICAgICAgICAgcmVzb2x2ZShwYWdpbmF0ZWRDaGFubmVsVmlld0RhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRMb2NhbEZpbGVSZWNvcmQgKGNsYWltSWQsIG5hbWUpIHtcbiAgICByZXR1cm4gZGIuRmlsZS5maW5kT25lKHt3aGVyZToge2NsYWltSWQsIG5hbWV9fSlcbiAgICAgIC50aGVuKGZpbGUgPT4ge1xuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gTk9fRklMRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZS5kYXRhVmFsdWVzO1xuICAgICAgfSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2NvbnRyb2xsZXJzL3NlcnZlQ29udHJvbGxlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgUmVkdWNlciBmcm9tICdjbGllbnQvcmVkdWNlcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBHQUxpc3RlbmVyIGZyb20gJ2NsaWVudC9jb21wb25lbnRzL0dBTGlzdGVuZXIvJztcbmltcG9ydCBBcHAgZnJvbSAnY2xpZW50L2FwcCc7XG5pbXBvcnQgcmVuZGVyRnVsbFBhZ2UgZnJvbSAnLi9yZW5kZXJGdWxsUGFnZS5qcyc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBjb250ZXh0ID0ge307XG5cbiAgLy8gY3JlYXRlIGEgbmV3IFJlZHV4IHN0b3JlIGluc3RhbmNlXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUmVkdWNlcik7XG5cbiAgLy8gcmVuZGVyIGNvbXBvbmVudCB0byBhIHN0cmluZ1xuICBjb25zdCBodG1sID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgPEdBTGlzdGVuZXI+XG4gICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L0dBTGlzdGVuZXI+XG4gICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xuXG4gIC8vIGdldCBoZWFkIHRhZ3MgZnJvbSBoZWxtZXRcbiAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuXG4gIC8vIGNoZWNrIGZvciBhIHJlZGlyZWN0XG4gIGlmIChjb250ZXh0LnVybCkge1xuICAgIC8vIFNvbWV3aGVyZSBhIGA8UmVkaXJlY3Q+YCB3YXMgcmVuZGVyZWRcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMSwgY29udGV4dC51cmwpO1xuICB9IGVsc2Uge1xuICAgIC8vIHdlJ3JlIGdvb2QsIHNlbmQgdGhlIHJlc3BvbnNlXG4gIH1cblxuICAvLyBnZXQgdGhlIGluaXRpYWwgc3RhdGUgZnJvbSBvdXIgUmVkdXggc3RvcmVcbiAgY29uc3QgcHJlbG9hZGVkU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gIC8vIHNlbmQgdGhlIHJlbmRlcmVkIHBhZ2UgYmFjayB0byB0aGUgY2xpZW50XG4gIHJlcy5zZW5kKHJlbmRlckZ1bGxQYWdlKGhlbG1ldCwgaHRtbCwgcHJlbG9hZGVkU3RhdGUpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9oYW5kbGVQYWdlUmVuZGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBQdWJsaXNoUmVkdWNlciBmcm9tICdyZWR1Y2Vycy9wdWJsaXNoJztcbmltcG9ydCBDaGFubmVsUmVkdWNlciBmcm9tICdyZWR1Y2Vycy9jaGFubmVsJztcbmltcG9ydCBTaG93UmVkdWNlciBmcm9tICdyZWR1Y2Vycy9zaG93JztcbmltcG9ydCBTaXRlUmVkdWNlciBmcm9tICdyZWR1Y2Vycy9zaXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgY2hhbm5lbDogQ2hhbm5lbFJlZHVjZXIsXG4gIHB1Ymxpc2g6IFB1Ymxpc2hSZWR1Y2VyLFxuICBzaG93ICAgOiBTaG93UmVkdWNlcixcbiAgc2l0ZSAgIDogU2l0ZVJlZHVjZXIsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBGSUxFX1NFTEVDVEVEID0gJ0ZJTEVfU0VMRUNURUQnO1xuZXhwb3J0IGNvbnN0IEZJTEVfQ0xFQVIgPSAnRklMRV9DTEVBUic7XG5leHBvcnQgY29uc3QgTUVUQURBVEFfVVBEQVRFID0gJ01FVEFEQVRBX1VQREFURSc7XG5leHBvcnQgY29uc3QgQ0xBSU1fVVBEQVRFID0gJ0NMQUlNX1VQREFURSc7XG5leHBvcnQgY29uc3QgU0VUX1BVQkxJU0hfSU5fQ0hBTk5FTCA9ICdTRVRfUFVCTElTSF9JTl9DSEFOTkVMJztcbmV4cG9ydCBjb25zdCBQVUJMSVNIX1NUQVRVU19VUERBVEUgPSAnUFVCTElTSF9TVEFUVVNfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBFUlJPUl9VUERBVEUgPSAnRVJST1JfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9DSEFOTkVMX1VQREFURSA9ICdTRUxFQ1RFRF9DSEFOTkVMX1VQREFURSc7XG5leHBvcnQgY29uc3QgVE9HR0xFX01FVEFEQVRBX0lOUFVUUyA9ICdUT0dHTEVfTUVUQURBVEFfSU5QVVRTJztcbmV4cG9ydCBjb25zdCBUSFVNQk5BSUxfTkVXID0gJ1RIVU1CTkFJTF9ORVcnO1xuZXhwb3J0IGNvbnN0IFBVQkxJU0hfU1RBUlQgPSAnUFVCTElTSF9TVEFSVCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29uc3RhbnRzL3B1Ymxpc2hfYWN0aW9uX3R5cGVzLmpzIiwiZXhwb3J0IGNvbnN0IExPR0lOID0gJ0V4aXN0aW5nJztcbmV4cG9ydCBjb25zdCBDUkVBVEUgPSAnTmV3JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvcHVibGlzaF9jaGFubmVsX3NlbGVjdF9zdGF0ZXMuanMiLCJleHBvcnQgY29uc3QgQ0hBTk5FTF9VUERBVEUgPSAnQ0hBTk5FTF9VUERBVEUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcy5qcyIsImV4cG9ydCBjb25zdCBMT0NBTF9DSEVDSyA9ICdMT0NBTF9DSEVDSyc7XG5leHBvcnQgY29uc3QgVU5BVkFJTEFCTEUgPSAnVU5BVkFJTEFCTEUnO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gJ0VSUk9SJztcbmV4cG9ydCBjb25zdCBBVkFJTEFCTEUgPSAnQVZBSUxBQkxFJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvYXNzZXRfZGlzcGxheV9zdGF0ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZUFuYWx5dGljcyBmcm9tICdyZWFjdC1nYSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCB7IGFuYWx5dGljczogeyBnb29nbGVJZCB9IH0gPSByZXF1aXJlKCcuLi8uLi8uLi9jb25maWcvc2l0ZUNvbmZpZy5qcycpO1xuXG5Hb29nbGVBbmFseXRpY3MuaW5pdGlhbGl6ZShnb29nbGVJZCk7XG5cbmNsYXNzIEdBTGlzdGVuZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZW5kUGFnZVZpZXcodGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkubGlzdGVuKHRoaXMuc2VuZFBhZ2VWaWV3KTtcbiAgfVxuXG4gIHNlbmRQYWdlVmlldyAobG9jYXRpb24pIHtcbiAgICBHb29nbGVBbmFseXRpY3Muc2V0KHsgcGFnZTogbG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgR29vZ2xlQW5hbHl0aWNzLnBhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihHQUxpc3RlbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0dBTGlzdGVuZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGltcG9ydEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJ3V0aWxzL2R5bmFtaWNJbXBvcnQnO1xuXG5jb25zdCBIb21lUGFnZSA9IGltcG9ydEN1c3RvbUNvbXBvbmVudCgncGFnZXMvSG9tZVBhZ2UnKSB8fCByZXF1aXJlKCdwYWdlcy9Ib21lUGFnZScpLmRlZmF1bHQ7XG5jb25zdCBBYm91dFBhZ2UgPSBpbXBvcnRDdXN0b21Db21wb25lbnQoJ3BhZ2VzL0Fib3V0UGFnZScpIHx8IHJlcXVpcmUoJ3BhZ2VzL0Fib3V0UGFnZScpLmRlZmF1bHQ7XG5jb25zdCBMb2dpblBhZ2UgPSBpbXBvcnRDdXN0b21Db21wb25lbnQoJ3BhZ2VzL0xvZ2luUGFnZScpIHx8IHJlcXVpcmUoJ3BhZ2VzL0xvZ2luUGFnZScpLmRlZmF1bHQ7XG5jb25zdCBTaG93UGFnZSA9IGltcG9ydEN1c3RvbUNvbXBvbmVudCgncGFnZXMvU2hvd1BhZ2UnKSB8fCByZXF1aXJlKCdwYWdlcy9TaG93UGFnZScpLmRlZmF1bHQ7XG5jb25zdCBGb3VyT2hGb3VyUGFnZSA9IGltcG9ydEN1c3RvbUNvbXBvbmVudCgncGFnZXMvRm91ck9oRm91clBhZ2UnKSB8fCByZXF1aXJlKCdwYWdlcy9Gb3VyT2hGb3VyUGFnZScpLmRlZmF1bHQ7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2Fib3V0JyBjb21wb25lbnQ9e0Fib3V0UGFnZX0gLz5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvbG9naW4nIGNvbXBvbmVudD17TG9naW5QYWdlfSAvPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy86aWRlbnRpZmllci86Y2xhaW0nIGNvbXBvbmVudD17U2hvd1BhZ2V9IC8+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD0nLzpjbGFpbScgY29tcG9uZW50PXtTaG93UGFnZX0gLz5cbiAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e0ZvdXJPaEZvdXJQYWdlfSAvPlxuICAgIDwvU3dpdGNoPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FwcC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RGaWxlLCB1cGRhdGVFcnJvciwgY2xlYXJGaWxlIH0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbGUgICAgIDogcHVibGlzaC5maWxlLFxuICAgIHRodW1ibmFpbDogcHVibGlzaC50aHVtYm5haWwsXG4gICAgZmlsZUVycm9yOiBwdWJsaXNoLmVycm9yLmZpbGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0RmlsZTogKGZpbGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNlbGVjdEZpbGUoZmlsZSkpO1xuICAgIH0sXG4gICAgc2V0RmlsZUVycm9yOiAodmFsdWUpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFyRmlsZSgpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUVycm9yKCdmaWxlJywgdmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Ecm9wem9uZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVMb2dnZWRJbkNoYW5uZWwgfSBmcm9tICdhY3Rpb25zL2NoYW5uZWwnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7dXBkYXRlU2VsZWN0ZWRDaGFubmVsfSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1Ymxpc2gnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFubmVsTG9naW46IChuYW1lLCBzaG9ydElkLCBsb25nSWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbChuYW1lLCBzaG9ydElkLCBsb25nSWQpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlbGVjdGVkQ2hhbm5lbChuYW1lKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxMb2dpbkZvcm0vaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlTG9nZ2VkSW5DaGFubmVsIH0gZnJvbSAnYWN0aW9ucy9jaGFubmVsJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQge3VwZGF0ZVNlbGVjdGVkQ2hhbm5lbH0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbm5lbExvZ2luOiAobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVMb2dnZWRJbkNoYW5uZWwobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSk7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVTZWxlY3RlZENoYW5uZWwobmFtZSkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybS9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBDSEFOTkVMID0gJ0NIQU5ORUwnO1xuZXhwb3J0IGNvbnN0IEFTU0VUX0xJVEUgPSAnQVNTRVRfTElURSc7XG5leHBvcnQgY29uc3QgQVNTRVRfREVUQUlMUyA9ICdBU1NFVF9ERVRBSUxTJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvc2hvd19yZXF1ZXN0X3R5cGVzLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBmaWxlUmVxdWVzdGVkIH0gZnJvbSAnYWN0aW9ucy9zaG93JztcbmltcG9ydCB7IHNlbGVjdEFzc2V0IH0gZnJvbSAnc2VsZWN0b3JzL3Nob3cnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaG93IH0pID0+IHtcbiAgLy8gc2VsZWN0IGVycm9yIGFuZCBzdGF0dXNcbiAgY29uc3QgZXJyb3IgID0gc2hvdy5kaXNwbGF5QXNzZXQuZXJyb3I7XG4gIGNvbnN0IHN0YXR1cyA9IHNob3cuZGlzcGxheUFzc2V0LnN0YXR1cztcbiAgLy8gc2VsZWN0IGFzc2V0XG4gIGNvbnN0IGFzc2V0ID0gc2VsZWN0QXNzZXQoc2hvdyk7XG4gIC8vICByZXR1cm4gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBlcnJvcixcbiAgICBzdGF0dXMsXG4gICAgYXNzZXQsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25GaWxlUmVxdWVzdDogKG5hbWUsIGNsYWltSWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKGZpbGVSZXF1ZXN0ZWQobmFtZSwgY2xhaW1JZCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gKGhlbG1ldCwgaHRtbCwgcHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgLy8gdGFrZSB0aGUgaHRtbCBhbmQgcHJlbG9hZGVkU3RhdGUgYW5kIHJldHVybiB0aGUgZnVsbCBwYWdlXG4gIHJldHVybiBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG4gICAgPGh0bWwgbGFuZz1cImVuXCIgcHJlZml4PVwib2c6IGh0dHA6Ly9vZ3AubWUvbnMjIGZiOiBodHRwOi8vb2dwLm1lL25zL2ZiI1wiPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiPlxuICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCI+XG4gICAgICAgICAgICA8IS0taGVsbWV0LS0+XG4gICAgICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuICAgICAgICAgICAgJHtoZWxtZXQubGluay50b1N0cmluZygpfVxuICAgICAgICAgICAgPCEtLXN0eWxlIHNoZWV0cy0tPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvYXNzZXRzL2Nzcy9yZXNldC5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3MvZ2VuZXJhbC5jc3NcIiB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3MvbWVkaWFRdWVyaWVzLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgICAgPCEtLWdvb2dsZSBmb250LS0+XG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgaWQ9XCJtYWluLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LS10YWxsIGZsZXgtY29udGFpbmVyLS1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicmVhY3QtYXBwXCIgY2xhc3M9XCJyb3cgcm93LS10YWxsIGZsZXgtY29udGFpbmVyLS1jb2x1bW5cIj4ke2h0bWx9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAke0pTT04uc3RyaW5naWZ5KHByZWxvYWRlZFN0YXRlKS5yZXBsYWNlKC88L2csICdcXFxcXFx1MDAzYycpfVxuICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9idW5kbGUvYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIGA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvcmVuZGVyRnVsbFBhZ2UuanMiLCJleHBvcnQgY29uc3Qgc2VsZWN0U2l0ZVN0YXRlID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5zaXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNpdGVIb3N0ID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5zaXRlLmhvc3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NlbGVjdG9ycy9zaXRlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3aGF0d2ctZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3aGF0d2ctZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYXBwIGRlcGVuZGVuY2llc1xuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xuY29uc3QgZXhwcmVzc0hhbmRsZWJhcnMgPSByZXF1aXJlKCdleHByZXNzLWhhbmRsZWJhcnMnKTtcbmNvbnN0IEhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYW5kbGViYXJzJyk7XG5jb25zdCBoZWxtZXQgPSByZXF1aXJlKCdoZWxtZXQnKTtcbmNvbnN0IHBhc3Nwb3J0ID0gcmVxdWlyZSgncGFzc3BvcnQnKTtcbmNvbnN0IHsgc2VyaWFsaXplU3BlZWNoVXNlciwgZGVzZXJpYWxpemVTcGVlY2hVc2VyIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMvYXV0aEhlbHBlcnMuanMnKTtcbmNvbnN0IGNvb2tpZVNlc3Npb24gPSByZXF1aXJlKCdjb29raWUtc2Vzc2lvbicpO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbi8vIGxvZ2dpbmcgZGVwZW5kZW5jaWVzXG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5cbmZ1bmN0aW9uIFNlcnZlciAoKSB7XG4gIHRoaXMuY29uZmlndXJlTXlzcWwgPSAobXlzcWxDb25maWcpID0+IHtcbiAgICByZXF1aXJlKCcuLi9jb25maWcvbXlzcWxDb25maWcuanMnKS5jb25maWd1cmUobXlzcWxDb25maWcpO1xuICB9O1xuICB0aGlzLmNvbmZpZ3VyZVNpdGUgPSAoc2l0ZUNvbmZpZykgPT4ge1xuICAgIHJlcXVpcmUoJy4uL2NvbmZpZy9zaXRlQ29uZmlnLmpzJykuY29uZmlndXJlKHNpdGVDb25maWcpO1xuICAgIHRoaXMuc2Vzc2lvbktleSA9IHNpdGVDb25maWcuYXV0aC5zZXNzaW9uS2V5O1xuICAgIHRoaXMuUE9SVCA9IHNpdGVDb25maWcuZGV0YWlscy5wb3J0O1xuICAgIHRoaXMubG9jYWxQdWJsaWNGb2xkZXIgPSBzaXRlQ29uZmlnLmxvY2FsUHVibGljRm9sZGVyO1xuICB9O1xuICB0aGlzLmNvbmZpZ3VyZVNsYWNrID0gKHNsYWNrQ29uZmlnKSA9PiB7XG4gICAgcmVxdWlyZSgnLi4vY29uZmlnL3NsYWNrQ29uZmlnLmpzJykuY29uZmlndXJlKHNsYWNrQ29uZmlnKTtcbiAgfTtcbiAgdGhpcy5jcmVhdGVBcHAgPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIGFuIEV4cHJlc3MgYXBwbGljYXRpb25cbiAgICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbiAgICAvLyB0cnVzdCB0aGUgcHJveHkgdG8gZ2V0IGlwIGFkZHJlc3MgZm9yIHVzXG4gICAgYXBwLmVuYWJsZSgndHJ1c3QgcHJveHknKTtcblxuICAgIC8vIGFkZCBtaWRkbGV3YXJlXG4gICAgYXBwLnVzZShoZWxtZXQoKSk7IC8vIHNldCBIVFRQIGhlYWRlcnMgdG8gcHJvdGVjdCBhZ2FpbnN0IHdlbGwta25vd24gd2ViIHZ1bG5lcmFiaWx0aWVzXG4gICAgYXBwLnVzZShleHByZXNzLnN0YXRpYyhgJHtfX2Rpcm5hbWV9L3B1YmxpY2ApKTsgLy8gJ2V4cHJlc3Muc3RhdGljJyB0byBzZXJ2ZSBzdGF0aWMgZmlsZXMgZnJvbSBwdWJsaWMgZGlyZWN0b3J5XG4gICAgaWYgKHRoaXMubG9jYWxQdWJsaWNGb2xkZXIpIHtcbiAgICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoYCR7dGhpcy5sb2NhbFB1YmxpY0ZvbGRlcn1gKSk7ICAvLyB1c2UgcHJvY2Vzcy5jd2IgdG8gc2VlIHdoZXJlIHRoaXMgc3RhcnRlZCBmcm9tP1xuICAgIH07XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7IC8vICdib2R5IHBhcnNlcicgZm9yIHBhcnNpbmcgYXBwbGljYXRpb24vanNvblxuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpOyAvLyAnYm9keSBwYXJzZXInIGZvciBwYXJzaW5nIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgIGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7ICAvLyBjdXN0b20gbG9nZ2luZyBtaWRkbGV3YXJlIHRvIGxvZyBhbGwgaW5jb21pbmcgaHR0cCByZXF1ZXN0c1xuICAgICAgbG9nZ2VyLnZlcmJvc2UoYFJlcXVlc3Qgb24gJHtyZXEub3JpZ2luYWxVcmx9IGZyb20gJHtyZXEuaXB9YCk7XG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25maWd1cmUgcGFzc3BvcnRcbiAgICBwYXNzcG9ydC5zZXJpYWxpemVVc2VyKHNlcmlhbGl6ZVNwZWVjaFVzZXIpO1xuICAgIHBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcihkZXNlcmlhbGl6ZVNwZWVjaFVzZXIpO1xuICAgIGNvbnN0IGxvY2FsU2lnbnVwU3RyYXRlZ3kgPSByZXF1aXJlKCcuL3Bhc3Nwb3J0L2xvY2FsLXNpZ251cC5qcycpO1xuICAgIGNvbnN0IGxvY2FsTG9naW5TdHJhdGVneSA9IHJlcXVpcmUoJy4vcGFzc3BvcnQvbG9jYWwtbG9naW4uanMnKTtcbiAgICBwYXNzcG9ydC51c2UoJ2xvY2FsLXNpZ251cCcsIGxvY2FsU2lnbnVwU3RyYXRlZ3kpO1xuICAgIHBhc3Nwb3J0LnVzZSgnbG9jYWwtbG9naW4nLCBsb2NhbExvZ2luU3RyYXRlZ3kpO1xuICAgIC8vIGluaXRpYWxpemUgcGFzc3BvcnRcbiAgICBhcHAudXNlKGNvb2tpZVNlc3Npb24oe1xuICAgICAgbmFtZSAgOiAnc2Vzc2lvbicsXG4gICAgICBrZXlzICA6IFt0aGlzLnNlc3Npb25LZXldLFxuICAgICAgbWF4QWdlOiAyNCAqIDYwICogNjAgKiAxMDAwLCAvLyBpLmUuIDI0IGhvdXJzXG4gICAgfSkpO1xuICAgIGFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbiAgICBhcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cbiAgICAvLyBjb25maWd1cmUgaGFuZGxlYmFycyAmIHJlZ2lzdGVyIGl0IHdpdGggZXhwcmVzcyBhcHBcbiAgICBjb25zdCBoYnMgPSBleHByZXNzSGFuZGxlYmFycy5jcmVhdGUoe1xuICAgICAgZGVmYXVsdExheW91dDogJ2VtYmVkJyxcbiAgICAgIGhhbmRsZWJhcnMgICA6IEhhbmRsZWJhcnMsXG4gICAgfSk7XG4gICAgYXBwLmVuZ2luZSgnaGFuZGxlYmFycycsIGhicy5lbmdpbmUpO1xuICAgIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2hhbmRsZWJhcnMnKTtcblxuICAgIC8vIHNldCB0aGUgcm91dGVzIG9uIHRoZSBhcHBcbiAgICByZXF1aXJlKCcuL3JvdXRlcy9hdXRoLXJvdXRlcy5qcycpKGFwcCk7XG4gICAgcmVxdWlyZSgnLi9yb3V0ZXMvYXBpLXJvdXRlcy5qcycpKGFwcCk7XG4gICAgcmVxdWlyZSgnLi9yb3V0ZXMvcGFnZS1yb3V0ZXMuanMnKShhcHApO1xuICAgIHJlcXVpcmUoJy4vcm91dGVzL2Fzc2V0LXJvdXRlcy5qcycpKGFwcCk7XG4gICAgcmVxdWlyZSgnLi9yb3V0ZXMvZmFsbGJhY2stcm91dGVzLmpzJykoYXBwKTtcblxuICAgIHRoaXMuYXBwID0gYXBwO1xuICB9O1xuICB0aGlzLmluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgcmVxdWlyZSgnLi9oZWxwZXJzL2NvbmZpZ3VyZUxvZ2dlci5qcycpKGxvZ2dlcik7XG4gICAgcmVxdWlyZSgnLi9oZWxwZXJzL2NvbmZpZ3VyZVNsYWNrLmpzJykobG9nZ2VyKTtcbiAgICB0aGlzLmNyZWF0ZUFwcCgpO1xuICAgIHRoaXMuc2VydmVyID0gaHR0cC5TZXJ2ZXIodGhpcy5hcHApO1xuICB9O1xuICB0aGlzLnN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRiID0gcmVxdWlyZSgnLi9tb2RlbHMvaW5kZXgnKTtcbiAgICAvLyBzeW5jIHNlcXVlbGl6ZVxuICAgIGRiLnNlcXVlbGl6ZS5zeW5jKClcbiAgICAgIC8vIHN0YXJ0IHRoZSBzZXJ2ZXJcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIubGlzdGVuKHRoaXMuUE9SVCwgKCkgPT4ge1xuICAgICAgICAgIGxvZ2dlci5pbmZvKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIFBPUlQgJHt0aGlzLlBPUlR9YCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBTdGFydHVwIEVycm9yOmAsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWhhbmRsZWJhcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLWhhbmRsZWJhcnNcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImhhbmRsZWJhcnNcIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNlcmlhbGl6ZVNwZWVjaFVzZXIgKHVzZXIsIGRvbmUpIHsgIC8vIHJldHVybnMgdXNlciBkYXRhIHRvIGJlIHNlcmlhbGl6ZWQgaW50byBzZXNzaW9uXG4gICAgbG9nZ2VyLmRlYnVnKCdzZXJpYWxpemluZyB1c2VyJyk7XG4gICAgZG9uZShudWxsLCB1c2VyKTtcbiAgfSxcbiAgZGVzZXJpYWxpemVTcGVlY2hVc2VyICh1c2VyLCBkb25lKSB7ICAvLyBkZXNlcmlhbGl6ZXMgc2Vzc2lvbiBhbmQgcG9wdWxhdGVzIGFkZGl0aW9uYWwgaW5mbyB0byByZXEudXNlclxuICAgIGxvZ2dlci5kZWJ1ZygnZGVzZXJpYWxpemluZyB1c2VyJyk7XG4gICAgZG9uZShudWxsLCB1c2VyKTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9hdXRoSGVscGVycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29va2llLXNlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUGFzc3BvcnRMb2NhbFN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtbG9jYWwnKS5TdHJhdGVneTtcbmNvbnN0IGxicnlBcGkgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2xicnlBcGkuanMnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcbmNvbnN0IGRiID0gcmVxdWlyZSgnLi4vbW9kZWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFBhc3Nwb3J0TG9jYWxTdHJhdGVneShcbiAge1xuICAgIHVzZXJuYW1lRmllbGQ6ICd1c2VybmFtZScsXG4gICAgcGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcbiAgfSxcbiAgKHVzZXJuYW1lLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xuICAgIGxvZ2dlci52ZXJib3NlKGBuZXcgY2hhbm5lbCBzaWdudXAgcmVxdWVzdC4gdXNlcjogJHt1c2VybmFtZX0gcGFzczogJHtwYXNzd29yZH0gLmApO1xuICAgIGxldCB1c2VySW5mbyA9IHt9O1xuICAgIC8vIHNlcnZlci1zaWRlIHZhbGlkYXRvbiBvZiBpbnB1dHMgKHVzZXJuYW1lLCBwYXNzd29yZClcblxuICAgIC8vIGNyZWF0ZSB0aGUgY2hhbm5lbCBhbmQgcmV0cmlldmUgdGhlIG1ldGFkYXRhXG4gICAgcmV0dXJuIGxicnlBcGkuY3JlYXRlQ2hhbm5lbChgQCR7dXNlcm5hbWV9YClcbiAgICAgIC50aGVuKHR4ID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHVzZXIgcmVjb3JkXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xuICAgICAgICAgIHVzZXJOYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIGxvZ2dlci52ZXJib3NlKCd1c2VyRGF0YSA+JywgdXNlckRhdGEpO1xuICAgICAgICAvLyBjcmVhdGUgdXNlciByZWNvcmRcbiAgICAgICAgY29uc3QgY2hhbm5lbERhdGEgPSB7XG4gICAgICAgICAgY2hhbm5lbE5hbWUgICA6IGBAJHt1c2VybmFtZX1gLFxuICAgICAgICAgIGNoYW5uZWxDbGFpbUlkOiB0eC5jbGFpbV9pZCxcbiAgICAgICAgfTtcbiAgICAgICAgbG9nZ2VyLnZlcmJvc2UoJ2NoYW5uZWxEYXRhID4nLCBjaGFubmVsRGF0YSk7XG4gICAgICAgIC8vIGNyZWF0ZSBjZXJ0aWZpY2F0ZSByZWNvcmRcbiAgICAgICAgY29uc3QgY2VydGlmaWNhdGVEYXRhID0ge1xuICAgICAgICAgIGNsYWltSWQ6IHR4LmNsYWltX2lkLFxuICAgICAgICAgIG5hbWUgICA6IGBAJHt1c2VybmFtZX1gLFxuICAgICAgICAgIC8vIGFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgICAgIGxvZ2dlci52ZXJib3NlKCdjZXJ0aWZpY2F0ZURhdGEgPicsIGNlcnRpZmljYXRlRGF0YSk7XG4gICAgICAgIC8vIHNhdmUgdXNlciBhbmQgY2VydGlmaWNhdGUgdG8gZGJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtkYi5Vc2VyLmNyZWF0ZSh1c2VyRGF0YSksIGRiLkNoYW5uZWwuY3JlYXRlKGNoYW5uZWxEYXRhKSwgZGIuQ2VydGlmaWNhdGUuY3JlYXRlKGNlcnRpZmljYXRlRGF0YSldKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoW25ld1VzZXIsIG5ld0NoYW5uZWwsIG5ld0NlcnRpZmljYXRlXSkgPT4ge1xuICAgICAgICBsb2dnZXIudmVyYm9zZSgndXNlciBhbmQgY2VydGlmaWNhdGUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQnKTtcbiAgICAgICAgLy8gc3RvcmUgdGhlIHJlbGV2YW50IG5ld1VzZXIgaW5mbyB0byBiZSBwYXNzZWQgYmFjayBmb3IgcmVxLlVzZXJcbiAgICAgICAgdXNlckluZm9bJ2lkJ10gPSBuZXdVc2VyLmlkO1xuICAgICAgICB1c2VySW5mb1sndXNlck5hbWUnXSA9IG5ld1VzZXIudXNlck5hbWU7XG4gICAgICAgIHVzZXJJbmZvWydjaGFubmVsTmFtZSddID0gbmV3Q2hhbm5lbC5jaGFubmVsTmFtZTtcbiAgICAgICAgdXNlckluZm9bJ2NoYW5uZWxDbGFpbUlkJ10gPSBuZXdDaGFubmVsLmNoYW5uZWxDbGFpbUlkO1xuICAgICAgICAvLyBhc3NvY2lhdGUgdGhlIGluc3RhbmNlc1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW25ld0NlcnRpZmljYXRlLnNldENoYW5uZWwobmV3Q2hhbm5lbCksIG5ld0NoYW5uZWwuc2V0VXNlcihuZXdVc2VyKV0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgbG9nZ2VyLnZlcmJvc2UoJ3VzZXIgYW5kIGNlcnRpZmljYXRlIHN1Y2Nlc3NmdWxseSBhc3NvY2lhdGVkJyk7XG4gICAgICAgIHJldHVybiBkYi5DZXJ0aWZpY2F0ZS5nZXRTaG9ydENoYW5uZWxJZEZyb21Mb25nQ2hhbm5lbElkKHVzZXJJbmZvLmNoYW5uZWxDbGFpbUlkLCB1c2VySW5mby5jaGFubmVsTmFtZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc2hvcnRDaGFubmVsSWQgPT4ge1xuICAgICAgICB1c2VySW5mb1snc2hvcnRDaGFubmVsSWQnXSA9IHNob3J0Q2hhbm5lbElkO1xuICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VySW5mbyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdzaWdudXAgZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBkb25lKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3Bhc3Nwb3J0L2xvY2FsLXNpZ251cC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbGJyeUNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYXBpSG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgYXBpUG9ydDogJzUyNzknLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsYnJ5Q29uZmlnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2xicnlDb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bml2ZXJzYWwtYW5hbHl0aWNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidW5pdmVyc2FsLWFuYWx5dGljc1wiXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCB7IHJldHVyblNob3J0SWQgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvc2VxdWVsaXplSGVscGVycy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIHsgU1RSSU5HLCBCT09MRUFOLCBJTlRFR0VSLCBURVhULCBERUNJTUFMIH0pID0+IHtcbiAgY29uc3QgQ2VydGlmaWNhdGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICAgICdDZXJ0aWZpY2F0ZScsXG4gICAge1xuICAgICAgYWRkcmVzczoge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgYW1vdW50OiB7XG4gICAgICAgIHR5cGUgICA6IERFQ0lNQUwoMTksIDgpLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGNsYWltSWQ6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGNsYWltU2VxdWVuY2U6IHtcbiAgICAgICAgdHlwZSAgIDogSU5URUdFUixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBkZWNvZGVkQ2xhaW06IHtcbiAgICAgICAgdHlwZSAgIDogQk9PTEVBTixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBkZXB0aDoge1xuICAgICAgICB0eXBlICAgOiBJTlRFR0VSLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGVmZmVjdGl2ZUFtb3VudDoge1xuICAgICAgICB0eXBlICAgOiBERUNJTUFMKDE5LCA4KSxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBoYXNTaWduYXR1cmU6IHtcbiAgICAgICAgdHlwZSAgIDogQk9PTEVBTixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZSAgIDogSU5URUdFUixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBoZXg6IHtcbiAgICAgICAgdHlwZSAgIDogVEVYVCgnbG9uZycpLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIG5vdXQ6IHtcbiAgICAgICAgdHlwZSAgIDogSU5URUdFUixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICB0eGlkOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICB2YWxpZEF0SGVpZ2h0OiB7XG4gICAgICAgIHR5cGUgICA6IElOVEVHRVIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3V0cG9pbnQ6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIHZhbHVlVmVyc2lvbjoge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgY2xhaW1UeXBlOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjZXJ0aWZpY2F0ZVZlcnNpb246IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGtleVR5cGU6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIHB1YmxpY0tleToge1xuICAgICAgICB0eXBlICAgOiBURVhUKCdsb25nJyksXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICBDZXJ0aWZpY2F0ZS5hc3NvY2lhdGUgPSBkYiA9PiB7XG4gICAgQ2VydGlmaWNhdGUuYmVsb25nc1RvKGRiLkNoYW5uZWwsIHtcbiAgICAgIGZvcmVpZ25LZXk6IHtcbiAgICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBDZXJ0aWZpY2F0ZS5nZXRTaG9ydENoYW5uZWxJZEZyb21Mb25nQ2hhbm5lbElkID0gZnVuY3Rpb24gKGxvbmdDaGFubmVsSWQsIGNoYW5uZWxOYW1lKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBnZXRTaG9ydENoYW5uZWxJZEZyb21Mb25nQ2hhbm5lbElkICR7Y2hhbm5lbE5hbWV9OiR7bG9uZ0NoYW5uZWxJZH1gKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1xuICAgICAgICAuZmluZEFsbCh7XG4gICAgICAgICAgd2hlcmU6IHtuYW1lOiBjaGFubmVsTmFtZX0sXG4gICAgICAgICAgb3JkZXI6IFtbJ2hlaWdodCcsICdBU0MnXV0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2hhbm5lbChzKSBmb3VuZCB3aXRoIHRoYXQgY2hhbm5lbCBuYW1lJyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXR1cm5TaG9ydElkKHJlc3VsdCwgbG9uZ0NoYW5uZWxJZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDZXJ0aWZpY2F0ZS5nZXRMb25nQ2hhbm5lbElkRnJvbVNob3J0Q2hhbm5lbElkID0gZnVuY3Rpb24gKGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgZ2V0TG9uZ0NoYW5uZWxJZEZyb21TaG9ydENoYW5uZWxJZCgke2NoYW5uZWxOYW1lfSwgJHtjaGFubmVsQ2xhaW1JZH0pYCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXNcbiAgICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBuYW1lICAgOiBjaGFubmVsTmFtZSxcbiAgICAgICAgICAgIGNsYWltSWQ6IHtcbiAgICAgICAgICAgICAgJGxpa2U6IGAke2NoYW5uZWxDbGFpbUlkfSVgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9yZGVyOiBbWydoZWlnaHQnLCAnQVNDJ11dLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHN3aXRjaCAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIG5vdGUgcmVzdWx0cyBtdXN0IGJlIHNvcnRlZFxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRbMF0uY2xhaW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIENlcnRpZmljYXRlLmdldExvbmdDaGFubmVsSWRGcm9tQ2hhbm5lbE5hbWUgPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWUpIHtcbiAgICBsb2dnZXIuZGVidWcoYGdldExvbmdDaGFubmVsSWRGcm9tQ2hhbm5lbE5hbWUoJHtjaGFubmVsTmFtZX0pYCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXNcbiAgICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IGNoYW5uZWxOYW1lIH0sXG4gICAgICAgICAgb3JkZXI6IFtbJ2VmZmVjdGl2ZUFtb3VudCcsICdERVNDJ10sIFsnaGVpZ2h0JywgJ0FTQyddXSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRbMF0uY2xhaW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIENlcnRpZmljYXRlLnZhbGlkYXRlTG9uZ0NoYW5uZWxJZCA9IGZ1bmN0aW9uIChuYW1lLCBjbGFpbUlkKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGB2YWxpZGF0ZUxvbmdDaGFubmVsSWQoJHtuYW1lfSwgJHtjbGFpbUlkfSlgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHtuYW1lLCBjbGFpbUlkfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVzb2x2ZShjbGFpbUlkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDZXJ0aWZpY2F0ZS5nZXRMb25nQ2hhbm5lbElkID0gZnVuY3Rpb24gKGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgZ2V0TG9uZ0NoYW5uZWxJZCgke2NoYW5uZWxOYW1lfSwgJHtjaGFubmVsQ2xhaW1JZH0pYCk7XG4gICAgaWYgKGNoYW5uZWxDbGFpbUlkICYmIChjaGFubmVsQ2xhaW1JZC5sZW5ndGggPT09IDQwKSkgeyAgLy8gaWYgYSBmdWxsIGNoYW5uZWwgaWQgaXMgcHJvdmlkZWRcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlTG9uZ0NoYW5uZWxJZChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQpO1xuICAgIH0gZWxzZSBpZiAoY2hhbm5lbENsYWltSWQgJiYgY2hhbm5lbENsYWltSWQubGVuZ3RoIDwgNDApIHsgIC8vIGlmIGEgc2hvcnQgY2hhbm5lbCBpZCBpcyBwcm92aWRlZFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9uZ0NoYW5uZWxJZEZyb21TaG9ydENoYW5uZWxJZChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRMb25nQ2hhbm5lbElkRnJvbUNoYW5uZWxOYW1lKGNoYW5uZWxOYW1lKTsgIC8vIGlmIG5vIGNoYW5uZWwgaWQgcHJvdmlkZWRcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENlcnRpZmljYXRlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9tb2RlbHMvY2VydGlmaWNhdGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIHsgU1RSSU5HIH0pID0+IHtcbiAgY29uc3QgQ2hhbm5lbCA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gICAgJ0NoYW5uZWwnLFxuICAgIHtcbiAgICAgIGNoYW5uZWxOYW1lOiB7XG4gICAgICAgIHR5cGUgICAgIDogU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGNoYW5uZWxDbGFpbUlkOiB7XG4gICAgICAgIHR5cGUgICAgIDogU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcbiAgICB9XG4gICk7XG5cbiAgQ2hhbm5lbC5hc3NvY2lhdGUgPSBkYiA9PiB7XG4gICAgQ2hhbm5lbC5iZWxvbmdzVG8oZGIuVXNlcik7XG4gICAgQ2hhbm5lbC5oYXNPbmUoZGIuQ2VydGlmaWNhdGUpO1xuICB9O1xuXG4gIHJldHVybiBDaGFubmVsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9tb2RlbHMvY2hhbm5lbC5qcyIsImNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcbmNvbnN0IHsgcmV0dXJuU2hvcnRJZCB9ID0gcmVxdWlyZSgnLi4vaGVscGVycy9zZXF1ZWxpemVIZWxwZXJzLmpzJyk7XG5jb25zdCB7IGFzc2V0RGVmYXVsdHM6IHsgdGh1bWJuYWlsOiBkZWZhdWx0VGh1bWJuYWlsIH0sIGRldGFpbHM6IHsgaG9zdCB9IH0gPSByZXF1aXJlKCcuLi8uLi9jb25maWcvc2l0ZUNvbmZpZy5qcycpO1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVGaWxlRXh0ZW5zaW9uRnJvbUNvbnRlbnRUeXBlIChjb250ZW50VHlwZSkge1xuICBzd2l0Y2ggKGNvbnRlbnRUeXBlKSB7XG4gICAgY2FzZSAnaW1hZ2UvanBlZyc6XG4gICAgY2FzZSAnaW1hZ2UvanBnJzpcbiAgICAgIHJldHVybiAnanBlZyc7XG4gICAgY2FzZSAnaW1hZ2UvcG5nJzpcbiAgICAgIHJldHVybiAncG5nJztcbiAgICBjYXNlICdpbWFnZS9naWYnOlxuICAgICAgcmV0dXJuICdnaWYnO1xuICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICByZXR1cm4gJ21wNCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxvZ2dlci5kZWJ1Zygnc2V0dGluZyB1bmtub3duIGZpbGUgdHlwZSBhcyBmaWxlIGV4dGVuc2lvbiBqcGVnJyk7XG4gICAgICByZXR1cm4gJ2pwZWcnO1xuICB9XG59O1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVUaHVtYm5haWwgKHN0b3JlZFRodW1ibmFpbCwgZGVmYXVsdFRodW1ibmFpbCkge1xuICBpZiAoc3RvcmVkVGh1bWJuYWlsID09PSAnJykge1xuICAgIHJldHVybiBkZWZhdWx0VGh1bWJuYWlsO1xuICB9XG4gIHJldHVybiBzdG9yZWRUaHVtYm5haWw7XG59O1xuXG5mdW5jdGlvbiBwcmVwYXJlQ2xhaW1EYXRhIChjbGFpbSkge1xuICAvLyBsb2dnZXIuZGVidWcoJ3ByZXBhcmluZyBjbGFpbSBkYXRhIGJhc2VkIG9uIHJlc29sdmVkIGRhdGE6JywgY2xhaW0pO1xuICBjbGFpbVsndGh1bWJuYWlsJ10gPSBkZXRlcm1pbmVUaHVtYm5haWwoY2xhaW0udGh1bWJuYWlsLCBkZWZhdWx0VGh1bWJuYWlsKTtcbiAgY2xhaW1bJ2ZpbGVFeHQnXSA9IGRldGVybWluZUZpbGVFeHRlbnNpb25Gcm9tQ29udGVudFR5cGUoY2xhaW0uY29udGVudFR5cGUpO1xuICBjbGFpbVsnaG9zdCddID0gaG9zdDtcbiAgcmV0dXJuIGNsYWltO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCB7IFNUUklORywgQk9PTEVBTiwgSU5URUdFUiwgVEVYVCwgREVDSU1BTCB9KSA9PiB7XG4gIGNvbnN0IENsYWltID0gc2VxdWVsaXplLmRlZmluZShcbiAgICAnQ2xhaW0nLFxuICAgIHtcbiAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGFtb3VudDoge1xuICAgICAgICB0eXBlICAgOiBERUNJTUFMKDE5LCA4KSxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjbGFpbUlkOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjbGFpbVNlcXVlbmNlOiB7XG4gICAgICAgIHR5cGUgICA6IElOVEVHRVIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgZGVjb2RlZENsYWltOiB7XG4gICAgICAgIHR5cGUgICA6IEJPT0xFQU4sXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgZGVwdGg6IHtcbiAgICAgICAgdHlwZSAgIDogSU5URUdFUixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBlZmZlY3RpdmVBbW91bnQ6IHtcbiAgICAgICAgdHlwZSAgIDogREVDSU1BTCgxOSwgOCksXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgaGFzU2lnbmF0dXJlOiB7XG4gICAgICAgIHR5cGUgICA6IEJPT0xFQU4sXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHR5cGUgICA6IElOVEVHRVIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgaGV4OiB7XG4gICAgICAgIHR5cGUgICA6IFRFWFQoJ2xvbmcnKSxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBub3V0OiB7XG4gICAgICAgIHR5cGUgICA6IElOVEVHRVIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgdHhpZDoge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgdmFsaWRBdEhlaWdodDoge1xuICAgICAgICB0eXBlICAgOiBJTlRFR0VSLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIG91dHBvaW50OiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjbGFpbVR5cGU6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGNlcnRpZmljYXRlSWQ6IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGF1dGhvcjoge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZSAgIDogVEVYVCgnbG9uZycpLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBsaWNlbnNlOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBsaWNlbnNlVXJsOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBuc2Z3OiB7XG4gICAgICAgIHR5cGUgICA6IEJPT0xFQU4sXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgcHJldmlldzoge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgdGh1bWJuYWlsOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgbWV0YWRhdGFWZXJzaW9uOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBjb250ZW50VHlwZToge1xuICAgICAgICB0eXBlICAgOiBTVFJJTkcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9LFxuICAgICAgc291cmNlOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VUeXBlOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBzb3VyY2VWZXJzaW9uOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICBzdHJlYW1WZXJzaW9uOiB7XG4gICAgICAgIHR5cGUgICA6IFNUUklORyxcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIH0sXG4gICAgICB2YWx1ZVZlcnNpb246IHtcbiAgICAgICAgdHlwZSAgIDogU1RSSU5HLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfSxcbiAgICAgIGNoYW5uZWxOYW1lOiB7XG4gICAgICAgIHR5cGUgICAgIDogU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICAgIGRlZmF1bHQgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIENsYWltLmFzc29jaWF0ZSA9IGRiID0+IHtcbiAgICBDbGFpbS5iZWxvbmdzVG8oZGIuRmlsZSwge1xuICAgICAgZm9yZWlnbktleToge1xuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIENsYWltLmdldFNob3J0Q2xhaW1JZEZyb21Mb25nQ2xhaW1JZCA9IGZ1bmN0aW9uIChjbGFpbUlkLCBjbGFpbU5hbWUpIHtcbiAgICBsb2dnZXIuZGVidWcoYENsYWltLmdldFNob3J0Q2xhaW1JZEZyb21Mb25nQ2xhaW1JZCBmb3IgJHtjbGFpbU5hbWV9IyR7Y2xhaW1JZH1gKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1xuICAgICAgICAuZmluZEFsbCh7XG4gICAgICAgICAgd2hlcmU6IHsgbmFtZTogY2xhaW1OYW1lIH0sXG4gICAgICAgICAgb3JkZXI6IFtbJ2hlaWdodCcsICdBU0MnXV0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2xhaW0ocykgZm91bmQgd2l0aCB0aGF0IGNsYWltIG5hbWUnKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuU2hvcnRJZChyZXN1bHQsIGNsYWltSWQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2xhaW0uZ2V0QWxsQ2hhbm5lbENsYWltcyA9IGZ1bmN0aW9uIChjaGFubmVsQ2xhaW1JZCkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgQ2xhaW0uZ2V0QWxsQ2hhbm5lbENsYWltcyBmb3IgJHtjaGFubmVsQ2xhaW1JZH1gKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1xuICAgICAgICAuZmluZEFsbCh7XG4gICAgICAgICAgd2hlcmU6IHsgY2VydGlmaWNhdGVJZDogY2hhbm5lbENsYWltSWQgfSxcbiAgICAgICAgICBvcmRlcjogW1snaGVpZ2h0JywgJ0FTQyddXSxcbiAgICAgICAgICByYXcgIDogdHJ1ZSwgIC8vIHJldHVybnMgYW4gYXJyYXkgb2Ygb25seSBkYXRhLCBub3QgYW4gYXJyYXkgb2YgaW5zdGFuY2VzXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNoYW5uZWxDbGFpbXNBcnJheSA9PiB7XG4gICAgICAgICAgLy8gbG9nZ2VyLmRlYnVnKCdjaGFubmVsY2xhaW1zYXJyYXkgbGVuZ3RoOicsIGNoYW5uZWxDbGFpbXNBcnJheS5sZW5ndGgpO1xuICAgICAgICAgIHN3aXRjaCAoY2hhbm5lbENsYWltc0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNoYW5uZWxDbGFpbXNBcnJheS5mb3JFYWNoKGNsYWltID0+IHtcbiAgICAgICAgICAgICAgICBjbGFpbVsnZmlsZUV4dCddID0gZGV0ZXJtaW5lRmlsZUV4dGVuc2lvbkZyb21Db250ZW50VHlwZShjbGFpbS5jb250ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgY2xhaW1bJ3RodW1ibmFpbCddID0gZGV0ZXJtaW5lVGh1bWJuYWlsKGNsYWltLnRodW1ibmFpbCwgZGVmYXVsdFRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYWltO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2hhbm5lbENsYWltc0FycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ2xhaW0uZ2V0Q2xhaW1JZEJ5TG9uZ0NoYW5uZWxJZCA9IGZ1bmN0aW9uIChjaGFubmVsQ2xhaW1JZCwgY2xhaW1OYW1lKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBmaW5kaW5nIGNsYWltIGlkIGZvciBjbGFpbSAke2NsYWltTmFtZX0gZnJvbSBjaGFubmVsICR7Y2hhbm5lbENsYWltSWR9YCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXNcbiAgICAgICAgLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IGNsYWltTmFtZSwgY2VydGlmaWNhdGVJZDogY2hhbm5lbENsYWltSWQgfSxcbiAgICAgICAgICBvcmRlcjogW1snaWQnLCAnQVNDJ11dLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHN3aXRjaCAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0WzBdLmNsYWltSWQpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGAke3Jlc3VsdC5sZW5ndGh9IHJlY29yZHMgZm91bmQgZm9yIFwiJHtjbGFpbU5hbWV9XCIgaW4gY2hhbm5lbCBcIiR7Y2hhbm5lbENsYWltSWR9XCJgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0WzBdLmNsYWltSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDbGFpbS5nZXRMb25nQ2xhaW1JZEZyb21TaG9ydENsYWltSWQgPSBmdW5jdGlvbiAobmFtZSwgc2hvcnRJZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzXG4gICAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNsYWltSWQ6IHtcbiAgICAgICAgICAgICAgJGxpa2U6IGAke3Nob3J0SWR9JWAsXG4gICAgICAgICAgICB9fSxcbiAgICAgICAgICBvcmRlcjogW1snaGVpZ2h0JywgJ0FTQyddXSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBub3RlIHJlc3VsdHMgbXVzdCBiZSBzb3J0ZWRcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0WzBdLmNsYWltSWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDbGFpbS5nZXRUb3BGcmVlQ2xhaW1JZEJ5Q2xhaW1OYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpc1xuICAgICAgICAuZmluZEFsbCh7XG4gICAgICAgICAgd2hlcmU6IHsgbmFtZSB9LFxuICAgICAgICAgIG9yZGVyOiBbWydlZmZlY3RpdmVBbW91bnQnLCAnREVTQyddLCBbJ2hlaWdodCcsICdBU0MnXV0sICAvLyBub3RlOiBtYXliZSBoZWlnaHQgYW5kIGVmZmVjdGl2ZSBhbW91bnQgbmVlZCB0byBzd2l0Y2g/XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKCdsZW5ndGggb2YgcmVzdWx0JywgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0WzBdLmRhdGFWYWx1ZXMuY2xhaW1JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIENsYWltLnZhbGlkYXRlTG9uZ0NsYWltSWQgPSBmdW5jdGlvbiAobmFtZSwgY2xhaW1JZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZToge25hbWUsIGNsYWltSWR9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXNvbHZlKGNsYWltSWQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIENsYWltLmdldExvbmdDbGFpbUlkID0gZnVuY3Rpb24gKGNsYWltTmFtZSwgY2xhaW1JZCkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgZ2V0TG9uZ0NsYWltSWQoJHtjbGFpbU5hbWV9LCAke2NsYWltSWR9KWApO1xuICAgIGlmIChjbGFpbUlkICYmIChjbGFpbUlkLmxlbmd0aCA9PT0gNDApKSB7ICAvLyBpZiBhIGZ1bGwgY2xhaW0gaWQgaXMgcHJvdmlkZWRcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlTG9uZ0NsYWltSWQoY2xhaW1OYW1lLCBjbGFpbUlkKTtcbiAgICB9IGVsc2UgaWYgKGNsYWltSWQgJiYgY2xhaW1JZC5sZW5ndGggPCA0MCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9uZ0NsYWltSWRGcm9tU2hvcnRDbGFpbUlkKGNsYWltTmFtZSwgY2xhaW1JZCk7ICAvLyBpZiBhIHNob3J0IGNsYWltIGlkIGlzIHByb3ZpZGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRvcEZyZWVDbGFpbUlkQnlDbGFpbU5hbWUoY2xhaW1OYW1lKTsgIC8vIGlmIG5vIGNsYWltIGlkIGlzIHByb3ZpZGVkXG4gICAgfVxuICB9O1xuXG4gIENsYWltLnJlc29sdmVDbGFpbSA9IGZ1bmN0aW9uIChuYW1lLCBjbGFpbUlkKSB7XG4gICAgbG9nZ2VyLmRlYnVnKGBDbGFpbS5yZXNvbHZlQ2xhaW06ICR7bmFtZX0gJHtjbGFpbUlkfWApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzXG4gICAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgICB3aGVyZTogeyBuYW1lLCBjbGFpbUlkIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNsYWltQXJyYXkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY2xhaW1BcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHByZXBhcmVDbGFpbURhdGEoY2xhaW1BcnJheVswXS5kYXRhVmFsdWVzKSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYG1vcmUgdGhhbiBvbmUgcmVjb3JkIG1hdGNoZXMgJHtuYW1lfSMke2NsYWltSWR9IGluIGRiLkNsYWltYCk7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHByZXBhcmVDbGFpbURhdGEoY2xhaW1BcnJheVswXS5kYXRhVmFsdWVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDbGFpbTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvbW9kZWxzL2NsYWltLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCB7IFNUUklORywgQk9PTEVBTiwgSU5URUdFUiB9KSA9PiB7XG4gIGNvbnN0IEZpbGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICAgICdGaWxlJyxcbiAgICB7XG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGUgICAgIDogU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGNsYWltSWQ6IHtcbiAgICAgICAgdHlwZSAgICAgOiBTVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYWRkcmVzczoge1xuICAgICAgICB0eXBlICAgICA6IFNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBvdXRwb2ludDoge1xuICAgICAgICB0eXBlICAgICA6IFNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZSAgICAgOiBJTlRFR0VSLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0ICA6IDAsXG4gICAgICB9LFxuICAgICAgZmlsZU5hbWU6IHtcbiAgICAgICAgdHlwZSAgICAgOiBTVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZmlsZVBhdGg6IHtcbiAgICAgICAgdHlwZSAgICAgOiBTVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZmlsZVR5cGU6IHtcbiAgICAgICAgdHlwZTogU1RSSU5HLFxuICAgICAgfSxcbiAgICAgIG5zZnc6IHtcbiAgICAgICAgdHlwZSAgICAgICAgOiBCT09MRUFOLFxuICAgICAgICBhbGxvd051bGwgICA6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHRyZW5kaW5nRWxpZ2libGU6IHtcbiAgICAgICAgdHlwZSAgICAgICAgOiBCT09MRUFOLFxuICAgICAgICBhbGxvd051bGwgICA6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxuICAgIH1cbiAgKTtcblxuICBGaWxlLmFzc29jaWF0ZSA9IGRiID0+IHtcbiAgICBGaWxlLmhhc01hbnkoZGIuUmVxdWVzdCk7XG4gICAgRmlsZS5oYXNPbmUoZGIuQ2xhaW0pO1xuICB9O1xuXG4gIEZpbGUuZ2V0UmVjZW50Q2xhaW1zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHsgbnNmdzogZmFsc2UsIHRyZW5kaW5nRWxpZ2libGU6IHRydWUgfSxcbiAgICAgIG9yZGVyOiBbWydjcmVhdGVkQXQnLCAnREVTQyddXSxcbiAgICAgIGxpbWl0OiAyNSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRmlsZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvbW9kZWxzL2ZpbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIHsgU1RSSU5HLCBCT09MRUFOLCBURVhUIH0pID0+IHtcbiAgY29uc3QgUmVxdWVzdCA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gICAgJ1JlcXVlc3QnLFxuICAgIHtcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICB0eXBlICAgICA6IFNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgdHlwZSAgICAgOiBTVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXBBZGRyZXNzOiB7XG4gICAgICAgIHR5cGUgICAgIDogU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICB9LFxuICAgICAgcmVzdWx0OiB7XG4gICAgICAgIHR5cGUgICAgIDogVEVYVCgnbG9uZycpLFxuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICAgIGRlZmF1bHQgIDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIFJlcXVlc3QuYXNzb2NpYXRlID0gZGIgPT4ge1xuICAgIFJlcXVlc3QuYmVsb25nc1RvKGRiLkZpbGUsIHtcbiAgICAgIGZvcmVpZ25LZXk6IHtcbiAgICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUmVxdWVzdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvbW9kZWxzL3JlcXVlc3QuanMiLCIndXNlIHN0cmljdCc7XG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCB7IFNUUklORyB9KSA9PiB7XG4gIGNvbnN0IFVzZXIgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICAgICdVc2VyJyxcbiAgICB7XG4gICAgICB1c2VyTmFtZToge1xuICAgICAgICB0eXBlICAgICA6IFNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlICAgICA6IFNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBmcmVlemVUYWJsZU5hbWU6IHRydWUsXG4gICAgfVxuICApO1xuXG4gIFVzZXIuYXNzb2NpYXRlID0gZGIgPT4ge1xuICAgIFVzZXIuaGFzT25lKGRiLkNoYW5uZWwpO1xuICB9O1xuXG4gIFVzZXIucHJvdG90eXBlLmNvbXBhcmVQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG4gIH07XG5cbiAgVXNlci5wcm90b3R5cGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAobmV3UGFzc3dvcmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gZ2VuZXJhdGUgYSBzYWx0IHN0cmluZyB0byB1c2UgZm9yIGhhc2hpbmdcbiAgICAgIGJjcnlwdC5nZW5TYWx0KChzYWx0RXJyb3IsIHNhbHQpID0+IHtcbiAgICAgICAgaWYgKHNhbHRFcnJvcikge1xuICAgICAgICAgIGxvZ2dlci5lcnJvcignc2FsdCBlcnJvcicsIHNhbHRFcnJvcik7XG4gICAgICAgICAgcmVqZWN0KHNhbHRFcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdlbmVyYXRlIGEgaGFzaGVkIHZlcnNpb24gb2YgdGhlIHVzZXIncyBwYXNzd29yZFxuICAgICAgICBiY3J5cHQuaGFzaChuZXdQYXNzd29yZCwgc2FsdCwgKGhhc2hFcnJvciwgaGFzaCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVycm9yIHdpdGggdGhlIGhhc2ggZ2VuZXJhdGlvbiByZXR1cm4gdGhlIGVycm9yXG4gICAgICAgICAgaWYgKGhhc2hFcnJvcikge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdoYXNoIGVycm9yJywgaGFzaEVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdChoYXNoRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZXBsYWNlIHRoZSBjdXJyZW50IHBhc3N3b3JkIHdpdGggdGhlIG5ldyBoYXNoXG4gICAgICAgICAgdGhpc1xuICAgICAgICAgICAgLnVwZGF0ZSh7cGFzc3dvcmQ6IGhhc2h9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIHByZS1zYXZlIGhvb2sgbWV0aG9kIHRvIGhhc2ggdGhlIHVzZXIncyBwYXNzd29yZCBiZWZvcmUgdGhlIHVzZXIncyBpbmZvIGlzIHNhdmVkIHRvIHRoZSBkYi5cbiAgVXNlci5ob29rKCdiZWZvcmVDcmVhdGUnLCAodXNlciwgb3B0aW9ucykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZygnVXNlci5iZWZvcmVDcmVhdGUgaG9vay4uLicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBnZW5lcmF0ZSBhIHNhbHQgc3RyaW5nIHRvIHVzZSBmb3IgaGFzaGluZ1xuICAgICAgYmNyeXB0LmdlblNhbHQoKHNhbHRFcnJvciwgc2FsdCkgPT4ge1xuICAgICAgICBpZiAoc2FsdEVycm9yKSB7XG4gICAgICAgICAgbG9nZ2VyLmVycm9yKCdzYWx0IGVycm9yJywgc2FsdEVycm9yKTtcbiAgICAgICAgICByZWplY3Qoc2FsdEVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2VuZXJhdGUgYSBoYXNoZWQgdmVyc2lvbiBvZiB0aGUgdXNlcidzIHBhc3N3b3JkXG4gICAgICAgIGJjcnlwdC5oYXNoKHVzZXIucGFzc3dvcmQsIHNhbHQsIChoYXNoRXJyb3IsIGhhc2gpID0+IHtcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBoYXNoIGdlbmVyYXRpb24gcmV0dXJuIHRoZSBlcnJvclxuICAgICAgICAgIGlmIChoYXNoRXJyb3IpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignaGFzaCBlcnJvcicsIGhhc2hFcnJvcik7XG4gICAgICAgICAgICByZWplY3QoaGFzaEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcmVwbGFjZSB0aGUgcGFzc3dvcmQgc3RyaW5nIHdpdGggdGhlIGhhc2ggcGFzc3dvcmQgdmFsdWVcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkID0gaGFzaDtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBVc2VyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9tb2RlbHMvdXNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJjcnlwdFwiXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBQYXNzcG9ydExvY2FsU3RyYXRlZ3kgPSByZXF1aXJlKCdwYXNzcG9ydC1sb2NhbCcpLlN0cmF0ZWd5O1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnd2luc3RvbicpO1xuY29uc3QgZGIgPSByZXF1aXJlKCcuLi9tb2RlbHMvaW5kZXgnKTtcblxuY29uc3QgcmV0dXJuVXNlckFuZENoYW5uZWxJbmZvID0gKHVzZXJJbnN0YW5jZSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCB1c2VySW5mbyA9IHt9O1xuICAgIHVzZXJJbmZvWydpZCddID0gdXNlckluc3RhbmNlLmlkO1xuICAgIHVzZXJJbmZvWyd1c2VyTmFtZSddID0gdXNlckluc3RhbmNlLnVzZXJOYW1lO1xuICAgIHVzZXJJbnN0YW5jZVxuICAgICAgLmdldENoYW5uZWwoKVxuICAgICAgLnRoZW4oKHtjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWR9KSA9PiB7XG4gICAgICAgIHVzZXJJbmZvWydjaGFubmVsTmFtZSddID0gY2hhbm5lbE5hbWU7XG4gICAgICAgIHVzZXJJbmZvWydjaGFubmVsQ2xhaW1JZCddID0gY2hhbm5lbENsYWltSWQ7XG4gICAgICAgIHJldHVybiBkYi5DZXJ0aWZpY2F0ZS5nZXRTaG9ydENoYW5uZWxJZEZyb21Mb25nQ2hhbm5lbElkKGNoYW5uZWxDbGFpbUlkLCBjaGFubmVsTmFtZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc2hvcnRDaGFubmVsSWQgPT4ge1xuICAgICAgICB1c2VySW5mb1snc2hvcnRDaGFubmVsSWQnXSA9IHNob3J0Q2hhbm5lbElkO1xuICAgICAgICByZXNvbHZlKHVzZXJJbmZvKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUGFzc3BvcnRMb2NhbFN0cmF0ZWd5KFxuICB7XG4gICAgdXNlcm5hbWVGaWVsZDogJ3VzZXJuYW1lJyxcbiAgICBwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxuICB9LFxuICAodXNlcm5hbWUsIHBhc3N3b3JkLCBkb25lKSA9PiB7XG4gICAgcmV0dXJuIGRiLlVzZXJcbiAgICAgIC5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHt1c2VyTmFtZTogdXNlcm5hbWV9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoJ25vIHVzZXIgZm91bmQnKTtcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwge21lc3NhZ2U6ICdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQnfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXIuY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkKVxuICAgICAgICAgIC50aGVuKGlzTWF0Y2ggPT4ge1xuICAgICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4gICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnaW5jb3JyZWN0IHBhc3N3b3JkJyk7XG4gICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7bWVzc2FnZTogJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnUGFzc3dvcmQgd2FzIGEgbWF0Y2gsIHJldHVybmluZyBVc2VyJyk7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVXNlckFuZENoYW5uZWxJbmZvKHVzZXIpXG4gICAgICAgICAgICAgIC50aGVuKHVzZXJJbmZvID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VySW5mbyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmV0dXJuIGRvbmUoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3Bhc3Nwb3J0L2xvY2FsLWxvZ2luLmpzIiwiY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnd2luc3RvbicpO1xuY29uc3QgcGFzc3BvcnQgPSByZXF1aXJlKCdwYXNzcG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhcHApID0+IHtcbiAgLy8gcm91dGUgZm9yIHNpZ24gdXBcbiAgYXBwLnBvc3QoJy9zaWdudXAnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsLXNpZ251cCcpLCAocmVxLCByZXMpID0+IHtcbiAgICBsb2dnZXIudmVyYm9zZShgc3VjY2Vzc2Z1bCBzaWdudXAgZm9yICR7cmVxLnVzZXIuY2hhbm5lbE5hbWV9YCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3VjY2VzcyAgICAgICA6IHRydWUsXG4gICAgICBjaGFubmVsTmFtZSAgIDogcmVxLnVzZXIuY2hhbm5lbE5hbWUsXG4gICAgICBjaGFubmVsQ2xhaW1JZDogcmVxLnVzZXIuY2hhbm5lbENsYWltSWQsXG4gICAgICBzaG9ydENoYW5uZWxJZDogcmVxLnVzZXIuc2hvcnRDaGFubmVsSWQsXG4gICAgfSk7XG4gIH0pO1xuICAvLyByb3V0ZSBmb3IgbG9nIGluXG4gIGFwcC5wb3N0KCcvbG9naW4nLCAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsLWxvZ2luJywgKGVyciwgdXNlciwgaW5mbykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgfVxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogaW5mby5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGxvZ2dlci5kZWJ1Zygnc3VjY2Vzc2Z1bCBsb2dpbicpO1xuICAgICAgcmVxLmxvZ0luKHVzZXIsIChlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBzdWNjZXNzICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBjaGFubmVsTmFtZSAgIDogcmVxLnVzZXIuY2hhbm5lbE5hbWUsXG4gICAgICAgICAgY2hhbm5lbENsYWltSWQ6IHJlcS51c2VyLmNoYW5uZWxDbGFpbUlkLFxuICAgICAgICAgIHNob3J0Q2hhbm5lbElkOiByZXEudXNlci5zaG9ydENoYW5uZWxJZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KShyZXEsIHJlcywgbmV4dCk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBsb2cgb3V0XG4gIGFwcC5nZXQoJy9sb2dvdXQnLCAocmVxLCByZXMpID0+IHtcbiAgICByZXEubG9nb3V0KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICd5b3Ugc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQnfSk7XG4gIH0pO1xuICAvLyBzZWUgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkLCBhbmQgcmV0dXJuIGNyZWRlbnRpYWxzIGlmIHNvXG4gIGFwcC5nZXQoJy91c2VyJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS51c2VyKSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogcmVxLnVzZXJ9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAndXNlciBpcyBub3QgbG9nZ2VkIGluJ30pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3JvdXRlcy9hdXRoLXJvdXRlcy5qcyIsImNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcbmNvbnN0IG11bHRpcGFydCA9IHJlcXVpcmUoJ2Nvbm5lY3QtbXVsdGlwYXJ0eScpO1xuY29uc3QgeyBwdWJsaXNoaW5nOiB7IHVwbG9hZERpcmVjdG9yeSB9LCBkZXRhaWxzOiB7IGhvc3QgfSB9ID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3NpdGVDb25maWcuanMnKTtcbmNvbnN0IG11bHRpcGFydE1pZGRsZXdhcmUgPSBtdWx0aXBhcnQoe3VwbG9hZERpcjogdXBsb2FkRGlyZWN0b3J5fSk7XG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uL21vZGVscy9pbmRleCcpO1xuY29uc3QgeyBjbGFpbU5hbWVJc0F2YWlsYWJsZSwgY2hlY2tDaGFubmVsQXZhaWxhYmlsaXR5LCBwdWJsaXNoIH0gPSByZXF1aXJlKCcuLi9jb250cm9sbGVycy9wdWJsaXNoQ29udHJvbGxlci5qcycpO1xuY29uc3QgeyBnZXRDbGFpbUxpc3QsIHJlc29sdmVVcmksIGdldENsYWltIH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL2xicnlBcGkuanMnKTtcbmNvbnN0IHsgYWRkR2V0UmVzdWx0c1RvRmlsZURhdGEsIGNyZWF0ZUJhc2ljUHVibGlzaFBhcmFtcywgY3JlYXRlVGh1bWJuYWlsUHVibGlzaFBhcmFtcywgcGFyc2VQdWJsaXNoQXBpUmVxdWVzdEJvZHksIHBhcnNlUHVibGlzaEFwaVJlcXVlc3RGaWxlcywgY3JlYXRlRmlsZURhdGEgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcHVibGlzaEhlbHBlcnMuanMnKTtcbmNvbnN0IGVycm9ySGFuZGxlcnMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2Vycm9ySGFuZGxlcnMuanMnKTtcbmNvbnN0IHsgc2VuZEdBVGltaW5nRXZlbnQgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvZ29vZ2xlQW5hbHl0aWNzLmpzJyk7XG5jb25zdCB7IGF1dGhlbnRpY2F0ZVVzZXIgfSA9IHJlcXVpcmUoJy4uL2F1dGgvYXV0aGVudGljYXRpb24uanMnKTtcbmNvbnN0IHsgZ2V0Q2hhbm5lbERhdGEsIGdldENoYW5uZWxDbGFpbXMsIGdldENsYWltSWQgfSA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXJzL3NlcnZlQ29udHJvbGxlci5qcycpO1xuXG5jb25zdCBOT19DSEFOTkVMID0gJ05PX0NIQU5ORUwnO1xuY29uc3QgTk9fQ0xBSU0gPSAnTk9fQ0xBSU0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhcHApID0+IHtcbiAgLy8gcm91dGUgdG8gY2hlY2sgd2hldGhlciBzaXRlIGhhcyBwdWJsaXNoZWQgdG8gYSBjaGFubmVsXG4gIGFwcC5nZXQoJy9hcGkvY2hhbm5lbC9hdmFpbGFiaWxpdHkvOm5hbWUnLCAoeyBpcCwgb3JpZ2luYWxVcmwsIHBhcmFtczogeyBuYW1lIH0gfSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZ2FTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNoZWNrQ2hhbm5lbEF2YWlsYWJpbGl0eShuYW1lKVxuICAgICAgLnRoZW4oYXZhaWxhYmxlTmFtZSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGF2YWlsYWJsZU5hbWUpO1xuICAgICAgICBzZW5kR0FUaW1pbmdFdmVudCgnZW5kLXRvLWVuZCcsICdjbGFpbSBuYW1lIGF2YWlsYWJpbGl0eScsIG5hbWUsIGdhU3RhcnRUaW1lLCBEYXRlLm5vdygpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXJzLmhhbmRsZUVycm9yUmVzcG9uc2Uob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgLy8gcm91dGUgdG8gZ2V0IGEgc2hvcnQgY2hhbm5lbCBpZCBmcm9tIGxvbmcgY2hhbm5lbCBJZFxuICBhcHAuZ2V0KCcvYXBpL2NoYW5uZWwvc2hvcnQtaWQvOmxvbmdJZC86bmFtZScsICh7IGlwLCBvcmlnaW5hbFVybCwgcGFyYW1zIH0sIHJlcykgPT4ge1xuICAgIGRiLkNlcnRpZmljYXRlLmdldFNob3J0Q2hhbm5lbElkRnJvbUxvbmdDaGFubmVsSWQocGFyYW1zLmxvbmdJZCwgcGFyYW1zLm5hbWUpXG4gICAgICAudGhlbihzaG9ydElkID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2hvcnRJZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5oYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICB9KTtcbiAgfSk7XG4gIGFwcC5nZXQoJy9hcGkvY2hhbm5lbC9kYXRhLzpjaGFubmVsTmFtZS86Y2hhbm5lbENsYWltSWQnLCAoeyBpcCwgb3JpZ2luYWxVcmwsIGJvZHksIHBhcmFtcyB9LCByZXMpID0+IHtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IHBhcmFtcy5jaGFubmVsTmFtZTtcbiAgICBsZXQgY2hhbm5lbENsYWltSWQgPSBwYXJhbXMuY2hhbm5lbENsYWltSWQ7XG4gICAgaWYgKGNoYW5uZWxDbGFpbUlkID09PSAnbm9uZScpIGNoYW5uZWxDbGFpbUlkID0gbnVsbDtcbiAgICBnZXRDaGFubmVsRGF0YShjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIDApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEgPT09IE5PX0NIQU5ORUwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnTm8gbWF0Y2hpbmcgY2hhbm5lbCB3YXMgZm91bmQnfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGF9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXJzLmhhbmRsZUVycm9yUmVzcG9uc2Uob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgYXBwLmdldCgnL2FwaS9jaGFubmVsL2NsYWltcy86Y2hhbm5lbE5hbWUvOmNoYW5uZWxDbGFpbUlkLzpwYWdlJywgKHsgaXAsIG9yaWdpbmFsVXJsLCBib2R5LCBwYXJhbXMgfSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbE5hbWUgPSBwYXJhbXMuY2hhbm5lbE5hbWU7XG4gICAgbGV0IGNoYW5uZWxDbGFpbUlkID0gcGFyYW1zLmNoYW5uZWxDbGFpbUlkO1xuICAgIGlmIChjaGFubmVsQ2xhaW1JZCA9PT0gJ25vbmUnKSBjaGFubmVsQ2xhaW1JZCA9IG51bGw7XG4gICAgY29uc3QgcGFnZSA9IHBhcmFtcy5wYWdlO1xuICAgIGdldENoYW5uZWxDbGFpbXMoY2hhbm5lbE5hbWUsIGNoYW5uZWxDbGFpbUlkLCBwYWdlKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhID09PSBOT19DSEFOTkVMKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05vIG1hdGNoaW5nIGNoYW5uZWwgd2FzIGZvdW5kJ30pO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOiB0cnVlLCBkYXRhfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5oYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICB9KTtcbiAgfSk7XG4gIC8vIHJvdXRlIHRvIHJ1biBhIGNsYWltX2xpc3QgcmVxdWVzdCBvbiB0aGUgZGFlbW9uXG4gIGFwcC5nZXQoJy9hcGkvY2xhaW0vbGlzdC86bmFtZScsICh7IGlwLCBvcmlnaW5hbFVybCwgcGFyYW1zIH0sIHJlcykgPT4ge1xuICAgIGdldENsYWltTGlzdChwYXJhbXMubmFtZSlcbiAgICAgIC50aGVuKGNsYWltc0xpc3QgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjbGFpbXNMaXN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXJzLmhhbmRsZUVycm9yUmVzcG9uc2Uob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgLy8gcm91dGUgdG8gZ2V0IGFuIGFzc2V0XG4gIGFwcC5nZXQoJy9hcGkvY2xhaW0vZ2V0LzpuYW1lLzpjbGFpbUlkJywgKHsgaXAsIG9yaWdpbmFsVXJsLCBwYXJhbXMgfSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHBhcmFtcy5uYW1lO1xuICAgIGNvbnN0IGNsYWltSWQgPSBwYXJhbXMuY2xhaW1JZDtcbiAgICAvLyByZXNvbHZlIHRoZSBjbGFpbVxuICAgIGRiLkNsYWltLnJlc29sdmVDbGFpbShuYW1lLCBjbGFpbUlkKVxuICAgICAgLnRoZW4ocmVzb2x2ZVJlc3VsdCA9PiB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBhIGNsYWltIGFjdHVhbGx5IGV4aXN0cyBhdCB0aGF0IHVyaVxuICAgICAgICBpZiAoIXJlc29sdmVSZXN1bHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1hdGNoaW5nIHVyaSBmb3VuZCBpbiBDbGFpbSB0YWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmaWxlRGF0YSA9IGNyZWF0ZUZpbGVEYXRhKHJlc29sdmVSZXN1bHQpO1xuICAgICAgICAvLyBnZXQgdGhlIGNsYWltXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbZmlsZURhdGEsIGdldENsYWltKGAke25hbWV9IyR7Y2xhaW1JZH1gKV0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChbIGZpbGVEYXRhLCBnZXRSZXN1bHQgXSkgPT4ge1xuICAgICAgICBmaWxlRGF0YSA9IGFkZEdldFJlc3VsdHNUb0ZpbGVEYXRhKGZpbGVEYXRhLCBnZXRSZXN1bHQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2RiLnVwc2VydChkYi5GaWxlLCBmaWxlRGF0YSwge25hbWUsIGNsYWltSWR9LCAnRmlsZScpLCBnZXRSZXN1bHRdKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoWyBmaWxlUmVjb3JkLCB7bWVzc2FnZSwgY29tcGxldGVkfSBdKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZSwgY29tcGxldGVkIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9ySGFuZGxlcnMuaGFuZGxlRXJyb3JSZXNwb25zZShvcmlnaW5hbFVybCwgaXAsIGVycm9yLCByZXMpO1xuICAgICAgfSk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBjaGVjayB3aGV0aGVyIHRoaXMgc2l0ZSBwdWJsaXNoZWQgdG8gYSBjbGFpbVxuICBhcHAuZ2V0KCcvYXBpL2NsYWltL2F2YWlsYWJpbGl0eS86bmFtZScsICh7IGlwLCBvcmlnaW5hbFVybCwgcGFyYW1zOiB7IG5hbWUgfSB9LCByZXMpID0+IHtcbiAgICBjb25zdCBnYVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgY2xhaW1OYW1lSXNBdmFpbGFibGUobmFtZSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgICAgIHNlbmRHQVRpbWluZ0V2ZW50KCdlbmQtdG8tZW5kJywgJ2NsYWltIG5hbWUgYXZhaWxhYmlsaXR5JywgbmFtZSwgZ2FTdGFydFRpbWUsIERhdGUubm93KCkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9ySGFuZGxlcnMuaGFuZGxlRXJyb3JSZXNwb25zZShvcmlnaW5hbFVybCwgaXAsIGVycm9yLCByZXMpO1xuICAgICAgfSk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBydW4gYSByZXNvbHZlIHJlcXVlc3Qgb24gdGhlIGRhZW1vblxuICBhcHAuZ2V0KCcvYXBpL2NsYWltL3Jlc29sdmUvOm5hbWUvOmNsYWltSWQnLCAoeyBoZWFkZXJzLCBpcCwgb3JpZ2luYWxVcmwsIHBhcmFtcyB9LCByZXMpID0+IHtcbiAgICByZXNvbHZlVXJpKGAke3BhcmFtcy5uYW1lfSMke3BhcmFtcy5jbGFpbUlkfWApXG4gICAgICAudGhlbihyZXNvbHZlZFVyaSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc29sdmVkVXJpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXJzLmhhbmRsZUVycm9yUmVzcG9uc2Uob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgLy8gcm91dGUgdG8gcnVuIGEgcHVibGlzaCByZXF1ZXN0IG9uIHRoZSBkYWVtb25cbiAgYXBwLnBvc3QoJy9hcGkvY2xhaW0vcHVibGlzaCcsIG11bHRpcGFydE1pZGRsZXdhcmUsICh7IGJvZHksIGZpbGVzLCBoZWFkZXJzLCBpcCwgb3JpZ2luYWxVcmwsIHVzZXIgfSwgcmVzKSA9PiB7XG4gICAgLy8gZGVmaW5lIHZhcmlhYmxlc1xuICAgIGxldCAgY2hhbm5lbE5hbWUsIGNoYW5uZWxJZCwgY2hhbm5lbFBhc3N3b3JkLCBkZXNjcmlwdGlvbiwgZmlsZU5hbWUsIGZpbGVQYXRoLCBmaWxlVHlwZSwgZ2FTdGFydFRpbWUsIGxpY2Vuc2UsIG5hbWUsIG5zZncsIHRodW1ibmFpbCwgdGh1bWJuYWlsRmlsZU5hbWUsIHRodW1ibmFpbEZpbGVQYXRoLCB0aHVtYm5haWxGaWxlVHlwZSwgdGl0bGU7XG4gICAgLy8gcmVjb3JkIHRoZSBzdGFydCB0aW1lIG9mIHRoZSByZXF1ZXN0XG4gICAgZ2FTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vIHZhbGlkYXRlIHRoZSBib2R5IGFuZCBmaWxlcyBvZiB0aGUgcmVxdWVzdFxuICAgIHRyeSB7XG4gICAgICAvLyB2YWxpZGF0ZUFwaVB1Ymxpc2hSZXF1ZXN0KGJvZHksIGZpbGVzKTtcbiAgICAgICh7bmFtZSwgbnNmdywgbGljZW5zZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aHVtYm5haWx9ID0gcGFyc2VQdWJsaXNoQXBpUmVxdWVzdEJvZHkoYm9keSkpO1xuICAgICAgKHtmaWxlTmFtZSwgZmlsZVBhdGgsIGZpbGVUeXBlLCB0aHVtYm5haWxGaWxlTmFtZSwgdGh1bWJuYWlsRmlsZVBhdGgsIHRodW1ibmFpbEZpbGVUeXBlfSA9IHBhcnNlUHVibGlzaEFwaVJlcXVlc3RGaWxlcyhmaWxlcykpO1xuICAgICAgKHtjaGFubmVsTmFtZSwgY2hhbm5lbElkLCBjaGFubmVsUGFzc3dvcmR9ID0gYm9keSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTtcbiAgICB9XG4gICAgLy8gY2hlY2sgY2hhbm5lbCBhdXRob3JpemF0aW9uXG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgYXV0aGVudGljYXRlVXNlcihjaGFubmVsTmFtZSwgY2hhbm5lbElkLCBjaGFubmVsUGFzc3dvcmQsIHVzZXIpLFxuICAgICAgY2xhaW1OYW1lSXNBdmFpbGFibGUobmFtZSksXG4gICAgICBjcmVhdGVCYXNpY1B1Ymxpc2hQYXJhbXMoZmlsZVBhdGgsIG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGljZW5zZSwgbnNmdywgdGh1bWJuYWlsKSxcbiAgICAgIGNyZWF0ZVRodW1ibmFpbFB1Ymxpc2hQYXJhbXModGh1bWJuYWlsRmlsZVBhdGgsIG5hbWUsIGxpY2Vuc2UsIG5zZncpLFxuICAgIF0pXG4gICAgICAudGhlbigoW3tjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWR9LCB2YWxpZGF0ZWRDbGFpbU5hbWUsIHB1Ymxpc2hQYXJhbXMsIHRodW1ibmFpbFB1Ymxpc2hQYXJhbXNdKSA9PiB7XG4gICAgICAgIC8vIGFkZCBjaGFubmVsIGRldGFpbHMgdG8gdGhlIHB1Ymxpc2ggcGFyYW1zXG4gICAgICAgIGlmIChjaGFubmVsTmFtZSAmJiBjaGFubmVsQ2xhaW1JZCkge1xuICAgICAgICAgIHB1Ymxpc2hQYXJhbXNbJ2NoYW5uZWxfbmFtZSddID0gY2hhbm5lbE5hbWU7XG4gICAgICAgICAgcHVibGlzaFBhcmFtc1snY2hhbm5lbF9pZCddID0gY2hhbm5lbENsYWltSWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHVibGlzaCB0aGUgdGh1bWJuYWlsXG4gICAgICAgIGlmICh0aHVtYm5haWxQdWJsaXNoUGFyYW1zKSB7XG4gICAgICAgICAgcHVibGlzaCh0aHVtYm5haWxQdWJsaXNoUGFyYW1zLCB0aHVtYm5haWxGaWxlTmFtZSwgdGh1bWJuYWlsRmlsZVR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHB1Ymxpc2ggdGhlIGFzc2V0XG4gICAgICAgIHJldHVybiBwdWJsaXNoKHB1Ymxpc2hQYXJhbXMsIGZpbGVOYW1lLCBmaWxlVHlwZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgbWVzc2FnZTogJ3B1Ymxpc2ggY29tcGxldGVkIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgICAgZGF0YSAgIDoge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNsYWltSWQ6IHJlc3VsdC5jbGFpbV9pZCxcbiAgICAgICAgICAgIHVybCAgICA6IGAke2hvc3R9LyR7cmVzdWx0LmNsYWltX2lkfS8ke25hbWV9YCxcbiAgICAgICAgICAgIGxicnlUeCA6IHJlc3VsdCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVjb3JkIHRoZSBwdWJsaXNoIGVuZCB0aW1lIGFuZCBzZW5kIHRvIGdvb2dsZSBhbmFseXRpY3NcbiAgICAgICAgc2VuZEdBVGltaW5nRXZlbnQoJ2VuZC10by1lbmQnLCAncHVibGlzaCcsIGZpbGVUeXBlLCBnYVN0YXJ0VGltZSwgRGF0ZS5ub3coKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5oYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICB9KTtcbiAgfSk7XG4gIC8vIHJvdXRlIHRvIGdldCBhIHNob3J0IGNsYWltIGlkIGZyb20gbG9uZyBjbGFpbSBJZFxuICBhcHAuZ2V0KCcvYXBpL2NsYWltL3Nob3J0LWlkLzpsb25nSWQvOm5hbWUnLCAoeyBpcCwgb3JpZ2luYWxVcmwsIGJvZHksIHBhcmFtcyB9LCByZXMpID0+IHtcbiAgICBkYi5DbGFpbS5nZXRTaG9ydENsYWltSWRGcm9tTG9uZ0NsYWltSWQocGFyYW1zLmxvbmdJZCwgcGFyYW1zLm5hbWUpXG4gICAgICAudGhlbihzaG9ydElkID0+IHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6IHNob3J0SWR9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXJzLmhhbmRsZUVycm9yUmVzcG9uc2Uob3JpZ2luYWxVcmwsIGlwLCBlcnJvciwgcmVzKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgYXBwLnBvc3QoJy9hcGkvY2xhaW0vbG9uZy1pZCcsICh7IGlwLCBvcmlnaW5hbFVybCwgYm9keSwgcGFyYW1zIH0sIHJlcykgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZygnYm9keTonLCBib2R5KTtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IGJvZHkuY2hhbm5lbE5hbWU7XG4gICAgY29uc3QgY2hhbm5lbENsYWltSWQgPSBib2R5LmNoYW5uZWxDbGFpbUlkO1xuICAgIGNvbnN0IGNsYWltTmFtZSA9IGJvZHkuY2xhaW1OYW1lO1xuICAgIGNvbnN0IGNsYWltSWQgPSBib2R5LmNsYWltSWQ7XG4gICAgZ2V0Q2xhaW1JZChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIGNsYWltTmFtZSwgY2xhaW1JZClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IE5PX0NIQU5ORUwpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnTm8gbWF0Y2hpbmcgY2hhbm5lbCBjb3VsZCBiZSBmb3VuZCd9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0ID09PSBOT19DTEFJTSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdObyBtYXRjaGluZyBjbGFpbSBpZCBjb3VsZCBiZSBmb3VuZCd9KTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0fSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5oYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICB9KTtcbiAgfSk7XG4gIGFwcC5nZXQoJy9hcGkvY2xhaW0vZGF0YS86Y2xhaW1OYW1lLzpjbGFpbUlkJywgKHsgaXAsIG9yaWdpbmFsVXJsLCBib2R5LCBwYXJhbXMgfSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY2xhaW1OYW1lID0gcGFyYW1zLmNsYWltTmFtZTtcbiAgICBsZXQgY2xhaW1JZCA9IHBhcmFtcy5jbGFpbUlkO1xuICAgIGlmIChjbGFpbUlkID09PSAnbm9uZScpIGNsYWltSWQgPSBudWxsO1xuICAgIGRiLkNsYWltLnJlc29sdmVDbGFpbShjbGFpbU5hbWUsIGNsYWltSWQpXG4gICAgICAudGhlbihjbGFpbUluZm8gPT4ge1xuICAgICAgICBpZiAoIWNsYWltSW5mbykge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdObyBjbGFpbSBjb3VsZCBiZSBmb3VuZCd9KTtcbiAgICAgICAgfVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogY2xhaW1JbmZvfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5oYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICB9KTtcbiAgfSk7XG4gIC8vIHJvdXRlIHRvIHNlZSBpZiBhc3NldCBpcyBhdmFpbGFibGUgbG9jYWxseVxuICBhcHAuZ2V0KCcvYXBpL2ZpbGUvYXZhaWxhYmlsaXR5LzpuYW1lLzpjbGFpbUlkJywgKHsgaXAsIG9yaWdpbmFsVXJsLCBwYXJhbXMgfSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHBhcmFtcy5uYW1lO1xuICAgIGNvbnN0IGNsYWltSWQgPSBwYXJhbXMuY2xhaW1JZDtcbiAgICBkYi5GaWxlLmZpbmRPbmUoe3doZXJlOiB7bmFtZSwgY2xhaW1JZH19KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOiB0cnVlLCBkYXRhOiBmYWxzZX0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9ySGFuZGxlcnMuaGFuZGxlRXJyb3JSZXNwb25zZShvcmlnaW5hbFVybCwgaXAsIGVycm9yLCByZXMpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9yb3V0ZXMvYXBpLXJvdXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbXVsdGlwYXJ0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbm5lY3QtbXVsdGlwYXJ0eVwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCBkYiA9IHJlcXVpcmUoJy4uL21vZGVscy9pbmRleCcpO1xuY29uc3QgbGJyeUFwaSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvbGJyeUFwaS5qcycpO1xuY29uc3QgcHVibGlzaEhlbHBlcnMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3B1Ymxpc2hIZWxwZXJzLmpzJyk7XG5jb25zdCB7IHB1Ymxpc2hpbmc6IHsgcHJpbWFyeUNsYWltQWRkcmVzcywgYWRkaXRpb25hbENsYWltQWRkcmVzc2VzIH0gfSA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9zaXRlQ29uZmlnLmpzJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IE9wID0gU2VxdWVsaXplLk9wO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHVibGlzaCAocHVibGlzaFBhcmFtcywgZmlsZU5hbWUsIGZpbGVUeXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBwdWJsaXNoUmVzdWx0cywgY2VydGlmaWNhdGVJZCwgY2hhbm5lbE5hbWU7XG4gICAgICAvLyBwdWJsaXNoIHRoZSBmaWxlXG4gICAgICByZXR1cm4gbGJyeUFwaS5wdWJsaXNoQ2xhaW0ocHVibGlzaFBhcmFtcylcbiAgICAgICAgLnRoZW4odHggPT4ge1xuICAgICAgICAgIGxvZ2dlci5pbmZvKGBTdWNjZXNzZnVsbHkgcHVibGlzaGVkICR7cHVibGlzaFBhcmFtcy5uYW1lfSAke2ZpbGVOYW1lfWAsIHR4KTtcbiAgICAgICAgICBwdWJsaXNoUmVzdWx0cyA9IHR4O1xuICAgICAgICAgIC8vIGdldCB0aGUgY2hhbm5lbCBpbmZvcm1hdGlvblxuICAgICAgICAgIGlmIChwdWJsaXNoUGFyYW1zLmNoYW5uZWxfbmFtZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGB0aGlzIGNsYWltIHdhcyBwdWJsaXNoZWQgaW4gY2hhbm5lbDogJHtwdWJsaXNoUGFyYW1zLmNoYW5uZWxfbmFtZX1gKTtcbiAgICAgICAgICAgIHJldHVybiBkYi5DaGFubmVsLmZpbmRPbmUoe3doZXJlOiB7Y2hhbm5lbE5hbWU6IHB1Ymxpc2hQYXJhbXMuY2hhbm5lbF9uYW1lfX0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ3RoaXMgY2xhaW0gd2FzIG5vdCBwdWJsaXNoZWQgaW4gYSBjaGFubmVsJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNoYW5uZWwgPT4ge1xuICAgICAgICAvLyBzZXQgY2hhbm5lbCBpbmZvcm1hdGlvblxuICAgICAgICAgIGNlcnRpZmljYXRlSWQgPSBudWxsO1xuICAgICAgICAgIGNoYW5uZWxOYW1lID0gbnVsbDtcbiAgICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgY2VydGlmaWNhdGVJZCA9IGNoYW5uZWwuY2hhbm5lbENsYWltSWQ7XG4gICAgICAgICAgICBjaGFubmVsTmFtZSA9IGNoYW5uZWwuY2hhbm5lbE5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgY2VydGlmaWNhdGVJZDogJHtjZXJ0aWZpY2F0ZUlkfWApO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgRmlsZSByZWNvcmRcbiAgICAgICAgICBjb25zdCBmaWxlUmVjb3JkID0ge1xuICAgICAgICAgICAgbmFtZSAgICAgICA6IHB1Ymxpc2hQYXJhbXMubmFtZSxcbiAgICAgICAgICAgIGNsYWltSWQgICAgOiBwdWJsaXNoUmVzdWx0cy5jbGFpbV9pZCxcbiAgICAgICAgICAgIHRpdGxlICAgICAgOiBwdWJsaXNoUGFyYW1zLm1ldGFkYXRhLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHB1Ymxpc2hQYXJhbXMubWV0YWRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhZGRyZXNzICAgIDogcHVibGlzaFBhcmFtcy5jbGFpbV9hZGRyZXNzLFxuICAgICAgICAgICAgb3V0cG9pbnQgICA6IGAke3B1Ymxpc2hSZXN1bHRzLnR4aWR9OiR7cHVibGlzaFJlc3VsdHMubm91dH1gLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICA6IDAsXG4gICAgICAgICAgICBmaWxlTmFtZSxcbiAgICAgICAgICAgIGZpbGVQYXRoICAgOiBwdWJsaXNoUGFyYW1zLmZpbGVfcGF0aCxcbiAgICAgICAgICAgIGZpbGVUeXBlLFxuICAgICAgICAgICAgbnNmdyAgICAgICA6IHB1Ymxpc2hQYXJhbXMubWV0YWRhdGEubnNmdyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgQ2xhaW0gcmVjb3JkXG4gICAgICAgICAgY29uc3QgY2xhaW1SZWNvcmQgPSB7XG4gICAgICAgICAgICBuYW1lICAgICAgIDogcHVibGlzaFBhcmFtcy5uYW1lLFxuICAgICAgICAgICAgY2xhaW1JZCAgICA6IHB1Ymxpc2hSZXN1bHRzLmNsYWltX2lkLFxuICAgICAgICAgICAgdGl0bGUgICAgICA6IHB1Ymxpc2hQYXJhbXMubWV0YWRhdGEudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHVibGlzaFBhcmFtcy5tZXRhZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGFkZHJlc3MgICAgOiBwdWJsaXNoUGFyYW1zLmNsYWltX2FkZHJlc3MsXG4gICAgICAgICAgICB0aHVtYm5haWwgIDogcHVibGlzaFBhcmFtcy5tZXRhZGF0YS50aHVtYm5haWwsXG4gICAgICAgICAgICBvdXRwb2ludCAgIDogYCR7cHVibGlzaFJlc3VsdHMudHhpZH06JHtwdWJsaXNoUmVzdWx0cy5ub3V0fWAsXG4gICAgICAgICAgICBoZWlnaHQgICAgIDogMCxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlVHlwZSxcbiAgICAgICAgICAgIG5zZncgICAgICAgOiBwdWJsaXNoUGFyYW1zLm1ldGFkYXRhLm5zZncsXG4gICAgICAgICAgICBhbW91bnQgICAgIDogcHVibGlzaFBhcmFtcy5iaWQsXG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZUlkLFxuICAgICAgICAgICAgY2hhbm5lbE5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyB1cHNlcnQgY3JpdGVyaWFcbiAgICAgICAgICBjb25zdCB1cHNlcnRDcml0ZXJpYSA9IHtcbiAgICAgICAgICAgIG5hbWUgICA6IHB1Ymxpc2hQYXJhbXMubmFtZSxcbiAgICAgICAgICAgIGNsYWltSWQ6IHB1Ymxpc2hSZXN1bHRzLmNsYWltX2lkLFxuICAgICAgICAgIH07XG4gICAgICAgICAgLy8gdXBzZXJ0IHRoZSByZWNvcmRzXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtkYi51cHNlcnQoZGIuRmlsZSwgZmlsZVJlY29yZCwgdXBzZXJ0Q3JpdGVyaWEsICdGaWxlJyksIGRiLnVwc2VydChkYi5DbGFpbSwgY2xhaW1SZWNvcmQsIHVwc2VydENyaXRlcmlhLCAnQ2xhaW0nKV0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoW2ZpbGUsIGNsYWltXSkgPT4ge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmlsZSBhbmQgQ2xhaW0gcmVjb3JkcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCcpO1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbZmlsZS5zZXRDbGFpbShjbGFpbSksIGNsYWltLnNldEZpbGUoZmlsZSldKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmlsZSBhbmQgQ2xhaW0gcmVjb3JkcyBzdWNjZXNzZnVsbHkgYXNzb2NpYXRlZCcpO1xuICAgICAgICAgIHJlc29sdmUocHVibGlzaFJlc3VsdHMpOyAvLyByZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHJlc3VsdCBmcm9tIGxicnlBcGkucHVibGlzaENsYWltO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGxvZ2dlci5lcnJvcignUFVCTElTSCBFUlJPUicsIGVycm9yKTtcbiAgICAgICAgICBwdWJsaXNoSGVscGVycy5kZWxldGVUZW1wb3JhcnlGaWxlKHB1Ymxpc2hQYXJhbXMuZmlsZV9wYXRoKTsgLy8gZGVsZXRlIHRoZSBsb2NhbCBmaWxlXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNsYWltTmFtZUlzQXZhaWxhYmxlIChuYW1lKSB7XG4gICAgY29uc3QgY2xhaW1BZGRyZXNzZXMgPSBhZGRpdGlvbmFsQ2xhaW1BZGRyZXNzZXMgfHwgW107XG4gICAgY2xhaW1BZGRyZXNzZXMucHVzaChwcmltYXJ5Q2xhaW1BZGRyZXNzKTtcbiAgICAvLyBmaW5kIGFueSByZWNvcmRzIHdoZXJlIHRoZSBuYW1lIGlzIHVzZWRcbiAgICByZXR1cm4gZGIuQ2xhaW1cbiAgICAgIC5maW5kQWxsKHtcbiAgICAgICAgYXR0cmlidXRlczogWydhZGRyZXNzJ10sXG4gICAgICAgIHdoZXJlICAgICA6IHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgIFtPcC5vcl06IGNsYWltQWRkcmVzc2VzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhhdCBjbGFpbSBpcyBhbHJlYWR5IGluIHVzZScpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICB9LFxuICBjaGVja0NoYW5uZWxBdmFpbGFiaWxpdHkgKG5hbWUpIHtcbiAgICByZXR1cm4gZGIuQ2hhbm5lbFxuICAgICAgLmZpbmRBbGwoe1xuICAgICAgICB3aGVyZTogeyBjaGFubmVsTmFtZTogbmFtZSB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoYXQgY2hhbm5lbCBoYXMgYWxyZWFkeSBiZWVuIGNsYWltZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9jb250cm9sbGVycy9wdWJsaXNoQ29udHJvbGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGIgPSByZXF1aXJlKCcuLi9tb2RlbHMnKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGF1dGhlbnRpY2F0ZVVzZXIgKGNoYW5uZWxOYW1lLCBjaGFubmVsSWQsIGNoYW5uZWxQYXNzd29yZCwgdXNlcikge1xuICAgIC8vIGNhc2U6IG5vIGNoYW5uZWxOYW1lIG9yIGNoYW5uZWwgSWQgYXJlIHByb3ZpZGVkIChhbm9ueW1vdXMpLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdXNlciB0b2tlbiBpcyBwcm92aWRlZFxuICAgIGlmICghY2hhbm5lbE5hbWUgJiYgIWNoYW5uZWxJZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hhbm5lbE5hbWUgICA6IG51bGwsXG4gICAgICAgIGNoYW5uZWxDbGFpbUlkOiBudWxsLFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gY2FzZTogY2hhbm5lbE5hbWUgb3IgY2hhbm5lbCBJZCBhcmUgcHJvdmlkZWQgd2l0aCB1c2VyIHRva2VuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGlmIChjaGFubmVsTmFtZSAmJiBjaGFubmVsTmFtZSAhPT0gdXNlci5jaGFubmVsTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBwcm92aWRlZCBjaGFubmVsIG5hbWUgZG9lcyBub3QgbWF0Y2ggdXNlciBjcmVkZW50aWFscycpO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5uZWxJZCAmJiBjaGFubmVsSWQgIT09IHVzZXIuY2hhbm5lbENsYWltSWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgcHJvdmlkZWQgY2hhbm5lbCBpZCBkb2VzIG5vdCBtYXRjaCB1c2VyIGNyZWRlbnRpYWxzJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGFubmVsTmFtZSAgIDogdXNlci5jaGFubmVsTmFtZSxcbiAgICAgICAgY2hhbm5lbENsYWltSWQ6IHVzZXIuY2hhbm5lbENsYWltSWQsXG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBjYXNlOiBjaGFubmVsTmFtZSBvciBjaGFubmVsIElkIGFyZSBwcm92aWRlZCB3aXRoIHBhc3N3b3JkIGluc3RlYWQgb2YgdXNlciB0b2tlblxuICAgIGlmICghY2hhbm5lbFBhc3N3b3JkKSB0aHJvdyBuZXcgRXJyb3IoJ25vIGNoYW5uZWwgcGFzc3dvcmQgcHJvdmlkZWQnKTtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHMuYXV0aGVudGljYXRlQ2hhbm5lbENyZWRlbnRpYWxzKGNoYW5uZWxOYW1lLCBjaGFubmVsSWQsIGNoYW5uZWxQYXNzd29yZCk7XG4gIH0sXG4gIGF1dGhlbnRpY2F0ZUNoYW5uZWxDcmVkZW50aWFscyAoY2hhbm5lbE5hbWUsIGNoYW5uZWxJZCwgdXNlclBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIGhvaXN0ZWQgdmFyaWFibGVzXG4gICAgICBsZXQgY2hhbm5lbERhdGE7XG4gICAgICAvLyBidWlsZCB0aGUgcGFyYW1zIGZvciBmaW5kaW5nIHRoZSBjaGFubmVsXG4gICAgICBsZXQgY2hhbm5lbEZpbmRQYXJhbXMgPSB7fTtcbiAgICAgIGlmIChjaGFubmVsTmFtZSkgY2hhbm5lbEZpbmRQYXJhbXNbJ2NoYW5uZWxOYW1lJ10gPSBjaGFubmVsTmFtZTtcbiAgICAgIGlmIChjaGFubmVsSWQpIGNoYW5uZWxGaW5kUGFyYW1zWydjaGFubmVsQ2xhaW1JZCddID0gY2hhbm5lbElkO1xuICAgICAgLy8gZmluZCB0aGUgY2hhbm5lbFxuICAgICAgZGIuQ2hhbm5lbFxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6IGNoYW5uZWxGaW5kUGFyYW1zLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihjaGFubmVsID0+IHtcbiAgICAgICAgICBpZiAoIWNoYW5uZWwpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1Zygnbm8gY2hhbm5lbCBmb3VuZCcpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQsIHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3MgdG8gdGhhdCBjaGFubmVsJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoYW5uZWxEYXRhID0gY2hhbm5lbC5nZXQoKTtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoJ2NoYW5uZWwgZGF0YTonLCBjaGFubmVsRGF0YSk7XG4gICAgICAgICAgcmV0dXJuIGRiLlVzZXIuZmluZE9uZSh7XG4gICAgICAgICAgICB3aGVyZTogeyB1c2VyTmFtZTogY2hhbm5lbERhdGEuY2hhbm5lbE5hbWUuc3Vic3RyaW5nKDEpIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdubyB1c2VyIGZvdW5kJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCwgeW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0byB0aGF0IGNoYW5uZWwnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHVzZXIuY29tcGFyZVBhc3N3b3JkKHVzZXJQYXNzd29yZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGlzTWF0Y2ggPT4ge1xuICAgICAgICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdpbmNvcnJlY3QgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0aGVudGljYXRpb24gZmFpbGVkLCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoYXQgY2hhbm5lbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2dnZXIuZGVidWcoJy4uLnBhc3N3b3JkIHdhcyBhIG1hdGNoLi4uJyk7XG4gICAgICAgICAgcmVzb2x2ZShjaGFubmVsRGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2F1dGgvYXV0aGVudGljYXRpb24uanMiLCJjb25zdCBDTEFJTVNfUEVSX1BBR0UgPSAxMjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJldHVyblBhZ2luYXRlZENoYW5uZWxDbGFpbXMgKGNoYW5uZWxOYW1lLCBsb25nQ2hhbm5lbENsYWltSWQsIGNsYWltcywgcGFnZSkge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBtb2R1bGUuZXhwb3J0cy5kZXRlcm1pbmVUb3RhbFBhZ2VzKGNsYWltcyk7XG4gICAgY29uc3QgcGFnaW5hdGlvblBhZ2UgPSBtb2R1bGUuZXhwb3J0cy5nZXRQYWdlRnJvbVF1ZXJ5KHBhZ2UpO1xuICAgIGNvbnN0IHZpZXdEYXRhID0ge1xuICAgICAgY2hhbm5lbE5hbWUgICAgICAgOiBjaGFubmVsTmFtZSxcbiAgICAgIGxvbmdDaGFubmVsQ2xhaW1JZDogbG9uZ0NoYW5uZWxDbGFpbUlkLFxuICAgICAgY2xhaW1zICAgICAgICAgICAgOiBtb2R1bGUuZXhwb3J0cy5leHRyYWN0UGFnZUZyb21DbGFpbXMoY2xhaW1zLCBwYWdpbmF0aW9uUGFnZSksXG4gICAgICBwcmV2aW91c1BhZ2UgICAgICA6IG1vZHVsZS5leHBvcnRzLmRldGVybWluZVByZXZpb3VzUGFnZShwYWdpbmF0aW9uUGFnZSksXG4gICAgICBjdXJyZW50UGFnZSAgICAgICA6IHBhZ2luYXRpb25QYWdlLFxuICAgICAgbmV4dFBhZ2UgICAgICAgICAgOiBtb2R1bGUuZXhwb3J0cy5kZXRlcm1pbmVOZXh0UGFnZSh0b3RhbFBhZ2VzLCBwYWdpbmF0aW9uUGFnZSksXG4gICAgICB0b3RhbFBhZ2VzICAgICAgICA6IHRvdGFsUGFnZXMsXG4gICAgICB0b3RhbFJlc3VsdHMgICAgICA6IG1vZHVsZS5leHBvcnRzLmRldGVybWluZVRvdGFsQ2xhaW1zKGNsYWltcyksXG4gICAgfTtcbiAgICByZXR1cm4gdmlld0RhdGE7XG4gIH0sXG4gIGdldFBhZ2VGcm9tUXVlcnkgKHBhZ2UpIHtcbiAgICBpZiAocGFnZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfSxcbiAgZXh0cmFjdFBhZ2VGcm9tQ2xhaW1zIChjbGFpbXMsIHBhZ2VOdW1iZXIpIHtcbiAgICBpZiAoIWNsYWltcykge1xuICAgICAgcmV0dXJuIFtdOyAgLy8gaWYgbm8gY2xhaW1zLCByZXR1cm4gdGhpcyBkZWZhdWx0XG4gICAgfVxuICAgIC8vIGxvZ2dlci5kZWJ1ZygnY2xhaW1zIGlzIGFycmF5PycsIEFycmF5LmlzQXJyYXkoY2xhaW1zKSk7XG4gICAgLy8gbG9nZ2VyLmRlYnVnKGBwYWdlTnVtYmVyICR7cGFnZU51bWJlcn0gaXMgbnVtYmVyP2AsIE51bWJlci5pc0ludGVnZXIocGFnZU51bWJlcikpO1xuICAgIGNvbnN0IGNsYWltU3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBDTEFJTVNfUEVSX1BBR0U7XG4gICAgY29uc3QgY2xhaW1FbmRJbmRleCA9IGNsYWltU3RhcnRJbmRleCArIENMQUlNU19QRVJfUEFHRTtcbiAgICBjb25zdCBwYWdlT2ZDbGFpbXMgPSBjbGFpbXMuc2xpY2UoY2xhaW1TdGFydEluZGV4LCBjbGFpbUVuZEluZGV4KTtcbiAgICByZXR1cm4gcGFnZU9mQ2xhaW1zO1xuICB9LFxuICBkZXRlcm1pbmVUb3RhbFBhZ2VzIChjbGFpbXMpIHtcbiAgICBpZiAoIWNsYWltcykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvdGFsQ2xhaW1zID0gY2xhaW1zLmxlbmd0aDtcbiAgICAgIGlmICh0b3RhbENsYWltcyA8IENMQUlNU19QRVJfUEFHRSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZ1bGxQYWdlcyA9IE1hdGguZmxvb3IodG90YWxDbGFpbXMgLyBDTEFJTVNfUEVSX1BBR0UpO1xuICAgICAgY29uc3QgcmVtYWluZGVyID0gdG90YWxDbGFpbXMgJSBDTEFJTVNfUEVSX1BBR0U7XG4gICAgICBpZiAocmVtYWluZGVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmdWxsUGFnZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVsbFBhZ2VzICsgMTtcbiAgICB9XG4gIH0sXG4gIGRldGVybWluZVByZXZpb3VzUGFnZSAoY3VycmVudFBhZ2UpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFBhZ2UgLSAxO1xuICB9LFxuICBkZXRlcm1pbmVOZXh0UGFnZSAodG90YWxQYWdlcywgY3VycmVudFBhZ2UpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFBhZ2UgKyAxO1xuICB9LFxuICBkZXRlcm1pbmVUb3RhbENsYWltcyAoY2xhaW1zKSB7XG4gICAgaWYgKCFjbGFpbXMpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gY2xhaW1zLmxlbmd0aDtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9jaGFubmVsUGFnaW5hdGlvbi5qcyIsImNvbnN0IHsgZGV0YWlsczogaG9zdCB9ID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3NpdGVDb25maWcuanMnKTtcbmNvbnN0IGhhbmRsZVBhZ2VSZW5kZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2hhbmRsZVBhZ2VSZW5kZXIuanN4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGFwcCkgPT4ge1xuICAvLyByb3V0ZSBmb3IgdGhlIGhvbWUgcGFnZVxuICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgaGFuZGxlUGFnZVJlbmRlcihyZXEsIHJlcyk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBkaXNwbGF5IGxvZ2luIHBhZ2VcbiAgYXBwLmdldCgnL2xvZ2luJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgaGFuZGxlUGFnZVJlbmRlcihyZXEsIHJlcyk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBzaG93ICdhYm91dCcgcGFnZVxuICBhcHAuZ2V0KCcvYWJvdXQnLCAocmVxLCByZXMpID0+IHtcbiAgICBoYW5kbGVQYWdlUmVuZGVyKHJlcSwgcmVzKTtcbiAgfSk7XG4gIC8vIHJvdXRlIHRvIGRpc3BsYXkgYSBsaXN0IG9mIHRoZSB0cmVuZGluZyBpbWFnZXNcbiAgYXBwLmdldCgnL3RyZW5kaW5nJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cygzMDEpLnJlZGlyZWN0KCcvcG9wdWxhcicpO1xuICB9KTtcbiAgYXBwLmdldCgnL3BvcHVsYXInLCAocmVxLCByZXMpID0+IHtcbiAgICBoYW5kbGVQYWdlUmVuZGVyKHJlcSwgcmVzKTtcbiAgfSk7XG4gIC8vIHJvdXRlIHRvIGRpc3BsYXkgYSBsaXN0IG9mIHRoZSB0cmVuZGluZyBpbWFnZXNcbiAgYXBwLmdldCgnL25ldycsIChyZXEsIHJlcykgPT4ge1xuICAgIGhhbmRsZVBhZ2VSZW5kZXIocmVxLCByZXMpO1xuICB9KTtcbiAgLy8gcm91dGUgdG8gc2VuZCBlbWJlZGFibGUgdmlkZW8gcGxheWVyIChmb3IgdHdpdHRlcilcbiAgYXBwLmdldCgnL2VtYmVkLzpjbGFpbUlkLzpuYW1lJywgKHsgcGFyYW1zIH0sIHJlcykgPT4ge1xuICAgIGNvbnN0IGNsYWltSWQgPSBwYXJhbXMuY2xhaW1JZDtcbiAgICBjb25zdCBuYW1lID0gcGFyYW1zLm5hbWU7XG4gICAgLy8gZ2V0IGFuZCByZW5kZXIgdGhlIGNvbnRlbnRcbiAgICByZXMuc3RhdHVzKDIwMCkucmVuZGVyKCdlbWJlZCcsIHsgbGF5b3V0OiAnZW1iZWQnLCBob3N0LCBjbGFpbUlkLCBuYW1lIH0pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvcm91dGVzL3BhZ2Utcm91dGVzLmpzIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdjb25zdGFudHMvcHVibGlzaF9hY3Rpb25fdHlwZXMnO1xuaW1wb3J0IHsgTE9HSU4gfSBmcm9tICdjb25zdGFudHMvcHVibGlzaF9jaGFubmVsX3NlbGVjdF9zdGF0ZXMnO1xuY29uc3QgeyBwdWJsaXNoaW5nIH0gPSByZXF1aXJlKCcuLi8uLi9jb25maWcvc2l0ZUNvbmZpZy5qcycpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRpc2FibGVkICAgICAgICAgIDogcHVibGlzaGluZy5kaXNhYmxlZCxcbiAgZGlzYWJsZWRNZXNzYWdlICAgOiBwdWJsaXNoaW5nLmRpc2FibGVkTWVzc2FnZSxcbiAgcHVibGlzaEluQ2hhbm5lbCAgOiBmYWxzZSxcbiAgc2VsZWN0ZWRDaGFubmVsICAgOiBMT0dJTixcbiAgc2hvd01ldGFkYXRhSW5wdXRzOiBmYWxzZSxcbiAgc3RhdHVzICAgICAgICAgICAgOiB7XG4gICAgc3RhdHVzIDogbnVsbCxcbiAgICBtZXNzYWdlOiBudWxsLFxuICB9LFxuICBlcnJvcjoge1xuICAgIGZpbGUgICAgICAgICA6IG51bGwsXG4gICAgdXJsICAgICAgICAgIDogbnVsbCxcbiAgICBjaGFubmVsICAgICAgOiBudWxsLFxuICAgIHB1Ymxpc2hTdWJtaXQ6IG51bGwsXG4gIH0sXG4gIGZpbGUgICAgOiBudWxsLFxuICBjbGFpbSAgIDogJycsXG4gIG1ldGFkYXRhOiB7XG4gICAgdGl0bGUgICAgICA6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBsaWNlbnNlICAgIDogJycsXG4gICAgbnNmdyAgICAgICA6IGZhbHNlLFxuICB9LFxuICB0aHVtYm5haWw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLkZJTEVfU0VMRUNURUQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLCB7ICAvLyBub3RlOiBjbGVhcnMgdG8gaW5pdGlhbCBzdGF0ZVxuICAgICAgICBmaWxlOiBhY3Rpb24uZGF0YSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYWN0aW9ucy5GSUxFX0NMRUFSOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBjYXNlIGFjdGlvbnMuTUVUQURBVEFfVVBEQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1ldGFkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5tZXRhZGF0YSwge1xuICAgICAgICAgIFthY3Rpb24uZGF0YS5uYW1lXTogYWN0aW9uLmRhdGEudmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgY2FzZSBhY3Rpb25zLkNMQUlNX1VQREFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjbGFpbTogYWN0aW9uLmRhdGEsXG4gICAgICB9KTtcbiAgICBjYXNlIGFjdGlvbnMuU0VUX1BVQkxJU0hfSU5fQ0hBTk5FTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBwdWJsaXNoSW5DaGFubmVsOiBhY3Rpb24uY2hhbm5lbCxcbiAgICAgIH0pO1xuICAgIGNhc2UgYWN0aW9ucy5QVUJMSVNIX1NUQVRVU19VUERBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhdHVzOiBhY3Rpb24uZGF0YSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYWN0aW9ucy5FUlJPUl9VUERBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZXJyb3I6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmVycm9yLCB7XG4gICAgICAgICAgW2FjdGlvbi5kYXRhLm5hbWVdOiBhY3Rpb24uZGF0YS52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICBjYXNlIGFjdGlvbnMuU0VMRUNURURfQ0hBTk5FTF9VUERBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsOiBhY3Rpb24uZGF0YSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYWN0aW9ucy5UT0dHTEVfTUVUQURBVEFfSU5QVVRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dNZXRhZGF0YUlucHV0czogYWN0aW9uLmRhdGEsXG4gICAgICB9KTtcbiAgICBjYXNlIGFjdGlvbnMuVEhVTUJOQUlMX05FVzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB0aHVtYm5haWw6IGFjdGlvbi5kYXRhLFxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL3B1Ymxpc2guanMiLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9nZ2VkSW5DaGFubmVsOiB7XG4gICAgbmFtZSAgIDogbnVsbCxcbiAgICBzaG9ydElkOiBudWxsLFxuICAgIGxvbmdJZCA6IG51bGwsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLkNIQU5ORUxfVVBEQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGxvZ2dlZEluQ2hhbm5lbDogYWN0aW9uLmRhdGEsXG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcmVkdWNlcnMvY2hhbm5lbC5qcyIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnY29uc3RhbnRzL3Nob3dfYWN0aW9uX3R5cGVzJztcbmltcG9ydCB7IExPQ0FMX0NIRUNLLCBFUlJPUiB9IGZyb20gJ2NvbnN0YW50cy9hc3NldF9kaXNwbGF5X3N0YXRlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcmVxdWVzdDoge1xuICAgIGVycm9yOiBudWxsLFxuICAgIHR5cGUgOiBudWxsLFxuICAgIGlkICAgOiBudWxsLFxuICB9LFxuICByZXF1ZXN0TGlzdCA6IHt9LFxuICBjaGFubmVsTGlzdCA6IHt9LFxuICBhc3NldExpc3QgICA6IHt9LFxuICBkaXNwbGF5QXNzZXQ6IHtcbiAgICBlcnJvciA6IG51bGwsXG4gICAgc3RhdHVzOiBMT0NBTF9DSEVDSyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvLyBoYW5kbGUgcmVxdWVzdFxuICAgIGNhc2UgYWN0aW9ucy5SRVFVRVNUX0VSUk9SOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHJlcXVlc3Q6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgY2FzZSBhY3Rpb25zLlJFUVVFU1RfVVBEQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHJlcXVlc3Q6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlcXVlc3QsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24uZGF0YS5yZXF1ZXN0VHlwZSxcbiAgICAgICAgICBpZCAgOiBhY3Rpb24uZGF0YS5yZXF1ZXN0SWQsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgLy8gc3RvcmUgcmVxdWVzdHNcbiAgICBjYXNlIGFjdGlvbnMuUkVRVUVTVF9MSVNUX0FERDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICByZXF1ZXN0TGlzdDogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVxdWVzdExpc3QsIHtcbiAgICAgICAgICBbYWN0aW9uLmRhdGEuaWRdOiB7XG4gICAgICAgICAgICBlcnJvcjogYWN0aW9uLmRhdGEuZXJyb3IsXG4gICAgICAgICAgICBrZXkgIDogYWN0aW9uLmRhdGEua2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgLy8gYXNzZXQgZGF0YVxuICAgIGNhc2UgYWN0aW9ucy5BU1NFVF9BREQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgYXNzZXRMaXN0OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hc3NldExpc3QsIHtcbiAgICAgICAgICBbYWN0aW9uLmRhdGEuaWRdOiB7XG4gICAgICAgICAgICBlcnJvciAgICA6IGFjdGlvbi5kYXRhLmVycm9yLFxuICAgICAgICAgICAgbmFtZSAgICAgOiBhY3Rpb24uZGF0YS5uYW1lLFxuICAgICAgICAgICAgY2xhaW1JZCAgOiBhY3Rpb24uZGF0YS5jbGFpbUlkLFxuICAgICAgICAgICAgc2hvcnRJZCAgOiBhY3Rpb24uZGF0YS5zaG9ydElkLFxuICAgICAgICAgICAgY2xhaW1EYXRhOiBhY3Rpb24uZGF0YS5jbGFpbURhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAvLyBjaGFubmVsIGRhdGFcbiAgICBjYXNlIGFjdGlvbnMuQ0hBTk5FTF9BREQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY2hhbm5lbExpc3Q6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmNoYW5uZWxMaXN0LCB7XG4gICAgICAgICAgW2FjdGlvbi5kYXRhLmlkXToge1xuICAgICAgICAgICAgbmFtZSAgICAgIDogYWN0aW9uLmRhdGEubmFtZSxcbiAgICAgICAgICAgIGxvbmdJZCAgICA6IGFjdGlvbi5kYXRhLmxvbmdJZCxcbiAgICAgICAgICAgIHNob3J0SWQgICA6IGFjdGlvbi5kYXRhLnNob3J0SWQsXG4gICAgICAgICAgICBjbGFpbXNEYXRhOiBhY3Rpb24uZGF0YS5jbGFpbXNEYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgY2FzZSBhY3Rpb25zLkNIQU5ORUxfQ0xBSU1TX1VQREFURV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNoYW5uZWxMaXN0OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5jaGFubmVsTGlzdCwge1xuICAgICAgICAgIFthY3Rpb24uZGF0YS5jaGFubmVsTGlzdElkXTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuY2hhbm5lbExpc3RbYWN0aW9uLmRhdGEuY2hhbm5lbExpc3RJZF0sIHtcbiAgICAgICAgICAgIGNsYWltc0RhdGE6IGFjdGlvbi5kYXRhLmNsYWltc0RhdGEsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgLy8gZGlzcGxheSBhbiBhc3NldFxuICAgIGNhc2UgYWN0aW9ucy5GSUxFX0FWQUlMQUJJTElUWV9VUERBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGlzcGxheUFzc2V0OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5kaXNwbGF5QXNzZXQsIHtcbiAgICAgICAgICBzdGF0dXM6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYWN0aW9ucy5ESVNQTEFZX0FTU0VUX0VSUk9SOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRpc3BsYXlBc3NldDogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGlzcGxheUFzc2V0LCB7XG4gICAgICAgICAgZXJyb3IgOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgICBzdGF0dXM6IEVSUk9SLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9zaG93LmpzIiwiY29uc3Qgc2l0ZUNvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9zaXRlQ29uZmlnLmpzJyk7XG5cbmNvbnN0IHtcbiAgYW5hbHl0aWNzOiB7XG4gICAgZ29vZ2xlSWQ6IGdvb2dsZUFuYWx5dGljc0lkLFxuICB9LFxuICBhc3NldERlZmF1bHRzOiB7XG4gICAgdGh1bWJuYWlsOiBkZWZhdWx0VGh1bWJuYWlsLFxuICAgIGRlc2NyaXB0aW9uOiBkZWZhdWx0RGVzY3JpcHRpb24sXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgICBob3N0LFxuICAgIHRpdGxlLFxuICAgIHR3aXR0ZXIsXG4gIH0sXG59ID0gc2l0ZUNvbmZpZztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkZXNjcmlwdGlvbixcbiAgZ29vZ2xlQW5hbHl0aWNzSWQsXG4gIGhvc3QsXG4gIHRpdGxlLFxuICB0d2l0dGVyLFxuICBkZWZhdWx0RGVzY3JpcHRpb24sXG4gIGRlZmF1bHRUaHVtYm5haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL3NpdGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWdhXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgY3VzdG9tQ29tcG9uZW50cyB9ID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3NpdGVDb25maWcuanMnKTtcblxuZnVuY3Rpb24gZ2V0RGVlcGVzdENoaWxkVmFsdWUgKHBhcmVudCwgY2hpbGRyZW5LZXlzKSB7XG4gIGxldCBjaGlsZEtleSA9IGNoaWxkcmVuS2V5cy5zaGlmdCgpOyAvLyAuc2hpZnQoKSByZXRyaWV2ZXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgYW5kIHJlbW92ZXMgaXQgZnJvbSBhcnJheVxuICBsZXQgY2hpbGQgPSBwYXJlbnRbY2hpbGRLZXldO1xuICBpZiAoY2hpbGRyZW5LZXlzLmxlbmd0aCA+PSAxKSB7XG4gICAgcmV0dXJuIGdldERlZXBlc3RDaGlsZFZhbHVlKGNoaWxkLCBjaGlsZHJlbktleXMpO1xuICB9XG4gIHJldHVybiBjaGlsZDtcbn1cblxuZXhwb3J0IGNvbnN0IGltcG9ydEN1c3RvbUNvbXBvbmVudCA9IChmaWxlUGF0aCkgPT4ge1xuICAvLyB2YWxpZGF0ZSBpbnB1dHNcbiAgaWYgKCFmaWxlUGF0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbm8gZmlsZSBwYXRoIHByb3ZpZGVkIHRvIGR5bmFtaWNJbXBvcnQoKScpO1xuICB9XG4gIGlmICh0eXBlb2YgZmlsZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS5sb2coJ2R5bmFtaWNJbXBvcnQgPiBmaWxlUGF0aDonLCBmaWxlUGF0aCk7XG4gICAgY29uc29sZS5sb2coJ2R5bmFtaWNJbXBvcnQgPiBmaWxlUGF0aCB0eXBlOicsIHR5cGVvZiBmaWxlUGF0aCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmaWxlIHBhdGggcHJvdmlkZWQgdG8gZHluYW1pY0ltcG9ydCgpIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuICBpZiAoIWN1c3RvbUNvbXBvbmVudHMpIHtcbiAgICBjb25zb2xlLmxvZygnbm8gY3VzdG9tIGNvbXBvbmVudHMgY29uZmlnIHByb3ZpZGVkJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gc3BsaXQgb3V0IHRoZSBmaWxlIGZvbGRlcnMgIC8vIGZpbHRlciBvdXQgYW55IGVtcHR5IG9yIHdoaXRlLXNwYWNlLW9ubHkgc3RyaW5nc1xuICBjb25zdCBmb2xkZXJzID0gZmlsZVBhdGguc3BsaXQoJy8nKS5maWx0ZXIoZm9sZGVyTmFtZSA9PiBmb2xkZXJOYW1lLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoKTtcbiAgLy8gY2hlY2sgZm9yIHRoZSBjb21wb25lbnQgY29ycmVzcG9uZGluZyB0byBmaWxlIHBhdGggaW4gdGhlIHNpdGUgY29uZmlnIG9iamVjdFxuICAvLyBpLmUuIGN1c3RvbUNvbXBvbmVudHNbZm9sZGVyc1swXV1bZm9sZGVyc1syXVsuLi5dW2ZvbGRlcnNbbl1dXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldERlZXBlc3RDaGlsZFZhbHVlKGN1c3RvbUNvbXBvbmVudHMsIGZvbGRlcnMpO1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2ZvdW5kIGN1c3RvbSBjb21wb25lbnQgZm9yJywgZmlsZVBhdGgpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ25vIGN1c3RvbSBjb21wb25lbnQgZm91bmQgZm9yJywgZmlsZVBhdGgpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL2R5bmFtaWNJbXBvcnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL1NFTyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ2NvbnRhaW5lcnMvTmF2QmFyJztcbmltcG9ydCBQdWJsaXNoVG9vbCBmcm9tICdjb250YWluZXJzL1B1Ymxpc2hUb29sJztcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J3JvdyByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbid9PlxuICAgICAgICA8U0VPIC8+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgcm93LS10YWxsIHJvdy0tcGFkZGVkIGZsZXgtY29udGFpbmVyLS1jb2x1bW4nfT5cbiAgICAgICAgICA8UHVibGlzaFRvb2wgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9Ib21lUGFnZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgY3JlYXRlUGFnZVRpdGxlIH0gZnJvbSAndXRpbHMvcGFnZVRpdGxlJztcbmltcG9ydCB7IGNyZWF0ZU1ldGFUYWdzIH0gZnJvbSAndXRpbHMvbWV0YVRhZ3MnO1xuaW1wb3J0IHsgY3JlYXRlQ2Fub25pY2FsTGluayB9IGZyb20gJ3V0aWxzL2Nhbm9uaWNhbExpbmsnO1xuXG5jbGFzcyBTRU8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIC8vIHByb3BzIGZyb20gc3RhdGVcbiAgICBjb25zdCB7IGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCwgc2l0ZURlc2NyaXB0aW9uLCBzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBwcm9wcyBmcm9tIHBhcmVudFxuICAgIGNvbnN0IHsgYXNzZXQsIGNoYW5uZWwsIHBhZ2VVcmkgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgcGFnZVRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGNyZWF0ZSBwYWdlIHRpdGxlLCB0YWdzLCBhbmQgY2Fub25pY2FsIGxpbmtcbiAgICBwYWdlVGl0bGUgPSBjcmVhdGVQYWdlVGl0bGUoc2l0ZVRpdGxlLCBwYWdlVGl0bGUpO1xuICAgIGNvbnN0IG1ldGFUYWdzID0gY3JlYXRlTWV0YVRhZ3Moc2l0ZURlc2NyaXB0aW9uLCBzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciwgYXNzZXQsIGNoYW5uZWwsIGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCk7XG4gICAgY29uc3QgY2Fub25pY2FsTGluayA9IGNyZWF0ZUNhbm9uaWNhbExpbmsoYXNzZXQsIGNoYW5uZWwsIHBhZ2VVcmksIHNpdGVIb3N0KTtcbiAgICAvLyByZW5kZXIgcmVzdWx0c1xuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0XG4gICAgICAgIHRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgIG1ldGE9e21ldGFUYWdzfVxuICAgICAgICBsaW5rPXtbe3JlbDogJ2Nhbm9uaWNhbCcsIGhyZWY6IGNhbm9uaWNhbExpbmt9XX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcblxuU0VPLnByb3BUeXBlcyA9IHtcbiAgcGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYWdlVXJpICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYW5uZWwgIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgYXNzZXQgICAgOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0VPO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU0VPL3ZpZXcuanN4IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVBhZ2VUaXRsZSA9IChzaXRlVGl0bGUsIHBhZ2VUaXRsZSkgPT4ge1xuICBpZiAoIXBhZ2VUaXRsZSkge1xuICAgIHJldHVybiBgJHtzaXRlVGl0bGV9YDtcbiAgfVxuICByZXR1cm4gYCR7c2l0ZVRpdGxlfSAtICR7cGFnZVRpdGxlfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL3BhZ2VUaXRsZS5qcyIsImNvbnN0IGRldGVybWluZU9nVGh1bWJuYWlsQ29udGVudFR5cGUgPSAodGh1bWJuYWlsKSA9PiB7XG4gIGlmICh0aHVtYm5haWwpIHtcbiAgICBjb25zdCBmaWxlRXh0ID0gdGh1bWJuYWlsLnN1YnN0cmluZyh0aHVtYm5haWwubGFzdEluZGV4T2YoJy4nKSk7XG4gICAgc3dpdGNoIChmaWxlRXh0KSB7XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgIHJldHVybiAnaW1hZ2UvanBlZyc7XG4gICAgICBjYXNlICdwbmcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL3BuZyc7XG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2dpZic7XG4gICAgICBjYXNlICdtcDQnOlxuICAgICAgICByZXR1cm4gJ3ZpZGVvL21wNCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2pwZWcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBjcmVhdGVCYXNpY01ldGFUYWdzID0gKHNpdGVIb3N0LCBzaXRlRGVzY3JpcHRpb24sIHNpdGVUaXRsZSwgc2l0ZVR3aXR0ZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogc2l0ZUhvc3R9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBzaXRlRGVzY3JpcHRpb259LFxuICAgIHtwcm9wZXJ0eTogJ3R3aXR0ZXI6c2l0ZScsIGNvbnRlbnQ6IHNpdGVUd2l0dGVyfSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeSd9LFxuICBdO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbm5lbE1ldGFUYWdzID0gKHNpdGVUaXRsZSwgc2l0ZUhvc3QsIHNpdGVUd2l0dGVyLCBjaGFubmVsKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9uZ0lkIH0gPSBjaGFubmVsO1xuICByZXR1cm4gW1xuICAgIHtwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogYCR7bmFtZX0gb24gJHtzaXRlVGl0bGV9YH0sXG4gICAge3Byb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogYCR7c2l0ZUhvc3R9LyR7bmFtZX06JHtsb25nSWR9YH0sXG4gICAge3Byb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJywgY29udGVudDogc2l0ZVRpdGxlfSxcbiAgICB7cHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGAke25hbWV9LCBhIGNoYW5uZWwgb24gJHtzaXRlVGl0bGV9YH0sXG4gICAge3Byb3BlcnR5OiAndHdpdHRlcjpzaXRlJywgY29udGVudDogc2l0ZVR3aXR0ZXJ9LFxuICAgIHtwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6ICdzdW1tYXJ5J30sXG4gIF07XG59O1xuXG5jb25zdCBjcmVhdGVBc3NldE1ldGFUYWdzID0gKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKSA9PiB7XG4gIGNvbnN0IHsgY2xhaW1EYXRhIH0gPSBhc3NldDtcbiAgY29uc3QgeyBjb250ZW50VHlwZSB9ID0gY2xhaW1EYXRhO1xuICBjb25zdCBlbWJlZFVybCA9IGAke3NpdGVIb3N0fS8ke2NsYWltRGF0YS5jbGFpbUlkfS8ke2NsYWltRGF0YS5uYW1lfWA7XG4gIGNvbnN0IHNob3dVcmwgPSBgJHtzaXRlSG9zdH0vJHtjbGFpbURhdGEuY2xhaW1JZH0vJHtjbGFpbURhdGEubmFtZX1gO1xuICBjb25zdCBzb3VyY2UgPSBgJHtzaXRlSG9zdH0vJHtjbGFpbURhdGEuY2xhaW1JZH0vJHtjbGFpbURhdGEubmFtZX0uJHtjbGFpbURhdGEuZmlsZUV4dH1gO1xuICBjb25zdCBvZ1RpdGxlID0gY2xhaW1EYXRhLnRpdGxlIHx8IGNsYWltRGF0YS5uYW1lO1xuICBjb25zdCBvZ0Rlc2NyaXB0aW9uID0gY2xhaW1EYXRhLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbjtcbiAgY29uc3Qgb2dUaHVtYm5haWxDb250ZW50VHlwZSA9IGRldGVybWluZU9nVGh1bWJuYWlsQ29udGVudFR5cGUoY2xhaW1EYXRhLnRodW1ibmFpbCk7XG4gIGNvbnN0IG9nVGh1bWJuYWlsID0gY2xhaW1EYXRhLnRodW1ibmFpbCB8fCBkZWZhdWx0VGh1bWJuYWlsO1xuICBjb25zdCBtZXRhVGFncyA9IFtcbiAgICB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IG9nVGl0bGV9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHNob3dVcmx9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBvZ0Rlc2NyaXB0aW9ufSxcbiAgICB7cHJvcGVydHk6ICdvZzppbWFnZTp3aWR0aCcsIGNvbnRlbnQ6IDYwMH0sXG4gICAge3Byb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogMzE1fSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOnNpdGUnLCBjb250ZW50OiBzaXRlVHdpdHRlcn0sXG4gIF07XG4gIGlmIChjb250ZW50VHlwZSA9PT0gJ3ZpZGVvL21wNCcgfHwgY29udGVudFR5cGUgPT09ICd2aWRlby93ZWJtJykge1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6dmlkZW8nLCBjb250ZW50OiBzb3VyY2V9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnZpZGVvOnNlY3VyZV91cmwnLCBjb250ZW50OiBzb3VyY2V9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnZpZGVvOnR5cGUnLCBjb250ZW50OiBjb250ZW50VHlwZX0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBvZ1RodW1ibmFpbH0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6aW1hZ2U6dHlwZScsIGNvbnRlbnQ6IG9nVGh1bWJuYWlsQ29udGVudFR5cGV9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAndmlkZW8nfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAncGxheWVyJ30pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXInLCBjb250ZW50OiBlbWJlZFVybH0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXI6d2lkdGgnLCBjb250ZW50OiA2MDB9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6dGV4dDpwbGF5ZXJfd2lkdGgnLCBjb250ZW50OiA2MDB9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6cGxheWVyOmhlaWdodCcsIGNvbnRlbnQ6IDMzN30pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXI6c3RyZWFtJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOnBsYXllcjpzdHJlYW06Y29udGVudF90eXBlJywgY29udGVudDogY29udGVudFR5cGV9KTtcbiAgfSBlbHNlIHtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzppbWFnZTp0eXBlJywgY29udGVudDogY29udGVudFR5cGV9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnYXJ0aWNsZSd9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJ30pO1xuICB9XG4gIHJldHVybiBtZXRhVGFncztcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZXRhVGFncyA9IChzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgY2hhbm5lbCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKSA9PiB7XG4gIGlmIChhc3NldCkge1xuICAgIHJldHVybiBjcmVhdGVBc3NldE1ldGFUYWdzKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKTtcbiAgfTtcbiAgaWYgKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhbm5lbE1ldGFUYWdzKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBjaGFubmVsKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUJhc2ljTWV0YVRhZ3Moc2l0ZURlc2NyaXB0aW9uLCBzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL21ldGFUYWdzLmpzIiwiY29uc3QgY3JlYXRlQmFzaWNDYW5vbmljYWxMaW5rID0gKHBhZ2UsIHNpdGVIb3N0KSA9PiB7XG4gIHJldHVybiBgJHtzaXRlSG9zdH0vJHtwYWdlfWA7XG59O1xuXG5jb25zdCBjcmVhdGVBc3NldENhbm9uaWNhbExpbmsgPSAoYXNzZXQsIHNpdGVIb3N0KSA9PiB7XG4gIGxldCBjaGFubmVsTmFtZSwgY2VydGlmaWNhdGVJZCwgbmFtZSwgY2xhaW1JZDtcbiAgaWYgKGFzc2V0LmNsYWltRGF0YSkge1xuICAgICh7IGNoYW5uZWxOYW1lLCBjZXJ0aWZpY2F0ZUlkLCBuYW1lLCBjbGFpbUlkIH0gPSBhc3NldC5jbGFpbURhdGEpO1xuICB9O1xuICBpZiAoY2hhbm5lbE5hbWUpIHtcbiAgICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7Y2hhbm5lbE5hbWV9OiR7Y2VydGlmaWNhdGVJZH0vJHtuYW1lfWA7XG4gIH07XG4gIHJldHVybiBgJHtzaXRlSG9zdH0vJHtjbGFpbUlkfS8ke25hbWV9YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYW5uZWxDYW5vbmljYWxMaW5rID0gKGNoYW5uZWwsIHNpdGVIb3N0KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9uZ0lkIH0gPSBjaGFubmVsO1xuICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7bmFtZX06JHtsb25nSWR9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW5vbmljYWxMaW5rID0gKGFzc2V0LCBjaGFubmVsLCBwYWdlLCBzaXRlSG9zdCkgPT4ge1xuICBpZiAoYXNzZXQpIHtcbiAgICByZXR1cm4gY3JlYXRlQXNzZXRDYW5vbmljYWxMaW5rKGFzc2V0LCBzaXRlSG9zdCk7XG4gIH1cbiAgaWYgKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhbm5lbENhbm9uaWNhbExpbmsoY2hhbm5lbCwgc2l0ZUhvc3QpO1xuICB9XG4gIHJldHVybiBjcmVhdGVCYXNpY0Nhbm9uaWNhbExpbmsocGFnZSwgc2l0ZUhvc3QpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9jYW5vbmljYWxMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nbyc7XG5pbXBvcnQgTmF2QmFyQ2hhbm5lbERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICd1dGlscy9yZXF1ZXN0JztcblxuY29uc3QgVklFVyA9ICdWSUVXJztcbmNvbnN0IExPR09VVCA9ICdMT0dPVVQnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jaGVja0ZvckxvZ2dlZEluVXNlciA9IHRoaXMuY2hlY2tGb3JMb2dnZWRJblVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ291dFVzZXIgPSB0aGlzLmxvZ291dFVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpblxuICAgIHRoaXMuY2hlY2tGb3JMb2dnZWRJblVzZXIoKTtcbiAgfVxuICBjaGVja0ZvckxvZ2dlZEluVXNlciAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9O1xuICAgIHJlcXVlc3QoJy91c2VyJywgcGFyYW1zKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9naW4oZGF0YS5jaGFubmVsTmFtZSwgZGF0YS5zaG9ydENoYW5uZWxJZCwgZGF0YS5jaGFubmVsQ2xhaW1JZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy91c2VyIGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgbG9nb3V0VXNlciAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9O1xuICAgIHJlcXVlc3QoJy9sb2dvdXQnLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9nb3V0KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy9sb2dvdXQgZXJyb3InLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG4gIGhhbmRsZVNlbGVjdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnNbMF0udmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBMT0dPVVQ6XG4gICAgICAgIHRoaXMubG9nb3V0VXNlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVklFVzpcbiAgICAgICAgLy8gcmVkaXJlY3QgdG8gY2hhbm5lbCBwYWdlXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0aGlzLnByb3BzLmNoYW5uZWxOYW1lfToke3RoaXMucHJvcHMuY2hhbm5lbExvbmdJZH1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHNpdGVEZXNjcmlwdGlvbiB9ID0gIHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS13aWRlIG5hdi1iYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0tc2hvcnQgZmxleC1jb250YWluZXItLXJvdyBmbGV4LWNvbnRhaW5lci0tc3BhY2UtYmV0d2Vlbi1jZW50ZXInPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1iYXItLWNlbnRlcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdi1iYXItdGFnbGluZSc+e3NpdGVEZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1iYXItLXJpZ2h0Jz5cbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgYWN0aXZlQ2xhc3NOYW1lPSdsaW5rLS1uYXYtYWN0aXZlJyB0bz0nLycgZXhhY3Q+UHVibGlzaDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgIGFjdGl2ZUNsYXNzTmFtZT0nbGluay0tbmF2LWFjdGl2ZScgdG89Jy9hYm91dCc+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hhbm5lbE5hbWUgPyAoXG4gICAgICAgICAgICAgIDxOYXZCYXJDaGFubmVsRHJvcGRvd25cbiAgICAgICAgICAgICAgICBjaGFubmVsTmFtZT17dGhpcy5wcm9wcy5jaGFubmVsTmFtZX1cbiAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e3RoaXMuaGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3Rpb249e3RoaXMucHJvcHMuY2hhbm5lbE5hbWV9XG4gICAgICAgICAgICAgICAgVklFVz17VklFV31cbiAgICAgICAgICAgICAgICBMT0dPVVQ9e0xPR09VVH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGlkPSduYXYtYmFyLWxvZ2luLWxpbmsnIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgYWN0aXZlQ2xhc3NOYW1lPSdsaW5rLS1uYXYtYWN0aXZlJyB0bz0nL2xvZ2luJz5DaGFubmVsPC9OYXZMaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2QmFyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL05hdkJhci92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmZ1bmN0aW9uIExvZ28gKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgdmVyc2lvbj0nMS4xJyBpZD0nTGF5ZXJfMScgeD0nMHB4JyB5PScwcHgnIGhlaWdodD0nMjRweCcgdmlld0JveD0nMCAwIDgwIDMxJyBlbmFibGVCYWNrZ3JvdW5kPSduZXcgMCAwIDgwIDMxJyBjbGFzc05hbWU9J25hdi1iYXItbG9nbyc+XG4gICAgICA8TGluayB0bz0nLyc+XG4gICAgICAgIDx0aXRsZT5Mb2dvPC90aXRsZT5cbiAgICAgICAgPGRlc2M+U3BlZS5jaCBsb2dvPC9kZXNjPlxuICAgICAgICA8ZyBpZD0nQWJvdXQnPlxuICAgICAgICAgIDxnIGlkPSdQdWJsaXNoLUZvcm0tVjItX3gyOF9maWxsZWRfeDI5XycgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTQyLjAwMDAwMCwgLTIzLjAwMDAwMCknPlxuICAgICAgICAgICAgPGcgaWQ9J0dyb3VwLTE3JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg0Mi4wMDAwMDAsIDIyLjAwMDAwMCknPlxuICAgICAgICAgICAgICA8dGV4dCB0cmFuc2Zvcm09J21hdHJpeCgxIDAgMCAxIDAgMjApJyBmb250U2l6ZT0nMjUnIGZvbnRGYW1pbHk9J1JvYm90byc+U3BlZSZsdDtoPC90ZXh0PlxuICAgICAgICAgICAgICA8ZyBpZD0nR3JvdXAtMTYnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuMDAwMDAwLCAzMC4wMDAwMDApJz5cbiAgICAgICAgICAgICAgICA8cGF0aCBpZD0nTGluZS04JyBmaWxsPSdub25lJyBzdHJva2U9JyMwOUY5MTEnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J00wLjUsMS41aDE1JyAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgtQ29weScgZmlsbD0nbm9uZScgc3Ryb2tlPScjMDI5RDc0JyBzdHJva2VXaWR0aD0nMScgc3Ryb2tlTGluZWNhcD0nc3F1YXJlJyBkPSdNMTYuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9J0xpbmUtOC1Db3B5LTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI0UzNUJEOCcgc3Ryb2tlV2lkdGg9JzEnIHN0cm9rZUxpbmVjYXA9J3NxdWFyZScgZD0nTTMyLjUsMS41aDE1JyAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgtQ29weS0zJyBmaWxsPSdub25lJyBzdHJva2U9JyM0MTU2QzUnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J000OC41LDEuNWgxNScgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBpZD0nTGluZS04LUNvcHktNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjNjM1Njg4JyBzdHJva2VXaWR0aD0nMScgc3Ryb2tlTGluZWNhcD0nc3F1YXJlJyBkPSdNNjQuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvTGluaz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE5hdkJhckNoYW5uZWxEcm9wZG93biAoeyBjaGFubmVsTmFtZSwgaGFuZGxlU2VsZWN0aW9uLCBkZWZhdWx0U2VsZWN0aW9uLCBWSUVXLCBMT0dPVVQgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWxlY3QgdHlwZT0ndGV4dCcgaWQ9J25hdi1iYXItY2hhbm5lbC1zZWxlY3QnIGNsYXNzTmFtZT0nc2VsZWN0IHNlbGVjdC0tYXJyb3cgbGluay0tbmF2JyBvbkNoYW5nZT17aGFuZGxlU2VsZWN0aW9ufSB2YWx1ZT17ZGVmYXVsdFNlbGVjdGlvbn0+XG4gICAgICA8b3B0aW9uIGlkPSduYXYtYmFyLWNoYW5uZWwtc2VsZWN0LWNoYW5uZWwtb3B0aW9uJz57Y2hhbm5lbE5hbWV9PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPXtWSUVXfT5WaWV3PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPXtMT0dPVVR9PkxvZ291dDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyQ2hhbm5lbERyb3Bkb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bi9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGlzYWJsZWQ6IHB1Ymxpc2guZGlzYWJsZWQsXG4gICAgZmlsZSAgICA6IHB1Ymxpc2guZmlsZSxcbiAgICBzdGF0dXMgIDogcHVibGlzaC5zdGF0dXMuc3RhdHVzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRvb2wvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ2NvbnRhaW5lcnMvRHJvcHpvbmUnO1xuaW1wb3J0IFB1Ymxpc2hEZXRhaWxzIGZyb20gJ2NvbnRhaW5lcnMvUHVibGlzaERldGFpbHMnO1xuaW1wb3J0IFB1Ymxpc2hTdGF0dXMgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoU3RhdHVzJztcbmltcG9ydCBQdWJsaXNoRGlzYWJsZWRNZXNzYWdlIGZyb20gJ2NvbnRhaW5lcnMvUHVibGlzaERpc2FibGVkTWVzc2FnZSc7XG5cbmNsYXNzIFB1Ymxpc2hUb29sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ3B1Ymxpc2ggaXMgZGlzYWJsZWQnKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQdWJsaXNoRGlzYWJsZWRNZXNzYWdlIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygncHVibGlzaCBpcyBub3QgZGlzYWJsZWQnKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZpbGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhdHVzKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQdWJsaXNoU3RhdHVzIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPFB1Ymxpc2hEZXRhaWxzIC8+O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gPERyb3B6b25lIC8+O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHVibGlzaFRvb2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVG9vbC92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpbGUgfSBmcm9tICd1dGlscy9maWxlJztcbmltcG9ydCBQdWJsaXNoUHJldmlldyBmcm9tICdjb21wb25lbnRzL1B1Ymxpc2hQcmV2aWV3JztcblxuY2xhc3MgRHJvcHpvbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdPdmVyICA6IGZhbHNlLFxuICAgICAgbW91c2VPdmVyIDogZmFsc2UsXG4gICAgICBkaW1QcmV2aWV3OiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRHJvcCA9IHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRHJhZ092ZXIgPSB0aGlzLmhhbmRsZURyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEcmFnRW5kID0gdGhpcy5oYW5kbGVEcmFnRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEcmFnRW50ZXIgPSB0aGlzLmhhbmRsZURyYWdFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRHJhZ0xlYXZlID0gdGhpcy5oYW5kbGVEcmFnTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsZUlucHV0ID0gdGhpcy5oYW5kbGVGaWxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNob29zZUZpbGUgPSB0aGlzLmNob29zZUZpbGUuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVEcm9wIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IGZhbHNlfSk7XG4gICAgLy8gaWYgZHJvcHBlZCBpdGVtcyBhcmVuJ3QgZmlsZXMsIHJlamVjdCB0aGVtXG4gICAgY29uc3QgZHQgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgaWYgKGR0Lml0ZW1zKSB7XG4gICAgICBpZiAoZHQuaXRlbXNbMF0ua2luZCA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gZHQuaXRlbXNbMF0uZ2V0QXNGaWxlKCk7XG4gICAgICAgIHRoaXMuY2hvb3NlRmlsZShkcm9wcGVkRmlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhbmRsZURyYWdPdmVyIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaGFuZGxlRHJhZ0VuZCAoZXZlbnQpIHtcbiAgICB2YXIgZHQgPSBldmVudC5kYXRhVHJhbnNmZXI7XG4gICAgaWYgKGR0Lml0ZW1zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGR0Lml0ZW1zLnJlbW92ZShpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVEcmFnRW50ZXIgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdPdmVyOiB0cnVlLCBkaW1QcmV2aWV3OiB0cnVlfSk7XG4gIH1cbiAgaGFuZGxlRHJhZ0xlYXZlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnT3ZlcjogZmFsc2UsIGRpbVByZXZpZXc6IGZhbHNlfSk7XG4gIH1cbiAgaGFuZGxlTW91c2VFbnRlciAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiB0cnVlLCBkaW1QcmV2aWV3OiB0cnVlfSk7XG4gIH1cbiAgaGFuZGxlTW91c2VMZWF2ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiBmYWxzZSwgZGltUHJldmlldzogZmFsc2V9KTtcbiAgfVxuICBoYW5kbGVDbGljayAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlX2lucHV0JykuY2xpY2soKTtcbiAgfVxuICBoYW5kbGVGaWxlSW5wdXQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICB0aGlzLmNob29zZUZpbGUoZmlsZUxpc3RbMF0pO1xuICB9XG4gIGNob29zZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFsaWRhdGVGaWxlKGZpbGUpOyAvLyB2YWxpZGF0ZSB0aGUgZmlsZSdzIG5hbWUsIHR5cGUsIGFuZCBzaXplXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5zZXRGaWxlRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICAvLyBzdGFnZSBpdCBzbyBpdCB3aWxsIGJlIHJlYWR5IHdoZW4gdGhlIHB1Ymxpc2ggYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0RmlsZShmaWxlKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbic+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0LWZpbGUnIHR5cGU9J2ZpbGUnIGlkPSdmaWxlX2lucHV0JyBuYW1lPSdmaWxlX2lucHV0JyBhY2NlcHQ9J3ZpZGVvLyosaW1hZ2UvKicgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUlucHV0fSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgaWQ9J3ByZXZpZXctZHJvcHpvbmUnIGNsYXNzTmFtZT17J3JvdyByb3ctLXBhZGRlZCByb3ctLXRhbGwgZHJvcHpvbmUnICsgKHRoaXMuc3RhdGUuZHJhZ092ZXIgPyAnIGRyb3B6b25lLS1kcmFnLW92ZXInIDogJycpfSBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH0gb25EcmFnT3Zlcj17dGhpcy5oYW5kbGVEcmFnT3Zlcn0gb25EcmFnRW5kPXt0aGlzLmhhbmRsZURyYWdFbmR9IG9uRHJhZ0VudGVyPXt0aGlzLmhhbmRsZURyYWdFbnRlcn0gb25EcmFnTGVhdmU9e3RoaXMuaGFuZGxlRHJhZ0xlYXZlfSBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn0gb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZpbGUgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8UHVibGlzaFByZXZpZXdcbiAgICAgICAgICAgICAgICBkaW1QcmV2aWV3PXt0aGlzLnN0YXRlLmRpbVByZXZpZXd9XG4gICAgICAgICAgICAgICAgZmlsZT17dGhpcy5wcm9wcy5maWxlfVxuICAgICAgICAgICAgICAgIHRodW1ibmFpbD17dGhpcy5wcm9wcy50aHVtYm5haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9J2Ryb3B6b25lLXRleHQtaG9sZGVyJyBjbGFzc05hbWU9eydmbGV4LWNvbnRhaW5lci0tY29sdW1uIGZsZXgtY29udGFpbmVyLS1jZW50ZXItY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmRyYWdPdmVyID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nZHJvcHpvbmUtZHJhZ292ZXInPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JsdWUnPkRyb3AgaXQuPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkcm9wem9uZS1pbnN0cnVjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS1wbGFjZWhvbGRlciBpbmZvLW1lc3NhZ2UtLWZhaWx1cmUnIGlkPSdpbnB1dC1lcnJvci1maWxlLXNlbGVjdGlvbic+e3RoaXMucHJvcHMuZmlsZUVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RHJhZyAmIGRyb3AgaW1hZ2Ugb3IgdmlkZW8gaGVyZSB0byBwdWJsaXNoPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpbmUtcHJpbnQnPk9SPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JsdWUtLXVuZGVybGluZWQnPkNIT09TRSBGSUxFPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGlkPSdkcm9wem9uZS10ZXh0LWhvbGRlcicgY2xhc3NOYW1lPXsnZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlcid9PlxuICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZHJhZ092ZXIgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nZHJvcHpvbmUtZHJhZ292ZXInPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdibHVlJz5Ecm9wIGl0LjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkcm9wem9uZS1pbnN0cnVjdGlvbnMnPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UtcGxhY2Vob2xkZXIgaW5mby1tZXNzYWdlLS1mYWlsdXJlJyBpZD0naW5wdXQtZXJyb3ItZmlsZS1zZWxlY3Rpb24nPnt0aGlzLnByb3BzLmZpbGVFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5EcmFnICYgZHJvcCBpbWFnZSBvciB2aWRlbyBoZXJlIHRvIHB1Ymxpc2g8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpbmUtcHJpbnQnPk9SPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdibHVlLS11bmRlcmxpbmVkJz5DSE9PU0UgRklMRTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcHpvbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Ecm9wem9uZS92aWV3LmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZmlsZSBwcm92aWRlZCcpO1xuICAgIH1cbiAgICBpZiAoLycvLnRlc3QoZmlsZS5uYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcG9zdHJvcGhlcyBhcmUgbm90IGFsbG93ZWQgaW4gdGhlIGZpbGUgbmFtZScpO1xuICAgIH1cbiAgICAvLyB2YWxpZGF0ZSBzaXplIGFuZCB0eXBlXG4gICAgc3dpdGNoIChmaWxlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltYWdlL2pwZWcnOlxuICAgICAgY2FzZSAnaW1hZ2UvanBnJzpcbiAgICAgIGNhc2UgJ2ltYWdlL3BuZyc6XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiAxMDAwMDAwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnksIGltYWdlcyBhcmUgbGltaXRlZCB0byAxMCBtZWdhYnl0ZXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWFnZS9naWYnOlxuICAgICAgICBpZiAoZmlsZS5zaXplID4gNTAwMDAwMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5LCBHSUZzIGFyZSBsaW1pdGVkIHRvIDUwIG1lZ2FieXRlcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnksIHZpZGVvcyBhcmUgbGltaXRlZCB0byA1MCBtZWdhYnl0ZXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZmlsZS50eXBlICsgJyBpcyBub3QgYSBzdXBwb3J0ZWQgZmlsZSB0eXBlLiBPbmx5LCAuanBlZywgLnBuZywgLmdpZiwgYW5kIC5tcDQgZmlsZXMgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9maWxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFB1Ymxpc2hQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWdTb3VyY2UgICAgICAgOiAnJyxcbiAgICAgIGRlZmF1bHRUaHVtYm5haWw6ICcvYXNzZXRzL2ltZy92aWRlb190aHVtYl9kZWZhdWx0LnBuZycsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2UodGhpcy5wcm9wcy5maWxlKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy5maWxlICE9PSB0aGlzLnByb3BzLmZpbGUpIHtcbiAgICAgIHRoaXMuc2V0UHJldmlld0ltYWdlU291cmNlKG5ld1Byb3BzLmZpbGUpO1xuICAgIH1cbiAgICBpZiAobmV3UHJvcHMudGh1bWJuYWlsICE9PSB0aGlzLnByb3BzLnRodW1ibmFpbCkge1xuICAgICAgaWYgKG5ld1Byb3BzLnRodW1ibmFpbCkge1xuICAgICAgICB0aGlzLnNldFByZXZpZXdJbWFnZVNvdXJjZUZyb21GaWxlKG5ld1Byb3BzLnRodW1ibmFpbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWdTb3VyY2U6IHRoaXMuc3RhdGUuZGVmYXVsdFRodW1ibmFpbH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZSAoZmlsZSkge1xuICAgIGNvbnN0IHByZXZpZXdSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHByZXZpZXdSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICBwcmV2aWV3UmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ltZ1NvdXJjZTogcHJldmlld1JlYWRlci5yZXN1bHR9KTtcbiAgICB9O1xuICB9XG4gIHNldFByZXZpZXdJbWFnZVNvdXJjZSAoZmlsZSkge1xuICAgIGlmIChmaWxlLnR5cGUgIT09ICd2aWRlby9tcDQnKSB7XG4gICAgICB0aGlzLnNldFByZXZpZXdJbWFnZVNvdXJjZUZyb21GaWxlKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50aHVtYm5haWwpIHtcbiAgICAgICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZSh0aGlzLnByb3BzLnRodW1ibmFpbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbWdTb3VyY2U6IHRoaXMuc3RhdGUuZGVmYXVsdFRodW1ibmFpbH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW1nXG4gICAgICAgIGlkPSdkcm9wem9uZS1wcmV2aWV3J1xuICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1nU291cmNlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGltUHJldmlldyA/ICdkaW0nIDogJyd9XG4gICAgICAgIGFsdD0ncHVibGlzaCBwcmV2aWV3J1xuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuXG5QdWJsaXNoUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGRpbVByZXZpZXc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGZpbGUgICAgICA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGh1bWJuYWlsIDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hQcmV2aWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvUHVibGlzaFByZXZpZXcvaW5kZXguanN4IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NsZWFyRmlsZSwgc3RhcnRQdWJsaXNofSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2hhbm5lbCwgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmlsZTogcHVibGlzaC5maWxlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjbGVhckZpbGUsXG4gIHN0YXJ0UHVibGlzaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaERldGFpbHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IERyb3B6b25lIGZyb20gJ2NvbnRhaW5lcnMvRHJvcHpvbmUnO1xuaW1wb3J0IFB1Ymxpc2hUaXRsZUlucHV0IGZyb20gJ2NvbnRhaW5lcnMvUHVibGlzaFRpdGxlSW5wdXQnO1xuaW1wb3J0IFB1Ymxpc2hVcmxJbnB1dCBmcm9tICdjb250YWluZXJzL1B1Ymxpc2hVcmxJbnB1dCc7XG5pbXBvcnQgUHVibGlzaFRodW1ibmFpbElucHV0IGZyb20gJ2NvbnRhaW5lcnMvUHVibGlzaFRodW1ibmFpbElucHV0JztcbmltcG9ydCBQdWJsaXNoTWV0YWRhdGFJbnB1dHMgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoTWV0YWRhdGFJbnB1dHMnO1xuaW1wb3J0IENoYW5uZWxTZWxlY3QgZnJvbSAnY29udGFpbmVycy9DaGFubmVsU2VsZWN0JztcblxuY2xhc3MgUHVibGlzaERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uUHVibGlzaFN1Ym1pdCA9IHRoaXMub25QdWJsaXNoU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgb25QdWJsaXNoU3VibWl0ICgpIHtcbiAgICB0aGlzLnByb3BzLnN0YXJ0UHVibGlzaCh0aGlzLnByb3BzLmhpc3RvcnkpO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1uby1ib3R0b20nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMTAnPlxuICAgICAgICAgIDxQdWJsaXNoVGl0bGVJbnB1dCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIGxlZnQgY29sdW1uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNSBjb2x1bW4tLXNtbC0xMCcgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQnPlxuICAgICAgICAgICAgPERyb3B6b25lIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogcmlnaHQgY29sdW1uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNSBjb2x1bW4tLXNtbC0xMCBhbGlnbi1jb250ZW50LXRvcCc+XG4gICAgICAgICAgPGRpdiBpZD0ncHVibGlzaC1hY3RpdmUtYXJlYScgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLW5vLXRvcCByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICA8UHVibGlzaFVybElucHV0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS1uby10b3Agcm93LS13aWRlJz5cbiAgICAgICAgICAgICAgPENoYW5uZWxTZWxlY3QgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyAodGhpcy5wcm9wcy5maWxlLnR5cGUgPT09ICd2aWRlby9tcDQnKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS1uby10b3Agcm93LS13aWRlICc+XG4gICAgICAgICAgICAgICAgPFB1Ymxpc2hUaHVtYm5haWxJbnB1dCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0tbm8tdG9wIHJvdy0tbm8tYm90dG9tIHJvdy0td2lkZSc+XG4gICAgICAgICAgICAgIDxQdWJsaXNoTWV0YWRhdGFJbnB1dHMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUgYWxpZ24tY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdwdWJsaXNoLXN1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24tLXByaW1hcnkgYnV0dG9uLS1sYXJnZScgb25DbGljaz17dGhpcy5vblB1Ymxpc2hTdWJtaXR9PlB1Ymxpc2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLW5vLWJvdHRvbSBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24tLWNhbmNlbCcgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhckZpbGV9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tc2hvcnQgYWxpZ24tY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZpbmUtcHJpbnQnPkJ5IGNsaWNraW5nICdQdWJsaXNoJywgeW91IGFmZmlybSB0aGF0IHlvdSBoYXZlIHRoZSByaWdodHMgdG8gcHVibGlzaCB0aGlzIGNvbnRlbnQgdG8gdGhlIExCUlkgbmV0d29yaywgYW5kIHRoYXQgeW91IHVuZGVyc3RhbmQgdGhlIHByb3BlcnRpZXMgb2YgcHVibGlzaGluZyBpdCB0byBhIGRlY2VudHJhbGl6ZWQsIHVzZXItY29udHJvbGxlZCBuZXR3b3JrLiA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL2xicnkuaW8vbGVhcm4nPlJlYWQgbW9yZS48L2E+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQdWJsaXNoRGV0YWlscyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGV0YWlscy92aWV3LmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHt1cGRhdGVNZXRhZGF0YX0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBwdWJsaXNoLm1ldGFkYXRhLnRpdGxlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTWV0YWRhdGFDaGFuZ2U6IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlTWV0YWRhdGEobmFtZSwgdmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGl0bGVJbnB1dC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFB1Ymxpc2hUaXRsZUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlSW5wdXQgKGUpIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25NZXRhZGF0YUNoYW5nZShuYW1lLCB2YWx1ZSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdwdWJsaXNoLXRpdGxlJyBjbGFzc05hbWU9J2lucHV0LXRleHQgdGV4dC0tbGFyZ2UgaW5wdXQtdGV4dC0tZnVsbC13aWR0aCcgbmFtZT0ndGl0bGUnIHBsYWNlaG9sZGVyPSdHaXZlIHlvdXIgcG9zdCBhIHRpdGxlLi4uJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMudGl0bGV9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoVGl0bGVJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hUaXRsZUlucHV0L3ZpZXcuanN4IiwiaW1wb3J0IHt1cGRhdGVDbGFpbSwgdXBkYXRlRXJyb3J9IGZyb20gJ2FjdGlvbnMvcHVibGlzaCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNoYW5uZWwsIHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvZ2dlZEluQ2hhbm5lbE5hbWUgICA6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLm5hbWUsXG4gICAgbG9nZ2VkSW5DaGFubmVsU2hvcnRJZDogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwuc2hvcnRJZCxcbiAgICBmaWxlTmFtZSAgICAgICAgICAgICAgOiBwdWJsaXNoLmZpbGUubmFtZSxcbiAgICBwdWJsaXNoSW5DaGFubmVsICAgICAgOiBwdWJsaXNoLnB1Ymxpc2hJbkNoYW5uZWwsXG4gICAgc2VsZWN0ZWRDaGFubmVsICAgICAgIDogcHVibGlzaC5zZWxlY3RlZENoYW5uZWwsXG4gICAgY2xhaW0gICAgICAgICAgICAgICAgIDogcHVibGlzaC5jbGFpbSxcbiAgICB1cmxFcnJvciAgICAgICAgICAgICAgOiBwdWJsaXNoLmVycm9yLnVybCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNsYWltQ2hhbmdlOiAodmFsdWUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUNsYWltKHZhbHVlKSk7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVFcnJvcigncHVibGlzaFN1Ym1pdCcsIG51bGwpKTtcbiAgICB9LFxuICAgIG9uVXJsRXJyb3I6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlRXJyb3IoJ3VybCcsIHZhbHVlKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFVybElucHV0L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IFVybE1pZGRsZSBmcm9tICdjb21wb25lbnRzL1B1Ymxpc2hVcmxNaWRkbGVEaXNwbGF5JztcblxuY2xhc3MgUHVibGlzaFVybElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHsgY2xhaW0sIGZpbGVOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghY2xhaW0pIHtcbiAgICAgIHRoaXMuc2V0Q2xhaW1OYW1lKGZpbGVOYW1lKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAoeyBjbGFpbSwgZmlsZU5hbWUgfSkge1xuICAgIC8vIGlmIGEgbmV3IGZpbGUgd2FzIGNob3NlbiwgdXBkYXRlIHRoZSBjbGFpbSBuYW1lXG4gICAgaWYgKGZpbGVOYW1lICE9PSB0aGlzLnByb3BzLmZpbGVOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRDbGFpbU5hbWUoZmlsZU5hbWUpO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgY2xhaW0gaGFzIHVwZGF0ZWQsIGNoZWNrIGl0cyBhdmFpbGFiaWxpdHlcbiAgICBpZiAoY2xhaW0gIT09IHRoaXMucHJvcHMuY2xhaW0pIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDbGFpbShjbGFpbSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0IChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB2YWx1ZSA9IHRoaXMuY2xlYW5zZUlucHV0KHZhbHVlKTtcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlXG4gICAgdGhpcy5wcm9wcy5vbkNsYWltQ2hhbmdlKHZhbHVlKTtcbiAgfVxuICBjbGVhbnNlSW5wdXQgKGlucHV0KSB7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXHMrL2csICctJyk7IC8vIHJlcGxhY2Ugc3BhY2VzIHdpdGggZGFzaGVzXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2csICcnKTsgIC8vIHJlbW92ZSBhbGwgY2hhcmFjdGVycyB0aGF0IGFyZSBub3QgQS1aLCBhLXosIDAtOSwgb3IgJy0nXG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHNldENsYWltTmFtZSAoZmlsZU5hbWUpIHtcbiAgICBjb25zdCBmaWxlTmFtZVdpdGhvdXRFbmRpbmcgPSBmaWxlTmFtZS5zdWJzdHJpbmcoMCwgZmlsZU5hbWUubGFzdEluZGV4T2YoJy4nKSk7XG4gICAgY29uc3QgY2xlYW5DbGFpbU5hbWUgPSB0aGlzLmNsZWFuc2VJbnB1dChmaWxlTmFtZVdpdGhvdXRFbmRpbmcpO1xuICAgIHRoaXMucHJvcHMub25DbGFpbUNoYW5nZShjbGVhbkNsYWltTmFtZSk7XG4gIH1cbiAgdmFsaWRhdGVDbGFpbSAoY2xhaW0pIHtcbiAgICBpZiAoIWNsYWltKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vblVybEVycm9yKCdFbnRlciBhIHVybCBhYm92ZScpO1xuICAgIH1cbiAgICByZXF1ZXN0KGAvYXBpL2NsYWltL2F2YWlsYWJpbGl0eS8ke2NsYWltfWApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25VcmxFcnJvcihudWxsKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25VcmxFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFpbSwgbG9nZ2VkSW5DaGFubmVsTmFtZSwgbG9nZ2VkSW5DaGFubmVsU2hvcnRJZCwgcHVibGlzaEluQ2hhbm5lbCwgc2VsZWN0ZWRDaGFubmVsLCB1cmxFcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTEwIGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXRleHQtLXByaW1hcnkgc3Bhbi0tcmVsYXRpdmUnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndXJsLXRleHQtLXNlY29uZGFyeSc+c3BlZS5jaCAvIDwvc3Bhbj5cbiAgICAgICAgICA8VXJsTWlkZGxlXG4gICAgICAgICAgICBwdWJsaXNoSW5DaGFubmVsPXtwdWJsaXNoSW5DaGFubmVsfVxuICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICBsb2dnZWRJbkNoYW5uZWxOYW1lPXtsb2dnZWRJbkNoYW5uZWxOYW1lfVxuICAgICAgICAgICAgbG9nZ2VkSW5DaGFubmVsU2hvcnRJZD17bG9nZ2VkSW5DaGFubmVsU2hvcnRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY2xhaW0tbmFtZS1pbnB1dCcgY2xhc3NOYW1lPSdpbnB1dC10ZXh0JyBuYW1lPSdjbGFpbScgcGxhY2Vob2xkZXI9J3lvdXItdXJsLWhlcmUnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSB2YWx1ZT17Y2xhaW19IC8+XG4gICAgICAgICAgeyAoY2xhaW0gJiYgIXVybEVycm9yKSAmJiA8c3BhbiBpZD0naW5wdXQtc3VjY2Vzcy1jbGFpbS1uYW1lJyBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tc3VjY2VzcyBzcGFuLS1hYnNvbHV0ZSc+eydcXHUyNzEzJ308L3NwYW4+IH1cbiAgICAgICAgICB7IHVybEVycm9yICYmIDxzcGFuIGlkPSdpbnB1dC1zdWNjZXNzLWNoYW5uZWwtbmFtZScgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UtLWZhaWx1cmUgc3Bhbi0tYWJzb2x1dGUnPnsnXFx1MjcxNid9PC9zcGFuPiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgdXJsRXJyb3IgPyAoXG4gICAgICAgICAgICA8cCBpZD0naW5wdXQtZXJyb3ItY2xhaW0tbmFtZScgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UtLWZhaWx1cmUnPnt1cmxFcnJvcn08L3A+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlJz5DaG9vc2UgYSBjdXN0b20gdXJsPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoVXJsSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVXJsSW5wdXQvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gVXJsTWlkZGxlICh7cHVibGlzaEluQ2hhbm5lbCwgc2VsZWN0ZWRDaGFubmVsLCBsb2dnZWRJbkNoYW5uZWxOYW1lLCBsb2dnZWRJbkNoYW5uZWxTaG9ydElkfSkge1xuICBpZiAocHVibGlzaEluQ2hhbm5lbCkge1xuICAgIGlmIChzZWxlY3RlZENoYW5uZWwgPT09IGxvZ2dlZEluQ2hhbm5lbE5hbWUpIHtcbiAgICAgIHJldHVybiA8c3BhbiBpZD0ndXJsLWNoYW5uZWwnIGNsYXNzTmFtZT0ndXJsLXRleHQtLXNlY29uZGFyeSc+e2xvZ2dlZEluQ2hhbm5lbE5hbWV9Ontsb2dnZWRJbkNoYW5uZWxTaG9ydElkfSAvPC9zcGFuPjtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIGlkPSd1cmwtY2hhbm5lbC1wbGFjZWhvbGRlcicgY2xhc3NOYW1lPSd1cmwtdGV4dC0tc2Vjb25kYXJ5IHRvb2x0aXAnPkBjaGFubmVsPHNwYW5cbiAgICAgIGNsYXNzTmFtZT0ndG9vbHRpcC10ZXh0Jz5TZWxlY3QgYSBjaGFubmVsIGJlbG93PC9zcGFuPiAvPC9zcGFuPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzcGFuIGlkPSd1cmwtbm8tY2hhbm5lbC1wbGFjZWhvbGRlcicgY2xhc3NOYW1lPSd1cmwtdGV4dC0tc2Vjb25kYXJ5IHRvb2x0aXAnPnh5ejxzcGFuIGNsYXNzTmFtZT0ndG9vbHRpcC10ZXh0Jz5UaGlzIHdpbGwgYmUgYSByYW5kb20gaWQ8L3NwYW4+IC88L3NwYW4+XG4gICk7XG59XG5cblVybE1pZGRsZS5wcm9wVHlwZXMgPSB7XG4gIHB1Ymxpc2hJbkNoYW5uZWwgICAgICA6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvZ2dlZEluQ2hhbm5lbE5hbWUgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvZ2dlZEluQ2hhbm5lbFNob3J0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcmxNaWRkbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9QdWJsaXNoVXJsTWlkZGxlRGlzcGxheS9pbmRleC5qc3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgb25OZXdUaHVtYm5haWwgfSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaDogeyBmaWxlIH0gfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIG9uTmV3VGh1bWJuYWlsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGh1bWJuYWlsSW5wdXQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBkYXRhVVJJdG9CbG9iKGRhdGFVUkkpIHtcbiAgLy8gY29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xuICBsZXQgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcbiAgLy8gc2VwYXJhdGUgb3V0IHRoZSBtaW1lIGNvbXBvbmVudFxuICBsZXQgbWltZVN0cmluZyA9IGRhdGFVUkkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF07XG4gIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGEgdHlwZWQgYXJyYXlcbiAgbGV0IGlhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gbmV3IEJsb2IoW2lhXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbn1cblxuY2xhc3MgUHVibGlzaFRodW1ibmFpbElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlb1NvdXJjZSAgIDogbnVsbCxcbiAgICAgIGVycm9yICAgICAgICAgOiBudWxsLFxuICAgICAgc2xpZGVyTWluUmFuZ2U6IDEsXG4gICAgICBzbGlkZXJNYXhSYW5nZTogbnVsbCxcbiAgICAgIHNsaWRlclZhbHVlICAgOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVWaWRlb0xvYWRlZERhdGEgPSB0aGlzLmhhbmRsZVZpZGVvTG9hZGVkRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVRodW1ibmFpbCA9IHRoaXMuY3JlYXRlVGh1bWJuYWlsLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHsgZmlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFZpZGVvU291cmNlKGZpbGUpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIC8vIGlmIGZpbGUgY2hhbmdlc1xuICAgIGlmIChuZXh0UHJvcHMuZmlsZSAmJiBuZXh0UHJvcHMuZmlsZSAhPT0gdGhpcy5wcm9wcy5maWxlKSB7XG4gICAgICBjb25zdCB7IGZpbGUgfSA9IG5leHRQcm9wcztcbiAgICAgIHRoaXMuc2V0VmlkZW9Tb3VyY2UoZmlsZSk7XG4gICAgfTtcbiAgfVxuICBzZXRWaWRlb1NvdXJjZSAoZmlsZSkge1xuICAgIGNvbnN0IHByZXZpZXdSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHByZXZpZXdSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICBwcmV2aWV3UmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGFVcmkgPSBwcmV2aWV3UmVhZGVyLnJlc3VsdDtcbiAgICAgIGNvbnN0IGJsb2IgPSBkYXRhVVJJdG9CbG9iKGRhdGFVcmkpO1xuICAgICAgY29uc3QgdmlkZW9Tb3VyY2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpZGVvU291cmNlIH0pO1xuICAgIH07XG4gIH1cbiAgaGFuZGxlVmlkZW9Mb2FkZWREYXRhIChldmVudCkge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZXZlbnQudGFyZ2V0LmR1cmF0aW9uO1xuICAgIGNvbnN0IHRvdGFsTWludXRlcyA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyA2MCk7XG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAlIDYwKTtcbiAgICAvLyBzZXQgdGhlIHNsaWRlclxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyTWF4UmFuZ2U6IGR1cmF0aW9uICogMTAwLFxuICAgICAgc2xpZGVyVmFsdWUgICA6IGR1cmF0aW9uICogMTAwIC8gMixcbiAgICAgIHRvdGFsTWludXRlcyxcbiAgICAgIHRvdGFsU2Vjb25kcyxcbiAgICB9KTtcbiAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgdGltZSBvZiB0aGUgdmlkZW9cbiAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tdGh1bWItcGxheWVyJyk7XG4gICAgdmlkZW8uY3VycmVudFRpbWUgPSBkdXJhdGlvbiAvIDI7XG4gIH1cbiAgaGFuZGxlU2xpZGVyQ2hhbmdlIChldmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGUgdGhlIHNsaWRlciB2YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyVmFsdWU6IHZhbHVlLFxuICAgIH0pO1xuICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSB2aWRlb1xuICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby10aHVtYi1wbGF5ZXInKTtcbiAgICB2aWRlby5jdXJyZW50VGltZSA9IHZhbHVlIC8gMTAwO1xuICB9XG4gIGNyZWF0ZVRodW1ibmFpbCAoKSB7XG4gICAgLy8gdGFrZSBhIHNuYXBzaG90XG4gICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXRodW1iLXBsYXllcicpO1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSB2aWRlby52aWRlb1dpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY29uc3QgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBjb25zdCBibG9iID0gZGF0YVVSSXRvQmxvYihkYXRhVXJsKTtcbiAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBGaWxlKFtibG9iXSwgYHRodW1ibmFpbC5wbmdgLCB7XG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICB9KTtcbiAgICAvLyBzZXQgdGhlIHRodW1ibmFpbCBpbiByZWR1eCBzdG9yZVxuICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk5ld1RodW1ibmFpbChzbmFwc2hvdCk7XG4gICAgfVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBlcnJvciwgdmlkZW9Tb3VyY2UsIHNsaWRlck1pblJhbmdlLCBzbGlkZXJNYXhSYW5nZSwgc2xpZGVyVmFsdWUsIHRvdGFsTWludXRlcywgdG90YWxTZWNvbmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+VGh1bWJuYWlsOjwvbGFiZWw+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIGlkPSd2aWRlby10aHVtYi1wbGF5ZXInXG4gICAgICAgICAgcHJlbG9hZD0nbWV0YWRhdGEnXG4gICAgICAgICAgbXV0ZWRcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICBvbkxvYWRlZERhdGE9e3RoaXMuaGFuZGxlVmlkZW9Mb2FkZWREYXRhfVxuICAgICAgICAgIHNyYz17dmlkZW9Tb3VyY2V9XG4gICAgICAgICAgb25TZWVrZWQ9e3RoaXMuY3JlYXRlVGh1bWJuYWlsfVxuICAgICAgICAvPlxuICAgICAgICB7XG4gICAgICAgICAgc2xpZGVyVmFsdWUgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1jb250YWluZXItLXJvdyBmbGV4LWNvbnRhaW5lci0tc3BhY2UtYmV0d2Vlbi1jZW50ZXInIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlJz4wJzAwXCI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPnt0b3RhbE1pbnV0ZXN9J3t0b3RhbFNlY29uZHN9XCI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ncmFuZ2UnXG4gICAgICAgICAgICAgICAgICBtaW49e3NsaWRlck1pblJhbmdlfVxuICAgICAgICAgICAgICAgICAgbWF4PXtzbGlkZXJNYXhSYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpZGVyJ1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlJyA+bG9hZGluZy4uLiA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHsgZXJyb3IgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UtLWZhaWx1cmUnPntlcnJvcn08L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPlVzZSBzbGlkZXIgdG8gc2V0IHRodW1ibmFpbDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVibGlzaFRodW1ibmFpbElucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRodW1ibmFpbElucHV0L3ZpZXcuanN4IiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3VwZGF0ZU1ldGFkYXRhLCB0b2dnbGVNZXRhZGF0YUlucHV0c30gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHNob3dNZXRhZGF0YUlucHV0czogcHVibGlzaC5zaG93TWV0YWRhdGFJbnB1dHMsXG4gICAgZGVzY3JpcHRpb24gICAgICAgOiBwdWJsaXNoLm1ldGFkYXRhLmRlc2NyaXB0aW9uLFxuICAgIGxpY2Vuc2UgICAgICAgICAgIDogcHVibGlzaC5tZXRhZGF0YS5saWNlbnNlLFxuICAgIG5zZncgICAgICAgICAgICAgIDogcHVibGlzaC5tZXRhZGF0YS5uc2Z3LFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uTWV0YWRhdGFDaGFuZ2U6IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlTWV0YWRhdGEobmFtZSwgdmFsdWUpKTtcbiAgICB9LFxuICAgIG9uVG9nZ2xlTWV0YWRhdGFJbnB1dHM6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godG9nZ2xlTWV0YWRhdGFJbnB1dHModmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoTWV0YWRhdGFJbnB1dHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRBcmVhIGZyb20gJ2NvbXBvbmVudHMvRXhwYW5kaW5nVGV4dEFyZWEnO1xuXG5jbGFzcyBQdWJsaXNoTWV0YWRhdGFJbnB1dHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b2dnbGVTaG93SW5wdXRzID0gdGhpcy50b2dnbGVTaG93SW5wdXRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdCA9IHRoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcyk7XG4gIH1cbiAgdG9nZ2xlU2hvd0lucHV0cyAoKSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZU1ldGFkYXRhSW5wdXRzKCF0aGlzLnByb3BzLnNob3dNZXRhZGF0YUlucHV0cyk7XG4gIH1cbiAgaGFuZGxlSW5wdXQgKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5wcm9wcy5vbk1ldGFkYXRhQ2hhbmdlKG5hbWUsIHZhbHVlKTtcbiAgfVxuICBoYW5kbGVTZWxlY3QgKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uTWV0YWRhdGFDaGFuZ2UobmFtZSwgc2VsZWN0ZWRPcHRpb24pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J3B1Ymxpc2gtZGV0YWlscycgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS1uby10b3Agcm93LS13aWRlJz5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd01ldGFkYXRhSW5wdXRzICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tbWVkLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHVibGlzaC1saWNlbnNlJyBjbGFzc05hbWU9J2xhYmVsJz5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNyBjb2x1bW4tLXNtbC0xMCc+XG4gICAgICAgICAgICAgICAgPEV4cGFuZGluZ1RleHRBcmVhXG4gICAgICAgICAgICAgICAgICBpZD0ncHVibGlzaC1kZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dGFyZWEgdGV4dGFyZWEtLXByaW1hcnkgdGV4dGFyZWEtLWZ1bGwtd2lkdGgnXG4gICAgICAgICAgICAgICAgICByb3dzPXsxfVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J09wdGlvbmFsIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHVibGlzaC1saWNlbnNlJyBjbGFzc05hbWU9J2xhYmVsJz5MaWNlbnNlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHR5cGU9J3RleHQnIG5hbWU9J2xpY2Vuc2UnIGlkPSdwdWJsaXNoLWxpY2Vuc2UnIGNsYXNzTmFtZT0nc2VsZWN0IHNlbGVjdC0tcHJpbWFyeScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JyAnPlVuc3BlY2lmaWVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdQdWJsaWMgRG9tYWluJz5QdWJsaWMgRG9tYWluPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdDcmVhdGl2ZSBDb21tb25zJz5DcmVhdGl2ZSBDb21tb25zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1uby10b3AnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3B1Ymxpc2gtbnNmdycgY2xhc3NOYW1lPSdsYWJlbCc+TWF0dXJlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03Jz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSdwdWJsaXNoLW5zZncnIG5hbWU9J25zZncnIHZhbHVlPXt0aGlzLnByb3BzLm5zZnd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1zZWNvbmRhcnknIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2hvd0lucHV0c30+e3RoaXMucHJvcHMuc2hvd01ldGFkYXRhSW5wdXRzID8gJ2xlc3MnIDogJ21vcmUnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoTWV0YWRhdGFJbnB1dHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoTWV0YWRhdGFJbnB1dHMvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRXhwYW5kaW5nVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlID0gdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuYWRqdXN0VGV4dGFyZWEoe30pO1xuICB9XG4gIF9oYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLmFkanVzdFRleHRhcmVhKGV2ZW50KTtcbiAgfVxuICBhZGp1c3RUZXh0YXJlYSAoeyB0YXJnZXQgPSB0aGlzLmVsIH0pIHtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0LnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWwgPSB4fVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkV4cGFuZGluZ1RleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kaW5nVGV4dGFyZWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9FeHBhbmRpbmdUZXh0QXJlYS9pbmRleC5qc3giLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7c2V0UHVibGlzaEluQ2hhbm5lbCwgdXBkYXRlU2VsZWN0ZWRDaGFubmVsLCB1cGRhdGVFcnJvcn0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNoYW5uZWwsIHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvZ2dlZEluQ2hhbm5lbE5hbWU6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLm5hbWUsXG4gICAgcHVibGlzaEluQ2hhbm5lbCAgIDogcHVibGlzaC5wdWJsaXNoSW5DaGFubmVsLFxuICAgIHNlbGVjdGVkQ2hhbm5lbCAgICA6IHB1Ymxpc2guc2VsZWN0ZWRDaGFubmVsLFxuICAgIGNoYW5uZWxFcnJvciAgICAgICA6IHB1Ymxpc2guZXJyb3IuY2hhbm5lbCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvblB1Ymxpc2hJbkNoYW5uZWxDaGFuZ2U6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlRXJyb3IoJ2NoYW5uZWwnLCBudWxsKSk7XG4gICAgICBkaXNwYXRjaChzZXRQdWJsaXNoSW5DaGFubmVsKHZhbHVlKSk7XG4gICAgfSxcbiAgICBvbkNoYW5uZWxTZWxlY3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlRXJyb3IoJ2NoYW5uZWwnLCBudWxsKSk7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVTZWxlY3RlZENoYW5uZWwodmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsU2VsZWN0L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGFubmVsTG9naW5Gb3JtIGZyb20gJ2NvbnRhaW5lcnMvQ2hhbm5lbExvZ2luRm9ybSc7XG5pbXBvcnQgQ2hhbm5lbENyZWF0ZUZvcm0gZnJvbSAnY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybSc7XG5pbXBvcnQgKiBhcyBzdGF0ZXMgZnJvbSAnY29uc3RhbnRzL3B1Ymxpc2hfY2hhbm5lbF9zZWxlY3Rfc3RhdGVzJztcblxuY2xhc3MgQ2hhbm5lbFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRvZ2dsZUFub255bW91c1B1Ymxpc2ggPSB0aGlzLnRvZ2dsZUFub255bW91c1B1Ymxpc2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cbiAgdG9nZ2xlQW5vbnltb3VzUHVibGlzaCAoZXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdhbm9ueW1vdXMnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUHVibGlzaEluQ2hhbm5lbENoYW5nZShmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25QdWJsaXNoSW5DaGFubmVsQ2hhbmdlKHRydWUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTZWxlY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBldmVudC50YXJnZXQuc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25DaGFubmVsU2VsZWN0KHNlbGVjdGVkT3B0aW9uKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2Fub255bW91cy1vci1jaGFubmVsJyBpZD0nYW5vbnltb3VzLXJhZGlvJyBjbGFzc05hbWU9J2lucHV0LXJhZGlvJyB2YWx1ZT0nYW5vbnltb3VzJyBjaGVja2VkPXshdGhpcy5wcm9wcy5wdWJsaXNoSW5DaGFubmVsfSBvbkNoYW5nZT17dGhpcy50b2dnbGVBbm9ueW1vdXNQdWJsaXNofSAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwgbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2Fub255bW91cy1yYWRpbyc+QW5vbnltb3VzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNyBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J2Fub255bW91cy1vci1jaGFubmVsJyBpZD0nY2hhbm5lbC1yYWRpbycgY2xhc3NOYW1lPSdpbnB1dC1yYWRpbycgdmFsdWU9J2luIGEgY2hhbm5lbCcgY2hlY2tlZD17dGhpcy5wcm9wcy5wdWJsaXNoSW5DaGFubmVsfSBvbkNoYW5nZT17dGhpcy50b2dnbGVBbm9ueW1vdXNQdWJsaXNofSAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwgbGFiZWwtLXBvaW50ZXInIGh0bWxGb3I9J2NoYW5uZWwtcmFkaW8nPkluIGEgY2hhbm5lbDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyB0aGlzLnByb3BzLmNoYW5uZWxFcnJvciA/IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLS1mYWlsdXJlJz57dGhpcy5wcm9wcy5jaGFubmVsRXJyb3J9PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZSc+UHVibGlzaCBhbm9ueW1vdXNseSBvciBpbiBhIGNoYW5uZWw8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7IHRoaXMucHJvcHMucHVibGlzaEluQ2hhbm5lbCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zJz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnIGh0bWxGb3I9J2NoYW5uZWwtbmFtZS1zZWxlY3QnPkNoYW5uZWw6PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03Jz5cbiAgICAgICAgICAgICAgPHNlbGVjdCB0eXBlPSd0ZXh0JyBpZD0nY2hhbm5lbC1uYW1lLXNlbGVjdCcgY2xhc3NOYW1lPSdzZWxlY3Qgc2VsZWN0LS1hcnJvdycgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0ZWRDaGFubmVsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3Rpb259PlxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5sb2dnZWRJbkNoYW5uZWxOYW1lICYmIDxvcHRpb24gdmFsdWU9e3RoaXMucHJvcHMubG9nZ2VkSW5DaGFubmVsTmFtZX0gaWQ9J3B1Ymxpc2gtY2hhbm5lbC1zZWxlY3QtY2hhbm5lbC1vcHRpb24nPnt0aGlzLnByb3BzLmxvZ2dlZEluQ2hhbm5lbE5hbWV9PC9vcHRpb24+IH1cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtzdGF0ZXMuTE9HSU59PkV4aXN0aW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c3RhdGVzLkNSRUFURX0+TmV3PC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ICh0aGlzLnByb3BzLnNlbGVjdGVkQ2hhbm5lbCA9PT0gc3RhdGVzLkxPR0lOKSAmJiA8Q2hhbm5lbExvZ2luRm9ybSAvPiB9XG4gICAgICAgICAgICB7ICh0aGlzLnByb3BzLnNlbGVjdGVkQ2hhbm5lbCA9PT0gc3RhdGVzLkNSRUFURSkgJiYgPENoYW5uZWxDcmVhdGVGb3JtIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbFNlbGVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxTZWxlY3Qvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAndXRpbHMvcmVxdWVzdCc7XG5cbmNsYXNzIENoYW5uZWxMb2dpbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yICAgOiBudWxsLFxuICAgICAgbmFtZSAgICA6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luVG9DaGFubmVsID0gdGhpcy5sb2dpblRvQ2hhbm5lbC5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUlucHV0IChldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gIH1cbiAgbG9naW5Ub0NoYW5uZWwgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICBib2R5ICAgOiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWU6IHRoaXMuc3RhdGUubmFtZSwgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmR9KSxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9O1xuICAgIHJlcXVlc3QoJ2xvZ2luJywgcGFyYW1zKVxuICAgICAgLnRoZW4oKHtzdWNjZXNzLCBjaGFubmVsTmFtZSwgc2hvcnRDaGFubmVsSWQsIGNoYW5uZWxDbGFpbUlkLCBtZXNzYWdlfSkgPT4ge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9naW4oY2hhbm5lbE5hbWUsIHNob3J0Q2hhbm5lbElkLCBjaGFubmVsQ2xhaW1JZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogbWVzc2FnZX0pO1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogZXJyb3IubWVzc2FnZX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydlcnJvcic6IGVycm9yfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGlkPSdjaGFubmVsLWxvZ2luLWZvcm0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSByb3ctLXNob3J0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyBjb2x1bW4tLXNtbC0xMCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj0nY2hhbm5lbC1sb2dpbi1uYW1lLWlucHV0Jz5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTYgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXRleHQtLXByaW1hcnkgZmxleC1jb250YWluZXItLXJvdyBmbGV4LWNvbnRhaW5lci0tbGVmdC1ib3R0b20nPlxuICAgICAgICAgICAgICA8c3Bhbj5APC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NoYW5uZWwtbG9naW4tbmFtZS1pbnB1dCcgY2xhc3NOYW1lPSdpbnB1dC10ZXh0JyBuYW1lPSduYW1lJyBwbGFjZWhvbGRlcj0nWW91ciBDaGFubmVsIE5hbWUnIHZhbHVlPXt0aGlzLnN0YXRlLmNoYW5uZWxOYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUgcm93LS1zaG9ydCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTMgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnIGh0bWxGb3I9J2NoYW5uZWwtbG9naW4tcGFzc3dvcmQtaW5wdXQnID5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS02IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC10ZXh0LS1wcmltYXJ5Jz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyBpZD0nY2hhbm5lbC1sb2dpbi1wYXNzd29yZC1pbnB1dCcgbmFtZT0ncGFzc3dvcmQnIGNsYXNzTmFtZT0naW5wdXQtdGV4dCcgcGxhY2Vob2xkZXI9JycgdmFsdWU9e3RoaXMuc3RhdGUuY2hhbm5lbFBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLmVycm9yID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLS1mYWlsdXJlJz57dGhpcy5zdGF0ZS5lcnJvcn08L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPkVudGVyIHRoZSBuYW1lIGFuZCBwYXNzd29yZCBmb3IgeW91ciBjaGFubmVsPC9wPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi0tcHJpbWFyeScgb25DbGljaz17dGhpcy5sb2dpblRvQ2hhbm5lbH0+QXV0aGVudGljYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbExvZ2luRm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxMb2dpbkZvcm0vdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAndXRpbHMvcmVxdWVzdCc7XG5cbmNsYXNzIENoYW5uZWxDcmVhdGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvciAgIDogbnVsbCxcbiAgICAgIGNoYW5uZWwgOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHN0YXR1cyAgOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFubmVsSW5wdXQgPSB0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVDaGFubmVsID0gdGhpcy5jcmVhdGVDaGFubmVsLmJpbmQodGhpcyk7XG4gIH1cbiAgY2xlYW5zZUNoYW5uZWxJbnB1dCAoaW5wdXQpIHtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xccysvZywgJy0nKTsgLy8gcmVwbGFjZSBzcGFjZXMgd2l0aCBkYXNoZXNcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05LV0vZywgJycpOyAgLy8gcmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBLVosIGEteiwgMC05LCBvciAnLSdcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaGFuZGxlQ2hhbm5lbElucHV0IChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB2YWx1ZSA9IHRoaXMuY2xlYW5zZUNoYW5uZWxJbnB1dCh2YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhbm5lbDogdmFsdWV9KTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlSXNDaGFubmVsQXZhaWxhYmxlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSBjaGFubmVsIG5hbWUnfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0IChldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gIH1cbiAgdXBkYXRlSXNDaGFubmVsQXZhaWxhYmxlIChjaGFubmVsKSB7XG4gICAgY29uc3QgY2hhbm5lbFdpdGhBdFN5bWJvbCA9IGBAJHtjaGFubmVsfWA7XG4gICAgcmVxdWVzdChgL2FwaS9jaGFubmVsL2F2YWlsYWJpbGl0eS8ke2NoYW5uZWxXaXRoQXRTeW1ib2x9YClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogbnVsbH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogZXJyb3IubWVzc2FnZX0pO1xuICAgICAgfSk7XG4gIH1cbiAgY2hlY2tJc0NoYW5uZWxBdmFpbGFibGUgKGNoYW5uZWwpIHtcbiAgICBjb25zdCBjaGFubmVsV2l0aEF0U3ltYm9sID0gYEAke2NoYW5uZWx9YDtcbiAgICByZXR1cm4gcmVxdWVzdChgL2FwaS9jaGFubmVsL2F2YWlsYWJpbGl0eS8ke2NoYW5uZWxXaXRoQXRTeW1ib2x9YCk7XG4gIH1cbiAgY2hlY2tJc1Bhc3N3b3JkUHJvdmlkZWQgKHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZCcpKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuICBtYWtlUHVibGlzaENoYW5uZWxSZXF1ZXN0ICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICBib2R5ICAgOiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIHBhc3N3b3JkfSksXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxdWVzdCgnL3NpZ251cCcsIHBhcmFtcylcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuZm9ydHVuYXRlbHksIHdlIGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGNyZWF0aW5nIHlvdXIgY2hhbm5lbC4gUGxlYXNlIGxldCB1cyBrbm93IGluIERpc2NvcmQhICR7ZXJyb3IubWVzc2FnZX1gKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUNoYW5uZWwgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoZWNrSXNQYXNzd29yZFByb3ZpZGVkKHRoaXMuc3RhdGUucGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSXNDaGFubmVsQXZhaWxhYmxlKHRoaXMuc3RhdGUuY2hhbm5lbCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6ICdXZSBhcmUgcHVibGlzaGluZyB5b3VyIG5ldyBjaGFubmVsLiAgU2l0IHRpZ2h0Li4uJ30pO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUHVibGlzaENoYW5uZWxSZXF1ZXN0KHRoaXMuc3RhdGUuY2hhbm5lbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiBudWxsfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9naW4ocmVzdWx0LmNoYW5uZWxOYW1lLCByZXN1bHQuc2hvcnRDaGFubmVsSWQsIHJlc3VsdC5jaGFubmVsQ2xhaW1JZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydlcnJvcic6IGVycm9yLm1lc3NhZ2UsIHN0YXR1czogbnVsbH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydlcnJvcic6IGVycm9yLCBzdGF0dXM6IG51bGx9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgIXRoaXMuc3RhdGUuc3RhdHVzID8gKFxuICAgICAgICAgIDxmb3JtIGlkPSdwdWJsaXNoLWNoYW5uZWwtZm9ybSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSByb3ctLXNob3J0Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTMgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJyBodG1sRm9yPSduZXctY2hhbm5lbC1uYW1lJz5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS02IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSBmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1sZWZ0LWJvdHRvbSBzcGFuLS1yZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5APC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2NoYW5uZWwnIGlkPSduZXctY2hhbm5lbC1uYW1lJyBjbGFzc05hbWU9J2lucHV0LXRleHQnIHBsYWNlaG9sZGVyPSdleGFtcGxlQ2hhbm5lbE5hbWUnIHZhbHVlPXt0aGlzLnN0YXRlLmNoYW5uZWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUuY2hhbm5lbCAmJiAhdGhpcy5zdGF0ZS5lcnJvcikgJiYgPHNwYW4gaWQ9J2lucHV0LXN1Y2Nlc3MtY2hhbm5lbC1uYW1lJyBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tc3VjY2VzcyBzcGFuLS1hYnNvbHV0ZSc+eydcXHUyNzEzJ308L3NwYW4+IH1cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciAmJiA8c3BhbiBpZD0naW5wdXQtc3VjY2Vzcy1jaGFubmVsLW5hbWUnIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLS1mYWlsdXJlIHNwYW4tLWFic29sdXRlJz57J1xcdTI3MTYnfTwvc3Bhbj4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUgcm93LS1zaG9ydCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj0nbmV3LWNoYW5uZWwtcGFzc3dvcmQnPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS02IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG5hbWU9J3Bhc3N3b3JkJyBpZD0nbmV3LWNoYW5uZWwtcGFzc3dvcmQnIGNsYXNzTmFtZT0naW5wdXQtdGV4dCcgIHBsYWNlaG9sZGVyPScnIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSc+e3RoaXMuc3RhdGUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPkNob29zZSBhIG5hbWUgYW5kIHBhc3N3b3JkIGZvciB5b3VyIGNoYW5uZWw8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1wcmltYXJ5JyBvbkNsaWNrPXt0aGlzLmNyZWF0ZUNoYW5uZWx9PkNyZWF0ZSBDaGFubmVsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmluZS1wcmludCc+e3RoaXMuc3RhdGUuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDxQcm9ncmVzc0JhciBzaXplPXsxMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbENyZWF0ZUZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFjdGl2ZVN0YXR1c0JhciA9ICgpID0+IHtcbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci0tYWN0aXZlJz58IDwvc3Bhbj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVTdGF0dXNCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9BY3RpdmVTdGF0dXNCYXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW5hY3RpdmVTdGF0dXNCYXIgPSAoKSA9PiB7XG4gIHJldHVybiA8c3BhbiBjbGFzc05hbWU9J3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItLWluYWN0aXZlJz58IDwvc3Bhbj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmFjdGl2ZVN0YXR1c0JhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0luYWN0aXZlU3RhdHVzQmFyL2luZGV4LmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtjbGVhckZpbGV9IGZyb20gJ2FjdGlvbnMvcHVibGlzaCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwdWJsaXNoIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXMgOiBwdWJsaXNoLnN0YXR1cy5zdGF0dXMsXG4gICAgbWVzc2FnZTogcHVibGlzaC5zdGF0dXMubWVzc2FnZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgY2xlYXJGaWxlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoU3RhdHVzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdjb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCAqIGFzIHB1Ymxpc2hTdGF0ZXMgZnJvbSAnY29uc3RhbnRzL3B1Ymxpc2hfY2xhaW1fc3RhdGVzJztcblxuY2xhc3MgUHVibGlzaFN0YXR1cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIG1lc3NhZ2UsIGNsZWFyRmlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlcic+XG4gICAgICAgIHtzdGF0dXMgPT09IHB1Ymxpc2hTdGF0ZXMuTE9BRF9TVEFSVCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICA8cD5GaWxlIGlzIGxvYWRpbmcgdG8gc2VydmVyPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZSc+MCU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtzdGF0dXMgPT09IHB1Ymxpc2hTdGF0ZXMuTE9BRElORyAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24tY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgPHA+RmlsZSBpcyBsb2FkaW5nIHRvIHNlcnZlcjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZSc+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7c3RhdHVzID09PSBwdWJsaXNoU3RhdGVzLlBVQkxJU0hJTkcgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+VXBsb2FkIGNvbXBsZXRlLiAgWW91ciBmaWxlIGlzIG5vdyBiZWluZyBwdWJsaXNoZWQgb24gdGhlIGJsb2NrY2hhaW4uLi48L3A+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNpemU9ezEyfSAvPlxuICAgICAgICAgIDxwPkN1cmlvdXMgd2hhdCBtYWdpYyBpcyBoYXBwZW5pbmcgaGVyZT8gPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J2JsYW5rJyBocmVmPSdodHRwczovL2xicnkuaW8vZmFxL3doYXQtaXMtbGJyeSc+TGVhcm4gbW9yZS48L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7c3RhdHVzID09PSBwdWJsaXNoU3RhdGVzLlNVQ0NFU1MgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+WW91ciBwdWJsaXNoIGlzIGNvbXBsZXRlISBZb3UgYXJlIGJlaW5nIHJlZGlyZWN0ZWQgdG8gaXQgbm93LjwvcD5cbiAgICAgICAgICA8cD5JZiB5b3UgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQsIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e21lc3NhZ2V9PmNsaWNrIGhlcmUuPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3N0YXR1cyA9PT0gcHVibGlzaFN0YXRlcy5GQUlMRUQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+U29tZXRoaW5nIHdlbnQgd3JvbmcuLi48L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgPHA+Rm9yIGhlbHAsIHBvc3QgdGhlIGFib3ZlIGVycm9yIHRleHQgaW4gdGhlICNzcGVlY2ggY2hhbm5lbCBvbiB0aGUgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyBocmVmPSdodHRwczovL2Rpc2NvcmQuZ2cvWWpZYndoUycgdGFyZ2V0PSdfYmxhbmsnPmxicnkgZGlzY29yZDwvYT48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi0tc2Vjb25kYXJ5JyBvbkNsaWNrPXtjbGVhckZpbGV9PlJlc2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoU3RhdHVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFN0YXR1cy92aWV3LmpzeCIsImV4cG9ydCBjb25zdCBMT0FEX1NUQVJUID0gJ0xPQURfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgUFVCTElTSElORyA9ICdQVUJMSVNISU5HJztcbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gJ1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEZBSUxFRCA9ICdGQUlMRUQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NsYWltX3N0YXRlcy5qcyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogcHVibGlzaC5kaXNhYmxlZE1lc3NhZ2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUHVibGlzaERpc2FibGVkTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5wcm9wcy5tZXNzYWdlOicsIG1lc3NhZ2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGRyb3B6b25lLS1kaXNhYmxlZCByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0tZGlzYWJsZWQnPlB1Ymxpc2hpbmcgaXMgY3VycmVudGx5IGRpc2FibGVkLjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LS1kaXNhYmxlZCc+e21lc3NhZ2V9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoRGlzYWJsZWRNZXNzYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaERpc2FibGVkTWVzc2FnZS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ2NvbnRhaW5lcnMvTmF2QmFyJztcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9TRU8nO1xuXG5jbGFzcyBBYm91dFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U0VPIHBhZ2VUaXRsZT17J0Fib3V0J30gcGFnZVVyaT17J2Fib3V0J30gLz5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNSBjb2x1bW4tLW1lZC0xMCBhbGlnbi1jb250ZW50LXRvcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tOCBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHVsbC1xdW90ZSc+U3BlZS5jaCBpcyBhbiBvcGVuLXNvdXJjZSBwcm9qZWN0LiAgUGxlYXNlIGNvbnRyaWJ1dGUgdG8gdGhlIGV4aXN0aW5nIHNpdGUsIG9yIGZvcmsgaXQgYW5kIG1ha2UgeW91ciBvd24uPC9wPlxuICAgICAgICAgICAgICA8cD48YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL3NwZWVfY2gnPlRXSVRURVI8L2E+PC9wPlxuICAgICAgICAgICAgICA8cD48YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vbGJyeWlvL3NwZWUuY2gnPkdJVEhVQjwvYT48L3A+XG4gICAgICAgICAgICAgIDxwPjxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vZGlzY29yZC5nZy9Zallid2hTJz5ESVNDT1JEIENIQU5ORUw8L2E+PC9wPlxuICAgICAgICAgICAgICA8cD48YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vbGJyeWlvL3NwZWUuY2gvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kJz5ET0NVTUVOVEFUSU9OPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tbWVkLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS04IGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgPHA+U3BlZS5jaCBpcyBhIG1lZGlhLWhvc3Rpbmcgc2l0ZSB0aGF0IHJlYWRzIGZyb20gYW5kIHB1Ymxpc2hlcyBjb250ZW50IHRvIHRoZSA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIGhyZWY9J2h0dHBzOi8vbGJyeS5pbyc+TEJSWTwvYT4gYmxvY2tjaGFpbi48L3A+XG4gICAgICAgICAgICAgIDxwPlNwZWUuY2ggaXMgYSBob3N0aW5nIHNlcnZpY2UsIGJ1dCB3aXRoIHRoZSBhZGRlZCBiZW5lZml0IHRoYXQgaXQgc3RvcmVzIHlvdXIgY29udGVudCBvbiBhIGRlY2VudHJhbGl6ZWQgbmV0d29yayBvZiBjb21wdXRlcnMgLS0gdGhlIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgaHJlZj0naHR0cHM6Ly9sYnJ5LmlvL2dldCc+TEJSWTwvYT4gbmV0d29yay4gIFRoaXMgbWVhbnMgdGhhdCB5b3VyIGltYWdlcyBhcmUgc3RvcmVkIGluIG11bHRpcGxlIGxvY2F0aW9ucyB3aXRob3V0IGEgc2luZ2xlIHBvaW50IG9mIGZhaWx1cmUuPC9wPlxuICAgICAgICAgICAgICA8aDM+Q29udHJpYnV0ZTwvaDM+XG4gICAgICAgICAgICAgIDxwPklmIHlvdSBoYXZlIGFuIGlkZWEgZm9yIHlvdXIgb3duIHNwZWUuY2gtbGlrZSBzaXRlIG9uIHRvcCBvZiBMQlJZLCBmb3JrIG91ciA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9sYnJ5aW8vc3BlZS5jaCc+Z2l0aHViIHJlcG88L2E+IGFuZCBnbyB0byB0b3duITwvcD5cbiAgICAgICAgICAgICAgPHA+SWYgeW91IHdhbnQgdG8gaW1wcm92ZSBzcGVlLmNoLCBqb2luIG91ciA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIGhyZWY9J2h0dHBzOi8vZGlzY29yZC5nZy9Zallid2hTJz5kaXNjb3JkIGNoYW5uZWw8L2E+IG9yIHNvbHZlIG9uZSBvZiBvdXIgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vbGJyeWlvL3NwZWUuY2gvaXNzdWVzJz5naXRodWIgaXNzdWVzPC9hPi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFnZXMvQWJvdXRQYWdlL2luZGV4LmpzeCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2hhbm5lbCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbG9nZ2VkSW5DaGFubmVsTmFtZTogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwubmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9Mb2dpblBhZ2UvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL1NFTyc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJ2NvbnRhaW5lcnMvTmF2QmFyJztcbmltcG9ydCBDaGFubmVsTG9naW5Gb3JtIGZyb20gJ2NvbnRhaW5lcnMvQ2hhbm5lbExvZ2luRm9ybSc7XG5pbXBvcnQgQ2hhbm5lbENyZWF0ZUZvcm0gZnJvbSAnY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybSc7XG5cbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgLy8gcmUtcm91dGUgdGhlIHVzZXIgdG8gdGhlIGhvbWVwYWdlIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpblxuICAgIGlmIChuZXdQcm9wcy5sb2dnZWRJbkNoYW5uZWxOYW1lICE9PSB0aGlzLnByb3BzLmxvZ2dlZEluQ2hhbm5lbE5hbWUpIHtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvYCk7XG4gICAgfVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTRU8gcGFnZVRpdGxlPXsnTG9naW4nfSBwYWdlVXJpPXsnbG9naW4nfSAvPlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tbWVkLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS04IGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgPHA+Q2hhbm5lbHMgYWxsb3cgeW91IHRvIHB1Ymxpc2ggYW5kIGdyb3VwIGNvbnRlbnQgdW5kZXIgYW4gaWRlbnRpdHkuIFlvdSBjYW4gY3JlYXRlIGEgY2hhbm5lbCBmb3IgeW91cnNlbGYsIG9yIHNoYXJlIG9uZSB3aXRoIGxpa2UtbWluZGVkIGZyaWVuZHMuICBZb3UgY2FuIGNyZWF0ZSAxIGNoYW5uZWwsIG9yIDEwMCwgc28gd2hldGhlciB5b3UncmUgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J19ibGFuaycgaHJlZj0nL0BjYXRhbG9uaWEyMDE3OjQzZGNmNDcxNjNjYWEyMWQ4NDA0ZDlmZTliMzBmNzhlZjNlMTQ2YTgnPmRvY3VtZW50aW5nIGltcG9ydGFudCBldmVudHM8L2E+LCBvciBtYWtpbmcgYSBwdWJsaWMgcmVwb3NpdG9yeSBmb3IgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J19ibGFuaycgaHJlZj0nL0BjYXRHaWZzJz5jYXQgZ2lmczwvYT4gKHBhc3N3b3JkOiAnMTIzNCcpLCB0cnkgY3JlYXRpbmcgYSBjaGFubmVsIGZvciBpdCE8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNSBjb2x1bW4tLW1lZC0xMCBhbGlnbi1jb250ZW50LXRvcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tOCBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2gzLS1uby1ib3R0b20nPkxvZyBpbiB0byBhbiBleGlzdGluZyBjaGFubmVsOjwvaDM+XG4gICAgICAgICAgICAgIDxDaGFubmVsTG9naW5Gb3JtIC8+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2gzLS1uby1ib3R0b20nPkNyZWF0ZSBhIGJyYW5kIG5ldyBjaGFubmVsOjwvaDM+XG4gICAgICAgICAgICAgIDxDaGFubmVsQ3JlYXRlRm9ybSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMb2dpblBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BhZ2VzL0xvZ2luUGFnZS92aWV3LmpzeCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBvbkhhbmRsZVNob3dQYWdlVXJpIH0gZnJvbSAnYWN0aW9ucy9zaG93JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGVycm9yICAgICAgOiBzaG93LnJlcXVlc3QuZXJyb3IsXG4gICAgcmVxdWVzdFR5cGU6IHNob3cucmVxdWVzdC50eXBlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBvbkhhbmRsZVNob3dQYWdlVXJpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFnZXMvU2hvd1BhZ2UvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICdwYWdlcy9FcnJvclBhZ2UnO1xuaW1wb3J0IFNob3dBc3NldExpdGUgZnJvbSAnY29udGFpbmVycy9TaG93QXNzZXRMaXRlJztcbmltcG9ydCBTaG93QXNzZXREZXRhaWxzIGZyb20gJ2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscyc7XG5pbXBvcnQgU2hvd0NoYW5uZWwgZnJvbSAnY29udGFpbmVycy9TaG93Q2hhbm5lbCc7XG5cbmltcG9ydCB7IENIQU5ORUwsIEFTU0VUX0xJVEUsIEFTU0VUX0RFVEFJTFMgfSBmcm9tICdjb25zdGFudHMvc2hvd19yZXF1ZXN0X3R5cGVzJztcblxuY2xhc3MgU2hvd1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkhhbmRsZVNob3dQYWdlVXJpKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLm1hdGNoLnBhcmFtcyAhPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25IYW5kbGVTaG93UGFnZVVyaShuZXh0UHJvcHMubWF0Y2gucGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGVycm9yLCByZXF1ZXN0VHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvclBhZ2UgZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgc3dpdGNoIChyZXF1ZXN0VHlwZSkge1xuICAgICAgY2FzZSBDSEFOTkVMOlxuICAgICAgICByZXR1cm4gPFNob3dDaGFubmVsIC8+O1xuICAgICAgY2FzZSBBU1NFVF9MSVRFOlxuICAgICAgICByZXR1cm4gPFNob3dBc3NldExpdGUgLz47XG4gICAgICBjYXNlIEFTU0VUX0RFVEFJTFM6XG4gICAgICAgIHJldHVybiA8U2hvd0Fzc2V0RGV0YWlscyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8cD5sb2FkaW5nLi4uPC9wPjtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3BhZ2VzL1Nob3dQYWdlL3ZpZXcuanN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgcmVxdWVzdCBpbmZvXG4gIGNvbnN0IHJlcXVlc3RJZCA9IHNob3cucmVxdWVzdC5pZDtcbiAgLy8gc2VsZWN0IGFzc2V0IGluZm9cbiAgbGV0IGFzc2V0O1xuICBjb25zdCByZXF1ZXN0ID0gc2hvdy5yZXF1ZXN0TGlzdFtyZXF1ZXN0SWRdIHx8IG51bGw7XG4gIGNvbnN0IGFzc2V0TGlzdCA9IHNob3cuYXNzZXRMaXN0O1xuICBpZiAocmVxdWVzdCAmJiBhc3NldExpc3QpIHtcbiAgICBjb25zdCBhc3NldEtleSA9IHJlcXVlc3Qua2V5OyAgLy8gbm90ZToganVzdCBzdG9yZSB0aGlzIGluIHRoZSByZXF1ZXN0XG4gICAgYXNzZXQgPSBhc3NldExpc3RbYXNzZXRLZXldIHx8IG51bGw7XG4gIH07XG4gIC8vIHJldHVybiBwcm9wc1xuICByZXR1cm4ge1xuICAgIGFzc2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0TGl0ZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvU0VPJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBc3NldERpc3BsYXkgZnJvbSAnY29udGFpbmVycy9Bc3NldERpc3BsYXknO1xuXG5jbGFzcyBTaG93TGl0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBhc3NldCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoYXNzZXQpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgY2xhaW1JZCB9ID0gYXNzZXQuY2xhaW1EYXRhO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlciBzaG93LWxpdGUtY29udGFpbmVyJz5cbiAgICAgICAgICA8U0VPIHBhZ2VUaXRsZT17bmFtZX0gYXNzZXQ9e2Fzc2V0fSAvPlxuICAgICAgICAgIDxBc3NldERpc3BsYXkgLz5cbiAgICAgICAgICA8TGluayBpZD0nYXNzZXQtYm9pbGVycGF0ZScgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5IGZpbmUtcHJpbnQnIHRvPXtgLyR7Y2xhaW1JZH0vJHtuYW1lfWB9Pmhvc3RlZFxuICAgICAgICAgICAgdmlhIFNwZWUuY2g8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS10YWxsIHJvdy0tcGFkZGVkIGZsZXgtY29udGFpbmVyLS1jb2x1bW4gZmxleC1jb250YWluZXItLWNlbnRlci1jZW50ZXInPlxuICAgICAgICA8cD5sb2FkaW5nIGFzc2V0IGRhdGEuLi48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93TGl0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dBc3NldExpdGUvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHsgTE9DQUxfQ0hFQ0ssIFVOQVZBSUxBQkxFLCBFUlJPUiwgQVZBSUxBQkxFIH0gZnJvbSAnY29uc3RhbnRzL2Fzc2V0X2Rpc3BsYXlfc3RhdGVzJztcblxuY2xhc3MgQXNzZXREaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHsgYXNzZXQ6IHsgY2xhaW1EYXRhOiB7IG5hbWUsIGNsYWltSWQgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJvcHMub25GaWxlUmVxdWVzdChuYW1lLCBjbGFpbUlkKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzLCBlcnJvciwgYXNzZXQ6IHsgY2xhaW1EYXRhOiB7IG5hbWUsIGNsYWltSWQsIGNvbnRlbnRUeXBlLCBmaWxlRXh0LCB0aHVtYm5haWwgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdhc3NldC1kaXNwbGF5LWNvbXBvbmVudCc+XG4gICAgICAgIHsoc3RhdHVzID09PSBMT0NBTF9DSEVDSykgJiZcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5DaGVja2luZyB0byBzZWUgaWYgU3BlZS5jaCBoYXMgeW91ciBhc3NldCBsb2NhbGx5Li4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHN0YXR1cyA9PT0gVU5BVkFJTEFCTEUpICYmXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+U2l0IHRpZ2h0LCB3ZSdyZSBzZWFyY2hpbmcgdGhlIExCUlkgYmxvY2tjaGFpbiBmb3IgeW91ciBhc3NldCE8L3A+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNpemU9ezEyfSAvPlxuICAgICAgICAgIDxwPkN1cmlvdXMgd2hhdCBtYWdpYyBpcyBoYXBwZW5pbmcgaGVyZT8gPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J2JsYW5rJyBocmVmPSdodHRwczovL2xicnkuaW8vZmFxL3doYXQtaXMtbGJyeSc+TGVhcm4gbW9yZS48L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHN0YXR1cyA9PT0gRVJST1IpICYmXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+VW5mb3J0dW5hdGVseSwgd2UgY291bGRuJ3QgZG93bmxvYWQgeW91ciBhc3NldCBmcm9tIExCUlkuICBZb3UgY2FuIGhlbHAgdXMgb3V0IGJ5IHNoYXJpbmcgdGhlIGJlbG93IGVycm9yIG1lc3NhZ2UgaW4gdGhlIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgaHJlZj0naHR0cHM6Ly9kaXNjb3JkLmdnL1lqWWJ3aFMnIHRhcmdldD0nX2JsYW5rJz5MQlJZIGRpc2NvcmQ8L2E+LjwvcD5cbiAgICAgICAgICA8aT48cCBpZD0nZXJyb3ItbWVzc2FnZSc+e2Vycm9yfTwvcD48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsoc3RhdHVzID09PSBBVkFJTEFCTEUpICYmXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChjb250ZW50VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvanBlZyc6XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9qcGcnOlxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvcG5nJzpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fzc2V0J1xuICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX0gLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL2dpZic6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3NldCdcbiAgICAgICAgICAgICAgICAgIHNyYz17YC8ke2NsYWltSWR9LyR7bmFtZX0uJHtmaWxlRXh0fWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT0nYXNzZXQgdmlkZW8nIGNvbnRyb2xzIHBvc3Rlcj17dGh1bWJuYWlsfT5cbiAgICAgICAgICAgICAgICAgIDxzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cD5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgPGNvZGU+dmlkZW88L2NvZGU+IGVsZW1lbnQuPC9wPlxuICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwPlVuc3VwcG9ydGVkIGZpbGUgdHlwZTwvcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXREaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXREaXNwbGF5L3ZpZXcuanN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgcmVxdWVzdCBpbmZvXG4gIGNvbnN0IHJlcXVlc3RJZCA9IHNob3cucmVxdWVzdC5pZDtcbiAgLy8gc2VsZWN0IGFzc2V0IGluZm9cbiAgbGV0IGFzc2V0O1xuICBjb25zdCByZXF1ZXN0ID0gc2hvdy5yZXF1ZXN0TGlzdFtyZXF1ZXN0SWRdIHx8IG51bGw7XG4gIGNvbnN0IGFzc2V0TGlzdCA9IHNob3cuYXNzZXRMaXN0O1xuICBpZiAocmVxdWVzdCAmJiBhc3NldExpc3QpIHtcbiAgICBjb25zdCBhc3NldEtleSA9IHJlcXVlc3Qua2V5OyAgLy8gbm90ZToganVzdCBzdG9yZSB0aGlzIGluIHRoZSByZXF1ZXN0XG4gICAgYXNzZXQgPSBhc3NldExpc3RbYXNzZXRLZXldIHx8IG51bGw7XG4gIH07XG4gIC8vIHJldHVybiBwcm9wc1xuICByZXR1cm4ge1xuICAgIGFzc2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvU0VPJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnY29udGFpbmVycy9OYXZCYXInO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICdwYWdlcy9FcnJvclBhZ2UnO1xuaW1wb3J0IEFzc2V0VGl0bGUgZnJvbSAnY29udGFpbmVycy9Bc3NldFRpdGxlJztcbmltcG9ydCBBc3NldERpc3BsYXkgZnJvbSAnY29udGFpbmVycy9Bc3NldERpc3BsYXknO1xuaW1wb3J0IEFzc2V0SW5mbyBmcm9tICdjb250YWluZXJzL0Fzc2V0SW5mbyc7XG5cbmNsYXNzIFNob3dBc3NldERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgYXNzZXQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGFzc2V0KSB7XG4gICAgICBjb25zdCB7IGNsYWltRGF0YTogeyBuYW1lIH0gfSA9IGFzc2V0O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U0VPIHBhZ2VUaXRsZT17YCR7bmFtZX0gLSBkZXRhaWxzYH0gYXNzZXQ9e2Fzc2V0fSAvPlxuICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tdGFsbCByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMTAnPlxuICAgICAgICAgICAgICA8QXNzZXRUaXRsZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNSBjb2x1bW4tLXNtbC0xMCBhbGlnbi1jb250ZW50LXRvcCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgc2hvdy1kZXRhaWxzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPEFzc2V0RGlzcGxheSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tc21sLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgICAgICAgPEFzc2V0SW5mbyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yUGFnZSBlcnJvcj17J2xvYWRpbmcgYXNzZXQgZGF0YS4uLid9IC8+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0Fzc2V0RGV0YWlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dBc3NldERldGFpbHMvdmlldy5qc3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IHNlbGVjdEFzc2V0IH0gZnJvbSAnc2VsZWN0b3JzL3Nob3cnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaG93IH0pID0+IHtcbiAgY29uc3QgeyBjbGFpbURhdGE6IHsgdGl0bGUgfSB9ID0gc2VsZWN0QXNzZXQoc2hvdyk7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Bc3NldFRpdGxlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQXNzZXRUaXRsZSA9ICh7IHRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LS1sYXJnZSc+e3RpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0VGl0bGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Bc3NldFRpdGxlL3ZpZXcuanN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBzZWxlY3RBc3NldCB9IGZyb20gJ3NlbGVjdG9ycy9zaG93JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2hvdyB9KSA9PiB7XG4gIC8vIHNlbGVjdCBhc3NldFxuICBjb25zdCBhc3NldCA9IHNlbGVjdEFzc2V0KHNob3cpO1xuICAvLyAgcmV0dXJuIHByb3BzXG4gIHJldHVybiB7XG4gICAgYXNzZXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Bc3NldEluZm8vaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBBc3NldEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQgPSB0aGlzLmNvcHlUb0NsaXBib2FyZC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvcHlUb0NsaXBib2FyZCAoZXZlbnQpIHtcbiAgICB2YXIgZWxlbWVudFRvQ29weSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVsZW1lbnR0b2NvcHk7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50VG9Db3B5KTtcbiAgICBlbGVtZW50LnNlbGVjdCgpO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6ICdPb3BzLCB1bmFibGUgdG8gY29weSd9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGFzc2V0OiB7IHNob3J0SWQsIGNsYWltRGF0YSA6IHsgY2hhbm5lbE5hbWUsIGNlcnRpZmljYXRlSWQsIGRlc2NyaXB0aW9uLCBuYW1lLCBjbGFpbUlkLCBmaWxlRXh0LCBjb250ZW50VHlwZSwgdGh1bWJuYWlsLCBob3N0IH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoYW5uZWxOYW1lICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS13aWRlIHJvdy0tbm8tdG9wJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMiBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQnPkNoYW5uZWw6PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS04IGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+PExpbmsgdG89e2AvJHtjaGFubmVsTmFtZX06JHtjZXJ0aWZpY2F0ZUlkfWB9PntjaGFubmVsTmFtZX08L0xpbms+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0td2lkZSByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0Jz57ZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgaWQ9J3Nob3ctc2hhcmUtYnV0dG9ucyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLXdpZGUgcm93LS1uby10b3AnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTIgY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQnPlNoYXJlOjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTggY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3cgcm93LS1zaG9ydCByb3ctLXdpZGUgZmxleC1jb250YWluZXItLXJvdyBmbGV4LWNvbnRhaW5lci0tc3BhY2UtYmV0d2Vlbi1ib3R0b20gZmxleC1jb250YWluZXItLXdyYXAnPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7aG9zdH0vJHtzaG9ydElkfS8ke25hbWV9YH0+dHdpdHRlcjwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPXtgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtob3N0fS8ke3Nob3J0SWR9LyR7bmFtZX1gfT5mYWNlYm9vazwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPXtgaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sP2Nhbm9uaWNhbFVybD0ke2hvc3R9LyR7c2hvcnRJZH0vJHtuYW1lfWB9PnR1bWJscjwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRhcmdldD0nX2JsYW5rJyBocmVmPXtgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9zdWJtaXQ/dXJsPSR7aG9zdH0vJHtzaG9ydElkfS8ke25hbWV9JnRpdGxlPSR7bmFtZX1gfT5yZWRkaXQ8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS13aWRlIHJvdy0tbm8tdG9wJz5cbiAgICAgICAgICA8ZGl2IGlkPSdzaG93LXNob3J0LWxpbmsnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTIgY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQnPkxpbms6PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tOCBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1zaG9ydCByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1lcnJvcicgaWQ9J2lucHV0LWVycm9yLWNvcHktc2hvcnQtbGluaycgaGlkZGVuPSd0cnVlJz5lcnJvciBoZXJlPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3Nob3J0LWxpbmsnIGNsYXNzTmFtZT0naW5wdXQtZGlzYWJsZWQgaW5wdXQtdGV4dC0tZnVsbC13aWR0aCcgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxDaGVjaz0nZmFsc2UnXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgJHtob3N0fS8ke3Nob3J0SWR9LyR7bmFtZX0uJHtmaWxlRXh0fWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0yJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24tLXByaW1hcnkgYnV0dG9uLS13aWRlJyBkYXRhLWVsZW1lbnR0b2NvcHk9J3Nob3J0LWxpbmsnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcGJvYXJkfT5jb3B5XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgaWQ9J3Nob3ctZW1iZWQtY29kZSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMiBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+RW1iZWQ6PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tOCBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1zaG9ydCByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1lcnJvcicgaWQ9J2lucHV0LWVycm9yLWNvcHktZW1iZWQtdGV4dCcgaGlkZGVuPSd0cnVlJz5lcnJvciBoZXJlPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7KGNvbnRlbnRUeXBlID09PSAndmlkZW8vbXA0JykgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZW1iZWQtdGV4dCcgY2xhc3NOYW1lPSdpbnB1dC1kaXNhYmxlZCBpbnB1dC10ZXh0LS1mdWxsLXdpZHRoJyByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0fSBzcGVsbENoZWNrPSdmYWxzZSdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YDx2aWRlbyB3aWR0aD1cIjEwMCVcIiBjb250cm9scyBwb3N0ZXI9XCIke3RodW1ibmFpbH1cIiBzcmM9XCIke2hvc3R9LyR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9XCIvPjwvdmlkZW8+YH0gLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nZW1iZWQtdGV4dCcgY2xhc3NOYW1lPSdpbnB1dC1kaXNhYmxlZCBpbnB1dC10ZXh0LS1mdWxsLXdpZHRoJyByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0fSBzcGVsbENoZWNrPSdmYWxzZSdcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YDxpbWcgc3JjPVwiJHtob3N0fS8ke2NsYWltSWR9LyR7bmFtZX0uJHtmaWxlRXh0fVwiLz5gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMScgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMic+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0td2lkZScgZGF0YS1lbGVtZW50dG9jb3B5PSdlbWJlZC10ZXh0J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBib2FyZH0+Y29weVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1zcGFjZS1iZXR3ZWVuLWJvdHRvbSc+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0bz17YC8ke3Nob3J0SWR9LyR7bmFtZX0uJHtmaWxlRXh0fWB9PjxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQnPkRpcmVjdCBMaW5rPC9zcGFuPjwvTGluaz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIGhyZWY9e2Ake2hvc3R9LyR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YH0gZG93bmxvYWQ9e25hbWV9PkRvd25sb2FkPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vbGJyeS5pby9kbWNhJz5SZXBvcnQ8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldEluZm87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Bc3NldEluZm8vdmlldy5qc3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2hvdyB9KSA9PiB7XG4gIC8vIHNlbGVjdCByZXF1ZXN0IGluZm9cbiAgY29uc3QgcmVxdWVzdElkID0gc2hvdy5yZXF1ZXN0LmlkO1xuICAvLyBzZWxlY3QgcmVxdWVzdFxuICBjb25zdCBwcmV2aW91c1JlcXVlc3QgPSBzaG93LnJlcXVlc3RMaXN0W3JlcXVlc3RJZF0gfHwgbnVsbDtcbiAgLy8gc2VsZWN0IGNoYW5uZWxcbiAgbGV0IGNoYW5uZWw7XG4gIGlmIChwcmV2aW91c1JlcXVlc3QpIHtcbiAgICBjb25zdCBjaGFubmVsS2V5ID0gcHJldmlvdXNSZXF1ZXN0LmtleTtcbiAgICBjaGFubmVsID0gc2hvdy5jaGFubmVsTGlzdFtjaGFubmVsS2V5XSB8fCBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2hhbm5lbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dDaGFubmVsL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9TRU8nO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICdwYWdlcy9FcnJvclBhZ2UnO1xuaW1wb3J0IE5hdkJhciBmcm9tICdjb250YWluZXJzL05hdkJhcic7XG5pbXBvcnQgQ2hhbm5lbENsYWltc0Rpc3BsYXkgZnJvbSAnY29udGFpbmVycy9DaGFubmVsQ2xhaW1zRGlzcGxheSc7XG5cbmNsYXNzIFNob3dDaGFubmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgbG9uZ0lkLCBzaG9ydElkIH0gPSBjaGFubmVsO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U0VPIHBhZ2VUaXRsZT17bmFtZX0gY2hhbm5lbD17Y2hhbm5lbH0gLz5cbiAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgcm93LS1wYWRkZWQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTEwJz5cbiAgICAgICAgICAgICAgPGgyPmNoYW5uZWwgbmFtZToge25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXsnZmluZS1wcmludCd9PmZ1bGwgY2hhbm5lbCBpZDoge2xvbmdJZH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2ZpbmUtcHJpbnQnfT5zaG9ydCBjaGFubmVsIGlkOiB7c2hvcnRJZH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xMCc+XG4gICAgICAgICAgICAgIDxDaGFubmVsQ2xhaW1zRGlzcGxheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JQYWdlIGVycm9yPXsnbG9hZGluZyBjaGFubmVsIGRhdGEuLi4nfSAvPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dDaGFubmVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0NoYW5uZWwvdmlldy5qc3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgb25VcGRhdGVDaGFubmVsQ2xhaW1zIH0gZnJvbSAnYWN0aW9ucy9zaG93JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgY2hhbm5lbCBrZXlcbiAgY29uc3QgcmVxdWVzdCA9IHNob3cucmVxdWVzdExpc3Rbc2hvdy5yZXF1ZXN0LmlkXTtcbiAgY29uc3QgY2hhbm5lbEtleSA9IHJlcXVlc3Qua2V5O1xuICAvLyBzZWxlY3QgY2hhbm5lbCBjbGFpbXNcbiAgY29uc3QgY2hhbm5lbCA9IHNob3cuY2hhbm5lbExpc3RbY2hhbm5lbEtleV0gfHwgbnVsbDtcbiAgLy8gcmV0dXJuIHByb3BzXG4gIHJldHVybiB7XG4gICAgY2hhbm5lbEtleSxcbiAgICBjaGFubmVsLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBvblVwZGF0ZUNoYW5uZWxDbGFpbXMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxDbGFpbXNEaXNwbGF5L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBc3NldFByZXZpZXcgZnJvbSAnY29tcG9uZW50cy9Bc3NldFByZXZpZXcnO1xuXG5jbGFzcyBDaGFubmVsQ2xhaW1zRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNob3dOZXh0UmVzdWx0c1BhZ2UgPSB0aGlzLnNob3dOZXh0UmVzdWx0c1BhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dQcmV2aW91c1Jlc3VsdHNQYWdlID0gdGhpcy5zaG93UHJldmlvdXNSZXN1bHRzUGFnZS5iaW5kKHRoaXMpO1xuICB9XG4gIHNob3dQcmV2aW91c1Jlc3VsdHNQYWdlICgpIHtcbiAgICBjb25zdCB7IGNoYW5uZWw6IHsgY2xhaW1zRGF0YTogeyBjdXJyZW50UGFnZSB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldmlvdXNQYWdlID0gcGFyc2VJbnQoY3VycmVudFBhZ2UpIC0gMTtcbiAgICB0aGlzLnNob3dOZXdQYWdlKHByZXZpb3VzUGFnZSk7XG4gIH1cbiAgc2hvd05leHRSZXN1bHRzUGFnZSAoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsOiB7IGNsYWltc0RhdGE6IHsgY3VycmVudFBhZ2UgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5leHRQYWdlID0gcGFyc2VJbnQoY3VycmVudFBhZ2UpICsgMTtcbiAgICB0aGlzLnNob3dOZXdQYWdlKG5leHRQYWdlKTtcbiAgfVxuICBzaG93TmV3UGFnZSAocGFnZSkge1xuICAgIGNvbnN0IHsgY2hhbm5lbEtleSwgY2hhbm5lbDogeyBuYW1lLCBsb25nSWQgfSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlQ2hhbm5lbENsYWltcyhjaGFubmVsS2V5LCBuYW1lLCBsb25nSWQsIHBhZ2UpO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsOiB7IGNsYWltc0RhdGE6IHsgY2xhaW1zLCBjdXJyZW50UGFnZSwgdG90YWxQYWdlcyB9IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS10YWxsJz5cbiAgICAgICAgeyhjbGFpbXMubGVuZ3RoID4gMCkgPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjbGFpbXMubWFwKChjbGFpbSwgaW5kZXgpID0+IDxBc3NldFByZXZpZXdcbiAgICAgICAgICAgICAgY2xhaW1EYXRhPXtjbGFpbX1cbiAgICAgICAgICAgICAga2V5PXtgJHtjbGFpbS5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAvPil9XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7KGN1cnJlbnRQYWdlID4gMSkgJiZcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydidXR0b24tLXNlY29uZGFyeSd9IG9uQ2xpY2s9e3RoaXMuc2hvd1ByZXZpb3VzUmVzdWx0c1BhZ2V9PlByZXZpb3VzIFBhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7KGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykgJiZcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydidXR0b24tLXNlY29uZGFyeSd9IG9uQ2xpY2s9e3RoaXMuc2hvd05leHRSZXN1bHRzUGFnZX0+TmV4dCBQYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPlRoZXJlIGFyZSBubyBjbGFpbXMgaW4gdGhpcyBjaGFubmVsPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbENsYWltc0Rpc3BsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ2xhaW1zRGlzcGxheS92aWV3LmpzeCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3NpdGU6IHtkZWZhdWx0czogeyBkZWZhdWx0VGh1bWJuYWlsIH19fSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlZmF1bHRUaHVtYm5haWwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Bc3NldFByZXZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBBc3NldFByZXZpZXcgPSAoeyBkZWZhdWx0VGh1bWJuYWlsLCBjbGFpbURhdGE6IHsgbmFtZSwgY2xhaW1JZCwgZmlsZUV4dCwgY29udGVudFR5cGUsIHRodW1ibmFpbCB9IH0pID0+IHtcbiAgY29uc3QgZGlyZWN0U291cmNlTGluayA9IGAke2NsYWltSWR9LyR7bmFtZX0uJHtmaWxlRXh0fWA7XG4gIGNvbnN0IHNob3dVcmxMaW5rID0gYC8ke2NsYWltSWR9LyR7bmFtZX1gO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhc3NldC1ob2xkZXInPlxuICAgICAgPExpbmsgdG89e3Nob3dVcmxMaW5rfSA+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY29udGVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL2pwZWcnOlxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3BuZyc6XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9naWYnOlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Fzc2V0LXByZXZpZXcnfVxuICAgICAgICAgICAgICAgICAgc3JjPXtkaXJlY3RTb3VyY2VMaW5rfVxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICd2aWRlby9tcDQnOlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2Fzc2V0LXByZXZpZXcgdmlkZW8nfVxuICAgICAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWwgfHwgZGVmYXVsdFRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cD51bnN1cHBvcnRlZCBmaWxlIHR5cGU8L3A+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRQcmV2aWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvQXNzZXRQcmV2aWV3L3ZpZXcuanN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNpdGU6IHsgaG9zdCwgdGl0bGUgfSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaG9zdCxcbiAgICB0aXRsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9wYWdlcy9Gb3VyT2hGb3VyUGFnZS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICdjb250YWluZXJzL05hdkJhcic7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmNsYXNzIEZvdXJPaEZvclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHt0aXRsZSwgaG9zdH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9IC0gNDA0PC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17YCR7aG9zdH0vNDA0YH0gLz5cbiAgICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgPGgyPjQwNDwvaDI+XG4gICAgICAgICAgPHA+VGhhdCBwYWdlIGRvZXMgbm90IGV4aXN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvdXJPaEZvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFnZXMvRm91ck9oRm91clBhZ2Uvdmlldy5qc3giLCJjb25zdCB7IHNlbmRHQVNlcnZlRXZlbnQgfSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvZ29vZ2xlQW5hbHl0aWNzJyk7XG5jb25zdCB7IGRldGVybWluZVJlc3BvbnNlVHlwZSwgZmxpcENsYWltTmFtZUFuZElkRm9yQmFja3dhcmRzQ29tcGF0aWJpbGl0eSwgbG9nUmVxdWVzdERhdGEsIGdldENsYWltSWRBbmRTZXJ2ZUFzc2V0IH0gPSByZXF1aXJlKCcuLi9oZWxwZXJzL3NlcnZlSGVscGVycy5qcycpO1xuY29uc3QgbGJyeVVyaSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvbGJyeVVyaS5qcycpO1xuY29uc3QgaGFuZGxlU2hvd1JlbmRlciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaGFuZGxlU2hvd1JlbmRlci5qc3gnKTtcbmNvbnN0IFNFUlZFID0gJ1NFUlZFJztcblxubW9kdWxlLmV4cG9ydHMgPSAoYXBwKSA9PiB7XG4gIC8vIHJvdXRlIHRvIHNlcnZlIGEgc3BlY2lmaWMgYXNzZXQgdXNpbmcgdGhlIGNoYW5uZWwgb3IgY2xhaW0gaWRcbiAgYXBwLmdldCgnLzppZGVudGlmaWVyLzpjbGFpbScsIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHsgaGVhZGVycywgaXAsIG9yaWdpbmFsVXJsLCBwYXJhbXMgfSA9IHJlcTtcbiAgICAvLyBkZWNpZGUgaWYgdGhpcyBpcyBhIHNob3cgcmVxdWVzdFxuICAgIGxldCBoYXNGaWxlRXh0ZW5zaW9uO1xuICAgIHRyeSB7XG4gICAgICAoeyBoYXNGaWxlRXh0ZW5zaW9uIH0gPSBsYnJ5VXJpLnBhcnNlTW9kaWZpZXIocGFyYW1zLmNsYWltKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTtcbiAgICB9XG4gICAgbGV0IHJlc3BvbnNlVHlwZSA9IGRldGVybWluZVJlc3BvbnNlVHlwZShoYXNGaWxlRXh0ZW5zaW9uLCBoZWFkZXJzKTtcbiAgICBpZiAocmVzcG9uc2VUeXBlICE9PSBTRVJWRSkge1xuICAgICAgcmV0dXJuIGhhbmRsZVNob3dSZW5kZXIocmVxLCByZXMpO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgc2VydmUgcmVxdWVzdFxuICAgIC8vIHNlbmQgZ29vZ2xlIGFuYWx5dGljc1xuICAgIHNlbmRHQVNlcnZlRXZlbnQoaGVhZGVycywgaXAsIG9yaWdpbmFsVXJsKTtcbiAgICAvLyBwYXJzZSB0aGUgY2xhaW1cbiAgICBsZXQgY2xhaW1OYW1lO1xuICAgIHRyeSB7XG4gICAgICAoeyBjbGFpbU5hbWUgfSA9IGxicnlVcmkucGFyc2VDbGFpbShwYXJhbXMuY2xhaW0pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZX0pO1xuICAgIH1cbiAgICAvLyBwYXJzZSB0aGUgaWRlbnRpZmllclxuICAgIGxldCBpc0NoYW5uZWwsIGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCwgY2xhaW1JZDtcbiAgICB0cnkge1xuICAgICAgKHsgaXNDaGFubmVsLCBjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIGNsYWltSWQgfSA9IGxicnlVcmkucGFyc2VJZGVudGlmaWVyKHBhcmFtcy5pZGVudGlmaWVyKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTtcbiAgICB9XG4gICAgaWYgKCFpc0NoYW5uZWwpIHtcbiAgICAgIFtjbGFpbUlkLCBjbGFpbU5hbWVdID0gZmxpcENsYWltTmFtZUFuZElkRm9yQmFja3dhcmRzQ29tcGF0aWJpbGl0eShjbGFpbUlkLCBjbGFpbU5hbWUpO1xuICAgIH1cbiAgICAvLyBsb2cgdGhlIHJlcXVlc3QgZGF0YSBmb3IgZGVidWdnaW5nXG4gICAgbG9nUmVxdWVzdERhdGEocmVzcG9uc2VUeXBlLCBjbGFpbU5hbWUsIGNoYW5uZWxOYW1lLCBjbGFpbUlkKTtcbiAgICAvLyBnZXQgdGhlIGNsYWltIElkIGFuZCB0aGVuIHNlcnZlIHRoZSBhc3NldFxuICAgIGdldENsYWltSWRBbmRTZXJ2ZUFzc2V0KGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCwgY2xhaW1OYW1lLCBjbGFpbUlkLCBvcmlnaW5hbFVybCwgaXAsIHJlcyk7XG4gIH0pO1xuICAvLyByb3V0ZSB0byBzZXJ2ZSB0aGUgd2lubmluZyBhc3NldCBhdCBhIGNsYWltIG9yIGEgY2hhbm5lbCBwYWdlXG4gIGFwcC5nZXQoJy86Y2xhaW0nLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIGlwLCBvcmlnaW5hbFVybCwgcGFyYW1zIH0gPSByZXE7XG4gICAgLy8gZGVjaWRlIGlmIHRoaXMgaXMgYSBzaG93IHJlcXVlc3RcbiAgICBsZXQgaGFzRmlsZUV4dGVuc2lvbjtcbiAgICB0cnkge1xuICAgICAgKHsgaGFzRmlsZUV4dGVuc2lvbiB9ID0gbGJyeVVyaS5wYXJzZU1vZGlmaWVyKHBhcmFtcy5jbGFpbSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfSk7XG4gICAgfVxuICAgIGxldCByZXNwb25zZVR5cGUgPSBkZXRlcm1pbmVSZXNwb25zZVR5cGUoaGFzRmlsZUV4dGVuc2lvbiwgaGVhZGVycyk7XG4gICAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gU0VSVkUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVTaG93UmVuZGVyKHJlcSwgcmVzKTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHNlcnZlIHJlcXVlc3RcbiAgICAvLyBzZW5kIGdvb2dsZSBhbmFseXRpY3NcbiAgICBzZW5kR0FTZXJ2ZUV2ZW50KGhlYWRlcnMsIGlwLCBvcmlnaW5hbFVybCk7XG4gICAgLy8gcGFyc2UgdGhlIGNsYWltXG4gICAgbGV0IGNsYWltTmFtZTtcbiAgICB0cnkge1xuICAgICAgKHtjbGFpbU5hbWV9ID0gbGJyeVVyaS5wYXJzZUNsYWltKHBhcmFtcy5jbGFpbSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlfSk7XG4gICAgfVxuICAgIC8vIGxvZyB0aGUgcmVxdWVzdCBkYXRhIGZvciBkZWJ1Z2dpbmdcbiAgICBsb2dSZXF1ZXN0RGF0YShyZXNwb25zZVR5cGUsIGNsYWltTmFtZSwgbnVsbCwgbnVsbCk7XG4gICAgLy8gZ2V0IHRoZSBjbGFpbSBJZCBhbmQgdGhlbiBzZXJ2ZSB0aGUgYXNzZXRcbiAgICBnZXRDbGFpbUlkQW5kU2VydmVBc3NldChudWxsLCBudWxsLCBjbGFpbU5hbWUsIG51bGwsIG9yaWdpbmFsVXJsLCBpcCwgcmVzKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3JvdXRlcy9hc3NldC1yb3V0ZXMuanMiLCJjb25zdCBsb2dnZXIgPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5jb25zdCB7IGdldENsYWltSWQsIGdldExvY2FsRmlsZVJlY29yZCB9ID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcnMvc2VydmVDb250cm9sbGVyLmpzJyk7XG5jb25zdCB7IGhhbmRsZUVycm9yUmVzcG9uc2UgfSA9IHJlcXVpcmUoJy4vZXJyb3JIYW5kbGVycy5qcycpO1xuXG5jb25zdCBTRVJWRSA9ICdTRVJWRSc7XG5jb25zdCBTSE9XID0gJ1NIT1cnO1xuY29uc3QgTk9fRklMRSA9ICdOT19GSUxFJztcbmNvbnN0IE5PX0NIQU5ORUwgPSAnTk9fQ0hBTk5FTCc7XG5jb25zdCBOT19DTEFJTSA9ICdOT19DTEFJTSc7XG5cbmZ1bmN0aW9uIGNsaWVudEFjY2VwdHNIdG1sICh7YWNjZXB0fSkge1xuICByZXR1cm4gYWNjZXB0ICYmIGFjY2VwdC5tYXRjaCgvdGV4dFxcL2h0bWwvKTtcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3RJc0Zyb21Ccm93c2VyIChoZWFkZXJzKSB7XG4gIHJldHVybiBoZWFkZXJzWyd1c2VyLWFnZW50J10gJiYgaGVhZGVyc1sndXNlci1hZ2VudCddLm1hdGNoKC9Nb3ppbGxhLyk7XG59O1xuXG5mdW5jdGlvbiBjbGllbnRXYW50c0Fzc2V0ICh7YWNjZXB0LCByYW5nZX0pIHtcbiAgY29uc3QgaW1hZ2VJc1dhbnRlZCA9IGFjY2VwdCAmJiBhY2NlcHQubWF0Y2goL2ltYWdlXFwvLiovKSAmJiAhYWNjZXB0Lm1hdGNoKC90ZXh0XFwvaHRtbC8pICYmICFhY2NlcHQubWF0Y2goL3RleHRcXC9cXCovKTtcbiAgY29uc3QgdmlkZW9Jc1dhbnRlZCA9IGFjY2VwdCAmJiByYW5nZTtcbiAgcmV0dXJuIGltYWdlSXNXYW50ZWQgfHwgdmlkZW9Jc1dhbnRlZDtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRDbGFpbUlkIChjbGFpbUlkKSB7XG4gIHJldHVybiAoKGNsYWltSWQubGVuZ3RoID09PSA0MCkgJiYgIS9bXkEtWmEtejAtOV0vZy50ZXN0KGNsYWltSWQpKTtcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRTaG9ydElkIChjbGFpbUlkKSB7XG4gIHJldHVybiBjbGFpbUlkLmxlbmd0aCA9PT0gMTsgIC8vIGl0IHNob3VsZCByZWFsbHkgZXZhbHVhdGUgdGhlIHNob3J0IHVybCBpdHNlbGZcbn07XG5cbmZ1bmN0aW9uIGlzVmFsaWRTaG9ydElkT3JDbGFpbUlkIChpbnB1dCkge1xuICByZXR1cm4gKGlzVmFsaWRDbGFpbUlkKGlucHV0KSB8fCBpc1ZhbGlkU2hvcnRJZChpbnB1dCkpO1xufTtcblxuZnVuY3Rpb24gc2VydmVBc3NldFRvQ2xpZW50IChjbGFpbUlkLCBuYW1lLCByZXMpIHtcbiAgcmV0dXJuIGdldExvY2FsRmlsZVJlY29yZChjbGFpbUlkLCBuYW1lKVxuICAgIC50aGVuKGZpbGVSZWNvcmQgPT4ge1xuICAgICAgLy8gY2hlY2sgdGhhdCBhIGxvY2FsIHJlY29yZCB3YXMgZm91bmRcbiAgICAgIGlmIChmaWxlUmVjb3JkID09PSBOT19GSUxFKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDMwNykucmVkaXJlY3QoYC9hcGkvY2xhaW0vZ2V0LyR7bmFtZX0vJHtjbGFpbUlkfWApO1xuICAgICAgfVxuICAgICAgLy8gc2VydmUgdGhlIGZpbGVcbiAgICAgIGNvbnN0IHtmaWxlUGF0aCwgZmlsZVR5cGV9ID0gZmlsZVJlY29yZDtcbiAgICAgIGxvZ2dlci52ZXJib3NlKGBzZXJ2aW5nIGZpbGU6ICR7ZmlsZVBhdGh9YCk7XG4gICAgICBjb25zdCBzZW5kRmlsZU9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnWC1Db250ZW50LVR5cGUtT3B0aW9ucyc6ICdub3NuaWZmJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJyAgICAgICAgICA6IGZpbGVUeXBlIHx8ICdpbWFnZS9qcGVnJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZEZpbGUoZmlsZVBhdGgsIHNlbmRGaWxlT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q2xhaW1JZEFuZFNlcnZlQXNzZXQgKGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCwgY2xhaW1OYW1lLCBjbGFpbUlkLCBvcmlnaW5hbFVybCwgaXAsIHJlcykge1xuICAgIC8vIGdldCB0aGUgY2xhaW0gSWQgYW5kIHRoZW4gc2VydmUgdGhlIGFzc2V0XG4gICAgZ2V0Q2xhaW1JZChjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIGNsYWltTmFtZSwgY2xhaW1JZClcbiAgICAgIC50aGVuKGZ1bGxDbGFpbUlkID0+IHtcbiAgICAgICAgaWYgKGZ1bGxDbGFpbUlkID09PSBOT19DTEFJTSkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdubyBjbGFpbSBpZCBjb3VsZCBiZSBmb3VuZCd9KTtcbiAgICAgICAgfSBlbHNlIGlmIChmdWxsQ2xhaW1JZCA9PT0gTk9fQ0hBTk5FTCkge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdubyBjaGFubmVsIGlkIGNvdWxkIGJlIGZvdW5kJ30pO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZlQXNzZXRUb0NsaWVudChmdWxsQ2xhaW1JZCwgY2xhaW1OYW1lLCByZXMpO1xuICAgICAgICAvLyBwb3N0VG9TdGF0cyhyZXNwb25zZVR5cGUsIG9yaWdpbmFsVXJsLCBpcCwgY2xhaW1OYW1lLCBmdWxsQ2xhaW1JZCwgJ3N1Y2Nlc3MnKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBoYW5kbGVFcnJvclJlc3BvbnNlKG9yaWdpbmFsVXJsLCBpcCwgZXJyb3IsIHJlcyk7XG4gICAgICAgIC8vIHBvc3RUb1N0YXRzKHJlc3BvbnNlVHlwZSwgb3JpZ2luYWxVcmwsIGlwLCBjbGFpbU5hbWUsIGZ1bGxDbGFpbUlkLCAnZmFpbCcpO1xuICAgICAgfSk7XG4gIH0sXG4gIGRldGVybWluZVJlc3BvbnNlVHlwZSAoaGFzRmlsZUV4dGVuc2lvbiwgaGVhZGVycykge1xuICAgIGxldCByZXNwb25zZVR5cGU7XG4gICAgaWYgKGhhc0ZpbGVFeHRlbnNpb24pIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IFNFUlZFOyAgLy8gYXNzdW1lIGEgc2VydmUgcmVxdWVzdCBpZiBmaWxlIGV4dGVuc2lvbiBpcyBwcmVzZW50XG4gICAgICBpZiAoY2xpZW50QWNjZXB0c0h0bWwoaGVhZGVycykpIHsgIC8vIGlmIHRoZSByZXF1ZXN0IGNvbWVzIGZyb20gYSBicm93c2VyLCBjaGFuZ2UgaXQgdG8gYSBzaG93IHJlcXVlc3RcbiAgICAgICAgcmVzcG9uc2VUeXBlID0gU0hPVztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gU0hPVztcbiAgICAgIGlmIChjbGllbnRXYW50c0Fzc2V0KGhlYWRlcnMpICYmIHJlcXVlc3RJc0Zyb21Ccm93c2VyKGhlYWRlcnMpKSB7ICAvLyB0aGlzIGlzIGluIGNhc2Ugc29tZW9uZSBlbWJlZHMgYSBzaG93IHVybFxuICAgICAgICBsb2dnZXIuZGVidWcoJ1Nob3cgcmVxdWVzdCBjYW1lIGZyb20gYnJvd3NlciBidXQgd2FudHMgYW4gaW1hZ2UvdmlkZW8uIENoYW5naW5nIHJlc3BvbnNlIHRvIHNlcnZlLi4uJyk7XG4gICAgICAgIHJlc3BvbnNlVHlwZSA9IFNFUlZFO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VUeXBlO1xuICB9LFxuICBmbGlwQ2xhaW1OYW1lQW5kSWRGb3JCYWNrd2FyZHNDb21wYXRpYmlsaXR5IChpZGVudGlmaWVyLCBuYW1lKSB7XG4gICAgLy8gdGhpcyBpcyBhIHBhdGNoIGZvciBiYWNrd2FyZHMgY29tcGF0YWJpbGl0eSB3aXRoICcvbmFtZS9jbGFpbV9pZCcgdXJsIGZvcm1hdFxuICAgIGlmIChpc1ZhbGlkU2hvcnRJZE9yQ2xhaW1JZChuYW1lKSAmJiAhaXNWYWxpZFNob3J0SWRPckNsYWltSWQoaWRlbnRpZmllcikpIHtcbiAgICAgIGNvbnN0IHRlbXBOYW1lID0gbmFtZTtcbiAgICAgIG5hbWUgPSBpZGVudGlmaWVyO1xuICAgICAgaWRlbnRpZmllciA9IHRlbXBOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gW2lkZW50aWZpZXIsIG5hbWVdO1xuICB9LFxuICBsb2dSZXF1ZXN0RGF0YSAocmVzcG9uc2VUeXBlLCBjbGFpbU5hbWUsIGNoYW5uZWxOYW1lLCBjbGFpbUlkKSB7XG4gICAgbG9nZ2VyLmRlYnVnKCdyZXNwb25zZVR5cGUgPT09JywgcmVzcG9uc2VUeXBlKTtcbiAgICBsb2dnZXIuZGVidWcoJ2NsYWltIG5hbWUgPT09ICcsIGNsYWltTmFtZSk7XG4gICAgbG9nZ2VyLmRlYnVnKCdjaGFubmVsIG5hbWUgPT09JywgY2hhbm5lbE5hbWUpO1xuICAgIGxvZ2dlci5kZWJ1ZygnY2xhaW0gaWQgPT09JywgY2xhaW1JZCk7XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvc2VydmVIZWxwZXJzLmpzIiwiY29uc3QgbG9nZ2VyID0gcmVxdWlyZSgnd2luc3RvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUkVHRVhQX0lOVkFMSURfQ0xBSU0gIDogL1teQS1aYS16MC05LV0vZyxcbiAgUkVHRVhQX0lOVkFMSURfQ0hBTk5FTDogL1teQS1aYS16MC05LUBdL2csXG4gIFJFR0VYUF9BRERSRVNTICAgICAgICA6IC9eYig/PVteME9JbF17MzIsMzN9KVswLTlBLVphLXpdezMyLDMzfSQvLFxuICBDSEFOTkVMX0NIQVIgICAgICAgICAgOiAnQCcsXG4gIHBhcnNlSWRlbnRpZmllciAgICAgICA6IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XG4gICAgbG9nZ2VyLmRlYnVnKCdwYXJzaW5nIGlkZW50aWZpZXI6JywgaWRlbnRpZmllcik7XG4gICAgY29uc3QgY29tcG9uZW50c1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICcoW146JCMvXSopJyArIC8vIHZhbHVlIChzdG9wcyBhdCB0aGUgZmlyc3Qgc2VwYXJhdG9yIG9yIGVuZClcbiAgICAgICcoWzokI10/KShbXi9dKiknIC8vIG1vZGlmaWVyIHNlcGFyYXRvciwgbW9kaWZpZXIgKHN0b3BzIGF0IHRoZSBmaXJzdCBwYXRoIHNlcGFyYXRvciBvciBlbmQpXG4gICAgKTtcbiAgICBjb25zdCBbcHJvdG8sIHZhbHVlLCBtb2RpZmllclNlcGVyYXRvciwgbW9kaWZpZXJdID0gY29tcG9uZW50c1JlZ2V4XG4gICAgICAuZXhlYyhpZGVudGlmaWVyKVxuICAgICAgLm1hcChtYXRjaCA9PiBtYXRjaCB8fCBudWxsKTtcbiAgICBsb2dnZXIuZGVidWcoYCR7cHJvdG99LCAke3ZhbHVlfSwgJHttb2RpZmllclNlcGVyYXRvcn0sICR7bW9kaWZpZXJ9YCk7XG5cbiAgICAvLyBWYWxpZGF0ZSBhbmQgcHJvY2VzcyBuYW1lXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGVjayB5b3VyIHVybC4gIE5vIGNoYW5uZWwgbmFtZSBwcm92aWRlZCBiZWZvcmUgXCIke21vZGlmaWVyU2VwZXJhdG9yfVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IGlzQ2hhbm5lbCA9IHZhbHVlLnN0YXJ0c1dpdGgobW9kdWxlLmV4cG9ydHMuQ0hBTk5FTF9DSEFSKTtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IGlzQ2hhbm5lbCA/IHZhbHVlIDogbnVsbDtcbiAgICBsZXQgY2xhaW1JZDtcbiAgICBpZiAoaXNDaGFubmVsKSB7XG4gICAgICBpZiAoIWNoYW5uZWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2hhbm5lbCBuYW1lIGFmdGVyIEAuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lQmFkQ2hhcnMgPSAoY2hhbm5lbE5hbWUpLm1hdGNoKG1vZHVsZS5leHBvcnRzLlJFR0VYUF9JTlZBTElEX0NIQU5ORUwpO1xuICAgICAgaWYgKG5hbWVCYWRDaGFycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY2hhcmFjdGVycyBpbiBjaGFubmVsIG5hbWU6ICR7bmFtZUJhZENoYXJzLmpvaW4oJywgJyl9LmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGFpbUlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgYW5kIHByb2Nlc3MgbW9kaWZpZXJcbiAgICBsZXQgY2hhbm5lbENsYWltSWQ7XG4gICAgaWYgKG1vZGlmaWVyU2VwZXJhdG9yKSB7XG4gICAgICBpZiAoIW1vZGlmaWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbW9kaWZpZXIgcHJvdmlkZWQgYWZ0ZXIgc2VwYXJhdG9yIFwiJHttb2RpZmllclNlcGVyYXRvcn1cImApO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kaWZpZXJTZXBlcmF0b3IgPT09ICc6Jykge1xuICAgICAgICBjaGFubmVsQ2xhaW1JZCA9IG1vZGlmaWVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCIke21vZGlmaWVyU2VwZXJhdG9yfVwiIG1vZGlmaWVyIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0NoYW5uZWwsXG4gICAgICBjaGFubmVsTmFtZSxcbiAgICAgIGNoYW5uZWxDbGFpbUlkLFxuICAgICAgY2xhaW1JZCxcbiAgICB9O1xuICB9LFxuICBwYXJzZUNsYWltOiBmdW5jdGlvbiAoY2xhaW0pIHtcbiAgICBsb2dnZXIuZGVidWcoJ3BhcnNpbmcgbmFtZTonLCBjbGFpbSk7XG4gICAgY29uc3QgY29tcG9uZW50c1JlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICcoW146JCMvLl0qKScgKyAvLyBuYW1lIChzdG9wcyBhdCB0aGUgZmlyc3QgbW9kaWZpZXIpXG4gICAgICAnKFs6JCMuXT8pKFteL10qKScgLy8gbW9kaWZpZXIgc2VwYXJhdG9yLCBtb2RpZmllciAoc3RvcHMgYXQgdGhlIGZpcnN0IHBhdGggc2VwYXJhdG9yIG9yIGVuZClcbiAgICApO1xuICAgIGNvbnN0IFtwcm90bywgY2xhaW1OYW1lLCBtb2RpZmllclNlcGVyYXRvciwgbW9kaWZpZXJdID0gY29tcG9uZW50c1JlZ2V4XG4gICAgICAuZXhlYyhjbGFpbSlcbiAgICAgIC5tYXAobWF0Y2ggPT4gbWF0Y2ggfHwgbnVsbCk7XG4gICAgbG9nZ2VyLmRlYnVnKGAke3Byb3RvfSwgJHtjbGFpbU5hbWV9LCAke21vZGlmaWVyU2VwZXJhdG9yfSwgJHttb2RpZmllcn1gKTtcblxuICAgIC8vIFZhbGlkYXRlIGFuZCBwcm9jZXNzIG5hbWVcbiAgICBpZiAoIWNsYWltTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjbGFpbSBuYW1lIHByb3ZpZGVkIGJlZm9yZSAuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5hbWVCYWRDaGFycyA9IChjbGFpbU5hbWUpLm1hdGNoKG1vZHVsZS5leHBvcnRzLlJFR0VYUF9JTlZBTElEX0NMQUlNKTtcbiAgICBpZiAobmFtZUJhZENoYXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY2hhcmFjdGVycyBpbiBjbGFpbSBuYW1lOiAke25hbWVCYWRDaGFycy5qb2luKCcsICcpfS5gKTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgYW5kIHByb2Nlc3MgbW9kaWZpZXJcbiAgICBpZiAobW9kaWZpZXJTZXBlcmF0b3IpIHtcbiAgICAgIGlmICghbW9kaWZpZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBmaWxlIGV4dGVuc2lvbiBwcm92aWRlZCBhZnRlciBzZXBhcmF0b3IgJHttb2RpZmllclNlcGVyYXRvcn0uYCk7XG4gICAgICB9XG4gICAgICBpZiAobW9kaWZpZXJTZXBlcmF0b3IgIT09ICcuJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAke21vZGlmaWVyU2VwZXJhdG9yfSBtb2RpZmllciBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjbGFpbSBuYW1lYCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiByZXN1bHRzXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYWltTmFtZSxcbiAgICB9O1xuICB9LFxuICBwYXJzZU1vZGlmaWVyOiBmdW5jdGlvbiAoY2xhaW0pIHtcbiAgICBsb2dnZXIuZGVidWcoJ3BhcnNpbmcgbW9kaWZpZXI6JywgY2xhaW0pO1xuICAgIGNvbnN0IGNvbXBvbmVudHNSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAnKFteOiQjLy5dKiknICsgLy8gbmFtZSAoc3RvcHMgYXQgdGhlIGZpcnN0IG1vZGlmaWVyKVxuICAgICAgJyhbOiQjLl0/KShbXi9dKiknIC8vIG1vZGlmaWVyIHNlcGFyYXRvciwgbW9kaWZpZXIgKHN0b3BzIGF0IHRoZSBmaXJzdCBwYXRoIHNlcGFyYXRvciBvciBlbmQpXG4gICAgKTtcbiAgICBjb25zdCBbcHJvdG8sIGNsYWltTmFtZSwgbW9kaWZpZXJTZXBlcmF0b3IsIG1vZGlmaWVyXSA9IGNvbXBvbmVudHNSZWdleFxuICAgICAgLmV4ZWMoY2xhaW0pXG4gICAgICAubWFwKG1hdGNoID0+IG1hdGNoIHx8IG51bGwpO1xuICAgIGxvZ2dlci5kZWJ1ZyhgJHtwcm90b30sICR7Y2xhaW1OYW1lfSwgJHttb2RpZmllclNlcGVyYXRvcn0sICR7bW9kaWZpZXJ9YCk7XG4gICAgLy8gVmFsaWRhdGUgYW5kIHByb2Nlc3MgbW9kaWZpZXJcbiAgICBsZXQgaGFzRmlsZUV4dGVuc2lvbiA9IGZhbHNlO1xuICAgIGlmIChtb2RpZmllclNlcGVyYXRvcikge1xuICAgICAgaGFzRmlsZUV4dGVuc2lvbiA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoYXNGaWxlRXh0ZW5zaW9uLFxuICAgIH07XG4gIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2hlbHBlcnMvbGJyeVVyaS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4uLy4uL2NsaWVudC9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEdBTGlzdGVuZXIgZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvR0FMaXN0ZW5lci9pbmRleCc7XG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL2NsaWVudC9hcHAnO1xuaW1wb3J0IHJlbmRlckZ1bGxQYWdlIGZyb20gJy4vcmVuZGVyRnVsbFBhZ2UnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBoYW5kbGVTaG93UGFnZVVyaSB9IGZyb20gJy4uLy4uL2NsaWVudC9zYWdhcy9zaG93X3VyaSc7XG5pbXBvcnQgeyBvbkhhbmRsZVNob3dQYWdlVXJpIH0gZnJvbSAnLi4vLi4vY2xpZW50L2FjdGlvbnMvc2hvdyc7XG5cbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcblxuY29uc3QgcmV0dXJuU2FnYVdpdGhQYXJhbXMgPSAoc2FnYSwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiAqICgpIHtcbiAgICB5aWVsZCBjYWxsKHNhZ2EsIHBhcmFtcyk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChyZXEsIHJlcykgPT4ge1xuICBsZXQgY29udGV4dCA9IHt9O1xuXG4gIC8vIGNyZWF0ZSBhbmQgYXBwbHkgbWlkZGxld2FyZVxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpO1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBSZWR1eCBzdG9yZSBpbnN0YW5jZVxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXIsIG1pZGRsZXdhcmUpO1xuXG4gIC8vIGNyZWF0ZSBzYWdhXG4gIGNvbnN0IGFjdGlvbiA9IG9uSGFuZGxlU2hvd1BhZ2VVcmkocmVxLnBhcmFtcyk7XG4gIGNvbnN0IHNhZ2EgPSByZXR1cm5TYWdhV2l0aFBhcmFtcyhoYW5kbGVTaG93UGFnZVVyaSwgYWN0aW9uKTtcblxuICAvLyBydW4gdGhlIHNhZ2EgbWlkZGxld2FyZVxuICBzYWdhTWlkZGxld2FyZVxuICAgIC5ydW4oc2FnYSlcbiAgICAuZG9uZVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIC8vIHJlbmRlciBjb21wb25lbnQgdG8gYSBzdHJpbmdcbiAgICAgIGNvbnN0IGh0bWwgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICA8R0FMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9HQUxpc3RlbmVyPlxuICAgICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgKTtcblxuICAgICAgLy8gZ2V0IGhlYWQgdGFncyBmcm9tIGhlbG1ldFxuICAgICAgY29uc3QgaGVsbWV0ID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xuXG4gICAgICAvLyBjaGVjayBmb3IgYSByZWRpcmVjdFxuICAgICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAxLCBjb250ZXh0LnVybCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGdldCB0aGUgaW5pdGlhbCBzdGF0ZSBmcm9tIG91ciBSZWR1eCBzdG9yZVxuICAgICAgY29uc3QgcHJlbG9hZGVkU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAvLyBzZW5kIHRoZSByZW5kZXJlZCBwYWdlIGJhY2sgdG8gdGhlIGNsaWVudFxuICAgICAgcmVzLnNlbmQocmVuZGVyRnVsbFBhZ2UoaGVsbWV0LCBodG1sLCBwcmVsb2FkZWRTdGF0ZSkpO1xuICAgIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL2hhbmRsZVNob3dSZW5kZXIuanN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXNhZ2FcIlxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ2NvbnN0YW50cy9zaG93X2FjdGlvbl90eXBlcyc7XG5pbXBvcnQgeyBvblJlcXVlc3RFcnJvciwgb25OZXdDaGFubmVsUmVxdWVzdCwgb25OZXdBc3NldFJlcXVlc3QgfSBmcm9tICdhY3Rpb25zL3Nob3cnO1xuaW1wb3J0IHsgbmV3QXNzZXRSZXF1ZXN0IH0gZnJvbSAnc2FnYXMvc2hvd19hc3NldCc7XG5pbXBvcnQgeyBuZXdDaGFubmVsUmVxdWVzdCB9IGZyb20gJ3NhZ2FzL3Nob3dfY2hhbm5lbCc7XG5pbXBvcnQgbGJyeVVyaSBmcm9tICd1dGlscy9sYnJ5VXJpJztcblxuZnVuY3Rpb24gKiBwYXJzZUFuZFVwZGF0ZUlkZW50aWZpZXJBbmRDbGFpbSAobW9kaWZpZXIsIGNsYWltKSB7XG4gIC8vIHRoaXMgaXMgYSByZXF1ZXN0IGZvciBhbiBhc3NldFxuICAvLyBjbGFpbSB3aWxsIGJlIGFuIGFzc2V0IGNsYWltXG4gIC8vIHRoZSBpZGVudGlmaWVyIGNvdWxkIGJlIGEgY2hhbm5lbCBvciBhIGNsYWltIGlkXG4gIGxldCBpc0NoYW5uZWwsIGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCwgY2xhaW1JZCwgY2xhaW1OYW1lLCBleHRlbnNpb247XG4gIHRyeSB7XG4gICAgKHsgaXNDaGFubmVsLCBjaGFubmVsTmFtZSwgY2hhbm5lbENsYWltSWQsIGNsYWltSWQgfSA9IGxicnlVcmkucGFyc2VJZGVudGlmaWVyKG1vZGlmaWVyKSk7XG4gICAgKHsgY2xhaW1OYW1lLCBleHRlbnNpb24gfSA9IGxicnlVcmkucGFyc2VDbGFpbShjbGFpbSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB5aWVsZCBwdXQob25SZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICB9XG4gIC8vIHRyaWdnZXIgYW4gbmV3IGFjdGlvbiB0byB1cGRhdGUgdGhlIHN0b3JlXG4gIGlmIChpc0NoYW5uZWwpIHtcbiAgICByZXR1cm4geWllbGQgY2FsbChuZXdBc3NldFJlcXVlc3QsIG9uTmV3QXNzZXRSZXF1ZXN0KGNsYWltTmFtZSwgbnVsbCwgY2hhbm5lbE5hbWUsIGNoYW5uZWxDbGFpbUlkLCBleHRlbnNpb24pKTtcbiAgfTtcbiAgeWllbGQgY2FsbChuZXdBc3NldFJlcXVlc3QsIG9uTmV3QXNzZXRSZXF1ZXN0KGNsYWltTmFtZSwgY2xhaW1JZCwgbnVsbCwgbnVsbCwgZXh0ZW5zaW9uKSk7XG59XG5mdW5jdGlvbiAqIHBhcnNlQW5kVXBkYXRlQ2xhaW1Pbmx5IChjbGFpbSkge1xuICAvLyB0aGlzIGNvdWxkIGJlIGEgcmVxdWVzdCBmb3IgYW4gYXNzZXQgb3IgYSBjaGFubmVsIHBhZ2VcbiAgLy8gY2xhaW0gY291bGQgYmUgYW4gYXNzZXQgY2xhaW0gb3IgYSBjaGFubmVsIGNsYWltXG4gIGxldCBpc0NoYW5uZWwsIGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZDtcbiAgdHJ5IHtcbiAgICAoeyBpc0NoYW5uZWwsIGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCB9ID0gbGJyeVVyaS5wYXJzZUlkZW50aWZpZXIoY2xhaW0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICAvLyB0cmlnZ2VyIGFuIG5ldyBhY3Rpb24gdG8gdXBkYXRlIHRoZSBzdG9yZVxuICAvLyByZXR1cm4gZWFybHkgaWYgdGhpcyByZXF1ZXN0IGlzIGZvciBhIGNoYW5uZWxcbiAgaWYgKGlzQ2hhbm5lbCkge1xuICAgIHJldHVybiB5aWVsZCBjYWxsKG5ld0NoYW5uZWxSZXF1ZXN0LCBvbk5ld0NoYW5uZWxSZXF1ZXN0KGNoYW5uZWxOYW1lLCBjaGFubmVsQ2xhaW1JZCkpO1xuICB9XG4gIC8vIGlmIG5vdCBmb3IgYSBjaGFubmVsLCBwYXJzZSB0aGUgY2xhaW0gcmVxdWVzdFxuICBsZXQgY2xhaW1OYW1lLCBleHRlbnNpb247XG4gIHRyeSB7XG4gICAgKHtjbGFpbU5hbWUsIGV4dGVuc2lvbn0gPSBsYnJ5VXJpLnBhcnNlQ2xhaW0oY2xhaW0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICB5aWVsZCBjYWxsKG5ld0Fzc2V0UmVxdWVzdCwgb25OZXdBc3NldFJlcXVlc3QoY2xhaW1OYW1lLCBudWxsLCBudWxsLCBudWxsLCBleHRlbnNpb24pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICogaGFuZGxlU2hvd1BhZ2VVcmkgKGFjdGlvbikge1xuICBjb25zdCB7IGlkZW50aWZpZXIsIGNsYWltIH0gPSBhY3Rpb24uZGF0YTtcbiAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICByZXR1cm4geWllbGQgY2FsbChwYXJzZUFuZFVwZGF0ZUlkZW50aWZpZXJBbmRDbGFpbSwgaWRlbnRpZmllciwgY2xhaW0pO1xuICB9XG4gIHlpZWxkIGNhbGwocGFyc2VBbmRVcGRhdGVDbGFpbU9ubHksIGNsYWltKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiAqIHdhdGNoSGFuZGxlU2hvd1BhZ2VVcmkgKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuSEFORExFX1NIT1dfVVJJLCBoYW5kbGVTaG93UGFnZVVyaSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NhZ2FzL3Nob3dfdXJpLmpzIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdjb25zdGFudHMvc2hvd19hY3Rpb25fdHlwZXMnO1xuaW1wb3J0IHsgYWRkUmVxdWVzdFRvUmVxdWVzdExpc3QsIG9uUmVxdWVzdEVycm9yLCBvblJlcXVlc3RVcGRhdGUsIGFkZEFzc2V0VG9Bc3NldExpc3QgfSBmcm9tICdhY3Rpb25zL3Nob3cnO1xuaW1wb3J0IHsgZ2V0TG9uZ0NsYWltSWQsIGdldFNob3J0SWQsIGdldENsYWltRGF0YSB9IGZyb20gJ2FwaS9hc3NldEFwaSc7XG5pbXBvcnQgeyBzZWxlY3RTaG93U3RhdGUgfSBmcm9tICdzZWxlY3RvcnMvc2hvdyc7XG5pbXBvcnQgeyBzZWxlY3RTaXRlSG9zdCB9IGZyb20gJ3NlbGVjdG9ycy9zaXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uICogbmV3QXNzZXRSZXF1ZXN0IChhY3Rpb24pIHtcbiAgY29uc3QgeyByZXF1ZXN0VHlwZSwgcmVxdWVzdElkLCBuYW1lLCBtb2RpZmllciB9ID0gYWN0aW9uLmRhdGE7XG4gIC8vIHB1dCBhbiBhY3Rpb24gdG8gdXBkYXRlIHRoZSByZXF1ZXN0IGluIHJlZHV4XG4gIHlpZWxkIHB1dChvblJlcXVlc3RVcGRhdGUocmVxdWVzdFR5cGUsIHJlcXVlc3RJZCkpO1xuICAvLyBpcyB0aGlzIGFuIGV4aXN0aW5nIHJlcXVlc3Q/XG4gIC8vIElmIHRoaXMgdXJpIGlzIGluIHRoZSByZXF1ZXN0IGxpc3QsIGl0J3MgYWxyZWFkeSBiZWVuIGZldGNoZWRcbiAgY29uc3Qgc3RhdGUgPSB5aWVsZCBzZWxlY3Qoc2VsZWN0U2hvd1N0YXRlKTtcbiAgY29uc3QgaG9zdCA9IHlpZWxkIHNlbGVjdChzZWxlY3RTaXRlSG9zdCk7XG4gIGlmIChzdGF0ZS5yZXF1ZXN0TGlzdFtyZXF1ZXN0SWRdKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gZ2V0IGxvbmcgaWQgJiYgYWRkIHJlcXVlc3QgdG8gcmVxdWVzdCBsaXN0XG4gIGxldCBsb25nSWQ7XG4gIHRyeSB7XG4gICAgKHtkYXRhOiBsb25nSWR9ID0geWllbGQgY2FsbChnZXRMb25nQ2xhaW1JZCwgaG9zdCwgbmFtZSwgbW9kaWZpZXIpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICBjb25zdCBhc3NldEtleSA9IGBhIyR7bmFtZX0jJHtsb25nSWR9YDtcbiAgeWllbGQgcHV0KGFkZFJlcXVlc3RUb1JlcXVlc3RMaXN0KHJlcXVlc3RJZCwgbnVsbCwgYXNzZXRLZXkpKTtcbiAgLy8gaXMgdGhpcyBhbiBleGlzdGluZyBhc3NldD9cbiAgLy8gSWYgdGhpcyBhc3NldCBpcyBpbiB0aGUgYXNzZXQgbGlzdCwgaXQncyBhbHJlYWR5IGJlZW4gZmV0Y2hlZFxuICBpZiAoc3RhdGUuYXNzZXRMaXN0W2Fzc2V0S2V5XSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGdldCBzaG9ydCBJZFxuICBsZXQgc2hvcnRJZDtcbiAgdHJ5IHtcbiAgICAoe2RhdGE6IHNob3J0SWR9ID0geWllbGQgY2FsbChnZXRTaG9ydElkLCBob3N0LCBuYW1lLCBsb25nSWQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICAvLyBnZXQgYXNzZXQgY2xhaW0gZGF0YVxuICBsZXQgY2xhaW1EYXRhO1xuICB0cnkge1xuICAgICh7ZGF0YTogY2xhaW1EYXRhfSA9IHlpZWxkIGNhbGwoZ2V0Q2xhaW1EYXRhLCBob3N0LCBuYW1lLCBsb25nSWQpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICAvLyBhZGQgYXNzZXQgdG8gYXNzZXQgbGlzdFxuICB5aWVsZCBwdXQoYWRkQXNzZXRUb0Fzc2V0TGlzdChhc3NldEtleSwgbnVsbCwgbmFtZSwgbG9uZ0lkLCBzaG9ydElkLCBjbGFpbURhdGEpKTtcbiAgLy8gY2xlYXIgYW55IGVycm9ycyBpbiByZXF1ZXN0IGVycm9yXG4gIHlpZWxkIHB1dChvblJlcXVlc3RFcnJvcihudWxsKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gKiB3YXRjaE5ld0Fzc2V0UmVxdWVzdCAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9ucy5BU1NFVF9SRVFVRVNUX05FVywgbmV3QXNzZXRSZXF1ZXN0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc2FnYXMvc2hvd19hc3NldC5qcyIsImltcG9ydCBSZXF1ZXN0IGZyb20gJ3V0aWxzL3JlcXVlc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9uZ0NsYWltSWQgKGhvc3QsIG5hbWUsIG1vZGlmaWVyKSB7XG4gIGxldCBib2R5ID0ge307XG4gIC8vIGNyZWF0ZSByZXF1ZXN0IHBhcmFtc1xuICBpZiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXIuaWQpIHtcbiAgICAgIGJvZHlbJ2NsYWltSWQnXSA9IG1vZGlmaWVyLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5WydjaGFubmVsTmFtZSddID0gbW9kaWZpZXIuY2hhbm5lbC5uYW1lO1xuICAgICAgYm9keVsnY2hhbm5lbENsYWltSWQnXSA9IG1vZGlmaWVyLmNoYW5uZWwuaWQ7XG4gICAgfVxuICB9XG4gIGJvZHlbJ2NsYWltTmFtZSddID0gbmFtZTtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5ICAgOiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgfTtcbiAgLy8gY3JlYXRlIHVybFxuICBjb25zdCB1cmwgPSBgJHtob3N0fS9hcGkvY2xhaW0vbG9uZy1pZGA7XG4gIC8vIHJldHVybiB0aGUgcmVxdWVzdCBwcm9taXNlXG4gIHJldHVybiBSZXF1ZXN0KHVybCwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG9ydElkIChob3N0LCBuYW1lLCBjbGFpbUlkKSB7XG4gIGNvbnN0IHVybCA9IGAke2hvc3R9L2FwaS9jbGFpbS9zaG9ydC1pZC8ke2NsYWltSWR9LyR7bmFtZX1gO1xuICByZXR1cm4gUmVxdWVzdCh1cmwpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYWltRGF0YSAoaG9zdCwgbmFtZSwgY2xhaW1JZCkge1xuICBjb25zdCB1cmwgPSBgJHtob3N0fS9hcGkvY2xhaW0vZGF0YS8ke25hbWV9LyR7Y2xhaW1JZH1gO1xuICByZXR1cm4gUmVxdWVzdCh1cmwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcGkvYXNzZXRBcGkuanMiLCJpbXBvcnQge2NhbGwsIHB1dCwgc2VsZWN0LCB0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdjb25zdGFudHMvc2hvd19hY3Rpb25fdHlwZXMnO1xuaW1wb3J0IHsgYWRkTmV3Q2hhbm5lbFRvQ2hhbm5lbExpc3QsIGFkZFJlcXVlc3RUb1JlcXVlc3RMaXN0LCBvblJlcXVlc3RFcnJvciwgb25SZXF1ZXN0VXBkYXRlLCB1cGRhdGVDaGFubmVsQ2xhaW1zIH0gZnJvbSAnYWN0aW9ucy9zaG93JztcbmltcG9ydCB7IGdldENoYW5uZWxDbGFpbXMsIGdldENoYW5uZWxEYXRhIH0gZnJvbSAnYXBpL2NoYW5uZWxBcGknO1xuaW1wb3J0IHsgc2VsZWN0U2hvd1N0YXRlIH0gZnJvbSAnc2VsZWN0b3JzL3Nob3cnO1xuaW1wb3J0IHsgc2VsZWN0U2l0ZUhvc3QgfSBmcm9tICdzZWxlY3RvcnMvc2l0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiAqIG5ld0NoYW5uZWxSZXF1ZXN0IChhY3Rpb24pIHtcbiAgY29uc3QgeyByZXF1ZXN0VHlwZSwgcmVxdWVzdElkLCBjaGFubmVsTmFtZSwgY2hhbm5lbElkIH0gPSBhY3Rpb24uZGF0YTtcbiAgLy8gcHV0IGFuIGFjdGlvbiB0byB1cGRhdGUgdGhlIHJlcXVlc3QgaW4gcmVkdXhcbiAgeWllbGQgcHV0KG9uUmVxdWVzdFVwZGF0ZShyZXF1ZXN0VHlwZSwgcmVxdWVzdElkKSk7XG4gIC8vIGlzIHRoaXMgYW4gZXhpc3RpbmcgcmVxdWVzdD9cbiAgLy8gSWYgdGhpcyB1cmkgaXMgaW4gdGhlIHJlcXVlc3QgbGlzdCwgaXQncyBhbHJlYWR5IGJlZW4gZmV0Y2hlZFxuICBjb25zdCBzdGF0ZSA9IHlpZWxkIHNlbGVjdChzZWxlY3RTaG93U3RhdGUpO1xuICBjb25zdCBob3N0ID0geWllbGQgc2VsZWN0KHNlbGVjdFNpdGVIb3N0KTtcbiAgaWYgKHN0YXRlLnJlcXVlc3RMaXN0W3JlcXVlc3RJZF0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBnZXQgY2hhbm5lbCBsb25nIGlkXG4gIGxldCBsb25nSWQsIHNob3J0SWQ7XG4gIHRyeSB7XG4gICAgKHsgZGF0YToge2xvbmdDaGFubmVsQ2xhaW1JZDogbG9uZ0lkLCBzaG9ydENoYW5uZWxDbGFpbUlkOiBzaG9ydElkfSB9ID0geWllbGQgY2FsbChnZXRDaGFubmVsRGF0YSwgaG9zdCwgY2hhbm5lbE5hbWUsIGNoYW5uZWxJZCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB5aWVsZCBwdXQob25SZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuICB9XG4gIC8vIHN0b3JlIHRoZSByZXF1ZXN0IGluIHRoZSBjaGFubmVsIHJlcXVlc3RzIGxpc3RcbiAgY29uc3QgY2hhbm5lbEtleSA9IGBjIyR7Y2hhbm5lbE5hbWV9IyR7bG9uZ0lkfWA7XG4gIHlpZWxkIHB1dChhZGRSZXF1ZXN0VG9SZXF1ZXN0TGlzdChyZXF1ZXN0SWQsIG51bGwsIGNoYW5uZWxLZXkpKTtcbiAgLy8gaXMgdGhpcyBhbiBleGlzdGluZyBjaGFubmVsP1xuICAvLyBJZiB0aGlzIGNoYW5uZWwgaXMgaW4gdGhlIGNoYW5uZWwgbGlzdCwgaXQncyBhbHJlYWR5IGJlZW4gZmV0Y2hlZFxuICBpZiAoc3RhdGUuY2hhbm5lbExpc3RbY2hhbm5lbEtleV0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBnZXQgY2hhbm5lbCBjbGFpbXMgZGF0YVxuICBsZXQgY2xhaW1zRGF0YTtcbiAgdHJ5IHtcbiAgICAoeyBkYXRhOiBjbGFpbXNEYXRhIH0gPSB5aWVsZCBjYWxsKGdldENoYW5uZWxDbGFpbXMsIGhvc3QsIGxvbmdJZCwgY2hhbm5lbE5hbWUsIDEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICAvLyBzdG9yZSB0aGUgY2hhbm5lbCBkYXRhIGluIHRoZSBjaGFubmVsIGxpc3RcbiAgeWllbGQgcHV0KGFkZE5ld0NoYW5uZWxUb0NoYW5uZWxMaXN0KGNoYW5uZWxLZXksIGNoYW5uZWxOYW1lLCBzaG9ydElkLCBsb25nSWQsIGNsYWltc0RhdGEpKTtcbiAgLy8gY2xlYXIgYW55IHJlcXVlc3QgZXJyb3JzXG4gIHlpZWxkIHB1dChvblJlcXVlc3RFcnJvcihudWxsKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAqIHdhdGNoTmV3Q2hhbm5lbFJlcXVlc3QgKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuQ0hBTk5FTF9SRVFVRVNUX05FVywgbmV3Q2hhbm5lbFJlcXVlc3QpO1xufTtcblxuZnVuY3Rpb24gKiBnZXROZXdDbGFpbXNBbmRVcGRhdGVDaGFubmVsIChhY3Rpb24pIHtcbiAgY29uc3QgeyBjaGFubmVsS2V5LCBuYW1lLCBsb25nSWQsIHBhZ2UgfSA9IGFjdGlvbi5kYXRhO1xuICBjb25zdCBob3N0ID0geWllbGQgc2VsZWN0KHNlbGVjdFNpdGVIb3N0KTtcbiAgbGV0IGNsYWltc0RhdGE7XG4gIHRyeSB7XG4gICAgKHsgZGF0YTogY2xhaW1zRGF0YSB9ID0geWllbGQgY2FsbChnZXRDaGFubmVsQ2xhaW1zLCBob3N0LCBsb25nSWQsIG5hbWUsIHBhZ2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geWllbGQgcHV0KG9uUmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgfVxuICB5aWVsZCBwdXQodXBkYXRlQ2hhbm5lbENsYWltcyhjaGFubmVsS2V5LCBjbGFpbXNEYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAqIHdhdGNoVXBkYXRlQ2hhbm5lbENsYWltcyAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9ucy5DSEFOTkVMX0NMQUlNU19VUERBVEVfQVNZTkMsIGdldE5ld0NsYWltc0FuZFVwZGF0ZUNoYW5uZWwpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NhZ2FzL3Nob3dfY2hhbm5lbC5qcyIsImltcG9ydCBSZXF1ZXN0IGZyb20gJ3V0aWxzL3JlcXVlc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhbm5lbERhdGEgKGhvc3QsIGlkLCBuYW1lKSB7XG4gIGlmICghaWQpIGlkID0gJ25vbmUnO1xuICBjb25zdCB1cmwgPSBgJHtob3N0fS9hcGkvY2hhbm5lbC9kYXRhLyR7bmFtZX0vJHtpZH1gO1xuICByZXR1cm4gUmVxdWVzdCh1cmwpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYW5uZWxDbGFpbXMgKGhvc3QsIGxvbmdJZCwgbmFtZSwgcGFnZSkge1xuICBpZiAoIXBhZ2UpIHBhZ2UgPSAxO1xuICBjb25zdCB1cmwgPSBgJHtob3N0fS9hcGkvY2hhbm5lbC9jbGFpbXMvJHtuYW1lfS8ke2xvbmdJZH0vJHtwYWdlfWA7XG4gIHJldHVybiBSZXF1ZXN0KHVybCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FwaS9jaGFubmVsQXBpLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJFR0VYUF9JTlZBTElEX0NMQUlNICA6IC9bXkEtWmEtejAtOS1dL2csXG4gIFJFR0VYUF9JTlZBTElEX0NIQU5ORUw6IC9bXkEtWmEtejAtOS1AXS9nLFxuICBSRUdFWFBfQUREUkVTUyAgICAgICAgOiAvXmIoPz1bXjBPSWxdezMyLDMzfSlbMC05QS1aYS16XXszMiwzM30kLyxcbiAgQ0hBTk5FTF9DSEFSICAgICAgICAgIDogJ0AnLFxuICBwYXJzZUlkZW50aWZpZXIgICAgICAgOiBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbXBvbmVudHNSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAnKFteOiQjL10qKScgKyAvLyB2YWx1ZSAoc3RvcHMgYXQgdGhlIGZpcnN0IHNlcGFyYXRvciBvciBlbmQpXG4gICAgICAnKFs6JCNdPykoW14vXSopJyAvLyBtb2RpZmllciBzZXBhcmF0b3IsIG1vZGlmaWVyIChzdG9wcyBhdCB0aGUgZmlyc3QgcGF0aCBzZXBhcmF0b3Igb3IgZW5kKVxuICAgICk7XG4gICAgY29uc3QgW3Byb3RvLCB2YWx1ZSwgbW9kaWZpZXJTZXBlcmF0b3IsIG1vZGlmaWVyXSA9IGNvbXBvbmVudHNSZWdleCAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgLmV4ZWMoaWRlbnRpZmllcilcbiAgICAgIC5tYXAobWF0Y2ggPT4gbWF0Y2ggfHwgbnVsbCk7XG5cbiAgICAvLyBWYWxpZGF0ZSBhbmQgcHJvY2VzcyBuYW1lXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGVjayB5b3VyIFVSTC4gIE5vIGNoYW5uZWwgbmFtZSBwcm92aWRlZCBiZWZvcmUgXCIke21vZGlmaWVyU2VwZXJhdG9yfVwiYCk7XG4gICAgfVxuICAgIGNvbnN0IGlzQ2hhbm5lbCA9IHZhbHVlLnN0YXJ0c1dpdGgobW9kdWxlLmV4cG9ydHMuQ0hBTk5FTF9DSEFSKTtcbiAgICBjb25zdCBjaGFubmVsTmFtZSA9IGlzQ2hhbm5lbCA/IHZhbHVlIDogbnVsbDtcbiAgICBsZXQgY2xhaW1JZDtcbiAgICBpZiAoaXNDaGFubmVsKSB7XG4gICAgICBpZiAoIWNoYW5uZWxOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2hlY2sgeW91ciBVUkwuICBObyBjaGFubmVsIG5hbWUgYWZ0ZXIgXCJAXCIuJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lQmFkQ2hhcnMgPSAoY2hhbm5lbE5hbWUpLm1hdGNoKG1vZHVsZS5leHBvcnRzLlJFR0VYUF9JTlZBTElEX0NIQU5ORUwpO1xuICAgICAgaWYgKG5hbWVCYWRDaGFycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENoZWNrIHlvdXIgVVJMLiAgSW52YWxpZCBjaGFyYWN0ZXJzIGluIGNoYW5uZWwgbmFtZTogXCIke25hbWVCYWRDaGFycy5qb2luKCcsICcpfVwiLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGFpbUlkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgYW5kIHByb2Nlc3MgbW9kaWZpZXJcbiAgICBsZXQgY2hhbm5lbENsYWltSWQ7XG4gICAgaWYgKG1vZGlmaWVyU2VwZXJhdG9yKSB7XG4gICAgICBpZiAoIW1vZGlmaWVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2hlY2sgeW91ciBVUkwuICBObyBtb2RpZmllciBwcm92aWRlZCBhZnRlciBzZXBhcmF0b3IgXCIke21vZGlmaWVyU2VwZXJhdG9yfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2RpZmllclNlcGVyYXRvciA9PT0gJzonKSB7XG4gICAgICAgIGNoYW5uZWxDbGFpbUlkID0gbW9kaWZpZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENoZWNrIHlvdXIgVVJMLiAgVGhlIFwiJHttb2RpZmllclNlcGVyYXRvcn1cIiBtb2RpZmllciBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZGApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaXNDaGFubmVsLFxuICAgICAgY2hhbm5lbE5hbWUsXG4gICAgICBjaGFubmVsQ2xhaW1JZDogY2hhbm5lbENsYWltSWQgfHwgbnVsbCxcbiAgICAgIGNsYWltSWQgICAgICAgOiBjbGFpbUlkIHx8IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgcGFyc2VDbGFpbTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBjb25zdCBjb21wb25lbnRzUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgJyhbXjokIy8uXSopJyArIC8vIG5hbWUgKHN0b3BzIGF0IHRoZSBmaXJzdCBleHRlbnNpb24pXG4gICAgICAnKFs6JCMuXT8pKFteL10qKScgLy8gZXh0ZW5zaW9uIHNlcGFyYXRvciwgZXh0ZW5zaW9uIChzdG9wcyBhdCB0aGUgZmlyc3QgcGF0aCBzZXBhcmF0b3Igb3IgZW5kKVxuICAgICk7XG4gICAgY29uc3QgW3Byb3RvLCBjbGFpbU5hbWUsIGV4dGVuc2lvblNlcGVyYXRvciwgZXh0ZW5zaW9uXSA9IGNvbXBvbmVudHNSZWdleCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAuZXhlYyhuYW1lKVxuICAgICAgLm1hcChtYXRjaCA9PiBtYXRjaCB8fCBudWxsKTtcblxuICAgIC8vIFZhbGlkYXRlIGFuZCBwcm9jZXNzIG5hbWVcbiAgICBpZiAoIWNsYWltTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGVjayB5b3VyIFVSTC4gIE5vIGNsYWltIG5hbWUgcHJvdmlkZWQgYmVmb3JlIFwiLlwiJyk7XG4gICAgfVxuICAgIGNvbnN0IG5hbWVCYWRDaGFycyA9IChjbGFpbU5hbWUpLm1hdGNoKG1vZHVsZS5leHBvcnRzLlJFR0VYUF9JTlZBTElEX0NMQUlNKTtcbiAgICBpZiAobmFtZUJhZENoYXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENoZWNrIHlvdXIgVVJMLiAgSW52YWxpZCBjaGFyYWN0ZXJzIGluIGNsYWltIG5hbWU6IFwiJHtuYW1lQmFkQ2hhcnMuam9pbignLCAnKX1cIi5gKTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgYW5kIHByb2Nlc3MgZXh0ZW5zaW9uXG4gICAgaWYgKGV4dGVuc2lvblNlcGVyYXRvcikge1xuICAgICAgaWYgKCFleHRlbnNpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaGVjayB5b3VyIFVSTC4gIE5vIGZpbGUgZXh0ZW5zaW9uIHByb3ZpZGVkIGFmdGVyIHNlcGFyYXRvciBcIiR7ZXh0ZW5zaW9uU2VwZXJhdG9yfVwiLmApO1xuICAgICAgfVxuICAgICAgaWYgKGV4dGVuc2lvblNlcGVyYXRvciAhPT0gJy4nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2hlY2sgeW91ciBVUkwuICBUaGUgXCIke2V4dGVuc2lvblNlcGVyYXRvcn1cIiBzZXBhcmF0b3IgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgY2xhaW0gbmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYWltTmFtZSxcbiAgICAgIGV4dGVuc2lvbjogZXh0ZW5zaW9uIHx8IG51bGwsXG4gICAgfTtcbiAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdXRpbHMvbGJyeVVyaS5qcyIsImNvbnN0IGhhbmRsZVBhZ2VSZW5kZXIgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2hhbmRsZVBhZ2VSZW5kZXIuanN4Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwID0+IHtcbiAgLy8gYSBjYXRjaC1hbGwgcm91dGUgaWYgc29tZW9uZSB2aXNpdHMgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3RcbiAgYXBwLnVzZSgnKicsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIHNlbmQgcmVzcG9uc2VcbiAgICBoYW5kbGVQYWdlUmVuZGVyKHJlcSwgcmVzKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3JvdXRlcy9mYWxsYmFjay1yb3V0ZXMuanMiLCJjb25zdCB7IGxvZ0xldmVsIH0gPSByZXF1aXJlKCcuLi8uLi9jb25maWcvbG9nZ2VyQ29uZmlnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHdpbnN0b24pID0+IHtcbiAgLy8gY29uZmlndXJlXG4gIHdpbnN0b24uY29uZmlndXJlKHtcbiAgICB0cmFuc3BvcnRzOiBbXG4gICAgICBuZXcgKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKSh7XG4gICAgICAgIGxldmVsICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvZ0xldmVsLFxuICAgICAgICB0aW1lc3RhbXAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgY29sb3JpemUgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgcHJldHR5UHJpbnQgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgaGFuZGxlRXhjZXB0aW9ucyAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgaHVtYW5SZWFkYWJsZVVuaGFuZGxlZEV4Y2VwdGlvbjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xuICAvLyB0ZXN0IGFsbCB0aGUgbG9nIGxldmVsc1xuICB3aW5zdG9uLmVycm9yKCdMZXZlbCAwJyk7XG4gIHdpbnN0b24ud2FybignTGV2ZWwgMScpO1xuICB3aW5zdG9uLmluZm8oJ0xldmVsIDInKTtcbiAgd2luc3Rvbi52ZXJib3NlKCdMZXZlbCAzJyk7XG4gIHdpbnN0b24uZGVidWcoJ0xldmVsIDQnKTtcbiAgd2luc3Rvbi5zaWxseSgnTGV2ZWwgNScpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9oZWxwZXJzL2NvbmZpZ3VyZUxvZ2dlci5qcyIsImNvbnN0IGxvZ2dlckNvbmZpZyA9IHtcbiAgbG9nTGV2ZWw6ICdkZWJ1ZycsICAvLyBvcHRpb25zOiBzaWxseSwgZGVidWcsIHZlcmJvc2UsIGluZm9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nZ2VyQ29uZmlnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnL2xvZ2dlckNvbmZpZy5qcyIsImNvbnN0IHdpbnN0b25TbGFja1dlYkhvb2sgPSByZXF1aXJlKCd3aW5zdG9uLXNsYWNrLXdlYmhvb2snKS5TbGFja1dlYkhvb2s7XG5jb25zdCBzbGFja0NvbmZpZyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZy9zbGFja0NvbmZpZy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh3aW5zdG9uKSA9PiB7XG4gIGNvbnN0IHtzbGFja1dlYkhvb2ssIHNsYWNrRXJyb3JDaGFubmVsLCBzbGFja0luZm9DaGFubmVsfSA9IHNsYWNrQ29uZmlnO1xuICBpZiAoc2xhY2tXZWJIb29rKSB7XG4gICAgLy8gYWRkIGEgdHJhbnNwb3J0IGZvciBlcnJvcnMgdG8gc2xhY2tcbiAgICBpZiAoc2xhY2tFcnJvckNoYW5uZWwpIHtcbiAgICAgIHdpbnN0b24uYWRkKHdpbnN0b25TbGFja1dlYkhvb2ssIHtcbiAgICAgICAgbmFtZSAgICAgIDogJ3NsYWNrLWVycm9ycy10cmFuc3BvcnQnLFxuICAgICAgICBsZXZlbCAgICAgOiAnd2FybicsXG4gICAgICAgIHdlYmhvb2tVcmw6IHNsYWNrV2ViSG9vayxcbiAgICAgICAgY2hhbm5lbCAgIDogc2xhY2tFcnJvckNoYW5uZWwsXG4gICAgICAgIHVzZXJuYW1lICA6ICdzcGVlLmNoJyxcbiAgICAgICAgaWNvbkVtb2ppIDogJzpmYWNlX3dpdGhfaGVhZF9iYW5kYWdlOicsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChzbGFja0luZm9DaGFubmVsKSB7XG4gICAgICB3aW5zdG9uLmFkZCh3aW5zdG9uU2xhY2tXZWJIb29rLCB7XG4gICAgICAgIG5hbWUgICAgICA6ICdzbGFjay1pbmZvLXRyYW5zcG9ydCcsXG4gICAgICAgIGxldmVsICAgICA6ICdpbmZvJyxcbiAgICAgICAgd2ViaG9va1VybDogc2xhY2tXZWJIb29rLFxuICAgICAgICBjaGFubmVsICAgOiBzbGFja0luZm9DaGFubmVsLFxuICAgICAgICB1c2VybmFtZSAgOiAnc3BlZS5jaCcsXG4gICAgICAgIGljb25FbW9qaSA6ICc6bmVyZF9mYWNlOicsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8vIHNlbmQgdGVzdCBtZXNzYWdlXG4gICAgd2luc3Rvbi5lcnJvcignU2xhY2sgXCJlcnJvclwiIGxvZ2dpbmcgaXMgb25saW5lLicpO1xuICAgIHdpbnN0b24uaW5mbygnU2xhY2sgXCJpbmZvXCIgbG9nZ2luZyBpcyBvbmxpbmUuJyk7XG4gIH0gZWxzZSB7XG4gICAgd2luc3Rvbi53YXJuKCdTbGFjayBsb2dnaW5nIGlzIG5vdCBlbmFibGVkIGJlY2F1c2Ugbm8gc2xhY2tXZWJIb29rIGNvbmZpZyB2YXIgcHJvdmlkZWQuJyk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvaGVscGVycy9jb25maWd1cmVTbGFjay5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b24tc2xhY2std2ViaG9va1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b24tc2xhY2std2ViaG9va1wiXG4vLyBtb2R1bGUgaWQgPSAxNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==