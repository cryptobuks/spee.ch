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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var Path = __webpack_require__(17);

var _require = __webpack_require__(23),
    getSubDirectoryNames = _require.getSubDirectoryNames;

var thisFolder = Path.resolve(__dirname, 'client/components/');
var modules = {};

getSubDirectoryNames(thisFolder).forEach(function (name) {
  modules[name] = __webpack_require__(24)("./" + name).default;
});

module.exports = modules;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(18);

var _view = __webpack_require__(14);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGa = __webpack_require__(25);

var _reactGa2 = _interopRequireDefault(_reactGa);

var _reactRouterDom = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = __webpack_require__(26),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(15);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActiveStatusBar = __webpack_require__(1);

var _ActiveStatusBar2 = _interopRequireDefault(_ActiveStatusBar);

var _InactiveStatusBar = __webpack_require__(3);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(18);

var _view = __webpack_require__(16);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(27);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageTitle = __webpack_require__(28);

var _metaTags = __webpack_require__(29);

var _canonicalLink = __webpack_require__(30);

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
/* 17 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
__webpack_require__(21);
module.exports = __webpack_require__(4);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"fs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    lstatSync = _require.lstatSync,
    readdirSync = _require.readdirSync;

var _require2 = __webpack_require__(17),
    join = _require2.join;

var getSubDirectoryNames = exports.getSubDirectoryNames = function getSubDirectoryNames(root) {
  return readdirSync(root).filter(function (name) {
    var fullPath = join(root, name);
    return lstatSync(fullPath).isDirectory();
  });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 4,
	"./ActiveStatusBar": 1,
	"./ActiveStatusBar/": 1,
	"./ActiveStatusBar/index": 1,
	"./ActiveStatusBar/index.jsx": 1,
	"./AssetPreview": 5,
	"./AssetPreview/": 5,
	"./AssetPreview/index": 5,
	"./AssetPreview/index.js": 5,
	"./AssetPreview/view": 14,
	"./AssetPreview/view.jsx": 14,
	"./ExpandingTextArea": 6,
	"./ExpandingTextArea/": 6,
	"./ExpandingTextArea/index": 6,
	"./ExpandingTextArea/index.jsx": 6,
	"./GAListener": 7,
	"./GAListener/": 7,
	"./GAListener/index": 7,
	"./GAListener/index.jsx": 7,
	"./InactiveStatusBar": 3,
	"./InactiveStatusBar/": 3,
	"./InactiveStatusBar/index": 3,
	"./InactiveStatusBar/index.jsx": 3,
	"./Logo": 8,
	"./Logo/": 8,
	"./Logo/index": 8,
	"./Logo/index.jsx": 8,
	"./NavBarChannelOptionsDropdown": 9,
	"./NavBarChannelOptionsDropdown/": 9,
	"./NavBarChannelOptionsDropdown/index": 9,
	"./NavBarChannelOptionsDropdown/index.jsx": 9,
	"./ProgressBar": 10,
	"./ProgressBar/": 10,
	"./ProgressBar/index": 10,
	"./ProgressBar/index.jsx": 10,
	"./PublishPreview": 11,
	"./PublishPreview/": 11,
	"./PublishPreview/index": 11,
	"./PublishPreview/index.jsx": 11,
	"./PublishUrlMiddleDisplay": 12,
	"./PublishUrlMiddleDisplay/": 12,
	"./PublishUrlMiddleDisplay/index": 12,
	"./PublishUrlMiddleDisplay/index.jsx": 12,
	"./SEO": 13,
	"./SEO/": 13,
	"./SEO/index": 13,
	"./SEO/index.js": 13,
	"./SEO/view": 16,
	"./SEO/view.jsx": 16,
	"./index": 4,
	"./index.js": 4
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
webpackContext.id = 24;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDc0NDI0OGQ5ZDZjNDZlODM1ZWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9BY3RpdmVTdGF0dXNCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9JbmFjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQXNzZXRQcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0V4cGFuZGluZ1RleHRBcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9HQUxpc3RlbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZCYXJDaGFubmVsT3B0aW9uc0Ryb3Bkb3duL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUHVibGlzaFByZXZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1B1Ymxpc2hVcmxNaWRkbGVEaXNwbGF5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TRU8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQXNzZXRQcmV2aWV3L3ZpZXcuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9TRU8vdmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2hhdHdnLWZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC9nZXRGb2xkZXJOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cyBeXFwuXFwvLiokIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdhXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3NpdGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL3BhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbHMvbWV0YVRhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3V0aWxzL2Nhbm9uaWNhbExpbmsuanMiXSwibmFtZXMiOlsiQWN0aXZlU3RhdHVzQmFyIiwiSW5hY3RpdmVTdGF0dXNCYXIiLCJQYXRoIiwicmVxdWlyZSIsImdldFN1YkRpcmVjdG9yeU5hbWVzIiwidGhpc0ZvbGRlciIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJtb2R1bGVzIiwiZm9yRWFjaCIsIm5hbWUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImRlZmF1bHRUaHVtYm5haWwiLCJzaXRlIiwiZGVmYXVsdHMiLCJFeHBhbmRpbmdUZXh0YXJlYSIsInByb3BzIiwiX2hhbmRsZUNoYW5nZSIsImJpbmQiLCJhZGp1c3RUZXh0YXJlYSIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJlbCIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwicmVzdCIsIngiLCJwcm9wVHlwZXMiLCJmdW5jIiwiZ29vZ2xlSWQiLCJhbmFseXRpY3MiLCJpbml0aWFsaXplIiwiR0FMaXN0ZW5lciIsInNlbmRQYWdlVmlldyIsImhpc3RvcnkiLCJsb2NhdGlvbiIsImxpc3RlbiIsInNldCIsInBhZ2UiLCJwYXRobmFtZSIsInBhZ2V2aWV3IiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJMb2dvIiwiTmF2QmFyQ2hhbm5lbERyb3Bkb3duIiwiY2hhbm5lbE5hbWUiLCJoYW5kbGVTZWxlY3Rpb24iLCJkZWZhdWx0U2VsZWN0aW9uIiwiVklFVyIsIkxPR09VVCIsIlByb2dyZXNzQmFyIiwic3RhdGUiLCJiYXJzIiwiaW5kZXgiLCJpbmNyZW1lbnRlciIsImNyZWF0ZUJhcnMiLCJzdGFydFByb2dyZXNzQmFyIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJzdG9wUHJvZ3Jlc3NCYXIiLCJpIiwic2l6ZSIsInB1c2giLCJpc0FjdGl2ZSIsInNldFN0YXRlIiwidXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtYXAiLCJiYXIiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiUHVibGlzaFByZXZpZXciLCJpbWdTb3VyY2UiLCJzZXRQcmV2aWV3SW1hZ2VTb3VyY2UiLCJmaWxlIiwibmV3UHJvcHMiLCJ0aHVtYm5haWwiLCJzZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZSIsInByZXZpZXdSZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInR5cGUiLCJkaW1QcmV2aWV3IiwiYm9vbCIsIm9iamVjdCIsIlVybE1pZGRsZSIsInB1Ymxpc2hJbkNoYW5uZWwiLCJzZWxlY3RlZENoYW5uZWwiLCJsb2dnZWRJbkNoYW5uZWxOYW1lIiwibG9nZ2VkSW5DaGFubmVsU2hvcnRJZCIsInN0cmluZyIsImRlZmF1bHREZXNjcmlwdGlvbiIsInNpdGVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2l0ZUhvc3QiLCJob3N0Iiwic2l0ZVRpdGxlIiwidGl0bGUiLCJzaXRlVHdpdHRlciIsInR3aXR0ZXIiLCJBc3NldFByZXZpZXciLCJjbGFpbURhdGEiLCJjbGFpbUlkIiwiZmlsZUV4dCIsImNvbnRlbnRUeXBlIiwiZGlyZWN0U291cmNlTGluayIsInNob3dVcmxMaW5rIiwiU0VPIiwiYXNzZXQiLCJjaGFubmVsIiwicGFnZVVyaSIsInBhZ2VUaXRsZSIsIm1ldGFUYWdzIiwiY2Fub25pY2FsTGluayIsInJlbCIsImhyZWYiLCJsc3RhdFN5bmMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJyb290IiwiZmlsdGVyIiwiZnVsbFBhdGgiLCJpc0RpcmVjdG9yeSIsIlNpdGVDb25maWciLCJhc3NldERlZmF1bHRzIiwiYXV0aCIsInNlc3Npb25LZXkiLCJjdXN0b21Db21wb25lbnRzIiwiY29tcG9uZW50cyIsImNvbnRhaW5lcnMiLCJwYWdlcyIsImRldGFpbHMiLCJwb3J0IiwibG9jYWxQdWJsaWNGb2xkZXIiLCJwdWJsaXNoaW5nIiwiYWRkaXRpb25hbENsYWltQWRkcmVzc2VzIiwiZGlzYWJsZWQiLCJkaXNhYmxlZE1lc3NhZ2UiLCJwcmltYXJ5Q2xhaW1BZGRyZXNzIiwidGh1bWJuYWlsQ2hhbm5lbCIsInRodW1ibmFpbENoYW5uZWxJZCIsInVwbG9hZERpcmVjdG9yeSIsImNvbmZpZ3VyZSIsImNvbmZpZyIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQYWdlVGl0bGUiLCJkZXRlcm1pbmVPZ1RodW1ibmFpbENvbnRlbnRUeXBlIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJjcmVhdGVCYXNpY01ldGFUYWdzIiwicHJvcGVydHkiLCJjb250ZW50IiwiY3JlYXRlQ2hhbm5lbE1ldGFUYWdzIiwibG9uZ0lkIiwiY3JlYXRlQXNzZXRNZXRhVGFncyIsImVtYmVkVXJsIiwic2hvd1VybCIsInNvdXJjZSIsIm9nVGl0bGUiLCJvZ0Rlc2NyaXB0aW9uIiwib2dUaHVtYm5haWxDb250ZW50VHlwZSIsIm9nVGh1bWJuYWlsIiwiY3JlYXRlTWV0YVRhZ3MiLCJjcmVhdGVCYXNpY0Nhbm9uaWNhbExpbmsiLCJjcmVhdGVBc3NldENhbm9uaWNhbExpbmsiLCJjZXJ0aWZpY2F0ZUlkIiwiY3JlYXRlQ2hhbm5lbENhbm9uaWNhbExpbmsiLCJjcmVhdGVDYW5vbmljYWxMaW5rIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsa0M7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBQU87QUFBQTtBQUFBLE1BQU0sV0FBVSxtQ0FBaEI7QUFBQTtBQUFBLEdBQVA7QUFDRCxDQUZEOztrQkFJZUEsZTs7Ozs7O0FDTmYsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixTQUFPO0FBQUE7QUFBQSxNQUFNLFdBQVUscUNBQWhCO0FBQUE7QUFBQSxHQUFQO0FBQ0QsQ0FGRDs7a0JBSWVBLGlCOzs7Ozs7Ozs7QUNOZixJQUFNQyxPQUFPLG1CQUFBQyxDQUFRLEVBQVIsQ0FBYjs7ZUFDaUMsbUJBQUFBLENBQVEs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QUFzQm5ELFdBQXRCLFNBQXFDMkgsYUFBckMsU0FBc0RuSyxJQUF0RDtBQUNEO0FBQ0QsU0FBVTJGLFFBQVYsU0FBc0JRLE9BQXRCLFNBQWlDbkcsSUFBakM7QUFDRCxDQVREOztBQVdBLElBQU1vSyw2QkFBNkIsU0FBN0JBLDBCQUE2QixDQUFDMUQsT0FBRCxFQUFVZixRQUFWLEVBQXVCO0FBQUEsTUFDaEQzRixJQURnRCxHQUMvQjBHLE9BRCtCLENBQ2hEMUcsSUFEZ0Q7QUFBQSxNQUMxQ3VKLE1BRDBDLEdBQy9CN0MsT0FEK0IsQ0FDMUM2QyxNQUQwQzs7QUFFeEQsU0FBVTVELFFBQVYsU0FBc0IzRixJQUF0QixTQUE4QnVKLE1BQTlCO0FBQ0QsQ0FIRDs7QUFLTyxJQUFNYyxvREFBc0IsU0FBdEJBLG1CQUFzQixDQUFDNUQsS0FBRCxFQUFRQyxPQUFSLEVBQWlCekUsSUFBakIsRUFBdUIwRCxRQUF2QixFQUFvQztBQUNyRSxNQUFJYyxLQUFKLEVBQVc7QUFDVCxXQUFPeUQseUJBQXlCekQsS0FBekIsRUFBZ0NkLFFBQWhDLENBQVA7QUFDRDtBQUNELE1BQUllLE9BQUosRUFBYTtBQUNYLFdBQU8wRCwyQkFBMkIxRCxPQUEzQixFQUFvQ2YsUUFBcEMsQ0FBUDtBQUNEO0FBQ0QsU0FBT3NFLHlCQUF5QmhJLElBQXpCLEVBQStCMEQsUUFBL0IsQ0FBUDtBQUNELENBUk0sQyIsImZpbGUiOiJjb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZXhwb3J0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDc0NDI0OGQ5ZDZjNDZlODM1ZWEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQWN0aXZlU3RhdHVzQmFyID0gKCkgPT4ge1xuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLS1hY3RpdmUnPnwgPC9zcGFuPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVN0YXR1c0JhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0FjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluYWN0aXZlU3RhdHVzQmFyID0gKCkgPT4ge1xuICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPSdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLS1pbmFjdGl2ZSc+fCA8L3NwYW4+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5hY3RpdmVTdGF0dXNCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9JbmFjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3giLCJjb25zdCBQYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgeyBnZXRTdWJEaXJlY3RvcnlOYW1lcyB9ID0gcmVxdWlyZSgnYnVpbGQvZ2V0Rm9sZGVyTmFtZXMuanMnKTtcblxuY29uc3QgdGhpc0ZvbGRlciA9IFBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdjbGllbnQvY29tcG9uZW50cy8nKTtcbmxldCBtb2R1bGVzID0ge307XG5cbmdldFN1YkRpcmVjdG9yeU5hbWVzKHRoaXNGb2xkZXIpXG4gIC5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgbW9kdWxlc1tuYW1lXSA9IHJlcXVpcmUoYC4vJHtuYW1lfWApLmRlZmF1bHQ7XG4gIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9pbmRleC5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe3NpdGU6IHtkZWZhdWx0czogeyBkZWZhdWx0VGh1bWJuYWlsIH19fSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGRlZmF1bHRUaHVtYm5haWwsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVmlldyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Bc3NldFByZXZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgRXhwYW5kaW5nVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlID0gdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuYWRqdXN0VGV4dGFyZWEoe30pO1xuICB9XG4gIF9oYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DaGFuZ2UpIG9uQ2hhbmdlKGV2ZW50KTtcbiAgICB0aGlzLmFkanVzdFRleHRhcmVhKGV2ZW50KTtcbiAgfVxuICBhZGp1c3RUZXh0YXJlYSAoeyB0YXJnZXQgPSB0aGlzLmVsIH0pIHtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0LnNjcm9sbEhlaWdodH1weGA7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWwgPSB4fVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkV4cGFuZGluZ1RleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kaW5nVGV4dGFyZWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9FeHBhbmRpbmdUZXh0QXJlYS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZUFuYWx5dGljcyBmcm9tICdyZWFjdC1nYSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5jb25zdCB7IGFuYWx5dGljczogeyBnb29nbGVJZCB9IH0gPSByZXF1aXJlKCcuLi8uLi8uLi9jb25maWcvc2l0ZUNvbmZpZy5qcycpO1xuXG5Hb29nbGVBbmFseXRpY3MuaW5pdGlhbGl6ZShnb29nbGVJZCk7XG5cbmNsYXNzIEdBTGlzdGVuZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5zZW5kUGFnZVZpZXcodGhpcy5wcm9wcy5oaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkubGlzdGVuKHRoaXMuc2VuZFBhZ2VWaWV3KTtcbiAgfVxuXG4gIHNlbmRQYWdlVmlldyAobG9jYXRpb24pIHtcbiAgICBHb29nbGVBbmFseXRpY3Muc2V0KHsgcGFnZTogbG9jYXRpb24ucGF0aG5hbWUgfSk7XG4gICAgR29vZ2xlQW5hbHl0aWNzLnBhZ2V2aWV3KGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihHQUxpc3RlbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0dBTGlzdGVuZXIvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZnVuY3Rpb24gTG9nbyAoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2ZXJzaW9uPScxLjEnIGlkPSdMYXllcl8xJyB4PScwcHgnIHk9JzBweCcgaGVpZ2h0PScyNHB4JyB2aWV3Qm94PScwIDAgODAgMzEnIGVuYWJsZUJhY2tncm91bmQ9J25ldyAwIDAgODAgMzEnIGNsYXNzTmFtZT0nbmF2LWJhci1sb2dvJz5cbiAgICAgIDxMaW5rIHRvPScvJz5cbiAgICAgICAgPHRpdGxlPkxvZ288L3RpdGxlPlxuICAgICAgICA8ZGVzYz5TcGVlLmNoIGxvZ288L2Rlc2M+XG4gICAgICAgIDxnIGlkPSdBYm91dCc+XG4gICAgICAgICAgPGcgaWQ9J1B1Ymxpc2gtRm9ybS1WMi1feDI4X2ZpbGxlZF94MjlfJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNDIuMDAwMDAwLCAtMjMuMDAwMDAwKSc+XG4gICAgICAgICAgICA8ZyBpZD0nR3JvdXAtMTcnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDQyLjAwMDAwMCwgMjIuMDAwMDAwKSc+XG4gICAgICAgICAgICAgIDx0ZXh0IHRyYW5zZm9ybT0nbWF0cml4KDEgMCAwIDEgMCAyMCknIGZvbnRTaXplPScyNScgZm9udEZhbWlseT0nUm9ib3RvJz5TcGVlJmx0O2g8L3RleHQ+XG4gICAgICAgICAgICAgIDxnIGlkPSdHcm91cC0xNicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC4wMDAwMDAsIDMwLjAwMDAwMCknPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzA5RjkxMScgc3Ryb2tlV2lkdGg9JzEnIHN0cm9rZUxpbmVjYXA9J3NxdWFyZScgZD0nTTAuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9J0xpbmUtOC1Db3B5JyBmaWxsPSdub25lJyBzdHJva2U9JyMwMjlENzQnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J00xNi41LDEuNWgxNScgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBpZD0nTGluZS04LUNvcHktMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjRTM1QkQ4JyBzdHJva2VXaWR0aD0nMScgc3Ryb2tlTGluZWNhcD0nc3F1YXJlJyBkPSdNMzIuNSwxLjVoMTUnIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggaWQ9J0xpbmUtOC1Db3B5LTMnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzQxNTZDNScgc3Ryb2tlV2lkdGg9JzEnIHN0cm9rZUxpbmVjYXA9J3NxdWFyZScgZD0nTTQ4LjUsMS41aDE1JyAvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPSdMaW5lLTgtQ29weS00JyBmaWxsPSdub25lJyBzdHJva2U9JyM2MzU2ODgnIHN0cm9rZVdpZHRoPScxJyBzdHJva2VMaW5lY2FwPSdzcXVhcmUnIGQ9J002NC41LDEuNWgxNScgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9MaW5rPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0xvZ28vaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTmF2QmFyQ2hhbm5lbERyb3Bkb3duICh7IGNoYW5uZWxOYW1lLCBoYW5kbGVTZWxlY3Rpb24sIGRlZmF1bHRTZWxlY3Rpb24sIFZJRVcsIExPR09VVCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlbGVjdCB0eXBlPSd0ZXh0JyBpZD0nbmF2LWJhci1jaGFubmVsLXNlbGVjdCcgY2xhc3NOYW1lPSdzZWxlY3Qgc2VsZWN0LS1hcnJvdyBsaW5rLS1uYXYnIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3Rpb259IHZhbHVlPXtkZWZhdWx0U2VsZWN0aW9ufT5cbiAgICAgIDxvcHRpb24gaWQ9J25hdi1iYXItY2hhbm5lbC1zZWxlY3QtY2hhbm5lbC1vcHRpb24nPntjaGFubmVsTmFtZX08L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9e1ZJRVd9PlZpZXc8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9e0xPR09VVH0+TG9nb3V0PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJDaGFubmVsRHJvcGRvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9OYXZCYXJDaGFubmVsT3B0aW9uc0Ryb3Bkb3duL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGl2ZVN0YXR1c0JhciBmcm9tICdjb21wb25lbnRzL0FjdGl2ZVN0YXR1c0Jhcic7XG5pbXBvcnQgSW5hY3RpdmVTdGF0dXNCYXIgZnJvbSAnY29tcG9uZW50cy9JbmFjdGl2ZVN0YXR1c0Jhcic7XG5cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBiYXJzICAgICAgIDogW10sXG4gICAgICBpbmRleCAgICAgIDogMCxcbiAgICAgIGluY3JlbWVudGVyOiAxLFxuICAgIH07XG4gICAgdGhpcy5jcmVhdGVCYXJzID0gdGhpcy5jcmVhdGVCYXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydFByb2dyZXNzQmFyID0gdGhpcy5zdGFydFByb2dyZXNzQmFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhciA9IHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BQcm9ncmVzc0JhciA9IHRoaXMuc3RvcFByb2dyZXNzQmFyLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuY3JlYXRlQmFycygpO1xuICAgIHRoaXMuc3RhcnRQcm9ncmVzc0JhcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB0aGlzLnN0b3BQcm9ncmVzc0JhcigpO1xuICB9XG4gIGNyZWF0ZUJhcnMgKCkge1xuICAgIGNvbnN0IGJhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLnByb3BzLnNpemU7IGkrKykge1xuICAgICAgYmFycy5wdXNoKHtpc0FjdGl2ZTogZmFsc2V9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJhcnMgfSk7XG4gIH1cbiAgc3RhcnRQcm9ncmVzc0JhciAoKSB7XG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUHJvZ3Jlc3NCYXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgfTtcbiAgdXBkYXRlUHJvZ3Jlc3NCYXIgKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUuaW5kZXg7XG4gICAgbGV0IGluY3JlbWVudGVyID0gdGhpcy5zdGF0ZS5pbmNyZW1lbnRlcjtcbiAgICBsZXQgYmFycyA9IHRoaXMuc3RhdGUuYmFycztcbiAgICAvLyBmbGlwIGluY3JlbWVudGVyIGlmIG5lY2Vzc2FyeSwgdG8gc3RheSBpbiBib3VuZHNcbiAgICBpZiAoKGluZGV4IDwgMCkgfHwgKGluZGV4ID4gdGhpcy5wcm9wcy5zaXplKSkge1xuICAgICAgaW5jcmVtZW50ZXIgPSBpbmNyZW1lbnRlciAqIC0xO1xuICAgICAgaW5kZXggKz0gaW5jcmVtZW50ZXI7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSB0aGUgaW5kZXhlZCBiYXJcbiAgICBpZiAoaW5jcmVtZW50ZXIgPiAwKSB7XG4gICAgICBiYXJzW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhcnNbaW5kZXhdLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBpbmNyZW1lbnQgaW5kZXhcbiAgICBpbmRleCArPSBpbmNyZW1lbnRlcjtcbiAgICAvLyB1cGRhdGUgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJhcnMsXG4gICAgICBpbmNyZW1lbnRlcixcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9O1xuICBzdG9wUHJvZ3Jlc3NCYXIgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH07XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmJhcnMubWFwKChiYXIsIGluZGV4KSA9PiBiYXIuaXNBY3RpdmUgPyA8QWN0aXZlU3RhdHVzQmFyIGtleT17aW5kZXh9IC8+IDogPEluYWN0aXZlU3RhdHVzQmFyIGtleT17aW5kZXh9Lz4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQdWJsaXNoUHJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW1nU291cmNlICAgICAgIDogJycsXG4gICAgICBkZWZhdWx0VGh1bWJuYWlsOiAnL2Fzc2V0cy9pbWcvdmlkZW9fdGh1bWJfZGVmYXVsdC5wbmcnLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuc2V0UHJldmlld0ltYWdlU291cmNlKHRoaXMucHJvcHMuZmlsZSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMuZmlsZSAhPT0gdGhpcy5wcm9wcy5maWxlKSB7XG4gICAgICB0aGlzLnNldFByZXZpZXdJbWFnZVNvdXJjZShuZXdQcm9wcy5maWxlKTtcbiAgICB9XG4gICAgaWYgKG5ld1Byb3BzLnRodW1ibmFpbCAhPT0gdGhpcy5wcm9wcy50aHVtYm5haWwpIHtcbiAgICAgIGlmIChuZXdQcm9wcy50aHVtYm5haWwpIHtcbiAgICAgICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZShuZXdQcm9wcy50aHVtYm5haWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1nU291cmNlOiB0aGlzLnN0YXRlLmRlZmF1bHRUaHVtYm5haWx9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0UHJldmlld0ltYWdlU291cmNlRnJvbUZpbGUgKGZpbGUpIHtcbiAgICBjb25zdCBwcmV2aWV3UmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBwcmV2aWV3UmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgcHJldmlld1JlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbWdTb3VyY2U6IHByZXZpZXdSZWFkZXIucmVzdWx0fSk7XG4gICAgfTtcbiAgfVxuICBzZXRQcmV2aWV3SW1hZ2VTb3VyY2UgKGZpbGUpIHtcbiAgICBpZiAoZmlsZS50eXBlICE9PSAndmlkZW8vbXA0Jykge1xuICAgICAgdGhpcy5zZXRQcmV2aWV3SW1hZ2VTb3VyY2VGcm9tRmlsZShmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvcHMudGh1bWJuYWlsKSB7XG4gICAgICAgIHRoaXMuc2V0UHJldmlld0ltYWdlU291cmNlRnJvbUZpbGUodGhpcy5wcm9wcy50aHVtYm5haWwpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW1nU291cmNlOiB0aGlzLnN0YXRlLmRlZmF1bHRUaHVtYm5haWx9KTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGltZ1xuICAgICAgICBpZD0nZHJvcHpvbmUtcHJldmlldydcbiAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmltZ1NvdXJjZX1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmRpbVByZXZpZXcgPyAnZGltJyA6ICcnfVxuICAgICAgICBhbHQ9J3B1Ymxpc2ggcHJldmlldydcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcblxuUHVibGlzaFByZXZpZXcucHJvcFR5cGVzID0ge1xuICBkaW1QcmV2aWV3OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBmaWxlICAgICAgOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRodW1ibmFpbCA6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWJsaXNoUHJldmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1B1Ymxpc2hQcmV2aWV3L2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBVcmxNaWRkbGUgKHtwdWJsaXNoSW5DaGFubmVsLCBzZWxlY3RlZENoYW5uZWwsIGxvZ2dlZEluQ2hhbm5lbE5hbWUsIGxvZ2dlZEluQ2hhbm5lbFNob3J0SWR9KSB7XG4gIGlmIChwdWJsaXNoSW5DaGFubmVsKSB7XG4gICAgaWYgKHNlbGVjdGVkQ2hhbm5lbCA9PT0gbG9nZ2VkSW5DaGFubmVsTmFtZSkge1xuICAgICAgcmV0dXJuIDxzcGFuIGlkPSd1cmwtY2hhbm5lbCcgY2xhc3NOYW1lPSd1cmwtdGV4dC0tc2Vjb25kYXJ5Jz57bG9nZ2VkSW5DaGFubmVsTmFtZX06e2xvZ2dlZEluQ2hhbm5lbFNob3J0SWR9IC88L3NwYW4+O1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gaWQ9J3VybC1jaGFubmVsLXBsYWNlaG9sZGVyJyBjbGFzc05hbWU9J3VybC10ZXh0LS1zZWNvbmRhcnkgdG9vbHRpcCc+QGNoYW5uZWw8c3BhblxuICAgICAgY2xhc3NOYW1lPSd0b29sdGlwLXRleHQnPlNlbGVjdCBhIGNoYW5uZWwgYmVsb3c8L3NwYW4+IC88L3NwYW4+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPHNwYW4gaWQ9J3VybC1uby1jaGFubmVsLXBsYWNlaG9sZGVyJyBjbGFzc05hbWU9J3VybC10ZXh0LS1zZWNvbmRhcnkgdG9vbHRpcCc+eHl6PHNwYW4gY2xhc3NOYW1lPSd0b29sdGlwLXRleHQnPlRoaXMgd2lsbCBiZSBhIHJhbmRvbSBpZDwvc3Bhbj4gLzwvc3Bhbj5cbiAgKTtcbn1cblxuVXJsTWlkZGxlLnByb3BUeXBlcyA9IHtcbiAgcHVibGlzaEluQ2hhbm5lbCAgICAgIDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9nZ2VkSW5DaGFubmVsTmFtZSAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9nZ2VkSW5DaGFubmVsU2hvcnRJZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVybE1pZGRsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1B1Ymxpc2hVcmxNaWRkbGVEaXNwbGF5L2luZGV4LmpzeCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzaXRlIH0pID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0RGVzY3JpcHRpb24sIGRlZmF1bHRUaHVtYm5haWwsIGRlc2NyaXB0aW9uOiBzaXRlRGVzY3JpcHRpb24sIGhvc3Q6IHNpdGVIb3N0LCB0aXRsZTogc2l0ZVRpdGxlLCB0d2l0dGVyOiBzaXRlVHdpdHRlciB9ID0gc2l0ZTtcbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0RGVzY3JpcHRpb24sXG4gICAgZGVmYXVsdFRodW1ibmFpbCxcbiAgICBzaXRlRGVzY3JpcHRpb24sXG4gICAgc2l0ZUhvc3QsXG4gICAgc2l0ZVRpdGxlLFxuICAgIHNpdGVUd2l0dGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFZpZXcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvU0VPL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQXNzZXRQcmV2aWV3ID0gKHsgZGVmYXVsdFRodW1ibmFpbCwgY2xhaW1EYXRhOiB7IG5hbWUsIGNsYWltSWQsIGZpbGVFeHQsIGNvbnRlbnRUeXBlLCB0aHVtYm5haWwgfSB9KSA9PiB7XG4gIGNvbnN0IGRpcmVjdFNvdXJjZUxpbmsgPSBgJHtjbGFpbUlkfS8ke25hbWV9LiR7ZmlsZUV4dH1gO1xuICBjb25zdCBzaG93VXJsTGluayA9IGAvJHtjbGFpbUlkfS8ke25hbWV9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYXNzZXQtaG9sZGVyJz5cbiAgICAgIDxMaW5rIHRvPXtzaG93VXJsTGlua30gPlxuICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9qcGVnJzpcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlL2pwZyc6XG4gICAgICAgICAgICBjYXNlICdpbWFnZS9wbmcnOlxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UvZ2lmJzpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhc3NldC1wcmV2aWV3J31cbiAgICAgICAgICAgICAgICAgIHNyYz17ZGlyZWN0U291cmNlTGlua31cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSAndmlkZW8vbXA0JzpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydhc3NldC1wcmV2aWV3IHZpZGVvJ31cbiAgICAgICAgICAgICAgICAgIHNyYz17dGh1bWJuYWlsIHx8IGRlZmF1bHRUaHVtYm5haWx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHA+dW5zdXBwb3J0ZWQgZmlsZSB0eXBlPC9wPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX1cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0UHJldmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Fzc2V0UHJldmlldy92aWV3LmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBjcmVhdGVQYWdlVGl0bGUgfSBmcm9tICd1dGlscy9wYWdlVGl0bGUnO1xuaW1wb3J0IHsgY3JlYXRlTWV0YVRhZ3MgfSBmcm9tICd1dGlscy9tZXRhVGFncyc7XG5pbXBvcnQgeyBjcmVhdGVDYW5vbmljYWxMaW5rIH0gZnJvbSAndXRpbHMvY2Fub25pY2FsTGluayc7XG5cbmNsYXNzIFNFTyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgLy8gcHJvcHMgZnJvbSBzdGF0ZVxuICAgIGNvbnN0IHsgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsLCBzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIHByb3BzIGZyb20gcGFyZW50XG4gICAgY29uc3QgeyBhc3NldCwgY2hhbm5lbCwgcGFnZVVyaSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBwYWdlVGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY3JlYXRlIHBhZ2UgdGl0bGUsIHRhZ3MsIGFuZCBjYW5vbmljYWwgbGlua1xuICAgIHBhZ2VUaXRsZSA9IGNyZWF0ZVBhZ2VUaXRsZShzaXRlVGl0bGUsIHBhZ2VUaXRsZSk7XG4gICAgY29uc3QgbWV0YVRhZ3MgPSBjcmVhdGVNZXRhVGFncyhzaXRlRGVzY3JpcHRpb24sIHNpdGVIb3N0LCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyLCBhc3NldCwgY2hhbm5lbCwgZGVmYXVsdERlc2NyaXB0aW9uLCBkZWZhdWx0VGh1bWJuYWlsKTtcbiAgICBjb25zdCBjYW5vbmljYWxMaW5rID0gY3JlYXRlQ2Fub25pY2FsTGluayhhc3NldCwgY2hhbm5lbCwgcGFnZVVyaSwgc2l0ZUhvc3QpO1xuICAgIC8vIHJlbmRlciByZXN1bHRzXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWxtZXRcbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgbWV0YT17bWV0YVRhZ3N9XG4gICAgICAgIGxpbms9e1t7cmVsOiAnY2Fub25pY2FsJywgaHJlZjogY2Fub25pY2FsTGlua31dfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuXG5TRU8ucHJvcFR5cGVzID0ge1xuICBwYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZ2VVcmkgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hhbm5lbCAgOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhc3NldCAgICA6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTRU87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9TRU8vdmlldy5qc3giLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndoYXR3Zy1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndoYXR3Zy1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IGxzdGF0U3luYywgcmVhZGRpclN5bmMgfSA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCB7IGpvaW4gfSA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZXhwb3J0IGNvbnN0IGdldFN1YkRpcmVjdG9yeU5hbWVzID0gKHJvb3QpID0+IHtcbiAgcmV0dXJuIHJlYWRkaXJTeW5jKHJvb3QpXG4gICAgLmZpbHRlcihuYW1lID0+IHtcbiAgICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihyb290LCBuYW1lKTtcbiAgICAgIHJldHVybiBsc3RhdFN5bmMoZnVsbFBhdGgpLmlzRGlyZWN0b3J5KCk7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYnVpbGQvZ2V0Rm9sZGVyTmFtZXMuanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vXCI6IDQsXG5cdFwiLi9BY3RpdmVTdGF0dXNCYXJcIjogMSxcblx0XCIuL0FjdGl2ZVN0YXR1c0Jhci9cIjogMSxcblx0XCIuL0FjdGl2ZVN0YXR1c0Jhci9pbmRleFwiOiAxLFxuXHRcIi4vQWN0aXZlU3RhdHVzQmFyL2luZGV4LmpzeFwiOiAxLFxuXHRcIi4vQXNzZXRQcmV2aWV3XCI6IDUsXG5cdFwiLi9Bc3NldFByZXZpZXcvXCI6IDUsXG5cdFwiLi9Bc3NldFByZXZpZXcvaW5kZXhcIjogNSxcblx0XCIuL0Fzc2V0UHJldmlldy9pbmRleC5qc1wiOiA1LFxuXHRcIi4vQXNzZXRQcmV2aWV3L3ZpZXdcIjogMTQsXG5cdFwiLi9Bc3NldFByZXZpZXcvdmlldy5qc3hcIjogMTQsXG5cdFwiLi9FeHBhbmRpbmdUZXh0QXJlYVwiOiA2LFxuXHRcIi4vRXhwYW5kaW5nVGV4dEFyZWEvXCI6IDYsXG5cdFwiLi9FeHBhbmRpbmdUZXh0QXJlYS9pbmRleFwiOiA2LFxuXHRcIi4vRXhwYW5kaW5nVGV4dEFyZWEvaW5kZXguanN4XCI6IDYsXG5cdFwiLi9HQUxpc3RlbmVyXCI6IDcsXG5cdFwiLi9HQUxpc3RlbmVyL1wiOiA3LFxuXHRcIi4vR0FMaXN0ZW5lci9pbmRleFwiOiA3LFxuXHRcIi4vR0FMaXN0ZW5lci9pbmRleC5qc3hcIjogNyxcblx0XCIuL0luYWN0aXZlU3RhdHVzQmFyXCI6IDMsXG5cdFwiLi9JbmFjdGl2ZVN0YXR1c0Jhci9cIjogMyxcblx0XCIuL0luYWN0aXZlU3RhdHVzQmFyL2luZGV4XCI6IDMsXG5cdFwiLi9JbmFjdGl2ZVN0YXR1c0Jhci9pbmRleC5qc3hcIjogMyxcblx0XCIuL0xvZ29cIjogOCxcblx0XCIuL0xvZ28vXCI6IDgsXG5cdFwiLi9Mb2dvL2luZGV4XCI6IDgsXG5cdFwiLi9Mb2dvL2luZGV4LmpzeFwiOiA4LFxuXHRcIi4vTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93blwiOiA5LFxuXHRcIi4vTmF2QmFyQ2hhbm5lbE9wdGlvbnNEcm9wZG93bi9cIjogOSxcblx0XCIuL05hdkJhckNoYW5uZWxPcHRpb25zRHJvcGRvd24vaW5kZXhcIjogOSxcblx0XCIuL05hdkJhckNoYW5uZWxPcHRpb25zRHJvcGRvd24vaW5kZXguanN4XCI6IDksXG5cdFwiLi9Qcm9ncmVzc0JhclwiOiAxMCxcblx0XCIuL1Byb2dyZXNzQmFyL1wiOiAxMCxcblx0XCIuL1Byb2dyZXNzQmFyL2luZGV4XCI6IDEwLFxuXHRcIi4vUHJvZ3Jlc3NCYXIvaW5kZXguanN4XCI6IDEwLFxuXHRcIi4vUHVibGlzaFByZXZpZXdcIjogMTEsXG5cdFwiLi9QdWJsaXNoUHJldmlldy9cIjogMTEsXG5cdFwiLi9QdWJsaXNoUHJldmlldy9pbmRleFwiOiAxMSxcblx0XCIuL1B1Ymxpc2hQcmV2aWV3L2luZGV4LmpzeFwiOiAxMSxcblx0XCIuL1B1Ymxpc2hVcmxNaWRkbGVEaXNwbGF5XCI6IDEyLFxuXHRcIi4vUHVibGlzaFVybE1pZGRsZURpc3BsYXkvXCI6IDEyLFxuXHRcIi4vUHVibGlzaFVybE1pZGRsZURpc3BsYXkvaW5kZXhcIjogMTIsXG5cdFwiLi9QdWJsaXNoVXJsTWlkZGxlRGlzcGxheS9pbmRleC5qc3hcIjogMTIsXG5cdFwiLi9TRU9cIjogMTMsXG5cdFwiLi9TRU8vXCI6IDEzLFxuXHRcIi4vU0VPL2luZGV4XCI6IDEzLFxuXHRcIi4vU0VPL2luZGV4LmpzXCI6IDEzLFxuXHRcIi4vU0VPL3ZpZXdcIjogMTYsXG5cdFwiLi9TRU8vdmlldy5qc3hcIjogMTYsXG5cdFwiLi9pbmRleFwiOiA0LFxuXHRcIi4vaW5kZXguanNcIjogNFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2NvbXBvbmVudHMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1nYVwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBTaXRlQ29uZmlnICgpIHtcbiAgdGhpcy5hbmFseXRpY3MgPSB7XG4gICAgZ29vZ2xlSWQ6ICdkZWZhdWx0JyxcbiAgfTtcbiAgdGhpcy5hc3NldERlZmF1bHRzID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnQW4gYXNzZXQgcHVibGlzaGVkIG9uIFNwZWUuY2gnLFxuICAgIHRodW1ibmFpbCAgOiAnaHR0cHM6Ly9zcGVlLmNoL2Fzc2V0cy9pbWcvdmlkZW9fdGh1bWJfZGVmYXVsdC5wbmcnLFxuICAgIHRpdGxlICAgICAgOiAnU3BlZS5jaCcsXG4gIH07XG4gIHRoaXMuYXV0aCA9IHtcbiAgICBzZXNzaW9uS2V5OiAnZGVmYXVsdCcsXG4gIH07XG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50cyA9IHtcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBjb250YWluZXJzOiB7fSxcbiAgICBwYWdlcyAgICAgOiB7fSxcbiAgfTtcbiAgdGhpcy5kZXRhaWxzID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnT3Blbi1zb3VyY2UsIGRlY2VudHJhbGl6ZWQgaW1hZ2UgYW5kIHZpZGVvIHNoYXJpbmcuJyxcbiAgICBob3N0ICAgICAgIDogJ2RlZmF1bHQnLFxuICAgIHBvcnQgICAgICAgOiAzMDAwLFxuICAgIHRpdGxlICAgICAgOiAnRGVmYXVsdCBUaXRsZScsXG4gICAgdHdpdHRlciAgICA6ICdAc3BlZV9jaCcsXG4gIH07XG4gIHRoaXMubG9jYWxQdWJsaWNGb2xkZXIgPSBudWxsO1xuICB0aGlzLnB1Ymxpc2hpbmcgPSB7XG4gICAgYWRkaXRpb25hbENsYWltQWRkcmVzc2VzOiBbXSxcbiAgICBkaXNhYmxlZCAgICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgIGRpc2FibGVkTWVzc2FnZSAgICAgICAgIDogJ1BsZWFzZSBjaGVjayBiYWNrIHNvb24uJyxcbiAgICBwcmltYXJ5Q2xhaW1BZGRyZXNzICAgICA6ICdkZWZhdWx0JyxcbiAgICB0aHVtYm5haWxDaGFubmVsICAgICAgICA6ICdkZWZhdWx0JyxcbiAgICB0aHVtYm5haWxDaGFubmVsSWQgICAgICA6ICdkZWZhdWx0JyxcbiAgICB1cGxvYWREaXJlY3RvcnkgICAgICAgICA6ICcvaG9tZS9sYnJ5L1VwbG9hZHMnLFxuICB9O1xuICB0aGlzLmNvbmZpZ3VyZSA9IChjb25maWcpID0+IHtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdObyBzaXRlIGNvbmZpZyByZWNlaXZlZC4nKTtcbiAgICB9XG4gICAgY29uc3QgeyBhbmFseXRpY3MsIGFzc2V0RGVmYXVsdHMsIGF1dGgsIGN1c3RvbUNvbXBvbmVudHMsIGRldGFpbHMsIGxvY2FsUHVibGljRm9sZGVyLCBwdWJsaXNoaW5nIH0gPSBjb25maWc7XG4gICAgdGhpcy5hbmFseXRpY3MgPSBhbmFseXRpY3M7XG4gICAgdGhpcy5hc3NldERlZmF1bHRzID0gYXNzZXREZWZhdWx0cztcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgdGhpcy5sb2NhbFB1YmxpY0ZvbGRlciA9IGxvY2FsUHVibGljRm9sZGVyO1xuICAgIHRoaXMucHVibGlzaGluZyA9IHB1Ymxpc2hpbmc7XG4gICAgdGhpcy5jdXN0b21Db21wb25lbnRzID0gY3VzdG9tQ29tcG9uZW50cztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNpdGVDb25maWcoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9zaXRlQ29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBjcmVhdGVQYWdlVGl0bGUgPSAoc2l0ZVRpdGxlLCBwYWdlVGl0bGUpID0+IHtcbiAgaWYgKCFwYWdlVGl0bGUpIHtcbiAgICByZXR1cm4gYCR7c2l0ZVRpdGxlfWA7XG4gIH1cbiAgcmV0dXJuIGAke3NpdGVUaXRsZX0gLSAke3BhZ2VUaXRsZX1gO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9wYWdlVGl0bGUuanMiLCJjb25zdCBkZXRlcm1pbmVPZ1RodW1ibmFpbENvbnRlbnRUeXBlID0gKHRodW1ibmFpbCkgPT4ge1xuICBpZiAodGh1bWJuYWlsKSB7XG4gICAgY29uc3QgZmlsZUV4dCA9IHRodW1ibmFpbC5zdWJzdHJpbmcodGh1bWJuYWlsLmxhc3RJbmRleE9mKCcuJykpO1xuICAgIHN3aXRjaCAoZmlsZUV4dCkge1xuICAgICAgY2FzZSAnanBlZyc6XG4gICAgICBjYXNlICdqcGcnOlxuICAgICAgICByZXR1cm4gJ2ltYWdlL2pwZWcnO1xuICAgICAgY2FzZSAncG5nJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9wbmcnO1xuICAgICAgY2FzZSAnZ2lmJzpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9naWYnO1xuICAgICAgY2FzZSAnbXA0JzpcbiAgICAgICAgcmV0dXJuICd2aWRlby9tcDQnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdpbWFnZS9qcGVnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuY29uc3QgY3JlYXRlQmFzaWNNZXRhVGFncyA9IChzaXRlSG9zdCwgc2l0ZURlc2NyaXB0aW9uLCBzaXRlVGl0bGUsIHNpdGVUd2l0dGVyKSA9PiB7XG4gIHJldHVybiBbXG4gICAge3Byb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBzaXRlVGl0bGV9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IHNpdGVIb3N0fSxcbiAgICB7cHJvcGVydHk6ICdvZzpzaXRlX25hbWUnLCBjb250ZW50OiBzaXRlVGl0bGV9LFxuICAgIHtwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogc2l0ZURlc2NyaXB0aW9ufSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOnNpdGUnLCBjb250ZW50OiBzaXRlVHdpdHRlcn0sXG4gICAge3Byb3BlcnR5OiAndHdpdHRlcjpjYXJkJywgY29udGVudDogJ3N1bW1hcnknfSxcbiAgXTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoYW5uZWxNZXRhVGFncyA9IChzaXRlVGl0bGUsIHNpdGVIb3N0LCBzaXRlVHdpdHRlciwgY2hhbm5lbCkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxvbmdJZCB9ID0gY2hhbm5lbDtcbiAgcmV0dXJuIFtcbiAgICB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IGAke25hbWV9IG9uICR7c2l0ZVRpdGxlfWB9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6IGAke3NpdGVIb3N0fS8ke25hbWV9OiR7bG9uZ0lkfWB9LFxuICAgIHtwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsIGNvbnRlbnQ6IHNpdGVUaXRsZX0sXG4gICAge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiBgJHtuYW1lfSwgYSBjaGFubmVsIG9uICR7c2l0ZVRpdGxlfWB9LFxuICAgIHtwcm9wZXJ0eTogJ3R3aXR0ZXI6c2l0ZScsIGNvbnRlbnQ6IHNpdGVUd2l0dGVyfSxcbiAgICB7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeSd9LFxuICBdO1xufTtcblxuY29uc3QgY3JlYXRlQXNzZXRNZXRhVGFncyA9IChzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciwgYXNzZXQsIGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCkgPT4ge1xuICBjb25zdCB7IGNsYWltRGF0YSB9ID0gYXNzZXQ7XG4gIGNvbnN0IHsgY29udGVudFR5cGUgfSA9IGNsYWltRGF0YTtcbiAgY29uc3QgZW1iZWRVcmwgPSBgJHtzaXRlSG9zdH0vJHtjbGFpbURhdGEuY2xhaW1JZH0vJHtjbGFpbURhdGEubmFtZX1gO1xuICBjb25zdCBzaG93VXJsID0gYCR7c2l0ZUhvc3R9LyR7Y2xhaW1EYXRhLmNsYWltSWR9LyR7Y2xhaW1EYXRhLm5hbWV9YDtcbiAgY29uc3Qgc291cmNlID0gYCR7c2l0ZUhvc3R9LyR7Y2xhaW1EYXRhLmNsYWltSWR9LyR7Y2xhaW1EYXRhLm5hbWV9LiR7Y2xhaW1EYXRhLmZpbGVFeHR9YDtcbiAgY29uc3Qgb2dUaXRsZSA9IGNsYWltRGF0YS50aXRsZSB8fCBjbGFpbURhdGEubmFtZTtcbiAgY29uc3Qgb2dEZXNjcmlwdGlvbiA9IGNsYWltRGF0YS5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb247XG4gIGNvbnN0IG9nVGh1bWJuYWlsQ29udGVudFR5cGUgPSBkZXRlcm1pbmVPZ1RodW1ibmFpbENvbnRlbnRUeXBlKGNsYWltRGF0YS50aHVtYm5haWwpO1xuICBjb25zdCBvZ1RodW1ibmFpbCA9IGNsYWltRGF0YS50aHVtYm5haWwgfHwgZGVmYXVsdFRodW1ibmFpbDtcbiAgY29uc3QgbWV0YVRhZ3MgPSBbXG4gICAge3Byb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiBvZ1RpdGxlfSxcbiAgICB7cHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiBzaG93VXJsfSxcbiAgICB7cHJvcGVydHk6ICdvZzpzaXRlX25hbWUnLCBjb250ZW50OiBzaXRlVGl0bGV9LFxuICAgIHtwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogb2dEZXNjcmlwdGlvbn0sXG4gICAge3Byb3BlcnR5OiAnb2c6aW1hZ2U6d2lkdGgnLCBjb250ZW50OiA2MDB9LFxuICAgIHtwcm9wZXJ0eTogJ29nOmltYWdlOmhlaWdodCcsIGNvbnRlbnQ6IDMxNX0sXG4gICAge3Byb3BlcnR5OiAndHdpdHRlcjpzaXRlJywgY29udGVudDogc2l0ZVR3aXR0ZXJ9LFxuICBdO1xuICBpZiAoY29udGVudFR5cGUgPT09ICd2aWRlby9tcDQnIHx8IGNvbnRlbnRUeXBlID09PSAndmlkZW8vd2VibScpIHtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOnZpZGVvJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzp2aWRlbzpzZWN1cmVfdXJsJywgY29udGVudDogc291cmNlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzp2aWRlbzp0eXBlJywgY29udGVudDogY29udGVudFR5cGV9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogb2dUaHVtYm5haWx9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ29nOmltYWdlOnR5cGUnLCBjb250ZW50OiBvZ1RodW1ibmFpbENvbnRlbnRUeXBlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3ZpZGVvJ30pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpjYXJkJywgY29udGVudDogJ3BsYXllcid9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6cGxheWVyJywgY29udGVudDogZW1iZWRVcmx9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6cGxheWVyOndpZHRoJywgY29udGVudDogNjAwfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOnRleHQ6cGxheWVyX3dpZHRoJywgY29udGVudDogNjAwfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOnBsYXllcjpoZWlnaHQnLCBjb250ZW50OiAzMzd9KTtcbiAgICBtZXRhVGFncy5wdXNoKHtwcm9wZXJ0eTogJ3R3aXR0ZXI6cGxheWVyOnN0cmVhbScsIGNvbnRlbnQ6IHNvdXJjZX0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAndHdpdHRlcjpwbGF5ZXI6c3RyZWFtOmNvbnRlbnRfdHlwZScsIGNvbnRlbnQ6IGNvbnRlbnRUeXBlfSk7XG4gIH0gZWxzZSB7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IHNvdXJjZX0pO1xuICAgIG1ldGFUYWdzLnB1c2goe3Byb3BlcnR5OiAnb2c6aW1hZ2U6dHlwZScsIGNvbnRlbnQ6IGNvbnRlbnRUeXBlfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ2FydGljbGUnfSk7XG4gICAgbWV0YVRhZ3MucHVzaCh7cHJvcGVydHk6ICd0d2l0dGVyOmNhcmQnLCBjb250ZW50OiAnc3VtbWFyeV9sYXJnZV9pbWFnZSd9KTtcbiAgfVxuICByZXR1cm4gbWV0YVRhZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTWV0YVRhZ3MgPSAoc2l0ZURlc2NyaXB0aW9uLCBzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciwgYXNzZXQsIGNoYW5uZWwsIGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCkgPT4ge1xuICBpZiAoYXNzZXQpIHtcbiAgICByZXR1cm4gY3JlYXRlQXNzZXRNZXRhVGFncyhzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciwgYXNzZXQsIGRlZmF1bHREZXNjcmlwdGlvbiwgZGVmYXVsdFRodW1ibmFpbCk7XG4gIH07XG4gIGlmIChjaGFubmVsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYW5uZWxNZXRhVGFncyhzaXRlSG9zdCwgc2l0ZVRpdGxlLCBzaXRlVHdpdHRlciwgY2hhbm5lbCk7XG4gIH07XG4gIHJldHVybiBjcmVhdGVCYXNpY01ldGFUYWdzKHNpdGVEZXNjcmlwdGlvbiwgc2l0ZUhvc3QsIHNpdGVUaXRsZSwgc2l0ZVR3aXR0ZXIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlscy9tZXRhVGFncy5qcyIsImNvbnN0IGNyZWF0ZUJhc2ljQ2Fub25pY2FsTGluayA9IChwYWdlLCBzaXRlSG9zdCkgPT4ge1xuICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7cGFnZX1gO1xufTtcblxuY29uc3QgY3JlYXRlQXNzZXRDYW5vbmljYWxMaW5rID0gKGFzc2V0LCBzaXRlSG9zdCkgPT4ge1xuICBsZXQgY2hhbm5lbE5hbWUsIGNlcnRpZmljYXRlSWQsIG5hbWUsIGNsYWltSWQ7XG4gIGlmIChhc3NldC5jbGFpbURhdGEpIHtcbiAgICAoeyBjaGFubmVsTmFtZSwgY2VydGlmaWNhdGVJZCwgbmFtZSwgY2xhaW1JZCB9ID0gYXNzZXQuY2xhaW1EYXRhKTtcbiAgfTtcbiAgaWYgKGNoYW5uZWxOYW1lKSB7XG4gICAgcmV0dXJuIGAke3NpdGVIb3N0fS8ke2NoYW5uZWxOYW1lfToke2NlcnRpZmljYXRlSWR9LyR7bmFtZX1gO1xuICB9O1xuICByZXR1cm4gYCR7c2l0ZUhvc3R9LyR7Y2xhaW1JZH0vJHtuYW1lfWA7XG59O1xuXG5jb25zdCBjcmVhdGVDaGFubmVsQ2Fub25pY2FsTGluayA9IChjaGFubmVsLCBzaXRlSG9zdCkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGxvbmdJZCB9ID0gY2hhbm5lbDtcbiAgcmV0dXJuIGAke3NpdGVIb3N0fS8ke25hbWV9OiR7bG9uZ0lkfWA7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2Fub25pY2FsTGluayA9IChhc3NldCwgY2hhbm5lbCwgcGFnZSwgc2l0ZUhvc3QpID0+IHtcbiAgaWYgKGFzc2V0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFzc2V0Q2Fub25pY2FsTGluayhhc3NldCwgc2l0ZUhvc3QpO1xuICB9XG4gIGlmIChjaGFubmVsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYW5uZWxDYW5vbmljYWxMaW5rKGNoYW5uZWwsIHNpdGVIb3N0KTtcbiAgfVxuICByZXR1cm4gY3JlYXRlQmFzaWNDYW5vbmljYWxMaW5rKHBhZ2UsIHNpdGVIb3N0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdXRpbHMvY2Fub25pY2FsTGluay5qcyJdLCJzb3VyY2VSb290IjoiIn0=