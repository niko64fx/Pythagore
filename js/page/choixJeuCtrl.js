app.controller('choixJeuCtrl', function($scope, $rootScope) {

	console.log ("choix du jeu");

	$rootScope.choixJeuIsVisible = false; // la section Choix du jeu est invisible par défaut

	$scope.allerAAdd = function () {
		$rootScope.addIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}
	
	$scope.allerASous = function () {
		$rootScope.sousIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}

	$scope.allerAMulti = function () {
		$rootScope.multiIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}

	$scope.allerADiv = function () {
		$rootScope.divIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}

	$scope.allerAMultidiv = function () {
		$rootScope.multidivIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}

	$scope.allerACestbon = function () {
		$rootScope.cestbonIsVisible = true;
		$rootScope.choixJeuIsVisible = false;
	}
});