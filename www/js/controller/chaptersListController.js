app.controller(
  'chaptersListCtrl',
  [
    "$scope", "$rootScope",
    function($scope, $rootScope)
    {
      $scope.gotoLevelsList = function(chapterIndex)
      {
        $rootScope.selectedChapter = chapterIndex;

        $rootScope.chaptersListIsVisible = false;
        $rootScope.levelsListIsVisible = true;
      }
    }
  ]
);
