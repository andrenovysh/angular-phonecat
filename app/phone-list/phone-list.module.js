import angular from 'angular';

import corePhone from '../core/phone/phone.module.js';
import phoneList from './phone-list.component.js';

const $name = 'phoneList';

angular
  .module($name, [corePhone])
  .component($name, {
    template: phoneList.template,
    controller:  phoneList.controller
  });

 export default $name;