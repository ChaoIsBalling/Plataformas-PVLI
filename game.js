let config = {
    type: Phaser.CANVAS,
    width:1000,
    height: 500,      
    pixelArt: true,
    scene:[Level1],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    parent: "juego"
};

new Phaser.Game(config);
