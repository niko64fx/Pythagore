app.directive(
  'block',
  [
    '$rootScope', '$document',
    function($rootScope, $document)
    {
      var xMin = $rootScope.zones[1].x;
      var xMax = $rootScope.zones[2].x + $rootScope.gridWidth * 4;
      var yMin = $rootScope.zones[1].y;
      var yMax = $rootScope.zones[1].y + $rootScope.gridHeight * 5;

      function link(scope, element, attributes)
      {
        element.css({
          fontSize:   $rootScope.blockFontSize + 'px',
          height:     $rootScope.blockSize + 'px',
          left:       ($rootScope.zones[scope.block.area].x + $rootScope.gridWidth * scope.block.gridX) + 'px',
          lineHeight: $rootScope.blockSize + 'px',
          top:        ($rootScope.zones[scope.block.area].y + $rootScope.gridHeight * scope.block.gridY) + 'px',
          width:      $rootScope.blockSize + 'px'
        })

        if (scope.block.area === 0) element.css({ margin: $rootScope.stackMargin + 'px' })
        else                        element.css({ margin: $rootScope.blockMargin + 'px' })

        // Si le bloc est un "contenu"
        if(scope.block.isDraggable)
        {
          element.on('touchstart', dragStart);
          element.on('touchmove', drag);
          element.on('touchend', dropped);
          element.addClass('draggable');
        }

        // Si le bloc est un "contenant"
        if(scope.block.isDroppable)
        {
          $document.on('dropped', checkDroppedElement);
          element.addClass('droppable');
        }

        /**
         * Fonction appelée au démarrage du "glissé"
         * 
         * @param  {object} event Ce paramètre est automatiquement rempli grâce au callback
         *                        et nous permet de récupérer la position du curseur
         * 
         * @return {void}
         */
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

        /**
         * Fonction appelée continuellement pendant le "glissé"
         * 
         * @param  {object} event Ce paramètre est automatiquement rempli grâce au callback
         *                        et nous permet de récupérer la position du curseur
         * 
         * @return {void}
         */
        function drag(event)
        {
          elementPosition.x += event.changedTouches[0].clientX - touchPosition.x;
          elementPosition.y += event.changedTouches[0].clientY - touchPosition.y;

          if (elementPosition.x < xMin) elementPosition.x = xMin;
          if (elementPosition.x > xMax) elementPosition.x = xMax;
          if (elementPosition.y < yMin) elementPosition.y = yMin;
          if (elementPosition.y > yMax) elementPosition.y = yMax;

          console.log(elementPosition);
          
          touchPosition.x = event.changedTouches[0].clientX;
          touchPosition.y = event.changedTouches[0].clientY;

          angular.element(this).css({
            left: elementPosition.x + 'px',
            top: elementPosition.y + 'px'
          });
        }

        /**
         * Fonction appelée une fois le touch "laché"
         * 
         * @return {void}
         */
        function dropped()
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
              left:   element.css('left'),
              margin: element.css('margin'),
              top:    element.css('top')
            });
          }
          else
          {
            $rootScope.droppedElement.css({
              left: $rootScope.droppedElementOrigin.x + 'px',
              top:  $rootScope.droppedElementOrigin.y + 'px'
            });
          }

          // element.off
        }
      }

      return {
        restrict: 'E',
        template: '{{ block.value }}',
        link:     link
      };
    }
  ]
);
