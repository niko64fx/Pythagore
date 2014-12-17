app.controller(
	'GeneratorCtrl',
	[
		'$scope', 'localStorage',
		function ($scope, localStorage)
		{
			if (localStorage.load('blocks') === null) localStorage.save('blocks', []);
			$scope.blocks = localStorage.load('blocks');

			$scope.block = {
				gridX: 0,
				gridY: 0,
				area: 0,
				value: 1,
				isDraggable: false,
				isDroppable: false,
				hasNumber: false
			}

			$scope.addBlock = function()
			{
				$scope.blocks.push($scope.block);
				localStorage.save('blocks', $scope.blocks);
			}
		}
	]
);
