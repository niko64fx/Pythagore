app.directive(
  'block',
  [
    '$rootScope', '$document',
    function($rootScope, $document)
    {
      function link(scope, element, attributes)
      {
        element.css({
          fontSize: $rootScope.blockFontSize + 'px',
          height: $rootScope.blockSize + 'px',
          left: ($rootScope.zones[scope.block.area].x + $rootScope.gridWidth * scope.block.gridX) + 'px',
          lineHeight: $rootScope.blockSize + 'px',
          top: ($rootScope.zones[scope.block.area].y + $rootScope.gridHeight * scope.block.gridY) + 'px',
          width: $rootScope.blockSize + 'px'
        })

        if (scope.block.area === 0) element.css({ margin: $rootScope.stackMargin + 'px' })
        else                        element.css({ margin: $rootScope.blockMargin + 'px' })

        if(scope.block.isDraggable)
        {
          element.on('touchstart', dragStart);
          element.on('touchmove', drag);
          element.on('touchend', dropped);
          element.addClass('draggable');
        }
        if(scope.block.isDroppable)
        {
          $document.on('dropped', checkDroppedElement);
          element.addClass('droppable');
        }
        //if(scope.block.isDroppable == true) element.attr('droppable','');

        function dragStart(event)
        {
          $rootScope.droppedElementOrigin = {
            x: parseInt(angular.element(this).css('left')),
            y: parseInt(angular.element(this).css('top'))
          };

          elementPosition = {
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
          $rootScope.droppedElement = element;
          $document.triggerHandler('dropped');
        }

        function checkDroppedElement(event)
        {
          if (
            Math.abs(parseInt($rootScope.droppedElement.css('left')) - parseInt(element.css('left'))) <= $rootScope.blockSize
            && Math.abs(parseInt($rootScope.droppedElement.css('top')) - parseInt(element.css('top'))) <= $rootScope.blockSize
          )
          {
            $rootScope.droppedElement.css({
              left: element.css('left'),
              margin: element.css('margin'),
              top: element.css('top')
            });
          }
          else
          {
            $rootScope.droppedElement.css({
              left: $rootScope.droppedElementOrigin.x + 'px',
              top: $rootScope.droppedElementOrigin.y + 'px'
            });
          }

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
