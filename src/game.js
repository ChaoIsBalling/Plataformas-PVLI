import {Player} from "./player.js"

let config = {
    type: Phaser.CANVAS,
    width:600,
    height: 400,      
    pixelArt:true,
    scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
	},
    scene: [{preload:preload, create:create, update:update}],
    physics: { 
		default: 'arcade', 
		arcade: { 
			gravity: { y: 200 }, 
			debug: false 
		} 
	}
};
new Phaser.Game(config);

function preload()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('platform','assets/platform.png');
    this.load.image('item','assets/diamond.png');
    this.load.spritesheet('player', 'assets/woof.png', { frameWidth: 32, frameHeight: 32 });
}

function create()
{
    let bg= this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight); 
    this.cameras.main.setSize(600, 400);
    //this.Player = new Player(0,0);
    this.platforms = this.physics.add.staticGroup();   
    this.platforms.create(400, 400, 'platform').setScale(2).refreshBody();//suelo
    this.platforms.create(-20, 200, 'platform').setScale(0.1,15).refreshBody();
    //this.platforms.create(820, 200, 'platform').setScale(0.1,15).refreshBody();
    this.platforms.create(400, 280, 'platform').setScale(0.5,1).refreshBody();
    
    this.item=this.physics.add.sprite(400,240,'item');

    this.player = this.physics.add.sprite(100, 300, 'player');
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });
     this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player, this.platforms); //colision entre jugador y plataformas
    this.physics.add.collider(this.item, this.platforms);

}

function update()
{
 if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else{
            this.player.setVelocityX(0); 
            this.player.anims.stop();
        }
        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-230); 
        }
}