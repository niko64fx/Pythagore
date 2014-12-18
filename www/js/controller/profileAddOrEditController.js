app.controller(
  'profileAddOrEditCtrl',
  [
    "$scope", "$rootScope",
    function($scope, $rootScope)
    {
      $scope.keyboardKeys = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

      // Si l'événement 'profileAddOrEdit' arrive,
      // on exécute la fonction qui charge le profil
      $scope.$on('profileAddOrEdit', function() { $scope.load() });

      /**
       * ...
       * 
       * @return {void}
       */
      $scope.load = function()
      {
        // DEBUG
        console.log($rootScope.selectedProfileIndex);

        $scope.profile = $rootScope.profiles[$rootScope.selectedProfileIndex];
        $scope.nicknameLetters = $scope.profile.nickname.split('');
        console.log($scope.nicknameLetters);
      }

      /**
       * Insère une lettre à la fin du pseudonyme
       * 
       * @return {void}
       */
      $scope.type = function(key)
      {
        if ($scope.nicknameLetters.length < 10) $scope.nicknameLetters.push(key);
      }

      /**
       * Efface une lettre du pseudonyme (à partir de la fin)
       * 
       * @return {void}
       */
      $scope.backspace = function()
      {
        if ($scope.nicknameLetters.length !== 0) $scope.nicknameLetters.pop();
      }

      /**
       * Enregistre le profil et redirige vers la liste des profils
       * 
       * @return {void}
       */
      $scope.enter = function()
      {
        if ($scope.nicknameLetters.length !== 0) $scope.nicknameLetters.pop();
      }

      /**
       * Redirige vers la liste des profils (sans enregistrer le profil créé/modifié)
       * 
       * @return {void}
       */
      $scope.gotoProfilesList = function()
      {
        $rootScope.profileAddOrEditIsVisible = false;
      }
    }
  ]
);
