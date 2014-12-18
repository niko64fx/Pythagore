app.controller(
	'profilesListCtrl',
  [
    "$scope", "$rootScope",
    function($scope, $rootScope)
    {
      /**
       * Resetter: (ré-)initialise les propriétés et les variables de scope
       * 
       * @return {void}
       */
      ($scope.reset = function()
      {
        // Propriétés (attachées au scope)
        $rootScope.selectedProfileIndex = 0;
        
        // Par défaut, aucun des boutons principaux n'est visible
        // tant qu'aucun profil n'a été sélectionné
        $scope.playButton = { isVisible: false };
        $scope.createButton = { isVisible: false };
        $scope.editButton = { isVisible: false };
        $scope.removeButton = { isVisible: false };

        // On dé-sélectionne l'ensemble des profils (en supprimant la class 'on')
        for (var i=0; i<4; i++) $scope.profiles[i].class = $scope.profiles[i].class.replace(' on', '');
      })();

      /**
       * Sélectionne un profil
       * 
       * @return {void}
       */
      $scope.profileSelect = function()
      {
        // Si le profil sélectionné est différent du profil précédemment sélectionné
        if ($rootScope.selectedProfileIndex !== this.$index)
        {
          $scope.reset();

          // On sélectionne le profil courant (en ajoutant la classe 'on')
          $rootScope.selectedProfileIndex = this.$index;
          $scope.profiles[this.$index].class += ' on';

          // Si c'est un profil "vide"
          if ($scope.profiles[this.$index].nickname === '')
          {
            // On affiche le bouton de création de profil et on masque tous les autres
            $scope.playButton = { isVisible: false };
            $scope.createButton = { isVisible: true };
            $scope.editButton = { isVisible: false };
            $scope.removeButton = { isVisible: false };
          }
          // Sinon (si c'est un profil existant)
          else
          {
            // On affiche les boutons permettant de commencer la partie, d'édition et de suppression du profil
            // et on masque le bouton de création de profil
            $scope.playButton = { isVisible: true };
            $scope.createButton = { isVisible: false };
            $scope.editButton = { isVisible: true };
            $scope.removeButton = { isVisible: true };
          }
        }
      };

      /**
       * Redirige vers la création/modification de profil
       * 
       * @return {void}
       */
      $scope.openProfileAddOrEditWindow = function()
      {
        // On diffuse (vers le bas) l'événement 'profileAddOrEdit'
        $scope.$broadcast('profileAddOrEdit');

        $rootScope.profileAddOrEditIsVisible = true;
      };

      /**
       * Redirige vers l'accueil
       * 
       * @return {void}
       */
      $scope.gotoHome = function()
      {
        $scope.reset();

        $rootScope.profilesListIsVisible = false;
        $rootScope.homeIsVisible = true;
      };
    }
  ]
);
