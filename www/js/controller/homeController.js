app.controller(
  'homeCtrl',
  [
    "$scope", "$rootScope",
    function($scope, $rootScope)
    {
      /**
       * Redirige vers la liste des profils
       * 
       * @return {void}
       */
      $scope.gotoProfilesList = function()
      {
        $rootScope.homeIsVisible = false;
        $rootScope.profilesListIsVisible = true;
      }

      /**
       * Redirige vers les options
       * 
       * @return {void}
       */
      $scope.gotoOptions = function()
      {
        $rootScope.homeIsVisible = false;
        $rootScope.optionsWindowIsVisible = true;
      }

      /**
       * Affiche la fenêtre de confirmation pour quitter le jeu
       * 
       * @return {void}
       */
      $scope.openExitWindow = function()
      {
        $rootScope.exitWindowIsVisible = true;
      }
    }
  ]
);
