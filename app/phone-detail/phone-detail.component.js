import phoneDetailTemplate from 'raw!./phone-detail.template.html';

//@injectInline
class PhoneDetailController {
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

PhoneDetailController.$inject = ['$routeParams', 'Phone'];

export default {
  template: phoneDetailTemplate,
  controller: PhoneDetailController
};