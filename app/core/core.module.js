import corePhone from './phone/phone.module.js';
import checkmarkFilter from './checkmark/checkmark.filter.js';

const $name = 'core';

angular
	.module($name, [corePhone])
	.filter('checkmark', checkmarkFilter);

export default $name;
