
angular.module('dbzDb.services', [])
  .factory('DbzData', ['$http', function($http) {
    return {
      list: function() {
        return $http.get('data/data.json');
      }
    };
  }]);