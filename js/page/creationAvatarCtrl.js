app.controller('creationAvatarCtrl', function($scope, $rootScope) {

	console.log ("creation avatar");

	$rootScope.creationAvatarIsVisible =  false;
	
	$scope.retour= function () {
		$rootScope.avatarIsVisible = true;
		$rootScope.creationAvatarIsVisible =  false;
	}

	$scope.valider= function () {
		// FAIRE enregistrer choix de l'avatar
		$rootScope.avatarIsVisible = true;
		$rootScope.creationAvatarIsVisible =  false;
	}

});