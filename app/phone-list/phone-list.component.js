import angular from 'angular';
import phoneListTemplate from 'raw!./phone-list.template.html';

const PhoneListController = function(Phone) {
  this.phones = Phone.query();
  this.orderProp = 'age';
};

PhoneListController.$inject = ['Phone']

export default {
  template: phoneListTemplate,
  controller: PhoneListController
};
