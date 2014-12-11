app.controller('helloCtrl', function($scope, $rootScope) {

	console.log ("Accueil");

	$rootScope.helloIsVisible =  true; // la section Hello est invisible par défaut


	$scope.jouer = function () {
		$rootScope.avatarIsVisible = true;
		$rootScope.helloIsVisible =  false;
	};

	$scope.options = function () {
		$rootScope.optionsIsVisible = true;
		$rootScope.helloIsVisible =  false;
	};

	$scope.quitter= function () {
		$rootScope.quitterIsVisible = true;
		$rootScope.helloIsVisible =  false;
	};

	

});

// page d'accueil : 
// [jouer] redirige vers page de selection de l'avatar
// [options] redirige vers écran des options
// [quitter] action de confirmation 
// 	oui : action de fermer l'application
// 	non : action de masquer la confirmation
