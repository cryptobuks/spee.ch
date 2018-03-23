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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
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

var _publish_action_types = __webpack_require__(69);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(33);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(38);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(27);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(52);

var _show2 = __webpack_require__(29);

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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(37);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(30);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(29);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(31);

var _view2 = _interopRequireDefault(_view);

var _show = __webpack_require__(29);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _show = __webpack_require__(52);

var _view = __webpack_require__(32);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(33);

var _view = __webpack_require__(34);

var _view2 = _interopRequireDefault(_view);

var _publish = __webpack_require__(2);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _channel = __webpack_require__(33);

var _view = __webpack_require__(35);

var _view2 = _interopRequireDefault(_view);

var _publish = __webpack_require__(2);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(36);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(39);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(40);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _publish = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(41);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(42);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(43);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(44);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _publish = __webpack_require__(2);

var _view = __webpack_require__(45);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var Path = __webpack_require__(51);

var _require = __webpack_require__(58),
    getSubDirectoryNames = _require.getSubDirectoryNames;

var thisFolder = Path.resolve(__dirname, 'client/containers/');

var modules = {};

getSubDirectoryNames(thisFolder).forEach(function (name) {
  modules[name] = __webpack_require__(59)("./" + name).default;
});

module.exports = modules;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = request;

__webpack_require__(68);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(46);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(47);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(49);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(50);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(28);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _asset_display_states = __webpack_require__(62);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActiveStatusBar = __webpack_require__(60);

var _ActiveStatusBar2 = _interopRequireDefault(_ActiveStatusBar);

var _InactiveStatusBar = __webpack_require__(61);

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AssetPreview = __webpack_require__(65);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLoggedInChannel = updateLoggedInChannel;

var _channel_action_types = __webpack_require__(67);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(28);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _request = __webpack_require__(22);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(22);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChannelLoginForm = __webpack_require__(12);

var _ChannelLoginForm2 = _interopRequireDefault(_ChannelLoginForm);

var _ChannelCreateForm = __webpack_require__(11);

var _ChannelCreateForm2 = _interopRequireDefault(_ChannelCreateForm);

var _publish_channel_select_states = __webpack_require__(70);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _file = __webpack_require__(71);

var _PublishPreview = __webpack_require__(72);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Logo = __webpack_require__(73);

var _Logo2 = _interopRequireDefault(_Logo);

var _NavBarChannelOptionsDropdown = __webpack_require__(74);

var _NavBarChannelOptionsDropdown2 = _interopRequireDefault(_NavBarChannelOptionsDropdown);

var _request = __webpack_require__(22);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Dropzone = __webpack_require__(7);

var _Dropzone2 = _interopRequireDefault(_Dropzone);

var _PublishTitleInput = __webpack_require__(15);

var _PublishTitleInput2 = _interopRequireDefault(_PublishTitleInput);

var _PublishUrlInput = __webpack_require__(16);

var _PublishUrlInput2 = _interopRequireDefault(_PublishUrlInput);

var _PublishThumbnailInput = __webpack_require__(17);

var _PublishThumbnailInput2 = _interopRequireDefault(_PublishThumbnailInput);

var _PublishMetadataInputs = __webpack_require__(18);

var _PublishMetadataInputs2 = _interopRequireDefault(_PublishMetadataInputs);

var _ChannelSelect = __webpack_require__(13);

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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(22);

var _request2 = _interopRequireDefault(_request);

var _PublishUrlMiddleDisplay = __webpack_require__(75);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ExpandingTextArea = __webpack_require__(76);

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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = __webpack_require__(28);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _publish_claim_states = __webpack_require__(77);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Dropzone = __webpack_require__(7);

var _Dropzone2 = _interopRequireDefault(_Dropzone);

var _PublishDetails = __webpack_require__(14);

var _PublishDetails2 = _interopRequireDefault(_PublishDetails);

var _PublishStatus = __webpack_require__(20);

var _PublishStatus2 = _interopRequireDefault(_PublishStatus);

var _PublishDisabledMessage = __webpack_require__(19);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(48);

var _SEO2 = _interopRequireDefault(_SEO);

var _NavBar = __webpack_require__(3);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _ErrorPage = __webpack_require__(53);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _AssetTitle = __webpack_require__(9);

var _AssetTitle2 = _interopRequireDefault(_AssetTitle);

var _AssetDisplay = __webpack_require__(4);

var _AssetDisplay2 = _interopRequireDefault(_AssetDisplay);

var _AssetInfo = __webpack_require__(8);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(78);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(48);

var _SEO2 = _interopRequireDefault(_SEO);

var _reactRouterDom = __webpack_require__(6);

var _AssetDisplay = __webpack_require__(4);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SEO = __webpack_require__(48);

var _SEO2 = _interopRequireDefault(_SEO);

var _ErrorPage = __webpack_require__(53);

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _NavBar = __webpack_require__(3);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _ChannelClaimsDisplay = __webpack_require__(10);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),
/* 52 */
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

var _show_action_types = __webpack_require__(63);

var actions = _interopRequireWildcard(_show_action_types);

var _show_request_types = __webpack_require__(64);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavBar = __webpack_require__(3);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(56);
module.exports = __webpack_require__(21);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    lstatSync = _require.lstatSync,
    readdirSync = _require.readdirSync;

var _require2 = __webpack_require__(51),
    join = _require2.join;

