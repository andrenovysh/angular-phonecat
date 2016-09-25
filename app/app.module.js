import config from './app.config.js';
import phoneAnimation from './app.animations.js';

import core from './core/core.module.js';
import phoneDetail from './phone-detail/phone-detail.module.js';
import phoneList from './phone-list/phone-list.module.js';

angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  core,
  phoneDetail,
  phoneList,
])
.animation('.phone', phoneAnimation)
.config(config);
