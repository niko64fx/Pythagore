app.controller(
	'gameCtrl',
	[
		'$scope', 'localStorage',
		function ($scope, localStorage)
		{
			/*if (localStorage.load('blocks') === null) localStorage.save('blocks', []);
			$scope.blocks = localStorage.load('blocks');

			($scope.load = function()
			{
				if (typeof $scope.block !== "undefined") delete $scope.block;

				$scope.block = {
					id: 0,
					gridX: 0,
					gridY: 0,
					area: 0,
					value: 1,
					isDraggable: false,
					isDroppable: false,
					hasNumber: false
				};
			})();

			$scope.addBlock = function()
			{
				$scope.block.id = $scope.blocks.length + 1;
				console.log($scope.block.id);
				$scope.blocks.push($scope.block);
				console.log($scope.blocks);
				localStorage.save('blocks', $scope.blocks);

				$scope.load();
			}*/
		}
	]
);