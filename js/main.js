var app = angular.module('jeu', []);

document.addEventListener('DOMContentLoaded', function() {
	
	console.log('creation app ok');

	angular.bootstrap(document, ['jeu']);

});

app.run(function($rootScope){});

app.controller('helloCtrl', function($scope, $rootScope) {

	console.log ("Accueil");

	$rootScope.helloVisible =  true;

	$scope.parties = ['addition', 'soustraction', 'multiplication', 'division', 'multiplication_division', 'compte_est_bon'];

});
