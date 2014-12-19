app.controller(
  'levelsListCtrl',
  [
    "$scope", "$rootScope",
    function($scope, $rootScope)
    {
      $scope.gotoGame = function(levelIndex)
      {
        $rootScope.selectedLevel = levelIndex;

        $rootScope.levelsListIsVisible = false;
        $rootScope.gameIsVisible = true;
      }
    }
  ]
);
