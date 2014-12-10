var app = angular.module('jeu', []);

document.addEventListener('DOMContentLoaded', function() {
	
	console.log('creation app ok');

	angular.bootstrap(document, ['jeu']);

});

app.run(function($rootScope){});

	/*$rootScope.pages = [
	{nom:'addition', show:"helloIsVisible"}, 
	{nom:'soustraction', show:"soustractionIsVisible"}, 
	{nom:'multiplication', show:"multiplicationIsVisible"}, 
	{nom:'division', show:"divisionIsVisible"}, 
	{nom:'multiplication_division', show:"helloIsVisible"}, 
	{nom:'compte_est_bon', show:"helloIsVisible"}
	];*/

