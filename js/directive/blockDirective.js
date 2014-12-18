app.directive('block',
    [
        function()
        {
            function link(scope, element, attributes)
            {
                var area;

                area = scope.block.area;

                Position();

                function Position()
                {
                    var hauteur = 10;
                    var largeur = 10;
                    var zones = [{x: 10, y: 510},{x: 10, y: 10},{x: 525, y: 10}];


                    if(scope.block.isDraggable == true)
                    {
                        element.css({
                            left: (zones[area].x + largeur * scope.block.gridX) + 'px',
                            top: (zones[area].y + hauteur * scope.block.gridY) + 'px'
                                })
                            .attr('draggable','');
                    }
                    else
                    {
                        element.css({
                            left: (zones[area].x + largeur * scope.block.gridX) + 'px',
                            top: (zones[area].y + hauteur * scope.block.gridY) + 'px'
                        })
                            .attr('droppable','');
                    }

                }
            }

            return {
                restrict: 'E',
                template: '{{ block.value }}',
                link: link
            };

        }
    ]);
