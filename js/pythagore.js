$(function()
{

    window.game = new Game();//on créé une propriété global de window, création d'une instance de la classe Game()

    window.game.Start();//démarrage du jeu

    numberLevel();
});

function numberLevel()
{
    for(var index = 1; index <=30; index++)
    {
        $('#level').append(
            $('<option>').attr('value',index).append(index)
        )
    }
}