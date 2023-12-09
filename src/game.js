import Player from "./player.js"

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
			debug: true 
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
   
    this.platforms = this.physics.add.staticGroup();   
    this.platforms.create(400, 400, 'platform').setScale(2).refreshBody();//suelo
    this.platforms.create(-20, 200, 'platform').setScale(0.1,15).refreshBody();
    this.platforms.create(400, 280, 'platform').setScale(0.5,1).refreshBody();
    
    this.item=this.physics.add.sprite(400,240,'item');
    this.tweens.add({
        targets: this.item,
        scale: 1.2,
        ease: 'sine.inout',
        duration: 2000,
        delay: 50,
        repeat: -1,
        yoyo: true
    });

    this.player = new Player(this,100,300,'player');

    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.item, this.platforms);

}

function update()
{
    this.player.update();
}