var blockHeight = 50;
var blockWidth = 50;
var blockMargin = 10;

var Collision = angular.module('app', []);

Collision.controller(
  'CollisionCtrl',
  [
    '$scope',
    function($scope)
    {
      blockHeight += blockMargin;
      blockWidth += blockMargin;
      
      var draggedBlockPosition, otherBlocks, otherBlocksNumber;
      $scope.blocks = [
        [0, 50, 50], [1, 150, 50], [2, 250, 50], [3, 50, 150], [4, 150, 150], [5, 250, 150], [6, 50, 250], [7, 150, 250], [8, 250, 250], [9, 400, 400]
      ];
    }
  ]
);

Collision.directive(
  'draggable',
  [
    '$document',
    function($document)
    {
      return function(scope, element, attr)
      {
        var elementPosition, mousePosition, otherBlocks, otherBlocksNumber;

        element.on('mousedown', function(event)
        {
          angular.element(document.querySelectorAll('section > div > div')).off('collision');

          element.addClass('dragged');

          angular.element(document.querySelectorAll('section > div > div.oops')).removeClass('oops');

          angular.element(document.querySelectorAll('section > div > div:not(.dragged)')).addClass('test');

          otherBlocks = document.querySelectorAll('section > div > div:not(.dragged)');
          otherBlocksNumber = otherBlocks.length;
          
          for (var i=0; i<otherBlocksNumber; i++) angular.element(otherBlocks[i]).on('collision', move);

          elementPosition = {
            x: parseInt(element.css('left')),
            y: parseInt(element.css('top'))
          };

          mousePosition = {
            x: event.pageX,
            y: event.pageY
          };

          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event)
        {
          elementPosition.x += event.pageX - mousePosition.x;
          elementPosition.y += event.pageY - mousePosition.y;
          mousePosition.x = event.pageX;
          mousePosition.y = event.pageY;

          element.css({
            left: elementPosition.x + 'px',
            top: elementPosition.y + 'px'
          });
        }

        function mouseup()
        {
          element.removeClass('dragged');

          $document.off('mousemove');
          $document.off('mouseup');

          firstMove(elementPosition);
        }

        function firstMove(draggedBlockPosition)
        {
          for (var i=0; i<otherBlocksNumber; i++)
          {
            var element = otherBlocks[i];

            var horizontalDifference = element.offsetLeft - draggedBlockPosition.x;
            var verticalDifference = element.offsetTop - draggedBlockPosition.y;

            if (Math.abs(horizontalDifference) <= (blockWidth-1) && Math.abs(verticalDifference) <= (blockHeight-1))
            {
              element.classList.add('oops');

              if (horizontalDifference === verticalDifference)
              {
                element.style.left = (draggedBlockPosition.x + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
                element.style.top = (draggedBlockPosition.y + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
              }
              else if (horizontalDifference === 0)
              {
                element.style.top = (draggedBlockPosition.y + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
              }
              else if (verticalDifference === 0)
              {
                element.style.left = (draggedBlockPosition.x + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
              }
              else
              {
                if (Math.abs(horizontalDifference) < Math.abs(verticalDifference))
                {
                  element.style.top = (draggedBlockPosition.y + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
                }
                else
                {
                  element.style.left = (draggedBlockPosition.x + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
                }
              }

              angular.element(element).triggerHandler('collision');
            }
          }
        }

        function move()
        {
          for (var i=0; i<otherBlocksNumber; i++)
          {
            if ('block-' + i === this.id) continue;

            var element = otherBlocks[i];

            var horizontalDifference = element.offsetLeft - this.offsetLeft;
            var verticalDifference = element.offsetTop - this.offsetTop;

            if (Math.abs(horizontalDifference) <= 49 && Math.abs(verticalDifference) <= 49)
            {
              element.classList.add('oops');

              if (horizontalDifference === verticalDifference)
              {
                element.style.left = (this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
                element.style.top = (this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
              }
              else if (horizontalDifference === 0)
              {
                element.style.top = (this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
              }
              else if (verticalDifference === 0)
              {
                element.style.left = (this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
              }
              else
              {
                if (Math.abs(horizontalDifference) < Math.abs(verticalDifference))
                {
                  element.style.top = (this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * blockHeight)) + 'px';
                }
                else
                {
                  element.style.left = (this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference)) * blockWidth)) + 'px';
                }
              }

              angular.element(element).triggerHandler('collision');
            }
          }
        }
      };
    }
  ]
);

Collision.directive(
  'blocks',
  [
    '$document',
    function($document)
    {
      return function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        /*element.css({
         left: scope.block.,
         top: scope.block.
        });*/

        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      };
    }
  ]
);
