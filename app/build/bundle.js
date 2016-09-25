webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phoneService = __webpack_require__(10);

var _phoneService2 = _interopRequireDefault(_phoneService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $name = 'core.phone';

angular.module($name, ['ngResource']).factory('Phone', _phoneService2.default);

exports.default = $name;

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function (input) {
    return input ? '✓' : '✘';
  };
};

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _appConfig = __webpack_require__(8);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _appAnimations = __webpack_require__(7);

var _appAnimations2 = _interopRequireDefault(_appAnimations);

var _coreModule = __webpack_require__(9);

var _coreModule2 = _interopRequireDefault(_coreModule);

var _phoneDetailModule = __webpack_require__(12);

var _phoneDetailModule2 = _interopRequireDefault(_phoneDetailModule);

var _phoneListModule = __webpack_require__(14);

var _phoneListModule2 = _interopRequireDefault(_phoneListModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('phonecatApp', ['ngAnimate', 'ngRoute', _coreModule2.default, _phoneDetailModule2.default, _phoneListModule2.default]).animation('.phone', _appAnimations2.default).config(_appConfig2.default);

/***/ },
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animateIn = function animateIn(element, className, done) {
  if (className !== 'selected') return;

  element.css({
    display: 'block',
    position: 'absolute',
    top: 500,
    left: 0
  }).animate({
    top: 0
  }, done);

  return function animateInEnd(wasCanceled) {
    if (wasCanceled) element.stop();
  };
};

var animateOut = function animateOut(element, className, done) {
  if (className !== 'selected') return;

  element.css({
    position: 'absolute',
    top: 0,
    left: 0
  }).animate({
    top: -500
  }, done);

  return function animateOutEnd(wasCanceled) {
    if (wasCanceled) element.stop();
  };
};

exports.default = function () {
  return {
    addClass: animateIn,
    removeClass: animateOut
  };
};

