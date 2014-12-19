// On définit la variable globale app qui représentera le module "Pythagore" plus bas
// avant que le DOM et Angular soient chargé pour pouvoir y pré-attacher
// l'ensemble des contrôleurs, services, directives, etc  
var app = angular
  .module('Pythagore', ['ngTouch'])
  // Au chargement du module Pythagore, on exécute :
  .run(
    [
      "$rootScope", "localStorage", "$window",
      function($rootScope, localStorage, $window)
      {
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
        
        // - le chargement des données à partir du localStorage
        /*if (localStorage.load('game') === null)*/ localStorage.save('game', dataGame);
        if (localStorage.load('profiles') === null) localStorage.save('profiles', dataProfiles);
        $rootScope.game = localStorage.load('game');
        $rootScope.profiles = localStorage.load('profiles');

        // - l'initialisation des variables générales
        $rootScope.selectedChapter = 0;
        $rootScope.selectedLevel = 0;

        // - l'initialisation des variables gérant les tailles (blocs, grille zt zones)
        $rootScope.blockMargin = $window.innerWidth * 0.0125;
        $rootScope.blockSize = $window.innerWidth * 0.075;
        $rootScope.blockFontSize = Math.round($window.innerWidth * 0.05);
        $rootScope.gridHeight = $window.innerHeight * 0.16;
        $rootScope.gridWidth = $window.innerWidth * 0.1;
        $rootScope.stackMargin = ($window.innerHeight * 0.2 - $rootScope.blockSize) / 2;
        $rootScope.zones = [
          { x: 0, y: $window.innerHeight * 0.8 },
          { x: 0, y: 0 },
          { x: $window.innerWidth / 2, y: 0 }
        ];
      }
    ]
  );

// Une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {

	// On attache angular au DOM en chargeant le module Pythagore
	angular.bootstrap(document, ['Pythagore'], { strictDi: true })

});
