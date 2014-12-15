var Shape = function (area)
{
    /******** constructeur *******/
    this.color = "";
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.image = "";
    this.value = 0;
    this.area = area;
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
