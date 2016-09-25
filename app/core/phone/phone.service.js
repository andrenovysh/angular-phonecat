import angular from 'angular';

const factory = ($resource) => {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: { phoneId: 'phones' },
      isArray: true
    }
  });
};

factory.$inject = ['$resource'];

export default factory;