import phoneService from './phone.service.js';

const $name = 'core.phone';

angular
	.module($name, ['ngResource'])
	.factory('Phone', phoneService);

export default $name;