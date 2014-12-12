// On définit la variable globale app qui représentera le module "Pythagore" plus bas
// avant que le DOM et Angular soient chargé pour pouvoir y pré-attacher
// l'ensemble des contrôleurs, services, directives, etc  
var app = angular
  .module('Pythagore', ['ng'])
  // Au chargement du module Pythagore, on exécute :
  .run(["$rootScope", function($rootScope) {
      // - l'initialisation des variables affichant/masquant les vues
      $rootScope.chaptersListIsVisible     = false;
      $rootScope.exitWindowIsVisible       = false;
      $rootScope.homeIsVisible             = true;
      $rootScope.gameIsVisible             = false;
      $rootScope.gameEndIsVisible          = false;
      $rootScope.levelsListIsVisible       = false;
      $rootScope.optionsWindowIsVisible    = false;
      $rootScope.profileAddOrEditIsVisible = false;
      $rootScope.profilesListIsVisible     = false;
  }]);

// Une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
	
	// DEBUG
  console.info('DOM loaded');

	// On attache angular au DOM en chargeant le module Pythagore
	angular.bootstrap(document, ['Pythagore'], { strictDi: true })

});
