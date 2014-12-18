app.directive(
  'draggable',
  [
    '$document',
    function($document)
    {
      return function(scope, element, attr)
      {
        console.log(scope);

        var elementOrigin, elementPosition, touchPosition;

        element.on('touchstart', function(event)
        {
          elementOrigin = elementPosition = {
            x: parseInt(element.css('left')),
            y: parseInt(element.css('top'))
          };

          touchPosition = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY
          };

          element.on('touchmove', drag);
        });

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

          element.css({
            left: elementPosition.x + 'px',
            top: elementPosition.y + 'px'
          });
        }
      };
    }
  ]
);
