export default class GameOver extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'gameOver' });
    }
preload()
{
    this.load.image('over', 'assets/over.png');
}
    create ()
    {
     this.add.image(0, 0, 'over').setOrigin(0, 0);

     this.add.text(220, 190, 'Game Over :(', { fontFamily: 'Comic Sans MS',  fontSize: 26, color: '#000000' });
    }
}
