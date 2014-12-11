app.controller('avatarCtrl', function($scope, $rootScope) {

    $scope.avatarList = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ]

	$scope.choisirAvatar= function () {
		// ICI : ENREGISTRER L'AVATAR SELECTIONNE
		$rootScope.choixJeuIsVisible = true;
		$rootScope.avatarIsVisible =  false;
	}

	$scope.creerAvatar= function () {
		$rootScope.creationAvatarIsVisible = true;
		$rootScope.avatarIsVisible =  false;
	}

	$scope.retour= function () {
		$rootScope.helloIsVisible = true;
		$rootScope.avatarIsVisible =  false;
	}

});
