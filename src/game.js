
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

}

function create()
{

}

function update()
{
    
}