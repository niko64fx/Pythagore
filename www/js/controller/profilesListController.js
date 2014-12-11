app.controller(
	'profilesListCtrl',
	function($scope, $rootScope)
	{
    // Liste fictive des avatars que nous devrons charger à partir du localStorage
    $scope.profiles = [
      {
        id: 0,
        nickname: 'TOTO',
        class: 'minion'
      },
      {
        id: 1,
        nickname: 'TITI',
        class: 'minion'
      },
      {
        id: 2,
        nickname: '',
        class: 'none'
      },
      {
        id: 3,
        nickname: '',
        class: 'none'
      }
    ];

    /**
     * Resetter: (ré-)initialise les propriétés et les variables de scope
     * 
     * @return {void}
     */
    ($scope.reset = function()
    {
      // Propriétés (attachées au scope)
      $scope.selectedProfileId = 0;
      
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
    $scope.profileSelect = function(profileId)
    {
      $scope.reset();

      // On sélectionne le profil courant (en ajoutant la classe 'on')
      $scope.selectedProfileId = profileId;
      $scope.profiles[profileId].class += ' on';

      // Si c'est un profil "vide"
      if ($scope.profiles[profileId].nickname === '')
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

      // DEBUG
      console.log(this);
    };

    /**
     * Redirige vers la création/modification de profil
     * 
     * @return {void}
     */
    $scope.openProfileAddOrEditWindow = function()
    {
      console.log('yo');
      console.log($scope.selectedProfileId);
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
);
