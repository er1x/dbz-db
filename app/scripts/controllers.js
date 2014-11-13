

angular.module('dbzDb.controllers', [])
  .controller('ListController', ['$scope', 'DbzData', function($scope, DbzData) {

    DbzData
      .list()
      .success(function(characters) {
        var maxRows = Math.ceil(characters.length / 3);
        var rows = new Array(maxRows);
        for (var i = 0; i < maxRows; i++) {
          rows[i] = i;
        }
        $scope.rows = rows;
        $scope.characters = characters;
      })
      .error(function(err) {
        console.log(err);
      });

  }])
  .controller('DetailController', ['$scope', 'DbzData', '$routeParams',
    function($scope, DbzData, $routeParams) {
    
      DbzData
        .list()
        .success(function(characters) {
          $scope.character = characters[$routeParams.id-1];
        })
        .error(function(err) {
          console.log(err);
        });

  }]);