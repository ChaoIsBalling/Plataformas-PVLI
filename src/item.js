export default class Item extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);

        this.scene.tweens.add({
            targets: this,
            scale: 1.2,
            ease: 'sine.inout',
            duration: 2000,
            delay: 50,
            repeat: -1,
            yoyo: true
        });
    }
}