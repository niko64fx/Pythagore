app.directive(
  'block',
	[
    '$rootScope', '$document',
		function($rootScope, $document)
		{
			function link(scope, element, attributes)
			{
        element.css({
          left: ($rootScope.zones[scope.block.area].x + $rootScope.gridWidth * scope.block.gridX) + 'px',
          top: ($rootScope.zones[scope.block.area].y + $rootScope.gridHeight * scope.block.gridY) + 'px'
        })

        if(scope.block.isDraggable)
        {
          element.on('touchstart', dragStart);
          element.on('touchmove', drag);
          element.on('touchend', dropped);
          element.addClass('draggable');
        }
        if(scope.block.isDroppable)
        {
          console.log()

          $document.on('dropped', checkDroppedElement);
          element.addClass('droppable');
        }
				//if(scope.block.isDroppable == true) element.attr('droppable','');

        function dragStart(event)
        {
          elementOrigin = elementPosition = {
            x: parseInt(angular.element(this).css('left')),
            y: parseInt(angular.element(this).css('top'))
          };

          touchPosition = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY
          };
        }

        function drag(event)
        {
          elementPosition.x += event.changedTouches[0].clientX - touchPosition.x;
          elementPosition.y += event.changedTouches[0].clientY - touchPosition.y;
          
          // if (elementPosition.x < scope.block.minLeft) elementPosition.x = scope.block.minLeft;
          // if (elementPosition.x > scope.block.maxLeft) elementPosition.x = scope.block.maxLeft;
          // if (elementPosition.y < scope.block.minTop) elementPosition.y = scope.block.minTop;
          // if (elementPosition.y > scope.block.maxTop) elementPosition.y = scope.block.maxTop;
          
          touchPosition.x = event.changedTouches[0].clientX;
          touchPosition.y = event.changedTouches[0].clientY;

          angular.element(this).css({
            left: elementPosition.x + 'px',
            top: elementPosition.y + 'px'
          });

        }

        function dropped(event)
        {
          $rootScope.droppedElementPosition = elementPosition;
          $document.triggerHandler('dropped');
        }

        function checkDroppedElement(event)
        {
          //console.log($rootScope.droppedElementPosition.x, parseInt(element.css('left')));

          if (
            Math.abs($rootScope.droppedElementPosition.x - parseInt(element.css('left'))) <= 50
            && Math.abs($rootScope.droppedElementPosition.y - parseInt(element.css('top'))) <= 50
          )
            console.log('o');
          else
            console.log('n');

          // element.off
        }
			}

			return {
				restrict: 'E',
				template: '{{ block.value }}',
				link: link
			};
		}
	]
);
