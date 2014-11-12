
var dbzDb = angular.module('dbzDb', [
  'dbzDb.services',
  'ngRoute'
]);


dbzDb.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/list.html'
    })
    .when('/:id', {
      templateUrl: 'partials/detail.html'
    })
    .otherwise({
      redirectTo: '/'
    }); 
}]);
