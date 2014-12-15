var Map = function()
{
    /******** constructeur *******/
    this.level = new Level(1,1);
	this.bloc1 = $(".bloc1");
	this.bloc2 = $(".bloc2");
	this.pickZone = $(".pick");
};


Map.prototype.onClickGenerate = function()
{
    var chap = $('#chapter').val();
    var level = $('#level').val();
    var nbLeftBlock = $('#nbLeftBlock').val();
    var nbRightBlock = $('#nbRightBlock').val();
    var nbPickBlock = $('#nbPickBlock').val();

    this.level = new Level(chap,level);

    for(var i = 0; i < nbLeftBlock; i++)
    {
        var shape = new Shape('zone1');
        shape.Init();
        this.level.shapes.push(shape);
    }

    for(i = 0; i < nbRightBlock; i++)
    {
        shape = new Shape('zone2');
        shape.Init();
        this.level.shapes.push(shape);
    }

    for(i = 0; i < nbPickBlock; i++)
    {
        shape = new Shape('pioche');
        shape.Init();
        this.level.shapes.push(shape);
    }

    this.RefreshMap();
};

Map.prototype.RefreshMap = function()
{
//    this.level.createShapes();

    var shapes = this.level.shapes;
    console.log(shapes);

    var area;
    var blockElement;

    for(var i = 0; i< shapes.length; i++)
    {
        area = shapes[i].area;
        blockElement = $('<div>').addClass('blockElement').css
        ({
            "width":shapes[i].width+"px",
            "height":shapes[i].height+"px",
            "left":shapes[i].x+"%",
            "top":shapes[i].y+"%"
        }).append(shapes[i].value);

        switch (area)
        {
            case "zone1":
                this.bloc1.append(blockElement);
                break;

            case "zone2":
                this.bloc2.append(blockElement);
                break;

            case "pioche":
                this.pickZone.append(blockElement);
                break;
        }
    }
};

Map.prototype.Generator = function()
{
    $('#validate').on('click', this.onClickGenerate.bind(this));

};

//Map.prototype.ChooseLevel = function()
//{
//    var chap = $('#chapter').val();
//    var level = $('#level').val();

//    do
//    {
//        chap = window.prompt("Quel Chapitre ? (1 - 6)");
//    }
//    while((isNaN(chap) == true) || (chap < 1) || (chap > 6));
//
//    do
//    {
//        level = window.prompt("Choix du niveau : (1 - 30)");
//    }
//    while((isNaN(level) == true) || (level < 1) || (level > 30));

//    this.level = new Level(chap,level);
//};
