import Player from "./player.js"
import Item from "./item.js";
import Enemy from "./enemy.js";
import JumpingEnemy from "./jumpingEnemy.js";
import GameOver from "./gameOver.js"
import Win from "./win.js"
class Example extends Phaser.Scene {
    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.image('item', 'assets/diamond.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('enemy2', 'assets/Enemy2.png');
        this.load.image('flag', 'assets/flag.png');
        this.load.spritesheet('player', 'assets/woof.png', { frameWidth: 32, frameHeight: 32 });
        this.load.audio('music', 'Sounds/Music.mp3');
    }

    create() {
        this.music = this.sound.add('music', {
            volume: 0.3,
            loop: true
        })
        this.music.play();

        let bg = this.add.image(0, 0, 'sky').setOrigin(0, 0);
        this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);
        this.cameras.main.setSize(600, 400);
        this.enemy = this.add.group({
            maxSize: 10,
            runChildUpdate: true
        });

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 400, 'platform').setScale(2.1).refreshBody();//suelo
        this.platforms.create(400, 280, 'platform').setScale(0.5, 1).refreshBody();
       
        this.flag = this.physics.add.sprite(700, 240, 'flag');
        
        this.item = new Item(this, 400, 240, 'item');
        
        this.player = new Player(this, 100, 300, 'player');
        
        this.enemy.add(new Enemy(this, 800, 350, 'enemy2'))

        this.cameras.main.startFollow(this.player);

        this.physics.add.collider(this.flag, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.item, this.platforms);
        this.physics.add.collider(this.player, this.flag, this.win, null, this);
        this.physics.add.collider(this.player, this.enemy, this.touchEnemy, null, this);
        this.physics.add.overlap(this.player, this.item, this.collectStar, null, this);

        this.time = 1000;
        this.time2=800;

    }
    win() {
        this.scene.pause();
        this.scene.start('win');
    }
    touchEnemy(player, enemy) {
        if (player.invincible)
            enemy.destroy();
        else {
            this.scene.pause();
            this.scene.start('gameOver');
        }
    }
    collectStar() {
        this.item.destroy();
        this.player.Invincible();
    }
    update() {
        this.time--;
        this.time2--;
        if (this.time<0)
        {
            this.enemy.add(new Enemy(this, 800, 350, 'enemy2'))
            this.time=1000;
        }
        if (this.time2<0)
        {
            this.enemy.add(new JumpingEnemy(this, 800, 300, 'enemy'))
            this.time2=800;
        }
        this.player.update();
        console.log(5-this.time.physicsElapsed) 
        //this.enemy.add(new JumpingEnemy(this,800,200,'enemy' ))
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 400,
    pixelArt: true,
    scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene: [Example, GameOver, Win],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    }
};
new Phaser.Game(config);