
let config = {
    type: Phaser.CANVAS,
    width:800,
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
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.platforms = this.physics.add.staticGroup();   
    this.platforms.create(400, 400, 'platform').setScale(2).refreshBody();//suelo

    this.platforms.create(50, 250, 'platform');
    this.platforms.create(750, 220, 'platform');

}

function update()
{

}