var getSubDirectoryNames = exports.getSubDirectoryNames = function getSubDirectoryNames(root) {
  return readdirSync(root).filter(function (name) {
    var fullPath = join(root, name);
    return lstatSync(fullPath).isDirectory();
  });
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 21,
	"./AssetDisplay": 4,
	"./AssetDisplay/": 4,
	"./AssetDisplay/index": 4,
	"./AssetDisplay/index.js": 4,
	"./AssetDisplay/view": 27,
	"./AssetDisplay/view.jsx": 27,
	"./AssetInfo": 8,
	"./AssetInfo/": 8,
	"./AssetInfo/index": 8,
	"./AssetInfo/index.js": 8,
	"./AssetInfo/view": 30,
	"./AssetInfo/view.jsx": 30,
	"./AssetTitle": 9,
	"./AssetTitle/": 9,
	"./AssetTitle/index": 9,
	"./AssetTitle/index.js": 9,
	"./AssetTitle/view": 31,
	"./AssetTitle/view.jsx": 31,
	"./ChannelClaimsDisplay": 10,
	"./ChannelClaimsDisplay/": 10,
	"./ChannelClaimsDisplay/index": 10,
	"./ChannelClaimsDisplay/index.js": 10,
	"./ChannelClaimsDisplay/view": 32,
	"./ChannelClaimsDisplay/view.jsx": 32,
	"./ChannelCreateForm": 11,
	"./ChannelCreateForm/": 11,
	"./ChannelCreateForm/index": 11,
	"./ChannelCreateForm/index.js": 11,
	"./ChannelCreateForm/view": 34,
	"./ChannelCreateForm/view.jsx": 34,
	"./ChannelLoginForm": 12,
	"./ChannelLoginForm/": 12,
	"./ChannelLoginForm/index": 12,
	"./ChannelLoginForm/index.js": 12,
	"./ChannelLoginForm/view": 35,
	"./ChannelLoginForm/view.jsx": 35,
	"./ChannelSelect": 13,
	"./ChannelSelect/": 13,
	"./ChannelSelect/index": 13,
	"./ChannelSelect/index.js": 13,
	"./ChannelSelect/view": 36,
	"./ChannelSelect/view.jsx": 36,
	"./Dropzone": 7,
	"./Dropzone/": 7,
	"./Dropzone/index": 7,
	"./Dropzone/index.js": 7,
	"./Dropzone/view": 37,
	"./Dropzone/view.jsx": 37,
	"./NavBar": 3,
	"./NavBar/": 3,
	"./NavBar/index": 3,
	"./NavBar/index.js": 3,
	"./NavBar/view": 38,
	"./NavBar/view.jsx": 38,
	"./PublishDetails": 14,
	"./PublishDetails/": 14,
	"./PublishDetails/index": 14,
	"./PublishDetails/index.js": 14,
	"./PublishDetails/view": 39,
	"./PublishDetails/view.jsx": 39,
	"./PublishDisabledMessage": 19,
	"./PublishDisabledMessage/": 19,
	"./PublishDisabledMessage/index": 19,
	"./PublishDisabledMessage/index.js": 19,
	"./PublishDisabledMessage/view": 44,
	"./PublishDisabledMessage/view.jsx": 44,
	"./PublishMetadataInputs": 18,
	"./PublishMetadataInputs/": 18,
	"./PublishMetadataInputs/index": 18,
	"./PublishMetadataInputs/index.js": 18,
	"./PublishMetadataInputs/view": 43,
	"./PublishMetadataInputs/view.jsx": 43,
	"./PublishStatus": 20,
	"./PublishStatus/": 20,
	"./PublishStatus/index": 20,
	"./PublishStatus/index.js": 20,
	"./PublishStatus/view": 45,
	"./PublishStatus/view.jsx": 45,
	"./PublishThumbnailInput": 17,
	"./PublishThumbnailInput/": 17,
	"./PublishThumbnailInput/index": 17,
	"./PublishThumbnailInput/index.js": 17,
	"./PublishThumbnailInput/view": 42,
	"./PublishThumbnailInput/view.jsx": 42,
	"./PublishTitleInput": 15,
	"./PublishTitleInput/": 15,
	"./PublishTitleInput/index": 15,
	"./PublishTitleInput/index.js": 15,
	"./PublishTitleInput/view": 40,
	"./PublishTitleInput/view.jsx": 40,
	"./PublishTool": 23,
	"./PublishTool/": 23,
	"./PublishTool/index": 23,
	"./PublishTool/index.js": 23,
	"./PublishTool/view": 46,
	"./PublishTool/view.jsx": 46,
	"./PublishUrlInput": 16,
	"./PublishUrlInput/": 16,
	"./PublishUrlInput/index": 16,
	"./PublishUrlInput/index.js": 16,
	"./PublishUrlInput/view": 41,
	"./PublishUrlInput/view.jsx": 41,
	"./ShowAssetDetails": 24,
	"./ShowAssetDetails/": 24,
	"./ShowAssetDetails/index": 24,
	"./ShowAssetDetails/index.js": 24,
	"./ShowAssetDetails/view": 47,
	"./ShowAssetDetails/view.jsx": 47,
	"./ShowAssetLite": 25,
	"./ShowAssetLite/": 25,
	"./ShowAssetLite/index": 25,
	"./ShowAssetLite/index.js": 25,
	"./ShowAssetLite/view": 49,
	"./ShowAssetLite/view.jsx": 49,
	"./ShowChannel": 26,
	"./ShowChannel/": 26,
	"./ShowChannel/index": 26,
	"./ShowChannel/index.js": 26,
	"./ShowChannel/view": 50,
	"./ShowChannel/view.jsx": 50,
	"./index": 21,
	"./index.js": 21
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 59;

/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL = exports.CHANNEL = 'CHANNEL';
var ASSET_LITE = exports.ASSET_LITE = 'ASSET_LITE';
var ASSET_DETAILS = exports.ASSET_DETAILS = 'ASSET_DETAILS';

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _view = __webpack_require__(66);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANNEL_UPDATE = exports.CHANNEL_UPDATE = 'CHANNEL_UPDATE';

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOGIN = exports.LOGIN = 'Existing';
var CREATE = exports.CREATE = 'New';

/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

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
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(79);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageTitle = __webpack_require__(80);

var _metaTags = __webpack_require__(81);

var _canonicalLink = __webpack_require__(82);

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
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 80 */
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
/* 81 */
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
/* 82 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODUyY2UzNjQwN2YyODQ2ZDlkZWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy8uL2NsaWVudC9hY3Rpb25zL3B1Ymxpc2guanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvTmF2QmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Ryb3B6b25lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0SW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Bc3NldFRpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxDbGFpbXNEaXNwbGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxDcmVhdGVGb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxMb2dpbkZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbFNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGl0bGVJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVXJsSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRodW1ibmFpbElucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hTdGF0dXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRvb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9TaG93QXNzZXRMaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1Nob3dDaGFubmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NlbGVjdG9ycy9zaG93LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Fzc2V0SW5mby92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9Bc3NldFRpdGxlL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxDbGFpbXNEaXNwbGF5L3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9hY3Rpb25zL2NoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbENyZWF0ZUZvcm0vdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbExvZ2luRm9ybS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsU2VsZWN0L3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL0Ryb3B6b25lL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL05hdkJhci92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGV0YWlscy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGl0bGVJbnB1dC92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVXJsSW5wdXQvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRodW1ibmFpbElucHV0L3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL3ZpZXcuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hTdGF0dXMvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRvb2wvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TRU8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0TGl0ZS92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29udGFpbmVycy9TaG93Q2hhbm5lbC92aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGF0aC1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9hY3Rpb25zL3Nob3cuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0Vycm9yUGFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aGF0d2ctZmV0Y2hcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL2J1aWxkL2dldEZvbGRlck5hbWVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb250YWluZXJzIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQWN0aXZlU3RhdHVzQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9JbmFjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9hc3NldF9kaXNwbGF5X3N0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29uc3RhbnRzL3Nob3dfYWN0aW9uX3R5cGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb25zdGFudHMvc2hvd19yZXF1ZXN0X3R5cGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Fzc2V0UHJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Bc3NldFByZXZpZXcvdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy8uL2NsaWVudC9jb25zdGFudHMvcHVibGlzaF9hY3Rpb25fdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NoYW5uZWxfc2VsZWN0X3N0YXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9QdWJsaXNoUHJldmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTG9nby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHVibGlzaFVybE1pZGRsZURpc3BsYXkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0V4cGFuZGluZ1RleHRBcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29uc3RhbnRzL3B1Ymxpc2hfY2xhaW1fc3RhdGVzLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1NFTy92aWV3LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvcGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC91dGlscy9tZXRhVGFncy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvY2Fub25pY2FsTGluay5qcyJdLCJuYW1lcyI6WyJzZWxlY3RGaWxlIiwiY2xlYXJGaWxlIiwidXBkYXRlTWV0YWRhdGEiLCJ1cGRhdGVDbGFpbSIsInNldFB1Ymxpc2hJbkNoYW5uZWwiLCJ1cGRhdGVQdWJsaXNoU3RhdHVzIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVTZWxlY3RlZENoYW5uZWwiLCJ0b2dnbGVNZXRhZGF0YUlucHV0cyIsIm9uTmV3VGh1bWJuYWlsIiwic3RhcnRQdWJsaXNoIiwiYWN0aW9ucyIsImZpbGUiLCJ0eXBlIiwiRklMRV9TRUxFQ1RFRCIsImRhdGEiLCJGSUxFX0NMRUFSIiwibmFtZSIsInZhbHVlIiwiTUVUQURBVEFfVVBEQVRFIiwiQ0xBSU1fVVBEQVRFIiwiY2hhbm5lbCIsIlNFVF9QVUJMSVNIX0lOX0NIQU5ORUwiLCJzdGF0dXMiLCJtZXNzYWdlIiwiUFVCTElTSF9TVEFUVVNfVVBEQVRFIiwiRVJST1JfVVBEQVRFIiwiY2hhbm5lbE5hbWUiLCJTRUxFQ1RFRF9DSEFOTkVMX1VQREFURSIsInNob3dNZXRhZGF0YUlucHV0cyIsIlRPR0dMRV9NRVRBREFUQV9JTlBVVFMiLCJUSFVNQk5BSUxfTkVXIiwiaGlzdG9yeSIsIlBVQkxJU0hfU1RBUlQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzaXRlIiwibG9nZ2VkSW5DaGFubmVsIiwiY2hhbm5lbFNob3J0SWQiLCJzaG9ydElkIiwiY2hhbm5lbExvbmdJZCIsImxvbmdJZCIsInNpdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwib25DaGFubmVsTG9naW4iLCJkaXNwYXRjaCIsIm9uQ2hhbm5lbExvZ291dCIsInNob3ciLCJlcnJvciIsImRpc3BsYXlBc3NldCIsImFzc2V0Iiwib25GaWxlUmVxdWVzdCIsImNsYWltSWQiLCJwdWJsaXNoIiwidGh1bWJuYWlsIiwiZmlsZUVycm9yIiwic2V0RmlsZUVycm9yIiwidGl0bGUiLCJjbGFpbURhdGEiLCJyZXF1ZXN0IiwicmVxdWVzdExpc3QiLCJpZCIsImNoYW5uZWxLZXkiLCJrZXkiLCJjaGFubmVsTGlzdCIsIm9uVXBkYXRlQ2hhbm5lbENsYWltcyIsImxvZ2dlZEluQ2hhbm5lbE5hbWUiLCJwdWJsaXNoSW5DaGFubmVsIiwic2VsZWN0ZWRDaGFubmVsIiwiY2hhbm5lbEVycm9yIiwib25QdWJsaXNoSW5DaGFubmVsQ2hhbmdlIiwib25DaGFubmVsU2VsZWN0IiwibWV0YWRhdGEiLCJvbk1ldGFkYXRhQ2hhbmdlIiwibG9nZ2VkSW5DaGFubmVsU2hvcnRJZCIsImZpbGVOYW1lIiwiY2xhaW0iLCJ1cmxFcnJvciIsInVybCIsIm9uQ2xhaW1DaGFuZ2UiLCJvblVybEVycm9yIiwibGljZW5zZSIsIm5zZnciLCJvblRvZ2dsZU1ldGFkYXRhSW5wdXRzIiwiZGlzYWJsZWRNZXNzYWdlIiwiUGF0aCIsInJlcXVpcmUiLCJnZXRTdWJEaXJlY3RvcnlOYW1lcyIsInRoaXNGb2xkZXIiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwibW9kdWxlcyIsImZvckVhY2giLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsInBhcnNlSlNPTiIsInJlc3BvbnNlIiwianNvbiIsImNoZWNrU3RhdHVzIiwianNvblJlc3BvbnNlIiwiRXJyb3IiLCJvcHRpb25zIiwiZmV0Y2giLCJ0aGVuIiwiUHJvbWlzZSIsImFsbCIsImRpc2FibGVkIiwicmVxdWVzdElkIiwiYXNzZXRMaXN0IiwiYXNzZXRLZXkiLCJwcmV2aW91c1JlcXVlc3QiLCJBc3NldERpc3BsYXkiLCJwcm9wcyIsImNvbnRlbnRUeXBlIiwiZmlsZUV4dCIsIkNvbXBvbmVudCIsIlByb2dyZXNzQmFyIiwic3RhdGUiLCJiYXJzIiwiaW5kZXgiLCJpbmNyZW1lbnRlciIsImNyZWF0ZUJhcnMiLCJiaW5kIiwic3RhcnRQcm9ncmVzc0JhciIsInVwZGF0ZVByb2dyZXNzQmFyIiwic3RvcFByb2dyZXNzQmFyIiwiaSIsInNpemUiLCJwdXNoIiwiaXNBY3RpdmUiLCJzZXRTdGF0ZSIsInVwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWFwIiwiYmFyIiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNlbGVjdEFzc2V0Iiwic2VsZWN0U2hvd1N0YXRlIiwiQXNzZXRJbmZvIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJlbGVtZW50VG9Db3B5IiwidGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnR0b2NvcHkiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiY2VydGlmaWNhdGVJZCIsImhvc3QiLCJBc3NldFRpdGxlIiwiQ2hhbm5lbENsYWltc0Rpc3BsYXkiLCJzaG93TmV4dFJlc3VsdHNQYWdlIiwic2hvd1ByZXZpb3VzUmVzdWx0c1BhZ2UiLCJjdXJyZW50UGFnZSIsImNsYWltc0RhdGEiLCJwcmV2aW91c1BhZ2UiLCJwYXJzZUludCIsInNob3dOZXdQYWdlIiwibmV4dFBhZ2UiLCJwYWdlIiwiY2xhaW1zIiwidG90YWxQYWdlcyIsImxlbmd0aCIsInVwZGF0ZUxvZ2dlZEluQ2hhbm5lbCIsIkNIQU5ORUxfVVBEQVRFIiwiQ2hhbm5lbENyZWF0ZUZvcm0iLCJwYXNzd29yZCIsImhhbmRsZUNoYW5uZWxJbnB1dCIsImhhbmRsZUlucHV0IiwiY3JlYXRlQ2hhbm5lbCIsImlucHV0IiwicmVwbGFjZSIsImNsZWFuc2VDaGFubmVsSW5wdXQiLCJ1cGRhdGVJc0NoYW5uZWxBdmFpbGFibGUiLCJjaGFubmVsV2l0aEF0U3ltYm9sIiwiY2F0Y2giLCJyZWplY3QiLCJ1c2VybmFtZSIsInBhcmFtcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJjcmVkZW50aWFscyIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tJc1Bhc3N3b3JkUHJvdmlkZWQiLCJjaGVja0lzQ2hhbm5lbEF2YWlsYWJsZSIsIm1ha2VQdWJsaXNoQ2hhbm5lbFJlcXVlc3QiLCJzaG9ydENoYW5uZWxJZCIsImNoYW5uZWxDbGFpbUlkIiwiQ2hhbm5lbExvZ2luRm9ybSIsImxvZ2luVG9DaGFubmVsIiwic3VjY2VzcyIsImNoYW5uZWxQYXNzd29yZCIsInN0YXRlcyIsIkNoYW5uZWxTZWxlY3QiLCJ0b2dnbGVBbm9ueW1vdXNQdWJsaXNoIiwiaGFuZGxlU2VsZWN0aW9uIiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RlZE9wdGlvbnMiLCJMT0dJTiIsIkNSRUFURSIsIkRyb3B6b25lIiwiZHJhZ092ZXIiLCJtb3VzZU92ZXIiLCJkaW1QcmV2aWV3IiwiaGFuZGxlRHJvcCIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJhZ0VuZCIsImhhbmRsZURyYWdFbnRlciIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVGaWxlSW5wdXQiLCJjaG9vc2VGaWxlIiwiZHQiLCJkYXRhVHJhbnNmZXIiLCJpdGVtcyIsImtpbmQiLCJkcm9wcGVkRmlsZSIsImdldEFzRmlsZSIsInJlbW92ZSIsImNsZWFyRGF0YSIsImNsaWNrIiwiZmlsZUxpc3QiLCJmaWxlcyIsIlZJRVciLCJMT0dPVVQiLCJOYXZCYXIiLCJjaGVja0ZvckxvZ2dlZEluVXNlciIsImxvZ291dFVzZXIiLCJjb25zb2xlIiwibG9nIiwiUHVibGlzaERldGFpbHMiLCJvblB1Ymxpc2hTdWJtaXQiLCJQdWJsaXNoVGl0bGVJbnB1dCIsImUiLCJQdWJsaXNoVXJsSW5wdXQiLCJzZXRDbGFpbU5hbWUiLCJ2YWxpZGF0ZUNsYWltIiwiY2xlYW5zZUlucHV0IiwiZmlsZU5hbWVXaXRob3V0RW5kaW5nIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJjbGVhbkNsYWltTmFtZSIsImRhdGFVUkl0b0Jsb2IiLCJkYXRhVVJJIiwiYnl0ZVN0cmluZyIsImF0b2IiLCJzcGxpdCIsIm1pbWVTdHJpbmciLCJpYSIsIlVpbnQ4QXJyYXkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsIlB1Ymxpc2hUaHVtYm5haWxJbnB1dCIsInZpZGVvU291cmNlIiwic2xpZGVyTWluUmFuZ2UiLCJzbGlkZXJNYXhSYW5nZSIsInNsaWRlclZhbHVlIiwiaGFuZGxlVmlkZW9Mb2FkZWREYXRhIiwiaGFuZGxlU2xpZGVyQ2hhbmdlIiwiY3JlYXRlVGh1bWJuYWlsIiwic2V0VmlkZW9Tb3VyY2UiLCJuZXh0UHJvcHMiLCJwcmV2aWV3UmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJkYXRhVXJpIiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImR1cmF0aW9uIiwidG90YWxNaW51dGVzIiwiTWF0aCIsImZsb29yIiwidG90YWxTZWNvbmRzIiwidmlkZW8iLCJjdXJyZW50VGltZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJkYXRhVXJsIiwidG9EYXRhVVJMIiwic25hcHNob3QiLCJGaWxlIiwiZGlzcGxheSIsIlB1Ymxpc2hNZXRhZGF0YUlucHV0cyIsInRvZ2dsZVNob3dJbnB1dHMiLCJoYW5kbGVTZWxlY3QiLCJjaGVja2VkIiwibWF4SGVpZ2h0IiwiUHVibGlzaERpc2FibGVkTWVzc2FnZSIsInB1Ymxpc2hTdGF0ZXMiLCJQdWJsaXNoU3RhdHVzIiwiTE9BRF9TVEFSVCIsIkxPQURJTkciLCJQVUJMSVNISU5HIiwiU1VDQ0VTUyIsIkZBSUxFRCIsIlB1Ymxpc2hUb29sIiwiU2hvd0Fzc2V0RGV0YWlscyIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRUaHVtYm5haWwiLCJzaXRlSG9zdCIsInNpdGVUaXRsZSIsInNpdGVUd2l0dGVyIiwidHdpdHRlciIsIlNob3dMaXRlIiwiU2hvd0NoYW5uZWwiLCJvbkhhbmRsZVNob3dQYWdlVXJpIiwib25SZXF1ZXN0RXJyb3IiLCJvbk5ld0NoYW5uZWxSZXF1ZXN0Iiwib25OZXdBc3NldFJlcXVlc3QiLCJvblJlcXVlc3RVcGRhdGUiLCJhZGRSZXF1ZXN0VG9SZXF1ZXN0TGlzdCIsImFkZEFzc2V0VG9Bc3NldExpc3QiLCJhZGROZXdDaGFubmVsVG9DaGFubmVsTGlzdCIsInVwZGF0ZUNoYW5uZWxDbGFpbXMiLCJmaWxlUmVxdWVzdGVkIiwidXBkYXRlRmlsZUF2YWlsYWJpbGl0eSIsInVwZGF0ZURpc3BsYXlBc3NldEVycm9yIiwiSEFORExFX1NIT1dfVVJJIiwiUkVRVUVTVF9FUlJPUiIsImNoYW5uZWxJZCIsInJlcXVlc3RUeXBlIiwiQ0hBTk5FTF9SRVFVRVNUX05FVyIsImV4dGVuc2lvbiIsIkFTU0VUX1JFUVVFU1RfTkVXIiwibW9kaWZpZXIiLCJSRVFVRVNUX1VQREFURSIsIlJFUVVFU1RfTElTVF9BREQiLCJBU1NFVF9BREQiLCJDSEFOTkVMX0FERCIsIkNIQU5ORUxfQ0xBSU1TX1VQREFURV9BU1lOQyIsImNoYW5uZWxMaXN0SWQiLCJDSEFOTkVMX0NMQUlNU19VUERBVEVfU1VDQ0VTUyIsIkZJTEVfUkVRVUVTVEVEIiwiRklMRV9BVkFJTEFCSUxJVFlfVVBEQVRFIiwiRElTUExBWV9BU1NFVF9FUlJPUiIsIkVycm9yUGFnZSIsInN0cmluZyIsImxzdGF0U3luYyIsInJlYWRkaXJTeW5jIiwiam9pbiIsInJvb3QiLCJmaWx0ZXIiLCJmdWxsUGF0aCIsImlzRGlyZWN0b3J5IiwiQWN0aXZlU3RhdHVzQmFyIiwiSW5hY3RpdmVTdGF0dXNCYXIiLCJMT0NBTF9DSEVDSyIsIlVOQVZBSUxBQkxFIiwiRVJST1IiLCJBVkFJTEFCTEUiLCJDSEFOTkVMIiwiQVNTRVRfTElURSIsIkFTU0VUX0RFVEFJTFMiLCJkZWZhdWx0cyIsIkFzc2V0UHJldmlldyIsImRpcmVjdFNvdXJjZUxpbmsiLCJzaG93VXJsTGluayIsInZhbGlkYXRlRmlsZSIsInRlc3QiLCJQdWJsaXNoUHJldmlldyIsImltZ1NvdXJjZSIsInNldFByZXZpZXdJbWFnZVNvdXJjZSIsIm5ld1Byb3BzIiwic2V0UHJldmlld0ltYWdlU291cmNlRnJvbUZpbGUiLCJib29sIiwib2JqZWN0IiwiTG9nbyIsIk5hdkJhckNoYW5uZWxEcm9wZG93biIsImRlZmF1bHRTZWxlY3Rpb24iLCJVcmxNaWRkbGUiLCJFeHBhbmRpbmdUZXh0YXJlYSIsIl9oYW5kbGVDaGFuZ2UiLCJhZGp1c3RUZXh0YXJlYSIsIm9uQ2hhbmdlIiwiZWwiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsInJlc3QiLCJ4IiwiZnVuYyIsIlNFTyIsInBhZ2VVcmkiLCJwYWdlVGl0bGUiLCJtZXRhVGFncyIsImNhbm9uaWNhbExpbmsiLCJyZWwiLCJocmVmIiwiY3JlYXRlUGFnZVRpdGxlIiwiZGV0ZXJtaW5lT2dUaHVtYm5haWxDb250ZW50VHlwZSIsImNyZWF0ZUJhc2ljTWV0YVRhZ3MiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJjcmVhdGVDaGFubmVsTWV0YVRhZ3MiLCJjcmVhdGVBc3NldE1ldGFUYWdzIiwiZW1iZWRVcmwiLCJzaG93VXJsIiwic291cmNlIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJvZ1RodW1ibmFpbENvbnRlbnRUeXBlIiwib2dUaHVtYm5haWwiLCJjcmVhdGVNZXRhVGFncyIsImNyZWF0ZUJhc2ljQ2Fub25pY2FsTGluayIsImNyZWF0ZUFzc2V0Q2Fub25pY2FsTGluayIsImNyZWF0ZUNoYW5uZWxDYW5vbmljYWxMaW5rIiwiY3JlYXRlQ2Fub25pY2FsTGluayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLGtDOzs7Ozs7QUNBQSx3Qzs7Ozs7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QkFDa0JBLE9BRGxCO0FBRXBCO0FBQ0QsTUFBSXpCLFdBQUosRUFBaUI7QUFDZixXQUFVdVMsUUFBVixTQUFzQnZTLFdBQXRCLFNBQXFDZ0ksYUFBckMsU0FBc0QxSSxJQUF0RDtBQUNEO0FBQ0QsU0FBVWlULFFBQVYsU0FBc0I5USxPQUF0QixTQUFpQ25DLElBQWpDO0FBQ0QsQ0FURDs7QUFXQSxJQUFNMFosNkJBQTZCLFNBQTdCQSwwQkFBNkIsQ0FBQ3RaLE9BQUQsRUFBVTZTLFFBQVYsRUFBdUI7QUFBQSxNQUNoRGpULElBRGdELEdBQy9CSSxPQUQrQixDQUNoREosSUFEZ0Q7QUFBQSxNQUMxQ3VCLE1BRDBDLEdBQy9CbkIsT0FEK0IsQ0FDMUNtQixNQUQwQzs7QUFFeEQsU0FBVTBSLFFBQVYsU0FBc0JqVCxJQUF0QixTQUE4QnVCLE1BQTlCO0FBQ0QsQ0FIRDs7QUFLTyxJQUFNb1ksb0RBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQzFYLEtBQUQsRUFBUTdCLE9BQVIsRUFBaUJrSixJQUFqQixFQUF1QjJKLFFBQXZCLEVBQW9DO0FBQ3JFLE1BQUloUixLQUFKLEVBQVc7QUFDVCxXQUFPd1gseUJBQXlCeFgsS0FBekIsRUFBZ0NnUixRQUFoQyxDQUFQO0FBQ0Q7QUFDRCxNQUFJN1MsT0FBSixFQUFhO0FBQ1gsV0FBT3NaLDJCQUEyQnRaLE9BQTNCLEVBQW9DNlMsUUFBcEMsQ0FBUDtBQUNEO0FBQ0QsU0FBT3VHLHlCQUF5QmxRLElBQXpCLEVBQStCMkosUUFBL0IsQ0FBUDtBQUNELENBUk0sQyIsImZpbGUiOiJjb250YWluZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZXhwb3J0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODUyY2UzNjQwN2YyODQ2ZDlkZWYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnY29uc3RhbnRzL3B1Ymxpc2hfYWN0aW9uX3R5cGVzJztcblxuLy8gZXhwb3J0IGFjdGlvbiBjcmVhdG9yc1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZpbGUgKGZpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkZJTEVfU0VMRUNURUQsXG4gICAgZGF0YTogZmlsZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckZpbGUgKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuRklMRV9DTEVBUixcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNZXRhZGF0YSAobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLk1FVEFEQVRBX1VQREFURSxcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDbGFpbSAodmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNMQUlNX1VQREFURSxcbiAgICBkYXRhOiB2YWx1ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQdWJsaXNoSW5DaGFubmVsIChjaGFubmVsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5TRVRfUFVCTElTSF9JTl9DSEFOTkVMLFxuICAgIGNoYW5uZWwsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHVibGlzaFN0YXR1cyAoc3RhdHVzLCBtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5QVUJMSVNIX1NUQVRVU19VUERBVEUsXG4gICAgZGF0YToge1xuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVycm9yIChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuRVJST1JfVVBEQVRFLFxuICAgIGRhdGE6IHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkQ2hhbm5lbCAoY2hhbm5lbE5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLlNFTEVDVEVEX0NIQU5ORUxfVVBEQVRFLFxuICAgIGRhdGE6IGNoYW5uZWxOYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1ldGFkYXRhSW5wdXRzIChzaG93TWV0YWRhdGFJbnB1dHMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLlRPR0dMRV9NRVRBREFUQV9JTlBVVFMsXG4gICAgZGF0YTogc2hvd01ldGFkYXRhSW5wdXRzLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmV3VGh1bWJuYWlsIChmaWxlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5USFVNQk5BSUxfTkVXLFxuICAgIGRhdGE6IGZpbGUsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQdWJsaXNoIChoaXN0b3J5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5QVUJMSVNIX1NUQVJULFxuICAgIGRhdGE6IHsgaGlzdG9yeSB9LFxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvcHVibGlzaC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVMb2dnZWRJbkNoYW5uZWwgfSBmcm9tICdhY3Rpb25zL2NoYW5uZWwnO1xuaW1wb3J0IHt1cGRhdGVTZWxlY3RlZENoYW5uZWx9IGZyb20gJ2FjdGlvbnMvcHVibGlzaCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjaGFubmVsLCBzaXRlIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjaGFubmVsTmFtZSAgIDogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwubmFtZSxcbiAgICBjaGFubmVsU2hvcnRJZDogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwuc2hvcnRJZCxcbiAgICBjaGFubmVsTG9uZ0lkIDogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwubG9uZ0lkLFxuICAgIHNpdGVEZXNjcmlwdGlvbjogc2l0ZS5kZXNjcmlwdGlvbixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkNoYW5uZWxMb2dpbjogKG5hbWUsIHNob3J0SWQsIGxvbmdJZCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlTG9nZ2VkSW5DaGFubmVsKG5hbWUsIHNob3J0SWQsIGxvbmdJZCkpO1xuICAgICAgZGlzcGF0Y2godXBkYXRlU2VsZWN0ZWRDaGFubmVsKG5hbWUpKTtcbiAgICB9LFxuICAgIG9uQ2hhbm5lbExvZ291dDogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlTG9nZ2VkSW5DaGFubmVsKG51bGwsIG51bGwsIG51bGwpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9OYXZCYXIvaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IGZpbGVSZXF1ZXN0ZWQgfSBmcm9tICdhY3Rpb25zL3Nob3cnO1xuaW1wb3J0IHsgc2VsZWN0QXNzZXQgfSBmcm9tICdzZWxlY3RvcnMvc2hvdyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgZXJyb3IgYW5kIHN0YXR1c1xuICBjb25zdCBlcnJvciAgPSBzaG93LmRpc3BsYXlBc3NldC5lcnJvcjtcbiAgY29uc3Qgc3RhdHVzID0gc2hvdy5kaXNwbGF5QXNzZXQuc3RhdHVzO1xuICAvLyBzZWxlY3QgYXNzZXRcbiAgY29uc3QgYXNzZXQgPSBzZWxlY3RBc3NldChzaG93KTtcbiAgLy8gIHJldHVybiBwcm9wc1xuICByZXR1cm4ge1xuICAgIGVycm9yLFxuICAgIHN0YXR1cyxcbiAgICBhc3NldCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbkZpbGVSZXF1ZXN0OiAobmFtZSwgY2xhaW1JZCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmlsZVJlcXVlc3RlZChuYW1lLCBjbGFpbUlkKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXREaXNwbGF5L2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RGaWxlLCB1cGRhdGVFcnJvciwgY2xlYXJGaWxlIH0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbGUgICAgIDogcHVibGlzaC5maWxlLFxuICAgIHRodW1ibmFpbDogcHVibGlzaC50aHVtYm5haWwsXG4gICAgZmlsZUVycm9yOiBwdWJsaXNoLmVycm9yLmZpbGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0RmlsZTogKGZpbGUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNlbGVjdEZpbGUoZmlsZSkpO1xuICAgIH0sXG4gICAgc2V0RmlsZUVycm9yOiAodmFsdWUpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFyRmlsZSgpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUVycm9yKCdmaWxlJywgdmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9Ecm9wem9uZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgc2VsZWN0QXNzZXQgfSBmcm9tICdzZWxlY3RvcnMvc2hvdyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgYXNzZXRcbiAgY29uc3QgYXNzZXQgPSBzZWxlY3RBc3NldChzaG93KTtcbiAgLy8gIHJldHVybiBwcm9wc1xuICByZXR1cm4ge1xuICAgIGFzc2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXRJbmZvL2luZGV4LmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBzZWxlY3RBc3NldCB9IGZyb20gJ3NlbGVjdG9ycy9zaG93JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2hvdyB9KSA9PiB7XG4gIGNvbnN0IHsgY2xhaW1EYXRhOiB7IHRpdGxlIH0gfSA9IHNlbGVjdEFzc2V0KHNob3cpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXRUaXRsZS9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBvblVwZGF0ZUNoYW5uZWxDbGFpbXMgfSBmcm9tICdhY3Rpb25zL3Nob3cnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2hvdyB9KSA9PiB7XG4gIC8vIHNlbGVjdCBjaGFubmVsIGtleVxuICBjb25zdCByZXF1ZXN0ID0gc2hvdy5yZXF1ZXN0TGlzdFtzaG93LnJlcXVlc3QuaWRdO1xuICBjb25zdCBjaGFubmVsS2V5ID0gcmVxdWVzdC5rZXk7XG4gIC8vIHNlbGVjdCBjaGFubmVsIGNsYWltc1xuICBjb25zdCBjaGFubmVsID0gc2hvdy5jaGFubmVsTGlzdFtjaGFubmVsS2V5XSB8fCBudWxsO1xuICAvLyByZXR1cm4gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBjaGFubmVsS2V5LFxuICAgIGNoYW5uZWwsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIG9uVXBkYXRlQ2hhbm5lbENsYWltcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbENsYWltc0Rpc3BsYXkvaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlTG9nZ2VkSW5DaGFubmVsIH0gZnJvbSAnYWN0aW9ucy9jaGFubmVsJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5pbXBvcnQge3VwZGF0ZVNlbGVjdGVkQ2hhbm5lbH0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2hhbm5lbExvZ2luOiAobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVMb2dnZWRJbkNoYW5uZWwobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSk7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVTZWxlY3RlZENoYW5uZWwobmFtZSkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybS9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1cGRhdGVMb2dnZWRJbkNoYW5uZWwgfSBmcm9tICdhY3Rpb25zL2NoYW5uZWwnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcbmltcG9ydCB7dXBkYXRlU2VsZWN0ZWRDaGFubmVsfSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1Ymxpc2gnO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25DaGFubmVsTG9naW46IChuYW1lLCBzaG9ydElkLCBsb25nSWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbChuYW1lLCBzaG9ydElkLCBsb25nSWQpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlbGVjdGVkQ2hhbm5lbChuYW1lKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0NoYW5uZWxMb2dpbkZvcm0vaW5kZXguanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7c2V0UHVibGlzaEluQ2hhbm5lbCwgdXBkYXRlU2VsZWN0ZWRDaGFubmVsLCB1cGRhdGVFcnJvcn0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNoYW5uZWwsIHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvZ2dlZEluQ2hhbm5lbE5hbWU6IGNoYW5uZWwubG9nZ2VkSW5DaGFubmVsLm5hbWUsXG4gICAgcHVibGlzaEluQ2hhbm5lbCAgIDogcHVibGlzaC5wdWJsaXNoSW5DaGFubmVsLFxuICAgIHNlbGVjdGVkQ2hhbm5lbCAgICA6IHB1Ymxpc2guc2VsZWN0ZWRDaGFubmVsLFxuICAgIGNoYW5uZWxFcnJvciAgICAgICA6IHB1Ymxpc2guZXJyb3IuY2hhbm5lbCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvblB1Ymxpc2hJbkNoYW5uZWxDaGFuZ2U6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlRXJyb3IoJ2NoYW5uZWwnLCBudWxsKSk7XG4gICAgICBkaXNwYXRjaChzZXRQdWJsaXNoSW5DaGFubmVsKHZhbHVlKSk7XG4gICAgfSxcbiAgICBvbkNoYW5uZWxTZWxlY3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlRXJyb3IoJ2NoYW5uZWwnLCBudWxsKSk7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVTZWxlY3RlZENoYW5uZWwodmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsU2VsZWN0L2luZGV4LmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NsZWFyRmlsZSwgc3RhcnRQdWJsaXNofSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2hhbm5lbCwgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmlsZTogcHVibGlzaC5maWxlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjbGVhckZpbGUsXG4gIHN0YXJ0UHVibGlzaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaERldGFpbHMvaW5kZXguanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7dXBkYXRlTWV0YWRhdGF9IGZyb20gJ2FjdGlvbnMvcHVibGlzaCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwdWJsaXNoIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHVibGlzaC5tZXRhZGF0YS50aXRsZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvbk1ldGFkYXRhQ2hhbmdlOiAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZU1ldGFkYXRhKG5hbWUsIHZhbHVlKSk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRpdGxlSW5wdXQvaW5kZXguanMiLCJpbXBvcnQge3VwZGF0ZUNsYWltLCB1cGRhdGVFcnJvcn0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY2hhbm5lbCwgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbG9nZ2VkSW5DaGFubmVsTmFtZSAgIDogY2hhbm5lbC5sb2dnZWRJbkNoYW5uZWwubmFtZSxcbiAgICBsb2dnZWRJbkNoYW5uZWxTaG9ydElkOiBjaGFubmVsLmxvZ2dlZEluQ2hhbm5lbC5zaG9ydElkLFxuICAgIGZpbGVOYW1lICAgICAgICAgICAgICA6IHB1Ymxpc2guZmlsZS5uYW1lLFxuICAgIHB1Ymxpc2hJbkNoYW5uZWwgICAgICA6IHB1Ymxpc2gucHVibGlzaEluQ2hhbm5lbCxcbiAgICBzZWxlY3RlZENoYW5uZWwgICAgICAgOiBwdWJsaXNoLnNlbGVjdGVkQ2hhbm5lbCxcbiAgICBjbGFpbSAgICAgICAgICAgICAgICAgOiBwdWJsaXNoLmNsYWltLFxuICAgIHVybEVycm9yICAgICAgICAgICAgICA6IHB1Ymxpc2guZXJyb3IudXJsLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2xhaW1DaGFuZ2U6ICh2YWx1ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2godXBkYXRlQ2xhaW0odmFsdWUpKTtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUVycm9yKCdwdWJsaXNoU3VibWl0JywgbnVsbCkpO1xuICAgIH0sXG4gICAgb25VcmxFcnJvcjogKHZhbHVlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVFcnJvcigndXJsJywgdmFsdWUpKTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVXJsSW5wdXQvaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgb25OZXdUaHVtYm5haWwgfSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaDogeyBmaWxlIH0gfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZpbGUsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIG9uTmV3VGh1bWJuYWlsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGh1bWJuYWlsSW5wdXQvaW5kZXguanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7dXBkYXRlTWV0YWRhdGEsIHRvZ2dsZU1ldGFkYXRhSW5wdXRzfSBmcm9tICdhY3Rpb25zL3B1Ymxpc2gnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2hvd01ldGFkYXRhSW5wdXRzOiBwdWJsaXNoLnNob3dNZXRhZGF0YUlucHV0cyxcbiAgICBkZXNjcmlwdGlvbiAgICAgICA6IHB1Ymxpc2gubWV0YWRhdGEuZGVzY3JpcHRpb24sXG4gICAgbGljZW5zZSAgICAgICAgICAgOiBwdWJsaXNoLm1ldGFkYXRhLmxpY2Vuc2UsXG4gICAgbnNmdyAgICAgICAgICAgICAgOiBwdWJsaXNoLm1ldGFkYXRhLm5zZncsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgb25NZXRhZGF0YUNoYW5nZTogKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1cGRhdGVNZXRhZGF0YShuYW1lLCB2YWx1ZSkpO1xuICAgIH0sXG4gICAgb25Ub2dnbGVNZXRhZGF0YUlucHV0czogKHZhbHVlKSA9PiB7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVNZXRhZGF0YUlucHV0cyh2YWx1ZSkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy9pbmRleC5qcyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcHVibGlzaCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogcHVibGlzaC5kaXNhYmxlZE1lc3NhZ2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL2luZGV4LmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NsZWFyRmlsZX0gZnJvbSAnYWN0aW9ucy9wdWJsaXNoJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1cyA6IHB1Ymxpc2guc3RhdHVzLnN0YXR1cyxcbiAgICBtZXNzYWdlOiBwdWJsaXNoLnN0YXR1cy5tZXNzYWdlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjbGVhckZpbGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hTdGF0dXMvaW5kZXguanMiLCJjb25zdCBQYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBnZXRTdWJEaXJlY3RvcnlOYW1lcyB9ID0gcmVxdWlyZSgnYnVpbGQvZ2V0Rm9sZGVyTmFtZXMuanMnKTtcbmNvbnN0IHRoaXNGb2xkZXIgPSBQYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnY2xpZW50L2NvbnRhaW5lcnMvJyk7XG5cbmxldCBtb2R1bGVzID0ge307XG5cbmdldFN1YkRpcmVjdG9yeU5hbWVzKHRoaXNGb2xkZXIpXG4gIC5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgbW9kdWxlc1tuYW1lXSA9IHJlcXVpcmUoYC4vJHtuYW1lfWApLmRlZmF1bHQ7XG4gIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9pbmRleC5qcyIsImltcG9ydCAnY3Jvc3MtZmV0Y2gvcG9seWZpbGwnO1xuXG4vKipcbiAqIFBhcnNlcyB0aGUgSlNPTiByZXR1cm5lZCBieSBhIG5ldHdvcmsgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gcmVzcG9uc2UgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gKlxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBUaGUgcGFyc2VkIEpTT04gZnJvbSB0aGUgcmVxdWVzdFxuICovXG5mdW5jdGlvbiBwYXJzZUpTT04gKHJlc3BvbnNlKSB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDIwNSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbi8qKlxuICogUGFyc2VzIHRoZSBzdGF0dXMgcmV0dXJuZWQgYnkgYSBuZXR3b3JrIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgQSByZXNwb25zZSBmcm9tIGEgbmV0d29yayByZXF1ZXN0XG4gKiBAcGFyYW0gIHtvYmplY3R9IHJlc3BvbnNlICAgVGhlIHBhcnNlZCBKU09OIGZyb20gdGhlIG5ldHdvcmsgcmVxdWVzdFxuICpcbiAqIEByZXR1cm4ge29iamVjdCB8IHVuZGVmaW5lZH0gUmV0dXJucyBvYmplY3Qgd2l0aCBzdGF0dXMgYW5kIHN0YXR1c1RleHQsIG9yIHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBjaGVja1N0YXR1cyAocmVzcG9uc2UsIGpzb25SZXNwb25zZSkge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICB9XG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGpzb25SZXNwb25zZS5tZXNzYWdlKTtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgdGhyb3cgZXJyb3I7XG59XG5cbi8qKlxuICogUmVxdWVzdHMgYSBVUkwsIHJldHVybmluZyBhIHByb21pc2VcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVybCAgICAgICBUaGUgVVJMIHdlIHdhbnQgdG8gcmVxdWVzdFxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgd2Ugd2FudCB0byBwYXNzIHRvIFwiZmV0Y2hcIlxuICpcbiAqIEByZXR1cm4ge29iamVjdH0gICAgICAgICAgIFRoZSByZXNwb25zZSBkYXRhXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCAodXJsLCBvcHRpb25zKSB7XG4gIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtyZXNwb25zZSwgcGFyc2VKU09OKHJlc3BvbnNlKV0pO1xuICAgIH0pXG4gICAgLnRoZW4oKFtyZXNwb25zZSwganNvblJlc3BvbnNlXSkgPT4ge1xuICAgICAgcmV0dXJuIGNoZWNrU3RhdHVzKHJlc3BvbnNlLCBqc29uUmVzcG9uc2UpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL3JlcXVlc3QuanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHB1Ymxpc2ggfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRpc2FibGVkOiBwdWJsaXNoLmRpc2FibGVkLFxuICAgIGZpbGUgICAgOiBwdWJsaXNoLmZpbGUsXG4gICAgc3RhdHVzICA6IHB1Ymxpc2guc3RhdHVzLnN0YXR1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hUb29sL2luZGV4LmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNob3cgfSkgPT4ge1xuICAvLyBzZWxlY3QgcmVxdWVzdCBpbmZvXG4gIGNvbnN0IHJlcXVlc3RJZCA9IHNob3cucmVxdWVzdC5pZDtcbiAgLy8gc2VsZWN0IGFzc2V0IGluZm9cbiAgbGV0IGFzc2V0O1xuICBjb25zdCByZXF1ZXN0ID0gc2hvdy5yZXF1ZXN0TGlzdFtyZXF1ZXN0SWRdIHx8IG51bGw7XG4gIGNvbnN0IGFzc2V0TGlzdCA9IHNob3cuYXNzZXRMaXN0O1xuICBpZiAocmVxdWVzdCAmJiBhc3NldExpc3QpIHtcbiAgICBjb25zdCBhc3NldEtleSA9IHJlcXVlc3Qua2V5OyAgLy8gbm90ZToganVzdCBzdG9yZSB0aGlzIGluIHRoZSByZXF1ZXN0XG4gICAgYXNzZXQgPSBhc3NldExpc3RbYXNzZXRLZXldIHx8IG51bGw7XG4gIH07XG4gIC8vIHJldHVybiBwcm9wc1xuICByZXR1cm4ge1xuICAgIGFzc2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscy9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaG93IH0pID0+IHtcbiAgLy8gc2VsZWN0IHJlcXVlc3QgaW5mb1xuICBjb25zdCByZXF1ZXN0SWQgPSBzaG93LnJlcXVlc3QuaWQ7XG4gIC8vIHNlbGVjdCBhc3NldCBpbmZvXG4gIGxldCBhc3NldDtcbiAgY29uc3QgcmVxdWVzdCA9IHNob3cucmVxdWVzdExpc3RbcmVxdWVzdElkXSB8fCBudWxsO1xuICBjb25zdCBhc3NldExpc3QgPSBzaG93LmFzc2V0TGlzdDtcbiAgaWYgKHJlcXVlc3QgJiYgYXNzZXRMaXN0KSB7XG4gICAgY29uc3QgYXNzZXRLZXkgPSByZXF1ZXN0LmtleTsgIC8vIG5vdGU6IGp1c3Qgc3RvcmUgdGhpcyBpbiB0aGUgcmVxdWVzdFxuICAgIGFzc2V0ID0gYXNzZXRMaXN0W2Fzc2V0S2V5XSB8fCBudWxsO1xuICB9O1xuICAvLyByZXR1cm4gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBhc3NldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dBc3NldExpdGUvaW5kZXguanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2hvdyB9KSA9PiB7XG4gIC8vIHNlbGVjdCByZXF1ZXN0IGluZm9cbiAgY29uc3QgcmVxdWVzdElkID0gc2hvdy5yZXF1ZXN0LmlkO1xuICAvLyBzZWxlY3QgcmVxdWVzdFxuICBjb25zdCBwcmV2aW91c1JlcXVlc3QgPSBzaG93LnJlcXVlc3RMaXN0W3JlcXVlc3RJZF0gfHwgbnVsbDtcbiAgLy8gc2VsZWN0IGNoYW5uZWxcbiAgbGV0IGNoYW5uZWw7XG4gIGlmIChwcmV2aW91c1JlcXVlc3QpIHtcbiAgICBjb25zdCBjaGFubmVsS2V5ID0gcHJldmlvdXNSZXF1ZXN0LmtleTtcbiAgICBjaGFubmVsID0gc2hvdy5jaGFubmVsTGlzdFtjaGFubmVsS2V5XSB8fCBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgY2hhbm5lbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dDaGFubmVsL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdjb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCB7IExPQ0FMX0NIRUNLLCBVTkFWQUlMQUJMRSwgRVJST1IsIEFWQUlMQUJMRSB9IGZyb20gJ2NvbnN0YW50cy9hc3NldF9kaXNwbGF5X3N0YXRlcyc7XG5cbmNsYXNzIEFzc2V0RGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7IGFzc2V0OiB7IGNsYWltRGF0YTogeyBuYW1lLCBjbGFpbUlkIH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLm9uRmlsZVJlcXVlc3QobmFtZSwgY2xhaW1JZCk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHN0YXR1cywgZXJyb3IsIGFzc2V0OiB7IGNsYWltRGF0YTogeyBuYW1lLCBjbGFpbUlkLCBjb250ZW50VHlwZSwgZmlsZUV4dCwgdGh1bWJuYWlsIH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nYXNzZXQtZGlzcGxheS1jb21wb25lbnQnPlxuICAgICAgICB7KHN0YXR1cyA9PT0gTE9DQUxfQ0hFQ0spICYmXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+Q2hlY2tpbmcgdG8gc2VlIGlmIFNwZWUuY2ggaGFzIHlvdXIgYXNzZXQgbG9jYWxseS4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyhzdGF0dXMgPT09IFVOQVZBSUxBQkxFKSAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlNpdCB0aWdodCwgd2UncmUgc2VhcmNoaW5nIHRoZSBMQlJZIGJsb2NrY2hhaW4gZm9yIHlvdXIgYXNzZXQhPC9wPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciBzaXplPXsxMn0gLz5cbiAgICAgICAgICA8cD5DdXJpb3VzIHdoYXQgbWFnaWMgaXMgaGFwcGVuaW5nIGhlcmU/IDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdibGFuaycgaHJlZj0naHR0cHM6Ly9sYnJ5LmlvL2ZhcS93aGF0LWlzLWxicnknPkxlYXJuIG1vcmUuPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyhzdGF0dXMgPT09IEVSUk9SKSAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlVuZm9ydHVuYXRlbHksIHdlIGNvdWxkbid0IGRvd25sb2FkIHlvdXIgYXNzZXQgZnJvbSBMQlJZLiAgWW91IGNhbiBoZWxwIHVzIG91dCBieSBzaGFyaW5nIHRoZSBiZWxvdyBlcnJvciBtZXNzYWdlIGluIHRoZSA8YSBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIGhyZWY9J2h0dHBzOi8vZGlzY29yZC5nZy9Zallid2hTJyB0YXJnZXQ9J19ibGFuayc+TEJSWSBkaXNjb3JkPC9hPi48L3A+XG4gICAgICAgICAgPGk+PHAgaWQ9J2Vycm9yLW1lc3NhZ2UnPntlcnJvcn08L3A+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7KHN0YXR1cyA9PT0gQVZBSUxBQkxFKSAmJlxuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY29udGVudFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL2pwZWcnOlxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvanBnJzpcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL3BuZyc6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhc3NldCdcbiAgICAgICAgICAgICAgICAgIHNyYz17YC8ke2NsYWltSWR9LyR7bmFtZX0uJHtmaWxlRXh0fWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9IC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9naWYnOlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYXNzZXQnXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvJHtjbGFpbUlkfS8ke25hbWV9LiR7ZmlsZUV4dH1gfVxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlICd2aWRlby9tcDQnOlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9J2Fzc2V0IHZpZGVvJyBjb250cm9scyBwb3N0ZXI9e3RodW1ibmFpbH0+XG4gICAgICAgICAgICAgICAgICA8c291cmNlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC8ke2NsYWltSWR9LyR7bmFtZX0uJHtmaWxlRXh0fWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHA+WW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIDxjb2RlPnZpZGVvPC9jb2RlPiBlbGVtZW50LjwvcD5cbiAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8cD5VbnN1cHBvcnRlZCBmaWxlIHR5cGU8L3A+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSgpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0RGlzcGxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0Fzc2V0RGlzcGxheS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2ZVN0YXR1c0JhciBmcm9tICdjb21wb25lbnRzL0FjdGl2ZVN0YXR1c0Jhcic7XG5pbXBvcnQgSW5hY3RpdmVTdGF0dXNCYXIgZnJvbSAnY29tcG9uZW50cy9JbmFjdGl2ZVN0YXR1c0Jhcic7XG5cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBiYXJzICAgICAgIDogW10sXG4gICAgICBpbmRleCAgICAgIDogMCxcbiAgICAgIGluY3JlbWVudGVyOiAxLFxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVCYXJzID0gdGhpcy5jcmVhdGVCYXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydFByb2dyZXNzQmFyID0gdGhpcy5zdGFydFByb2dyZXNzQmFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhciA9IHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BQcm9ncmVzc0JhciA9IHRoaXMuc3RvcFByb2dyZXNzQmFyLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuY3JlYXRlQmFycygpO1xuICAgIHRoaXMuc3RhcnRQcm9ncmVzc0JhcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLnN0b3BQcm9ncmVzc0JhcigpO1xuICB9XG4gIGNyZWF0ZUJhcnMgKCkge1xuICAgIGNvbnN0IGJhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnByb3BzLnNpemU7IGkrKykge1xuICAgICAgYmFycy5wdXNoKHtpc0FjdGl2ZTogZmFsc2V9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJhcnMgfSk7XG4gIH1cbiAgc3RhcnRQcm9ncmVzc0JhciAoKSB7XG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgfTtcbiAgdXBkYXRlUHJvZ3Jlc3NCYXIgKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXg7XG4gICAgbGV0IGluY3JlbWVudGVyID0gdGhpcy5zdGF0ZS5pbmNyZW1lbnRlcjtcbiAgICBsZXQgYmFycyA9IHRoaXMuc3RhdGUuYmFycztcbiAgICAvLyBmbGlwIGluY3JlbWVudGVyIGlmIG5lY2Vzc2FyeSwgdG8gc3RheSBpbiBib3VuZHNcbiAgICBpZiAoKGluZGV4IDwgMCkgfHwgKGluZGV4ID4gdGhpcy5wcm9wcy5zaXplKSkge1xuICAgICAgaW5jcmVtZW50ZXIgPSBpbmNyZW1lbnRlciAqIC0xO1xuICAgICAgaW5kZXggKz0gaW5jcmVtZW50ZXI7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSB0aGUgaW5kZXhlZCBiYXJcbiAgICBpZiAoaW5jcmVtZW50ZXIgPiAwKSB7XG4gICAgICBiYXJzW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhcnNbaW5kZXhdLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBpbmNyZW1lbnQgaW5kZXhcbiAgICBpbmRleCArPSBpbmNyZW1lbnRlcjtcbiAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJhcnMsXG4gICAgICBpbmNyZW1lbnRlcixcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9O1xuICBzdG9wUHJvZ3Jlc3NCYXIgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH07XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmJhcnMubWFwKChiYXIsIGluZGV4KSA9PiBiYXIuaXNBY3RpdmUgPyA8QWN0aXZlU3RhdHVzQmFyIGtleT17aW5kZXh9IC8+IDogPEluYWN0aXZlU3RhdHVzQmFyIGtleT17aW5kZXh9Lz4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCBzZWxlY3RBc3NldCA9IChzaG93KSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBzaG93LnJlcXVlc3RMaXN0W3Nob3cucmVxdWVzdC5pZF07XG4gIGNvbnN0IGFzc2V0S2V5ID0gcmVxdWVzdC5rZXk7XG4gIHJldHVybiBzaG93LmFzc2V0TGlzdFthc3NldEtleV07XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0U2hvd1N0YXRlID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZS5zaG93O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zZWxlY3RvcnMvc2hvdy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIEFzc2V0SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNvcHlUb0NsaXBib2FyZCA9IHRoaXMuY29weVRvQ2xpcGJvYXJkLmJpbmQodGhpcyk7XG4gIH1cbiAgY29weVRvQ2xpcGJvYXJkIChldmVudCkge1xuICAgIHZhciBlbGVtZW50VG9Db3B5ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZWxlbWVudHRvY29weTtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRUb0NvcHkpO1xuICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogJ09vcHMsIHVuYWJsZSB0byBjb3B5J30pO1xuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgYXNzZXQ6IHsgc2hvcnRJZCwgY2xhaW1EYXRhIDogeyBjaGFubmVsTmFtZSwgY2VydGlmaWNhdGVJZCwgZGVzY3JpcHRpb24sIG5hbWUsIGNsYWltSWQsIGZpbGVFeHQsIGNvbnRlbnRUeXBlLCB0aHVtYm5haWwsIGhvc3QgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hhbm5lbE5hbWUgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLXdpZGUgcm93LS1uby10b3AnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0yIGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+Q2hhbm5lbDo8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTggY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0Jz48TGluayB0bz17YC8ke2NoYW5uZWxOYW1lfToke2NlcnRpZmljYXRlSWR9YH0+e2NoYW5uZWxOYW1lfTwvTGluaz48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS13aWRlIHJvdy0tbm8tdG9wJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQnPntkZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgPGRpdiBpZD0nc2hvdy1zaGFyZS1idXR0b25zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0td2lkZSByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMiBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+U2hhcmU6PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tOCBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdyByb3ctLXNob3J0IHJvdy0td2lkZSBmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1zcGFjZS1iZXR3ZWVuLWJvdHRvbSBmbGV4LWNvbnRhaW5lci0td3JhcCc+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J19ibGFuaycgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9JHtob3N0fS8ke3Nob3J0SWR9LyR7bmFtZX1gfT50d2l0dGVyPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke2hvc3R9LyR7c2hvcnRJZH0vJHtuYW1lfWB9PmZhY2Vib29rPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2BodHRwOi8vdHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2w/Y2Fub25pY2FsVXJsPSR7aG9zdH0vJHtzaG9ydElkfS8ke25hbWV9YH0+dHVtYmxyPC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2BodHRwczovL3d3dy5yZWRkaXQuY29tL3N1Ym1pdD91cmw9JHtob3N0fS8ke3Nob3J0SWR9LyR7bmFtZX0mdGl0bGU9JHtuYW1lfWB9PnJlZGRpdDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLXdpZGUgcm93LS1uby10b3AnPlxuICAgICAgICAgIDxkaXYgaWQ9J3Nob3ctc2hvcnQtbGluayc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMiBjb2x1bW4tLW1lZC0xMCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+TGluazo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS04IGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXNob3J0IHJvdy0td2lkZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTcnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWVycm9yJyBpZD0naW5wdXQtZXJyb3ItY29weS1zaG9ydC1saW5rJyBoaWRkZW49J3RydWUnPmVycm9yIGhlcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nc2hvcnQtbGluaycgY2xhc3NOYW1lPSdpbnB1dC1kaXNhYmxlZCBpbnB1dC10ZXh0LS1mdWxsLXdpZHRoJyByZWFkT25seVxuICAgICAgICAgICAgICAgICAgICBzcGVsbENoZWNrPSdmYWxzZSdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ake2hvc3R9LyR7c2hvcnRJZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTEnIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTInPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi0tcHJpbWFyeSBidXR0b24tLXdpZGUnIGRhdGEtZWxlbWVudHRvY29weT0nc2hvcnQtbGluaydcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb3B5VG9DbGlwYm9hcmR9PmNvcHlcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBpZD0nc2hvdy1lbWJlZC1jb2RlJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0yIGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0Jz5FbWJlZDo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS04IGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXNob3J0IHJvdy0td2lkZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTcnPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWVycm9yJyBpZD0naW5wdXQtZXJyb3ItY29weS1lbWJlZC10ZXh0JyBoaWRkZW49J3RydWUnPmVycm9yIGhlcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHsoY29udGVudFR5cGUgPT09ICd2aWRlby9tcDQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdlbWJlZC10ZXh0JyBjbGFzc05hbWU9J2lucHV0LWRpc2FibGVkIGlucHV0LXRleHQtLWZ1bGwtd2lkdGgnIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3R9IHNwZWxsQ2hlY2s9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgPHZpZGVvIHdpZHRoPVwiMTAwJVwiIGNvbnRyb2xzIHBvc3Rlcj1cIiR7dGh1bWJuYWlsfVwiIHNyYz1cIiR7aG9zdH0vJHtjbGFpbUlkfS8ke25hbWV9LiR7ZmlsZUV4dH1cIi8+PC92aWRlbz5gfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdlbWJlZC10ZXh0JyBjbGFzc05hbWU9J2lucHV0LWRpc2FibGVkIGlucHV0LXRleHQtLWZ1bGwtd2lkdGgnIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3R9IHNwZWxsQ2hlY2s9J2ZhbHNlJ1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgPGltZyBzcmM9XCIke2hvc3R9LyR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9XCIvPmB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0yJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24tLXByaW1hcnkgYnV0dG9uLS13aWRlJyBkYXRhLWVsZW1lbnR0b2NvcHk9J2VtYmVkLXRleHQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29weVRvQ2xpcGJvYXJkfT5jb3B5XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtY29udGFpbmVyLS1yb3cgZmxleC1jb250YWluZXItLXNwYWNlLWJldHdlZW4tYm90dG9tJz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2xpbmstLXByaW1hcnknIHRvPXtgLyR7c2hvcnRJZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YH0+PHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dCc+RGlyZWN0IExpbms8L3NwYW4+PC9MaW5rPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgaHJlZj17YCR7aG9zdH0vJHtjbGFpbUlkfS8ke25hbWV9LiR7ZmlsZUV4dH1gfSBkb3dubG9hZD17bmFtZX0+RG93bmxvYWQ8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9sYnJ5LmlvL2RtY2EnPlJlcG9ydDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0SW5mbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0Fzc2V0SW5mby92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFzc2V0VGl0bGUgPSAoeyB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC0tbGFyZ2UnPnt0aXRsZX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFRpdGxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQXNzZXRUaXRsZS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXNzZXRQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvQXNzZXRQcmV2aWV3JztcblxuY2xhc3MgQ2hhbm5lbENsYWltc0Rpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zaG93TmV4dFJlc3VsdHNQYWdlID0gdGhpcy5zaG93TmV4dFJlc3VsdHNQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93UHJldmlvdXNSZXN1bHRzUGFnZSA9IHRoaXMuc2hvd1ByZXZpb3VzUmVzdWx0c1BhZ2UuYmluZCh0aGlzKTtcbiAgfVxuICBzaG93UHJldmlvdXNSZXN1bHRzUGFnZSAoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsOiB7IGNsYWltc0RhdGE6IHsgY3VycmVudFBhZ2UgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHBhcnNlSW50KGN1cnJlbnRQYWdlKSAtIDE7XG4gICAgdGhpcy5zaG93TmV3UGFnZShwcmV2aW91c1BhZ2UpO1xuICB9XG4gIHNob3dOZXh0UmVzdWx0c1BhZ2UgKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbDogeyBjbGFpbXNEYXRhOiB7IGN1cnJlbnRQYWdlIH0gfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXh0UGFnZSA9IHBhcnNlSW50KGN1cnJlbnRQYWdlKSArIDE7XG4gICAgdGhpcy5zaG93TmV3UGFnZShuZXh0UGFnZSk7XG4gIH1cbiAgc2hvd05ld1BhZ2UgKHBhZ2UpIHtcbiAgICBjb25zdCB7IGNoYW5uZWxLZXksIGNoYW5uZWw6IHsgbmFtZSwgbG9uZ0lkIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZUNoYW5uZWxDbGFpbXMoY2hhbm5lbEtleSwgbmFtZSwgbG9uZ0lkLCBwYWdlKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2hhbm5lbDogeyBjbGFpbXNEYXRhOiB7IGNsYWltcywgY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMgfSB9IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tdGFsbCc+XG4gICAgICAgIHsoY2xhaW1zLmxlbmd0aCA+IDApID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y2xhaW1zLm1hcCgoY2xhaW0sIGluZGV4KSA9PiA8QXNzZXRQcmV2aWV3XG4gICAgICAgICAgICAgIGNsYWltRGF0YT17Y2xhaW19XG4gICAgICAgICAgICAgIGtleT17YCR7Y2xhaW0ubmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgLz4pfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgeyhjdXJyZW50UGFnZSA+IDEpICYmXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYnV0dG9uLS1zZWNvbmRhcnknfSBvbkNsaWNrPXt0aGlzLnNob3dQcmV2aW91c1Jlc3VsdHNQYWdlfT5QcmV2aW91cyBQYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgeyhjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMpICYmXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYnV0dG9uLS1zZWNvbmRhcnknfSBvbkNsaWNrPXt0aGlzLnNob3dOZXh0UmVzdWx0c1BhZ2V9Pk5leHQgUGFnZTwvYnV0dG9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5UaGVyZSBhcmUgbm8gY2xhaW1zIGluIHRoaXMgY2hhbm5lbDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxDbGFpbXNEaXNwbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbENsYWltc0Rpc3BsYXkvdmlldy5qc3giLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcyc7XG5cbi8vIGV4cG9ydCBhY3Rpb24gY3JlYXRvcnNcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvZ2dlZEluQ2hhbm5lbCAobmFtZSwgc2hvcnRJZCwgbG9uZ0lkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOTkVMX1VQREFURSxcbiAgICBkYXRhOiB7XG4gICAgICBuYW1lLFxuICAgICAgc2hvcnRJZCxcbiAgICAgIGxvbmdJZCxcbiAgICB9LFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL2NoYW5uZWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAndXRpbHMvcmVxdWVzdCc7XG5cbmNsYXNzIENoYW5uZWxDcmVhdGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvciAgIDogbnVsbCxcbiAgICAgIGNoYW5uZWwgOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHN0YXR1cyAgOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFubmVsSW5wdXQgPSB0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSB0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVDaGFubmVsID0gdGhpcy5jcmVhdGVDaGFubmVsLmJpbmQodGhpcyk7XG4gIH1cbiAgY2xlYW5zZUNoYW5uZWxJbnB1dCAoaW5wdXQpIHtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xccysvZywgJy0nKTsgLy8gcmVwbGFjZSBzcGFjZXMgd2l0aCBkYXNoZXNcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05LV0vZywgJycpOyAgLy8gcmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBLVosIGEteiwgMC05LCBvciAnLSdcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaGFuZGxlQ2hhbm5lbElucHV0IChldmVudCkge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB2YWx1ZSA9IHRoaXMuY2xlYW5zZUNoYW5uZWxJbnB1dCh2YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhbm5lbDogdmFsdWV9KTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlSXNDaGFubmVsQXZhaWxhYmxlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6ICdQbGVhc2UgZW50ZXIgYSBjaGFubmVsIG5hbWUnfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0IChldmVudCkge1xuICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gIH1cbiAgdXBkYXRlSXNDaGFubmVsQXZhaWxhYmxlIChjaGFubmVsKSB7XG4gICAgY29uc3QgY2hhbm5lbFdpdGhBdFN5bWJvbCA9IGBAJHtjaGFubmVsfWA7XG4gICAgcmVxdWVzdChgL2FwaS9jaGFubmVsL2F2YWlsYWJpbGl0eS8ke2NoYW5uZWxXaXRoQXRTeW1ib2x9YClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogbnVsbH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogZXJyb3IubWVzc2FnZX0pO1xuICAgICAgfSk7XG4gIH1cbiAgY2hlY2tJc0NoYW5uZWxBdmFpbGFibGUgKGNoYW5uZWwpIHtcbiAgICBjb25zdCBjaGFubmVsV2l0aEF0U3ltYm9sID0gYEAke2NoYW5uZWx9YDtcbiAgICByZXR1cm4gcmVxdWVzdChgL2FwaS9jaGFubmVsL2F2YWlsYWJpbGl0eS8ke2NoYW5uZWxXaXRoQXRTeW1ib2x9YCk7XG4gIH1cbiAgY2hlY2tJc1Bhc3N3b3JkUHJvdmlkZWQgKHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZCcpKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuICBtYWtlUHVibGlzaENoYW5uZWxSZXF1ZXN0ICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICBib2R5ICAgOiBKU09OLnN0cmluZ2lmeSh7dXNlcm5hbWUsIHBhc3N3b3JkfSksXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9KSxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVxdWVzdCgnL3NpZ251cCcsIHBhcmFtcylcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuZm9ydHVuYXRlbHksIHdlIGVuY291bnRlcmVkIGFuIGVycm9yIHdoaWxlIGNyZWF0aW5nIHlvdXIgY2hhbm5lbC4gUGxlYXNlIGxldCB1cyBrbm93IGluIERpc2NvcmQhICR7ZXJyb3IubWVzc2FnZX1gKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUNoYW5uZWwgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoZWNrSXNQYXNzd29yZFByb3ZpZGVkKHRoaXMuc3RhdGUucGFzc3dvcmQpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSXNDaGFubmVsQXZhaWxhYmxlKHRoaXMuc3RhdGUuY2hhbm5lbCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXM6ICdXZSBhcmUgcHVibGlzaGluZyB5b3VyIG5ldyBjaGFubmVsLiAgU2l0IHRpZ2h0Li4uJ30pO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUHVibGlzaENoYW5uZWxSZXF1ZXN0KHRoaXMuc3RhdGUuY2hhbm5lbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzOiBudWxsfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9naW4ocmVzdWx0LmNoYW5uZWxOYW1lLCByZXN1bHQuc2hvcnRDaGFubmVsSWQsIHJlc3VsdC5jaGFubmVsQ2xhaW1JZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydlcnJvcic6IGVycm9yLm1lc3NhZ2UsIHN0YXR1czogbnVsbH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeydlcnJvcic6IGVycm9yLCBzdGF0dXM6IG51bGx9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgIXRoaXMuc3RhdGUuc3RhdHVzID8gKFxuICAgICAgICAgIDxmb3JtIGlkPSdwdWJsaXNoLWNoYW5uZWwtZm9ybSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSByb3ctLXNob3J0Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTMgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJyBodG1sRm9yPSduZXctY2hhbm5lbC1uYW1lJz5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS02IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSBmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1sZWZ0LWJvdHRvbSBzcGFuLS1yZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5APC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2NoYW5uZWwnIGlkPSduZXctY2hhbm5lbC1uYW1lJyBjbGFzc05hbWU9J2lucHV0LXRleHQnIHBsYWNlaG9sZGVyPSdleGFtcGxlQ2hhbm5lbE5hbWUnIHZhbHVlPXt0aGlzLnN0YXRlLmNoYW5uZWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5uZWxJbnB1dH0gLz5cbiAgICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUuY2hhbm5lbCAmJiAhdGhpcy5zdGF0ZS5lcnJvcikgJiYgPHNwYW4gaWQ9J2lucHV0LXN1Y2Nlc3MtY2hhbm5lbC1uYW1lJyBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tc3VjY2VzcyBzcGFuLS1hYnNvbHV0ZSc+eydcXHUyNzEzJ308L3NwYW4+IH1cbiAgICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciAmJiA8c3BhbiBpZD0naW5wdXQtc3VjY2Vzcy1jaGFubmVsLW5hbWUnIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLS1mYWlsdXJlIHNwYW4tLWFic29sdXRlJz57J1xcdTI3MTYnfTwvc3Bhbj4gfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUgcm93LS1zaG9ydCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj0nbmV3LWNoYW5uZWwtcGFzc3dvcmQnPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS02IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG5hbWU9J3Bhc3N3b3JkJyBpZD0nbmV3LWNoYW5uZWwtcGFzc3dvcmQnIGNsYXNzTmFtZT0naW5wdXQtdGV4dCcgIHBsYWNlaG9sZGVyPScnIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSc+e3RoaXMuc3RhdGUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPkNob29zZSBhIG5hbWUgYW5kIHBhc3N3b3JkIGZvciB5b3VyIGNoYW5uZWw8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1wcmltYXJ5JyBvbkNsaWNrPXt0aGlzLmNyZWF0ZUNoYW5uZWx9PkNyZWF0ZSBDaGFubmVsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmluZS1wcmludCc+e3RoaXMuc3RhdGUuc3RhdHVzfTwvcD5cbiAgICAgICAgICAgIDxQcm9ncmVzc0JhciBzaXplPXsxMn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbm5lbENyZWF0ZUZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsQ3JlYXRlRm9ybS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICd1dGlscy9yZXF1ZXN0JztcblxuY2xhc3MgQ2hhbm5lbExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3IgICA6IG51bGwsXG4gICAgICBuYW1lICAgIDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5Ub0NoYW5uZWwgPSB0aGlzLmxvZ2luVG9DaGFubmVsLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlSW5wdXQgKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcbiAgfVxuICBsb2dpblRvQ2hhbm5lbCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICAgIGJvZHkgICA6IEpTT04uc3RyaW5naWZ5KHt1c2VybmFtZTogdGhpcy5zdGF0ZS5uYW1lLCBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZH0pLFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSksXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIH07XG4gICAgcmVxdWVzdCgnbG9naW4nLCBwYXJhbXMpXG4gICAgICAudGhlbigoe3N1Y2Nlc3MsIGNoYW5uZWxOYW1lLCBzaG9ydENoYW5uZWxJZCwgY2hhbm5lbENsYWltSWQsIG1lc3NhZ2V9KSA9PiB7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5uZWxMb2dpbihjaGFubmVsTmFtZSwgc2hvcnRDaGFubmVsSWQsIGNoYW5uZWxDbGFpbUlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsnZXJyb3InOiBtZXNzYWdlfSk7XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsnZXJyb3InOiBlcnJvci5tZXNzYWdlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7J2Vycm9yJzogZXJyb3J9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gaWQ9J2NoYW5uZWwtbG9naW4tZm9ybSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS13aWRlIHJvdy0tc2hvcnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJyBodG1sRm9yPSdjaGFubmVsLWxvZ2luLW5hbWUtaW5wdXQnPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNiBjb2x1bW4tLXNtbC0xMCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSBmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1sZWZ0LWJvdHRvbSc+XG4gICAgICAgICAgICAgIDxzcGFuPkA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nY2hhbm5lbC1sb2dpbi1uYW1lLWlucHV0JyBjbGFzc05hbWU9J2lucHV0LXRleHQnIG5hbWU9J25hbWUnIHBsYWNlaG9sZGVyPSdZb3VyIENoYW5uZWwgTmFtZScgdmFsdWU9e3RoaXMuc3RhdGUuY2hhbm5lbE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSByb3ctLXNob3J0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyBjb2x1bW4tLXNtbC0xMCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj0nY2hhbm5lbC1sb2dpbi1wYXNzd29yZC1pbnB1dCcgPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTYgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LXRleHQtLXByaW1hcnknPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdjaGFubmVsLWxvZ2luLXBhc3N3b3JkLWlucHV0JyBuYW1lPSdwYXNzd29yZCcgY2xhc3NOYW1lPSdpbnB1dC10ZXh0JyBwbGFjZWhvbGRlcj0nJyB2YWx1ZT17dGhpcy5zdGF0ZS5jaGFubmVsUGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UtLWZhaWx1cmUnPnt0aGlzLnN0YXRlLmVycm9yfTwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZSc+RW50ZXIgdGhlIG5hbWUgYW5kIHBhc3N3b3JkIGZvciB5b3VyIGNoYW5uZWw8L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS13aWRlJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1wcmltYXJ5JyBvbkNsaWNrPXt0aGlzLmxvZ2luVG9DaGFubmVsfT5BdXRoZW50aWNhdGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFubmVsTG9naW5Gb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvQ2hhbm5lbExvZ2luRm9ybS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hhbm5lbExvZ2luRm9ybSBmcm9tICdjb250YWluZXJzL0NoYW5uZWxMb2dpbkZvcm0nO1xuaW1wb3J0IENoYW5uZWxDcmVhdGVGb3JtIGZyb20gJ2NvbnRhaW5lcnMvQ2hhbm5lbENyZWF0ZUZvcm0nO1xuaW1wb3J0ICogYXMgc3RhdGVzIGZyb20gJ2NvbnN0YW50cy9wdWJsaXNoX2NoYW5uZWxfc2VsZWN0X3N0YXRlcyc7XG5cbmNsYXNzIENoYW5uZWxTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b2dnbGVBbm9ueW1vdXNQdWJsaXNoID0gdGhpcy50b2dnbGVBbm9ueW1vdXNQdWJsaXNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG4gIHRvZ2dsZUFub255bW91c1B1Ymxpc2ggKGV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnYW5vbnltb3VzJykge1xuICAgICAgdGhpcy5wcm9wcy5vblB1Ymxpc2hJbkNoYW5uZWxDaGFuZ2UoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uUHVibGlzaEluQ2hhbm5lbENoYW5nZSh0cnVlKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU2VsZWN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbm5lbFNlbGVjdChzZWxlY3RlZE9wdGlvbik7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTMgY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdhbm9ueW1vdXMtb3ItY2hhbm5lbCcgaWQ9J2Fub255bW91cy1yYWRpbycgY2xhc3NOYW1lPSdpbnB1dC1yYWRpbycgdmFsdWU9J2Fub255bW91cycgY2hlY2tlZD17IXRoaXMucHJvcHMucHVibGlzaEluQ2hhbm5lbH0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlQW5vbnltb3VzUHVibGlzaH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsIGxhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdhbm9ueW1vdXMtcmFkaW8nPkFub255bW91czwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTcgY29sdW1uLS1tZWQtMTAnPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdhbm9ueW1vdXMtb3ItY2hhbm5lbCcgaWQ9J2NoYW5uZWwtcmFkaW8nIGNsYXNzTmFtZT0naW5wdXQtcmFkaW8nIHZhbHVlPSdpbiBhIGNoYW5uZWwnIGNoZWNrZWQ9e3RoaXMucHJvcHMucHVibGlzaEluQ2hhbm5lbH0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlQW5vbnltb3VzUHVibGlzaH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsIGxhYmVsLS1wb2ludGVyJyBodG1sRm9yPSdjaGFubmVsLXJhZGlvJz5JbiBhIGNoYW5uZWw8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGFubmVsRXJyb3IgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSc+e3RoaXMucHJvcHMuY2hhbm5lbEVycm9yfTwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPlB1Ymxpc2ggYW5vbnltb3VzbHkgb3IgaW4gYSBjaGFubmVsPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgeyB0aGlzLnByb3BzLnB1Ymxpc2hJbkNoYW5uZWwgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyc+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJyBodG1sRm9yPSdjaGFubmVsLW5hbWUtc2VsZWN0Jz5DaGFubmVsOjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNyc+XG4gICAgICAgICAgICAgIDxzZWxlY3QgdHlwZT0ndGV4dCcgaWQ9J2NoYW5uZWwtbmFtZS1zZWxlY3QnIGNsYXNzTmFtZT0nc2VsZWN0IHNlbGVjdC0tYXJyb3cnIHZhbHVlPXt0aGlzLnByb3BzLnNlbGVjdGVkQ2hhbm5lbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMubG9nZ2VkSW5DaGFubmVsTmFtZSAmJiA8b3B0aW9uIHZhbHVlPXt0aGlzLnByb3BzLmxvZ2dlZEluQ2hhbm5lbE5hbWV9IGlkPSdwdWJsaXNoLWNoYW5uZWwtc2VsZWN0LWNoYW5uZWwtb3B0aW9uJz57dGhpcy5wcm9wcy5sb2dnZWRJbkNoYW5uZWxOYW1lfTwvb3B0aW9uPiB9XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c3RhdGVzLkxPR0lOfT5FeGlzdGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3N0YXRlcy5DUkVBVEV9Pk5ldzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyAodGhpcy5wcm9wcy5zZWxlY3RlZENoYW5uZWwgPT09IHN0YXRlcy5MT0dJTikgJiYgPENoYW5uZWxMb2dpbkZvcm0gLz4gfVxuICAgICAgICAgICAgeyAodGhpcy5wcm9wcy5zZWxlY3RlZENoYW5uZWwgPT09IHN0YXRlcy5DUkVBVEUpICYmIDxDaGFubmVsQ3JlYXRlRm9ybSAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5uZWxTZWxlY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9DaGFubmVsU2VsZWN0L3ZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHZhbGlkYXRlRmlsZSB9IGZyb20gJ3V0aWxzL2ZpbGUnO1xuaW1wb3J0IFB1Ymxpc2hQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvUHVibGlzaFByZXZpZXcnO1xuXG5jbGFzcyBEcm9wem9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ092ZXIgIDogZmFsc2UsXG4gICAgICBtb3VzZU92ZXIgOiBmYWxzZSxcbiAgICAgIGRpbVByZXZpZXc6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEcm9wID0gdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEcmFnT3ZlciA9IHRoaXMuaGFuZGxlRHJhZ092ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURyYWdFbmQgPSB0aGlzLmhhbmRsZURyYWdFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURyYWdFbnRlciA9IHRoaXMuaGFuZGxlRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEcmFnTGVhdmUgPSB0aGlzLmhhbmRsZURyYWdMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VFbnRlciA9IHRoaXMuaGFuZGxlTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaWxlSW5wdXQgPSB0aGlzLmhhbmRsZUZpbGVJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlRmlsZSA9IHRoaXMuY2hvb3NlRmlsZS5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZURyb3AgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnT3ZlcjogZmFsc2V9KTtcbiAgICAvLyBpZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cbiAgICBjb25zdCBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICBpZiAoZHQuaXRlbXMpIHtcbiAgICAgIGlmIChkdC5pdGVtc1swXS5raW5kID09PSAnZmlsZScpIHtcbiAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBkdC5pdGVtc1swXS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgdGhpcy5jaG9vc2VGaWxlKGRyb3BwZWRGaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaGFuZGxlRHJhZ092ZXIgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBoYW5kbGVEcmFnRW5kIChldmVudCkge1xuICAgIHZhciBkdCA9IGV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICBpZiAoZHQuaXRlbXMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHQuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZHQuaXRlbXMucmVtb3ZlKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZURyYWdFbnRlciAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IHRydWUsIGRpbVByZXZpZXc6IHRydWV9KTtcbiAgfVxuICBoYW5kbGVEcmFnTGVhdmUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdPdmVyOiBmYWxzZSwgZGltUHJldmlldzogZmFsc2V9KTtcbiAgfVxuICBoYW5kbGVNb3VzZUVudGVyICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IHRydWUsIGRpbVByZXZpZXc6IHRydWV9KTtcbiAgfVxuICBoYW5kbGVNb3VzZUxlYXZlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IGZhbHNlLCBkaW1QcmV2aWV3OiBmYWxzZX0pO1xuICB9XG4gIGhhbmRsZUNsaWNrIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVfaW5wdXQnKS5jbGljaygpO1xuICB9XG4gIGhhbmRsZUZpbGVJbnB1dCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuICAgIHRoaXMuY2hvb3NlRmlsZShmaWxlTGlzdFswXSk7XG4gIH1cbiAgY2hvb3NlRmlsZSAoZmlsZSkge1xuICAgIGlmIChmaWxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWxpZGF0ZUZpbGUoZmlsZSk7IC8vIHZhbGlkYXRlIHRoZSBmaWxlJ3MgbmFtZSwgdHlwZSwgYW5kIHNpemVcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNldEZpbGVFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIC8vIHN0YWdlIGl0IHNvIGl0IHdpbGwgYmUgcmVhZHkgd2hlbiB0aGUgcHVibGlzaCBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgdGhpcy5wcm9wcy5zZWxlY3RGaWxlKGZpbGUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tdGFsbCBmbGV4LWNvbnRhaW5lci0tY29sdW1uJz5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXQtZmlsZScgdHlwZT0nZmlsZScgaWQ9J2ZpbGVfaW5wdXQnIG5hbWU9J2ZpbGVfaW5wdXQnIGFjY2VwdD0ndmlkZW8vKixpbWFnZS8qJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlSW5wdXR9IGVuY1R5cGU9J211bHRpcGFydC9mb3JtLWRhdGEnIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBpZD0ncHJldmlldy1kcm9wem9uZScgY2xhc3NOYW1lPXsncm93IHJvdy0tcGFkZGVkIHJvdy0tdGFsbCBkcm9wem9uZScgKyAodGhpcy5zdGF0ZS5kcmFnT3ZlciA/ICcgZHJvcHpvbmUtLWRyYWctb3ZlcicgOiAnJyl9IG9uRHJvcD17dGhpcy5oYW5kbGVEcm9wfSBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZURyYWdPdmVyfSBvbkRyYWdFbmQ9e3RoaXMuaGFuZGxlRHJhZ0VuZH0gb25EcmFnRW50ZXI9e3RoaXMuaGFuZGxlRHJhZ0VudGVyfSBvbkRyYWdMZWF2ZT17dGhpcy5oYW5kbGVEcmFnTGVhdmV9IG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAge3RoaXMucHJvcHMuZmlsZSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxQdWJsaXNoUHJldmlld1xuICAgICAgICAgICAgICAgIGRpbVByZXZpZXc9e3RoaXMuc3RhdGUuZGltUHJldmlld31cbiAgICAgICAgICAgICAgICBmaWxlPXt0aGlzLnByb3BzLmZpbGV9XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsPXt0aGlzLnByb3BzLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBpZD0nZHJvcHpvbmUtdGV4dC1ob2xkZXInIGNsYXNzTmFtZT17J2ZsZXgtY29udGFpbmVyLS1jb2x1bW4gZmxleC1jb250YWluZXItLWNlbnRlci1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuZHJhZ092ZXIgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkcm9wem9uZS1kcmFnb3Zlcic+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZSc+RHJvcCBpdC48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLm1vdXNlT3ZlciA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2Ryb3B6b25lLWluc3RydWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLXBsYWNlaG9sZGVyIGluZm8tbWVzc2FnZS0tZmFpbHVyZScgaWQ9J2lucHV0LWVycm9yLWZpbGUtc2VsZWN0aW9uJz57dGhpcy5wcm9wcy5maWxlRXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5EcmFnICYgZHJvcCBpbWFnZSBvciB2aWRlbyBoZXJlIHRvIHB1Ymxpc2g8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmluZS1wcmludCc+T1I8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZS0tdW5kZXJsaW5lZCc+Q0hPT1NFIEZJTEU8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgaWQ9J2Ryb3B6b25lLXRleHQtaG9sZGVyJyBjbGFzc05hbWU9eydmbGV4LWNvbnRhaW5lci0tY29sdW1uIGZsZXgtY29udGFpbmVyLS1jZW50ZXItY2VudGVyJ30+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5kcmFnT3ZlciA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdkcm9wem9uZS1kcmFnb3Zlcic+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JsdWUnPkRyb3AgaXQuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2Ryb3B6b25lLWluc3RydWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS1wbGFjZWhvbGRlciBpbmZvLW1lc3NhZ2UtLWZhaWx1cmUnIGlkPSdpbnB1dC1lcnJvci1maWxlLXNlbGVjdGlvbic+e3RoaXMucHJvcHMuZmlsZUVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkRyYWcgJiBkcm9wIGltYWdlIG9yIHZpZGVvIGhlcmUgdG8gcHVibGlzaDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmluZS1wcmludCc+T1I8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JsdWUtLXVuZGVybGluZWQnPkNIT09TRSBGSUxFPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL0Ryb3B6b25lL3ZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nbyc7XG5pbXBvcnQgTmF2QmFyQ2hhbm5lbERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICd1dGlscy9yZXF1ZXN0JztcblxuY29uc3QgVklFVyA9ICdWSUVXJztcbmNvbnN0IExPR09VVCA9ICdMT0dPVVQnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jaGVja0ZvckxvZ2dlZEluVXNlciA9IHRoaXMuY2hlY2tGb3JMb2dnZWRJblVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ291dFVzZXIgPSB0aGlzLmxvZ291dFVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpblxuICAgIHRoaXMuY2hlY2tGb3JMb2dnZWRJblVzZXIoKTtcbiAgfVxuICBjaGVja0ZvckxvZ2dlZEluVXNlciAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9O1xuICAgIHJlcXVlc3QoJy91c2VyJywgcGFyYW1zKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9naW4oZGF0YS5jaGFubmVsTmFtZSwgZGF0YS5zaG9ydENoYW5uZWxJZCwgZGF0YS5jaGFubmVsQ2xhaW1JZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy91c2VyIGVycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgbG9nb3V0VXNlciAoKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge2NyZWRlbnRpYWxzOiAnaW5jbHVkZSd9O1xuICAgIHJlcXVlc3QoJy9sb2dvdXQnLCBwYXJhbXMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFubmVsTG9nb3V0KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy9sb2dvdXQgZXJyb3InLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG4gIGhhbmRsZVNlbGVjdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnNbMF0udmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBMT0dPVVQ6XG4gICAgICAgIHRoaXMubG9nb3V0VXNlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVklFVzpcbiAgICAgICAgLy8gcmVkaXJlY3QgdG8gY2hhbm5lbCBwYWdlXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvJHt0aGlzLnByb3BzLmNoYW5uZWxOYW1lfToke3RoaXMucHJvcHMuY2hhbm5lbExvbmdJZH1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHNpdGVEZXNjcmlwdGlvbiB9ID0gIHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS13aWRlIG5hdi1iYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0tc2hvcnQgZmxleC1jb250YWluZXItLXJvdyBmbGV4LWNvbnRhaW5lci0tc3BhY2UtYmV0d2Vlbi1jZW50ZXInPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1iYXItLWNlbnRlcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J25hdi1iYXItdGFnbGluZSc+e3NpdGVEZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdi1iYXItLXJpZ2h0Jz5cbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgYWN0aXZlQ2xhc3NOYW1lPSdsaW5rLS1uYXYtYWN0aXZlJyB0bz0nLycgZXhhY3Q+UHVibGlzaDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgIGFjdGl2ZUNsYXNzTmFtZT0nbGluay0tbmF2LWFjdGl2ZScgdG89Jy9hYm91dCc+QWJvdXQ8L05hdkxpbms+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hhbm5lbE5hbWUgPyAoXG4gICAgICAgICAgICAgIDxOYXZCYXJDaGFubmVsRHJvcGRvd25cbiAgICAgICAgICAgICAgICBjaGFubmVsTmFtZT17dGhpcy5wcm9wcy5jaGFubmVsTmFtZX1cbiAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb249e3RoaXMuaGFuZGxlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3Rpb249e3RoaXMucHJvcHMuY2hhbm5lbE5hbWV9XG4gICAgICAgICAgICAgICAgVklFVz17VklFV31cbiAgICAgICAgICAgICAgICBMT0dPVVQ9e0xPR09VVH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGlkPSduYXYtYmFyLWxvZ2luLWxpbmsnIGNsYXNzTmFtZT0nbmF2LWJhci1saW5rIGxpbmstLW5hdicgYWN0aXZlQ2xhc3NOYW1lPSdsaW5rLS1uYXYtYWN0aXZlJyB0bz0nL2xvZ2luJz5DaGFubmVsPC9OYXZMaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2QmFyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL05hdkJhci92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnY29udGFpbmVycy9Ecm9wem9uZSc7XG5pbXBvcnQgUHVibGlzaFRpdGxlSW5wdXQgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoVGl0bGVJbnB1dCc7XG5pbXBvcnQgUHVibGlzaFVybElucHV0IGZyb20gJ2NvbnRhaW5lcnMvUHVibGlzaFVybElucHV0JztcbmltcG9ydCBQdWJsaXNoVGh1bWJuYWlsSW5wdXQgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoVGh1bWJuYWlsSW5wdXQnO1xuaW1wb3J0IFB1Ymxpc2hNZXRhZGF0YUlucHV0cyBmcm9tICdjb250YWluZXJzL1B1Ymxpc2hNZXRhZGF0YUlucHV0cyc7XG5pbXBvcnQgQ2hhbm5lbFNlbGVjdCBmcm9tICdjb250YWluZXJzL0NoYW5uZWxTZWxlY3QnO1xuXG5jbGFzcyBQdWJsaXNoRGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMub25QdWJsaXNoU3VibWl0ID0gdGhpcy5vblB1Ymxpc2hTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBvblB1Ymxpc2hTdWJtaXQgKCkge1xuICAgIHRoaXMucHJvcHMuc3RhcnRQdWJsaXNoKHRoaXMucHJvcHMuaGlzdG9yeSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLW5vLWJvdHRvbSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xMCc+XG4gICAgICAgICAgPFB1Ymxpc2hUaXRsZUlucHV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogbGVmdCBjb2x1bW4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tc21sLTEwJyA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgICA8RHJvcHpvbmUgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiByaWdodCBjb2x1bW4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tc21sLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICA8ZGl2IGlkPSdwdWJsaXNoLWFjdGl2ZS1hcmVhJyBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0tbm8tdG9wIHJvdy0td2lkZSc+XG4gICAgICAgICAgICAgIDxQdWJsaXNoVXJsSW5wdXQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLW5vLXRvcCByb3ctLXdpZGUnPlxuICAgICAgICAgICAgICA8Q2hhbm5lbFNlbGVjdCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ICh0aGlzLnByb3BzLmZpbGUudHlwZSA9PT0gJ3ZpZGVvL21wNCcpICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCByb3ctLW5vLXRvcCByb3ctLXdpZGUgJz5cbiAgICAgICAgICAgICAgICA8UHVibGlzaFRodW1ibmFpbElucHV0IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS1uby10b3Agcm93LS1uby1ib3R0b20gcm93LS13aWRlJz5cbiAgICAgICAgICAgICAgPFB1Ymxpc2hNZXRhZGF0YUlucHV0cyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0td2lkZSBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9J3B1Ymxpc2gtc3VibWl0JyBjbGFzc05hbWU9J2J1dHRvbi0tcHJpbWFyeSBidXR0b24tLWxhcmdlJyBvbkNsaWNrPXt0aGlzLm9uUHVibGlzaFN1Ym1pdH0+UHVibGlzaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkIHJvdy0tbm8tYm90dG9tIGFsaWduLWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi0tY2FuY2VsJyBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyRmlsZX0+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1zaG9ydCBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZmluZS1wcmludCc+QnkgY2xpY2tpbmcgJ1B1Ymxpc2gnLCB5b3UgYWZmaXJtIHRoYXQgeW91IGhhdmUgdGhlIHJpZ2h0cyB0byBwdWJsaXNoIHRoaXMgY29udGVudCB0byB0aGUgTEJSWSBuZXR3b3JrLCBhbmQgdGhhdCB5b3UgdW5kZXJzdGFuZCB0aGUgcHJvcGVydGllcyBvZiBwdWJsaXNoaW5nIGl0IHRvIGEgZGVjZW50cmFsaXplZCwgdXNlci1jb250cm9sbGVkIG5ldHdvcmsuIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9J2h0dHBzOi8vbGJyeS5pby9sZWFybic+UmVhZCBtb3JlLjwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFB1Ymxpc2hEZXRhaWxzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hEZXRhaWxzL3ZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUHVibGlzaFRpdGxlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVJbnB1dCAoZSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbk1ldGFkYXRhQ2hhbmdlKG5hbWUsIHZhbHVlKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3B1Ymxpc2gtdGl0bGUnIGNsYXNzTmFtZT0naW5wdXQtdGV4dCB0ZXh0LS1sYXJnZSBpbnB1dC10ZXh0LS1mdWxsLXdpZHRoJyBuYW1lPSd0aXRsZScgcGxhY2Vob2xkZXI9J0dpdmUgeW91ciBwb3N0IGEgdGl0bGUuLi4nIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hUaXRsZUlucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFRpdGxlSW5wdXQvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAndXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgVXJsTWlkZGxlIGZyb20gJ2NvbXBvbmVudHMvUHVibGlzaFVybE1pZGRsZURpc3BsYXknO1xuXG5jbGFzcyBQdWJsaXNoVXJsSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgeyBjbGFpbSwgZmlsZU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFjbGFpbSkge1xuICAgICAgdGhpcy5zZXRDbGFpbU5hbWUoZmlsZU5hbWUpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICh7IGNsYWltLCBmaWxlTmFtZSB9KSB7XG4gICAgLy8gaWYgYSBuZXcgZmlsZSB3YXMgY2hvc2VuLCB1cGRhdGUgdGhlIGNsYWltIG5hbWVcbiAgICBpZiAoZmlsZU5hbWUgIT09IHRoaXMucHJvcHMuZmlsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldENsYWltTmFtZShmaWxlTmFtZSk7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBjbGFpbSBoYXMgdXBkYXRlZCwgY2hlY2sgaXRzIGF2YWlsYWJpbGl0eVxuICAgIGlmIChjbGFpbSAhPT0gdGhpcy5wcm9wcy5jbGFpbSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNsYWltKGNsYWltKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlSW5wdXQgKGV2ZW50KSB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHZhbHVlID0gdGhpcy5jbGVhbnNlSW5wdXQodmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICB0aGlzLnByb3BzLm9uQ2xhaW1DaGFuZ2UodmFsdWUpO1xuICB9XG4gIGNsZWFuc2VJbnB1dCAoaW5wdXQpIHtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xccysvZywgJy0nKTsgLy8gcmVwbGFjZSBzcGFjZXMgd2l0aCBkYXNoZXNcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05LV0vZywgJycpOyAgLy8gcmVtb3ZlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBBLVosIGEteiwgMC05LCBvciAnLSdcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgc2V0Q2xhaW1OYW1lIChmaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVOYW1lV2l0aG91dEVuZGluZyA9IGZpbGVOYW1lLnN1YnN0cmluZygwLCBmaWxlTmFtZS5sYXN0SW5kZXhPZignLicpKTtcbiAgICBjb25zdCBjbGVhbkNsYWltTmFtZSA9IHRoaXMuY2xlYW5zZUlucHV0KGZpbGVOYW1lV2l0aG91dEVuZGluZyk7XG4gICAgdGhpcy5wcm9wcy5vbkNsYWltQ2hhbmdlKGNsZWFuQ2xhaW1OYW1lKTtcbiAgfVxuICB2YWxpZGF0ZUNsYWltIChjbGFpbSkge1xuICAgIGlmICghY2xhaW0pIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uVXJsRXJyb3IoJ0VudGVyIGEgdXJsIGFib3ZlJyk7XG4gICAgfVxuICAgIHJlcXVlc3QoYC9hcGkvY2xhaW0vYXZhaWxhYmlsaXR5LyR7Y2xhaW19YClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVybEVycm9yKG51bGwpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVybEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNsYWltLCBsb2dnZWRJbkNoYW5uZWxOYW1lLCBsb2dnZWRJbkNoYW5uZWxTaG9ydElkLCBwdWJsaXNoSW5DaGFubmVsLCBzZWxlY3RlZENoYW5uZWwsIHVybEVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMTAgY29sdW1uLS1zbWwtMTAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtdGV4dC0tcHJpbWFyeSBzcGFuLS1yZWxhdGl2ZSc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd1cmwtdGV4dC0tc2Vjb25kYXJ5Jz5zcGVlLmNoIC8gPC9zcGFuPlxuICAgICAgICAgIDxVcmxNaWRkbGVcbiAgICAgICAgICAgIHB1Ymxpc2hJbkNoYW5uZWw9e3B1Ymxpc2hJbkNoYW5uZWx9XG4gICAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICAgIGxvZ2dlZEluQ2hhbm5lbE5hbWU9e2xvZ2dlZEluQ2hhbm5lbE5hbWV9XG4gICAgICAgICAgICBsb2dnZWRJbkNoYW5uZWxTaG9ydElkPXtsb2dnZWRJbkNoYW5uZWxTaG9ydElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjbGFpbS1uYW1lLWlucHV0JyBjbGFzc05hbWU9J2lucHV0LXRleHQnIG5hbWU9J2NsYWltJyBwbGFjZWhvbGRlcj0neW91ci11cmwtaGVyZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9IHZhbHVlPXtjbGFpbX0gLz5cbiAgICAgICAgICB7IChjbGFpbSAmJiAhdXJsRXJyb3IpICYmIDxzcGFuIGlkPSdpbnB1dC1zdWNjZXNzLWNsYWltLW5hbWUnIGNsYXNzTmFtZT0naW5mby1tZXNzYWdlLS1zdWNjZXNzIHNwYW4tLWFic29sdXRlJz57J1xcdTI3MTMnfTwvc3Bhbj4gfVxuICAgICAgICAgIHsgdXJsRXJyb3IgJiYgPHNwYW4gaWQ9J2lucHV0LXN1Y2Nlc3MtY2hhbm5lbC1uYW1lJyBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSBzcGFuLS1hYnNvbHV0ZSc+eydcXHUyNzE2J308L3NwYW4+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgeyB1cmxFcnJvciA/IChcbiAgICAgICAgICAgIDxwIGlkPSdpbnB1dC1lcnJvci1jbGFpbS1uYW1lJyBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSc+e3VybEVycm9yfTwvcD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPkNob29zZSBhIGN1c3RvbSB1cmw8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hVcmxJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hVcmxJbnB1dC92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSSkge1xuICAvLyBjb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXG4gIGxldCBieXRlU3RyaW5nID0gYXRvYihkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xuICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XG4gIGxldCBtaW1lU3RyaW5nID0gZGF0YVVSSS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcbiAgLy8gd3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYSB0eXBlZCBhcnJheVxuICBsZXQgaWEgPSBuZXcgVWludDhBcnJheShieXRlU3RyaW5nLmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGlhW2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBuZXcgQmxvYihbaWFdLCB7dHlwZTogbWltZVN0cmluZ30pO1xufVxuXG5jbGFzcyBQdWJsaXNoVGh1bWJuYWlsSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZGVvU291cmNlICAgOiBudWxsLFxuICAgICAgZXJyb3IgICAgICAgICA6IG51bGwsXG4gICAgICBzbGlkZXJNaW5SYW5nZTogMSxcbiAgICAgIHNsaWRlck1heFJhbmdlOiBudWxsLFxuICAgICAgc2xpZGVyVmFsdWUgICA6IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVZpZGVvTG9hZGVkRGF0YSA9IHRoaXMuaGFuZGxlVmlkZW9Mb2FkZWREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlVGh1bWJuYWlsID0gdGhpcy5jcmVhdGVUaHVtYm5haWwuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgeyBmaWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0VmlkZW9Tb3VyY2UoZmlsZSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgLy8gaWYgZmlsZSBjaGFuZ2VzXG4gICAgaWYgKG5leHRQcm9wcy5maWxlICYmIG5leHRQcm9wcy5maWxlICE9PSB0aGlzLnByb3BzLmZpbGUpIHtcbiAgICAgIGNvbnN0IHsgZmlsZSB9ID0gbmV4dFByb3BzO1xuICAgICAgdGhpcy5zZXRWaWRlb1NvdXJjZShmaWxlKTtcbiAgICB9O1xuICB9XG4gIHNldFZpZGVvU291cmNlIChmaWxlKSB7XG4gICAgY29uc3QgcHJldmlld1JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcHJldmlld1JlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIHByZXZpZXdSZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YVVyaSA9IHByZXZpZXdSZWFkZXIucmVzdWx0O1xuICAgICAgY29uc3QgYmxvYiA9IGRhdGFVUkl0b0Jsb2IoZGF0YVVyaSk7XG4gICAgICBjb25zdCB2aWRlb1NvdXJjZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlkZW9Tb3VyY2UgfSk7XG4gICAgfTtcbiAgfVxuICBoYW5kbGVWaWRlb0xvYWRlZERhdGEgKGV2ZW50KSB7XG4gICAgY29uc3QgZHVyYXRpb24gPSBldmVudC50YXJnZXQuZHVyYXRpb247XG4gICAgY29uc3QgdG90YWxNaW51dGVzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIDYwKTtcbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApO1xuICAgIC8vIHNldCB0aGUgc2xpZGVyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXJNYXhSYW5nZTogZHVyYXRpb24gKiAxMDAsXG4gICAgICBzbGlkZXJWYWx1ZSAgIDogZHVyYXRpb24gKiAxMDAgLyAyLFxuICAgICAgdG90YWxNaW51dGVzLFxuICAgICAgdG90YWxTZWNvbmRzLFxuICAgIH0pO1xuICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCB0aW1lIG9mIHRoZSB2aWRlb1xuICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlby10aHVtYi1wbGF5ZXInKTtcbiAgICB2aWRlby5jdXJyZW50VGltZSA9IGR1cmF0aW9uIC8gMjtcbiAgfVxuICBoYW5kbGVTbGlkZXJDaGFuZ2UgKGV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIC8vIHVwZGF0ZSB0aGUgc2xpZGVyIHZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXJWYWx1ZTogdmFsdWUsXG4gICAgfSk7XG4gICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHRpbWUgb2YgdGhlIHZpZGVvXG4gICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXRodW1iLXBsYXllcicpO1xuICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmFsdWUgLyAxMDA7XG4gIH1cbiAgY3JlYXRlVGh1bWJuYWlsICgpIHtcbiAgICAvLyB0YWtlIGEgc25hcHNob3RcbiAgICBsZXQgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8tdGh1bWItcGxheWVyJyk7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IHZpZGVvLnZpZGVvSGVpZ2h0O1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh2aWRlbywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjb25zdCBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGNvbnN0IGJsb2IgPSBkYXRhVVJJdG9CbG9iKGRhdGFVcmwpO1xuICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IEZpbGUoW2Jsb2JdLCBgdGh1bWJuYWlsLnBuZ2AsIHtcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIH0pO1xuICAgIC8vIHNldCB0aGUgdGh1bWJuYWlsIGluIHJlZHV4IHN0b3JlXG4gICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTmV3VGh1bWJuYWlsKHNuYXBzaG90KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGVycm9yLCB2aWRlb1NvdXJjZSwgc2xpZGVyTWluUmFuZ2UsIHNsaWRlck1heFJhbmdlLCBzbGlkZXJWYWx1ZSwgdG90YWxNaW51dGVzLCB0b3RhbFNlY29uZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5UaHVtYm5haWw6PC9sYWJlbD5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgaWQ9J3ZpZGVvLXRodW1iLXBsYXllcidcbiAgICAgICAgICBwcmVsb2FkPSdtZXRhZGF0YSdcbiAgICAgICAgICBtdXRlZFxuICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX1cbiAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgIG9uTG9hZGVkRGF0YT17dGhpcy5oYW5kbGVWaWRlb0xvYWRlZERhdGF9XG4gICAgICAgICAgc3JjPXt2aWRlb1NvdXJjZX1cbiAgICAgICAgICBvblNlZWtlZD17dGhpcy5jcmVhdGVUaHVtYm5haWx9XG4gICAgICAgIC8+XG4gICAgICAgIHtcbiAgICAgICAgICBzbGlkZXJWYWx1ZSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWNvbnRhaW5lci0tcm93IGZsZXgtY29udGFpbmVyLS1zcGFjZS1iZXR3ZWVuLWNlbnRlcicgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnPjAnMDBcIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2luZm8tbWVzc2FnZSc+e3RvdGFsTWludXRlc30ne3RvdGFsU2Vjb25kc31cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPSdyYW5nZSdcbiAgICAgICAgICAgICAgICAgIG1pbj17c2xpZGVyTWluUmFuZ2V9XG4gICAgICAgICAgICAgICAgICBtYXg9e3NsaWRlck1heFJhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGlkZXInXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLW1lc3NhZ2UnID5sb2FkaW5nLi4uIDwvcD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgeyBlcnJvciA/IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZS0tZmFpbHVyZSc+e2Vycm9yfTwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2luZm8tbWVzc2FnZSc+VXNlIHNsaWRlciB0byBzZXQgdGh1bWJuYWlsPC9wPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoVGh1bWJuYWlsSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoVGh1bWJuYWlsSW5wdXQvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV4cGFuZGluZ1RleHRBcmVhIGZyb20gJ2NvbXBvbmVudHMvRXhwYW5kaW5nVGV4dEFyZWEnO1xuXG5jbGFzcyBQdWJsaXNoTWV0YWRhdGFJbnB1dHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50b2dnbGVTaG93SW5wdXRzID0gdGhpcy50b2dnbGVTaG93SW5wdXRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCA9IHRoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdCA9IHRoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcyk7XG4gIH1cbiAgdG9nZ2xlU2hvd0lucHV0cyAoKSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZU1ldGFkYXRhSW5wdXRzKCF0aGlzLnByb3BzLnNob3dNZXRhZGF0YUlucHV0cyk7XG4gIH1cbiAgaGFuZGxlSW5wdXQgKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5wcm9wcy5vbk1ldGFkYXRhQ2hhbmdlKG5hbWUsIHZhbHVlKTtcbiAgfVxuICBoYW5kbGVTZWxlY3QgKGV2ZW50KSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9uc1swXS52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uTWV0YWRhdGFDaGFuZ2UobmFtZSwgc2VsZWN0ZWRPcHRpb24pO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J3B1Ymxpc2gtZGV0YWlscycgY2xhc3NOYW1lPSdyb3cgcm93LS1wYWRkZWQgcm93LS1uby10b3Agcm93LS13aWRlJz5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd01ldGFkYXRhSW5wdXRzICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tbWVkLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHVibGlzaC1saWNlbnNlJyBjbGFzc05hbWU9J2xhYmVsJz5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tNyBjb2x1bW4tLXNtbC0xMCc+XG4gICAgICAgICAgICAgICAgPEV4cGFuZGluZ1RleHRBcmVhXG4gICAgICAgICAgICAgICAgICBpZD0ncHVibGlzaC1kZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dGFyZWEgdGV4dGFyZWEtLXByaW1hcnkgdGV4dGFyZWEtLWZ1bGwtd2lkdGgnXG4gICAgICAgICAgICAgICAgICByb3dzPXsxfVxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsyMDAwfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiAyMDAgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J09wdGlvbmFsIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLW5vLXRvcCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0zIGNvbHVtbi0tbWVkLTEwJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncHVibGlzaC1saWNlbnNlJyBjbGFzc05hbWU9J2xhYmVsJz5MaWNlbnNlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03IGNvbHVtbi0tc21sLTEwJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHR5cGU9J3RleHQnIG5hbWU9J2xpY2Vuc2UnIGlkPSdwdWJsaXNoLWxpY2Vuc2UnIGNsYXNzTmFtZT0nc2VsZWN0IHNlbGVjdC0tcHJpbWFyeScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JyAnPlVuc3BlY2lmaWVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdQdWJsaWMgRG9tYWluJz5QdWJsaWMgRG9tYWluPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdDcmVhdGl2ZSBDb21tb25zJz5DcmVhdGl2ZSBDb21tb25zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS1uby10b3AnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3B1Ymxpc2gtbnNmdycgY2xhc3NOYW1lPSdsYWJlbCc+TWF0dXJlOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS03Jz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dC1jaGVja2JveCcgdHlwZT0nY2hlY2tib3gnIGlkPSdwdWJsaXNoLW5zZncnIG5hbWU9J25zZncnIHZhbHVlPXt0aGlzLnByb3BzLm5zZnd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLS1zZWNvbmRhcnknIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2hvd0lucHV0c30+e3RoaXMucHJvcHMuc2hvd01ldGFkYXRhSW5wdXRzID8gJ2xlc3MnIDogJ21vcmUnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoTWV0YWRhdGFJbnB1dHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoTWV0YWRhdGFJbnB1dHMvdmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQdWJsaXNoRGlzYWJsZWRNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnByb3BzLm1lc3NhZ2U6JywgbWVzc2FnZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgZHJvcHpvbmUtLWRpc2FibGVkIHJvdy0tdGFsbCBmbGV4LWNvbnRhaW5lci0tY29sdW1uIGZsZXgtY29udGFpbmVyLS1jZW50ZXItY2VudGVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LS1kaXNhYmxlZCc+UHVibGlzaGluZyBpcyBjdXJyZW50bHkgZGlzYWJsZWQuPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtLWRpc2FibGVkJz57bWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hEaXNhYmxlZE1lc3NhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL3ZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdjb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCAqIGFzIHB1Ymxpc2hTdGF0ZXMgZnJvbSAnY29uc3RhbnRzL3B1Ymxpc2hfY2xhaW1fc3RhdGVzJztcblxuY2xhc3MgUHVibGlzaFN0YXR1cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIG1lc3NhZ2UsIGNsZWFyRmlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlcic+XG4gICAgICAgIHtzdGF0dXMgPT09IHB1Ymxpc2hTdGF0ZXMuTE9BRF9TVEFSVCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGFsaWduLWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICA8cD5GaWxlIGlzIGxvYWRpbmcgdG8gc2VydmVyPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZSc+MCU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtzdGF0dXMgPT09IHB1Ymxpc2hTdGF0ZXMuTE9BRElORyAmJlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24tY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgPHA+RmlsZSBpcyBsb2FkaW5nIHRvIHNlcnZlcjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmx1ZSc+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7c3RhdHVzID09PSBwdWJsaXNoU3RhdGVzLlBVQkxJU0hJTkcgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+VXBsb2FkIGNvbXBsZXRlLiAgWW91ciBmaWxlIGlzIG5vdyBiZWluZyBwdWJsaXNoZWQgb24gdGhlIGJsb2NrY2hhaW4uLi48L3A+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNpemU9ezEyfSAvPlxuICAgICAgICAgIDxwPkN1cmlvdXMgd2hhdCBtYWdpYyBpcyBoYXBwZW5pbmcgaGVyZT8gPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyB0YXJnZXQ9J2JsYW5rJyBocmVmPSdodHRwczovL2xicnkuaW8vZmFxL3doYXQtaXMtbGJyeSc+TGVhcm4gbW9yZS48L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7c3RhdHVzID09PSBwdWJsaXNoU3RhdGVzLlNVQ0NFU1MgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+WW91ciBwdWJsaXNoIGlzIGNvbXBsZXRlISBZb3UgYXJlIGJlaW5nIHJlZGlyZWN0ZWQgdG8gaXQgbm93LjwvcD5cbiAgICAgICAgICA8cD5JZiB5b3UgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQsIDxhIGNsYXNzTmFtZT0nbGluay0tcHJpbWFyeScgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e21lc3NhZ2V9PmNsaWNrIGhlcmUuPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3N0YXR1cyA9PT0gcHVibGlzaFN0YXRlcy5GQUlMRUQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPHA+U29tZXRoaW5nIHdlbnQgd3JvbmcuLi48L3A+XG4gICAgICAgICAgPHA+PHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgPHA+Rm9yIGhlbHAsIHBvc3QgdGhlIGFib3ZlIGVycm9yIHRleHQgaW4gdGhlICNzcGVlY2ggY2hhbm5lbCBvbiB0aGUgPGEgY2xhc3NOYW1lPSdsaW5rLS1wcmltYXJ5JyBocmVmPSdodHRwczovL2Rpc2NvcmQuZ2cvWWpZYndoUycgdGFyZ2V0PSdfYmxhbmsnPmxicnkgZGlzY29yZDwvYT48L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi0tc2Vjb25kYXJ5JyBvbkNsaWNrPXtjbGVhckZpbGV9PlJlc2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoU3RhdHVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvUHVibGlzaFN0YXR1cy92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnY29udGFpbmVycy9Ecm9wem9uZSc7XG5pbXBvcnQgUHVibGlzaERldGFpbHMgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoRGV0YWlscyc7XG5pbXBvcnQgUHVibGlzaFN0YXR1cyBmcm9tICdjb250YWluZXJzL1B1Ymxpc2hTdGF0dXMnO1xuaW1wb3J0IFB1Ymxpc2hEaXNhYmxlZE1lc3NhZ2UgZnJvbSAnY29udGFpbmVycy9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlJztcblxuY2xhc3MgUHVibGlzaFRvb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygncHVibGlzaCBpcyBkaXNhYmxlZCcpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFB1Ymxpc2hEaXNhYmxlZE1lc3NhZ2UgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwdWJsaXNoIGlzIG5vdCBkaXNhYmxlZCcpO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmlsZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGF0dXMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFB1Ymxpc2hTdGF0dXMgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiA8UHVibGlzaERldGFpbHMgLz47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiA8RHJvcHpvbmUgLz47XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoVG9vbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1B1Ymxpc2hUb29sL3ZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9TRU8nO1xuaW1wb3J0IE5hdkJhciBmcm9tICdjb250YWluZXJzL05hdkJhcic7XG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ3BhZ2VzL0Vycm9yUGFnZSc7XG5pbXBvcnQgQXNzZXRUaXRsZSBmcm9tICdjb250YWluZXJzL0Fzc2V0VGl0bGUnO1xuaW1wb3J0IEFzc2V0RGlzcGxheSBmcm9tICdjb250YWluZXJzL0Fzc2V0RGlzcGxheSc7XG5pbXBvcnQgQXNzZXRJbmZvIGZyb20gJ2NvbnRhaW5lcnMvQXNzZXRJbmZvJztcblxuY2xhc3MgU2hvd0Fzc2V0RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBhc3NldCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoYXNzZXQpIHtcbiAgICAgIGNvbnN0IHsgY2xhaW1EYXRhOiB7IG5hbWUgfSB9ID0gYXNzZXQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTRU8gcGFnZVRpdGxlPXtgJHtuYW1lfSAtIGRldGFpbHNgfSBhc3NldD17YXNzZXR9IC8+XG4gICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS10YWxsIHJvdy0tcGFkZGVkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xMCc+XG4gICAgICAgICAgICAgIDxBc3NldFRpdGxlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS01IGNvbHVtbi0tc21sLTEwIGFsaWduLWNvbnRlbnQtdG9wJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXBhZGRlZCBzaG93LWRldGFpbHMtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8QXNzZXREaXNwbGF5IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9J2NvbHVtbiBjb2x1bW4tLTUgY29sdW1uLS1zbWwtMTAgYWxpZ24tY29udGVudC10b3AnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkJz5cbiAgICAgICAgICAgICAgICA8QXNzZXRJbmZvIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JQYWdlIGVycm9yPXsnbG9hZGluZyBhc3NldCBkYXRhLi4uJ30gLz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93QXNzZXREZXRhaWxzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0RGV0YWlscy92aWV3LmpzeCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaXRlIH0pID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0RGVzY3JpcHRpb24sIGRlZmF1bHRUaHVtYm5haWwsIGRlc2NyaXB0aW9uOiBzaXRlRGVzY3JpcHRpb24sIGhvc3Q6IHNpdGVIb3N0LCB0aXRsZTogc2l0ZVRpdGxlLCB0d2l0dGVyOiBzaXRlVHdpdHRlciB9ID0gc2l0ZTtcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0RGVzY3JpcHRpb24sXG4gICAgZGVmYXVsdFRodW1ibmFpbCxcbiAgICBzaXRlRGVzY3JpcHRpb24sXG4gICAgc2l0ZUhvc3QsXG4gICAgc2l0ZVRpdGxlLFxuICAgIHNpdGVUd2l0dGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU0VPL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9TRU8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFzc2V0RGlzcGxheSBmcm9tICdjb250YWluZXJzL0Fzc2V0RGlzcGxheSc7XG5cbmNsYXNzIFNob3dMaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGFzc2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChhc3NldCkge1xuICAgICAgY29uc3QgeyBuYW1lLCBjbGFpbUlkIH0gPSBhc3NldC5jbGFpbURhdGE7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tdGFsbCBmbGV4LWNvbnRhaW5lci0tY29sdW1uIGZsZXgtY29udGFpbmVyLS1jZW50ZXItY2VudGVyIHNob3ctbGl0ZS1jb250YWluZXInPlxuICAgICAgICAgIDxTRU8gcGFnZVRpdGxlPXtuYW1lfSBhc3NldD17YXNzZXR9IC8+XG4gICAgICAgICAgPEFzc2V0RGlzcGxheSAvPlxuICAgICAgICAgIDxMaW5rIGlkPSdhc3NldC1ib2lsZXJwYXRlJyBjbGFzc05hbWU9J2xpbmstLXByaW1hcnkgZmluZS1wcmludCcgdG89e2AvJHtjbGFpbUlkfS8ke25hbWV9YH0+aG9zdGVkXG4gICAgICAgICAgICB2aWEgU3BlZS5jaDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctLXRhbGwgcm93LS1wYWRkZWQgZmxleC1jb250YWluZXItLWNvbHVtbiBmbGV4LWNvbnRhaW5lci0tY2VudGVyLWNlbnRlcic+XG4gICAgICAgIDxwPmxvYWRpbmcgYXNzZXQgZGF0YS4uLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dMaXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMvU2hvd0Fzc2V0TGl0ZS92aWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvU0VPJztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAncGFnZXMvRXJyb3JQYWdlJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnY29udGFpbmVycy9OYXZCYXInO1xuaW1wb3J0IENoYW5uZWxDbGFpbXNEaXNwbGF5IGZyb20gJ2NvbnRhaW5lcnMvQ2hhbm5lbENsYWltc0Rpc3BsYXknO1xuXG5jbGFzcyBTaG93Q2hhbm5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjaGFubmVsKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGxvbmdJZCwgc2hvcnRJZCB9ID0gY2hhbm5lbDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNFTyBwYWdlVGl0bGU9e25hbWV9IGNoYW5uZWw9e2NoYW5uZWx9IC8+XG4gICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LS10YWxsIHJvdy0tcGFkZGVkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gY29sdW1uLS0xMCc+XG4gICAgICAgICAgICAgIDxoMj5jaGFubmVsIG5hbWU6IHtuYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2ZpbmUtcHJpbnQnfT5mdWxsIGNoYW5uZWwgaWQ6IHtsb25nSWR9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eydmaW5lLXByaW50J30+c2hvcnQgY2hhbm5lbCBpZDoge3Nob3J0SWR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIGNvbHVtbi0tMTAnPlxuICAgICAgICAgICAgICA8Q2hhbm5lbENsYWltc0Rpc3BsYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yUGFnZSBlcnJvcj17J2xvYWRpbmcgY2hhbm5lbCBkYXRhLi4uJ30gLz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2hhbm5lbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb250YWluZXJzL1Nob3dDaGFubmVsL3ZpZXcuanN4IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xudmFyIHNwbGl0UGF0aCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn07XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKSxcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXG4gICAgICBkaXIgPSByZXN1bHRbMV07XG5cbiAgaWYgKCFyb290ICYmICFkaXIpIHtcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICByZXR1cm4gJy4nO1xuICB9XG5cbiAgaWYgKGRpcikge1xuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gcm9vdCArIGRpcjtcbn07XG5cblxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBzcGxpdFBhdGgocGF0aClbM107XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnY29uc3RhbnRzL3Nob3dfYWN0aW9uX3R5cGVzJztcblxuaW1wb3J0IHsgQ0hBTk5FTCwgQVNTRVRfTElURSwgQVNTRVRfREVUQUlMUyB9IGZyb20gJ2NvbnN0YW50cy9zaG93X3JlcXVlc3RfdHlwZXMnO1xuXG4vLyBiYXNpYyByZXF1ZXN0IHBhcnNpbmdcbmV4cG9ydCBmdW5jdGlvbiBvbkhhbmRsZVNob3dQYWdlVXJpIChwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkhBTkRMRV9TSE9XX1VSSSxcbiAgICBkYXRhOiBwYXJhbXMsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXF1ZXN0RXJyb3IgKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5SRVFVRVNUX0VSUk9SLFxuICAgIGRhdGE6IGVycm9yLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmV3Q2hhbm5lbFJlcXVlc3QgKGNoYW5uZWxOYW1lLCBjaGFubmVsSWQpIHtcbiAgY29uc3QgcmVxdWVzdFR5cGUgPSBDSEFOTkVMO1xuICBjb25zdCByZXF1ZXN0SWQgPSBgY3IjJHtjaGFubmVsTmFtZX0jJHtjaGFubmVsSWR9YDtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5ORUxfUkVRVUVTVF9ORVcsXG4gICAgZGF0YTogeyByZXF1ZXN0VHlwZSwgcmVxdWVzdElkLCBjaGFubmVsTmFtZSwgY2hhbm5lbElkIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb25OZXdBc3NldFJlcXVlc3QgKG5hbWUsIGlkLCBjaGFubmVsTmFtZSwgY2hhbm5lbElkLCBleHRlbnNpb24pIHtcbiAgY29uc3QgcmVxdWVzdFR5cGUgPSBleHRlbnNpb24gPyBBU1NFVF9MSVRFIDogQVNTRVRfREVUQUlMUztcbiAgY29uc3QgcmVxdWVzdElkID0gYGFyIyR7bmFtZX0jJHtpZH0jJHtjaGFubmVsTmFtZX0jJHtjaGFubmVsSWR9YDtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkFTU0VUX1JFUVVFU1RfTkVXLFxuICAgIGRhdGE6IHtcbiAgICAgIHJlcXVlc3RUeXBlLFxuICAgICAgcmVxdWVzdElkLFxuICAgICAgbmFtZSxcbiAgICAgIG1vZGlmaWVyOiB7XG4gICAgICAgIGlkLFxuICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgbmFtZTogY2hhbm5lbE5hbWUsXG4gICAgICAgICAgaWQgIDogY2hhbm5lbElkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVxdWVzdFVwZGF0ZSAocmVxdWVzdFR5cGUsIHJlcXVlc3RJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuUkVRVUVTVF9VUERBVEUsXG4gICAgZGF0YToge1xuICAgICAgcmVxdWVzdFR5cGUsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZXF1ZXN0VG9SZXF1ZXN0TGlzdCAoaWQsIGVycm9yLCBrZXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLlJFUVVFU1RfTElTVF9BREQsXG4gICAgZGF0YTogeyBpZCwgZXJyb3IsIGtleSB9LFxuICB9O1xufTtcblxuLy8gYXNzZXQgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXNzZXRUb0Fzc2V0TGlzdCAoaWQsIGVycm9yLCBuYW1lLCBjbGFpbUlkLCBzaG9ydElkLCBjbGFpbURhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkFTU0VUX0FERCxcbiAgICBkYXRhOiB7IGlkLCBlcnJvciwgbmFtZSwgY2xhaW1JZCwgc2hvcnRJZCwgY2xhaW1EYXRhIH0sXG4gIH07XG59XG5cbi8vIGNoYW5uZWwgYWN0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3Q2hhbm5lbFRvQ2hhbm5lbExpc3QgKGlkLCBuYW1lLCBzaG9ydElkLCBsb25nSWQsIGNsYWltc0RhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5ORUxfQURELFxuICAgIGRhdGE6IHsgaWQsIG5hbWUsIHNob3J0SWQsIGxvbmdJZCwgY2xhaW1zRGF0YSB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uVXBkYXRlQ2hhbm5lbENsYWltcyAoY2hhbm5lbEtleSwgbmFtZSwgbG9uZ0lkLCBwYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOTkVMX0NMQUlNU19VUERBVEVfQVNZTkMsXG4gICAgZGF0YToge2NoYW5uZWxLZXksIG5hbWUsIGxvbmdJZCwgcGFnZX0sXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hhbm5lbENsYWltcyAoY2hhbm5lbExpc3RJZCwgY2xhaW1zRGF0YSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX1NVQ0NFU1MsXG4gICAgZGF0YToge2NoYW5uZWxMaXN0SWQsIGNsYWltc0RhdGF9LFxuICB9O1xufTtcblxuLy8gZGlzcGxheSBhIGZpbGVcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVSZXF1ZXN0ZWQgKG5hbWUsIGNsYWltSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkZJTEVfUkVRVUVTVEVELFxuICAgIGRhdGE6IHsgbmFtZSwgY2xhaW1JZCB9LFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZpbGVBdmFpbGFiaWxpdHkgKHN0YXR1cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuRklMRV9BVkFJTEFCSUxJVFlfVVBEQVRFLFxuICAgIGRhdGE6IHN0YXR1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5QXNzZXRFcnJvciAoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBhY3Rpb25zLkRJU1BMQVlfQVNTRVRfRVJST1IsXG4gICAgZGF0YTogZXJyb3IsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvc2hvdy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5hdkJhciBmcm9tICdjb250YWluZXJzL05hdkJhcic7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0tcGFkZGVkJz5cbiAgICAgICAgICA8cD57ZXJyb3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcGFnZXMvRXJyb3JQYWdlL2luZGV4LmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2hhdHdnLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2hhdHdnLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IHsgbHN0YXRTeW5jLCByZWFkZGlyU3luYyB9ID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHsgam9pbiB9ID0gcmVxdWlyZSgncGF0aCcpO1xuXG5leHBvcnQgY29uc3QgZ2V0U3ViRGlyZWN0b3J5TmFtZXMgPSAocm9vdCkgPT4ge1xuICByZXR1cm4gcmVhZGRpclN5bmMocm9vdClcbiAgICAuZmlsdGVyKG5hbWUgPT4ge1xuICAgICAgY29uc3QgZnVsbFBhdGggPSBqb2luKHJvb3QsIG5hbWUpO1xuICAgICAgcmV0dXJuIGxzdGF0U3luYyhmdWxsUGF0aCkuaXNEaXJlY3RvcnkoKTtcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9idWlsZC9nZXRGb2xkZXJOYW1lcy5qcyIsInZhciBtYXAgPSB7XG5cdFwiLi9cIjogMjEsXG5cdFwiLi9Bc3NldERpc3BsYXlcIjogNCxcblx0XCIuL0Fzc2V0RGlzcGxheS9cIjogNCxcblx0XCIuL0Fzc2V0RGlzcGxheS9pbmRleFwiOiA0LFxuXHRcIi4vQXNzZXREaXNwbGF5L2luZGV4LmpzXCI6IDQsXG5cdFwiLi9Bc3NldERpc3BsYXkvdmlld1wiOiAyNyxcblx0XCIuL0Fzc2V0RGlzcGxheS92aWV3LmpzeFwiOiAyNyxcblx0XCIuL0Fzc2V0SW5mb1wiOiA4LFxuXHRcIi4vQXNzZXRJbmZvL1wiOiA4LFxuXHRcIi4vQXNzZXRJbmZvL2luZGV4XCI6IDgsXG5cdFwiLi9Bc3NldEluZm8vaW5kZXguanNcIjogOCxcblx0XCIuL0Fzc2V0SW5mby92aWV3XCI6IDMwLFxuXHRcIi4vQXNzZXRJbmZvL3ZpZXcuanN4XCI6IDMwLFxuXHRcIi4vQXNzZXRUaXRsZVwiOiA5LFxuXHRcIi4vQXNzZXRUaXRsZS9cIjogOSxcblx0XCIuL0Fzc2V0VGl0bGUvaW5kZXhcIjogOSxcblx0XCIuL0Fzc2V0VGl0bGUvaW5kZXguanNcIjogOSxcblx0XCIuL0Fzc2V0VGl0bGUvdmlld1wiOiAzMSxcblx0XCIuL0Fzc2V0VGl0bGUvdmlldy5qc3hcIjogMzEsXG5cdFwiLi9DaGFubmVsQ2xhaW1zRGlzcGxheVwiOiAxMCxcblx0XCIuL0NoYW5uZWxDbGFpbXNEaXNwbGF5L1wiOiAxMCxcblx0XCIuL0NoYW5uZWxDbGFpbXNEaXNwbGF5L2luZGV4XCI6IDEwLFxuXHRcIi4vQ2hhbm5lbENsYWltc0Rpc3BsYXkvaW5kZXguanNcIjogMTAsXG5cdFwiLi9DaGFubmVsQ2xhaW1zRGlzcGxheS92aWV3XCI6IDMyLFxuXHRcIi4vQ2hhbm5lbENsYWltc0Rpc3BsYXkvdmlldy5qc3hcIjogMzIsXG5cdFwiLi9DaGFubmVsQ3JlYXRlRm9ybVwiOiAxMSxcblx0XCIuL0NoYW5uZWxDcmVhdGVGb3JtL1wiOiAxMSxcblx0XCIuL0NoYW5uZWxDcmVhdGVGb3JtL2luZGV4XCI6IDExLFxuXHRcIi4vQ2hhbm5lbENyZWF0ZUZvcm0vaW5kZXguanNcIjogMTEsXG5cdFwiLi9DaGFubmVsQ3JlYXRlRm9ybS92aWV3XCI6IDM0LFxuXHRcIi4vQ2hhbm5lbENyZWF0ZUZvcm0vdmlldy5qc3hcIjogMzQsXG5cdFwiLi9DaGFubmVsTG9naW5Gb3JtXCI6IDEyLFxuXHRcIi4vQ2hhbm5lbExvZ2luRm9ybS9cIjogMTIsXG5cdFwiLi9DaGFubmVsTG9naW5Gb3JtL2luZGV4XCI6IDEyLFxuXHRcIi4vQ2hhbm5lbExvZ2luRm9ybS9pbmRleC5qc1wiOiAxMixcblx0XCIuL0NoYW5uZWxMb2dpbkZvcm0vdmlld1wiOiAzNSxcblx0XCIuL0NoYW5uZWxMb2dpbkZvcm0vdmlldy5qc3hcIjogMzUsXG5cdFwiLi9DaGFubmVsU2VsZWN0XCI6IDEzLFxuXHRcIi4vQ2hhbm5lbFNlbGVjdC9cIjogMTMsXG5cdFwiLi9DaGFubmVsU2VsZWN0L2luZGV4XCI6IDEzLFxuXHRcIi4vQ2hhbm5lbFNlbGVjdC9pbmRleC5qc1wiOiAxMyxcblx0XCIuL0NoYW5uZWxTZWxlY3Qvdmlld1wiOiAzNixcblx0XCIuL0NoYW5uZWxTZWxlY3Qvdmlldy5qc3hcIjogMzYsXG5cdFwiLi9Ecm9wem9uZVwiOiA3LFxuXHRcIi4vRHJvcHpvbmUvXCI6IDcsXG5cdFwiLi9Ecm9wem9uZS9pbmRleFwiOiA3LFxuXHRcIi4vRHJvcHpvbmUvaW5kZXguanNcIjogNyxcblx0XCIuL0Ryb3B6b25lL3ZpZXdcIjogMzcsXG5cdFwiLi9Ecm9wem9uZS92aWV3LmpzeFwiOiAzNyxcblx0XCIuL05hdkJhclwiOiAzLFxuXHRcIi4vTmF2QmFyL1wiOiAzLFxuXHRcIi4vTmF2QmFyL2luZGV4XCI6IDMsXG5cdFwiLi9OYXZCYXIvaW5kZXguanNcIjogMyxcblx0XCIuL05hdkJhci92aWV3XCI6IDM4LFxuXHRcIi4vTmF2QmFyL3ZpZXcuanN4XCI6IDM4LFxuXHRcIi4vUHVibGlzaERldGFpbHNcIjogMTQsXG5cdFwiLi9QdWJsaXNoRGV0YWlscy9cIjogMTQsXG5cdFwiLi9QdWJsaXNoRGV0YWlscy9pbmRleFwiOiAxNCxcblx0XCIuL1B1Ymxpc2hEZXRhaWxzL2luZGV4LmpzXCI6IDE0LFxuXHRcIi4vUHVibGlzaERldGFpbHMvdmlld1wiOiAzOSxcblx0XCIuL1B1Ymxpc2hEZXRhaWxzL3ZpZXcuanN4XCI6IDM5LFxuXHRcIi4vUHVibGlzaERpc2FibGVkTWVzc2FnZVwiOiAxOSxcblx0XCIuL1B1Ymxpc2hEaXNhYmxlZE1lc3NhZ2UvXCI6IDE5LFxuXHRcIi4vUHVibGlzaERpc2FibGVkTWVzc2FnZS9pbmRleFwiOiAxOSxcblx0XCIuL1B1Ymxpc2hEaXNhYmxlZE1lc3NhZ2UvaW5kZXguanNcIjogMTksXG5cdFwiLi9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL3ZpZXdcIjogNDQsXG5cdFwiLi9QdWJsaXNoRGlzYWJsZWRNZXNzYWdlL3ZpZXcuanN4XCI6IDQ0LFxuXHRcIi4vUHVibGlzaE1ldGFkYXRhSW5wdXRzXCI6IDE4LFxuXHRcIi4vUHVibGlzaE1ldGFkYXRhSW5wdXRzL1wiOiAxOCxcblx0XCIuL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy9pbmRleFwiOiAxOCxcblx0XCIuL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy9pbmRleC5qc1wiOiAxOCxcblx0XCIuL1B1Ymxpc2hNZXRhZGF0YUlucHV0cy92aWV3XCI6IDQzLFxuXHRcIi4vUHVibGlzaE1ldGFkYXRhSW5wdXRzL3ZpZXcuanN4XCI6IDQzLFxuXHRcIi4vUHVibGlzaFN0YXR1c1wiOiAyMCxcblx0XCIuL1B1Ymxpc2hTdGF0dXMvXCI6IDIwLFxuXHRcIi4vUHVibGlzaFN0YXR1cy9pbmRleFwiOiAyMCxcblx0XCIuL1B1Ymxpc2hTdGF0dXMvaW5kZXguanNcIjogMjAsXG5cdFwiLi9QdWJsaXNoU3RhdHVzL3ZpZXdcIjogNDUsXG5cdFwiLi9QdWJsaXNoU3RhdHVzL3ZpZXcuanN4XCI6IDQ1LFxuXHRcIi4vUHVibGlzaFRodW1ibmFpbElucHV0XCI6IDE3LFxuXHRcIi4vUHVibGlzaFRodW1ibmFpbElucHV0L1wiOiAxNyxcblx0XCIuL1B1Ymxpc2hUaHVtYm5haWxJbnB1dC9pbmRleFwiOiAxNyxcblx0XCIuL1B1Ymxpc2hUaHVtYm5haWxJbnB1dC9pbmRleC5qc1wiOiAxNyxcblx0XCIuL1B1Ymxpc2hUaHVtYm5haWxJbnB1dC92aWV3XCI6IDQyLFxuXHRcIi4vUHVibGlzaFRodW1ibmFpbElucHV0L3ZpZXcuanN4XCI6IDQyLFxuXHRcIi4vUHVibGlzaFRpdGxlSW5wdXRcIjogMTUsXG5cdFwiLi9QdWJsaXNoVGl0bGVJbnB1dC9cIjogMTUsXG5cdFwiLi9QdWJsaXNoVGl0bGVJbnB1dC9pbmRleFwiOiAxNSxcblx0XCIuL1B1Ymxpc2hUaXRsZUlucHV0L2luZGV4LmpzXCI6IDE1LFxuXHRcIi4vUHVibGlzaFRpdGxlSW5wdXQvdmlld1wiOiA0MCxcblx0XCIuL1B1Ymxpc2hUaXRsZUlucHV0L3ZpZXcuanN4XCI6IDQwLFxuXHRcIi4vUHVibGlzaFRvb2xcIjogMjMsXG5cdFwiLi9QdWJsaXNoVG9vbC9cIjogMjMsXG5cdFwiLi9QdWJsaXNoVG9vbC9pbmRleFwiOiAyMyxcblx0XCIuL1B1Ymxpc2hUb29sL2luZGV4LmpzXCI6IDIzLFxuXHRcIi4vUHVibGlzaFRvb2wvdmlld1wiOiA0Nixcblx0XCIuL1B1Ymxpc2hUb29sL3ZpZXcuanN4XCI6IDQ2LFxuXHRcIi4vUHVibGlzaFVybElucHV0XCI6IDE2LFxuXHRcIi4vUHVibGlzaFVybElucHV0L1wiOiAxNixcblx0XCIuL1B1Ymxpc2hVcmxJbnB1dC9pbmRleFwiOiAxNixcblx0XCIuL1B1Ymxpc2hVcmxJbnB1dC9pbmRleC5qc1wiOiAxNixcblx0XCIuL1B1Ymxpc2hVcmxJbnB1dC92aWV3XCI6IDQxLFxuXHRcIi4vUHVibGlzaFVybElucHV0L3ZpZXcuanN4XCI6IDQxLFxuXHRcIi4vU2hvd0Fzc2V0RGV0YWlsc1wiOiAyNCxcblx0XCIuL1Nob3dBc3NldERldGFpbHMvXCI6IDI0LFxuXHRcIi4vU2hvd0Fzc2V0RGV0YWlscy9pbmRleFwiOiAyNCxcblx0XCIuL1Nob3dBc3NldERldGFpbHMvaW5kZXguanNcIjogMjQsXG5cdFwiLi9TaG93QXNzZXREZXRhaWxzL3ZpZXdcIjogNDcsXG5cdFwiLi9TaG93QXNzZXREZXRhaWxzL3ZpZXcuanN4XCI6IDQ3LFxuXHRcIi4vU2hvd0Fzc2V0TGl0ZVwiOiAyNSxcblx0XCIuL1Nob3dBc3NldExpdGUvXCI6IDI1LFxuXHRcIi4vU2hvd0Fzc2V0TGl0ZS9pbmRleFwiOiAyNSxcblx0XCIuL1Nob3dBc3NldExpdGUvaW5kZXguanNcIjogMjUsXG5cdFwiLi9TaG93QXNzZXRMaXRlL3ZpZXdcIjogNDksXG5cdFwiLi9TaG93QXNzZXRMaXRlL3ZpZXcuanN4XCI6IDQ5LFxuXHRcIi4vU2hvd0NoYW5uZWxcIjogMjYsXG5cdFwiLi9TaG93Q2hhbm5lbC9cIjogMjYsXG5cdFwiLi9TaG93Q2hhbm5lbC9pbmRleFwiOiAyNixcblx0XCIuL1Nob3dDaGFubmVsL2luZGV4LmpzXCI6IDI2LFxuXHRcIi4vU2hvd0NoYW5uZWwvdmlld1wiOiA1MCxcblx0XCIuL1Nob3dDaGFubmVsL3ZpZXcuanN4XCI6IDUwLFxuXHRcIi4vaW5kZXhcIjogMjEsXG5cdFwiLi9pbmRleC5qc1wiOiAyMVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDU5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2NvbnRhaW5lcnMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQWN0aXZlU3RhdHVzQmFyID0gKCkgPT4ge1xuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLS1hY3RpdmUnPnwgPC9zcGFuPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVN0YXR1c0JhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0FjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbmFjdGl2ZVN0YXR1c0JhciA9ICgpID0+IHtcbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT0ncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci0taW5hY3RpdmUnPnwgPC9zcGFuPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluYWN0aXZlU3RhdHVzQmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSW5hY3RpdmVTdGF0dXNCYXIvaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IExPQ0FMX0NIRUNLID0gJ0xPQ0FMX0NIRUNLJztcbmV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRSA9ICdVTkFWQUlMQUJMRSc7XG5leHBvcnQgY29uc3QgRVJST1IgPSAnRVJST1InO1xuZXhwb3J0IGNvbnN0IEFWQUlMQUJMRSA9ICdBVkFJTEFCTEUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9hc3NldF9kaXNwbGF5X3N0YXRlcy5qcyIsIi8vIHJlcXVlc3QgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IEhBTkRMRV9TSE9XX1VSSSA9ICdIQU5ETEVfU0hPV19VUkknO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfRVJST1IgPSAnUkVRVUVTVF9FUlJPUic7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEUgPSAnUkVRVUVTVF9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IEFTU0VUX1JFUVVFU1RfTkVXID0gJ0FTU0VUX1JFUVVFU1RfTkVXJztcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1JFUVVFU1RfTkVXID0gJ0NIQU5ORUxfUkVRVUVTVF9ORVcnO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfTElTVF9BREQgPSAnUkVRVUVTVF9MSVNUX0FERCc7XG5cbi8vIGFzc2V0IGFjdGlvbnNcbmV4cG9ydCBjb25zdCBBU1NFVF9BREQgPSBgQVNTRVRfQUREYDtcblxuLy8gY2hhbm5lbCBhY3Rpb25zXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9BREQgPSAnQ0hBTk5FTF9BREQnO1xuXG5leHBvcnQgY29uc3QgQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX0FTWU5DID0gJ0NIQU5ORUxfQ0xBSU1TX1VQREFURV9BU1lOQyc7XG5leHBvcnQgY29uc3QgQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX1NVQ0NFU1MgPSAnQ0hBTk5FTF9DTEFJTVNfVVBEQVRFX1NVQ0NFU1MnO1xuXG4vLyBhc3NldC9maWxlIGRpc3BsYXkgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IEZJTEVfUkVRVUVTVEVEID0gJ0ZJTEVfUkVRVUVTVEVEJztcbmV4cG9ydCBjb25zdCBGSUxFX0FWQUlMQUJJTElUWV9VUERBVEUgPSAnRklMRV9BVkFJTEFCSUxJVFlfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBESVNQTEFZX0FTU0VUX0VSUk9SID0gJ0RJU1BMQVlfQVNTRVRfRVJST1InO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9zaG93X2FjdGlvbl90eXBlcy5qcyIsImV4cG9ydCBjb25zdCBDSEFOTkVMID0gJ0NIQU5ORUwnO1xuZXhwb3J0IGNvbnN0IEFTU0VUX0xJVEUgPSAnQVNTRVRfTElURSc7XG5leHBvcnQgY29uc3QgQVNTRVRfREVUQUlMUyA9ICdBU1NFVF9ERVRBSUxTJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvc2hvd19yZXF1ZXN0X3R5cGVzLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7c2l0ZToge2RlZmF1bHRzOiB7IGRlZmF1bHRUaHVtYm5haWwgfX19KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVmYXVsdFRodW1ibmFpbCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShWaWV3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Fzc2V0UHJldmlldy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEFzc2V0UHJldmlldyA9ICh7IGRlZmF1bHRUaHVtYm5haWwsIGNsYWltRGF0YTogeyBuYW1lLCBjbGFpbUlkLCBmaWxlRXh0LCBjb250ZW50VHlwZSwgdGh1bWJuYWlsIH0gfSkgPT4ge1xuICBjb25zdCBkaXJlY3RTb3VyY2VMaW5rID0gYCR7Y2xhaW1JZH0vJHtuYW1lfS4ke2ZpbGVFeHR9YDtcbiAgY29uc3Qgc2hvd1VybExpbmsgPSBgLyR7Y2xhaW1JZH0vJHtuYW1lfWA7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2Fzc2V0LWhvbGRlcic+XG4gICAgICA8TGluayB0bz17c2hvd1VybExpbmt9ID5cbiAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChjb250ZW50VHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvanBlZyc6XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9qcGcnOlxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvcG5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL2dpZic6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXNzZXQtcHJldmlldyd9XG4gICAgICAgICAgICAgICAgICBzcmM9e2RpcmVjdFNvdXJjZUxpbmt9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnYXNzZXQtcHJldmlldyB2aWRlbyd9XG4gICAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbCB8fCBkZWZhdWx0VGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwPnVuc3VwcG9ydGVkIGZpbGUgdHlwZTwvcD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCl9XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldFByZXZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Bc3NldFByZXZpZXcvdmlldy5qc3giLCJleHBvcnQgY29uc3QgQ0hBTk5FTF9VUERBVEUgPSAnQ0hBTk5FTF9VUERBVEUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9jaGFubmVsX2FjdGlvbl90eXBlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IEZJTEVfU0VMRUNURUQgPSAnRklMRV9TRUxFQ1RFRCc7XG5leHBvcnQgY29uc3QgRklMRV9DTEVBUiA9ICdGSUxFX0NMRUFSJztcbmV4cG9ydCBjb25zdCBNRVRBREFUQV9VUERBVEUgPSAnTUVUQURBVEFfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBDTEFJTV9VUERBVEUgPSAnQ0xBSU1fVVBEQVRFJztcbmV4cG9ydCBjb25zdCBTRVRfUFVCTElTSF9JTl9DSEFOTkVMID0gJ1NFVF9QVUJMSVNIX0lOX0NIQU5ORUwnO1xuZXhwb3J0IGNvbnN0IFBVQkxJU0hfU1RBVFVTX1VQREFURSA9ICdQVUJMSVNIX1NUQVRVU19VUERBVEUnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX1VQREFURSA9ICdFUlJPUl9VUERBVEUnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0NIQU5ORUxfVVBEQVRFID0gJ1NFTEVDVEVEX0NIQU5ORUxfVVBEQVRFJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfTUVUQURBVEFfSU5QVVRTID0gJ1RPR0dMRV9NRVRBREFUQV9JTlBVVFMnO1xuZXhwb3J0IGNvbnN0IFRIVU1CTkFJTF9ORVcgPSAnVEhVTUJOQUlMX05FVyc7XG5leHBvcnQgY29uc3QgUFVCTElTSF9TVEFSVCA9ICdQVUJMSVNIX1NUQVJUJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb25zdGFudHMvcHVibGlzaF9hY3Rpb25fdHlwZXMuanMiLCJleHBvcnQgY29uc3QgTE9HSU4gPSAnRXhpc3RpbmcnO1xuZXhwb3J0IGNvbnN0IENSRUFURSA9ICdOZXcnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NoYW5uZWxfc2VsZWN0X3N0YXRlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZUZpbGUgKGZpbGUpIHtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZmlsZSBwcm92aWRlZCcpO1xuICAgIH1cbiAgICBpZiAoLycvLnRlc3QoZmlsZS5uYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcG9zdHJvcGhlcyBhcmUgbm90IGFsbG93ZWQgaW4gdGhlIGZpbGUgbmFtZScpO1xuICAgIH1cbiAgICAvLyB2YWxpZGF0ZSBzaXplIGFuZCB0eXBlXG4gICAgc3dpdGNoIChmaWxlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltYWdlL2pwZWcnOlxuICAgICAgY2FzZSAnaW1hZ2UvanBnJzpcbiAgICAgIGNhc2UgJ2ltYWdlL3BuZyc6XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiAxMDAwMDAwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnksIGltYWdlcyBhcmUgbGltaXRlZCB0byAxMCBtZWdhYnl0ZXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbWFnZS9naWYnOlxuICAgICAgICBpZiAoZmlsZS5zaXplID4gNTAwMDAwMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5LCBHSUZzIGFyZSBsaW1pdGVkIHRvIDUwIG1lZ2FieXRlcy4nKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ZpZGVvL21wNCc6XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiA1MDAwMDAwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnksIHZpZGVvcyBhcmUgbGltaXRlZCB0byA1MCBtZWdhYnl0ZXMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZmlsZS50eXBlICsgJyBpcyBub3QgYSBzdXBwb3J0ZWQgZmlsZSB0eXBlLiBPbmx5LCAuanBlZywgLnBuZywgLmdpZiwgYW5kIC5tcDQgZmlsZXMgYXJlIGN1cnJlbnRseSBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9maWxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFB1Ymxpc2hQcmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWdTb3VyY2UgICAgICAgOiAnJyxcbiAgICAgIGRlZmF1bHRUaHVtYm5haWw6ICcvYXNzZXRzL2ltZy92aWRlb190aHVtYl9kZWZhdWx0LnBuZycsXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2UodGhpcy5wcm9wcy5maWxlKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy5maWxlICE9PSB0aGlzLnByb3BzLmZpbGUpIHtcbiAgICAgIHRoaXMuc2V0UHJldmlld0ltYWdlU291cmNlKG5ld1Byb3BzLmZpbGUpO1xuICAgIH1cbiAgICBpZiAobmV3UHJvcHMudGh1bWJuYWlsICE9PSB0aGlzLnByb3BzLnRodW1ibmFpbCkge1xuICAgICAgaWYgKG5ld1Byb3BzLnRodW1ibmFpbCkge1xuICAgICAgICB0aGlzLnNldFByZXZpZXdJbWFnZVNvdXJjZUZyb21GaWxlKG5ld1Byb3BzLnRodW1ibmFpbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpbWdTb3VyY2U6IHRoaXMuc3RhdGUuZGVmYXVsdFRodW1ibmFpbH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZSAoZmlsZSkge1xuICAgIGNvbnN0IHByZXZpZXdSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHByZXZpZXdSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICBwcmV2aWV3UmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ltZ1NvdXJjZTogcHJldmlld1JlYWRlci5yZXN1bHR9KTtcbiAgICB9O1xuICB9XG4gIHNldFByZXZpZXdJbWFnZVNvdXJjZSAoZmlsZSkge1xuICAgIGlmIChmaWxlLnR5cGUgIT09ICd2aWRlby9tcDQnKSB7XG4gICAgICB0aGlzLnNldFByZXZpZXdJbWFnZVNvdXJjZUZyb21GaWxlKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50aHVtYm5haWwpIHtcbiAgICAgICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZSh0aGlzLnByb3BzLnRodW1ibmFpbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbWdTb3VyY2U6IHRoaXMuc3RhdGUuZGVmYXVsdFRodW1ibmFpbH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW1nXG4gICAgICAgIGlkPSdkcm9wem9uZS1wcmV2aWV3J1xuICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1nU291cmNlfVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuZGltUHJldmlldyA/ICdkaW0nIDogJyd9XG4gICAgICAgIGFsdD0ncHVibGlzaCBwcmV2aWV3J1xuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuXG5QdWJsaXNoUHJldmlldy5wcm9wVHlwZXMgPSB7XG4gIGRpbVByZXZpZXc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGZpbGUgICAgICA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGh1bWJuYWlsIDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hQcmV2aWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvUHVibGlzaFByZXZpZXcvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZnVuY3Rpb24gTG9nbyAoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4PScwcHgnIHk9JzBweCcgaGVpZ2h0PScyNHB4JyB2aWV3Qm94PScwIDAgODAgMzEnIGVuYWJsZUJhY2tncm91bmQ9J25ldyAwIDAgODAgMzEnIGNsYXNzTmFtZT0nbmF2LWJhci1sb2dvJz5cbiAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgPHRpdGxlPkxvZ288L3RpdGxlPlxuICAgICAgICA8ZGVzYz5TcGVlLmNoIGxvZ288L2Rlc2M+XG4gICAgICAgIDxnIGlkPSdBYm91dCc+XG4gICAgICAgICAgPGcgaWQ9J1B1Ymxpc2gtRm9ybS1WMi1feDI4X2ZpbGxlZF94MjlfJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDIuMDAwMDAwLCAtMjMuMDAwMDAwKSc+XG4gICAgICAgICAgICA8ZyBpZD0nR3JvdXAtMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQyLjAwMDAwMCwgMjIuMDAwMDAwKSc+XG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0nbWF0cml4KDEgMCAwIDEgMCAyMCknIGZvbnRTaXplPScyNScgZm9udEZhbWlseT0nUm9ib3RvJz5TcGVlJmx0O2g8L3RleHQ+XG4gICAgICAgICAgICAgIDxnIGlkPSdHcm91cC0xNicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDMwLjAwMDAwMCknPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzA5RjkxMScgc3Ryb2tlV2lkdGg9JzEnIHN0cm9rZUxpbmVjYXA9J3NxdWFyZScgZD0nTTAuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9J0xpbmUtOC1Db3B5JyBmaWxsPSdub25lJyBzdHJva2U9JyMwMjlENzQnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J00xNi41LDEuNWgxNScgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBpZD0nTGluZS04LUNvcHktMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjRTM1QkQ4JyBzdHJva2VXaWR0aD0nMScgc3Ryb2tlTGluZWNhcD0nc3F1YXJlJyBkPSdNMzIuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9J0xpbmUtOC1Db3B5LTMnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQxNTZDNScgc3Ryb2tlV2lkdGg9JzEnIHN0cm9rZUxpbmVjYXA9J3NxdWFyZScgZD0nTTQ4LjUsMS41aDE1JyAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgtQ29weS00JyBmaWxsPSdub25lJyBzdHJva2U9JyM2MzU2ODgnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J002NC41LDEuNWgxNScgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9MaW5rPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0xvZ28vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTmF2QmFyQ2hhbm5lbERyb3Bkb3duICh7IGNoYW5uZWxOYW1lLCBoYW5kbGVTZWxlY3Rpb24sIGRlZmF1bHRTZWxlY3Rpb24sIFZJRVcsIExPR09VVCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlbGVjdCB0eXBlPSd0ZXh0JyBpZD0nbmF2LWJhci1jaGFubmVsLXNlbGVjdCcgY2xhc3NOYW1lPSdzZWxlY3Qgc2VsZWN0LS1hcnJvdyBsaW5rLS1uYXYnIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259IHZhbHVlPXtkZWZhdWx0U2VsZWN0aW9ufT5cbiAgICAgIDxvcHRpb24gaWQ9J25hdi1iYXItY2hhbm5lbC1zZWxlY3QtY2hhbm5lbC1vcHRpb24nPntjaGFubmVsTmFtZX08L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9e1ZJRVd9PlZpZXc8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9e0xPR09VVH0+TG9nb3V0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJDaGFubmVsRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9OYXZCYXJDaGFubmVsT3B0aW9uc0Ryb3Bkb3duL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBVcmxNaWRkbGUgKHtwdWJsaXNoSW5DaGFubmVsLCBzZWxlY3RlZENoYW5uZWwsIGxvZ2dlZEluQ2hhbm5lbE5hbWUsIGxvZ2dlZEluQ2hhbm5lbFNob3J0SWR9KSB7XG4gIGlmIChwdWJsaXNoSW5DaGFubmVsKSB7XG4gICAgaWYgKHNlbGVjdGVkQ2hhbm5lbCA9PT0gbG9nZ2VkSW5DaGFubmVsTmFtZSkge1xuICAgICAgcmV0dXJuIDxzcGFuIGlkPSd1cmwtY2hhbm5lbCcgY2xhc3NOYW1lPSd1cmwtdGV4dC0tc2Vjb25kYXJ5Jz57bG9nZ2VkSW5DaGFubmVsTmFtZX06e2xvZ2dlZEluQ2hhbm5lbFNob3J0SWR9IC88L3NwYW4+O1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gaWQ9J3VybC1jaGFubmVsLXBsYWNlaG9sZGVyJyBjbGFzc05hbWU9J3VybC10ZXh0LS1zZWNvbmRhcnkgdG9vbHRpcCc+QGNoYW5uZWw8c3BhblxuICAgICAgY2xhc3NOYW1lPSd0b29sdGlwLXRleHQnPlNlbGVjdCBhIGNoYW5uZWwgYmVsb3c8L3NwYW4+IC88L3NwYW4+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPHNwYW4gaWQ9J3VybC1uby1jaGFubmVsLXBsYWNlaG9sZGVyJyBjbGFzc05hbWU9J3VybC10ZXh0LS1zZWNvbmRhcnkgdG9vbHRpcCc+eHl6PHNwYW4gY2xhc3NOYW1lPSd0b29sdGlwLXRleHQnPlRoaXMgd2lsbCBiZSBhIHJhbmRvbSBpZDwvc3Bhbj4gLzwvc3Bhbj5cbiAgKTtcbn1cblxuVXJsTWlkZGxlLnByb3BUeXBlcyA9IHtcbiAgcHVibGlzaEluQ2hhbm5lbCAgICAgIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9nZ2VkSW5DaGFubmVsTmFtZSAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9nZ2VkSW5DaGFubmVsU2hvcnRJZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVybE1pZGRsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1B1Ymxpc2hVcmxNaWRkbGVEaXNwbGF5L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBFeHBhbmRpbmdUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5hZGp1c3RUZXh0YXJlYSh7fSk7XG4gIH1cbiAgX2hhbmRsZUNoYW5nZSAoZXZlbnQpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoZXZlbnQpO1xuICAgIHRoaXMuYWRqdXN0VGV4dGFyZWEoZXZlbnQpO1xuICB9XG4gIGFkanVzdFRleHRhcmVhICh7IHRhcmdldCA9IHRoaXMuZWwgfSkge1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBgJHt0YXJnZXQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICByZWY9e3ggPT4gdGhpcy5lbCA9IHh9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuRXhwYW5kaW5nVGV4dGFyZWEucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBhbmRpbmdUZXh0YXJlYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0V4cGFuZGluZ1RleHRBcmVhL2luZGV4LmpzeCIsImV4cG9ydCBjb25zdCBMT0FEX1NUQVJUID0gJ0xPQURfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgUFVCTElTSElORyA9ICdQVUJMSVNISU5HJztcbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gJ1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEZBSUxFRCA9ICdGQUlMRUQnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbnN0YW50cy9wdWJsaXNoX2NsYWltX3N0YXRlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVQYWdlVGl0bGUgfSBmcm9tICd1dGlscy9wYWdlVGl0bGUnO1xuaW1wb3J0IHsgY3JlYXRlTWV0YVRhZ3MgfSBmcm9tICd1dGlscy9tZXRhVGFncyc7XG5pbXBvcnQgeyBjcmVhdGVDYW5vbmljYWxMaW5rIH0gZnJvbSAndXRpbHMvY2Fub25pY2FsTGluayc7XG5cbmNsYXNzIFNFTyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgLy8gcHJvcHMgZnJvbSBzdGF0ZVxuICAgIGNvbnN0IHsgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsLCBzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIHByb3BzIGZyb20gcGFyZW50XG4gICAgY29uc3QgeyBhc3NldCwgY2hhbm5lbCwgcGFnZVVyaSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBwYWdlVGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY3JlYXRlIHBhZ2UgdGl0bGUsIHRhZ3MsIGFuZCBjYW5vbmljYWwgbGlua1xuICAgIHBhZ2VUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShzaXRlVGl0bGUsIHBhZ2VUaXRsZSk7XG4gICAgY29uc3QgbWV0YVRhZ3MgPSBjcmVhdGVNZXRhVGFncyhzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgY2hhbm5lbCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKTtcbiAgICBjb25zdCBjYW5vbmljYWxMaW5rID0gY3JlYXRlQ2Fub25pY2FsTGluayhhc3NldCwgY2hhbm5lbCwgcGFnZVVyaSwgc2l0ZUhvc3QpO1xuICAgIC8vIHJlbmRlciByZXN1bHRzXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWxtZXRcbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgbWV0YT17bWV0YVRhZ3N9XG4gICAgICAgIGxpbms9e1t7cmVsOiAnY2Fub25pY2FsJywgaHJlZjogY2Fub25pY2FsTGlua31dfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuXG5TRU8ucHJvcFR5cGVzID0ge1xuICBwYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZ2VVcmkgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hhbm5lbCAgOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhc3NldCAgICA6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTRU87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TRU8vdmlldy5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVBhZ2VUaXRsZSA9IChzaXRlVGl0bGUsIHBhZ2VUaXRsZSkgPT4ge1xuICBpZiAoIXBhZ2VUaXRsZSkge1xuICAgIHJldHVybiBgJHtzaXRlVGl0bGV9YDtcbiAgfVxuICByZXR1cm4gYCR7c2l0ZVRpdGxlfSAtICR7cGFnZVRpdGxlfWA7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL3BhZ2VUaXRsZS5qcyIsImNvbnN0IGRldGVybWluZU9nVGh1bWJuYWlsQ29udGVudFR5cGUgPSAodGh1bWJuYWlsKSA9PiB7XG4gIGlmICh0aHVtYm5haWwpIHtcbiAgICBjb25zdCBmaWxlRXh0ID0gdGh1bWJuYWlsLnN1YnN0cmluZyh0aHVtYm5haWwubGFzdEluZGV4T2YoJy4nKSk7XG4gICAgc3dpdGNoIChmaWxlRXh0KSB7XG4gICAgICBjYXNlICdqcGVnJzpcbiAgICAgIGNhc2UgJ2pwZyc6XG4gICAgICAgIHJldHVybiAnaW1hZ2UvanBlZyc7XG4gICAgICBjYXNlICdwbmcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL3BuZyc7XG4gICAgICBjYXNlICdnaWYnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2dpZic7XG4gICAgICBjYXNlICdtcDQnOlxuICAgICAgICByZXR1cm4gJ3ZpZGVvL21wNCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2pwZWcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBjcmVhdGVCYXNpY01ldGFUYWdzID0gKHNpdGVIb3N0LCBzaXRlRGVzY3JpcHRpb24sIHNpdGVUaXRsZSwgc2l0ZVR3aXR0ZXIpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogc2l0ZUhvc3R9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBzaXRlRGVzY3JpcHRpb259LFxuICAgIHtwcm9wZXJ0eTogJ3R3aXR0ZXI6c2l0ZScsIGNvbnRlbnQ6IHNpdGVUd2l0dGVyfSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeSd9LFxuICBdO1xufTtcblxuY29uc3QgY3JlYXRlQ2hhbm5lbE1ldGFUYWdzID0gKHNpdGVUaXRsZSwgc2l0ZUhvc3QsIHNpdGVUd2l0dGVyLCBjaGFubmVsKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9uZ0lkIH0gPSBjaGFubmVsO1xuICByZXR1cm4gW1xuICAgIHtwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogYCR7bmFtZX0gb24gJHtzaXRlVGl0bGV9YH0sXG4gICAge3Byb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogYCR7c2l0ZUhvc3R9LyR7bmFtZX06JHtsb25nSWR9YH0sXG4gICAge3Byb3BlcnR5OiAnb2c6c2l0ZV9uYW1lJywgY29udGVudDogc2l0ZVRpdGxlfSxcbiAgICB7cHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGAke25hbWV9LCBhIGNoYW5uZWwgb24gJHtzaXRlVGl0bGV9YH0sXG4gICAge3Byb3BlcnR5OiAndHdpdHRlcjpzaXRlJywgY29udGVudDogc2l0ZVR3aXR0ZXJ9LFxuICAgIHtwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6ICdzdW1tYXJ5J30sXG4gIF07XG59O1xuXG5jb25zdCBjcmVhdGVBc3NldE1ldGFUYWdzID0gKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKSA9PiB7XG4gIGNvbnN0IHsgY2xhaW1EYXRhIH0gPSBhc3NldDtcbiAgY29uc3QgeyBjb250ZW50VHlwZSB9ID0gY2xhaW1EYXRhO1xuICBjb25zdCBlbWJlZFVybCA9IGAke3NpdGVIb3N0fS8ke2NsYWltRGF0YS5jbGFpbUlkfS8ke2NsYWltRGF0YS5uYW1lfWA7XG4gIGNvbnN0IHNob3dVcmwgPSBgJHtzaXRlSG9zdH0vJHtjbGFpbURhdGEuY2xhaW1JZH0vJHtjbGFpbURhdGEubmFtZX1gO1xuICBjb25zdCBzb3VyY2UgPSBgJHtzaXRlSG9zdH0vJHtjbGFpbURhdGEuY2xhaW1JZH0vJHtjbGFpbURhdGEubmFtZX0uJHtjbGFpbURhdGEuZmlsZUV4dH1gO1xuICBjb25zdCBvZ1RpdGxlID0gY2xhaW1EYXRhLnRpdGxlIHx8IGNsYWltRGF0YS5uYW1lO1xuICBjb25zdCBvZ0Rlc2NyaXB0aW9uID0gY2xhaW1EYXRhLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmlwdGlvbjtcbiAgY29uc3Qgb2dUaHVtYm5haWxDb250ZW50VHlwZSA9IGRldGVybWluZU9nVGh1bWJuYWlsQ29udGVudFR5cGUoY2xhaW1EYXRhLnRodW1ibmFpbCk7XG4gIGNvbnN0IG9nVGh1bWJuYWlsID0gY2xhaW1EYXRhLnRodW1ibmFpbCB8fCBkZWZhdWx0VGh1bWJuYWlsO1xuICBjb25zdCBtZXRhVGFncyA9IFtcbiAgICB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IG9nVGl0bGV9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHNob3dVcmx9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBvZ0Rlc2NyaXB0aW9ufSxcbiAgICB7cHJvcGVydHk6ICdvZzppbWFnZTp3aWR0aCcsIGNvbnRlbnQ6IDYwMH0sXG4gICAge3Byb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogMzE1fSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOnNpdGUnLCBjb250ZW50OiBzaXRlVHdpdHRlcn0sXG4gIF07XG4gIGlmIChjb250ZW50VHlwZSA9PT0gJ3ZpZGVvL21wNCcgfHwgY29udGVudFR5cGUgPT09ICd2aWRlby93ZWJtJykge1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6dmlkZW8nLCBjb250ZW50OiBzb3VyY2V9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnZpZGVvOnNlY3VyZV91cmwnLCBjb250ZW50OiBzb3VyY2V9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnZpZGVvOnR5cGUnLCBjb250ZW50OiBjb250ZW50VHlwZX0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiBvZ1RodW1ibmFpbH0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6aW1hZ2U6dHlwZScsIGNvbnRlbnQ6IG9nVGh1bWJuYWlsQ29udGVudFR5cGV9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAndmlkZW8nfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAncGxheWVyJ30pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXInLCBjb250ZW50OiBlbWJlZFVybH0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXI6d2lkdGgnLCBjb250ZW50OiA2MDB9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6dGV4dDpwbGF5ZXJfd2lkdGgnLCBjb250ZW50OiA2MDB9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6cGxheWVyOmhlaWdodCcsIGNvbnRlbnQ6IDMzN30pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXI6c3RyZWFtJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOnBsYXllcjpzdHJlYW06Y29udGVudF90eXBlJywgY29udGVudDogY29udGVudFR5cGV9KTtcbiAgfSBlbHNlIHtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzppbWFnZTp0eXBlJywgY29udGVudDogY29udGVudFR5cGV9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnYXJ0aWNsZSd9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJ30pO1xuICB9XG4gIHJldHVybiBtZXRhVGFncztcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNZXRhVGFncyA9IChzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgY2hhbm5lbCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKSA9PiB7XG4gIGlmIChhc3NldCkge1xuICAgIHJldHVybiBjcmVhdGVBc3NldE1ldGFUYWdzKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKTtcbiAgfTtcbiAgaWYgKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhbm5lbE1ldGFUYWdzKHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBjaGFubmVsKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUJhc2ljTWV0YVRhZ3Moc2l0ZURlc2NyaXB0aW9uLCBzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlcik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWxzL21ldGFUYWdzLmpzIiwiY29uc3QgY3JlYXRlQmFzaWNDYW5vbmljYWxMaW5rID0gKHBhZ2UsIHNpdGVIb3N0KSA9PiB7XG4gIHJldHVybiBgJHtzaXRlSG9zdH0vJHtwYWdlfWA7XG59O1xuXG5jb25zdCBjcmVhdGVBc3NldENhbm9uaWNhbExpbmsgPSAoYXNzZXQsIHNpdGVIb3N0KSA9PiB7XG4gIGxldCBjaGFubmVsTmFtZSwgY2VydGlmaWNhdGVJZCwgbmFtZSwgY2xhaW1JZDtcbiAgaWYgKGFzc2V0LmNsYWltRGF0YSkge1xuICAgICh7IGNoYW5uZWxOYW1lLCBjZXJ0aWZpY2F0ZUlkLCBuYW1lLCBjbGFpbUlkIH0gPSBhc3NldC5jbGFpbURhdGEpO1xuICB9O1xuICBpZiAoY2hhbm5lbE5hbWUpIHtcbiAgICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7Y2hhbm5lbE5hbWV9OiR7Y2VydGlmaWNhdGVJZH0vJHtuYW1lfWA7XG4gIH07XG4gIHJldHVybiBgJHtzaXRlSG9zdH0vJHtjbGFpbUlkfS8ke25hbWV9YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYW5uZWxDYW5vbmljYWxMaW5rID0gKGNoYW5uZWwsIHNpdGVIb3N0KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9uZ0lkIH0gPSBjaGFubmVsO1xuICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7bmFtZX06JHtsb25nSWR9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYW5vbmljYWxMaW5rID0gKGFzc2V0LCBjaGFubmVsLCBwYWdlLCBzaXRlSG9zdCkgPT4ge1xuICBpZiAoYXNzZXQpIHtcbiAgICByZXR1cm4gY3JlYXRlQXNzZXRDYW5vbmljYWxMaW5rKGFzc2V0LCBzaXRlSG9zdCk7XG4gIH1cbiAgaWYgKGNoYW5uZWwpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhbm5lbENhbm9uaWNhbExpbmsoY2hhbm5lbCwgc2l0ZUhvc3QpO1xuICB9XG4gIHJldHVybiBjcmVhdGVCYXNpY0Nhbm9uaWNhbExpbmsocGFnZSwgc2l0ZUhvc3QpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9jYW5vbmljYWxMaW5rLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==