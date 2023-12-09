export default class Win extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'win' });
    }
    preload()
    {
        this.load.image('over', 'assets/over.png');
    }
        create ()
        {
         this.add.image(0, 0, 'over').setOrigin(0, 0);
    
         this.add.text(200, 190, 'You are winner :)', { fontFamily: 'Comic Sans MS',  fontSize: 26, color: '#000000' });
        }
}
