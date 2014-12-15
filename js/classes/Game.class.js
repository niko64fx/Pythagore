var Game = function()
{
    this.player = null;
    this.map = new Map();
    console.log(this.map);
};

Game.prototype.Play = function()
{

    this.map.Generator();
//    this.map.RefreshMap();


};


Game.prototype.Start = function()
{
    this.Play();
};

