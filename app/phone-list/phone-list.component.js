import angular from 'angular';
import phoneListTemplate from 'raw!./phone-list.template.html';

@inlineInject
class PhoneListController {
  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';  
  }
}

export default {
  template: phoneListTemplate,
  controller: PhoneListController
};
