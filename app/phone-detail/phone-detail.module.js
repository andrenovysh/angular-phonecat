import angular from 'angular';

import corePhone from '../core/phone/phone.module.js';
import phoneDetail from './phone-detail.component.js';

const $name = 'phoneDetail';

angular
  .module($name, ['ngRoute', corePhone])
  .component($name, {
    template: phoneDetail.template,
    controller: phoneDetail.controller
  });

 export default $name;