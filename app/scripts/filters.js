angular.module('dbzDb.filters', [])
  .filter('tokformat', function () {
    return function (input) {
      input = input / 1000;
      return (input + 'k');
    };
  });