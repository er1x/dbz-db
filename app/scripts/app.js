
var dbzDb = angular.module('dbzDb', [
  'dbzDb.services',
  'dbzDb.controllers',
  'dbzDb.directives',
  'ngRoute'
]);


dbzDb.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListController',
      templateUrl: 'partials/list.html'
    })
    .when('/:id', {
      controller: 'DetailController',
      templateUrl: 'partials/detail.html'
    })
    .otherwise({
      redirectTo: '/'
    }); 
}]);
