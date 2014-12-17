var Shape = function ()
{
    /******** constructeur *******/
    this.color = "";
    this.gridX = 0;
    this.gridY = 0;
    this.image = "";
    this.value = 0;
    this.area = 0;
    this.isDraggableInAreas = [];
    this.isDraggable = false;
    this.isDroppable = false;
    this.isvalid = false;
    this.isShownNumber = false;
    this.isShownImage = false;
};

Shape.prototype.Init = function()
{
    this.x = getRandomInteger(0,80);
    this.y = getRandomInteger(0,70);
    this.value = getRandomInteger(1,10);
    this.width = $('#widthBlock').val();
    this.height = $('#heightBlock').val();
};
