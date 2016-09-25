import phoneDetailTemplate from 'raw!./phone-detail.template.html';

class PhoneDetailController {
  static $inject = ['$routeParams', 'Phone'];

  constructor($routeParams, Phone) {
    const { phoneId } = $routeParams;

    this.phone = Phone.get({ phoneId }, ({ images: [imageUrl] }) => {
      this.setImage(imageUrl);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
};

export default {
  template: phoneDetailTemplate,
  controller: PhoneDetailController
};