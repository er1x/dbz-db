
angular.module('dbzDb.directives', [])
  .directive('charCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/char-card.html'
    };
  });
