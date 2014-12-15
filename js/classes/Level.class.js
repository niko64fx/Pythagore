var Level = function(chapter, level, callback)
{
    /******** constructeur *******/
    this.shapes = [];
    this.chapter = chapter;
    this.level = level;
//    callback();
};

Level.prototype.createShapes = function()
{
    var nbLeftBlock = $('#nbLeftBlock').val();
    var nbRightBlock = $('#nbRightBlock').val();
    var nbPickBlock = $('#nbPickBlock').val();

    for(var i = 0; i < nbLeftBlock; i++)
    {
        var shape = new Shape('zone1');
        shape.Init();
        this.shapes.push(shape);
    }

    for(i = 0; i < nbRightBlock; i++)
    {
        shape = new Shape('zone2');
        shape.Init();
        this.shapes.push(shape);
    }

    for(i = 0; i < nbPickBlock; i++)
    {
        shape = new Shape('pioche');
        shape.Init();
        this.shapes.push(shape);
    }

//        if((this.level <= 10) && (this.level > 0))
//        {
//            var numberOfShapes = 5;
//
//            for (var i=0; i<numberOfShapes; i++)
//            {
//                var shape = new Shape("zone1");
//                shape.Init();
//                this.shapes.push(shape);
//            }
//
//            for (i=0; i<numberOfShapes; i++)
//            {
//                shape = new Shape("zone2");
//                shape.Init();
//                this.shapes.push(shape);
//            }
//
//            for (i=0; i<numberOfShapes; i++)
//            {
//                shape = new Shape("pioche");
//                shape.Init();
//                this.shapes.push(shape);
//            }
//
//        }
//        else if(this.level > 10 && this.level <= 20)
//        {
//            numberOfShapes = 10;
//
//            for (i=0; i<numberOfShapes; i++)
//            {
//                shape = new Shape("zone2");
//                this.shapes.push(shape);
//            }
//
//        }
//        else if(this.level <= 30)
//        {
//            numberOfShapes = 20;
//
//            for (i=0; i<numberOfShapes; i++)
//            {
//                shape = new Shape("zone2");
//                this.shapes.push(shape);
//            }
//
//        }

};
