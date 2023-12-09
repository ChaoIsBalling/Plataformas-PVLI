export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        this.scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('player', { start: 2, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update()
    {
        if (this.cursors.left.isDown)
        {
            this.body.setVelocityX(-160);
            this.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.body.setVelocityX(160);
            this.anims.play('right', true);
        }
        else{
            this.body.setVelocityX(0); 
            this.anims.stop();
        }
        if (this.cursors.up.isDown && this.body.touching.down)
        {
            this.body.setVelocityY(-230); 
        }
    }
}
