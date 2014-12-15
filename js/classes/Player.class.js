var Player = function(name, avatar)
{
    if(name.length == 0)
    {
        name = "Boubou";
    }
    this.name = name.charAt(0).toUpperCase() + name.slice(1);//première lettre en majuscule, le reste en minuscule

    this.avatar = new Avatar(avatar); //???
};


