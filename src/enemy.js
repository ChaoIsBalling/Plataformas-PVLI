export default class Enemy extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    update()
    {
        this.body.setVelocityX(-60);
        if (this.body.touching.down)
        {
            this.body.setVelocityY(-150);
        }
    }
}