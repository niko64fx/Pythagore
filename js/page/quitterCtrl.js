app.controller('quitterCtrl', function($scope, $rootScope) {

	console.log ("Demande si on veut quitter la partie");

	$rootScope.quitterIsVisible =  false; // la section Quitter est invisible par défaut


	$scope.quitterOui= function () {
		$rootScope.quitterIsVisible = false
		$rootScope.goodbyeIsVisible = true
	};

	$scope.quitterNon= function () {
		$rootScope.quitterIsVisible = false;
		$rootScope.helloIsVisible =  true;
	};
});