/***/ },
/* 8 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/phones', {
    template: '<phone-list></phone-list>'
  }).when('/phones/:phoneId', {
    template: '<phone-detail></phone-detail>'
  }).otherwise('/phones');
};

config.$inject = ['$locationProvider', '$routeProvider'];

exports.default = config;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phoneModule = __webpack_require__(1);

var _phoneModule2 = _interopRequireDefault(_phoneModule);

var _checkmarkFilter = __webpack_require__(2);

var _checkmarkFilter2 = _interopRequireDefault(_checkmarkFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $name = 'core';

angular.module($name, [_phoneModule2.default]).filter('checkmark', _checkmarkFilter2.default);

exports.default = $name;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = function factory($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: { phoneId: 'phones' },
      isArray: true
    }
  });
};

factory.$inject = ['$resource'];

exports.default = factory;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phoneDetailTemplate = __webpack_require__(15);

var _phoneDetailTemplate2 = _interopRequireDefault(_phoneDetailTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneDetailController = function () {
  function PhoneDetailController($routeParams, Phone) {
    var _this = this;

    _classCallCheck(this, PhoneDetailController);

    var phoneId = $routeParams.phoneId;


    this.phone = Phone.get({ phoneId: phoneId }, function (_ref) {
      var _ref$images = _slicedToArray(_ref.images, 1);

      var imageUrl = _ref$images[0];

      _this.setImage(imageUrl);
    });
  }

  _createClass(PhoneDetailController, [{
    key: 'setImage',
    value: function setImage(imageUrl) {
      this.mainImageUrl = imageUrl;
    }
  }]);

  return PhoneDetailController;
}();

;

exports.default = {
  template: _phoneDetailTemplate2.default,
  controller: PhoneDetailController
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _phoneModule = __webpack_require__(1);

var _phoneModule2 = _interopRequireDefault(_phoneModule);

var _phoneDetailComponent = __webpack_require__(11);

var _phoneDetailComponent2 = _interopRequireDefault(_phoneDetailComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $name = 'phoneDetail';

_angular2.default.module($name, ['ngRoute', _phoneModule2.default]).component($name, {
  template: _phoneDetailComponent2.default.template,
  controller: _phoneDetailComponent2.default.controller
});

exports.default = $name;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _phoneListTemplate = __webpack_require__(16);

var _phoneListTemplate2 = _interopRequireDefault(_phoneListTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhoneListController = function PhoneListController(Phone) {
  _classCallCheck(this, PhoneListController);

  this.phones = Phone.query();
  this.orderProp = 'age';
};

PhoneListController.$inject = ['Phone']
exports.default = {
  template: _phoneListTemplate2.default,
  controller: PhoneListController
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _phoneModule = __webpack_require__(1);

var _phoneModule2 = _interopRequireDefault(_phoneModule);

var _phoneListComponent = __webpack_require__(13);

var _phoneListComponent2 = _interopRequireDefault(_phoneListComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $name = 'phoneList';

_angular2.default.module($name, [_phoneModule2.default]).component($name, {
  template: _phoneListComponent2.default.template,
  controller: _phoneListComponent2.default.controller
});

exports.default = $name;

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = "<div class=\"phone-images\">\r\n  <img ng-src=\"{{img}}\" class=\"phone\"\r\n      ng-class=\"{selected: img === $ctrl.mainImageUrl}\"\r\n      ng-repeat=\"img in $ctrl.phone.images\" />\r\n</div>\r\n\r\n<h1>{{$ctrl.phone.name}}</h1>\r\n\r\n<p>{{$ctrl.phone.description}}</p>\r\n\r\n<ul class=\"phone-thumbs\">\r\n  <li ng-repeat=\"img in $ctrl.phone.images\">\r\n    <img ng-src=\"{{img}}\" ng-click=\"$ctrl.setImage(img)\" />\r\n  </li>\r\n</ul>\r\n\r\n<ul class=\"specs\">\r\n  <li>\r\n    <span>Availability and Networks</span>\r\n    <dl>\r\n      <dt>Availability</dt>\r\n      <dd ng-repeat=\"availability in $ctrl.phone.availability\">{{availability}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Battery</span>\r\n    <dl>\r\n      <dt>Type</dt>\r\n      <dd>{{$ctrl.phone.battery.type}}</dd>\r\n      <dt>Talk Time</dt>\r\n      <dd>{{$ctrl.phone.battery.talkTime}}</dd>\r\n      <dt>Standby time (max)</dt>\r\n      <dd>{{$ctrl.phone.battery.standbyTime}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Storage and Memory</span>\r\n    <dl>\r\n      <dt>RAM</dt>\r\n      <dd>{{$ctrl.phone.storage.ram}}</dd>\r\n      <dt>Internal Storage</dt>\r\n      <dd>{{$ctrl.phone.storage.flash}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Connectivity</span>\r\n    <dl>\r\n      <dt>Network Support</dt>\r\n      <dd>{{$ctrl.phone.connectivity.cell}}</dd>\r\n      <dt>WiFi</dt>\r\n      <dd>{{$ctrl.phone.connectivity.wifi}}</dd>\r\n      <dt>Bluetooth</dt>\r\n      <dd>{{$ctrl.phone.connectivity.bluetooth}}</dd>\r\n      <dt>Infrared</dt>\r\n      <dd>{{$ctrl.phone.connectivity.infrared | checkmark}}</dd>\r\n      <dt>GPS</dt>\r\n      <dd>{{$ctrl.phone.connectivity.gps | checkmark}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Android</span>\r\n    <dl>\r\n      <dt>OS Version</dt>\r\n      <dd>{{$ctrl.phone.android.os}}</dd>\r\n      <dt>UI</dt>\r\n      <dd>{{$ctrl.phone.android.ui}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Size and Weight</span>\r\n    <dl>\r\n      <dt>Dimensions</dt>\r\n      <dd ng-repeat=\"dim in $ctrl.phone.sizeAndWeight.dimensions\">{{dim}}</dd>\r\n      <dt>Weight</dt>\r\n      <dd>{{$ctrl.phone.sizeAndWeight.weight}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Display</span>\r\n    <dl>\r\n      <dt>Screen size</dt>\r\n      <dd>{{$ctrl.phone.display.screenSize}}</dd>\r\n      <dt>Screen resolution</dt>\r\n      <dd>{{$ctrl.phone.display.screenResolution}}</dd>\r\n      <dt>Touch screen</dt>\r\n      <dd>{{$ctrl.phone.display.touchScreen | checkmark}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Hardware</span>\r\n    <dl>\r\n      <dt>CPU</dt>\r\n      <dd>{{$ctrl.phone.hardware.cpu}}</dd>\r\n      <dt>USB</dt>\r\n      <dd>{{$ctrl.phone.hardware.usb}}</dd>\r\n      <dt>Audio / headphone jack</dt>\r\n      <dd>{{$ctrl.phone.hardware.audioJack}}</dd>\r\n      <dt>FM Radio</dt>\r\n      <dd>{{$ctrl.phone.hardware.fmRadio | checkmark}}</dd>\r\n      <dt>Accelerometer</dt>\r\n      <dd>{{$ctrl.phone.hardware.accelerometer | checkmark}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Camera</span>\r\n    <dl>\r\n      <dt>Primary</dt>\r\n      <dd>{{$ctrl.phone.camera.primary}}</dd>\r\n      <dt>Features</dt>\r\n      <dd>{{$ctrl.phone.camera.features.join(', ')}}</dd>\r\n    </dl>\r\n  </li>\r\n  <li>\r\n    <span>Additional Features</span>\r\n    <dd>{{$ctrl.phone.additionalFeatures}}</dd>\r\n  </li>\r\n</ul>\r\n"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <!--Sidebar content-->\r\n\r\n      <p>\r\n        Search:\r\n        <input ng-model=\"$ctrl.query\" />\r\n      </p>\r\n\r\n      <p>\r\n        Sort by:\r\n        <select ng-model=\"$ctrl.orderProp\">\r\n          <option value=\"name\">Alphabetical</option>\r\n          <option value=\"age\">Newest</option>\r\n        </select>\r\n      </p>\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <!--Body content-->\r\n\r\n      <ul class=\"phones\">\r\n        <li ng-repeat=\"phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp\"\r\n            class=\"thumbnail phone-list-item\">\r\n          <a href=\"#!/phones/{{phone.id}}\" class=\"thumb\">\r\n            <img ng-src=\"{{phone.imageUrl}}\" alt=\"{{phone.name}}\" />\r\n          </a>\r\n          <a href=\"#!/phones/{{phone.id}}\">{{phone.name}}</a>\r\n          <p>{{phone.snippet}}</p>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(2);

__webpack_require__(4);

/***/ }
],[17]);