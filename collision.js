var Collision = angular.module('app', ['ngTouch']);

Collision.controller(
  'CollisionCtrl',
  [
    '$scope',
    function($scope)
    {
      $scope.blockHeight = 50;
      $scope.blockWidth = 50;
      $scope.blockMargin = 10;

      /**/
        $scope.initialTop= 0;
        $scope.initialLeft= 0;
      /**/

      $scope.blockHeight += $scope.blockMargin;
      $scope.blockWidth += $scope.blockMargin;

      var draggedBlockPosition, otherBlocks, otherBlocksNumber;
      
      $scope.blocks = [
        {
          left: 50,
          top: 50,
          minLeft: 20,
          maxLeft: 442,
          minTop: 20,
          maxTop: 530
        },
        {
          left: 150,
          top: 50,
          minLeft: 20,
          maxLeft: 442,
          minTop: 20,
          maxTop: 530
        },
        {
          left: 250,
          top: 50,
          minLeft: 20,
          maxLeft: 442,
          minTop: 20,
          maxTop: 530
        },
        {
          left: 50,
          top: 150,
          minLeft: 20,
          maxLeft: 442,
          minTop: 20,
          maxTop: 530
        },
        {
          left: 150,
          top: 150,
          minLeft: 20,
          maxLeft: 442,
          minTop: 20,
          maxTop: 530
        }
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
        var blocks, blocksNumber, elementOrigin, elementPosition, touchPosition;

        element.on('touchstart', function(event)
        {
          if (typeof blocks !== 'undefined') angular.element(blocks).off('collision');

          blocks = document.querySelectorAll('section > div > div');
          blocksNumber = blocks.length;

          element.addClass('dragged');


          
          angular.element(blocks).on('collision', move);

          // elementOrigin = elementPosition = {
          //   x: parseInt(element.css('left')),
          //   y: parseInt(element.css('top'))
          // };

          /**/

          elementOrigin = {
            x: parseInt(element.css('left')),
            y: parseInt(element.css('top'))
          };

          elementOrigin2 = {
            x: parseInt(element.css('left')),
            y: parseInt(element.css('top'))
          };

          elementPosition = elementOrigin;

            console.log(elementOrigin.x);
      
          /**/
          

          touchPosition = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY
          };

          $document.on('touchmove', drag);
          $document.on('touchend', drop);
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

        function drop()
        {

          /**/
          if(elementPosition.x >= scope.block.maxLeft || elementPosition.x <= scope.block.minLeft)
          {
            elementPosition.x = elementOrigin2.x;
          }

          if(elementPosition.y >= scope.block.maxTop || elementPosition.y <= scope.block.minTop)
          {
            elementPosition.y = elementOrigin2.y;
          }

          element.css({
            left: elementPosition.x + 'px',
            top: elementPosition.y + 'px'
          });

          /**/
          element.removeClass('dragged');

          $document.off('touchmove');
          $document.off('touchend');

          angular.element(element).triggerHandler('collision');
        }

        function move()
        {
          for (var i=0; i<blocksNumber; i++)
          {
            if (angular.element(blocks[i]).scope().$id === angular.element(this).scope().$id) continue;

            var horizontalDifference = blocks[i].offsetLeft - this.offsetLeft;
            var verticalDifference = blocks[i].offsetTop - this.offsetTop;

            if (Math.abs(horizontalDifference) <= (scope.blockWidth - 1) && Math.abs(verticalDifference) <= (scope.blockHeight - 1))
            {
              if (Math.abs(horizontalDifference) < Math.abs(verticalDifference))
              {
                //if (scope.block.minLeft)

                /**/
                if(verticalDifference < 0)
                {
                  if(this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * scope.blockHeight) <= scope.block.minTop)
                  {

                    blocks[i].style.top = scope.block.minTop + scope.blockMargin +'px';

                    this.style.top = (blocks[i].offsetTop - ((verticalDifference / Math.abs(verticalDifference)) * scope.blockHeight)) + 'px';
                    continue;
                  }
                }

                if(verticalDifference > 0)
                {
                  if(this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * scope.blockHeight) >= scope.block.maxTop)
                  {

                    blocks[i].style.top = scope.block.maxTop - scope.blockMargin +'px';

                    this.style.top = (blocks[i].offsetTop - ((verticalDifference / Math.abs(verticalDifference)) * scope.blockHeight)) + 'px';
                    continue;
                  }

                }

                /**/
                blocks[i].style.top = (this.offsetTop + ((verticalDifference / Math.abs(verticalDifference)) * scope.blockHeight)) + 'px';
              }
              else
              {

                /**/

                if(horizontalDifference < 0)
                {
                  if(this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference)) * scope.blockWidth) <= scope.block.minLeft)
                  {

                    blocks[i].style.left = scope.block.minLeft + scope.blockMargin +'px';
                    
                    this.style.left = (blocks[i].offsetLeft - ((horizontalDifference / Math.abs(horizontalDifference)) * scope.blockWidth)) + 'px';
                    continue;
                  }
                }

                if(horizontalDifference > 0)
                {
                  if(this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference)) * scope.blockWidth) >= scope.block.maxLeft)
                  {

                    blocks[i].style.left = scope.block.maxLeft - scope.blockMargin +'px';

                    this.style.left = (blocks[i].offsetLeft - ((horizontalDifference / Math.abs(horizontalDifference)) * scope.blockWidth)) + 'px';
                    continue;

                  }
                }

                /**/
                blocks[i].style.left = (this.offsetLeft + ((horizontalDifference / Math.abs(horizontalDifference) || 1) * scope.blockWidth)) + 'px';
              }

              angular.element(blocks[i]).triggerHandler('collision');
            }
          }
        }
      };
    }
  ]
);
