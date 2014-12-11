app.controller(
  'homeCtrl',
  function($scope, $rootScope)
  {
    $scope.gotoProfilesList = function()
    {
      $rootScope.homeIsVisible = false;
      $rootScope.profilesListIsVisible = true;
    }

    $scope.gotoOptions = function()
    {
      $rootScope.homeIsVisible = false;
      $rootScope.optionsWindowIsVisible = true;
    }

    $scope.openExitWindow = function()
    {
      $rootScope.exitWindowIsVisible = true;
    }
  }
);
